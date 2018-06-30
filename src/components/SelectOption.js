import React, {Component} from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class SelectOption extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      pageWidth: Dimensions.get('window').width,
      pageHeight: Dimensions.get('window').height,
      searchText: null,
      selected: []
    };
    rowHeight           = 46
    selectedIconName    = "ios-checkmark-circle",
    unselectedIconName  = "ios-radio-button-off-outline",
    iconSize            = 22
    iconColor           = "#212020"
  }

  getNewDimensions(event){
        var pageHeight = event.nativeEvent.layout.height
        var pageWidth = event.nativeEvent.layout.width
        this.setState({
            pageHeight, pageWidth
        })
    }

  _onSelect = (item) => {
    var selected = this.state.selected
    if(this.props.multiple){
      if(selected.indexOf(item) == -1){
        selected.push(item)
        this.setState({
          selected: selected
        })
      } else {
        selected = selected.filter(i => i != item)
        this.setState({
          selected: selected
        })
      }
    } else {
      if(selected.indexOf(item) == -1){
        selected = [item]
        this.setState({
          selected: selected
        })
      } else {
        selected = []
        this.setState({
          selected: selected
        })
      }
    }
    this.props.callback(selected)
  }

  _onSearch = (text) => {
    this.setState({
      searchText: text.length > 0 ? text.toLowerCase() : null
    })
  }

  _isSelected = (item) => {
    const selected = this.state.selected
    if(selected.indexOf(item) == -1){
      return false
    }
    return true
  }

  filterObjectByValue = (obj, predicate) => {
    return Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} )
  }

  render(){
    const { options, returnValue } = this.props;
    const list = this.state.searchText ? this.filterObjectByValue(options, option => option.toLowerCase().includes(this.state.searchText)) : options
    const labels = Object.keys(list).map(i => list[i])
    const values = Object.keys(list)
    return(
      <View onLayout={(evt)=>{this.getNewDimensions(evt)}} /*style={[{backgroundColor: '#f98639'}]}*/>
        <ScrollView
          style={[{ padding: 5}, this.props.scrollViewStyle]}
        >
          {labels.map((label, index) => {
            const itemKey = returnValue == "label" ? label : values[index]
            return(
                <TouchableOpacity
                    key={Math.round(Math.random() * 1000000)}
                    style={[{
                    paddingTop: 12,
                    paddingBottom: 12,
                    marginRight: 3,
                    marginTop: -6,
                    height: rowHeight,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTopColor: 'rgba(0, 0, 0, 0.05)',
                    borderTopWidth: 1,
                    },]}
                    onPress={() => {
                    this._onSelect(itemKey)
                    }}
                >
                <Text>{label}</Text>
                    {
                      this._isSelected(itemKey) ?
                      <Icon name={selectedIconName}
                              style={[{
                                color: iconColor, 
                                fontSize: iconSize, 
                              }]}
                              />
                      :
                      <Icon name={unselectedIconName}
                              style={[{
                                color: iconColor, 
                                fontSize: iconSize,
                              },]}
                              />
                    }
                </TouchableOpacity>
                
            )
          })}
        </ScrollView>
      </View>
    );
  }
}