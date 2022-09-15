import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    authorized: true,
    fullName: 'Alfred Penniworth',
    bonuses: '1 280'
  });

  const update = (payload) => {
    user.value.authorized = payload
  };

  return {user, update};
});
