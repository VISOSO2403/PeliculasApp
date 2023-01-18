import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const { width: windowsWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
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

    <ScrollView>
        <View style={{ marginTop: top + 20}}>

            {/* Caroser Principal */}
            <View style={{ height: 440 }}>
                <Carousel 
                    data={ nowPlaying }
                    renderItem={({ item }: any) => <MoviePoster movie={ item }/> }
                    sliderWidth={ windowsWidth }
                    itemWidth={ 255 }
                    />
            </View>
            
            <HorizontalSlider title='Populares' movies={ popular } />
            <HorizontalSlider title='Mejor valorado' movies={ topRated } />            
            <HorizontalSlider title='Proximamente' movies={ upcoming } />
            
        </View>
    </ScrollView>
  )
}

export default HomeScreen