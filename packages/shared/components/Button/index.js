import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';

import styles from './styles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
};

export default Button;
