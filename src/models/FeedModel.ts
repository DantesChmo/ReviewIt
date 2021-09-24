import { makeAutoObservable } from 'mobx';
import { Api } from '../api'

interface AuthorData {
  name: string;
  avatarUrl: string;
}

interface MapData {
}

interface ReactionsData {
}

interface PhotoData {
}

class PostModel {
  public isLoaded = false;

  constructor(
    private id: string | null = null,
    public authorData: AuthorData | null = null,
    public mapData: MapData | null = null,
    public reactionsData: ReactionsData | null = null,
    public photoData: PhotoData | null = null
  ) {
    makeAutoObservable(this);
  }

  public populate(): void {
  }

  public async vote(): Promise<void> {
  }

  public async hide(): Promise<void> {
  }

  public async loadMore(): Promise<void> {
  }
}

class FeedModel {
  private currentNumber = 0;

  private readonly offset = 50;

  public posts: PostModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public async getPartial(): Promise<void> {
    const data = await Api.getFeed();
  } 
}

export {
  FeedModel
};
