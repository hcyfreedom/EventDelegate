1、事件流：单击某个按钮，会认为单击事件不仅发生在按钮上，也发生在按钮的容器元素上，甚至是整个页面。就好像一组同心圆，手指放在圆心，但是手指指的不是一个圆，而是所有圆。
   事件流描述的是从页面中接收事件的顺序。
2、IE的事件流是事件冒泡流，事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。
   w3c标准的事件流是捕获流，不太具体的节点应该更早接收到事件，然后最具体的节点应该是最后接收到事件。

3、从EventUtil.js可以看出两种事件流的差别和兼容办法。