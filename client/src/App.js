import React from 'react';



import Body from './Components/Layouts/Body';

import Appbar from './Components/Layouts/Navbar';
import Product from './Components/Pages/Product';

require('dotenv').config();
function App() {

  return (
    <div>
      <Appbar />
      {/* <Body /> */}
      <Product/>
    </div>
  )
}

export default App

