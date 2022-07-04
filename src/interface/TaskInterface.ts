import { z as zod } from 'zod';

const TaskSchema = zod.object({
  title: zod
    .string({
      required_error: 'Task is required',
      invalid_type_error: 'Task must be a string',
    })
    .min(3, { message: 'Task must be at least 3 characters long' }),

  description: zod
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a number',
    })
    .min(3, { message: 'Task must be at least 3 characters long' }),

  createdAt: zod
    .date({
      required_error: 'CreatedAt is required',
      invalid_type_error: 'CreatedAt must be in date format',
    }),
    
  scheduled: zod
    .date({
      required_error: 'Scheduled is required',
      invalid_type_error: 'Scheduled must be in date format',
    }),
    
  duration: zod
    .date({
      required_error: 'Duration is required',
      invalid_type_error: 'Duration must be in date format',
    }),

  status: zod.boolean().default(false),
});

export type Task = zod.infer<typeof TaskSchema>;

export default TaskSchema;
