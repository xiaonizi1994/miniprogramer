import Taro, {Component} from "@tarojs/taro"
import {Button} from "@tarojs/components"
import {AtModal, AtModalAction, AtModalContent, AtModalHeader} from "taro-ui";
import {dbMethodName} from "../../utils/dbMethodName";
import {emitter, EVENT_TYPE} from '../../utils/events';

export default class CreateModal extends Component {

  eventEmitter;

  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: props.title
      },
      isOpened: false,
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.eventEmitter = emitter.addListener(EVENT_TYPE.shouldShowCreatModal, (isOpened) => {
      this.setState({
        isOpened,
      });
    });
  }

  componentWillUnmount() {
    emitter.removeListener(EVENT_TYPE.shouldShowCreatModal, this.eventEmitter);
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleCancelClick = () => {
    this.setState({
      isOpened: false,
    })
  }

  handleConfirmClick = () => {
    const {form} = this.state;
    Taro.cloud
      .callFunction({
        name: "todoList",
        data: {
          funcName: dbMethodName.addItem,
          args: form,
        }
      })
      .then(res => {
        console.log('res', res)
      })
  }

  render() {
    const {isOpened} = this.state;

    console.log('state', this.props);
    console.log('iospe', isOpened);
    return (
      <AtModal isOpened={isOpened}>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button onClick={this.handleCancelClick}>取消</Button>
          <Button onClick={this.handleConfirmClick}>确定</Button>
        </AtModalAction>
      </AtModal>
    )
  }


}
