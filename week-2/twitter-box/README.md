# Twitter Profile Box

A few things about this implementation.

* **All dynamic data is in the `App` component**. This means that we can change this profile do a different user simply by changing the props in the main component. This makes it easy to feed the data from an API.

* **Every component has its own CSS file**. This makes it easy to find the styles related to the component. No longer do we need to search through hundreds of lines of CSS.

* **The markup is independent of styles**. The counter numbers are as big as the user name. However, the user name is `<h2>` and the numbers are `<span>`. If google indexed this page, this would be a proper markup.
