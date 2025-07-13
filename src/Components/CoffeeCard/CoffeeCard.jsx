 import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id,name, quantity, supply, test, category, details, photo} = coffee;
    console.log(coffee)
    // console.log(name)
    const handelCoffeeDelete =(id)=>{
        console.log(id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't to DELETE tis item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success",
            // });
            fetch(`http://localhost:5000/coffee/${id}`,{
                method:"DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data);
                if(data.deletedCount > 0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success",
                  });
                }
              });
          }
        });
    }
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl h-[600px] mx-8">
          <figure>
            <img className="h-[400px] w-full" src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <div className="grid grid-cols-4">
              <p>{test}</p>
              <p>{quantity}</p>
              <p>{supply}</p>
              <p>{category}</p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/updatecoffee/${_id}`} className="btn btn-primary">
                Update
              </Link>
              <button className="btn btn-primary">Buy Now</button>
              <button
                onClick={() => handelCoffeeDelete(_id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;