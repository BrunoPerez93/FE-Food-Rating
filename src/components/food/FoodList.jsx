import React, { useEffect, useState } from 'react';

const FoodList = () => {
  const [food, setFood] = useState([]); 
  const fetchFood = async () => {
    try {
      const response = await fetch('https://localhost:7008/api/Food/getFood');
      const data = await response.json();
      setFood(data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []); 

  return (
    <div className="p-3">
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
    </div>
  );
};

export default FoodList;
