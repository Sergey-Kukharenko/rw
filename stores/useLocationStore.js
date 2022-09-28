import {defineStore} from 'pinia';

export const useLocationStore = defineStore('location', () => {
  const location = ref({
    city: 'London1',
    address: ''
  });

  const change = (payload) => {
    location.value = payload
  };

  return {location, change};
});
