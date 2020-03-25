import Taro, {Component} from "@tarojs/taro"
import {View, Input, Button} from "@tarojs/components"
import classNames from 'classnames'


import './createInput.scss'
import {emitter, EVENT_TYPE} from "../../utils/events";

export default class CreateInput extends Component {
  state = {
    title: '',
    isWarningShow: false,
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
    console.log('obd')
    const {detail} = event;
    this.setState({
      title: detail.value,
      isWarningShow: false
    })
  }

  handleCreatBtnClick = () => {
    const {title} = this.state;
    if (title && title.trim()) {
      emitter.emit(EVENT_TYPE.showCreatModal, title);
    } else {
      this.setState({
        isWarningShow: true,
      })
    }
  }

  render() {
    const {isWarningShow} = this.state;
    return (
      <View className='container'>
        <Input className={classNames('input', isWarningShow && 'warning')}
               type='text' placeholder='请输入代办事项的标题'
               focus={isWarningShow}
               onBlur={this.handleInputBlur}/>
        <Button className='button' type='primary' onClick={this.handleCreatBtnClick}>创建</Button>
      </View>
    )
  }
}
