import storage from '../utils/storage';
import client from './client';

export const login = credentials =>
  client.login(credentials).then(auth => {
    storage.set('auth', auth);
    return auth;
  });

export const logout = () =>
  client.logout().then(() => {
    storage.remove('auth');
  });
