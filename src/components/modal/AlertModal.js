import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export class AlertModal extends Component {
    constructor(props) {
        super(props);
        const {
            title,
            content,
            onDismiss,
            onFirstBtnPress,
            onSecondBtnPress,
            background
        } = this.props;
    }

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
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        top:0
                    }}>
                        <View/>
                        <View style={{flex: 0.35, alignItems: 'center', borderWidth: 1, margin: 20, opacity:1}}>
                            <ImageBackground
                                //source={require('C:\\Users\\ASUS\\Desktop\\realapp\\Sapphire\\resources\\modal-background.jpeg')}
                                style={{width: '100%', height: '100%'}}>
                                <View style = {{flex:1, backgroundColor:'rgba(255, 255, 255, 0.7)'}}>
                                <View style={{alignSelf: 'stretch', alignItems: 'flex-end'}}>
                                    <Icon
                                        style={{padding: 7}}
                                        name='close'
                                        size={20}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                    />
                                </View>
                                <View style = {{alignItems:'center'}}>
                                    <Text>Put the content here</Text>

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