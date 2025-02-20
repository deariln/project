import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMatrix = defineStore('matrix', () => {
  const shared = ref({} as {dayNum: number, yearNum: number, monthNum: number, fateNum: number})

  function calculateNum (numStr:string) {
    let num = (numStr).split('').reduce((a, el) => a + (+el), 0)
    if (num > 22) {
        num = num.toString().split('').reduce((a, el) => a + (+el), 0)
    }
    return num
  }
  function onlyCheck (num:number) {
      if (num > 22) {
          num = num.toString().split('').reduce((a, el) => a + (+el), 0)
      }
      return num
  }

  function calculateMatrix (birthDate:string) {
    const arr = birthDate.split('-')
    const day = arr[2]
    const month = arr[1]
    const year = arr[0]

    const matrix = {} as Record<string,number>

    matrix.fateNum = calculateNum(day + month + year)
    matrix.dayNum = calculateNum(day)
    matrix.monthNum = calculateNum(month)
    matrix.yearNum = calculateNum(year)
    const main = calculateNum((matrix.yearNum+matrix.monthNum+matrix.dayNum).toString())
    matrix.mainNum = calculateNum((main+matrix.fateNum).toString())
    matrix.leftUp = onlyCheck(matrix.dayNum+matrix.monthNum)
    matrix.rightUp = onlyCheck(matrix.monthNum+matrix.yearNum)    
    matrix.rightDown = onlyCheck(matrix.yearNum + matrix.fateNum)
    matrix.leftDown = onlyCheck(matrix.dayNum + matrix.fateNum)
    matrix.thirdLeft = onlyCheck(matrix.dayNum + matrix.mainNum)
    matrix.secondLeft = onlyCheck(matrix.dayNum + matrix.thirdLeft)
    matrix.thirdCenter = onlyCheck(matrix.monthNum + matrix.mainNum)
    matrix.secondCenter = onlyCheck(matrix.monthNum + matrix.thirdCenter)
    matrix.thirdRight = onlyCheck(matrix.yearNum + matrix.mainNum)
    matrix.secondRight = onlyCheck(matrix.yearNum + matrix.thirdRight)
    matrix.thirdDown = onlyCheck(matrix.fateNum + matrix.mainNum)
    matrix.secondDown = onlyCheck(matrix.fateNum + matrix.thirdDown)
    matrix.secondMainRight = onlyCheck(matrix.leftDown + matrix.leftUp + matrix.rightUp + matrix.rightDown)
    matrix.thirdLeftUp = onlyCheck(matrix.leftUp + matrix.secondMainRight)
    matrix.secondLeftUp = onlyCheck(matrix.leftUp + matrix.thirdLeftUp)
    matrix.thirdRightUp = onlyCheck(matrix.rightUp + matrix.secondMainRight)   
    matrix.secondRightUp = onlyCheck(matrix.rightUp + matrix.thirdRightUp) 
    matrix.thirdRightDown = onlyCheck(matrix.rightDown + matrix.secondMainRight) 
    matrix.secondRightDown = onlyCheck(matrix.rightDown + matrix.thirdRightDown) 
    matrix.thirdLeftDown = onlyCheck(matrix.leftDown + matrix.secondMainRight) 
    matrix.secondLeftDown = onlyCheck(matrix.leftDown + matrix.thirdLeftDown) 
    matrix.betweenHeartAndDollar = onlyCheck(matrix.thirdDown + matrix.thirdRight) 
    matrix. heart = onlyCheck(matrix.betweenHeartAndDollar + matrix.thirdDown) 
    matrix. dollar = onlyCheck(matrix.betweenHeartAndDollar + matrix.thirdRight) 
    matrix. secondMainLeft = onlyCheck(matrix.thirdLeft + matrix.mainNum)
    matrix. thirdMainRight = onlyCheck(matrix.mainNum + matrix.secondMainRight)        
    matrix. secondMainUp = onlyCheck(matrix.mainNum + matrix.thirdCenter)   
    matrix. sky = onlyCheck(matrix.monthNum + matrix.fateNum)   
    matrix. earth = onlyCheck(matrix.dayNum + matrix.yearNum)   
    matrix.skyEarth = onlyCheck(matrix.sky + matrix.earth)   
    matrix.manLine = onlyCheck(matrix.leftUp + matrix.rightDown) 
    matrix.womanLine = onlyCheck(matrix.leftDown + matrix.rightUp) 
    matrix.manWoman = onlyCheck(matrix.manLine + matrix.womanLine) 
    matrix.spiritual = onlyCheck(matrix.skyEarth + matrix.manWoman) 
    matrix.planetary = onlyCheck(matrix.spiritual + matrix.manWoman)
    
    shared.value.dayNum = matrix.dayNum
    shared.value.monthNum = matrix.monthNum
    shared.value.yearNum = matrix.yearNum
    shared.value.fateNum = matrix.fateNum
    
    return matrix
  }

  return { shared, calculateMatrix, onlyCheck }
})