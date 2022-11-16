import { IFind } from 'src/ticket/interfaces/repositories/find.interface'
import { IPersist } from 'src/ticket/interfaces/repositories/persist.interface'

export abstract class AbstractRepository<T> implements IFind, IPersist{
	abstract findAll(query?: Partial<T>): Promise<T[]> 
	abstract findOne(query?: Partial<T>): Promise<T> 
	abstract find(query?: Partial<T>): Promise<T[]> 
	abstract findById(id: any): Promise<T> 
	abstract save(data: T): Promise<T> 
	abstract update(data: Partial<T>): Promise<T> 
	abstract delete(data: number): Promise<any> 
}
