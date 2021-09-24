import * as React from 'react';
import type { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { config } from './config';

interface Props {
  navigation?: ReactNode;
  navigationPosition?: Props['navigation'] extends undefined ? never : 'top' | 'bottom';
}

const Router: FunctionComponent<Props> = (props) => {
  const renderRoutes = () => {
    return Object.entries(config).map(([path, route], key) => (
      <Route
        key={`${key}-${path}`}
        path={path}
        exact={route.exact}
        component={route.component}
      />
    ));
  };

  const renderAppWithNavigation = () => {
    if (props.navigationPosition === 'top') {
      return (
        <>
          {props.navigation}
          {renderRoutes()}
        </>
      );
    }

    return (
      <>
        {renderRoutes()}
        {props.navigation}
      </>
    );
  };

  return (
    <NativeRouter>
      <View>
        {props.navigation ? renderAppWithNavigation() : renderRoutes()}
      </View>
    </NativeRouter>
  );
};

export {
  Router
};
