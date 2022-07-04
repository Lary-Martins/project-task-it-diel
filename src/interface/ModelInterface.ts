export interface Model<T> {
  create(params: T): Promise<T>, 
  read(): Promise<T[]>,
  readOne(id: string): Promise<T | null>, 
  update(id : string, params: T): Promise<T | null>,
  delete(id: string): Promise<T | null>
}
