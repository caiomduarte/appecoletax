import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Constants from 'expo-constants';

import { useNavigation } from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

//importando a api
import axios from 'axios';

console.disableYellowBox =true;


export default function Points() {

    let [dados, setDados] = useState([]);


    async function loadPontos() {
        const resultado = await axios.get('http://192.168.0.111/api-produtos/listar-produtos.php');

        setDados(resultado.data);

       //dados.map((item) => {
         //   console.log(item.latitude);
        //});
    }


    useEffect(() => {
        alert("Entrou no UseEffect");     

        loadPontos();


    }, []);


    navigation = useNavigation();

    function abrirHome() {
        navigation.goBack();
    }


    //Navega para tela de Detalhes
    function abreTelaDetalhes(id) {
        navigation.navigate('Detail',{id: id});
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={abrirHome}>
                    <Feather name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>

                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta</Text>

                <View style={styles.mapContainer}>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: -23.4043097,
                            longitude: -46.8543534,
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014

                        }}

                    >

                        {dados.map(item => (
                            <Marker
                                key={item.id}
                                onPress={() => abreTelaDetalhes(item.id)}
                                style={styles.mapMarker}
                                coordinate={{
                                    latitude: Number(item.latitude),
                                    longitude: Number(item.longitude)

                                }}
                            >
                                <View style={styles.mapMarkerContainer}>
                                    <Image style={styles.mapMarkerImage} source={{ uri:item.foto}} />
                                    <Text style={styles.mapMarkerTitle}>{item.nome}</Text>
                                </View>
                            </Marker>
                        ))}



                    </MapView>
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/baterias.png')} />
                        <Text style={styles.itemTitle}>Baterias</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/eletronicos.png')} />
                        <Text style={styles.itemTitle}>Eletrônico</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/lampadas.png')} />
                        <Text style={styles.itemTitle}>Lampadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/oleo.png')} />
                        <Text style={styles.itemTitle}>Óleo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/organicos.png')} />
                        <Text style={styles.itemTitle}>Organicos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/papeis-papelao.png')} />
                        <Text style={styles.itemTitle}>Papelão</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },

    title: {
        fontSize: 20,
        //fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        //fontFamily: 'Roboto_400Regular',
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },

    mapMarkerTitle: {
        flex: 1,
        //  fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 10,
        lineHeight: 23,
    },

    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
    },

    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',

        textAlign: 'center',
    },

    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2,
    },

    itemTitle: {
        //fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 13,
    },
});