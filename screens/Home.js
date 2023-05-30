import { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusStatusBar  } from '../components';
function Home() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusStatusBar  />
    
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
              <FlatList
                data={NFTData}
                  renderItem={({ item }) => <Text>{item.name}</Text>}              
                  keyExtractor={(item) => item.id}
              />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
