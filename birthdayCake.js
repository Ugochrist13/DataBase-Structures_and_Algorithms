let candles = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
  let high = Math.max(...candles)
  let res = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == high) {
      res++
    }
  }

  return res

}
console.log(birthdayCakeCandles(candles));
