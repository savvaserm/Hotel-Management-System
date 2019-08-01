import { Room } from './model.room';
import { User } from './model.user';

export class Rating {
  ratingId: number;
  rating: number;
  comments: string;
  roomId: Room;
  customerId: User;
}
