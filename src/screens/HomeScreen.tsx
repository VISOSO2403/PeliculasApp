import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, View, Text, ScrollView } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const { width: windowsWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { peliculasEnCine, peliculasPopulares, isLoading } = useMovies()
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
                    data={peliculasEnCine}
                    renderItem={({ item }: any) => <MoviePoster movie={ item }/> }
                    sliderWidth={ windowsWidth }
                    itemWidth={ 255 }
                    />
            </View>
            
            <HorizontalSlider title='Populares' movies={peliculasPopulares} />

            
            
        </View>
    </ScrollView>
  )
}

export default HomeScreen