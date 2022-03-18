import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import { dataBaiTapGioHang } from "./data";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class BaiTapGioHang extends Component {
  state = {
    danhSachSanPham: dataBaiTapGioHang,
    sanPhamChiTiet: dataBaiTapGioHang[0],
    gioHang: [],
  };

  handleSanPhamChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  handleThemGioHang = (sanPham) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => {
      return sp.id === sanPham.id;
    });

    let newSanPham = { ...sanPham, soLuong: 1 };

    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(newSanPham);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (sanPham) => {
    let cloneGioHang = [...this.state.gioHang];
    let gioHangCapNhat = cloneGioHang.filter((sp) => {
      return sp.id !== sanPham.id;
    });

    if (gioHangCapNhat) {
      this.setState({
        gioHang: gioHangCapNhat,
      });
    }
  };

  handleSoLuong = (sanPham, type) => {
    //type = 1: Tăng số lượng sản phẩm
    //type = -1: Giảm số lượng sản phẩm

    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((sp) => {
      return sp.id === sanPham.id;
    });
    index !== -1 && type === 1 && cloneGioHang[index].soLuong++;
    index !== -1 && type === -1 && cloneGioHang[index].soLuong--;
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  render() {
    return (
      <div>
        <ModalGioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          handleSoLuong={this.handleSoLuong}
        />
        <DanhSachSanPham
          danhSachSanPham={this.state.danhSachSanPham}
          handleSanPhamChiTiet={this.handleSanPhamChiTiet}
          handleThemGioHang={this.handleThemGioHang}
        />
        <SanPhamChiTiet sanPhamChiTiet={this.state.sanPhamChiTiet} />
      </div>
    );
  }
}
