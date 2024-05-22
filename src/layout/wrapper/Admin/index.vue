<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <TopAdmin></TopAdmin>
            <MenuAdmin></MenuAdmin>
        </div>
        <div class="page-wrapper">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top">
            <i class='bx bxs-up-arrow-alt'></i>
        </a>
        <BotAdmin></BotAdmin>
    </div>
</template>
<script>
import TopAdmin from "../../components/Admin/TopAdmin.vue";
import MenuAdmin from "../../components/Admin/MenuAdmin.vue";
import BotAdmin from "../../components/Admin/BotAdmin.vue";
import "../../../assets/assets_Admin/js/bootstrap.bundle.min.js";
import "../../../assets/assets_Admin/js/jquery.min.js";
import "../../../assets/assets_Admin/plugins/simplebar/js/simplebar.min.js";
import "../../../assets/assets_Admin/plugins/metismenu/js/metisMenu.min.js";
import "../../../assets/assets_Admin/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../../assets/assets_Admin/js/index.js";
import "../../../assets/assets_Admin/js/app.js";

export default {
    name: "app",
    components: {
        TopAdmin, MenuAdmin, BotAdmin
    }
}
</script>
<style>
@import "../../../assets/assets_Admin/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../../assets/assets_Admin/plugins/simplebar/css/simplebar.css";
@import "../../../assets/assets_Admin/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../../assets/assets_Admin/plugins/metismenu/css/metisMenu.min.css";
@import "../../../assets/assets_Admin/css/bootstrap.min.css";
@import "../../../assets/assets_Admin/css/bootstrap-extended.css";
@import "../../../assets/assets_Admin/css/app.css";
@import "../../../assets/assets_Admin/css/icons.css";
@import "../../../assets/assets_Admin/css/dark-theme.css";
@import "../../../assets/assets_Admin/css/semi-dark.css";
@import "../../../assets/assets_Admin/css/header-colors.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
</style>
