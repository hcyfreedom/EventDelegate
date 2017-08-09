// 方法调用
// element：传入的元素； type:传入事件类型； handler: 事件处理程序
var EventUtil = {
    addHandler : function (element, type, handler) {
        if (element.addEventListener) { // 检查传入的元素是否存在DOM2级方法
            element.addEventListener(type, handler, false); // false 不支持捕获，表示冒泡阶段
        } else if (element.attachEvent) { // 存在的是IE的方法
            element.attachEvent("on" + type, handler);
        } else { // DOM0 级方法，一般不会执行到这里
            element["on" + type] = handler;
        }
    },
    removeHandler : function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent : function (event) {
        return event ? event : window.event;
    },
    getTarget : function (event) {
        return event.target || event.srcElement;
    },
    preventDefault : function (event) { // 取消事件的默认行为，如果cancelable是true，则可以用这个方法
        if (event.preventDefault) {
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },
    stopPropagation : function (event) { // 取消事件的进一步冒泡或者捕获，如果bubbles是true，可以使用
        if (event.stopPropagation) {
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    }
};