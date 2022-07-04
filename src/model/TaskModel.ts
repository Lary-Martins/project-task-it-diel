import { model as createModel } from 'mongoose';
import MongoModel from './MongoModel';
import taskSchema from '../schema/taskSchema';
import { Task } from '../interface/TaskInterface';

class TaskModel extends MongoModel<Task> {
  constructor(model = createModel('task', taskSchema)) {
    super(model);
  }
}

export default TaskModel;