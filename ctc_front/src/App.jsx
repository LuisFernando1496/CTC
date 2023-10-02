import { BrowserRouter, Routes, Route   } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Task } from './components/Task';
import { CreateTask } from './components/CreateTask';


 function  App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/create' element={<CreateTask/>}/>
      <Route path='/' element={ <Task/>}/>
    </Routes>
    </BrowserRouter>

 
    )
}

export default App
