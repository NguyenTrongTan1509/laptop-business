<template>
    <v-app>
        <v-main>
            <v-container class="login-container">
                <v-card class="login-card">
                    <v-card-title class="login-title">Đăng nhập</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="login">
                            <v-text-field v-model="data.taiKhoan" label="Tên đăng nhập" outlined></v-text-field>
                            <v-text-field v-model="data.matKhau" label="Password" type="password" outlined></v-text-field>
                            <v-btn type="submit" color="primary" class="login-button">Đăng nhập</v-btn>
                            <p>Bạn chưa có tài khoản? <router-link to="/dangky">Đăng ký ngay</router-link>.</p>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: {
                taiKhoan: '',
                matKhau: ''
            }
        };
    },
    methods: {
        login() {
            axios.post('https://localhost:7011/api/NguoiDung/DangNhap',this.data).then(res => {
                alert(res.data.message);
                console.log(res.data);
                localStorage.setItem('token',res.data.token);
                this.$store.dispatch('DangNhap', res.data.id);
                if(res.data.quyen === 0){
                    alert('Chào Mừng Quý Khách')
                    this.$router.push('/');
                }else{
                    alert('Xin chào Admin')
                    this.$router.push('/admin')
                }
            }).catch(error=>{
                console.log(error);
            })
        },
    }
};
</script>
  
<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-card {
    max-width: 400px;
    width: 100%;
    position: relative;
    padding: 24px;
}

.login-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
}

.login-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;
}

.login-button {
    width: 100%;
}
</style>