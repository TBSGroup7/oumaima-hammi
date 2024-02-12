/*import * as React from "react";
const welcome={
  greeting:"hey",
  title:"react",
};
function App() {
  return (
    <div>
      <h1> {welcome.greeting}{welcome.title}</h1>
      <label htmlFor="search">search:</label>
      <input id="search" type="next"/>

    </div>
    
  );
}
export default App;*/


import * as React from "react";
const list=[
  {
    title:"React",
    url:"https://react.js.org/",
    author:"Jordan Wakle",
    num_comments:3,
    points:4,
    objectID:0,
  },
  {
    title:"Redux",
    url:"https://react.js.org/",
    author:"Dan Abramov, Andrew Clark",
    num_comments:2,
    points:5,
    objectID:1,
  },
];
function App(){
  return(
    <div>
      <h1> My hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>
      <hr/>
      <ul>
        {list.map(function(item){
          return ( 
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
          );
        })}
      </ul>
    </div>
    );
}
export default App