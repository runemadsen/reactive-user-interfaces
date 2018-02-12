# Homework

This shows how to solve this week's homework: Implementing the article listing from [The New York Times Business section](https://www.nytimes.com/section/business?action=click&pgtype=Homepage®ion=TopBar&module=HPMiniNav&contentCollection=Business&WT.nav=page).

## A few notes

Keep two things in mind when solving assignments like this.

### Use Components

Beware of large components with a bunch of duplicated HTML tags. In general, **if you have the same exact HTML structure multiple times in your code, this should be split into a component**. As an example, take this code:

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="article">
          <h2>First article</h2>
          <p>Article text!</p>
        </div>
        <div className="article">
          <h2>Second article</h2>
          <p>Article text!</p>
        </div>
        <div className="article">
          <h2>Third article</h2>
          <p>Article text!</p>
        </div>
      </div>
    );
  }
}
```

This should probably be rewritten to something like:

```js
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article heading="First article" description="Article text!" />
        <Article heading="Second article" description="Article text!" />
        <Article heading="Third article" description="Article text!" />
      </div>
    );
  }
}
```

### Don't use too many components

However, you can also use too many components. In general, **if your component has just a single tag and no events, it should not be a component**. As an example, take this code:

```js
import Date from './Date';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Image from './Image';

class Article extends Component {
  render() {
    return (
      <div className="App">
        <Date text="February 12, 2018" />
        <Heading text="First Article" />
        <Paragraph text="Article text!" />
        <Image url="something.jpg" />
      </div>
    );
  }
}
```

This should probably be rewritten to something like this:

```js
class Article extends Component {
  render() {
    return (
      <div className="App">
        <date>{this.props.date}</date>
        <h2>{this.props.heading}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.imageUrl} />
      </div>
    );
  }
}
```
