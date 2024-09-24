import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import appSettings from '../../settings/AppSetting';
import ListFieldForm from './ListFieldForm';
import Button from '../Button';

const initialState = {
  id: 0,
  name: '',
  vendorName: '',
  foodRating: 0,
};

const EditFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(`${appSettings.apiUrl}Food/Obtain/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFood(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFood();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFood((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveFood = async (e) => {
    e.preventDefault();
    const response = await fetch(`${appSettings.apiUrl}Food/Edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    });
    if (response.ok) {
      navigate('/');
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row text-center py-3">
        <h1>EDIT FOOD</h1>

        <form onSubmit={saveFood}>
          <ListFieldForm food={food} handleInputChange={handleInputChange} />

          <Button className="btn-primary mx-2" text="Save" type="submit" onClick={saveFood} />
          <Button className="btn-secondary" text="GO BACK" onClick={goBack} />
        </form>
      </div>
    </div>
  );
};

export default EditFood;
