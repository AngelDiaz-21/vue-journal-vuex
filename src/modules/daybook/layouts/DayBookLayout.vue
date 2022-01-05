<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <!-- Este div es para mostrar el entry list, es decir, va a ser una lista de todas las entradas que voy teniendo en el diario -->
            <EntryList />
        </div>
        <div class="col">
            <!-- Este div va a tomar todo el tamaño restante -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue' 

export default {
    components:{
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
    }
}
</script>