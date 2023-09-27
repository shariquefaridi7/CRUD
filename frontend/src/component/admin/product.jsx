import  { useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [name, setProductName] = useState('');
  const [description, setProductDescription] = useState('');
  const [price, setProductPrice] = useState('');
  const [image, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.value;
    setProductImage(file);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     const info= await axios.post("http://localhost:4000/admin/add-product",{name,price,description,image});
     setProductName("");
     setProductDescription("");
     setProductPrice("");
     setProductImage("")
     console.log(info);
  
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Product Form</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Product Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Description:</label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setProductDescription(e.target.value)}
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Product Price:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Image:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleImageChange}
                   value={image}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
