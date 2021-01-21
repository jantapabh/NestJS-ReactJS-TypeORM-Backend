//คลาสสำหรับส่งข้อมูลไปยัง courseService
import { ObjectID} from 'mongodb'
export class CreateReviewDto {

    comment: string;
    score: number;
    courseId?: ObjectID;
    
}