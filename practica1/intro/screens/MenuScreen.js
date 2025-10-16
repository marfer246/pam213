import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'


export default function MenuScreen (){
  
    const[ screen, setScreen ]= useState( 'menu'); 

    switch(screen){



        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'TextInput':
        return <TextInputScreen/>;
        case 'menu':

            default:
                return (
                    <View>
                         <Text>Menu de practicas </Text>
                         <Button title='Pract: Contador' onPress={()=> setScreen('contador')}/>
                         <Button title='Pract: Buttons' onPress={()=> setScreen('botones')}/>
                         <Button title='Pract: TextInput' onPress={()=> setScreen('TextInput')}/>
                    </View>
                );
    }
    
}
