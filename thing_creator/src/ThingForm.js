import React from 'react';
import ThingItem from './ThingItem';
import { v4 as uuid } from 'uuid';

class ThingForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      this.setState(({
        name: event.target.value
      }))
    }
  
    handleSubmit(event){
      event.preventDefault();
      this.props.onCreated({name: this.state.name})
      this.setState({
        id: uuid(),
        name: ''
      })
    }

    // createThingHandler(thing){
    //   this.setState({
    //     things: this.state.things.concat(thing)
    //   })
    // }
  
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input value = {this.state.name} placeholder = " " type="text" onChange={this.handleChange}/>
            <button>Add</button>
          </label>
        </form>
      )
    }
  }
  

export default ThingForm;