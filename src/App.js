import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';



const Shop = () => {
  return (
    <div>
      I'm the shop Page
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
};

export default App;