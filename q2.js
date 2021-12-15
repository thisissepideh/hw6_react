function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return array;
}

function solution(people) {
  let tmp = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i] != -1) {
      tmp.push(people[i]);
    }
  }

  let sorted = sortArray(tmp);
  let result = [];
  let count = 0;
  for (let i = 0; i < people.length; i++) {
      if(people[i]==-1){
          result.push(-1)
          count++
        }
      else{
          result.push(sorted[i-count])
      }

  }

  return result
}


console.log(solution([-1,150,190,170,-1,-1,160,180]))
