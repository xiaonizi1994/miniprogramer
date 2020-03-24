import Taro, {Component} from "@tarojs/taro"
import {View, Input, Button} from "@tarojs/components"


import './createInput.scss'

export default class CreateInput extends Component {
  state = {
    context: {}
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

  render() {
    return (
      <View className='container'>
        <Input className='input' type='text' placeholder='最大输入长度为 10'/>
        <Button className='button' type='primary'>创建</Button>
      </View>
    )
  }
}
