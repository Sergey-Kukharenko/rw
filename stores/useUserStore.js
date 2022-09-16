import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    authorized: true,
    fullName: 'Alfred Penniworth',
    bonuses: '1 280',
    searchHistory: [
      'Tulips',
      'Happy birthday',
      'Roses',
      'Bouquet with roses',
      'Peonies roses',
      'Bouquets under £30',
      'Cheap bouquets',
    ]
  })

  const logIn = () => user.value.authorized = true

  const logOut = () => user.value.authorized = false

  const addToHistory = (payload) => user.value.searchHistory.push(payload)

  const removeFromHistory = (payload) => user.value.searchHistory.splice(user.value.searchHistory.indexOf(payload), 1)

  return { user, logIn, logOut, addToHistory, removeFromHistory }
})
