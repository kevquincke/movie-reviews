import React from 'react';
import { Pressable } from 'react-native';
import { node, object, func, oneOfType, number } from 'prop-types';

const IconButton = ({ icon, onPress, style }) => (
  <Pressable onPress={onPress} style={style}>
    {icon}
  </Pressable>
);

IconButton.propTypes = {
  icon: node,
  onPress: func.isRequired,
  style: oneOfType([object, number]),
}

export default IconButton;
