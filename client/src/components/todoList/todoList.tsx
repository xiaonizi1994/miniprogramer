import Taro, {Component} from "@tarojs/taro"
import {AtList, AtListItem} from "taro-ui";
import {dbMethodName} from "../../utils/dbMethodName";


export default class TodoList extends Component {
  state = {
    todoList: [],
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.getTodoList();
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  getTodoList = () => {
    Taro.cloud
      .callFunction({
        name: 'todoList',
        data: {
          funcName: dbMethodName.getItemsById,
        }
      })
      .then(res => {
        this.setState({
          todoList: res.result.data,
        })
        console.log('res', res);
      })
  }

  render() {
    const {todoList} = this.state;
    return (
      <AtList>
        {todoList.map(item => (
          <AtListItem title={item.title} arrow='right'/>
        ))}
      </AtList>
    )
  }
}
