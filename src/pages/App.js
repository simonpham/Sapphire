import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import {styles} from '../values/styles';

const instructions = 'This is a playground for everyone to test your components. Do NOT commit changes on this file.';

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}
