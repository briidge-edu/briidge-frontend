import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StudentSignup from "./pages/StudentSignup";
import TutorSignup from "./pages/TutorSignup";
import PlansPage from "./pages/PlansPage";
import TutorsPage from "./pages/TutorsPage";
import SocialNetworkPage from "./pages/SocialNetworkPage";
import { MuiThemeProvider } from "@material-ui/core";
import briidgeTheme from "./themes";
import StudentDashboard from "./pages/StudentDashboard";
import BookingSummary from "./pages/BookingSummary";
import BookingConfirmation from "./pages/BookingConfirmation";
import LessonBooking from "./pages/LessonBooking";
import TutorDashboard from "./pages/TutorDashboard";
import StudentSessions from "./pages/StudentSessions";

function App() {
  const [student, setStudent] = useState(dummyStudent);
  const [tutor, setTutor] = useState(dummyTutor);

  return (
    <MuiThemeProvider theme={briidgeTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/studentsignup">
            <StudentSignup setStudent={setStudent} />
          </Route>
          <Route path="/tutorsignup">
            <TutorSignup setTutor={setTutor}/>
          </Route>
          <Route path="/planspage">
            <PlansPage />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/tutors">
            <TutorsPage />
          </Route>
          <Route path="/socialnetworkpage">
            <SocialNetworkPage />
          </Route>
          <Route path="/studentdashboard">
            <StudentDashboard student={student} />
          </Route>
          <Route path="/bookingsummary">
            <BookingSummary student={student} />
          </Route>
          <Route path="/bookingconfirmation">
            <BookingConfirmation student={student} />
          </Route>
          <Route path="/lessonbooking">
            <LessonBooking student={student} />
          </Route>
          <Route path="/sessions">
            <StudentSessions tutor={tutor}/>
          </Route>
          <Route path="/tutordashboard">
            <TutorDashboard tutor={tutor}/>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

const dummyStudent = {
  email: "johndoe@gmail.com",
  password: "johndoe",
  password_confirmation: "johndoe",
  name: "John Doe",
  gender: "Male",
  education: "Secondary",
  languages: ["English", "Mandarin"],
  locations: ["Tampines", "Pasir Ris", "Bedok"],
  lessonMode: "Face-to-Face",
  subjects: ["Physics", "Chemistry"],
  priceRange: "30-50",
};

const dummyTutor = {
  ...dummyStudent,
  bio: "I am a motivated tutor always taking an extra step to improve my students' learning experiences.",
  priceRange: 40,
}
