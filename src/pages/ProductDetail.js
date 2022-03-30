/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const params = useParams();
  var products = JSON.parse(localStorage.getItem("products"));
  var product = products?.find((x) => x.id == params.id);
  return product ? (
    <div>
      <NavBar />
      <div className="mx-5 px-5">
        <div className="d-flex mx-4 justify-content-center align-items-start">
            
          {/* Right Side */}
          <div className="me-4">
            <img
              src={product.src}
              alt={product.id}
              style={{ height: "450px", width: "350px", objectFit: "cover" }}
            ></img>
          </div>

          {/* Right Side */}
          <div className="ms-3 text-light fw-light mt-4">
            <h3 className="primary-color-text">{product.name}</h3>
            <p>Stock : {product.stock}</p>
            <p id="p_wrap">{product.description}</p>
            <div className="d-flex flex-row-reverse mb-4 mt-4">
              <h5 className="primary-color-text">Rp.{product.price}</h5>
            </div>
            <MDBBtn
              className="primary-color text-capitalize"
              style={{ width: "100%" }}
            >
              Buy
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}