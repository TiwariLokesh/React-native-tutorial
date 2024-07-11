import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
       <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
What's new in Javascript 21 - ES12
        </Text>
       </View>
       <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D22AQHLuALJ5eqGsw/feedshare-shrink_800/0/1719502633146?e=1723680000&v=beta&t=5WRMvSM-oMTirqRcrV9irPnxAZJa-bNAlI3-lU-ipXA',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            aperiam cumque nostrum dolore dolorem doloremque accusamus
            consectetur assumenda natus ipsam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Molestiae, quisquam.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() =>{openWebsite('https://www.linkedin.com/feed/')}}>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
});
