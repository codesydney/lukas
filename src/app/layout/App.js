import React from "react";
import NavBar from "../../features/nav/NavBar";
import Contact from "../../features/contact/Contact";
import SignIn from "../../features/SignIn";
import Form from "../../app/common/Form";

function App() {
  return (
    <React.Fragment className="App" maxWidth="lg" style={{ backgroundColor: 'red'}}>
      <NavBar />
      <Contact />
    </React.Fragment>
  );
}

export default App;
