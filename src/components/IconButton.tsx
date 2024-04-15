import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';

type Props = React.PropsWithChildren<{
  onPress?: () => void;
}>;

export const IconButton = ({children, onPress}: Props) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
