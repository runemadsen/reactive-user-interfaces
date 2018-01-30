# JSX

This React app shows some of the techniques you can use in JSX to render HTML.

* **You can only return one root element from JSX**. This is [demonstrated here](src/App.js#L15), but React will also complain if you have multiple root elements next to each other.

* **Using variables in JSX**. Simply wrap your variable in `{}` and it will be inserted, as [demonstrated here](src/App.js#L16).

* **`null` or `undefined` will insert nothing**. This can be used for conditional rendering, as [demonstrated here](src/App.js#L15-L12).

* **Inline conditional rendering**. If your expression between `{}` results in false, nothing will be inserted. This is [demonstrated here](src/App.js#L18-L20).

* **Props referring to real HTML attributes need to be camelcase**. This is [demonstrated here](src/App.js#L15), but React will also give you a nice error message if you mess it up.
