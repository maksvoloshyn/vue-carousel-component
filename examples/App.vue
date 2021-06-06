<template>
    <h1 class="text-5xl">Vue Carousel</h1>
    <div class="border my-10">
        <carousel-component :slides="slides">
            <template #slide="{context}">
                <div
                    class="h-96 flex flex-col justify-center"
                    :class="context.css"
                >
                    <h3 class="text-3xl">{{ context.title }}</h3>
                    <p class="mt-3">{{ context.content }}</p>
                </div>
            </template>
        </carousel-component>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Carousel from '../src/components/Carousel.vue';

    const defaultSlides = [
        {
            title: 'Slide 1',
            content: 'Some content for the slide#1',
            css: 'bg-gray-100',
        },
        {
            title: 'Slide 2',
            content: 'Some content for the slide#2',
            css: 'bg-blue-100',
        },
        {
            title: 'Slide 3',
            content: 'Some content for the slide#3',
            css: 'bg-purple-100',
        },
    ];

    export default defineComponent({
        name: 'App',

        components: {
            'carousel-component': Carousel,
        },

        data() {
            return {
                slides: defaultSlides.map(slide => ({...slide})),
            };
        },
    });
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
