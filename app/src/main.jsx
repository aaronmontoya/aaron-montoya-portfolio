import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './presentation/index.css';
import { App, Project } from './component/index';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route path='/project-recharts' element={<Project strSlug='recharts' />} />
        <Route path='/project-lrng' element={<Project strSlug='lrng' />} />
        <Route path='/project-badgr' element={<Project strSlug='badgr' />} />
        <Route path='/project-bitchin' element={<Project strSlug='bitchin' />} />
        <Route path='/project-mixer' element={<Project strSlug='mixer' />} />
        <Route path='/project-tribal' element={<Project strSlug='tribal' />} />
        <Route path='/project-education' element={<Project strSlug='education' />} />
        <Route path='/project-recharts' element={<Project strSlug='recharts' />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
