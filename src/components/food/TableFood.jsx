import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import appSettings from '../../settings/AppSetting';

const TableFood = ({ food, onDelete }) => {
  const deleteFood = async (id) => {
    try {
      const response = await fetch(`${appSettings.apiUrl}Food/Delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        onDelete(id);
      } else {
        console.error('Failed to delete the food');
      }
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Food Name</th>
          <th>Vendor Name</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {food.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.vendorName}</td>
            <td>{item.foodRating}</td>
            <td>
              <Link
                className="btn btn-primary me-3"
                to={`/editFood/${item.id}`}
              >
                Edit
              </Link>
              <Button
                className="btn-danger me-3"
                text="Delete"
                onClick={() => deleteFood(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableFood;
