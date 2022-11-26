import React from 'react'
import './App.css'
import Gallery from './Components/gallery'

function App() {
  return (
    <>

      <div className="title">
        <h1>Photo Gallery</h1>
      </div>
      <hr/>
      <p>Some great pictures clicked by the best photographers of the world.</p>
      <hr/>
      <Gallery />

    </>
  );
}

export default App;
