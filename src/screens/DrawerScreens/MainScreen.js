
const users = [
  {
    name: 'jd',
    avatar: require('../../assets/image/test1.jpg')
  }, 
  {
    name: 'jd',
    avatar: require('../../assets/image/test1.jpg')
  }
]

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class MainScreen extends Component {
  render() {
    return (
      <Card>
        {users.map((u, i) => {
          <Card.Divider/>
          return (
            <View key={i}>
              <Text> {u.name}</Text>
              <Image style={{width: 200, height: 200}} resizeMode="cover" source={u.avatar} />
            </View>);
        })
        }
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});