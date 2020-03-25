import { EventEmitter } from 'events';

export const emitter =  new EventEmitter();

export const EVENT_TYPE = {
  showCreatModal: 'showCreatModal',
  showDeleteModal: 'showDeleteModal'
}
