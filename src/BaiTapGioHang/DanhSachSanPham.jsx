import React, { Component } from "react";
import ItemGioHang from "./ItemGioHang";

export default class DanhSachGioHang extends Component {
  render() {
    let { danhSachSanPham, handleSanPhamChiTiet, handleThemGioHang } =
      this.props;
    return (
      <div className="container">
        <div className="row">
          {danhSachSanPham.map((sanPham, index) => {
            if (index < 4) {
              return (
                <ItemGioHang
                  sanPham={sanPham}
                  key={index}
                  handleSanPhamChiTiet={handleSanPhamChiTiet}
                  handleThemGioHang={handleThemGioHang}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
