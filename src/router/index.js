import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/Client/Homepage/index.vue')
    },
    {
        path: '/gioi-thieu',
        component: () => import('../components/Client/GioiThieu/index.vue')
    },
    {
        path: '/lien-he',
        component: () => import('../components/Client/LienHe/index.vue')
    },
    {
        path: '/su-kien',
        component: () => import('../components/Client/SuKien/index.vue')
    },
    {
        path: '/dich-vu',
        component: () => import('../components/Client/DichVu/index.vue')
    },
    //quan li nhan vien
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue'),
        meta: { layout: "Ad" },
    },
    //quan li san
    {
        path: '/admin/quan-li-san',
        component: () => import('../components/Admin/QuanLiSan/index.vue'),
        meta: { layout: "Ad" },
    },
    //chi tiet dat san
    {
        path: '/chi-tiet-dat-san',
        component: () => import('../components/Client/ChiTietDatSan/index.vue')
    },
    //chi tiet dat san2
    {
        path: '/chi-tiet-dat-san2',
        component: () => import('../components/Client/ChiTietDatSan2/index.vue')
    },
    //dang ki
    {
        path: '/admin/dang-ky',
        component: () => import('../components/Admin/DangKy/index.vue'),
        meta: { layout: "Ad" },
    },
    //dang nhap
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: "Ad" },
    },
    //quen mat khau
    {
        path: '/admin/quen-mat-khau',
        component: () => import('../components/Admin/QuenMatKhau/index.vue'),
        meta: { layout: "Ad" },
    },
    //thong ke
    {
        path: '/admin/thong-ke',
        component: () => import('../components/Admin/ThongKe/index.vue'),
        meta: { layout: "Ad" },
    },
    //xac nhan dat san
    {
        path: '/xac-nhan-dat-san',
        component: () => import('../components/Client/XacNhanDatSan/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router