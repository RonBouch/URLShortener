// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminPage, NewURL } from './screens'
import { Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/add" element={<NewURL />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
