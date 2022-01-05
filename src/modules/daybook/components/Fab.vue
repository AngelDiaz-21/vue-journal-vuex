<template>
    <button class="btn btn-primary">
        <!-- En el append(:class) estamos recibiendo la propertie icon, que lo que hara es que cuando reciba un id mostrara o cambiara el icono de agregar por el de save o guardar  -->
        <i  class="fa fa-2x"
            :class="icon"></i>
    </button>
</template>

<script>
export default {
    props:{
        icon:{
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>

button{
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}

</style>