import Taro, {Component} from "@tarojs/taro"
import {Button} from "@tarojs/components"
import {AtModal, AtModalAction, AtModalContent, AtModalHeader, AtTextarea} from "taro-ui";
import {dbMethodName} from "../../utils/dbMethodName";
import {emitter, EVENT_TYPE} from '../../utils/events';
import {connect} from "@tarojs/redux";
import {fetchAll} from "../../store/actions/todoList";
import {setLoading} from "../../store/actions/loadding";


@connect(({ todoList }) => ({
  todoList
}), (dispatch) => ({
  fetchAll () {
    return dispatch(fetchAll())
  },
  setLoading(isLoading) {
    dispatch(setLoading(isLoading))
  }
}))
export default class CreateModal extends Component {

  eventEmitter;

  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: props.title,
        detail: '',
      },
      isOpened: false,
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.eventEmitter = emitter.addListener(EVENT_TYPE.showCreatModal, (title) => {
      this.setState({
        isOpened: true,
        form: {
          title
        }
      });
    });
  }

  componentWillUnmount() {
    emitter.removeListener(EVENT_TYPE.showCreatModal, this.eventEmitter);
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleCancelClick = () => {
    this.setState({
      isOpened: false,
    });
    this.cleanForm();
  }

  handleConfirmClick = () => {
    const {form} = this.state;
    const {setLoading} = this.props;
    setLoading(true);
    Taro.cloud
      .callFunction({
        name: "todoList",
        data: {
          funcName: dbMethodName.addItem,
          args: form,
        }
      })
      .then(() => {
        this.cleanForm();
        this.props.fetchAll().then(()=>{setLoading(false)});
      });
    this.setState({
      isOpened: false
    });
  };

  handleTextChange = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        detail: value,
      }
    })
  }

  cleanForm = () => {
    this.setState({
      form: {
        title: null,
        detail: null,
      }
    })
  }

  render() {
    const {isOpened, form} = this.state;

    return (
      isOpened && <AtModal isOpened={isOpened}>
        <AtModalHeader>{form.title}</AtModalHeader>
        <AtModalContent>
          <AtTextarea
            value={form.detail}
            onChange={this.handleTextChange.bind(this)}
            maxLength={200}
            placeholder='请输入待办事项详情'
          />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={this.handleCancelClick}>取消</Button>
          <Button onClick={this.handleConfirmClick}>确定</Button>
        </AtModalAction>
      </AtModal>
    )
  }


}
