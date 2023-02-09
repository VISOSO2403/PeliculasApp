import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/GradientBackground';

import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColors';

const { width: windowsWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    // console.log(peliculasEnCine[0]?.title)
    const { top } = useSafeAreaInsets()

    const getPosterColors = async (index:number) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        
        const [ primary, secondary ] = await getImageColors( uri )

        console.log({primary, secondary})
    }

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
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    {/* Caroser Principal */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowsWidth}
                            itemWidth={255}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors(index) }
                        />
                    </View>

                    <HorizontalSlider title='Populares' movies={popular} />
                    <HorizontalSlider title='Mejor valorado' movies={topRated} />
                    <HorizontalSlider title='Proximamente' movies={upcoming} />

                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen