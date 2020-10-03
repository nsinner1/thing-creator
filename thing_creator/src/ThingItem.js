import React from 'react';

function ThingItem(props) {
    return (
    <li>A thing I have access to is: {props.item.name}</li>
    )
  }


export default ThingItem;