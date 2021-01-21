import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb'

@Entity()
export class Review {

    @ObjectIdColumn()
    id? : ObjectID;

    @Column()
     comment: string;

     @Column()
     score: number;

     @Column()
    courseId: ObjectID;

}

export default Review
