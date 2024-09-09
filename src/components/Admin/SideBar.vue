<template>
    <v-navigation-drawer app>
        <v-toolbar color="green">
            <v-icon class="ml-2">mdi-home</v-icon>
            <v-toolbar-title class="mx-2">Trang quản trị</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-subheader>DANH MỤC</v-list-subheader>
            <v-list-item v-for="(item, i) in links" :key="i" :value="item" color="dark grey" :to="item.link">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <!-- eslint-disable -->
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: 'SideBar',
    data() {
        return {
            links: [
            { icon: 'mdi-package-variant-closed', text: 'Đơn hàng', link: '/admin/donhang' },
            { icon: 'mdi-menu', text: 'Sản phẩm', link: '/admin/latop' },
            { icon: 'mdi-watermark', text: 'Hãng', link: '/admin/hang' },
            ]
        }
    }
}
</script>
  
<style></style>