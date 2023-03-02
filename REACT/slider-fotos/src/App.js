import './App.css';
import Slider from './components/Slider';

function App() {

  const photos = [
    "https://picsum.photos/id/1020/400",
    "https://picsum.photos/id/1025/400",
    "https://picsum.photos/id/1011/400"
  ]

  // let photos = [];
  
  return (
    <div>      
      <Slider photos={photos}/>      
    </div>
  );
}

export default App;
