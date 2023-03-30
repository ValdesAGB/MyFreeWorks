import React from 'react';
import NotFound from '../pages/404';
import Graphisme from '../pages/Graphisme';
import Home from '../pages/Home';
import Peinture from '../pages/Peinture';
import Photographie from '../pages/Photographie';
import Poterie from '../pages/Poterie';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, CheckPasswordProvider } from '../untils/context';
//import { routeElement } from '../data';

function App() {
  return (
    <React.Fragment>
      <CheckPasswordProvider>
        <AuthProvider>
          <Header />
          <Menu />
          <Routes>
            {/*{routeElement.map(({ element, path }) => (
          <Route id={`${element}-0`} path={path} element={<element />} />
        ))}*/}
            <Route path="/" element={<Home />} />
            <Route path="/graphisme" element={<Graphisme />} />
            <Route path="/peinture" element={<Peinture />} />
            <Route path="/poterie" element={<Poterie />} />
            <Route path="/photographie" element={<Photographie />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </CheckPasswordProvider>
    </React.Fragment>
  );
}

export default App;
