import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ThingList from './ThingList';
import ThingForm from './ThingForm';
import ThingItem from './ThingItem';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      things: [
        {
          id: 1,
          name: 'cat',
          type: 'animal',
        },
        {
          id: 2,
          name: 'dog',
          type: 'animal',
        }
      ],
      popularThing: 'Nothing yet'
    }
  }

  render() {
    return (
      <div className="App">
        <Header thing={this.state.thing}/>
        <main>
          <ThingList thing={this.state.thing} onThingCreate={(thing) => alert(thing)}/>
        </main>
        <Footer footerText="This is the new Footer"/>
      </div>
    )
  }
}

export default App;
