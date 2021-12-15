function solution(s1, s2) {
  let dic1 = {};
  for (let i = 0; i < s1.length; i++) {
    if (dic1[s1[i]] === undefined) {
      dic1[s1[i]] = 1;
    } else {
      dic1[s1[i]]++;
    }
  }
  let dic2 = {};
  for (let i = 0; i < s2.length; i++) {
    if (dic2[s2[i]] === undefined) {
      dic2[s2[i]] = 1;
    } else {
      dic2[s2[i]]++;
    }
  }
  let minDic , maxDic={}

  if (dic1.length>=dic2.length){
      minDic=dic2
      maxDic=dic1
  }
  else{
      minDic=dic1
      maxDic=dic2
  }

 let result=0

for (const [key, value] of Object.entries(minDic)) {
    if(maxDic[key]!=undefined){
       result+=Math.min(value,maxDic[key]) 
    }
  }
return result
}

console.log(solution("aabcc", "adb"));
