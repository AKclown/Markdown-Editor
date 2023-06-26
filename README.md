## 简介
- 很多人也许不太了解[CodeMirror](https://codemirror.net/)，如下是它的简介`CodeMirror是Web的代码编辑器组件。它可以在网站中用于实现文本输入字段，并支持许多编辑功能，并且具有丰富的编程接口以允许进一步扩展`其本质跟我们使用的VScode核心Monaco是一样。这里也推荐大家使用V6版本而不是V5，V6的`插件化体系`特别方便扩展而且能力更加强大
- markdown语法解析采用[unified](https://www.npmjs.com/package/unified)第三库来实现。markdow解析库千千万为什么选择它呢? 因为他是插件化体系方便后续可扩展性  

### 功能点
1. 实现一个支持markdown语法的编辑器
2. markdown预览功能实现（`支持数学算法、本地图片、代码高亮...`）
3. 编辑器区域与预览区域的滚动同步(`结合AST通的pos来实现, 不能直接通过滚动条距离这样误差特别大`)

### 编辑器实现
首先安装必要的 CodeMirror依赖包`@codemirror/view`|`@codemirror/state`|`@codemirror/language`|`@codemirror/lang-markdown`|`@codemirror/theme-one-dark`。@codemirror/lang-markdown语言依赖包用于编辑器支持markdown的语法  
PS: 这里使用[react](https://react.dev/)+[TS](https://www.typescriptlang.org/)不熟悉语法的同学自行查看，这里强烈推荐一篇高阶[TS类型体操文章](https://juejin.cn/post/6994102811218673700)
```ts
import { useEffect } from 'react';
import { markdown } from '@codemirror/lang-markdown';
import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';
import { syntaxHighlighting,defaultHighlightStyle } from '@codemirror/language';

const [docContent, setDocContent] = useState('');
useEffect(() => {
    let view = new EditorView({
      state: EditorState.create({
        doc: docContent,  // 编辑器文本
        extensions: [
          lineNumbers({}), // 显示行号
          EditorView.lineWrapping, // 自动换行
          syntaxHighlighting(defaultHighlightStyle, { //语法高亮
            fallback: true
          }),
          markdown({ addKeymap: false }), // 支持markdown
          oneDark, // 给CodeMirror添加暗黑主题
          EditorView.updateListener.of((view: ViewUpdate) => { // 监听编辑器内容的改动
            if (view.docChanged) {
              const doc = view.state.doc;
              const value = doc.toString();
              setDocContent(value);
            }
          })
        ]
      }),
      parent: document.getElementById("editor")!  // 挂载节点
    });
    return () => {
      view.destroy();
    };
  }, []);
  
// 视图
<div id="App">
  <div id='editor'></div>
  <div id='markdown'></div>
</div>
```
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de054b4936ef45d88ad9ca05f51d1eb6~tplv-k3u1fbpfcp-watermark.image?)
通过如上代码就实现了一个简易版本的web编辑器

### MarkDown预览功能
第一步: 在讲解语法解析之前，我们先通过`@emotion/styled`库来创建markdown的基础样式的div，样式从何而来呢？当然是从vscode偷过来了(正规商业途径请勿这样子操作)  `Help -> toggle Developer Tool`打开Vscode的控制台
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8ffdc38206d40fda05d80372286606a~tplv-k3u1fbpfcp-watermark.image?)
```ts
import styled from '@emotion/styled';
// 每一个div代表一种 特殊功能的样式，方便后续维护
export const BasicStyleWrap = styled.div``  // 基础样式类型
export const MathStyleWrap = styled.div``  // 数学公式样式
export const CodeStyleWrap = styled.div``  // 代码样式样式
```
第二步: 通过`unified+其他插件`来进行markdown语法转换成HTML。然后通过dangerouslySetInnerHTML挂载即可实现markdown预览功能（`包选型，可扩展很关键`）
```ts
// 各个包的含义这里不在阐述，直接看npm描述即可。本质就是解析一些语法
import remarkParse from 'remark-parse';
...
unified()
    .use(remarkParse)
    ...
    .process(docContent) //  docContent为编辑器文本
    .then(
      (file) => {
        setShowContent(String(file));
      },
      (error) => {
        console.error('markdown语法解析失败,失败原因:', error);
      },
    );
```
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/837cd53a38094f04a263fd3acc09d2f2~tplv-k3u1fbpfcp-watermark.image?)
经过如上两步骤实现了`markdown语法解析成HTML`|`样式处理`

### 滚动同步
**第一步:** 编写一个`unified插件`用来获取AST的数据。AST包含了元素的数据以及其对应的pos位置。这个`pos位置`就是我们后续需要使用到的。
```ts
// 该插件使用通过 unified().use(customPlugin)即可
 const customPlugin =
    (): void | Transformer<ASTtreeType> => (tree: ASTtreeType) => {
      console.log('tree: ', tree);
      const astNodes = tree.children || [];
      const filterAstNodes =
        astNodes.filter((child: any) => child.type === 'element') || [];
        setAstNode(filterAstNodes)
    };
```
tree的数据结构，过滤掉text只保留element类型的数据。 这里推荐[astexplorer](https://astexplorer.net/#/gist/09113e146fa04044e99f8a98434a01af/80bef2b9068991f7a8e4f113ff824f56e3292253)在线将语法解析成AST树
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fddf028f93d341ada76c0d8430a3d086~tplv-k3u1fbpfcp-watermark.image?)

**第二步:** 接下来封装一个`SyncScroll类`用来提供滚动比较的工具类型，其包含了`syncPreview` | `syncEditor`| `computedPosition` 这三个方法，用于`同步可视区` | `同步编辑区` | `计算位置`。这里不在一一细说。`关键在于: 获取到HTML内容元素的pos与编辑器区域的pos建立映射关系。在滚动时进行同步可以`  
    1. 首先获取到HTML的所有子节点，通过contentRef.childNodes方式  
    2. 排除子节点nodeType不是1以及是META的节点  
    3. 通过遍历customPlugin插件获取AST的数据来获取到编辑器与预览区域的元素映射关系。从而在滚动的     时候进行联动。具体看如下代码是实现
```
  // 计算位置
  public computedPosition(
    contentRef: any,
    treeData: Array<Record<string, unknown>>,
  ) {
    const previewChildNodes = Array.from(contentRef.childNodes || []);
    const filterNodes: Array<any> = previewChildNodes.filter(
      (element: any) => element.nodeType === 1 && element.nodeName !== 'META',
    );
    // 清空数组
    this.editorElementList = [];
    this.previewElementList = [];
    treeData.forEach((child: any, index: number) => {
      const offsetTop = this.editorView?.lineBlockAt(child.position.start.offset); // 设为local返回的坐标是相对于编辑器本身的，其他还有两个可选项：window、page
      // 保存元素的位置信息
      this.editorElementList.push(offsetTop?.top ?? 0);
      this.previewElementList.push(filterNodes[index]?.offsetTop ?? 0); // 预览区域的容器元素previewArea需要设置定位
    });
  }
```
**第三步:** 编写codemirror滚动插件监听编辑器滚动,以及检测光标进入编辑器区域设置当前聚焦区域

```ts
const scrollPlugin = useCallback(() => {
    return EditorView.domEventHandlers({
      scroll() {
        instance.current.syncPreview(AstNode);
      },
      mouseenter() {
        instance.current.currentScrollArea = 'editor';
      },
    })
  }, [AstNode])
```
**第四步:** 预览区域绑定对应的事件
```ts
  // 设置滚动标识
  const setScrollArea = () => {
    instance.current.currentScrollArea = 'preview';
  };

  // 滚动事件派发同步
  const onPreviewScroll = () => {
    instance.current.syncEditorScroll(AstNode);
  };
```
最终效果如下: 
![b.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a77a585b7212471ca87fd97dfdbf399c~tplv-k3u1fbpfcp-watermark.image?)

### 总结
经过上面的步骤，总算实现了一款简易版的markdown编辑器。其功能包含了`编辑器创建`、`markdown预览功能`、`编辑器与预览区域滚动联动`。有兴趣的同学可以在[github](https://github.com/AKclown/Markdown-Editor)上查看完整代码。  

PS: 快去实现你的编辑器吧,累死我了.jpg

