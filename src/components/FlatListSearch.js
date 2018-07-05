import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    Alert
} from 'react-native';

export default class FlatListSearch extends Component {
    constructor(){
        super();
        this.state = {searchText: '', data:this.getPopularList()}
    }

    getSearchResult = (searchText) => {
        Alert.alert('get result for ' + searchText);
        this.setState({data:[
                {name: 'jumpsuit'},
                {name: 'romper'},
                {name: 'elizabeth james'},
                {name: 'kate space'},
                {name: 'lilly pulitzer'},
                {name: 'parker'},
                {name: 'bump friendly'},
                {name: 'herve leger'}
            ]})
    }

    navigateToSelectedItem = (item) => {
        Alert.alert('navigate to ' + item.name);
    }

    getFlatListItem = ({item}) =>
        <FlatListItem
            item={item}
            onItemPress={(item)=>{
                this.refs.textInput.blur();
                //click on an result item
                if (item.tag === undefined) this.navigateToSelectedItem(item)
                //click on an popular search item
                else this.getSearchResult(item.name)
            }}
        />;

    getPopularList(){
        //request for popular search list
        return [{tag:'Popular'}].concat([
            {name: 'jumpsuit'},
            {name: 'romper'},
            {name: 'elizabeth james'},
            {name: 'kate space'},
            {name: 'lilly pulitzer'},
            {name: 'parker'},
            {name: 'bump friendly'},
            {name: 'herve leger'}
        ].map(item=>Object.assign({},{name:item.name,tag:'popular'})));
    }

    // changeList(data,searchText) {
    //     return data.filter(
    //         item =>
    //             new RegExp(`${searchText}`, "gi").test(item.name)
    //     );
    // }

    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingStart: 18,
                    paddingEnd: 18,
                    alignItems: 'center',
                    height: 45,
                    backgroundColor: '#000'
                }}>
                    <TextInput
                        style={{
                            borderRadius: 3,
                            backgroundColor: '#3d3d3d',
                            fontSize: 11,
                            fontFamily: 'Helvetica',
                            color: '#d8d8d8',
                            paddingTop: 4,
                            paddingBottom: 0,
                            paddingStart: 15,
                            paddingEnd: 15,
                            flex: 1,
                            marginEnd: 18
                        }}
                        placeholderTextColor="#8e8e8e"
                        autoCorrect={false}
                        autoFocus={true}
                        placeholder={'What are you looking for?'}
                        underlineColorAndroid="transparent"
                        onChangeText={searchText => this.setState({searchText})}
                        value={this.state.searchText}
                        maxLength={100}
                        ref='textInput'
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.refs.textInput.blur();
                        }}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#f6ce00', fontSize: 13}}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList style={{marginStart: 18}}
                          data={this.state.data}
                          renderItem={this.getFlatListItem}
                          keyboardShouldPersistTaps={'handled'}
                          keyExtractor={(item)=>item.name || item.tag}
                />
            </View>
        );
    }
}

class FlatListItem extends Component {
    onPress = () => {
        this.props.onItemPress(this.props.item);
    };

    render() {
        if (this.props.item.name !== undefined)
            return (
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View>
                        <Text style={{fontSize: 16, color: '#111111'}}>
                            {this.props.item.name}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        else return (
            <Text style={{marginTop: 25, fontSize: 13, color: '#d9d9d9'}}>
                {this.props.item.tag}
            </Text>
        );

    }
}