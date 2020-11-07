import storage from '../utils/storage';
import client from './client';

export const login = credentials =>
  client.login(credentials).then(auth => {
    const { id, accessToken } = auth;
    storage.set('auth', { id, accessToken });
    return id;
  });

export const logout = () =>
  client.logout().then(() => {
    storage.remove('auth');
  });
