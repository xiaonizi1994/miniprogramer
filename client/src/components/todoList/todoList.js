import Taro, {Component} from "@tarojs/taro"
import {AtList, AtListItem} from "taro-ui";
import TodoItem from "../todoItem/TodoItem";
import {ScrollView} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {add, fetchAll, update} from "../../store/actions/todoList";
import {dbMethodName} from "../../utils/dbMethodName";

@connect(({ todoList }) => ({
  todoList
}), (dispatch) => ({
  add (item) {
    dispatch(add(item))
  },
  fetchAll (items) {
    dispatch(fetchAll(items))
  },
  update (item) {
    dispatch(update(item))
  }
}))

export default class TodoList extends Component {

  componentWillMount() {
  }

  componentDidMount() {
    this.fetchTodoList();
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  fetchTodoList = () => {
    Taro.cloud
      .callFunction({
        name: 'todoList',
        data: {
          funcName: dbMethodName.getItemsById,
        }
      })
      .then(res => {
        this.props.fetchAll(res.result.data)
      })
  }

  render() {
    const {todoList} = this.props;
    const scrollStyle = {
      height: '370px',
      borderBottom: '1px solid #d6e4ef'
    }
    return (
      <ScrollView style={scrollStyle} scrollY>
        <AtList>
          {todoList && todoList.map(item => (
            <AtListItem title={item.title} extraText="查看详情" arrow='right' isSwitch/>
          ))}
          {todoList && todoList.map(item => (
            <TodoItem item={item}/>
          ))}
        </AtList>
      </ScrollView>
    )
  }
}
