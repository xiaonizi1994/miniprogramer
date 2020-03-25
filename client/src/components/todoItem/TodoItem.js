import Taro, {Component} from "@tarojs/taro"
import {Switch, View} from "@tarojs/components";

import './TodoItem.scss'
import {AtIcon} from "taro-ui";

export default class TodoItem extends Component {
  static defaultProps = {
    item: {}
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const {item} = this.props;
    return (
      <View className='item-container'>
        <View className='block'>
          <Switch type="checkbox"/>
          <View className='content'>
            <View>{item.title}:</View>
            <View className='detail'>detail{item.detail}</View>
          </View>
        </View>
        <View className='block'>
          <View className='detail'>查看详情</View>
          <AtIcon value='chevron-right' size='25' color='#ccc'></AtIcon>
        </View>
      </View>
    )
  }
}
