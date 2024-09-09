<template>
    <v-carousel cycle interval="3000" hide-delimiters>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name:'CarouselView',
    data() {
        return {
            items: [
                {
                    src: 'https://laptopgiatot.vn/wp-content/uploads/2019/10/20180820_banner_01.jpg',
                },
                {
                    src: 'https://laptopkimanh.vn/upload/image/album/z3808412457441_3841a0146752687a8e3f6928cc44b79a.jpg',
                },
                {
                    src: 'https://laptopgiatot.vn/wp-content/uploads/2019/10/20180820_banner_01.jpg',
                },
                {
                    src: 'https://cdn.tgdd.vn/Files/2022/01/02/1408561/laptopcu_1280x720-800-resize.jpg',
                },
            ],
        }
    },
}
</script>