<template>
    <div class="r-carousel">
        <div class="r-carousel__container">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                :ref="setSlideRef"
                class="r-carousel__slide"
            >
                <slot name="slide" v-bind="{context: slide}"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, onBeforeUpdate, watch} from 'vue';
    import useRefsArray from '../use/useRefsArray';

    export default defineComponent({
        name: 'Carousel',

        emits: ['update:currentIndex'],

        props: {
            slides: {
                type: Array,
                default: () => [],
            },

            currentIndex: {
                type: Number,
                default: 0,
            },
        },

        setup(props) {
            const {setSlideRef, slidesRefs} = useRefsArray();

            watch(
                () => props.currentIndex,
                value => {
                    slidesRefs[value]?.scrollIntoView({behavior: 'smooth'});
                }
            );

            return {
                setSlideRef,
            };
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
