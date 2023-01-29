import React from 'react'
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';

import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    movieFull: MovieFull
    cast: Cast[]
}

const MovieDetails = ( { movieFull, cast }:Props ) => {
  return (
    <>
        <View style={{ marginHorizontal: 20 }}>
            <Icon 
                name="star-outline"
                color="gray"
                size={ 16 }
            />
        </View>
    </>
  )
}

export default MovieDetails