import { useEffect } from 'react'
// import NavBar from './components/NavBar'
import CarouselItem from './components/CarouselItem'
// import { Outlet } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   BrainTumorLink();
  // }, []);

  // const BrainTumorLink = async () => {
  //   const data = await fetch('localhost:8000')
  // }

  return (
    <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaji3Z_sNJ8pb2LXuP_Qe8xHVcswaxUd49ec3glfEWsvx6Ze5bM2pFuOotZ7l6Kt4R2I&usqp=CAU")',
      backgroundSize: 'cover',
      height: '80vh',
    }}>
      <CarouselItem />
    </div>
  )
}


export default App