# UI Complexity - DOM Manipulation

To fix some of the problems from the [DOM Manipulation example](../ui-complexity-dom-manipulation), we can move our HTML rendering into JavaScript, which gives us the added bonus of having the state in a `state` variable. This example shows the same UI, but with a `state` object that is used to render the HTML elements. Every time a button is clicked, the page is cleared and the HTML elements are created again.

## Benefits

* **No more ID's**. Because the HTML is generated in JavaScript, we can assign event listeners to the elements without the use of ID's. We no longer have to reach into the HTML to figure out which element was clicked.

## Problems

* **We are updating the DOM even more**. This code changes the DOM more than 5 times on every click. Like the former example, this is not great.

* **Input field loses value**. Try to type something in an input field, an hide/show it by clicking other buttons. Your value is lost. This is because we clear the HTML on every click, so we lose the values put into the input field.

* **Events need to be reset every time**. Every time we click a button, we have to assign event listeners to the new elements. This is not really a great way of doing it.

* **It is a bit obscure to create HTML elements in JS**. This code is longer and much harder to read.

* **Order of elements becomes hard**. I had to move the `input` HTML creation under `appendChild` for the button to make it show up below. This introduces another DOM re-render because I'm also adding a class to the button in the same `if` statement.
