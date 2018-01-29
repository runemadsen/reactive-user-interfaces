# UI Complexity - DOM Manipulation

To fix some of the problems from the [DOM Manipulation example](../ui-complexity-dom-manipulation), some frameworks started moving more and more of their HTML generation into their JS. This example shows the same UI, but with a `state` object that is used to render the HTML elements. Every time a button is clicked, the page is cleared and the HTML elements are created again.

## Benefits

* No more ID's

* State is moved from HTML to JS into the `state` variable

## Problems

* **We are still updating the DOM a lot**.

* **Input field loses value**. Try to type something in the input field. YOU HAVE TO BE VERY SMART.

* **Events need to be reset every time**.

* **It is a bit obscure to create HTML elements in JS**

* **Order of elements becomes hard** input vs button
