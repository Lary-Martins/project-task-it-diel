import { ServiceError } from '../interface/ServiceError';
import MongoModel from '../model/MongoModel';

abstract class Service<T> {
  constructor(protected model: MongoModel<T>) { }

  async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  async read(): Promise<T[]> {
    return this.model.read();
  }

  async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  async update(id: string, params: T): Promise<T | null | ServiceError> {
    return this.model.update(id, params);
  }

  async delete(id: string): Promise<T | null | ServiceError> {
    return this.model.delete(id);
  }
}

export default Service;