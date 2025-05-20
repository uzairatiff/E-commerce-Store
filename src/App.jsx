import React, { useState , useEffect } from 'react';
import Navbar from './components/navbar';
import Products from './components/products';
import Heading from './components/heading';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Products searchQuery={searchQuery} />
      <Heading />
    </div>
  );
};

export default App;
