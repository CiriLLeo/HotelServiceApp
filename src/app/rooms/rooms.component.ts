import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName = "Leonardo's Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
      totalRooms: 20,
      availableRooms: 10,
      bookedRooms: 5
    }
  roomList: RoomList[] = [ {
    roomNumber: '101',
    roomType: 'Simple Room',
    amenities: 'Air Conditioner, Free Wi-Fi, Room Service',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    checkInTime: new Date('2024-08-10'),
    checkOutTime: new Date('2024-08-16')
  },
  {
    roomNumber: '102',
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, Room Service',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    checkInTime: new Date('2024-08-10'),
    checkOutTime: new Date('2024-08-16')
  },
  {
    roomNumber: '103',
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wi-Fi, Room Service',
    price: 11000,
    photos: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    checkInTime: new Date('2024-08-10'),
    checkOutTime: new Date('2024-08-16')
  }

]

  constructor() { }

  ngOnInit(): void { }

  toggle() {
    this.hideRooms = !this.hideRooms
  }
}
