import { User } from './model.user';
import { Room } from './model.room';

export class Reservation {

  id: number;
  roomId: number;
  customerId: number;
  checkin: Date;
  checkout: Date;
  details: string;
  total: number;
  nights: number;

}
