import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonprint'
})
export class JsonPrint implements PipeTransform {

  transform(value: any, ...args): any {
    return JSON.stringify(value, null, 2)
      .replace('room_hotelId', 'Hotel')
      .replace('hotelName', 'hotel name')
      .replace('roomType', 'room type')
      .replace('room TypeID', 'room type id')
      .replace('roomID', 'Room id')
      .replace('roomNumber', 'Room number')
      .replace('room_roomtype', 'Room')
      .replace('availability', 'Available')
      .replace('180', '180 $')
      .replace('60', '60 $')
      .replace('120', '120 $')
      .replace('{', '')
      .replace('{', '')
      .replace('}', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace(',', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('{', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('"', '')
      .replace('}', '')
      .replace('}', '')
      .replace('[', '')
      .replace(']', '')
      .replace('{', '')
      .replace('{', '')
      .replace('}', '')
      .replace('}', '')
      .replace('amenityId: 1', '')
      .replace('amenityId: 2', '')
      .replace('amenityId: 3', '')
      .replace('amenityId: 4', '')
      .replace('amenityId: 5', '')
      .replace('amenityId:', '')
      .replace('amenity_name:', '')
      .replace('amenity_name:', '')
      .replace('amenity_name:', '')
      .replace('amenity_name:', '')
      .replace('amenity_name:', '')
      .replace('emp_hotelId', 'Hotel')
      .replace('startShift', 'Start shift')
      .replace('endShift', 'End shift');
  }
}
