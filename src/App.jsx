import { useEffect } from 'react'
import CarouselItem from './components/CarouselItem'

function App() {

  return (
    <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaji3Z_sNJ8pb2LXuP_Qe8xHVcswaxUd49ec3glfEWsvx6Ze5bM2pFuOotZ7l6Kt4R2I&usqp=CAU")',
      backgroundSize: 'cover',
    }}>
      <CarouselItem />
      <div>
      </div>
    </div>
  )
}


export default App