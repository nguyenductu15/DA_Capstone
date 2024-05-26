<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2"><button class="btn btn-primary mb-3 mb-lg-0"
                                data-bs-toggle="modal" data-bs-target="#taoMoiSanModal"><i
                                    class="bx bxs-plus-square"></i>Tạo Mới Sân </button></div>
                    </div>
                    <div class="modal fade" id="taoMoiSanModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Mới Sân Bóng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2"><label>Tên Sân</label>
                                        <input v-model="san_bong_create.ten_san" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Địa Chỉ</label>
                                        <input v-model="san_bong_create.dia_chi" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Số Sân Kinh Doanh</label>
                                        <input v-model="san_bong_create.so_san_kinh_doanh" type="text"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Giá Mặc Định</label>
                                        <input v-model="san_bong_create.gia_mac_dinh" type="number"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Tình Trạng</label>
                                        <select v-model="san_bong_create.tinh_trang" class="form-control">
                                            <option value="1">Hoạt Động</option>
                                            <option value="0">Tạm Dừng</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                        v-on:click="TaoMoiSanBong()">Thêm Mới</button>
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
                    <h5 class="mt-2">Danh Sách Sân Bóng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="align-middle">
                                    <th class="text-center">STT</th>
                                    <th class="text-center">Tên Sân</th>
                                    <th class="text-center">Địa Chỉ</th>
                                    <th class="text-center">Số Sân Kinh Doanh</th>
                                    <th class="text-center">Giá Mặc Định</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in ds_san_bong" :key="index">
                                    <tr class="align-middle">
                                        <th class="text-center ">{{ index + 1 }}</th>
                                        <td class="text-center ">{{ value.ten_san }}</td>
                                        <td class="text-center ">{{ value.dia_chi }}</td>
                                        <td class="text-center">{{ value.so_san_kinh_doanh }}</td>
                                        <td class="text-center">{{ value.gia_mac_dinh }}</td>
                                        <td class="text-center">
                                            <button v-if="value.tinh_trang == 1" v-on:click="doiTrangThai(value)"
                                                class="btn btn-primary">Hoạt Động</button>
                                            <button v-else v-on:click="doiTrangThai(value)" class="btn btn-warning">Tạm
                                                Dừng</button>
                                        </td>
                                        <td class="text-center d-flex justify-content-center">
                                            <button data-bs-toggle="modal" data-bs-target="#updateModal"
                                                class="btn btn-success btn-sm me-1"
                                                v-on:click="Object.assign(san_bong_update, value)">Cập Nhập</button>
                                            <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                                class="btn btn-danger btn-sm px-4"
                                                v-on:click="id_can_xoa = value.id">Xóa</button>
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
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Sân Bóng</h1><button
                                        type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert"> Bạn thật sự có muốn xoá sân bóng này
                                        không? </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button"
                                        class="btn btn-danger" data-bs-dismiss="modal" v-on:click="XoaSanBong()">Xác
                                        Nhận Xoá</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Sân Bóng</h1><button
                                        type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2"><label>Tên Sân</label>
                                        <input v-model="san_bong_update.ten_san" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Địa Chỉ</label>
                                        <input v-model="san_bong_update.dia_chi" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Số Sân Kinh Doanh</label>
                                        <input v-model="san_bong_update.so_san_kinh_doanh" type="text"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Giá Mặc Định</label>
                                        <input v-model="san_bong_update.gia_mac_dinh" type="number"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2"><label>Tình Trạng</label>
                                        <select v-model="san_bong_update.tinh_trang" class="form-control">
                                            <option value="1">Hoạt Động</option>
                                            <option value="0">Tạm Dừng</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-info" data-bs-dismiss="modal"
                                        v-on:click="CapNhatSanBong()">Cập
                                        Nhật</button>
                                </div>
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
            ds_san_bong: [],
            san_bong_create: {},
            san_bong_update: {},
            id_can_xoa: 0,
        }
    },
    mounted() {
        this.LayDuLieu();
    },
    methods: {
        LayDuLieu() {
            axios
                .get('http://127.0.0.1:8000/api/san-bong/data')
                .then((res) => {
                    this.ds_san_bong = res.data.san_bong;
                })
        },
        TaoMoiSanBong() {
            axios
                .post('http://127.0.0.1:8000/api/san-bong/create', this.san_bong_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    }
                })
        },
        CapNhatSanBong() {
            axios
                .put('http://127.0.0.1:8000/api/san-bong/update', this.san_bong_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    }
                })
        },
        XoaSanBong() {
            axios
                .delete('http://127.0.0.1:8000/api/san-bong/delete/' + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    }
                })
        },
        doiTrangThai(values) {
            axios
                .put('http://127.0.0.1:8000/api/san-bong/doi-trang-thai', values)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.LayDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>