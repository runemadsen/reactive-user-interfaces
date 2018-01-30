# React Components

This code example demonstrates the basic functionality of React components. The following paragraphs talk about these concepts and link directly to the code where this concept is demonstrated.

* **Functions vs. Classes**. A React component can either be written as a [simple function](src/HelloFunction.js) or as a [ES6 class](src/HelloClass.js).

* **Components accept props**. These are called `props` for functional components or `this.props` for classes. See how [`App.js` uses different props](src/App.js#L11-L15) for the same component.

* **Components can have other components**. A React components can render other components, which makes it possible to make a nice hierarchy for your user interface. See the [HelloContainer](src/HelloContainer.js) class.
