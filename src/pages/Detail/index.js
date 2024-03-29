import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import axios from 'axios';

export default function Detail({route}) {

  navigation = useNavigation();
  let[pontos, setPontos] = useState([]);

  console.log(route.params?.id);

  function voltaTela() {
    navigation.goBack();
  }


 useEffect(()=>{

  alert('entrou no useEffect');
 
  async function carregaPontoPorId() {

    
   
    const resultado = await axios.get(`http://192.168.0.111/api-ecoleta/lista-porid.php?id=${route.params?.id}`);

    setPontos(resultado.data);

    //console.log(pontos.data);
    pontos.map((item) => {
        console.log(item.nome);
    });


    console.log(pontos.nome);

}


carregaPontoPorId();




 },[]);




  return (
    
   pontos.map(item => (
  
  <SafeAreaView style={{flex:1}}>
    
      <View style={styles.container}>
        <TouchableOpacity onPress={voltaTela}>
          <Feather name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

  
     

     
       <Image style={styles.pointImage} source={{ uri: item.foto }} />
        <Text style={styles.pointName}>{item.nome}</Text>
        <Text style={styles.pointItems}>Papelão e Óleo de cozinha</Text>

    
  

        <View style={styles.addressContent}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>{item.endereco}</Text>
          <Text style={styles.addressContent}>{item.cidade}</Text>
        </View>
         
       
      </View>


      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => { }}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => { }}>
          <Feather name="mail" size={20} color="#FFF" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>

      
      </View>
      


    
    </SafeAreaView>
    ))
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 60,
   
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    //   fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    //  fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: '#322153',
    // fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    // fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    //borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,

  }
});