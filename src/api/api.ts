import { GetPostsResponse } from './types';

class Api {
  static async getFeed(): Promise<GetPostsResponse> {
    return await Promise.resolve({});
  }
}

export {
  Api
};
