import { useEffect } from 'react'
import NavBar from './components/NavBar'
import CarouselItem from './components/CarouselItem'

function App() {
  useEffect(() => {
    BrainTumorLink();
  }, []);

  const BrainTumorLink = async () => {
    const data = await fetch('localhost:8000')
  }

  return (
    <div>
      <NavBar />
      <CarouselItem />
    </div>
  )
}

export default App
