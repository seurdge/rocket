class ElevatorController {

  constructor(number_of_floor, number_of_elevator) {
    this.number_of_floor = number_of_floor;
    this.number_of_elevator = number_of_elevator;
    this.elevator_list = [];
    for(let i=0; i<number_of_elevator; i++) {
      this.elevator_list.push(new Elevator(i+1, "", 1));
    }
  }

  RequestElevator(FloorNumber, Direction) {
      console.log('RequestElevator');
      console.log('FloorNumber = ' + FloorNumber);
      console.log('Direction = ' + Direction);
  }

  RequestFloor(FloorNumber, Direction) {
      console.log('RequestFloor');
      console.log('FloorNumber = ' + FloorNumber);
      console.log('Direction = ' + Direction);
  }

  FindElevator(Floor, Direction) {
    for(let i=0; i<this.elevator_list.length; i++) {
      var tmp_elevator = this.elevator_list[i];
      if(tmp_elevator.current_floor == Floor){
        console.log("blah");
        return tmp_elevator;
      }
  }
}

}

class Elevator {
  constructor(elevator_number, direction, current_floor) {
    this.elevator_number = elevator_number;
    this.current_floor = current_floor;
  }
}

const a = new ElevatorController(10,2);
//a.RequestElevator(2, 'UP');
//a.RequestFloor(2, 'UP');
console.log(a.elevator_list);
console.log(a.elevator_list[0].current_floor);
console.log(a.elevator_list[1].current_floor);
let chosen_elevator = a.FindElevator(1, "UP");
console.log("chose_elevator = " + chosen_elevator.elevator_number)

module.exports = ElevatorController;
