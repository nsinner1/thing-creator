# React 

## Lab: 38 - React II

Create a ReactJS web application that displays a list of things, and allows creating new things.

*Author: Natalie Sinner and Roman Sydoruk*

----

## Description
Create a web app with a top level App component
App component should…
have thingList data stored in its state.
render 3 nested components
Header
ThingList
Footer
thingList should be an array of plain old JavaScript objects (aka POJO) that represent a thing that has a name.
E.g. {name:’rake’}
Header component should…
receive a things count as a prop
display a heading
display the current count of things
ThingList component should…
receive a list of things as a prop
receive a function to call when a new thing is created.
Display an unordered list composed of ThingItem components
Display a form that allows creation of a thing
When user creates new thing the rest of application should update appropriately.
Header thing count should update
ThingList should add a new ThingItem to end of list
ThingItem component should…
receive a name as a prop
Footer component should…
Display some placeholder text (e.g. lorem ipsum)

---

### Getting Started
Clone this repository to your local machine.

```
$ git clone [https://github.com/nsinner1/thing-creator]
```

### To run the program from VS Code:
Select ```File``` -> ```Open``` -> ```thing-creator```

Next navigate to the location you cloned the Repository.

Double click on the ```thing-creator/src``` directory.

Then select and open ```App.js```

------------------------------
For more information on Markdown: https://www.markdownguide.org/cheat-sheet