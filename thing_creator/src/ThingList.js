import React from 'react';
import ThingForm from './ThingForm';
import ThingItem from './ThingItem';


class ThingList extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <>
            <h2>Things List</h2>
            <ul>
                {this.props.things.map(thing => <Thing item={thing} key={thing.id}/>)}
                {/* console.log ({this.props.things.length}) */}
            </ul>
            {/* {this.props.onThingCreate()} */}
            <ThingForm onThingCreate={this.props.onThingCreate}/>
            <button>Add New Snack</button>
            </>
        )
    }
}

function Thing(props) {
    return <li>A thing I have access to is: {props.item.name}</li>
  }

export default ThingList;