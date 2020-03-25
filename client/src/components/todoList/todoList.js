import Taro, {Component} from "@tarojs/taro"
import {AtList, AtActivityIndicator} from "taro-ui";
import TodoItem from "../todoItem/TodoItem";
import {ScrollView} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {add, fetchAll, update} from "../../store/actions/todoList";
import './TodoList.scss'

@connect(({todoList, selectedIds, loading}) => ({
  todoList,
  selectedIds,
  loading
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
    const {todoList, loading} = this.props;
    return (
      <ScrollView className='scroller' scrollY>
        {loading && <AtActivityIndicator mode='center' size={64}></AtActivityIndicator>}
        <AtList>
          {todoList && todoList.map(item => (
            <TodoItem item={item}/>
          ))}
        </AtList>
      </ScrollView>
    )
  }
}
