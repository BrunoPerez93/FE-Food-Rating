import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appSettings from '../../settings/AppSetting';

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

  return (
    <div className="p-3 justify-content-center">
      <div className="row my-3">
        <h4 className="text-center">Best Food Ratings</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Vendor Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {food.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.vendorName}</td>
              <td>{item.foodRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-100 text-center">
        <button className="btn btn-primary w-25" onClick={handleButton}>
          Add New Food
        </button>
      </div>
    </div>
  );
};

export default FoodList;
