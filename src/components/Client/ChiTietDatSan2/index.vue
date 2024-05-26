<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-7 mt-2">
                        <h3>Sân bóng Trương Vương</h3>
                        <p><i class="fa-solid fa-location-dot fa-xl"></i>
                            200 Cách Mạng Tháng Tám, Quận Cẩm Lệ, Đà Nẵng</p>
                    </div>
                    <div class="col-5 mt-4 text-end">
                        <h4>Đánh giá 5/5<i class="bx bxs-star text-warning"></i>(555 Đánh giá )</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <div class="row">
                            <div class="col-5">
                                <img src="https://i.pinimg.com/originals/6c/df/1b/6cdf1b30853371223ccfd9273d11f5cf.jpg"
                                    style="height: 240px;width: 400px;" alt="">
                            </div>
                            <div class="col-7 text-end">
                                <img src="https://sieuthiconhantao.vn/uploads/TC3013UCo-san-bong-da-TC3013U-132321136801356137.JPG"
                                    style="height: 240px;width: 305px;" alt="">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col">
                                <img src="https://th.bing.com/th/id/OIP.yX9P7RrfIA5_6QqCtfX0tAHaFo?rs=1&pid=ImgDetMain"
                                    style="height: 300px;width: 710px;" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 row-bordered">
                        <div class="card-body">
                            <h3 class="card-title">Thông tin sân bóng</h3>
                            <div class="d-flex gap-3 py-1">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <div>599 reviews</div>
                                <div class="text-success"></div>
                            </div>
                            <div class="mb-3">
                                <span class="price h2" style="color: red;">500.000</span>
                                <span class="text-muted"> đ</span>
                            </div>
                            <dl class="row">
                                <dt class="col-sm-5">
                                    <h5>Giờ mở cửa</h5>
                                </dt>
                                <dd class="col-sm-7">
                                    <h5>6h - 23h</h5>
                                </dd>

                                <dt class="col-sm-5">
                                    <h5>Số sân thi đấu</h5>
                                </dt>
                                <dd class="col-sm-7">
                                    <h5>4 Sân</h5>
                                </dd>

                                <dt class="col-sm-5">
                                    <h5>Thuê sân </h5>
                                </dt>
                                <dd class="col-sm-7">
                                    <h5>Sân 5/7/11 người</h5>
                                </dd>
                            </dl>
                            <hr>
                            <div>
                                <h5>Tiện ích khác</h5>
                                <div class="row">
                                    <div class="col-6">
                                        <p><i class="fa-solid fa-wifi"></i> Wifi free</p>
                                        <p><i class="fa-solid fa-square-parking fa-xl"></i> Bãi đỗ xe</p>
                                        <p><i class="fa-solid fa-sink fa-xl"></i> Phòng tắm</p>
                                    </div>
                                    <div class="col-6">
                                        <p><i class="fa-solid fa-glass-water fa-xl"></i> Nước Uống</p>
                                        <p><i class="fa-solid fa-burger fa-xl"></i> Đồ ăn</p>
                                        <p><i class="fa-solid fa-mug-saucer fa-xl"></i> Trà đá</p>
                                    </div>
                                </div>
                            </div>
                            <router-link to="xac-nhan-dat-san">
                                <div class="d-flex mt-3 ">
                                    <a href="#" class="btn btn-outline-primary"><span class="text-center">Đặt Sân
                                            Ngay</span></a>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-7">
                <h4 class="ms-3 mb-3">Đặt sân theo yêu cầu</h4>
                <form class="form-control rounded-4">
                    <input type="text" class="form-control rounded-pill mb-2" placeholder="Nhập họ và tên">
                    <input type="number" class="form-control rounded-pill mb-2" placeholder="Nhập số điện thoại">
                    <input type="email" class="form-control rounded-pill mb-2" placeholder="Nhập địa chỉ email">
                    <div class="row">
                        <div class="col">
                            <input type="date" class="form-control rounded-pill" placeholder="Chọn ngày">
                        </div>
                        <div class="col">
                            <input type="time" class="form-control rounded-pill" placeholder="Chọn giờ">
                        </div>
                    </div>
                    <input type="text" class="form-control rounded-pill mt-2" placeholder="Nhập số giờ thuê">
                    <textarea class="form-control" placeholder="Ghi chú" rows="4"></textarea>
                    <router-link to="xac-nhan-dat-san">
                    <button class=" btn btn-warning mt-3 w-100 rounded-pill mb-3">Đặt sân ngay</button>
                </router-link>

                </form>
            </div>
            <div class="col-5">
                <div class="row">
                    <div class="col-2"><button class="btn btn-primary " style="font-size:14px;">Sân 5</button></div>
                    <div class="col-1"></div>
                    <div class="col-4 "><button class="btn btn-info" style="font-size:15px;">Ngày 6/5 -> 11/5</button>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2">
                        <button class="btn btn-success px-3" style="font-size:15px;">Chiều</button>
                    </div>
                    <div class="col-2 text-end ">
                        <button class="btn btn-success px-3" style="font-size:15px;">Sáng</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">Ngày 6/5 </button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">17:00-18:00 <h6>Giá 450K</h6></button>
                    </div>
                    <div class="col mt-2 text-end">
                        <button class="btn btn-info" style="font-size:14px;">17:30-18:30 <h6>Giá 500K</h6></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">Ngày 7/5 </button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">19:00-20:00 <h6>Giá 450K</h6></button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2 text-end">
                        <button class="btn btn-info" style="font-size:14px;">16:00-17:00 <h6>Giá 550K</h6></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">Ngày 8/5 </button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2 text-end">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">Ngày 9/5 </button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">15:00-16:00 <h6>Giá 200K</h6></button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">17:00-18:00 <h6>Giá 500K</h6></button>
                    </div>
                    <div class="col mt-2 text-end">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">Ngày 10/5 </button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2 text-end">
                        <button class="btn btn-info" style="font-size:14px;">18:00-19:00 <h6>Giá 400K</h6></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">Ngày 11/5 </button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">19:00-20:00 <h6>Giá 450K</h6></button>
                    </div>
                    <div class="col mt-2">
                        <button class="btn btn-info" style="font-size:14px;">14:00-15:00 <h6>Giá 350K</h6></button>
                    </div>
                    <div class="col mt-2 text-end">
                        <button class="btn btn-info" style="font-size:14px;">16:00-17:00 <h6>Giá 550K</h6></button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="row mt-2">
        <div class="card">
            <div class="card-header mt-3">
                <h3>Sân thể thao gần đây</h3>
            </div>
            <div class="card-body">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid">
                    <div class="col  ">

                        <div class="card m-3 border-4 border-danger " style="border-radius: 30px;">
                            <img src="https://img.thegioithethao.vn/thumbs/san-bong-da/ha-noi/hoang-mai/hong-quang/san-bong-hong-quang-3_thumb_500.webp"
                                class="card-img-top" style="border-radius: 30px;" alt="...">

                            <div class="card-body">
                                <h6 class="card-title cursor-pointer">Sân bóng Đa Phước</h6>
                                <h7 class="card-title cursor-pointer">Khu Vực: Thanh Khê</h7>
                                <h7 class="card-title cursor-pointer">
                                    <p>Số sân: 10</p>
                                </h7>
                                <h5 class="card-title cursor-pointer mt-1">Giá : 350.000đ</h5>

                                <div class="d-flex align-items-center mt-3 fs-6">
                                    <div class="cursor-pointer">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <p class="mb-0 ms-auto">4.2(182)</p>
                                </div>
                                <div class=" mt-2 text-center ">
                                    <router-link to="/chi-tiet-dat-san">
                                        <button class=" btn btn-info w-100 " style="border-radius: 20px;">Đặt ngay kẻo
                                            muộn</button>
                                    </router-link>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div class="col ">
                        <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                            <img src="https://www.tapdoanconhantao.com/wp-content/uploads/2018/08/co-nhan-tao-san-bong.png"
                                class="card-img-top" style="border-radius: 30px;" alt="...">

                            <div class="card-body">
                                <h6 class="card-title cursor-pointer">Sân bóng Sao</h6>
                                <h7 class="card-title cursor-pointer">Khu Vực: Liên Chiểu</h7>
                                <h7 class="card-title cursor-pointer">
                                    <p>Số sân: 5</p>
                                </h7>
                                <h5 class="card-title cursor-pointer mt-1">Giá : 400.000đ</h5>

                                <div class="d-flex align-items-center mt-3 fs-6">
                                    <div class="cursor-pointer">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <p class="mb-0 ms-auto">3.1(83)</p>
                                </div>
                                <div class=" mt-2 text-center ">
                                    <router-link to="/chi-tiet-dat-san2">
                                        <button class=" btn btn-info w-100 " style="border-radius: 20px;">Đặt ngay kẻo
                                            muộn</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                            <img src="https://images.toplist.vn/images/800px/san-bong-mini-chao-lua-896266.jpg"
                                class="card-img-top" style="border-radius: 30px;" alt="...">

                            <div class="card-body">
                                <h6 class="card-title cursor-pointer">Sân bóng Nam Sao</h6>
                                <h7 class="card-title cursor-pointer">Khu Vực: Liên Chiểu</h7>
                                <h7 class="card-title cursor-pointer">
                                    <p>Số sân: 2</p>
                                </h7>
                                <h5 class="card-title cursor-pointer mt-1">Giá : 250.000đ</h5>

                                <div class="d-flex align-items-center mt-3 fs-6">
                                    <div class="cursor-pointer">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <p class="mb-0 ms-auto">1.5(45)</p>
                                </div>
                                <div class=" mt-2 text-center ">
                                    <button class=" btn btn-info w-100 " style="border-radius: 20px;">Đặt ngay kẻo
                                        muộn</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                            <img src="https://thegioiconhantao.com.vn/wp-content/uploads/2017/06/du-an-san-bong-tri-ton-an-giang2.png"
                                class="card-img-top" style="border-radius: 30px;" alt="...">

                            <div class="card-body">
                                <h6 class="card-title cursor-pointer">Sân bóng Đa Phước 2</h6>
                                <h7 class="card-title cursor-pointer">Khu Vực: Thanh Khê</h7>
                                <h7 class="card-title cursor-pointer">
                                    <p>Số sân: 5</p>
                                </h7>
                                <h5 class="card-title cursor-pointer mt-1">Giá : 350.000đ</h5>

                                <div class="d-flex align-items-center mt-3 fs-6">
                                    <div class="cursor-pointer">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <p class="mb-0 ms-auto">4.2(182)</p>
                                </div>
                                <div class=" mt-2 text-center ">
                                    <button class=" btn btn-info w-100 " style="border-radius: 20px;">Đặt ngay kẻo
                                        muộn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card">
            <div class="card-header mt-2">
                <h4>Đánh giá sân thể thao</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-4">
                        <h5 class="ms-5 mt-2">Trung Bình</h5>
                        <div class="ms-5 mt-3">
                            <h2>5.0 <i class="bx bxs-star text-warning"></i></h2>
                        </div>
                        <div class="d-flex ms-2 mt-4 ">
                            <a href="#" class="btn btn-outline-primary"><span class="text-center">Đánh giá & Nhận xét</span></a>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="d-flex align-items-center fs-4 ">
                            <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>

                            </div>
                        </div>
                        <div class="d-flex align-items-center fs-4 ">
                            <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                            </div>
                        </div>
                        <div class="d-flex align-items-center fs-4 ">
                            <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                            </div>
                        </div>
                        <div class="d-flex align-items-center fs-4 ">
                            <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                            </div>
                        </div>
                        <div class="mt-1 d-flex align-items-center fs-4 ">
                            <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="progress mt-2">
                            <div style="width: 0%;" class="progress-bar progress-bar-warning"></div>
                            <div class="star-percent "><span>25</span>%</div>
                        </div>
                        <div class="progress mt-4">
                            <div style="width: 0%;" class="progress-bar progress-bar-warning"></div>
                            <div class="star-percent "><span>20</span>%</div>
                        </div>
                        <div class="progress mt-4">
                            <div style="width: 0%;" class="progress-bar progress-bar-warning"></div>
                            <div class="star-percent "><span>15</span>%</div>
                        </div>
                        <div class="progress mt-4">
                            <div style="width: 0%;" class="progress-bar progress-bar-warning"></div>
                            <div class="star-percent "><span>10</span>%</div>
                        </div>
                        <div class="progress mt-4">
                            <div style="width: 0%;" class="progress-bar progress-bar-warning"></div>
                            <div class="star-percent "><span>5</span>%</div>
                        </div>
                    </div>
                </div>

                <!-- <div class="progress"><div style="width: 0%;" class="progress-bar progress-bar-warning"></div></div>
                <div class="star-percent"><span>0</span>%</div> -->

            </div>
        </div>
    </div>



</template>
<script>
export default {

}
</script>
<style></style>