import React, { useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,FlatList, SectionList, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import MiIcons from 'react-native-vector-icons/MaterialIcons';

const ProductDetails = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Icons name= 'arrow-back' size={50} color='#000000'/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{flexDirection:'column', alignSelf: 'center'}}>
                    <Image source={require('../assets/lettuce.png')}/>
                    <Text style={styles.Headertext}>Lettuce</Text>
                    <Text style={styles.Subtext}>Product Category:</Text>
                    <Text style={styles.bodytext}>Vegetables</Text>
                    <Text style={styles.Subtext}>Growing Method:</Text>
                    <Text style={styles.bodytext}>Organic</Text>
                    <Text style={styles.Subtext}>Price:</Text>
                    <Text style={styles.bodytext}>Php 50.00</Text>
                    <Text style={styles.Subtext}>Quantity (available):</Text>
                    <Text style={styles.bodytext}>24 kg</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Image style={styles.sellerPhoto} source={require('../assets/lettuce.png')}/>
                    <Text style={styles.sellername}>Seller name</Text>
                    <TouchableOpacity>
                        <Text style={styles.visitbutton}>VIEW</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text>Reviews</Text>
                    <TouchableOpacity>
                        <MiIcons style={styles.forwardIcon} name='arrow-forward-ios'size={20} color='#5F5B5B'/>
                    </TouchableOpacity>
                </View>
                    <View style={{flexDirection: 'column', margin: 10}}>
                        <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('ProductReviews')}>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={styles.sellerPhoto} source={require('../assets/lettuce.png')}/>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text style={styles.ButtonTitle}>name</Text>
                                    <Text style={styles.rating}>Rating: 4/5</Text>
                                    <Text style={styles.comment}>Comment: Fast delivery!</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity>
                            <Text style={styles.basketbutton}>ADD TO BASKET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('CheckoutForm')}>
                            <Text style={styles.buybutton}>BUY NOW</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetails;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    Headertext:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
    },
    Subtext:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    },
    bodytext:{
        color: '#000000',
        fontSize: 12,
    },
    sellerPhoto: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    sellername:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
    },
    visitbutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    forwardIcon:{ 
        alignSelf: 'center'
    }, 
    ButtonContainer:{
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ButtonTitle:{
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold',
    },
    rating: {
        color: '#000000',
    },
    comment:{
        color: '#000000',
    },
    basketbutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    buybutton:{
        backgroundColor: '#F22323',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    }
})