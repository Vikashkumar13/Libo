import React from "react";
import Home from "./screens/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Books from "./screens/Books";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./screens/Contact";
import BookDetails from "./screens/BookDetails";

function App() {

  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={authUser ? <Books /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookDetails" element={<BookDetails />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
