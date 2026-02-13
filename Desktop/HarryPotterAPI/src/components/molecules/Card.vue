<template>
  <div class="card">
    <div class="card__header">
      <div class="card__image">
        <Image :src="imageSrc" :alt="character" />
      </div>

      <Text as="h3" :text="name" />
    </div>

    <div class="card__footer">
      <div class="card__cardName">
        <Text as="span" :text="name" />
      </div>

      <div class="card__cardDescription">
        <Text as="p" :text="description" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Image from '../atoms/Image.vue';
import Text from '../atoms/Text.vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },

  character: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: '',
  },
});
</script>
