import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerPosition: 'left',
                    drawerType: 'front',
                    drawerStyle: {
                        backgroundColor: "#1c1f24",
                        width: 330,
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
                            <SafeAreaView>
                                <View style={{ width: '100%', height: 60, paddingBottom: 10, marginTop: 80, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
                                    <View style={{ flexDirection: 'row', width: '89%' }}>
                                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                            <Image style={{ width: 50, height: 50 }} source={require("@/assets/images/user.png")} />
                                        </View>
                                        <View>
                                            <View>
                                                <Text style={{ color: 'white', fontSize: 20 }}>Shahzaib Ali</Text>
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
            </Drawer>
        </GestureHandlerRootView>
    );
}