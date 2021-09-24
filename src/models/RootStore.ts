import { makeAutoObservable } from 'mobx';
import { FeedModel } from './FeedModel'; 
import { UserModel } from './UserModel';

const rootStore = new class {
  constructor(
    public readonly userModel: UserModel,
    public readonly feedModel: FeedModel
  ) {
    makeAutoObservable(this);
  }
}(
  new UserModel(),
  new FeedModel()
)

export {
  rootStore
};