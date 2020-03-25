import Taro, {Component, Config} from '@tarojs/taro'
import {Button, Switch, View} from '@tarojs/components'
import './index.scss'
import TodoList from "../../components/todoList/todoList";
import CreateInput from "../../components/createInput/createInput";
import CreateModal from "../../components/createModal/createModal";
import {dbMethodName} from "../../utils/dbMethodName";
import {connect} from "@tarojs/redux";
import {clean} from "../../store/actions/selectIds";
import {fetchAll} from "../../store/actions/todoList";
import {setLoading} from "../../store/actions/loadding";

@connect(({selectedIds}) => ({
  selectedIds,
}), (dispatch) => ({
  cleanSelectedIds() {
    dispatch(clean())
  }
  fetchAll() {
    return dispatch(fetchAll())
  },
  setLoading(isLoading) {
    dispatch(setLoading(isLoading))
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

  handleFinishClick = () => {
    const {selectedIds, cleanSelectedIds, fetchAll, setLoading} = this.props;
    setLoading(true);
    Taro.cloud
      .callFunction({
        name: 'todoList',
        data: {
          funcName: dbMethodName.batchFinish,
          args: selectedIds
        }
      })
      .then(() => {
        cleanSelectedIds();
        fetchAll().then(()=>setLoading(false));
      })

  }

  handleDelClick = () => {
    const {selectedIds, cleanSelectedIds, fetchAll, setLoading} = this.props;
    setLoading(true);
    Taro.cloud
      .callFunction({
        name: 'todoList',
        data: {
          funcName: dbMethodName.batchDelete,
          args: selectedIds
        }
      })
      .then(() => {
        cleanSelectedIds();
        fetchAll().then(()=>setLoading(false));
      })
  }

  render() {
    return (
      <View className='index'>
        <CreateInput/>
        <TodoList/>
        <CreateModal/>
        <View className='btn-group'>
          <Button className='btn' type='primary' onClick={this.handleFinishClick}>完成</Button>
          <Button className='btn' type='warn' onClick={this.handleDelClick}>删除</Button>
        </View>
      </View>
    )
  }
}
