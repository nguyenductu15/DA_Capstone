<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0" data-bs-toggle="modal"
                                data-bs-target="#taoMoiNhanVienModal"><i class="bx bxs-plus-square"></i>Tạo Mới Nhân Viên
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoMoiNhanVienModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Tài Khoản Nhân Viên</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="">Mã Nhân Viên</label>
                                                <input v-model="nhan_vien_create.ma_nhan_vien" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Ngày Sinh</label>
                                                <input v-model="nhan_vien_create.ngay_sinh" type="date"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Email</label>
                                                <input v-model="nhan_vien_create.email" type="email"
                                                    class="form-control mt-2">
                                            </div>

                                            <div class="mb-3"><label for="">Số Điện Thoại</label>
                                                <input v-model="nhan_vien_create.so_dien_thoai" type="tel"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Password</label>
                                                <input v-model="nhan_vien_create.password" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3"><label for="">Họ Và Tên</label>
                                                <input v-model="nhan_vien_create.ho_va_ten" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Địa Chỉ</label>
                                                <input v-model="nhan_vien_create.dia_chi" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Ngày Bắt Đầu</label>
                                                <input v-model="nhan_vien_create.ngay_bat_dau" type="date"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Tình Trạng</label>
                                                <select v-model="nhan_vien_create.tinh_trang" class="form-control mt-2">
                                                    <option value="1">Hoạt Động</option>
                                                    <option value="0">Tạm Dừng</option>
                                                </select>
                                            </div>
                                            <div class="mb-3"><label for="">Nhập Lại Mật Khẩu</label>
                                                <input v-model="nhan_vien_create.re_password" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="TaoMoiNhanVien()">
                                        Thêm Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Nhân Viên</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="align-middle">
                                    <th class="text-center">STT</th>
                                    <th class="text-center">Mã Nhân Viên</th>
                                    <th class="text-center">Họ Và Tên</th>
                                    <th class="text-center">Ngày Sinh</th>
                                    <th class="text-center">Địa Chỉ</th>
                                    <th class="text-center">Ngày Bắt Đầu</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in ds_nhan_vien" :key="index">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ index + 1 }}</th>
                                        <td>{{ value.ma_nhan_vien }}</td>
                                        <td>{{ value.ho_va_ten }} </td>
                                        <td class="text-center">{{ value.ngay_sinh }}</td>
                                        <td class="text-center">{{ value.dia_chi }}</td>
                                        <td class="text-center">{{ value.ngay_bat_dau }}</td>
                                        <td>{{ value.email }}</td>
                                        <td class="text-center">
                                            <button v-if="value.tinh_trang == 0" class="btn btn-warning">Tạm
                                                Dừng</button>
                                            <button v-if="value.tinh_trang == 1" class="btn btn-primary">Hoạt
                                                Động</button>
                                        </td>
                                        <td class="text-center d-flex justify-content-center">
                                            <button data-bs-toggle="modal" data-bs-target="#capnhapModal"
                                                class="btn btn-success btn-sm me-1" v-on:click="Object.assign(nhan_vien_update,value)">Cập Nhập</button>
                                            <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                                class="btn btn-danger btn-sm px-4" v-on:click="id_can_xoa = value.id">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Nhân Viên</h1><button
                                        type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert"> Bạn thật sự có muốn xoá nhân viên này không? 
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="XoaNhanVien()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận Xoá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="capnhapModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tài Khoản Nhân Viên
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="">Mã Nhân Viên</label>
                                                <input v-model="nhan_vien_update.ma_nhan_vien" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Ngày Sinh</label>
                                                <input v-model="nhan_vien_update.ngay_sinh" type="date"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Email</label>
                                                <input v-model="nhan_vien_update.email" type="email"
                                                    class="form-control mt-2">
                                            </div>

                                            <div class="mb-3"><label for="">Số Điện Thoại</label>
                                                <input v-model="nhan_vien_update.so_dien_thoai" type="tel"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Password</label>
                                                <input v-model="nhan_vien_update.password" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3"><label for="">Họ Và Tên</label>
                                                <input v-model="nhan_vien_update.ho_va_ten" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Địa Chỉ</label>
                                                <input v-model="nhan_vien_update.dia_chi" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Ngày Bắt Đầu</label>
                                                <input v-model="nhan_vien_update.ngay_bat_dau" type="date"
                                                    class="form-control mt-2">
                                            </div>
                                            <div class="mb-3"><label for="">Tình Trạng</label>
                                                <select v-model="nhan_vien_update.tinh_trang" class="form-control mt-2">
                                                    <option value="1">Hoạt Động</option>
                                                    <option value="0">Tạm Dừng</option>
                                                </select>
                                            </div>
                                            <div class="mb-3"><label for="">Nhập Lại Mật Khẩu</label>
                                                <input v-model="nhan_vien_update.re_password" type="text"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="CapNhatNhanVien()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            ds_nhan_vien: [],
            nhan_vien_create: {},
            nhan_vien_update: {},
            id_can_xoa: 0,
        }
    },
    mounted() {
        this.LayDuLieu();

    },
    methods: {
        LayDuLieu() {
            axios
                .get('http://127.0.0.1:8000/api/nhan-vien/data')
                .then((res) => {
                    this.ds_nhan_vien = res.data.nhan_vien;
                })
        },
        TaoMoiNhanVien() {
            axios
                .post('http://127.0.0.1:8000/api/nhan-vien/create', this.nhan_vien_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    }
                })
        },
        CapNhatNhanVien() {
            axios
                .put('http://127.0.0.1:8000/api/nhan-vien/update', this.nhan_vien_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    }
                })
        },
        XoaNhanVien() {
            axios
                .delete('http://127.0.0.1:8000/api/nhan-vien/delete/' + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    }
                })
        },
    },
}
</script>
<style></style>