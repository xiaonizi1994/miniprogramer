import Taro, {Component} from "@tarojs/taro"
import {AtList} from "taro-ui";
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
  fetchAll () {
    dispatch(fetchAll())
  },
  update (item) {
    dispatch(update(item))
  }
}))

export default class TodoList extends Component {

  componentWillMount() {
  }

  componentDidMount() {
    this.props.fetchAll();
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
          {todoList && todoList.map(item => (
            <TodoItem item={item}/>
          ))}
        </AtList>
      </ScrollView>
    )
  }
}
