<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { CharacterInterface } from './types/Character.type';

const characters = ref<CharacterInterface[]>([]);
const currentCharacter = ref<CharacterInterface | null>(null);
const characterHouse = ref<'Gryffindor' | 'Slytherin' | null>(null);

async function fetchCharacters() {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const data = await response.json();
  console.log(data);
  return data;
}

onMounted(async () => {
  characters.value = await fetchCharacters();
});

// function characterInformation(character: CharacterInterface) {
//   currentCharacter.value = character;
//   console.log(character);
// }

async function characterInformationByID(id: string) {
  const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getCharacterInformationByHouse(house: 'Gryffindor' | 'Slytherin' | null) {
  const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`);
  const data = await response.json();
  console.log(data);
  return data;
}

async function onChange(value: 'Gryffindor' | 'Slytherin' | null) {
  characters.value = await getCharacterInformationByHouse(value);
}
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="container_button"><button @click="fetchCharacters">Получить информацию</button></div>
      <div class="container_select">
        <select v-model="characterHouse" @change="onChange(characterHouse)">
          <option value="">Выберите факультет</option>
          <option value="Gryffindor">Гриффиндор</option>
          <option value="Slytherin">Слизерин</option>
        </select>
      </div>

      <div class="characterCardList">
        <div
          class="characterCard"
          v-for="character in characters"
          :key="character.id"
          @click="characterInformationByID(character.id)"
        >
          <img :src="character.image" alt="Фото персонажа" />
          <span class="characterCard__name">{{ character.name }}</span>
          <span class="characterCard__gender">{{ character.gender }}</span>
          <span class="characterCard__house">{{ character.house }}</span>
        </div>
      </div>

      <span>{{ currentCharacter }}</span>
    </div>
  </div>

  <Text />
</template>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;

  width: 100%;

  gap: 100px;
}

.container {
  display: flex;
  gap: 10px;
}

.characterCardList {
  width: 100%;

  margin: 0 auto;
  padding: 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  align-items: stretch;
  justify-content: center;

  background-color: #f7f7f7;
}

.characterCard {
  display: flex;
  flex-direction: column;
  gap: 12px;

  background-color: #ffffff;
  padding: 16px;

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  max-width: 300px;
}
</style>
