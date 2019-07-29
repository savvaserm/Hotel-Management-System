import { User } from './model.user';
import { Room } from './model.room';

export class Reservation {
  reservationId: number;
  roomId: Room;
  customerId: User;
  checkin: string;
  checkout: string;
  details: string;
  total: number;
  nights: number;
}
