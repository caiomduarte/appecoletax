import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

export default function Marcador() {
    return (

        <Marker
            onPress={() => { }}
            style={styles.mapMarker}
            coordinate={{
                latitude: -23.403935546979575,
                longitude: -46.855812571557905,

            }}
        >
            <View style={styles.mapMarkerContainer}>
                <Image style={styles.mapMarkerImage} source={{ uri: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg' }} />
                <Text style={styles.mapMarkerTitle}>Donos da pizza</Text>
            </View>
        </Marker>


    )
}

const style = StyleSheet.create({
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
});