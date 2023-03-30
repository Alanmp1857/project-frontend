import { useEffect } from 'react'
// import NavBar from './components/NavBar'
import CarouselItem from './components/CarouselItem'
// import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    BrainTumorLink();
  }, []);

  const BrainTumorLink = async () => {
    const data = await fetch('localhost:8000')
  }

  return (
    <div>
      <CarouselItem />
    </div>
  )
}

export default App
