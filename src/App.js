/* import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
    <AlertProvider>
      <main>
      <Header />
      <Landing isDarkBackground={true} backgroundColor="blue.700" />
      <Projects />
      <ContactForm />
      <Footer />
      <Alert />
    </main>
    </AlertProvider>
    </ChakraProvider>
  );
}

export default App; */
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import Nav from "./components/Nav";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
 

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
        <div className="app-container">
          <Header />
          <Nav />
          <main className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/booking" element={<BookingForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Alert />
        </Router>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;