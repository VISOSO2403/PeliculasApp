import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigate/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const Details = ( { route }: Props) => {
  
  const movie = route.params
  
  return (
    <View>
        <Text>Details</Text>
    </View>
  )
}

export default Details