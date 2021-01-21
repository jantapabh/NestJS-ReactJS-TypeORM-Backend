//คลาสสำหรับส่งข้อมูลไปยัง courseService
import { IsInt, IsNotEmpty } from 'class-validator';
import { ObjectID} from 'mongodb'
export class CreateReviewDto {

   @IsNotEmpty()
    comment: string;

    @IsInt()
    score: number;

    courseId?: ObjectID;
    
}