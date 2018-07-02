import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/EvilIcons';

export class NoticeModal extends Component {
    static propTypes = {
        onDismiss:PropTypes.func.isRequired
    };
    static defaultProps = {
        title: '',
        content: '',
        btnContent: ''
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
                            <Text style={styles.titleStyle}>{this.props.title}</Text>
                            <Text style={styles.contentStyle}>{this.props.content}</Text>
                            <View style={styles.buttonContainer}>
                                <View style={{flex: 1}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <View style={styles.ButtonStyle}>
                                            <Text style={{color: 'white', fontSize: 11, fontFamily:'Helvetica'}}>
                                                {this.props.btnContent}
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
                    <Text>Show NoticeModal</Text>
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
            fontFamily:'Helvetica',
            lineHeight:17,
            textAlign: 'center',
            marginTop: 7,
            marginStart: 28,
            marginEnd: 28,
            color: 'black'
        },
        ButtonStyle: {
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