import Taro, {Component} from "@tarojs/taro"
import {AtList, AtListItem} from "taro-ui";
import TodoItem from "../todoItem/TodoItem";
import {ScrollView} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {add, getAll, update} from "../../store/actions/todoList";

@connect(({ todoList }) => ({
  todoList
}), (dispatch) => ({
  add (item) {
    dispatch(add(item))
  },
  getAll () {
    dispatch(getAll())
  },
  update (item) {
    dispatch(update(item))
  }
}))

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

    const scrollStyle = {
      height: '370px',
      borderBottom: '1px solid #d6e4ef'
    }
    return (
      <ScrollView style={scrollStyle} scrollY>
        <AtList>
          {todoList.map(item => (
            <AtListItem title={item.title} extraText="查看详情" arrow='right' isSwitch/>
          ))}
          {todoList.map(item => (
            <TodoItem item={item}/>
          ))}
        </AtList>
      </ScrollView>
    )
  }
}
