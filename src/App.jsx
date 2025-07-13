  
import {  Link, Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard'
  
function App() {
 
const coffees = useLoaderData()
// console.log(coffees)
  return (
    <>
      <div className="w-full border border-red-600">
        <ul className="flex gap-2 text-center justify-between mx-11">
          <Link to="/addcoffee">add coffe</Link>
          {/* <a href='/addcoffee'>add coffe</a> */}
          <Link to="/updatecoffee">update Coffe</Link>
          {/* <Link to=''>updatecoffee</Link> */}
        </ul>
      </div>
      <h3 className="text-3xl text-center text-red-600">
        hello coffee we side
      </h3>
      <Outlet></Outlet>
      <h3>coffee {coffees.length}</h3>
      <div className='grid md:grid-cols-3 gap-4'>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App
