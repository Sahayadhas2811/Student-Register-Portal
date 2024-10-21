import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PersonalInfo from './Pages/PersonalInfo';
import EducationForm from './Pages/EducaitonalBackground';
import DocumentUpload from './Pages/DocumentUpload';
import BackgroundInformationForm from './Pages/BackgroundInfo';
import AddressPassportInfo from './Pages/AddressInfo';
import AcademicInterest from './Pages/AcademicInterest';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalInfo/>}/>
        <Route path='/EducationInfo' element={<EducationForm/>}/>
        <Route path='/AddressPassportInfo' element={<AddressPassportInfo/>}/>
        <Route path='/BackgroundInfo' element={<BackgroundInformationForm/>}/>
        <Route path='/AcademicInterest' element={<AcademicInterest/>}/>
        <Route path='/DocumentUpload' element={<DocumentUpload/>}/>
      </Routes>
    </BrowserRouter>
  )
}
