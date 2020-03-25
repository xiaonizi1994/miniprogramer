import Taro, {Component} from "@tarojs/taro"
import {Switch, View} from "@tarojs/components";

import './TodoItem.scss'
import {AtIcon} from "taro-ui";
import {connect} from "@tarojs/redux";
import {toggle} from "../../store/actions/selectIds";

@connect(({selectedIds}) => ({
  selectedIds,
}), (dispatch) => ({
  toggle: (id) =>
    dispatch(toggle(id)),
}))

export default class TodoItem extends Component {
  static defaultProps = {
    item: {},
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

  handleCheckBoxClick = (id) => {
    this.props.toggle(id)
  };

  getStatus = (item) => {
    return item.done ? '已完成' : '未完成'
  }

  render() {
    const {item, selectedIds} = this.props;
    return (
      <View className='item-container'>
        <View className='block'>
          <Switch type="checkbox" checked={selectedIds.includes(item._id)} onChange={() => this.handleCheckBoxClick(item._id)}/>
          <View className='content'>
            <View>{item.title}:</View>
            <View className='detail'>{item.detail}</View>
          </View>
        </View>
        <View className='block'>
          <View>{this.getStatus(item)}</View>
          <AtIcon value='chevron-right' size='25' color='#ccc'></AtIcon>
        </View>
      </View>
    )
  }
}
