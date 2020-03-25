import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import TodoList from "../../components/todoList/todoList";
import CreateInput from "../../components/createInput/createInput";
import CreateModal from "../../components/createModal/createModal";
import {dbMethodName} from "../../utils/dbMethodName";


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  state = {
    todoList: []
  }

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
        this.setState({
          todoList: res.result.data,
        })
        console.log('res', res);
      })
  }

  render() {
    const {todoList} = this.state;
    return (
      <View className='index'>
        <CreateInput/>
        <TodoList todoList={todoList}/>
        <CreateModal confirmClick={this.fetchTodoList}/>
      </View>
    )
  }
}
