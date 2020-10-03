import React from 'react';

class ThingForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        thingType: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      let newName = event.target.value;
      this.setState(({
        name: newName
      }))
    }
  
    handleSubmit(event){
      event.preventDefault();
      this.props.onSnackCreate(this.state)
    }
  
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange}/>
          </label>
        </form>
      )
    }
  }
  

export default ThingForm;