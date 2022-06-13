// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminPage, NewURL } from './screens'
import { Header, LinkRedirect } from './components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect } from 'react';

const RouteWithHeader = ["/admin", "/admin/add"];

function App() {
  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname == '/') {
      window.location.pathname = '/admin';
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {RouteWithHeader.includes(pathname) && <Header />}
        <ToastContainer position='top-center' />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add" element={<NewURL />} />
          <Route path="/:shortURL" element={<LinkRedirect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
