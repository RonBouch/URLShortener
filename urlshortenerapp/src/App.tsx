// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminPage, AddEdit, About, ViewDetails } from './screens'
import { Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<ViewDetails />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
