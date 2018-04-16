# Week 12

## Monday

### Design Systems

React is a great tool for making reusable interface components for the web. The term 'design system' is often used to describe how companies bundle up web components based on their visual language that can be used across the organization. A lot of React-based component libraries exist:

* [Material UI](https://material-ui-next.com/) - A React library based on Google's Material Design principles.
* [Ant Design](https://ant.design/docs/react/introduce) - A React library following the Ant Design specification.
* [Semantic UI](https://react.semantic-ui.com/introduction) - A React library integrating Semantic UI.
* [Shopify Polaris](https://polaris.shopify.com/) - Shopify's Design System

You can use any of these with `create-react-app`.

* **[material-ui](material-ui)**. An app using the Material UI components.

Whenever you're trying to develop new functionality, make sure that no one has already created it. Let's say, as an example, that we want to create an infinite scroll functionality when loading from the Star Wars API. If you google "Scroll to load more React", you'll find the [`infinite-scroll`](https://www.npmjs.com/package/react-infinite-scroller) React component made for this. The following app shows how to use `material-ui` and `infinite-scroll` to make a feed-like scrolling loader.

* **[infinite-fetch](infinite-fetch)**. Load more Star Wars persons when scrolling.
