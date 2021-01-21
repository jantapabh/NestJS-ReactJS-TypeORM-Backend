import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId, ObjectID } from 'mongodb'

@Entity()
export class Review {

    @ObjectIdColumn()
    id? : ObjectID;

    @Column()
     comment: string;

     @Column()
     score: number;

     @Column()
    courseId: ObjectId;

}

export default Review
