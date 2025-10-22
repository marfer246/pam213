import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroungScreen from './ImageBackgroungScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'
import mioScreen from './mioScreen'
//mioScreen

//BottomScreen

export default function MenuScreen (){
  
    const[ screen, setScreen ]= useState( 'menu'); 

    switch(screen){

        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'TextInput':
        return <TextInputScreen/>;
        case 'ImageBackgroung':
        return <ImageBackgroungScreen/>;
        case 'ScrollView':
        return <ScrollViewScreen/>;
        case 'ActivityIndicator':
        return <ActivityIndicatorScreen/>;
        case 'FlatList':
        return <FlatListScreen/>;
        case 'Modal':
        return <ModalScreen/>;
        case 'Bottom':
        return <BottomScreen/>;
        case 'mio':
        return <mioScreen/>;
        case 'menu':

            default:
                return (
                    <View style = {style.container}>
                        <Text style= {{ marginBottom: 20, fontSize: 30}}>Menu de practicas </Text>

                         <Button color="pink" title='Pract: Contador' onPress={()=> setScreen('contador')}/>
                         <Button title='Pract: Buttons' onPress={()=> setScreen('botones')}/>
                         <Button color="pink" title='Pract: TextInput' onPress={()=> setScreen('TextInput')}/>
                         <Button title='Pract: ImageBackgroung' onPress={()=> setScreen('ImageBackgroung')}/>
                         <Button color="pink" title='Pract: ScrollView' onPress={()=> setScreen('ScrollView')}/>
                         <Button title='Pract: ActivityIndicator' onPress={()=> setScreen('ActivityIndicator')}/>
                         <Button color="pink" title='Pract: FlatList' onPress={()=> setScreen('FlatList')}/>
                         <Button title='Pract: Modal' onPress={()=> setScreen('Modal')}/>
                         <Button color="pink"  title='Pract: Bottom' onPress={()=> setScreen('Bottom')}/>
                         <Button color="black"  title='Pract: mio ' onPress={()=> setScreen('mio')}/>
                    </View>
                );
    }
}

//zona de estilos 
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:  'center',
    alignItems: 'center',
},
});