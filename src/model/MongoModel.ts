import { Model as M, Document } from 'mongoose';
import { Model } from '../interface/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(private model: M<T & Document>) {}

  async create(params: T): Promise<T> {
    return this.model.create(params);
  }

  async read(): Promise<T[]> {
    return this.model.find({});
  }

  async readOne(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  async update(id: string, params: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...params },

      { new: true },
    );
  }

  async delete(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete({ _id: id });
  }
}

export default MongoModel;