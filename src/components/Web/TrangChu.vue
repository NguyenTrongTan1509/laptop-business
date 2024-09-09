<template>
    <div>
        <Carousel />
        <v-app>
            <v-main>
                <v-container>
                    <h1 class="text-center">Danh Mục Sản Phẩm</h1>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="search" label="Tìm Kiếm"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4" v-for="laptop in laptops" :key="laptop.latopId">
                            <v-card elevation="10" class="ma-4">
                                <v-img :src="laptop.hinhAnh" height="200"></v-img>
                                <v-card-title>Sản Phẩm: {{ laptop.tenLaptop }}</v-card-title>
                                <v-card-subtitle>Giá: {{ laptop.gia }}</v-card-subtitle>
                                <v-card-text>Mô tả: {{ laptop.moTa }}</v-card-text>
                                <v-card-actions>
                                    <v-btn v-if="$store.state.id" color="primary" @click="dialogAdd = true, item = laptop">Mua Ngay</v-btn>
                                    <v-btn v-else color="red">Mua Hàng</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>
        <BuyNow :dialogAdd="dialogAdd" :item="item" @close="dialogAdd = false" />
    </div>
</template>

<script>
import BuyNow from './BuyNow.vue';
import Carousel from './Carousel.vue';
import axios from 'axios';

export default {
    components: { Carousel, BuyNow },
    data() {
        return {
            dialogAdd: false,
            item: '',
            laptops: [],
            search:''
        };
    },
    watch:{
        search:function(newValue){
            if(newValue===''){
                this.danhsach();
            }else{
                this.TimKiem(newValue);
            }

        }
    },
    methods: {
        danhsach() {
            axios.get('https://localhost:7011/api/LapTop').then(res => {
                this.laptops = res.data;
            }).catch(error => {
                console.log(error);
            })
        },
        TimKiem(value){
            axios.get('https://localhost:7011/api/LapTop/Search/'+value).then(res=>{
                this.laptops=res.data;
            }).catch(error=>{
                console.log(error);
            })
        }
    },
    created() {
        this.danhsach();
    }
}
</script>
<style>
h1 {
    font-size: 24px;
    margin-bottom: 16px;
}

v-card {
    margin-bottom: 16px;
}

v-card-text {
    height: 60px;
    overflow: hidden;
}
</style>