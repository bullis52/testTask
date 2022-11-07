import {useEffect, useState} from 'react';
import UNSPLASH from '../api/unsplashApi';
const {url, token} = UNSPLASH;

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const queueParams = `search/photos?page=2&query=${searchTerm}`;
      const urlAddress = url + queueParams;
      const response = await fetch(urlAddress, {
        headers: {
          Authorization: `Client-ID ${token}`,
        },
      });
      const jsonify = await response.json();
      setResults(jsonify.results);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('job');
  }, []);
  return [searchApi, results, errorMessage];
};
