import React, { useState } from "react";
import productService from "../service/product.service";
import Navbar2 from './Navbar2'
import "./AddProduct.css"
const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    reg:"",
    name: "",
    sub1: "",
    sub2: "",
    sub3: "",
    sub4:"",
    sub5:""
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        setProduct({
          reg:"",
          name: "",
          sub1: "",
          sub2: "",
          sub3: "",
          sub4:"",
          sub5:""
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="container-0 mt-3">
      <Navbar2/>
      <center>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">ADD DETAILS</div>
<br></br>
              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                <div className="mb-3">
                    <label>REG NO</label>
                    <input
                      type="number"
                      name="reg"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.reg}
                    />
                  </div><br></br>

                  <div className="mb-3">
                    <label>NAME</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div><br></br>

                  <div className="mb-3">
                    <label>SUB1</label>
                    <input
                      type="number"
                      name="sub1"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.sub1}
                    />
                  </div><br></br>
                  <div className="mb-3">
                    <label>SUB2</label>
                    <input
                      type="number"
                      name="sub2"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.sub2}
                    />
                  </div><br></br>

                  <div className="mb-3">
                    <label>SUB3</label>
                    <input
                      type="number"
                      name="sub3"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.sub3}
                    />
                  </div><br></br>
                  <div className="mb-3">
                  <label>SUB4</label>
                  <input
                    type="number"
                    name="sub4"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={product.sub4}
                  />
                </div><br></br>
                <div className="mb-3">
                <label>SUB5</label>
                <input
                  type="number"
                  name="sub5"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={product.sub5}
                />
              </div><br></br>
                  <button className="glow-on-hover4">ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </center>
      </div>
  );
};

export default AddProduct;