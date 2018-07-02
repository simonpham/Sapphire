import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default class NotificationItem extends Component {
    render () {
        return (
            <View style={styles.NotificationItemStyle}>
                <TouchableOpacity>
                    <View style={styles.NotificationContentStyle}>
                
                        <View style={styles.thumbnailContainerStyle}>
                            <Image 
                                style={styles.thumbnailStyle}
                                source={require('../images/sale.png')} 
                                />
                        </View>

                        <View style={styles.headerStyle}>
                            <Text style={styles.textStyle}>{this.props.headerTitle}</Text>
                            <Text style={[styles.textStyle, {color: '#999999'}]}>{this.props.headerContent}</Text>
                            <Text style={[styles.textStyle, {color: '#999999'}]}>...</Text>
                        </View>
                        
                        <View style={styles.dayStyle}>
                            <Text style={{fontSize: 13, fontFamily: 'Helvetica', color: '#999999'}}>2d ago</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    NotificationItemStyle: {
        height: 86,
        marginTop: 30,
    },

    thumbnailStyle: {
        height: 50,
        width: 50,
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 18,
        marginRight: 14,
    },

    headerStyle: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 38,
        width: 215,
        elevation: 2,
        position: 'relative',
        marginTop: 25,
        marginRight: 16,
    },

    dayStyle: {
        marginRight: 18,
        marginTop: 25,
        height: 15,
    },

    NotificationContentStyle: {
        width: '100%',
        marginTop: 0,
        marginLeft: 18,
        marginBottom: 2,
        flexDirection: 'row',
        borderBottomColor: 'rgba(0, 0, 0, 0.05)',
        borderBottomWidth: 1,
    },

    textStyle: {
        fontSize: 13,
        fontFamily: 'Helvetica',
    }
}
