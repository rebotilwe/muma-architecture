import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';


export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
         <ScrollToTop />
    </div>
  );
}