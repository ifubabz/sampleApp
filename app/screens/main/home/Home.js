import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Home</Text>         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      color: 'grey',
      fontSize: 32,
      fontWeight: 'bold',
  },
});