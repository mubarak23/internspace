import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import AdminScreen from "./screens/AdminScreen";
import AddInternship from "./screens/AddInternship";
import InternshipScreen from "./screens/InternshipScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/internship/:id" component={InternshipScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/addinternship" component={AddInternship} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
