/*  
  Расставьте отсутствующие this в методах 
  объекта day
*/

const day = {
  sunrise: "6:15",
  sunset: "20:45",
  getBreakpoints() {
    return `Sunrise: ${this.sunrise}, Sunset: ${this.sunset}`;
  },
  minutesToString(minutes) {
    return `${Math.trunc(minutes / 60)}:${minutes % 60}`;
  },
  toMinutes(str) {
    const tmp = str.split(":");
    return Math.trunc(+tmp[0]) * 60 + +tmp[1];
  },
  getLength() {
    return `Length of day: ${this.minutesToString(
      this.toMinutes(this.sunset) - this.toMinutes(this.sunrise)
    )}`;
  }
};

console.log(day.getBreakpoints()); // "Sunrise: 6:15, Sunset: 20:45"
console.log(day.getLength()); // "Length of day: 14:30"
