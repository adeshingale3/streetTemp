import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                {/* Left Side */}
                <View>
                    <View style={styles.location}>
                        <Icon name="map-marker" size={24} color="white" />
                        <Text>Home</Text>
                    </View>
                    <View style={styles.locationName}>
                        <Text>Rajapur High School</Text>
                    </View>
                </View>

                {/* right Side */}
                <View style={{ paddingRight: 10 }}>
                    <Icon name="profile" size={24} color="white" />
                </View>
            </View>

            {/* SearchBar */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: "100%", top: -18 }}>
                <View style={{ backgroundColor: 'white', width: "70%", height: "40%", margin: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="magnify" size={24} color="black" />
                    <Text>Search for food</Text>

                </View>
            </View>


        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: "15%",
        position: 'relative',



    },
    topContainer: {
        paddingLeft: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    location: {

        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    locationName: {
        flexDirection: 'col',
    }
})