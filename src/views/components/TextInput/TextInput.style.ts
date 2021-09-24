import { StyleSheet } from 'react-native';

const MARGIN = 10;
const WIDTH = 200;
const HEIGHT = 40;
const CLEAR_WIDTH = 20;
const CLEAR_HEIGHT = 20;
const CLEAR_TOP_POS = HEIGHT / 2 - CLEAR_HEIGHT / 2;
const CLEAR_RIGHT_POS = CLEAR_WIDTH / 2;

export const TextInputStyle = StyleSheet.create({
  root: {
    position: 'relative',
    width: WIDTH,
    height: HEIGHT,
    margin: MARGIN
  },
  clear: {
    position: 'absolute',
    right: CLEAR_RIGHT_POS,
    top: CLEAR_TOP_POS,
    width: CLEAR_WIDTH,
    height: CLEAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CLEAR_WIDTH,
    backgroundColor: 'white'
  },
  input: {
    width: '100%',
    height: '100%',
    paddingRight: CLEAR_WIDTH * 2,
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    paddingHorizontal: 8
  }
});
