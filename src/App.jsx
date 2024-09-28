import { useState } from 'react';
import Hero from './pages/Hero';
import About1 from './pages/Aboutus';
import Services from './pages/Services';
import Footer from './Utils/Footer';
import Navigation from './Utils/Navigation';
import Team from './Utils/Team';

import Help from './help/Help.jsx';
import { Route, Routes } from 'react-router-dom';
import DeleveryDetail from './pages/DeleveryDetail.jsx';
import Contact from './pages/Contact.jsx';
import Coustermersup from './help/Coustermersup.jsx';
import TermsC from './help/TermsC.jsx';
import PrivacyPolicy from './help/PrivacyPolicy.jsx';
import NotFound from './help/NotFound.jsx';



function App() {
  const [count, setCount] = useState(0);

  return (
  
     
      <Routes>
        
        <Route path="/" element={<Help />} />
      <Route path='/delevery' element={<DeleveryDetail/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/customersup'  element={<Coustermersup/>}/>
      <Route path='/deleveryde'  element={<DeleveryDetail/>}/>
      <Route path='/terms'  element={<TermsC/>}/>
      <Route path='/Privacy'  element={<PrivacyPolicy/>}/>
      <Route path='*'  element={<NotFound/>}/>
      
      </Routes>
        
       

        
        
     
   
  );
}

export default App;
