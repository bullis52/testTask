import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const src = navigation.getParam('src');

  return (
    <View>
      <Image style={styles.image} source={{uri: src}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default ResultsShowScreen;
