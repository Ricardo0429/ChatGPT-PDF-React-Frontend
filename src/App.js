import { 
  Route,
  Routes,
  // HashRouter,
  BrowserRouter,
  Outlet,
} from 'react-router-dom';
import { Fragment } from 'react';

import './App.css';


import Welcome from './components/Welcome/Welcome';
import PdfChat from './components/PdfChat';
import StartPage from './components/Auth';
import Signup from './components/Auth/Auth/Signup';
import Signin from './components/Auth/Auth/Signin';
import UploadPDF from './components/Upload_pdf/UploadPDF';
import Navbar from './components/Layout/Navbar/Navbar';
import Welcome1 from './components/Welcome/Welcome1';

function App() {
  return (
    <BrowserRouter>
      <div className="App w-full h-full">
        <Routes>
          {/* <Route exact path='/' element={<StartPage />} /> */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/demo' element={<PdfChat />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome1" element={<Welcome1 />} />
        </Routes>

        <Routes>
          <Route element={(
            <>
              <Navbar />
              <Outlet />
            </>
          )}>
            <Route path="/upload" element={<UploadPDF />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
