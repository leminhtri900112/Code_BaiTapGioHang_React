import React, { Component } from "react";

export default class ModalGioHang extends Component {
  handleGioHang = () => {
    return this.props.gioHang.map((sanPham) => {
      return (
        <tr key={sanPham.id}>
          <td>{sanPham.sku}</td>
          <td>
            <img src={sanPham.thumbnail_url} width={100} />
          </td>
          <td>{sanPham.name}</td>
          <td>{sanPham.price.toLocaleString()}</td>
          <td className="d-flex">
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.handleSoLuong(sanPham, -1);
              }}
            >
              -
            </button>
            {sanPham.soLuong}
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.handleSoLuong(sanPham, 1);
              }}
            >
              +
            </button>
          </td>
          <td>{(sanPham.soLuong * sanPham.price).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(sanPham);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary my-3"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Giỏ hàng (
            {this.props.gioHang.reduce((tong, sp) => {
              return (tong += sp.soLuong);
            }, 0)}
            )
          </button>
          {/* Modal */}
          <div
            className="modal fade bd-example-modal-lg"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="myExtraLargeModalLabel">
                    Sản phẩm giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Giá tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.handleGioHang()}
                      <tr>
                        <td colSpan={5}></td>
                        <td className="font-weight-bold">Tổng tiền:</td>
                        <td className="font-weight-bold">
                          {this.props.gioHang
                            .reduce((tong, sp) => {
                              return (tong += sp.price * sp.soLuong);
                            }, 0)
                            .toLocaleString()}{" "}
                          đồng
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
