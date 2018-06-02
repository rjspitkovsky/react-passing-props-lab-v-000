import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  handleChange = event => {
    this.setState({currentFilter: event})
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(fruit => this.setState({ fruit }));
      }


  render() {
    return (
      <Filter filters={this.state.filters} />
    )
  }
}

export default App;
