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