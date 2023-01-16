import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies()
    // console.log(peliculasEnCine[0]?.title)
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator color="purple" size={100} />
            </View>
        )
    }

  return (
    <View style={{ marginTop: top + 20}}>
        <MoviePoster
            movie={peliculasEnCine[0]}
        />
    </View>
  )
}

export default HomeScreen