import { action, makeObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { Storage } from '~/services';
import { UserAPI } from '~/services/api';

export default class UserStore {
  @persist
  @observable
  data: User = {
    email: '',
    password: '',
  };

  constructor() {
    makeObservable(this);
  }

  @action
  login = async (credentials: User): Promise<void> => {
    await UserAPI.login(credentials);
  };

  @action
  logout = (): void => {
    this.data = { email: '', password: '' };
    Storage.clearStorage();
  };
}
