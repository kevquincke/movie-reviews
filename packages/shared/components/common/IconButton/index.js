import React from 'react';
import { Pressable } from 'react-native';
import { node, object, func } from 'prop-types';

const IconButton = ({ icon, onPress, style }) => (
  <Pressable onPress={onPress} style={style}>
    {icon}
  </Pressable>
);

IconButton.propTypes = {
  icon: node,
  onPress: func.isRequired,
  style: object,
}

export default IconButton;
