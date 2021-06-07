import {onBeforeUpdate} from 'vue';

export default function () {
    const slidesRefs: Array<Element> = [];

    const setSlideRef = (slide: Element) => {
        slidesRefs.push(slide);
    };

    onBeforeUpdate(() => {
        slidesRefs.length = 0;
    });

    return {slidesRefs, setSlideRef};
}
