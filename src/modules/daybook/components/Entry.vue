<template>
<!-- Como estamos dentro del template no es necesario poner el this. para acceder al router, eso solo se ocupa en la parte de javascript -->
<!-- Los params son los que necesito enviar -->
    <div    class="entry-container mb-3 pointer p-2"
            @click="$router.push({name: 'entry', params: {id:10}})"
            >
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">04</span>
            <span class="mx-1 fs-5">Enero</span>
            <span class="mx-2 fw-light">2021</span>
        </div>

        <div class="entry-description">
            Reprehenderit commodo pariatur velit in do eiusmod qui ut est laborum officia dolor occaecat. Duis nostrud excepteur est sunt sunt aliquip eiusmod ipsum incididunt tempor. Officia magna eu non ea officia irure. Tempor non reprehenderit dolore commodo id esse tempor enim occaecat elit occaecat. Do officia est aliqua ullamco et.
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

// Esto ya es propio del sass
    &:hover{
        // Le decimos que tomamos el color gris y lo aclaramos en un 45%
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    // Hacemos que este siempre del mismo elemento
    .entry-description{
        font-size: 12px;
    }
}

</style>