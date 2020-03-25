import Taro, {Component} from "@tarojs/taro"
import {AtList} from "taro-ui";
import TodoItem from "../todoItem/TodoItem";
import {ScrollView} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {add, fetchAll, update} from "../../store/actions/todoList";
import './TodoList.scss'

@connect(({todoList, selectedIds}) => ({
  todoList,
  selectedIds
}), (dispatch) => ({
  add(item) {
    dispatch(add(item))
  },
  fetchAll() {
    dispatch(fetchAll())
  },
  update(item) {
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
    const {todoList, selectedIds} = this.props;
    return (
      <ScrollView className='scroller' scrollY>
        <AtList>
          {todoList && todoList.map(item => (
            <TodoItem checked={selectedIds.includes(item._id)} item={item}/>
          ))}
        </AtList>
      </ScrollView>
    )
  }
}
