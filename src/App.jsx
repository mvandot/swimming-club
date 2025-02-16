import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { Hero }  from  './components/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';

function App() {


  return (
    <div className="w-full h-full overflow-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />

    </div>
  )
}

export default App