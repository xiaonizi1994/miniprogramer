import Taro, {Component} from "@tarojs/taro"
import {View, Input, Button} from "@tarojs/components"


import './createInput.scss'
import {emitter, EVENT_TYPE} from "../../utils/events";

export default class CreateInput extends Component {
  state = {
    title: {},
    isOpened: false,
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

  handleInputBlur = (event) => {
    const {detail} = event;
    this.setState({
      title: detail.value
    })
    console.log('tilte', detail.value);
  }

  handleCreatBtnClick = () => {
    emitter.emit(EVENT_TYPE.shouldShowCreatModal, true);
  }

  render() {
    return (
      <View className='container'>
        <Input className='input' type='text' placeholder='请输入代办事项的标题' onBlur={this.handleInputBlur}/>
        <Button className='button' type='primary' onClick={this.handleCreatBtnClick}>创建</Button>
      </View>
    )
  }
}
