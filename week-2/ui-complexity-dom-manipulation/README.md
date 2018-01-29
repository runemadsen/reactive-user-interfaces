# UI Complexity - DOM Manipulation

This example demonstrates a very, very simple user interface written in pure JavaScript and some of the problems that arise from this.

## Problems

* **Lots of DOM updates**. Every time a button is clicked, we update the HTML document (also called the DOM) 4 times. This might not seem problematic for such a small UI, but it means that the browser needs to re-render the entire page 4 times. For a larger UI, this is highly problematic.

* **State is only saved in the DOM**. The state of this application boils down to: _Which button did the user select?_. This is not saved in any variable. Instead, we will need to reach into the HTML elements to find the `.active` class to know. This is very problematic for a larger application. For example, for a dynamic list of link, we will need to reach into the HTML to find the `id` of the clicked article, and then construct a link from this.

* **It is very easy to mess things up**. When you load the page, the "Unemployed" button is highlighted. To do this we edit both the HTML (by adding `.active` to the button) and the JS (by hiding the two text fields). If we wanted to highlight "Student" instead on page load, we would need to do a lot of changes to many things in the code. This is not intuitive – even for such a small UI – and for larger codebases it becomes unmanageable.

* **There are ID's everywhere**. In order to know which link was clicked, and to show and hide the input fields, every HTML element has an ID. This seems a bit complex for such a small UI.

* **This code has no structure**. This is just one big document. If we introduced more elements, or even more pages, it would be impossible to know what's going on. All of the things mentioned above would get exponentially worse.
