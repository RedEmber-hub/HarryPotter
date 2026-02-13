export async function fetchCharacters() {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const data = await response.json();
  console.log(data);
  return data;
}

export async function characterInformationByID(id: string) {
  const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getCharacterInformationByHouse(house: 'Gryffindor' | 'Slytherin' | null) {
  const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`);
  const data = await response.json();
  console.log(data);
  return data;
}
