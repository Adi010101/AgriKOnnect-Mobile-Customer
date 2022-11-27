import React, {useState} from 'react';
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome';


const BasketScreen  = () => {
  const [checked, setChecked] = React.useState('first');
  const [count, setCount] = useState(0); 

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headercontainer}>
          <Text style={styles.SectionText}> My Basket </Text>
          <ScrollView>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                    <View style={styles.radiobutton}>
                      <RadioButton
                      value="first"
                      color='#388E3C'
                      status={ checked === 'first' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('first')}/>
                    </View>
                    <Image style={styles.ProdImg} source={require('../assets/lettuce.png')}/>
                    <View style={styles.ProdInfo}>
                      <Text style={styles.ProdName}>Lettuce</Text>
                      <Text style={styles.ProdPrice}>Php 40.00</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: -20,  alignItems: 'flex-end'}}>
                      <TouchableOpacity 
                      onPress={decrement}><Icons name ='minus' style={styles.decrementbutton}/></TouchableOpacity>
                      <TouchableOpacity><Text style={styles.numberContainer}>{count}</Text></TouchableOpacity>
                      <TouchableOpacity onPress={increment}><Icons name ='plus' style={styles.incrementbutton}/></TouchableOpacity>
                      <Text>kg</Text>
                    </View>
              </View>
            </View>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                  <View style={styles.radiobutton}>
                    <RadioButton
                    value="second"
                    color='#388E3C'
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                    />
                  </View>
                  <Image style={styles.ProdImg} source={require('../assets/lettuce.png')}/>
                  <View style={styles.ProdInfo}>
                      <Text style={styles.ProdName}>Lettuce</Text>
                      <Text style={styles.ProdPrice}>Php 40.00</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: -20, alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={decrement}><Icons name ='minus' style={styles.decrementbutton}/></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.numberContainer}>{count}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={increment}><Icons name ='plus' style={styles.incrementbutton}/></TouchableOpacity>
                    <Text>kg</Text>
                  </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.TotalContainer}>
        <View style={{flexDirection: 'row',margin: 5}}>
              <View style={styles.radiobutton}>
                <RadioButton
                  value="first"
                  color='#388E3C'
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}/>
              </View>
              <View style={{alignSelf: 'center'}}>
                      <Text style={{fontWeight: 'bold', color:'#000000', textAlign: 'center'}}>All</Text>
              </View>
              <View style={{flexDirection: 'column', margin: 15}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, fontWeight:'bold', color:'#000000',marginLeft: 20}}>SubTotal:</Text>
                      <Text style={{fontSize: 15, fontWeight:'bold', color:'#000000',color:'#000000'}}>Php 100.00</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 12,color:'#000000',marginLeft: 20}}> Shipping Fee:</Text>
                      <Text style={{fontSize: 12,color:'#000000'}}> Php 100.00</Text>
                    </View>
              </View>
              <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity><Text style={{backgroundColor:'#31A05F', color: 'white',
                fontWeight: 'bold', padding: 8, borderRadius: 10, marginLeft: 50}}>Checkout</Text></TouchableOpacity>
              </View>
          </View> 
      </View>
    </View>
  )
}
export default BasketScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4F4F4'
  },
  headercontainer:{
    padding: 20,
  },
  SectionText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    padding: 10,
  },
  BestText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    padding: 10,
    marginTop: -30,
  },
  BestContainer:{
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ProdImg:{
    marginTop: 10,
    marginLeft: 10,
    height: 90,
    width: 90,
  },
  ProdInfo: {
    margin: 20,
  },
  ProdName: {
    fontWeight: 'bold', 
    color: '#000000',
    fontSize: 15
  },
  ProdPrice:{
    fontWeight: 'bold', 
    color: '#000000',
  },
  BestBasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
    width: 40,
    marginTop:30,
    marginLeft: 100,
  },
  radiobutton:{
    alignSelf: 'center',
  },
  decrementbutton: {
    backgroundColor:"#F22323",
    borderRadius: 10,
    padding: 10,
    color: 'white',
    marginBottom: 5,
  },
  incrementbutton: {
    backgroundColor:"#388E3C",
    borderRadius: 10,
    padding: 10,
    color: 'white',
    marginBottom: 5
  },
  numberContainer: {
    backgroundColor:"#FFF59D",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    marginBottom: 5,
  },
  TotalContainer:{
    backgroundColor: 'white',
    justifyContent: 'space-between'
  }
})