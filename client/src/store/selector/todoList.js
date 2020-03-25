import { useSelector } from '@tarojs/redux';

export const todoListSelector = useSelector(state => state.todoList)
