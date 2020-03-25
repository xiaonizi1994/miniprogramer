import Taro, {Component} from "@tarojs/taro"
import {Switch, View} from "@tarojs/components";

import './TodoItem.scss'
import {AtIcon} from "taro-ui";
import {connect} from "@tarojs/redux";
import {toggle} from "../../store/actions/selectList";

@connect(({ selectedIds }) => ({
  selectedIds,
}), (dispatch) => ({
  toggle(id) {
    dispatch(toggle(id))
  },
}))

export default class TodoItem extends Component {
  static defaultProps = {
    item: {},
    checked: false,
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

  render() {
    const {item, checked} = this.props;
    console.log('checke', checked);
    return (
      <View className='item-container'>
        <View className='block'>
          <Switch type="checkbox" checked={false} onClick={() => this.handleCheckBoxClick(item._id)}/>
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
