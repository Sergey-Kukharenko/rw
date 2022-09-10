import {defineStore} from 'pinia';

export const useAddressStore = defineStore('data', () => {
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)

  const getData = async (query) => {
    if(query) {
      loading.value = true
      error.value = null;
      try {
        const result = await fetch(`https://api.datamuse.com/sug?s=${query}&max=10`);
        data.value = await result.json();
      } catch (err) {
        error.value = err;
      }
      loading.value = false;
    }
  };

  return {data, loading, error, getData};
});
