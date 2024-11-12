import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Layout() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const user = await AsyncStorage.getItem('user-profile');
            if (user) {
                const userFetch = JSON.parse(user)
                console.log(userFetch);
                setUserData(userFetch)
            }
        }
        getUser()
    }, [])
    console.log(userData);
    const logOutUser = () => {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('yetToSetup', 'false');
            } catch (e) {
                console.log(e);
            }
        };
        storeData()
        router.push("/main/login")
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerPosition: 'left',
                    drawerType: 'front',
                    drawerStyle: {
                        // flex: 1,
                        backgroundColor: "#1c1f24",
                        width: 330,
                        // height: '100%'
                    },
                    headerShown: false,
                    drawerInactiveTintColor: "#1c1f24",
                    // drawerActiveTintColor: "#323943",
                    drawerActiveBackgroundColor: "#323943",
                    drawerLabelStyle: {
                        color: 'white'
                    }
                }}
                drawerContent={
                    (props) => {
                        return (
                            <SafeAreaView style={{ position: 'relative', flex: 1 }}>
                                <View style={{ width: '100%', height: 60, paddingBottom: 10, marginTop: 80, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
                                    <View style={{ flexDirection: 'row', width: '89%' }}>
                                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                            {userData ? <Image
                                                source={{ uri: userData.pfp }}
                                                style={{ width: 50, height: 50, borderRadius: 100 }}
                                            /> : <Image
                                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s' }}
                                                style={{ width: 50, height: 50, borderRadius: 100 }}
                                            />}
                                            {/* <Image style={{ width: 50, height: 50 }} source={require("@/assets/images/user.png")} /> */}
                                        </View>
                                        <View>
                                            <View>
                                                <Text style={{ color: 'white', fontSize: 20 }}>{userData ? userData.name : ''}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Image style={{ width: 85, height: 30 }} source={require("@/assets/images/rating.png")} />
                                                <Text style={{ color: '#a0a3aa', fontSize: 16, marginLeft: 10 }}>4.8</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'column', width: '11%' }}>
                                        <Image style={{ width: 27, height: 27 }} source={require("@/assets/images/chevron.png")} />
                                    </View>
                                </View>
                                <View>
                                    <DrawerItemList
                                        {...props}
                                    />
                                </View>
                                <View style={{ position: 'absolute', bottom: 0, alignItems: 'center', width: '100%', padding: 20, borderTopWidth: 1, borderTopColor: '#3e434d' }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#9ed90d',
                                        paddingVertical: 15,
                                        borderRadius: 12,
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 18,
                                            fontWeight: 'semibold',
                                        }}>Driver mode</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', marginTop: 20, columnGap: 30 }}>
                                        <Image style={{ width: 35, height: 35 }} source={require("@/assets/images/facebook.png")} />
                                        <Image style={{ width: 35, height: 35 }} source={require("@/assets/images/social.png")} />
                                    </View>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 'semibold',
                                        marginTop: 20
                                    }} onPress={logOutUser}>Log out</Text>
                                </View>
                            </SafeAreaView>
                        )
                    }
                }
            >
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'City',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="history" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Request history',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="couriers" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Couriers',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="citytocity" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'City to City',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="freight" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Freight',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="safety" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Safety',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="settings" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Settings',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="help" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Help',
                        title: 'overview',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="support" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Support',
                        title: 'overview',
                        headerShown: false
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}