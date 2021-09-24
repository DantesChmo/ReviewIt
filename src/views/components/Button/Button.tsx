import React, { FunctionComponent, useCallback } from 'react';
import { Button as NativeButton, NativeSyntheticEvent, NativeTouchEvent, TouchableOpacity} from 'react-native';
import { ButtonStyles } from './Button.style';

interface Props {
  inner: React.ReactNode;
  onPress(event: NativeSyntheticEvent<NativeTouchEvent>): void;
  isNativeButton?: boolean;
}

const Button: FunctionComponent<Props> = (props) => {
  const onPress = useCallback((event: NativeSyntheticEvent<NativeTouchEvent>) => {
    props.onPress(event);
  }, [props.onPress]);

  const renderNativeButton = () => {
    return (
        <NativeButton title={''} onPress={onPress} />
    );
  };

  const renderButton = () => {
    return (
      <TouchableOpacity style={ButtonStyles.wrapper}></TouchableOpacity>
    );
  };

  const render = () => {
    return props.isNativeButton ? renderNativeButton() : renderButton();
  };

  return render();
};

export {
  Button
};
