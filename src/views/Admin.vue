<template>
    <div>
        <v-app>
            <SideBar />
            <Topbar />
            <v-main>
                <v-container class="py-3 px-6">
                    <router-view />
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
 
<script>
import SideBar from '@/components/Admin/SideBar.vue';
import Topbar from '@/components/Admin/Topbar.vue';

export default {
    name: 'AdminView',
    components: { SideBar, Topbar }
}
</script>
 
<style></style>