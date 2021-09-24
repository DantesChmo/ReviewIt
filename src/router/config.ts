import type { FunctionComponent } from 'react';
import { MainPage } from '../views/pages/MainPage';

interface ConfigItemParams {
  exact?: boolean;
  component: FunctionComponent;
}

type Config = Record<string, ConfigItemParams>;

export const config: Config = {
  '/': {
    exact: true,
    component: MainPage
  }
};
