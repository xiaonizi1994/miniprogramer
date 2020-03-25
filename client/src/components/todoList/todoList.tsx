import Taro, {Component} from "@tarojs/taro"
import {AtList, AtListItem} from "taro-ui";


export default class TodoList extends Component {
  static defaultProps = {
    todoList: []
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
    const {todoList} = this.props;
    return (
      <AtList>
        {todoList.map(item => (
          <AtListItem title={item.title} arrow='right'/>
        ))}
      </AtList>
    )
  }
}
