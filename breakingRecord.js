let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    // Write your code here
  let high = 0
  let low = 0
  let highestScore = scores[0]
  let lowestScore = scores[0]
  let result = []
  for(let i = 0; i < scores.length; i++){
    if(lowestScore > scores[i]){
      lowestScore = scores[i]
      low ++
      continue
    }else if(highestScore < scores[i]){
      highestScore = scores[i]
      high ++
      continue
    }
  }
  result = [high, low]
  return result
}

console.log(breakingRecords(scores))