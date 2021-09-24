import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useStore } from '../../../store';
import { TextInput } from '../../components/TextInput';

const MainPage: FunctionComponent = observer(() => {
  const userModel = useStore('userModel');

  return (
    <View style={style.wrap}>
      <TouchableOpacity style={style.button} onPress={() => userModel.setName('MAKA')}>
        <Text>Test {userModel.getName()}</Text>
      </TouchableOpacity>
      <TextInput withClear placeholder="email" onType={(value) => userModel.setName(value)} />
      <TextInput withClear placeholder="password" onType={(value) => console.log(value)} />
    </View>
  );
});

const style = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    backgroundColor: 'tomato',
    borderRadius: 12
  }
});

export {
  MainPage
};
