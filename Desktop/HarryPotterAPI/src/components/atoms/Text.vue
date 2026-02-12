<template>
  <component :is="as" :style="textStyle">{{ text }}</component>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

type TTextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type TTextAlign = 'left' | 'center' | 'right';

const props = defineProps({
  text: {
    type: String,
    required: true, // text обязательно должен быть передан при использовании компонента
  },

  as: {
    type: String as PropType<TTextTag>,
    default: 'p',
  },

  color: {
    type: String,
    default: 'neutral-textLow',
  },

  textAlign: {
    type: String as PropType<TTextAlign>,
    default: 'left',
  },

  fontWeight: {
    type: String,
    default: '16px',
  },

  fontSize: {
    type: String as PropType<'caption' | 'base' | 'highlight'>,
    default: 'base',
  },

  textDecoration: {
    type: String as PropType<'none' | 'underline' | 'line-through'>,
    default: 'none',
  },
});

const textStyle = computed(() => ({
  color: props.color,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  textDecoration: props.textDecoration,
}));
</script>
