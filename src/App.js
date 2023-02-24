import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {getPhotos} from './galleryState'
import { useEffect } from 'react';

function App() {
const dispatch = useDispatch();
const photos = useSelector(state => state.gallery.photos);

useEffect(() => {
  dispatch(getPhotos())
}, [dispatch])


  return (
    <div className="App">
    <h1>Photo gallery</h1>
    <hr />
    <gallery>
      {photos.map(photo => (
        <img 
          key={photo.id} 
          src={photo.download_url} 
          alt={photo.author} 
          height="200" 
          width="200"
        />
      ))}
    </gallery>
    </div>
  );
}

export default App;
