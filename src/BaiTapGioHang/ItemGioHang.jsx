import React, { Component } from "react";

export default class ItemGioHang extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.sanPham;
    return (
      <div className="col-3 ">
        <div className="card text-white">
          <img className="card-img-top p-3" src={thumbnail_url} />
          <div className="card-body">
            <h6 className="card-title text-dark">{name}</h6>
            <p className="card-text text-danger">
              Giá: {price.toLocaleString()} đồng
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.handleSanPhamChiTiet(this.props.sanPham);
              }}
            >
              Xem Chi Tiết
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                this.props.handleThemGioHang(this.props.sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
