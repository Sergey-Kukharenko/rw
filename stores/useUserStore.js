import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    authorized: true,
    fullName: 'Alfred Penniworth',
    bonuses: '1 280'
  });

  const logIn = () => user.value.authorized = true;

  const logOut = () => user.value.authorized = false

  return {user, logIn, logOut};
});
