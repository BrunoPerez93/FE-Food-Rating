import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appSettings from '../../settings/AppSetting';
import ListFieldForm from './ListFieldForm';
import Button from '../Button';

const initialData = {
  name: '',
  vendorName: '',
  foodRating: 0,
};

const AddNewFood = () => {
  const [food, setFood] = useState(initialData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFood((prevData) => ({
      ...prevData,
      [name]: name === 'foodRating' ? Number(value) : value,
    }));
  };

  const goBack = () => {
    navigate('/');
  };

  const saveFood = async (e) => {
    e.preventDefault();
    const response = await fetch(`${appSettings.apiUrl}Food/addFood`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    });
    if (response.ok) {
      navigate('/');
    } else {
      console.log('error');
    }
  };

  return (
    <div className="container">
      <div className="row text-center py-3" >
        <h1>ADD FOOD</h1>

        <form onSubmit={saveFood}>
          <ListFieldForm food={food} handleInputChange={handleInputChange} />

          <Button className="btn-primary mx-2" text="ADD" />
          <Button className="btn-secondary" text="GO BACK" onClick={goBack} />
        </form>
      </div>
    </div>
  );
};

export default AddNewFood;
