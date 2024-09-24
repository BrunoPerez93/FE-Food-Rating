import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appSettings from '../../settings/AppSetting';
import TableFood from './TableFood';
import Button from '../Button';

const FoodList = () => {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();

  const fetchFood = async () => {
    try {
      const response = await fetch(`${appSettings.apiUrl}Food/getFood`);
      const data = await response.json();
      setFood(data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleButton = () => {
    navigate('/AddNewFood');
  };

  const handleDelete = (id) => {
    setFood((prevFood) => prevFood.filter((item) => item.id !== id));
  };

  return (
    <div className="p-3 justify-content-center">
      <div className="row my-3">
        <h4 className="text-center">Best Food Ratings</h4>
      </div>
      <TableFood food={food} onDelete={handleDelete} />
      <div className="w-100 text-center">
        <Button
          className="btn-primary w-25"
          onClick={handleButton}
          text="Add New Food"
        />
      </div>
    </div>
  );
};

export default FoodList;
