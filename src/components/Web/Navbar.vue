<template>
    <v-app-bar app color="dark" dark>
        <v-toolbar-title style="width: 350px">
            <a href="/" class="white--text" style="text-decoration: none;color:white;">Website Kinh Doanh Laptop</a>
        </v-toolbar-title>
        <div>
            <v-btn v-if="!$store.state.id" icon color="white" to="/dangnhap">
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-menu v-else transition="scale-transition" style="cursor: pointer">
                <template v-slot:activator="{ props }">
                    <v-btn icon color="white" v-bind="props">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
                        <v-list-item-title @click="handleAction(item.title)">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

    </v-app-bar>
</template>
<script>
export default {
    name: 'NavbarView',
    data() {
        return {
            //search: '',
            items: [
                { title: 'Đăng xuất' },
            ],
        }
    },
    computed: {

    },
    methods: {
        handleAction(action) {
            if (action === 'Đăng xuất') {
                this.performLogout();
            }
        },
        performLogout() {
            if (confirm('Bạn có muốn đăng xuất')) {
                this.$store.dispatch('DangXuat');
                alert('Bạn đã đăng xuất thành công');
                this.$router.push('/');
            }
        }
    }
}
</script>
  