<template>
   <div>
    <v-app-bar color="green" app dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn>Hire me</v-btn>
            <v-btn>Blog</v-btn>
            <v-btn>
                <v-icon>mdi-cat</v-icon>
            </v-btn>
            <v-btn>
                <v-badge color="red" content="9+" right overlap>
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
            </v-btn>
            <v-btn @click=DangXuat>
                <v-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-avatar>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
   </div>
</template>
  
<script>
export default {
    name: 'TopbarView',
    methods: {
        DangXuat() {
            if (confirm('Bạn có muốn đăng xuất ?')) {
                this.$store.dispatch('DangXuat');
                alert('Bạn đã đăng xuất thành công');
                this.$router.push('/');
            }
        }
    }
}
</script>
  
<style></style>