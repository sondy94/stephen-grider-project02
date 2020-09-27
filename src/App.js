import React from "react";

// import components
import PeopleList from "./PeopleList";

export default function App() {
  return (
    <div className="App">
      <PeopleList name="Sam" blog="Nice blog post" />
      <PeopleList name="Rachel" blog="Love blogging" />
    </div>
  );
}
