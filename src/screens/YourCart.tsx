import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const YourCart = () => {
    const data = [
        { id: '1', name: 'Sandwich', price: 30, color: 'red' },
        { id: '2', name: 'Burger', price: 50, color: 'yellow' },
        { id: '3', name: 'Pizza', price: 100, color: 'orange' },
        { id: '1', name: 'Sandwich', price: 30, color: 'red' },
        { id: '2', name: 'Burger', price: 50, color: 'yellow' },
        { id: '3', name: 'Pizza', price: 100, color: 'orange' },
    ]
    return (
        <ScrollView style={{ height: "100%", width: "100%", backgroundColor: 'white' }}>
            <SafeAreaView style={styles.container}>
                {/* "Your Cart" Bar */}
                <View style={styles.yourCartContainer}>
                <MaterialIcons name="chevron-left" color="black" size={30} />
                <Text style={{ fontWeight: 900, fontSize: 20 }}>Your Cart</Text>
                </View>

                {/* Apply Coupon Code */}
                <TouchableOpacity style={styles.applyCoupon}>
                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 10 }}>
                        <MaterialIcons name='left' color="black" size={30} />
                        <Text>Apply Coupon Code</Text>
                    </View>
                    <MaterialIcons name='left' color="black" size={30} />

                </TouchableOpacity>

                {/* Delivery Details */}
                <TouchableOpacity style={styles.deliveryDetails}>

                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 10 }}>
                        <MaterialIcons name='left-arrow' color="black" size={30} />
                        <Text style={{ fontSize: 17, fontWeight: 700 }}>Delivery in 10 minutes</Text>
                    </View>
                    <View style={{ height: 60, width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        {/* Item details */}
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontWeight: 400 }}>Dabeli</Text>
                            <Text style={{ fontWeight: 400 }}>₹ 20</Text>

                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                            {/* Item adding and deleting  */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#f0f0f0',
                                    paddingHorizontal: 10,
                                    borderRadius: 8,
                                    borderColor: 'green',
                                    borderWidth: 1,
                                    borderStyle: 'dashed',
                                }}
                            >
                                {/* Decrease Button */}
                                <TouchableOpacity>
                                    <MaterialIcons name="minus" size={20} color="black" />
                                </TouchableOpacity>

                                {/* Quantity Display */}
                                <Text
                                    style={{
                                        fontSize: 15,
                                        marginHorizontal: 10,
                                    }}
                                >
                                    5
                                </Text>

                                {/* Increase Button */}
                                <TouchableOpacity>
                                    <MaterialIcons name="plus" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 400 }}>₹ 20</Text>
                            </View>
                        </View>
                    </View>

                    {/* Green Border */}
                    <View style={{
                        borderStyle: 'dotted',
                        borderWidth: 1,
                        borderRadius: 1, borderColor: "green", width: "100%", marginTop: 10
                    }}>
                    </View>

                    {/* Add More Items */}
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, gap: 10, backgroundColor: "green", paddingLeft: 6, paddingRight: 6, paddingBottom: 4, paddingTop: 4, borderRadius: 10 }}>
                        <MaterialIcons name='plus' color="white" />
                        <Text style={{ color: "white" }}>Add More Items</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                {/* More Delicious Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        backgroundColor: "white",
                        borderRadius: 15,
                        height: "50%",
                        shadowColor: 'black',
                        paddingRight: 10,
                        paddingBottom: 10,
                        shadowOffset: {
                            width: 0,
                            height: 4, // Reduced to 4 to show shadow only below
                        },
                        shadowOpacity: 0.2, // Softer shadow
                        shadowRadius: 4, // Less radius for focused shadow
                        // Elevation for Android (Appears only below)
                        elevation: 5,

                    }}
                >
                    {/* Header Text */}
                    <Text
                        style={{
                            fontSize: 18,
                            paddingLeft: 10,
                            paddingTop: 10
                        }}
                    >
                        More Delicious Bites For You !!
                    </Text>

                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                        }}
                        style={{
                            width: '100%',
                        }}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    flexDirection: 'column',
                                    width: 140, // Fixed width for each item
                                    height: "100%", // Fixed height to avoid layout issues
                                    borderRadius: 15,
                                    marginRight: 15,
                                    padding: 5,
                                    backgroundColor: 'white',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4,
                                    elevation: 5,
                                }}
                            >
                                {/* Upper Part */}
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        borderRadius: 15,
                                        borderWidth: 1,
                                        borderColor: 'green',
                                        padding: 10,
                                    }}
                                >
                                    {/* Price Button */}
                                    <TouchableOpacity
                                        style={{
                                            width: '80%',
                                            paddingVertical: 8,
                                            backgroundColor: 'green',
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            marginBottom: 10,
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                            Rs {item.price}
                                        </Text>
                                    </TouchableOpacity>

                                    {/* Item Image Placeholder */}
                                    <View
                                        style={{
                                            height: 80, // Fixed height
                                            width: 80, // Fixed width
                                            backgroundColor: item.color,
                                            borderRadius: 15,
                                        }}
                                    />
                                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                                        {item.name}
                                    </Text>
                                </View>

                                {/* Lower Part - Add to Cart */}
                                <TouchableOpacity
                                    style={{
                                        marginTop: 10,
                                        borderRadius: 10,
                                        borderWidth: 1,
                                        borderColor: 'green',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ padding: 5, color: 'green' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>

                {/* Bill Details */}
                <View style={{backgroundColor: "red", height: "23%", paddingHorizontal: 10, marginTop: 20, borderRadius: 15, shadowColor: "black", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 5,}}>
                    <Text>Bill Details</Text>
                </View>


            </SafeAreaView>
        </ScrollView>
    )
}

export default YourCart

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginHorizontal: 10
        
    },
    yourCartContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        // Shadow for iOS (Appears only below)
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4, // Reduced to 4 to show shadow only below
        },
        shadowOpacity: 0.2, // Softer shadow
        shadowRadius: 4, // Less radius for focused shadow
        // Elevation for Android (Appears only below)
        elevation: 5, // Keep it at 5 for consistent look
    },

    applyCoupon: {
        backgroundColor: "white",
        marginTop: 20,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: "space-between",
        // Shadow for iOS
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4, // Reduce height for a soft shadow
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        // Elevation for Android
        elevation: 5, // Lower elevation for Android
    },

    deliveryDetails: {
        height: "30%", backgroundColor: "white", marginTop: 20, paddingTop: 10, paddingHorizontal: 10, justifyContent: "flex-start", alignItems: "flex-start",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4, // Reduce height for a soft shadow
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        // Elevation for Android
        elevation: 5,
    },

})