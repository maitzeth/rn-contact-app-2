import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type Props = React.PropsWithChildren<{
  onPress?: () => void;
}>;

export const IconButton = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
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
