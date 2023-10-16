import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container-01 mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              
                <h1>ADD STUDENT RESULT</h1>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">REG NO</th>
                      <th scope="col">NAME</th>
                      <th scope="col">SUB1</th>
                      <th scope="col">SUB2</th>
                      <th scope="col">SUB3</th>
                      <th scope="col">SUB4</th>
                      <th scope="col">SUB5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr className="tab">
                        <td>{num + 1}</td>
                        <td>{p.reg}</td>
                        <td>{p.name}</td>
                        <td>{p.sub1}</td>
                        <td>{p.sub2}</td>
                        <td>{p.sub3}</td>
                        <td>{p.sub4}</td>
                        <td>{p.sub5}</td>
                        <td>
                        <button  className="btn btn-sm btn-danger ms-1">
                        <Link to={`/editProduct/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-dark">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;