import * as React from "react";
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
export default App;