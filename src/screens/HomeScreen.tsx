import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, View, Text, ScrollView } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const { width: windowsWidth } = Dimensions.get('window')

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

    <ScrollView>
        <View style={{ marginTop: top + 20}}>

            {/* Caroser Principal */}
            <View style={{ height: 440 }}>
                <Carousel 
                    data={peliculasEnCine}
                    renderItem={({ item }: any) => <MoviePoster movie={ item }/> }
                    sliderWidth={ windowsWidth }
                    itemWidth={ 255 }
                    inactiveSlideOpacity={0.9}
                    />
            </View>
            
            {/* Peliculas Populares */}
            {/* <View style={{
                backgroundColor: 'red',
                height: 260
            }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                <FlatList 
                    data={ peliculasEnCine }
                    renderItem={ ({ item }: any) => (
                        <MoviePoster 
                            movie={ item }
                            width={ 140} 
                            height={ 200}
                        />
                    )}
                    keyExtractor={ (item) => item.id.toString()}
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                />
            </View> */}
            
            <HorizontalSlider 
                title='En cine'
                movies={peliculasEnCine}
            />

            <HorizontalSlider 
                movies={peliculasEnCine}
            />
            
        </View>
    </ScrollView>
  )
}

export default HomeScreen