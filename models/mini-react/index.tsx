function createTextElement(text: string) {
  return {
    type: 'text_element',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function render(ele, container) {
  // purpose: append node to container
  /**
   * step 1: create a node.
   * step 2: cycle ele.props,then render ele.props
   * step 3: append children node to parent node , a tree node finally be appended to container.
   */

  /**
   * dom is like an obj includes type and
   */
  const dom =
    ele.type === 'text_element'
      ? document.createTextNode('')
      : document.createElement(ele.type);
  // step 2: cycle ele.props .
  Object.keys(ele.props)
    .filter((key) => key !== 'children')
    .forEach((pureKey) => {
      dom[pureKey] = ele.props[pureKey];
    });
  ele.props.children.forEach((child) => render(child, dom));
  // step 3: append node to container.
  container.appendChild(dom);
}

const MiniReact = {
  render,
  createElement,
};

const element = (
  <div id="root" style="background: pink">
    <a onClick={() => {}}>click</a>
    <b />
    <h1>Hello Mini React from 77</h1>
  </div>
);

const container = document.getElementById('root');
MiniReact.render(element, container);
