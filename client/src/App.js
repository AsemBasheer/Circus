import React from 'react'
import './App.css';
import Gallery from './Components/gallery/gallery.jsx'
import { Switch, Route } from 'react-router-dom';
import GalleryItem from "./Components/gallery/galleryItem.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/gallery' render={(props) => <Gallery {...props} />} />
          <Route exact path='/gallery/:id' render={(props) => <GalleryItem {...props} />} />
        </Switch>
      </div>
    )
  }
}




export default App;

