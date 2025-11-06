import React from 'react';
import {View, Text, Button, TouchableOpacity, Pressable} from  'react-native'
import { Button } from 'react-native-web';

function App () {
    return (
        <View>
         <Button OnPress = {()=> console.info('click...')} title='button 1' />  
        </View>

    );

}
export default App;

//{}----////////////
//<></>