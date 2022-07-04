import { Schema, Document } from 'mongoose';
import { Task } from '../interface/TaskInterface';

interface TaskDocument extends Task, Document {}

const taskSchema = new Schema<TaskDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true },
  scheduled: { type: Date, required: true },
  duration: { type: Date, required: true },
  status: { type: Boolean, default: false },

}, {
  versionKey: false,
});

export default taskSchema;