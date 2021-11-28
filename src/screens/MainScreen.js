
const users = [
  {
    name: 'jd',
    avatar: '../assets/test1.jpg'
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

export default class Main extends Component {
  render() {
    return (
      <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider />
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Image style={styles.image} resizeMode="cover" source={{ uri: u.avatar }} />
              <Text style={styles.name}>{u.name}</Text>
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