import React, { useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Incons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import ProductContainer from './ProductContainer';

const EmptySearchScreen = ({navigation}) => {
    const [term, setItem] = useState ('');
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headercontainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Incons name='arrow-back-sharp' size={25}/>
            </TouchableOpacity>
          </View>
          <View>
            <SearchBar
            placeholder='Search a product'
            onChange = {setItem}
            term = {term}
            ></SearchBar>
          </View>
          <Text style={styles.resultText}>0 result found</Text>
        </ScrollView>
    </View>
    )
}

export default EmptySearchScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    headercontainer:{
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between'
    },
    title: {
      color: '#5F5B5B',
      fontWeight:'bold',
      fontFamily: 'Poppins',
      fontSize: 20,
    },
    subtitle: {
      color: '#5F5B5B',
      fontFamily: 'Poppins',
      fontSize: 15
    },
    resultText:{
        margin: 10, 
        fontWeight: 'bold',
        color: '#000000',
    }
})