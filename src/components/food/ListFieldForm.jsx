import React from 'react';
import FieldFormFood from './FieldFormFood';

const ListFieldForm = ({ food, handleInputChange }) => {
  return (
    <div className='my-3'>
      <FieldFormFood
        label="Food"
        type="text"
        name="name"
        value={food.name}
        onChange={handleInputChange}
      />
      <FieldFormFood
        label="Vendor Name"
        type="text"
        name="vendorName"
        value={food.vendorName}
        onChange={handleInputChange}
      />
      <FieldFormFood
        label="Ranking"
        type="number"
        name="foodRating"
        value={food.foodRating}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ListFieldForm;
