
import Taro, { Component } from "@tarojs/taro"
import {AtList, AtListItem} from "taro-ui";


export default class TodoList extends Component {
  state = {
    title: 'title',
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }

  render() {
    const {title} = this.state;
    return (
      <AtList>
        <AtListItem title={title}/>
        <AtListItem title='标题文字' arrow='right' />
        <AtListItem title='标题文字' extraText='详细信息' />
        <AtListItem title='禁用状态' disabled extraText='详细信息' />
      </AtList>
    )
  }
}
