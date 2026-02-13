<template>
  <img :src="src || fallbackSrc" :alt="alt" :style="imageStyle" />
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },

  alt: {
    type: String,
    default: '',
  },

  width: {
    type: [String, Number],
    default: 'auto',
  },

  height: {
    type: [String, Number],
    default: 'auto',
  },

  maxWidth: {
    type: [String, Number],
    default: '100%',
  },

  borderRadius: {
    type: String,
    default: '0',
  },

  objectFit: {
    type: String as PropType<'cover' | 'contain' | 'fill' | 'none' | 'scale-down'>,
    default: 'none',
  },

  fallbackSrc: {
    type: String,
    default: 'https://s4-goods.ozstatic.by/1000/717/340/101/101340717_0.jpg', // картинка на случай ошибки загрузки
  },
});

const imageStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  maxWidth: typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth,
  borderRadius: props.borderRadius,
  objectFit: props.objectFit,
}));
</script>
