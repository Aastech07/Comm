import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Screen from './Component/Screen';
import Work from './Component/Work';
import { useState } from 'react';
export default function App() {
  const [selected, setSelected] = useState(0)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {selected == 0 ? <Screen /> : selected == 1 ? <Work /> : null}

      <View style={{ width: '100%', height: 60, backgroundColor: '#f2f2f2', position: 'absolute', bottom: 0 }}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={() => setSelected(0)}>
            <View style={{opacity:0.5,bottom:2}}>
              <Image source={require('./assets/Directroy.png')} style={{ width: 28, height: 28, marginHorizontal: 30,marginTop:4 }} />
              <Text style={{fontSize:12, position: 'absolute', marginTop: 30, alignSelf: 'center' }}>Directroy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(1)}>
            <View style={{ opacity:0.5,bottom:2 }}>
              <Image source={require('./assets/job.png')} style={{ width: 23, height: 20, marginHorizontal: 20 ,marginTop:7}} />
              <Text style={{fontSize:12, position: 'absolute', marginTop: 30, alignSelf: 'center' }}>Job</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(2)}>
            <View style={{ left: 50,opacity:0.5,bottom:2 }}>
              <Image source={require('./assets/user1.png')} style={{ width: 30, height: 20, marginHorizontal: 30,marginTop:7 }} />
              <Text style={{fontSize:13, position: 'absolute', marginTop: 30, alignSelf: 'center' }}>Matrimony</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(3)}>
            <View style={{left:35,opacity:0.4,bottom:2}}>
                                 <Image source={require('./assets/massages.png')} style={{ width: 28, height: 28, marginHorizontal: 30,marginTop:6 }} />
              <Text style={{fontSize:13, position: 'absolute', marginTop: 30, alignSelf: 'center' ,}}>Blog</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
