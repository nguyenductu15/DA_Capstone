<template>
    <div class="row">
        <div class="col-xl-7 mx-auto">
            <div class="card border-top border-0 border-4 border-danger">
                <div class="card-body p-4">
                    <div class=" card-title text-center align-items-center">
                        <div><i class="fa-solid fa-comments-dollar fa-2xl" style="color: red;"></i>
                        </div>
                        <h3 class="mb-0 text-danger mt-2">Xác Nhận Đặt Sân</h3>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <img src="https://i.pinimg.com/originals/6c/df/1b/6cdf1b30853371223ccfd9273d11f5cf.jpg"
                                style="height: 150px;width: 340px;" alt="">
                        </div>
                        <div class="col-6 mt-3">
                            <h4>Sân bóng Trương Vương</h4>
                            <p><i class="fa-solid fa-location-dot fa-xl"></i>
                                200 Cách Mạng Tháng Tám, Quận Cẩm Lệ, Đà Nẵng</p>

                        </div>
                    </div>
                    <form class="row g-2 ">
                        <div class="col-12 mt-3">
                            <label class="form-label">Họ và tên</label>
                            <input type="text" class="form-control" value="Nguyễn Đức Tú">
                        </div>
                        <div class="col-12">
                            <label class="form-label">Số điện thoại</label>
                            <input type="number" class="form-control" value="0905786761">
                        </div>
                        <div class="col-12">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" value="nguyenductu150202@gmail.com">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Loại Sân</label>
                            <input type="text" class="form-control" value="Sân 7">
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Thời gian</label>
                            <input type="text" class="form-control" value="17:00-19:00">
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Thứ Ngày</label>
                            <input type="text" class="form-control" value="Thứ 2 25/5/2024">
                        </div>

                        <div class="col-12 mb-2">
                            <label class="form-label">Ghi chú</label>
                            <textarea class="form-control" placeholder="....." rows="2"></textarea>
                        </div>
                        <hr>
                        <div>
                            <div class="row">
                                <div class="col-6">
                                    <h4>Tổng Tiền: </h4>
                                </div>
                                <div class="col-6 text-end">
                                    <h3>500.000 đ</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="row">
                                <div class="col text-center">
                                    <h5>Hoặc thanh toán bằng QR Code</h5>
                                    <img src="../../../assets/assets_Admin/images/qrcode.png" class="card-img-top mt-4"
                                        style="height: 200px;width: 200px;" alt="...">
                                </div>

                            </div>

                        </div>
                        <div class="col-12 mt-4 text-center">
                            <button type="button" class="btn btn-danger px-5" data-bs-toggle="modal"
                                data-bs-target="#xacNhanModal">Xác Nhận Đặt Sân</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xacNhanModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thông Báo</h1><button type="button"
                            class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div class="alert alert-info" role="alert"> Bạn đã đặt sân thành công !!!
                            <p>Vui lòng gọi 0909.676.869 nếu có sự cố để được hỗ trợ ngay!</p>
                        </div>
                    </div>
                    <router-link to="/">
                        <div class="modal-footer"><button type="button" class="btn btn-info"
                                data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
export default {

}
</script>
<style></style>