import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./translate";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Login from "./pages/Login";
import Test from "./pages/test";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.GOOGLE_CLIENT_ID,
        scope: ""
      })
    };
    gapi.load("client:auth2", start);
  });

  return (
    <div>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
