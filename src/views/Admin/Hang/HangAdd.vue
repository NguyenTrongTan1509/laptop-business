<template>
    <div>
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title class="text-center">
                    <span>Thêm mới thông tin</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Tên hãng" prepend-icon="mdi-information-outline"
                                        v-model="data.tenHang">
                                    </v-text-field>
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
                tenHang: '',
            }
        }
    },
    props: ['dialogAdd'],
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
    methods: {
        addItem() {
            axios.post('https://localhost:7011/api/Hang', this.data)
                .then(response => {
                    alert(response.data);
                    this.$emit('close');
                    this.$emit('updateData');
                    this.data.tenHang = '';
                }).catch(error =>
                    console.log(error));
        }
    }
}
</script>
  

<style></style>