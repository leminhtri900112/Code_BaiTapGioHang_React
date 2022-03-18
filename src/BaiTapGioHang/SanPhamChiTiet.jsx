import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    let { thumbnail_url, name, price, short_description } =
      this.props.sanPhamChiTiet;
    return (
      <div className="container mt-5">
        <h4>Thông tin chi tiết:</h4>
        <div className="row">
          <div className="col-5 text-center">
            <img
              className="card-img-top p-3"
              src={thumbnail_url}
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-7 p-3">
            <h6 className="card-title text-dark">{name}</h6>
            <p className="card-text text-danger">
              Giá: {price.toLocaleString()} đồng
            </p>
            <p>{short_description}</p>
          </div>
        </div>
      </div>
    );
  }
}
