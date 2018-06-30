class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf (year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    debugger;
    return this.endingLocation.vertical - this.beginningLocation.vertical;
  }
}

class Location {
  constructor (horizontal, vertical) {
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
}
