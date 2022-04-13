import React, { useCallback } from 'react';
import { string, object } from 'prop-types';
import { View, Text, Image, Linking } from 'react-native';

import NoMovieImage from '../../assets/icons/noMovieImage.svg';
import Button from '../Button';
import styles from './styles';

const ReviewCard = ({
  displayTitle,
  summaryShort,
  byline,
  mpaaRating,
  multimedia,
  publicationDate,
  link
}) => {
  const onOpenLink = useCallback(async () => {
    await Linking.openURL(link.url);
  }, [link]);

  return (
    <View style={styles.container}>
      {multimedia
        ? <Image source={{ uri: multimedia?.src }} style={styles.image} />
        : <NoMovieImage height={200} width="100%" />
      }
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.title}>{displayTitle}</Text>
        <Text numberOfLines={2} style={styles.summary}>{summaryShort}</Text>
        <View style={styles.row}>
          <Text style={[styles.rowInfo, styles.rating]}>{mpaaRating || 'N/A'}</Text>
          <Text style={[styles.rowInfo, styles.date]}>{publicationDate}</Text>
          <Text style={[styles.rowInfo, styles.byline]}>{byline}</Text>
        </View>
        {link && <Button onPress={onOpenLink} title="SEE FULL REVIEW" />}
      </View>
    </View>
  );
}

ReviewCard.propTypes = {
  displayTitle: string,
  summaryShort: string,
  byline: string,
  mpaaRating: string,
  multimedia: object,
  publicationDate: string,
  link: object,
};

export default ReviewCard;
