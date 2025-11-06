
import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ExameScreen from './ExameScreen'

export default function MenuScreen (){
  
    const[ screen, setScreen ]= useState( 'menu'); 

    switch(screen){

        case 'ExamenScreen':
            return <ExameScreen/>;


        case 'menu':


            default:
                return (
                    <View style = {style.container}>
                        <Text style= {{ marginBottom: 20, fontSize: 30}}>Menu de practicas </Text>

                         <Button color="pink" title='Pract: Examen' onPress={()=> setScreen('ExameScreen')}/>
                        
                    </View>
                );
    }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:  'center',
    alignItems: 'center',
},
});

