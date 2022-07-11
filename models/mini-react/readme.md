# 手写实现一个 react：

参考：「https://pomb.us/build-your-own-react/」
Step I: The createElement Function 「change ele to Obj」
Step II: The render Function 「change the Dom / Update the Dom」「purpose: append node to container」
Step III: Concurrent Mode
Step IV: Fibers
Step V: Render and Commit Phases
Step VI: Reconciliation
Step VII: Function Components
Step VIII: Hooks

element for React elements, node for Dom elements.

const element = <h1 title="dom">Hello<h1>; // React elements
const container = document.getElementById('');
ReactDom.render(element, container);

# createElement:

create an obj
「also can be called a node, which includes type and props and etc.」
「transformed from an React element」
{
"type": 'h1',
"props": {
...
"children": []
}
}

judge node type: text node or regular node.

after create element, append it to the container.
