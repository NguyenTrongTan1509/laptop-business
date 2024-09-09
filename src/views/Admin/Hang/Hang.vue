<template>
    <div>
        <v-row class="mt-3">
            <v-icon>mdi-home</v-icon>
            <h4 class="ml-2">Danh sách Hãng</h4>
            <v-spacer></v-spacer>
            <v-btn icon color="primary" size="small" @click="dialogAdd = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-row>
        <v-row class="mt-1">
            <v-col>
                <v-card>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Hãng</th>
                                <th class="text-center">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in displayed" :key="index">
                                <td class="text-center">{{ index + 1 }}</td>
                                <td class="text-center">{{ item.tenHang }}</td>
                                <td class="text-center">
                                    <v-btn color="blue" size="x-small" class="mr-3" icon @click="dialogEdit = true,
                                        currentItem = item">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>

                                    <v-btn color="red" size="x-small" class="mr-3" icon
                                        @click="dialogDelete = true, DeleteId = item.hangId">
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
        <HangAdd :dialogAdd="dialogAdd" @close="dialogAdd = false" @updateData="danhsach" />
        <HangEdit :dialogEdit="dialogEdit" @close="dialogEdit = false" @updateData="danhsach"
            :currentItem="currentItem" />
        <v-dialog max-width="400" v-model="dialogDelete">
            <c-card>
                <v-alert type="error">
                    <v-row align="center">
                        <v-col cols="11" class="text-center">
                            Bạn có muốn xóa hay không ?
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
import HangAdd from '@/views/Admin/Hang/HangAdd.vue'
import HangEdit from '@/views/Admin/Hang/HangEdit.vue'
export default {
    components: { HangAdd ,HangEdit},
    name: 'HangView',
    data() {
        return {
            datas: [],
            dialogAdd: false,
            dialogEdit: false,
            currentItem: '',
            dialogDelete: false,
            DeleteId: '',
            currentPage: 1,
            itemsPerPage: 4,
        }
    },
    computed: {
        displayed() {
            if (this.datas && this.datas.length > 0) {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.datas.slice(startIndex, endIndex);
            } else {
                return [];
            }
        },
        totalPages() {
            return Math.ceil(this.datas.length / this.itemsPerPage);
        }
    },
    methods: {
        danhsach() {
            axios.get('https://localhost:7011/api/Hang').then(res => {
                this.datas = res.data;
            }).catch(error => {
                console.log(error);
            })
        },
        deleteItem() {
            axios.delete('https://localhost:7011/api/Hang/' + this.DeleteId).then(res => {
                alert(res.data);
                this.dialogDelete = false;
                this.danhsach();
            }).catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.danhsach();
    }
}
</script>

<style></style>