import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {name, quantity, supply, test, category, details, photo} = coffee;
    console.log(coffee)
    // console.log(name)
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl h-[600px] mx-8">
          <figure>
            <img
            className='h-[400px] w-full'
              src={photo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <div className='grid grid-cols-4'>
                <p>{test}</p>
                <p>{quantity}</p>
                <p>{supply}</p>
                <p>{category}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;