import React, {Component} from 'react';
import {
    View,
     Button
} from 'react-native';

export default class allpages extends Component<Props> {
    static navigationOptions = {    //上标题
        title: '所有页面',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="AppFirst"
                    onPress={() => this.props.navigation.navigate('AppFirst')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to page1"
                    onPress={() => this.props.navigation.navigate('page1')}
                />
                <Button
                    title="Go to page2"
                    onPress={() => this.props.navigation.navigate('page2')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}