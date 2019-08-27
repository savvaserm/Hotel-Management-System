import { User } from './model.user';
import { Room } from './model.room';

export class Reservation {

  id: number;
  roomId: Room;
  customer: User;
  checkin: Date;
  checkout: Date;
  details: string;
  total: number;
  nights: number;

}
