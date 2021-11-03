const delay = process.argv.slice(2);
const time = function(delay) {
  if (delay.length <= 0 || delay === undefined) {
    return `You need to input a number`;
  }
  delay.map(num => Number(num));
  let filtered =  delay.filter((elem) => {
    return (elem >= 0 &&  !isNaN(elem));
  });
  for (let value of filtered) {
    console.log(value * 1000);
    setTimeout(function() {
      return  process.stdout.write('\x07');
    }, value * 1000);
  }
};
time(delay);