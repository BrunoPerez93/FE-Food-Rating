import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddNewFood from './components/food/AddNewFood';
import FoodList from './components/food/FoodList';

function App() {
  return (
    <>
      <Header title="Food Rating" />
      <Router>
        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/AddNewFood" element={<AddNewFood />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
