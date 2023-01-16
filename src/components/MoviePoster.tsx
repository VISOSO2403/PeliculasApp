import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie
}

const MoviePoster = ({movie}: Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <View style={{ 
      width: 250,
      height: 420
     }}>
      <View style={ styles.imageContainer}>
        <Image 
          source={{ uri}}
          style={ styles.image }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex:1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 10,
  }, 
  image: {
      flex: 1,
      borderRadius: 20
    }
})

export default MoviePoster