import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
        // const { _id, name, quantity, supply, test, category, details, photo } =
        //   coffee;

    return (
        <div>
            <h3>update coffee {name}</h3>

         </div>
    );
};

export default UpdateCoffee;