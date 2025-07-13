import Swal from "sweetalert2";
const Addcoffee = () => {
  const handelAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supply = form.supply.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supply,
      test,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // send date
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          Swal.fire({
            title: "success!",
            text: " add e coffee successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="mx-10">
      <h3>add e coffee</h3>
      <form
        className="bg-gray-500 w-[1200px] border border-red-800 h-[700px] mt-14"
        onSubmit={handelAddCoffee}
      >
        {/* name  and quantity*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* supply and test*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supply</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supply"
                placeholder="supply"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="test"
                placeholder="test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* category and details*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details please"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* photho*/}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add coffee " className="btn btn-block" />
      </form>
    </div>
  );
};

export default Addcoffee;
