import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export class HoldUpModal extends Component {
    static propTypes = {
        onDismiss:PropTypes.func.isRequired,
        onBtnPress:PropTypes.func.isRequired
    };
    static defaultProps = {
        title: '',
        content: '',
        firstBtnContent: '',
        secondBtnContent: '',
        icon: null,
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
                        <View style={styles.dialogContainer}>
                            <Text style={styles.titleStyle}>{this.props.title}</Text>
                            <Image source={this.props.icon} style={{width: 47, height: 47}}/>
                            <Text style={styles.contentStyle}>{this.props.content}</Text>
                            <View style={styles.buttonContainer}>
                                <View style={{flex: 1}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <View style={styles.firstButtonStyle}>
                                            <Text style={{color: 'black', fontSize: 11, fontFamily:'Helvetica'}}>
                                                {this.props.firstBtnContent}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1}}>
                                    <TouchableOpacity
                                        onPress={this.props.onBtnPress}>
                                        <View style={styles.secondButtonStyle}>
                                            <Text style={{color: 'white', fontSize: 11, fontFamily:'Helvetica'}}>
                                                {this.props.secondBtnContent}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/*This button is for testing*/}
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show HoldUpModal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        titleStyle: {
            marginTop: 15,
            fontFamily: 'Bodoni72',
            fontSize: 24,
            color: 'black',
            textAlign: 'center'
        },
        contentStyle: {
            fontSize: 11,
            fontFamily:'Helvetica',
            lineHeight:17,
            textAlign: 'center',
            marginTop: 12,
            marginStart: 28,
            marginEnd: 28,
            color: 'black'
        },
        firstButtonStyle: {
            alignItems: 'center',
            marginEnd: 8,
            padding: 9,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderWidth: 1
        },
        secondButtonStyle: {
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'black'
        },
        transparentScreenStyle: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: 0
        },
        buttonContainer: {
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 17,
            marginStart: 22,
            marginEnd: 22
        },
        dialogContainer: {
            alignItems: 'center',
            marginStart: 27,
            marginEnd: 27,
            backgroundColor: 'white'
        }
    }
);