<template>
    <div>
        <v-row class="mt-3">
            <v-icon>mdi-home</v-icon>
            <h4 class="ml-2">Danh sách đơn hàng</h4>
        </v-row>
        <v-row class="mt-1">
            <v-col>
                <v-card>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Họ tên người mua</th>
                                <th class="text-center">Địa chỉ</th>
                                <th class="text-center">Số điện thoại</th>
                                <th class="text-center">Tổng tiền</th>
                                <th class="text-center">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in display" :key="index">
                                <td class="text-center">{{ index + 1 }}</td>
                                <td class="text-center">{{ item.hoTen }}</td>
                                <td class="text-center">{{ item.diaChi }}</td>
                                <td class="text-center">{{ item.sdt }}</td>
                                <td class="text-center">{{ item.tongTien }} VNĐ</td>
                                <td class="text-center">
                                    <v-btn color="red" size="x-small" class="mr-3" icon
                                        @click="dialogDelete = true, Delete = item.hoaDonId">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
        <v-pagination prev-icon="mdi-menu-left" next-icon="mdi-menu-right" class="pa-8" :length="totalPages"
            v-model="currentPage"></v-pagination>
        <v-dialog max-width="400" v-model="dialogDelete">
            <c-card>
                <v-alert type="error">
                    <v-row align="center">
                        <v-col cols="11" class="text-center">
                            Bạn có muốn hủy hay không ?
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="6" class="text-center">
                            <v-btn variant="text" @click="deleteItem">Đồng ý</v-btn>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <v-btn variant="text" @click="dialogDelete = false">Hủy bỏ</v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </c-card>

        </v-dialog>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SachView',
    data() {
        return {
            datas: [],
            currentItem: '',
            dialogDelete: false,
            Delete: '',
            currentPage: 1,
            itemsPerPage: 6,
        };
    },
    computed: {
        display() {
            if (this.datas && this.datas.length > 0) {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.datas.slice(startIndex, endIndex);
            }
            else {
                return [];
            }
        },
        totalPages() {
            return Math.ceil(this.datas.length / this.itemsPerPage);
        }
    },
    methods: {
        danhsach() {
            axios.get('https://localhost:7011/api/HoaDon').then(res => {
                this.datas = res.data;
            }).catch(error => {
                console.log(error);
            });
        },
        deleteItem() {
        console.log(this.Delete);
            axios.delete('https://localhost:7011/api/HoaDon/' + this.Delete).then(res => {
                alert(res.data);
                this.dialogDelete = false;
                this.danhsach();
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.danhsach();
    },

}
</script>

<style></style>