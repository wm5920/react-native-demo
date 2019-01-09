/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};

type Props = {};
export default class AppFirst extends Component<Props> {
  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Greeting name='qiuqiu' />
          <Blink text='快看我' />

      </View>

    );
  }
}



class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // state的修改必须通过setState()方法
        // this.state.likes = 100; // 这样的直接赋值修改无效！
        // setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性
        // setState 是异步操作，修改不会马上生效

        // 每1000毫秒对showText状态做一次取反操作
        this.timer=setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);


        this.componentWillUnmount== this.componentWillUnmount.bind(this);
    }

    componentWillUnmount() {
        console.log('销毁定时器，否则会轰炸cpu')
        clearInterval(this.timer);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
