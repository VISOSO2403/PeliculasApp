import React from 'react'
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    movieFull: MovieFull
    cast: Cast[]
}

const MovieDetails = ( { movieFull, cast }:Props ) => {
  return (
    <View>
        <Text>{movieFull.release_date}</Text>
    </View>
  )
}

export default MovieDetails