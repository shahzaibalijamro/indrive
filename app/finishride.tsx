import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
const ConfirmRide = () => {
    const { address, destination, fare,driverName,carModel } = useLocalSearchParams();
    console.log(address, destination, fare,driverName,carModel);
    return (
        <SafeAreaView style={{
            backgroundColor: "#1c1f24",
            alignItems: 'center',
            paddingTop: 50,
            flex: 1
        }}>
            <View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        // maxHeight: 150,
        width: '100%',
        backgroundColor: '#1c1f24',
        borderRadius: 5,
        borderColor: '#1c1f24',
        borderWidth: 1,
        // position: 'absolute',
        // top: 110,
        // left: 15,
        // flex:1,
        // right: 15,
        zIndex: 2,
    },
    itemView: { marginVertical: 50, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#3e434d', zIndex: 20 },
    itemText1: { paddingBottom: 5, fontWeight: "600", fontSize: 15, color: "white" },
    itemText2: { fontWeight: "400", fontSize: 12, color: "white" },
})


export default ConfirmRide