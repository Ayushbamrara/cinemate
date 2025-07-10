import { AllRoutes } from './routes/AllRoutes'
import {Headers , Footers} from "./components"
import './App.css'


function App() {
  return (
    <div className="App">
        <Headers />
        <AllRoutes/>
        <Footers />
    </div>
    
  )
}

export default App
