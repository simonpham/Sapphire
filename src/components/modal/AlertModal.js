import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export class AlertModal extends Component {
    static defaultProps = {
        title: '',
        content: '',
        firstBtnContent: '',
        secondBtnContent: '',
        onDismiss: () => {
        },
        onFirstBtnPress: () => {
        },
        onSecondBtnPress: () => {
        },
        background: ''
    };

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        this.props.onDismiss();
                    }}>
                    <View style={styles.transparentScreenStyle}>
                        <View/>
                        <View style={{flex: 0.42, alignItems: 'center', margin: 27, opacity: 1}}>
                            <ImageBackground
                                source={this.props.background}
                                style={{width: '100%', height: '100%'}}>
                                <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                                    <View style={{alignSelf: 'stretch', alignItems: 'flex-end'}}>
                                        <Icon
                                            style={{paddingTop: 8, paddingEnd: 8}}
                                            name='close'
                                            size={20}
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}
                                        />
                                    </View>
                                    <View style={{alignItems: 'stretch'}}>
                                        <Text style={styles.titleStyle}>{this.props.title}</Text>
                                        <Text style={styles.contentStyle}>{this.props.content}</Text>
                                        <TouchableOpacity
                                            onPress={this.props.onFirstBtnPress}>
                                            <View style={styles.firstButtonStyle}>
                                                <Text style={{color: 'white', fontSize: 11}}>
                                                    {this.props.firstBtnContent}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={this.props.onSecondBtnPress}>
                                            <View style={styles.secondButtonStyle}>
                                                <Text style={{color: 'black', fontSize: 11}}>
                                                    {this.props.secondBtnContent}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View/>
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        titleStyle: {
            fontFamily: 'Bodoni72',
            fontSize: 28,
            color: 'black',
            textAlign: 'center'
        },
        contentStyle: {
            fontSize: 11,
            textAlign: 'center',
            marginTop: 3,
            marginStart: 28,
            marginEnd: 28,
            color: 'black'
        },
        firstButtonStyle:{
            alignItems:'center',
            marginTop: 20,
            marginStart: 20,
            marginEnd:20,
            padding: 10,
            backgroundColor: 'black'
        },
        secondButtonStyle:{
            alignItems:'center',
            marginTop: 8,
            marginStart: 20,
            marginEnd:20,
            padding: 10,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderWidth:1.5
        },
        transparentScreenStyle:{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: 0
        }
    }
);