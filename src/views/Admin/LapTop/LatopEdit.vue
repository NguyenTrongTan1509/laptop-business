<template>
    <div>
        <v-dialog v-model="dialog" max-withd="640px">
            <v-card>
                <v-card-title class="text-center">
                    <span>Chỉnh sửa thông tin</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Tên Dụng cụ" v-model="data.tenLaptop">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="">
                                    <v-file-input v-model="image" type="file" accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Chọn ảnh" prepend-icon="mdi-camera" label="Hình ảnh"
                                        @change="handleImageChange"></v-file-input>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Giá bán" v-model="data.gia">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="this.hangs" v-model="data.hangId" label="Chọn hãng"
                                        item-title="tenHang" item-value="hangId"></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-textarea label="Mô tả" v-model="data.moTa">
                                    </v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" @click="$emit('close')">
                        Hủy
                    </v-btn>
                    <v-btn color="blue" @click="addItem">
                        Lưu
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'AddView',
    data() {
        return {
            data: {
                latopId: '',
                tenLaptop: '',
                hinhAnh: '',
                gia: '',
                hangId: '',
                moTa: '',
            },
            image: '',
            hangs: []
        }
    },
    props: ['dialogEdit', 'currentItem'],
    computed: {
        dialog: {
            get() {
                return this.dialogEdit;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    },
    watch: {
        currentItem: function () {
            this.data.latopId = this.currentItem.latopId;
            this.data.hinhAnh = this.currentItem.hinhAnh;
            this.data.gia = this.currentItem.gia;
            this.data.tenLaptop = this.currentItem.tenLaptop;
            this.data.hangId = this.currentItem.hangId;
            this.data.moTa = this.currentItem.moTa;
        }
    },
    methods: {
        handleImageChange(event) {
            this.data.hinhAnh = event.target.files[0];
        },
        addItem() {
            axios.put('https://localhost:7011/api/LapTop/' + this.data.latopId, this.data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    alert(response.data);
                    this.$emit('close');
                    this.$emit('updateData');
                }).catch(error =>
                    console.log(error));
        },
        hang() {
            axios.get('https://localhost:7011/api/Hang').then(res => {
                this.hangs = res.data;
            }).catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.hang();
    }
}
</script>
  
<style></style>