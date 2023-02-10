module.exports = function check(str, bracketsConfig) {
  // your solution
 
  //config2obj
  // bracketsConfig = [['(', ')'], ['[', ']']]

  let bracketsConfigObj = {}
  let stack = []
  let counter = 0
  let arr = []

  bracketsConfigObj = bracketsConfig.reduce((acc,item) => {
    acc[item[0]] = item[1] 
    return acc  
  },{})


  for(i of str){
    console.log(i)

    if(Object.keys(bracketsConfigObj).includes(i)){
      
      if(stack.includes(i) && bracketsConfigObj[i] == i){
        
          if(stack.pop() !== i){
            return false
          } else {
            continue
          }
        
      }

      // console.log(stack)
      stack.push(i)
      
    }


    if(Object.values(bracketsConfigObj).includes(i) && bracketsConfigObj[i] !== i){

      if(bracketsConfigObj[stack.pop()] !== i){
        return false
      }
    }

  }

  if(stack.length > 0) {
    return false
  }

  return true
  // console.log(bracketsConfigObj)

}

//  console.log(module.exports('|(|)',[['(', ')'], ['|', '|']]))