<template>
    <v-app>
        <v-main>
            <v-container class="register-container">
                <v-card class="register-card">
                    <v-card-title class="register-title">Đăng ký</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="register">
                            <v-text-field v-model="data.hoTen" label="Họ tên" outlined></v-text-field>
                            <v-text-field v-model="data.taiKhoan" label="Tài khoản" outlined></v-text-field>
                            <v-text-field v-model="data.matKhau" label="Password" type="password" outlined></v-text-field>
                            <v-btn type="submit" color="primary" class="register-button">Đăng ký</v-btn>
                            <p>Bạn đã có tài khoản? <router-link to="/dangnhap">Đăng nhập ngay</router-link>.</p>
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
                hoTen: '',
                taiKhoan: '',
                matKhau: '',
                quyen: 0
            }
        };
    },
    methods: {
        register() {
            axios.post('https://localhost:7011/api/NguoiDung/DangKy',this.data).then(res => {
                alert(res.data);
                this.$router.push('/dangnhap');
            })
        }
    }
};
</script>
  
<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.register-card {
    max-width: 400px;
    width: 100%;
    padding: 24px;
}

.register-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;
}

.register-button {
    width: 100%;
}
</style>