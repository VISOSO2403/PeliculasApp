import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import Details from '../screens/DetailsScreen';

interface Props {
  movie: Movie,
  height?: number,
  width?: number
}

const MoviePoster = ({movie, height = 420, width = 250}: Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const navigator = useNavigation()

  return (
    <TouchableOpacity
    onPress={ () => navigator.navigate('Details', movie)}
      activeOpacity={0.8}
      style={{ 
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 6
     }}
    >
      <View style={ styles.imageContainer}>
        <Image 
          source={{ uri}}
          style={ styles.image }
        />
      </View>
    </TouchableOpacity>
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
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  }, 
  image: {
      flex: 1,
      borderRadius: 20
    }
})

export default MoviePoster