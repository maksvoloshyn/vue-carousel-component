<template>
    <div class="r-carousel">
        <div class="r-carousel__container">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="r-carousel__slide"
            >
                <slot name="slide" v-bind="{context: slide}"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'Carousel',

        props: {
            slides: {
                type: Array,
                default: () => [],
            },
        },
    });
</script>

<style scoped>
    .r-carousel {
        width: 100%;
        overflow: scroll;
        scroll-snap-type: x mandatory;
    }

    .r-carousel__container {
        display: flex;
    }

    .r-carousel__slide {
        flex-grow: 1;
        min-width: 100%;
        scroll-snap-align: start;
    }
</style>
