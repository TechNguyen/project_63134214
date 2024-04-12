import React, { useState } from "react";

const CartItem = ({
  id,
  imgSrc,
  name,
  price,
  count,
  onIncreaQuality,
  onDecreaQuality,
  onDeletedCartItem,
}) => {
  return (
    <>
      <tr>
        <th scope="row">
          <div className="d-flex align-items-center">
            <img
              src={imgSrc}
              className="img-fluid me-5 rounded-circle"
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
          </div>
        </th>
        <td>
          <p className="mb-0 mt-4">{name}</p>
        </td>
        <td>
          <p className="mb-0 mt-4">{price + " $"}</p>
        </td>
        <td>
          <div className="input-group quantity mt-4" style={{ width: "100px" }}>
            <div className="input-group-btn">
              <button
                onClick={() => onDecreaQuality(id)}
                className="btn btn-sm btn-minus rounded-circle bg-light border"
              >
                <i className="fa fa-minus"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm text-center border-0"
              value={count}
            />
            <div className="input-group-btn">
              <button
                onClick={() => onIncreaQuality(id)}
                className="btn btn-sm btn-plus rounded-circle bg-light border"
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td>
          <p className="mb-0 mt-4">{(price * count).toFixed(2) + " $"}</p>
        </td>
        <td>
          <button
            onClick={() => onDeletedCartItem(id)}
            className="btn btn-md rounded-circle bg-light border mt-4"
          >
            <i className="fa fa-times text-danger"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
