import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {withNavigation} from 'react-navigation';

import PictureElement from './PictureElement';

const PictureList = ({result, navigation}) => {
  return (
    <View>
      <FlatList
        style={styles.list}
        numColumns={2}
        data={result}
        renderItem={item => {
          return (
            <TouchableHighlight
              onPress={() =>
                navigation.navigate('Details', {
                  id: item.id,
                  src: item.item.urls.full,
                })
              }
              activeOpacity={0.6}
              underlayColor="#DDDDDD">
              <PictureElement item={item.item} />
            </TouchableHighlight>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#',
  },
});

export default withNavigation(PictureList);
