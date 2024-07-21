import React from 'react';
import { SafeAreaView } from 'react-native';
import Map from './Map';
const Home = () => {
const initialRegion = {
latitude: 30.733767316547716,
longitude: 76.77901240066186,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
};
return (
<SafeAreaView style={{ flex: 1 }}>
<Map initialRegion={initialRegion} />
</SafeAreaView>
);
};
export default Home;