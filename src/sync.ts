// 当前滚动区域
type ScrollAreaType = 'preview' | 'editor';

class SyncScroll {
  // 位置信息
  public editorElementList: Array<number> = [];
  public previewElementList: Array<number> = [];
  // 当前滚动区域
  public currentScrollArea: ScrollAreaType = 'editor';

  preview: any;
  editorView: any;

  constructor(editorView: any, preview: any) {
    this.preview = preview;
    this.editorView = editorView;
  }

  // 同步markdown预览滚动条
  public syncPreview(treeData: any) {
    console.log('treeData: ', treeData);
    try {
      if (this.currentScrollArea !== 'editor') return;
      const { scrollRef, contentRef } = this.preview;
      if (!contentRef || !scrollRef || !this.editorView) return;
      const previewChildNodes = Array.from(contentRef.childNodes || []);
      // 内容还没有渲染
      if (previewChildNodes.length === 0) return;
      this.computedPosition(contentRef, treeData);
      const editorScrollTop = this.editorView.scrollDOM.scrollTop;
      // 找出当前滚动到元素索引
      let scrollElementIndex = 0;
      // 已经滚动到顶部 5是误差
      if (editorScrollTop <= 5) {
        scrollRef.scrollTop = 0;
        return;
      }

      for (let i = 0; i < this.editorElementList.length; i++) {
        if (editorScrollTop < this.editorElementList[i]) {
          // 当前元素的offsetTop大于滚动的距离，相当于当前滚动到了前一个元素上
          scrollElementIndex = i - 1;
          break;
        }
      }
      // 已经滚动到底部
      if (
        editorScrollTop + 5 >=
        this.editorView.scrollDOM.scrollHeight - this.editorView.scrollDOM.clientHeight
      ) {
        scrollRef.scrollTop = scrollRef.scrollHeight - scrollRef.clientHeight;
        return;
      }
      if (scrollElementIndex >= 0) {
        // 设置预览区域的滚动距离为对应元素的offsetTop
        const ratio =
          (editorScrollTop - this.editorElementList[scrollElementIndex]) /
          (this.editorElementList[scrollElementIndex + 1] -
            this.editorElementList[scrollElementIndex]);
        const previewScrollTop =
          ratio *
          (this.previewElementList[scrollElementIndex + 1] -
            this.previewElementList[scrollElementIndex]) +
          this.previewElementList[scrollElementIndex];
        scrollRef.scrollTop = previewScrollTop;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  // 同步编辑器滚动条
  public syncEditorScroll(treeData: any) {
    try {
      if (this.currentScrollArea !== 'preview') return;
      const { scrollRef, contentRef } = this.preview;
      if (!this.editorView || !scrollRef || !contentRef) return;
      const previewChildNodes = Array.from(contentRef.childNodes || []);
      // 内容还没有渲染
      if (previewChildNodes.length === 0) return;
      this.computedPosition(contentRef, treeData);
      const previewScrollTop = scrollRef.scrollTop;
      // 找出当前滚动到元素索引
      let scrollElementIndex = 0;

      // 已经滚动到顶部 5是误差
      if (previewScrollTop <= 5) {
        this.editorView.scrollDOM.scrollTop = 0;
        return;
      }
      for (let i = 0; i < this.previewElementList.length; i++) {
        if (previewScrollTop < this.previewElementList[i]) {
          scrollElementIndex = i - 1;
          break;
        }
      }
      // 已经滚动到底部. 这里的5标识误差，可改动
      if (
        previewScrollTop + 5 >=
        scrollRef.scrollHeight - scrollRef.clientHeight
      ) {
        const editorScrollInfo = this.editorView.scrollDOM;
        this.editorView.scrollDOM.scrollTop =
          editorScrollInfo.scrollHeight - editorScrollInfo.clientHeight;
        return;
      }
      if (scrollElementIndex >= 0) {
        // 设置预览区域的滚动距离为对应元素的offsetTop
        const ratio =
          (previewScrollTop - this.previewElementList[scrollElementIndex]) /
          (this.previewElementList[scrollElementIndex + 1] -
            this.previewElementList[scrollElementIndex]);
        const editorScrollTop =
          ratio *
          (this.editorElementList[scrollElementIndex + 1] -
            this.editorElementList[scrollElementIndex]) +
          this.editorElementList[scrollElementIndex];
        this.editorView.scrollDOM.scrollTop = editorScrollTop;
      }
    } catch (error) {
      console.error('error: ', error);
    }
  }

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
}

export default SyncScroll;
