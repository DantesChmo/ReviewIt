import { useContext, createContext, useMemo } from 'react';
import { rootStore } from '../models';

type RootStoreType = typeof rootStore;

const Store = createContext(rootStore);

function useStore<T extends keyof RootStoreType>(modelName: T): RootStoreType[T] {
  const context = useContext(Store); 

  return context[modelName];
}

export {
  Store,
  useStore
};
