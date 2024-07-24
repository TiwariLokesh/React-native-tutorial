import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import Map from './Map'; // Import the Map component

const AboutUsScreen = ({navigation}) => {
    const initialRegion = {
        latitude: 28.704060,
        longitude: 77.102493,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.aboutUsTitle}>About Us</Text>

            <View style={styles.companyInfo}>
                <ImageBackground
                    source={{ uri: 'https://www.shutterstock.com/image-photo/windows-skyscraper-business-office-blue-600nw-558873121.jpg' }}
                    style={styles.image}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.companyName}>Antier Solutions</Text>
                        <Text style={styles.companyTagline}>Empowering businesses through digital solutions</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.services}>
                <ServiceItem
                    uri='https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg'
                />
                <ServiceItem
                    uri='https://cdn-icons-png.flaticon.com/512/3386/3386375.png'
                />
                <ServiceItem
                    uri='https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/512/messages-icon.png'
                />
                <ServiceItem
                    uri='https://static.vecteezy.com/system/resources/previews/024/305/294/original/data-chart-data-analytics-icon-monitoring-big-data-analysis-containing-database-free-png.png'
                />
                <ServiceItem
                    uri='https://cdn-icons-png.flaticon.com/512/8956/8956157.png'
                />
            </View>

            <View style={styles.mapSection}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Map initialRegion={initialRegion} />
                </SafeAreaView>
            </View>

            <Button title="Get Started Today" onPress={() => { }} color="#000" />
        </ScrollView>
    );
};

const ServiceItem = ({ uri, text }) => (
    <View style={styles.service}>
        <Image source={{ uri }} style={styles.serviceIcon} />
        <Text style={styles.serviceText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    aboutUsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    companyInfo: {
        width: '100%',
        height: 200,
        marginBottom: 20
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    companyName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    companyTagline: {
        fontSize: 14,
        color: '#fff',
    },
    services: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
    service: {
        alignItems: 'center',
        marginBottom: 20,
    },
    serviceIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    serviceText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#555',
    },
    mapSection: {
        height: 300,
        marginBottom: 20,
    },
});

export default AboutUsScreen;