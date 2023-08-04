import { LegacyRef, useEffect, useState, Dispatch, SetStateAction, useCallback, useRef } from 'react';
import { markdown } from '@codemirror/lang-markdown';
import { EditorState } from "@codemirror/state";
import { EditorView, ViewUpdate, lineNumbers } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
import { unified, Transformer } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeDocument from 'rehype-document';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { highlightOptions } from './highlight';
import './App.css';
import { BasicStyleWrap, CodeStyleWrap, MathStyleWrap } from './basic';
import SyncScroll from './sync';
import throttle from 'lodash.throttle';


interface ASTtreeType {
  type: string;
  position: any;
  children: Array<Record<string, unknown>>;
}

// ref回调动态更新
export function useClientRect<T>(
  init: T,
): [T, (node: T) => void, Dispatch<SetStateAction<T>>] {
  const [rect, setRect] = useState<T>(init);
  const ref = useCallback((node: T) => {
    if (node !== null) {
      setRect(node);
    }
  }, []);
  return [rect, ref, setRect];
}


function App() {
  const [docContent, setDocContent] = useState('');
  const [showContent, setShowContent] = useState('');
  // const [AstNode, setAstNode] = useState<Record<string, unknown>[]>([]);
  const AstNode = useRef<any>(null);
  const instance = useRef<any>(null);
  const [editorView, setEditorView] = useState<any>(null);

  // ref回调
  const [rectScrollRef, scrollRef] = useClientRect<
    LegacyRef<HTMLDivElement> | undefined
  >(undefined);
  const [rectContentRef, contentRef] = useClientRect<
    LegacyRef<HTMLDivElement> | undefined
  >(undefined);


  useEffect(() => {
    instance.current = new SyncScroll(editorView, { scrollRef: rectScrollRef, contentRef: rectContentRef })
  }, [rectScrollRef, rectContentRef, editorView]);

  // *********************
  // Editor
  // *********************
  const scrollPlugin = useCallback(() => {
    return EditorView.domEventHandlers({
      scroll() {
        instance.current.syncPreview(AstNode.current);
      },
      mouseenter() {
        instance.current.currentScrollArea = 'editor';
      },
    })
  }, [])


  useEffect(() => {
    let view = new EditorView({
      state: EditorState.create({
        doc: docContent,
        extensions: [
          lineNumbers({}),
          EditorView.lineWrapping,
          syntaxHighlighting(defaultHighlightStyle, {
            fallback: true
          }),
          markdown({ addKeymap: false }),
          oneDark,
          EditorView.updateListener.of((view: ViewUpdate) => {
            if (view.docChanged) {
              const doc = view.state.doc;
              const value = doc.toString();
              setDocContent(value);
            }
          }),
          scrollPlugin()
        ]
      }),
      parent: document.getElementById("editor")!
    });
    setEditorView(view);
    return () => {
      view.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPlugin]);


  useEffect(() => {
    const currentValue = editorView ? editorView.state.doc.toString() : '';
    if (docContent && docContent !== currentValue) {
      editorView.dispatch({
        changes: { from: 0, to: currentValue.length, insert: docContent || '' },
      });
    }
  }, [docContent, editorView]);

  // *********************
  // MarkDown
  // *********************

  useEffect(() => {
    const timer = setTimeout(() => {
      mdToHTML();
    }, 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docContent])

  const mdToHTML = () => {
    unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight, highlightOptions)
      .use(customPlugin) //  Our plug-in is remarkRehype After the plug-in, use
      .use(rehypeKatex)
      .use(rehypeDocument)
      .use(rehypeStringify)
      .process(docContent) //  docContent为编辑器文本
      .then(
        (file) => {
          setShowContent(String(file));
        },
        (error) => {
          console.error('markdown语法解析失败,失败原因:', error);
        },
      );
  }

  const customPlugin =
    (): void | Transformer<ASTtreeType> => (tree: ASTtreeType) => {
      const astNodes = tree.children || [];
      const filterAstNodes =
        astNodes.filter((child: any) => child.type === 'element') || [];
      AstNode.current = filterAstNodes
    };

  // 设置滚动标识
  const setScrollArea = () => {
    instance.current.currentScrollArea = 'preview';
  };

  // 滚动事件派发同步
  const onPreviewScroll = throttle(() => {
      instance.current.syncEditorScroll(AstNode.current);
    }, 100);
  // *********************
  // View
  // *********************

  return (
    <div id="App">
      <div id='editor'></div>
      <BasicStyleWrap
        ref={scrollRef as LegacyRef<HTMLDivElement> | undefined}
        onScroll={onPreviewScroll}
        onMouseEnter={setScrollArea}
      >
        <MathStyleWrap>
          <CodeStyleWrap>
            <div
              ref={contentRef as LegacyRef<HTMLDivElement> | undefined}
              dangerouslySetInnerHTML={{ __html: showContent }}
            ></div>
          </CodeStyleWrap>
        </MathStyleWrap>
      </BasicStyleWrap>
    </div>
  );
}

export default App;
