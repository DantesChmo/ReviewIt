import { makeAutoObservable } from 'mobx';

class UserModel {
  firstName = '';

  constructor() {
    makeAutoObservable(this);
  }

  getName() {
    return this.firstName;
  }

  setName(text: string) {
    this.firstName = text;
  }
}

export {
  UserModel
};
