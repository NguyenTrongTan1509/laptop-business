<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title class="primary white--text">
                <span class="headline">Mua hàng</span>
            </v-card-title>
            <v-card-text>
                <!-- Nội dung Mua hàng -->
                <v-text-field v-model="data.hoTen" label="Họ và tên"></v-text-field>
                <v-text-field v-model="data.diaChi" label="Địa chỉ giao hàng"></v-text-field>
                <v-text-field v-model="data.sdt" label="Số điện thoại"></v-text-field>
                <v-text-field v-model="data.tongTien" readonly label="Tổng tiên"></v-text-field>
                <!-- Thêm các trường và thông tin Mua hàng khác nếu cần -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="placeOrder">Mua hàng</v-btn>
                <v-btn color="red" @click="closeDialog">Hủy</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: {
                nguoiDungId: '',
                hoTen: '',
                diaChi: '',
                tongTien: '',
                sdt:'',
                lapTopId: ''
            }
        };
    },
    props: ['dialogAdd', 'item'],
    computed: {
        dialog: {
            get() {
                return this.dialogAdd;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    },
    watch: {
        item: function () {
            this.data.tongTien = this.item.gia;
            this.data.lapTopId = this.item.latopId;
        }
    },
    methods: {
        openDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.$emit('close');
            this.data.hoTen = '';
            this.data.diaChi = '';
            this.data.tongTien = '';
            this.data.sdt = '';
            this.data.lapTopId = '';
        },
        placeOrder() {
            this.data.nguoiDungId = this.$store.state.id;
            axios.post('https://localhost:7011/api/HoaDon', this.data).then(res => {
                alert(res.data);
            }).catch(error => {
                console.log(error);
            })
            this.closeDialog();
        }
    }
};
</script>
  
<style scoped>
/* Thêm CSS tùy chỉnh cho dialog đặt hàng */
</style>
  