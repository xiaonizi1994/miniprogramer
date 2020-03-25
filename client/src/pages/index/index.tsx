import Taro, {Component, Config} from '@tarojs/taro'
import {Button, View} from '@tarojs/components'
import './index.scss'
import TodoList from "../../components/todoList/todoList";
import CreateInput from "../../components/createInput/createInput";
import CreateModal from "../../components/createModal/createModal";
import {dbMethodName} from "../../utils/dbMethodName";
import {connect} from "@tarojs/redux";
import {clean} from "../../store/actions/selectIds";
import {fetchAll} from "../../store/actions/todoList";

@connect(({ selectedIds }) => ({
  selectedIds,
}), (dispatch) => ({
  cleanSelectedIds() {
    dispatch(clean())
  }
  fetchAll() {
    dispatch(fetchAll())
  }
}))

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

  handleDelClick = () => {
    const {selectedIds, cleanSelectedIds, fetchAll} = this.props;
    Taro.cloud
      .callFunction({
        name: 'todoList',
        data: {
          funcName: dbMethodName.batchDelete,
          args: selectedIds
        }
      })
      .then(res => {
        cleanSelectedIds();
        fetchAll();
        console.log('res', res);
      })
  }

  render() {
    return (
      <View className='index'>
        <CreateInput/>
        <TodoList/>
        <CreateModal/>
        <View className='btn-group'>
          <Button className='btn' type='primary'>完成</Button>
          <Button className='btn' type='warn' onClick={this.handleDelClick}>删除</Button>
        </View>
      </View>
    )
  }
}
