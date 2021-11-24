
import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {

  return (
    <View style={styles.container}>
        <Text>Hello Dev Study</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default App;
