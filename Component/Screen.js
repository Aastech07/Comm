import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, FlatList } from 'react-native';
import {  responsiveWidth } from "react-native-responsive-dimensions";
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-virtualized-view';

const Screen = () => {


    const jsondata = {
        "EventItems": [
            {
                "id": 1,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1704067200&Signature=DTyqiE0hxQwd0fGun7H7PIN4YQhThiUL2fEBk0u1cPPDafZGulJ9mV1rXnpN-1~41auNkfCnhhaGnocpHCieMgQf7d4Vx66TF~YsQX3u8j7-Hvv0rHch6cimNqrnIGTLLCWNVORMUxKLrtGRzLfmBngO2SxhztxpKOttlx6Wmx6A3Avv9DOB8wLjpjLhRD~kF5GUcpfDiv4YtpxSyzoPIgv72sUyX6sS6N7sMXUNboqQD3lNcfpEtpzer-v996l91HNGSIF1H-rnT8cYA~OORU2iTj5RdaVk04yg4gGhX3Cc-v5dhLGgu1ECZ5b0T6BVtBWoh5Mngq23bu2tbJ7nHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
               
            },
            {
                "id": 2,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1704067200&Signature=fCgb44EbHPCWWjUatHT0JQTByf9wOMd3jeghPsIeazisHVDe8ruhkZeeZKUtTo7MH6I9VovGXdaUUSm8mfNbyn~kMK6VhXjQXYLd6SA-71jcbzOWYUhkZLukP~ohGXVqlfrISPzyipdmh9Z2EoMoYAHLluuJTuYuZE5SZajP-I0HD39SDNX6p2bGB09eviGCoKvSv3bkAJa0WQulzldErnz1ECYnK7dbRcQ4-wmMQI8cTIPYx0C8MSyfBZDVYh6VfF5eQ8pbWpv5uk~QgWFWFZ2Uo4wD7qIES0AIwGT2EJ1ua02l4R-QA2MKi9vN~Led5lxjl3LQfeF63cclhn8eJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                
            },
            {
                "id": 3,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1704067200&Signature=DTyqiE0hxQwd0fGun7H7PIN4YQhThiUL2fEBk0u1cPPDafZGulJ9mV1rXnpN-1~41auNkfCnhhaGnocpHCieMgQf7d4Vx66TF~YsQX3u8j7-Hvv0rHch6cimNqrnIGTLLCWNVORMUxKLrtGRzLfmBngO2SxhztxpKOttlx6Wmx6A3Avv9DOB8wLjpjLhRD~kF5GUcpfDiv4YtpxSyzoPIgv72sUyX6sS6N7sMXUNboqQD3lNcfpEtpzer-v996l91HNGSIF1H-rnT8cYA~OORU2iTj5RdaVk04yg4gGhX3Cc-v5dhLGgu1ECZ5b0T6BVtBWoh5Mngq23bu2tbJ7nHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                
            },
            {
                "id": 4,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1704067200&Signature=fCgb44EbHPCWWjUatHT0JQTByf9wOMd3jeghPsIeazisHVDe8ruhkZeeZKUtTo7MH6I9VovGXdaUUSm8mfNbyn~kMK6VhXjQXYLd6SA-71jcbzOWYUhkZLukP~ohGXVqlfrISPzyipdmh9Z2EoMoYAHLluuJTuYuZE5SZajP-I0HD39SDNX6p2bGB09eviGCoKvSv3bkAJa0WQulzldErnz1ECYnK7dbRcQ4-wmMQI8cTIPYx0C8MSyfBZDVYh6VfF5eQ8pbWpv5uk~QgWFWFZ2Uo4wD7qIES0AIwGT2EJ1ua02l4R-QA2MKi9vN~Led5lxjl3LQfeF63cclhn8eJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
             
            },
            {
                "id": 5,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1704067200&Signature=fCgb44EbHPCWWjUatHT0JQTByf9wOMd3jeghPsIeazisHVDe8ruhkZeeZKUtTo7MH6I9VovGXdaUUSm8mfNbyn~kMK6VhXjQXYLd6SA-71jcbzOWYUhkZLukP~ohGXVqlfrISPzyipdmh9Z2EoMoYAHLluuJTuYuZE5SZajP-I0HD39SDNX6p2bGB09eviGCoKvSv3bkAJa0WQulzldErnz1ECYnK7dbRcQ4-wmMQI8cTIPYx0C8MSyfBZDVYh6VfF5eQ8pbWpv5uk~QgWFWFZ2Uo4wD7qIES0AIwGT2EJ1ua02l4R-QA2MKi9vN~Led5lxjl3LQfeF63cclhn8eJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              
            },
            {
                "id": 6,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1704067200&Signature=DTyqiE0hxQwd0fGun7H7PIN4YQhThiUL2fEBk0u1cPPDafZGulJ9mV1rXnpN-1~41auNkfCnhhaGnocpHCieMgQf7d4Vx66TF~YsQX3u8j7-Hvv0rHch6cimNqrnIGTLLCWNVORMUxKLrtGRzLfmBngO2SxhztxpKOttlx6Wmx6A3Avv9DOB8wLjpjLhRD~kF5GUcpfDiv4YtpxSyzoPIgv72sUyX6sS6N7sMXUNboqQD3lNcfpEtpzer-v996l91HNGSIF1H-rnT8cYA~OORU2iTj5RdaVk04yg4gGhX3Cc-v5dhLGgu1ECZ5b0T6BVtBWoh5Mngq23bu2tbJ7nHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              
            },
            {
                "id": 7,
                "name": "International Band Mu...",
                "image": "https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1704067200&Signature=fCgb44EbHPCWWjUatHT0JQTByf9wOMd3jeghPsIeazisHVDe8ruhkZeeZKUtTo7MH6I9VovGXdaUUSm8mfNbyn~kMK6VhXjQXYLd6SA-71jcbzOWYUhkZLukP~ohGXVqlfrISPzyipdmh9Z2EoMoYAHLluuJTuYuZE5SZajP-I0HD39SDNX6p2bGB09eviGCoKvSv3bkAJa0WQulzldErnz1ECYnK7dbRcQ4-wmMQI8cTIPYx0C8MSyfBZDVYh6VfF5eQ8pbWpv5uk~QgWFWFZ2Uo4wD7qIES0AIwGT2EJ1ua02l4R-QA2MKi9vN~Led5lxjl3LQfeF63cclhn8eJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
               
            },
     

        ]

    }

    const Image1 = 'https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1704067200&Signature=DTyqiE0hxQwd0fGun7H7PIN4YQhThiUL2fEBk0u1cPPDafZGulJ9mV1rXnpN-1~41auNkfCnhhaGnocpHCieMgQf7d4Vx66TF~YsQX3u8j7-Hvv0rHch6cimNqrnIGTLLCWNVORMUxKLrtGRzLfmBngO2SxhztxpKOttlx6Wmx6A3Avv9DOB8wLjpjLhRD~kF5GUcpfDiv4YtpxSyzoPIgv72sUyX6sS6N7sMXUNboqQD3lNcfpEtpzer-v996l91HNGSIF1H-rnT8cYA~OORU2iTj5RdaVk04yg4gGhX3Cc-v5dhLGgu1ECZ5b0T6BVtBWoh5Mngq23bu2tbJ7nHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    const Image2 = 'https://s3-alpha-sig.figma.com/img/a511/6394/d8c24efab59533add110ee8338355c42?Expires=1704067200&Signature=Y9I8r2Ylj2o4kRPwyxAClXNHITBtHsO--ZX40-UuXNLPm1CnY6UZby7FZK5stRHZirM-kK540ziaTQn08US4cuWSeUmdV-AcNAnbevElJOPn-XQfbatw0GE3BlUXN3VBCQW-DmiQCT2EemQlnGpCdCz14EA67yypbIxyivRQE1XHpR0apYPK7us2-c-I~NDyoWcARFgyrl2-DXrJEzjYbUtKui87seg6HvjqqygrosF78XB78grCEPi7CldiSZcochsVEdgABrj7zl5cOu5Z5pOzpQ2s56K7KXWKCT1TpnVZwPYnoL5JHqkUJsQDAkMRrMvj35iCAAWELyRPKJqLyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    const Image3 = 'https://s3-alpha-sig.figma.com/img/2902/8b47/6eedca800bd259b5877f98458c1ec66a?Expires=1704067200&Signature=biIjyyo1Qu8SOB~Nl-gq50qv5M~hXqExKW1W3chToaa3ZLylvPX9L1toXgIgnv~MvmQVRcGwy0uDrdmYinisclQxdROiQk287lmjR91hi3791NcfHgGwWGyZgNAPquHiR4xNn723rNytMUvXz8vWPc1hoADk4W8SPk~oY6TDPwbNV~Bo8l5t2FqcmjsuA2viRpswMwEb6bXnOeouGvyj2fdd7CEubkeHQhAjfs0Jhq6WVrOd9bAVv~jyvcgbw~x1AIjiQL5dcFJgbvmqIt1VwjLxdECzvoKLxSLCj1Jn1~qYBsz~c7b0N4UQEAgYPmhO5~0-0eyb7x4DBh6srQcUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    const Image4 = 'https://s3-alpha-sig.figma.com/img/e6e0/802c/b43aceb267d24e6c72e464bbc8fa5f13?Expires=1704067200&Signature=AQpOCu1XHmJQ5fdHx9hXQHAxIme9C7PpRuhm-v1bGa~12nnvm~jIEzoEFXBryOXcFySD~8VU4M9wgdCOwAfdSO0B04CEozy-0IzbPHUVppUdo1H4u9B8F3jil~LfAltxaVitwqwtsrt3fFYtbk8rLNwvENfIb0PwgCd~-OVXqDDVRXsbIYxPojW1~7qA46P0ACtnOdAuTf9ihkjy8NiILgbyimh3k8Ks9KXTQQGfphVuO046CWGzl6vwWt4~HHLWrfsTG9R6Q6CKH9TYC4VxhFvKxOBw3m86Y52E6-lnFf3CABIgy1jDY0wq6EGvnPIXTA52AVtRz8AzBZAHSaPBUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    const SaveIcon = 'https://cdn-icons-png.flaticon.com/128/5667/5667029.png'
    const MusicIcon = 'https://cdn-icons-png.flaticon.com/128/7566/7566380.png'
    return (
        <ScrollView style={{ flex: 1, }} contentContainerStyle={{paddingBottom:130}}>
            <View style={{ backgroundColor: '#4383f2', borderBottomStartRadius: 30, borderBottomEndRadius: 30, paddingTop: 100, }}>

                <FontAwesome name='bell' size={20} color={"#fff"} style={{ position: 'absolute', left: responsiveWidth(87), top: 50, borderRadius: 50, backgroundColor: '#4383f2', paddingHorizontal: 7, paddingVertical: 5 }} />
                <FontAwesome5 name='message' size={20} color={"#fff"} style={{ position: 'absolute', left: responsiveWidth(75), top: 50, borderRadius: 50, backgroundColor: '#4383f2', paddingHorizontal: 6, paddingVertical: 5 }} />

                <Text style={{ fontSize: 18, position: 'absolute', marginTop: 54, color: 'white', fontWeight: 'bold', left: 70 }}>
                    Hi, Viraj
                </Text>
                <Text style={{ position: 'absolute', top: 40, left: 28, fontSize: 30, color: '#fff' }}>☰</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 6 }}>
                    <Image source={{ uri: Image1 }} style={{ width: 350, height: 170, borderRadius: 25, paddingBottom: 30 }} />
                    <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', position: 'absolute', top: 135 }}> ... </Text>

                </View>

            </View>
            <View>
                <Text style={{ fontSize: 20, position: 'absolute', color: 'black', fontWeight: '700', left: 30, top: 15 }}>
                    Upcoming Events
                </Text>
                <Text style={{ fontSize: 14, position: 'absolute', color: 'black', left: 270, top: 17, opacity: 0.9 }}>
                    See All ➤
                </Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ top: 50, }}
                        horizontal
                        data={jsondata.EventItems}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <View style={{ marginLeft: 20, paddingHorizontal: 10, paddingBottom: 30, top: 10 }}>
                                    <View style={{
                                        backgroundColor: '#fff', paddingHorizontal: 8, paddingBottom: 70, borderRadius: 20,
                                        shadowColor: '#000',
                                        shadowOffset: {
                                            width: 0,
                                            height: 50,
                                        },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 16.00,
                                        elevation: 8,
                                    }}>
                                        <Image source={{ uri: item.image }} style={{ width: 200, height: 120, bottom: 52, marginTop: 60, borderRadius: 10, }} />
                                        <Text style={{ fontSize: 17, top: 110, right: 20, marginTop: 25, fontWeight: '600', position: 'absolute' }}>{item.name}</Text>
                                        <Image source={{ uri: Image2 }} style={{ width: 30, height: 30, borderRadius: 25, position: "absolute", top: 170, left: 20 }} />
                                        <Image source={{ uri: Image3 }} style={{ width: 30, height: 30, borderRadius: 25, position: "absolute", top: 170, left: 45 }} />
                                        <Image source={{ uri: Image4 }} style={{ width: 30, height: 30, borderRadius: 25, position: "absolute", top: 170, left: 66 }} />

                                        <View style={{ position: 'absolute', left: 170, top: 20, backgroundColor: '#fff', paddingHorizontal: 5, paddingVertical: 6, borderRadius: 8 }}>
                                            <Image source={{ uri: SaveIcon }} style={{ width: 20, height: 20, }} />
                                        </View>

                                        <View style={{ position: 'absolute', top: 100, left: 17, }}>
                                            <Image source={{ uri: MusicIcon }} style={{ width: 15, height: 15, }} />
                                            <Text style={{ bottom: 20, left: 20, color: '#fff', backgroundColor: 'orange', paddingHorizontal: 10, borderRadius: 5 }}>Music</Text>
                                        </View>

                                        <View style={{ position: 'absolute', top: 175, left: 110 }}>
                                            <Text style={{ fontWeight: '600', color: 'blue' }}>+20 Going</Text>
                                        </View>

                                        <View style={{ position: 'absolute', top: 215, left: 30 }}>
                                            <Text style={{}}>📍 Mumbai, Maharastra</Text>
                                        </View>

                                        <View style={{ position: 'absolute', top: 15, left: 15, backgroundColor: '#fff', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, }}>
                                            <Text style={{ top: 2, left: 5, fontSize: 20, fontWeight: '700', color: 'red' }}>10</Text>
                                            <Text style={{ color: 'red', fontWeight: '600' }}>JUNE</Text>
                                        </View>

                                    </View>
                                </View>
                            </>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />


                    <Text style={{ fontSize: 19, position: 'absolute', color: 'black', fontWeight: 'bold', top: 330, left: 30 }}>
                        Jobs Nearby You
                    </Text>
                    <Text style={{ fontSize: 14, position: 'absolute', color: 'black', top: 335, left: 275, opacity: 0.9 }}>
                        See All ➤

                    </Text>

                    <FlatList
                        style={{ top: 100, marginLeft: 10 }}
                        horizontal
                        data={jsondata.EventItems}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <View style={{
                                    backgroundColor: '#4383f2', paddingHorizontal: 30, paddingBottom: 100, borderRadius: 20,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 50,
                                    },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 16.00,
                                    elevation: 8,
                                    marginHorizontal: 10, marginBottom: 100, marginTop: 10, marginLeft: 25
                                }}>
                                    <View style={{ backgroundColor: '#fff', padding: 20, top: 10, marginRight: 60, borderRadius: 8, right: 15 }}>

                                    </View>
                                    <Text style={{ color: '#fff', top: 10, right: 10, position: 'absolute', fontSize: 11, fontWeight: '600' }}>Post on</Text>
                                    <Text style={{ color: '#fff', top: 25, right: 10, position: 'absolute', fontSize: 10, fontWeight: '600' }}>1 Dec 23</Text>

                                    <Text style={{ color: '#fff', top: 30, right: 10 }}>Product Manager</Text>
                                    <Text style={{ color: '#fff', top: 30, right: 10 }}>Google</Text>
                                    <View style={{ backgroundColor: '#000', borderWidth: 0.5, paddingLeft: 145, position: 'absolute', top: 120, left: 10 }}></View>
                                    <View style={{ position: 'absolute', top: 125, left: 10 }}>
                                        <Text style={{ fontWeight: '600', color: '#fff' }}>📍 Mumbai</Text>
                                    </View>
                                    <Text style={{ position: 'absolute', top: 125, left: 110, fontWeight: '600', color: '#fff' }}>3-6 Lpa</Text>

                                    <View style={{ position: 'absolute', top: 150, left: 20, backgroundColor: '#fff', paddingHorizontal: 5, borderRadius: 20 }}>
                                        <Text>Full-Time</Text>
                                    </View>
                                    <View style={{ position: 'absolute', top: 150, left: 100, backgroundColor: '#fff', paddingHorizontal: 5, borderRadius: 20 }}>
                                        <Text>Hybrid</Text>
                                    </View>
                                </View>
                            </>
                        )}
                    />

                    <View style={{ top: 200, position: 'absolute' }}>
                        <Text style={{ fontSize: 19, position: 'absolute', color: 'black', fontWeight: 'bold', top: 400, left: 30 }}>
                            Matrimony
                        </Text>
                        <Text style={{ fontSize: 14, position: 'absolute', color: 'black', top: 400, left: 275, opacity: 0.9 }}>
                            See All ➤
                        </Text>
                    </View>
                    <FlatList
                        style={{ top: 70 }}
                        pagingEnabled
                        horizontal
                        data={jsondata.EventItems}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <View style={{ marginLeft: 20, paddingHorizontal: 10, paddingBottom: 30, top: 10 }}>
                                    <View style={{
                                        backgroundColor: '#fff', paddingHorizontal: 8, borderRadius: 20,
                                        shadowColor: '#000',
                                        shadowOffset: {
                                            width: 0,
                                            height: 50,
                                        },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 16.00,
                                        elevation: 8,
                                    }}>
                                        <Image source={{ uri: item.image }} style={{ width: 200, height: 120, bottom: 52, marginTop: 60, borderRadius: 10, }} />
                                        <Text style={{ fontSize: 17, top: 110, right:160, marginTop: 25, fontWeight: '600', position: 'absolute' }}>Alexa</Text>
                                        <Text style={{ fontSize: 13, top: 110, right: 20, marginTop: 25, fontWeight: '600', position: 'absolute' }}>Age: 25yrs</Text>

                                        <View style={{ position: 'absolute', left: 170, top: 20, backgroundColor: '#fff', paddingHorizontal: 5, paddingVertical: 6, borderRadius: 8 }}>
                                            <Image source={{ uri: SaveIcon }} style={{ width: 20, height: 20, }} />
                                        </View>

                                     
                                        <View style={{ position: 'absolute', top: 100, left:20,backgroundColor:'#fff',paddingHorizontal:4,paddingVertical:4,borderRadius:10 }}>
                                            <Text style={{ fontWeight: '600', color: '#000',fontSize:10 }}>Graphic Desingner</Text>
                                        </View>

                                        <View style={{ position: 'absolute', top: 100, left:120,backgroundColor:'#fff',paddingHorizontal:4,paddingVertical:1,borderRadius:10 }}>
                                            <Text style={{}}>📍 Mumbai</Text>
                                        </View>

            
                                    </View>
                                </View>
                            </>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Screen;

const styles = StyleSheet.create({

    inputText: {
        height: 50,
        color: "black"
    },
});