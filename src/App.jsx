import React from 'react';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Settings from './Components/Settings';
import { Routes, Route } from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </>
    );
  }
}