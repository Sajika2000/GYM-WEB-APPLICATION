
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router ,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WorkoutSessions from "./component/WorkoutSessions";
import Gallery from "./component/Gallery";
import Pricing from "./component/Pricing";
import Contact from "./component/Contact";
import BMICalculator from "./component/BMICalculator";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp"
import  LogIn  from "./component/Login";

const App = () => {
  return (
    <Router>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;