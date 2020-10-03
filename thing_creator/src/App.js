import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ThingList from './ThingList';
import ThingForm from './ThingForm';
import ThingItem from './ThingItem';
import { v4 as uuid } from 'uuid';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      things: [
        {
          id: uuid(),
          name: 'cat',
          type: 'animal',
        },
        {
          id: uuid(),
          name: 'dog',
          type: 'animal',
        }
      ],
      popularThing: 'Nothing yet'
    }
    this.createThingHandler = this.createThingHandler.bind(this);
  }

  createThingHandler(thing){
    this.setState({
      things: this.state.things.concat(thing)
    })
  }

  render() {
    return (
      <div className="App">
        <Header thing={this.state.thing}/>
        <main>
          <ThingList things={this.state.things} onCreated={this.createThingHandler}/>
        </main>
        <Footer footerText="This is the new Footer"/>
      </div>
    )
  }
}

export default App;
