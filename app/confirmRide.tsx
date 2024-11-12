import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { AirbnbRating } from 'react-native-ratings';
const ConfirmRide = () => {
    const { address, destination, fare } = useLocalSearchParams();
    console.log(address, destination, fare);
    const finishRide = (item: any) => {
        router.push(`/finishride?address=${address}&destination=${destination}&fare=${fare}&driverName=${item.driverName}&carModel=${item.carModel}`)
    }
    const searchedPlaceRes = [
        {
            driverName: "John Doe",
            carModel: "Toyota Camry",
            carColor: "Black",
            licensePlate: "XYZ 1234",
            rating: 4.8
        },
        {
            driverName: "Alice Johnson",
            carModel: "Honda Accord",
            carColor: "Silver",
            licensePlate: "ABC 5678",
            rating: 4.7
        },
        {
            driverName: "Carlos Rivera",
            carModel: "Chevrolet Malibu",
            carColor: "Blue",
            licensePlate: "LMN 9012",
            rating: 4.9
        },
        {
            driverName: "Fatima Ali",
            carModel: "Nissan Altima",
            carColor: "Red",
            licensePlate: "JKL 3456",
            rating: 4.6
        },
        {
            driverName: "Ben Thompson",
            carModel: "Ford Fusion",
            carColor: "White",
            licensePlate: "OPQ 7890",
            rating: 4.5
        },
        {
            driverName: "Sophie Lee",
            carModel: "Hyundai Sonata",
            carColor: "Gray",
            licensePlate: "RST 2345",
            rating: 4.8
        },
        {
            driverName: "Mohamed Khan",
            carModel: "Kia Optima",
            carColor: "Black",
            licensePlate: "UVW 6789",
            rating: 4.7
        },
        {
            driverName: "Laura Smith",
            carModel: "Mazda 6",
            carColor: "Blue",
            licensePlate: "DEF 4321",
            rating: 4.6
        },
        {
            driverName: "Ahmed Patel",
            carModel: "Volkswagen Passat",
            carColor: "Green",
            licensePlate: "GHI 8765",
            rating: 4.9
        },
        {
            driverName: "Emily Brown",
            carModel: "Subaru Legacy",
            carColor: "Silver",
            licensePlate: "JKM 1357",
            rating: 4.5
        }
    ];

    return (
        <SafeAreaView style={{
            backgroundColor: "#1c1f24",
            alignItems: 'center',
            paddingTop: 50,
            flex: 1
        }}>
            <FlatList
                data={searchedPlaceRes}
                keyExtractor={(item) => item.driverName}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, borderBottomWidth: 1, borderBottomColor: "#3e434d" }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <Image
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s' }}
                                    style={{ width: 50, height: 50, borderRadius: 100 }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 20 }}>{item.driverName}</Text>
                                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '300' }}>{item.carModel}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',marginTop:2 }}>
                                    {/* <Image style={{ width: 85, height: 30 }} source={require("@/assets/images/rating.png")} /> */}
                                    <AirbnbRating
                                        count={5}
                                        defaultRating={item.rating}
                                        size={15}
                                        showRating={false}
                                    />
                                    <Text style={{ color: '#a0a3aa', fontSize: 16, marginLeft: 10 }}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => finishRide(item)} style={{
                                backgroundColor: '#9ed90d',
                                // paddingVertical: 10,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 70,
                                height: 50
                            }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: '600',
                                }}>Select</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                style={styles.list}
            />
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