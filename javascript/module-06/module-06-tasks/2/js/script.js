/*  
  Расставьте отсутствующие this в конструкторе объектов Day
*/

function Day(sunrise, sunset) {
  this.sunrise = sunrise;
  this.sunset = sunset;

  this.getBreakpoints = () => `Sunrise: ${this.sunrise}, Sunset: ${this.sunset}`;

  this.minutesToString = (minutes) => `${Math.trunc(minutes / 60)}:${minutes % 60}`;

  this.toMinutes = (str) => {
    const tmp = str.split(':');
    return Math.trunc(+tmp[0]) * 60 + +tmp[1];
  };

  this.getLength = () => `Length of day: ${this.minutesToString(
    this.toMinutes(sunset) - this.toMinutes(sunrise)
  )}`;
};

const day = new Day('6:15', '20:45');

console.log(day.sunrise); // 6:15
console.log(day.sunset); // 20:45
console.log(day.getBreakpoints()); // "Sunrise: 6:15,  Sunset: 20:45" 
console.log(day.getLength());  // "Length of day: 14:30"
