import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb'

@Entity()
export class Course {

    @ObjectIdColumn()
    id? : ObjectID;

    @Column()
    number?: string;

    @Column()
    title?: string;

}

export default Course
