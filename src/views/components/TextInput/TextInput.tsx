import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import {
  TextInput as NativeTextInput,
  View,
  TouchableOpacity,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native';
import { TextInputStyle } from './TextInput.style';

interface Props {
  value?: string;
  label?: string;
  placeholder?: string;
  withClear?: boolean;
  onType(value: string): void;
  onFocus?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
}

const TextInput: FunctionComponent<Props> = (props) => {
  const [showClear, setClearVisibility] = useState(Boolean(props.withClear && props.value));
  const inputRef = useRef<NativeTextInput>(null);

  const onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    console.log(Object.keys((event as any)));
    props.onFocus && props.onFocus(event);
  };

  const onChangeText = useCallback((text: string) => {
    props.onType(text);
  }, [props.onType]);

  const onClearPress = () => {
    onChangeText('');
    inputRef.current!.clear();
  };

  const renderClearButton = () => {
    if (showClear) {
      return (
        <TouchableOpacity
          style={TextInputStyle.clear}
          onPress={onClearPress}
        >
          <Text>+</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderLabel = () => {
    if (props.label) {
      return (
        <Text>
          {props.label}
        </Text>
      );
    }
  };

  return (
    <View style={TextInputStyle.root}>
      {renderLabel()}
      <NativeTextInput
        ref={inputRef}
        value={props.value}
        placeholder={props.placeholder}
        style={TextInputStyle.input}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
      {renderClearButton()}
    </View>
  );
};

export {
  TextInput
};
