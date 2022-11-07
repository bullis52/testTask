import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import PictureList from '../components/PictureList';
// hook
import Unsplash from '../hooks/useResult';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = Unsplash();

  return (
    <View style={{flex: 5, padding: 10}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <PictureList result={results} />
        <Text style={styles.footer}>Display - {results.length} imgs</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    color: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 5,
  },
});
export default HomeScreen;
