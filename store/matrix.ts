import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMatrix = defineStore('matrix', () => {
  const shared = ref({} as {
    dayNum: string, yearNum: string, monthNum: string, fateNum: string,
    mainNum: string;
    leftUp: string;
    rightUp: string;
    rightDown: string;
    leftDown: string;
    thirdLeft: string;
    secondLeft: string;
    thirdCenter: string;
    secondCenter: string;
    thirdRight: string;
    secondRight: string;
    thirdDown: string;
    secondDown: string;
    secondMainRight: string;
    thirdLeftUp: string;
    secondLeftUp: string;
    thirdRightUp: string;
    secondRightUp: string;
    thirdRightDown: string;
    secondRightDown: string;
    thirdLeftDown: string;
    secondLeftDown: string;
    betweenHeartAndDollar: string;
    heart: string;
    dollar: string;
    secondMainLeft: string;
    thirdMainRight: string;
    secondMainUp: string;
    sky: string;
    earth: string;
    skyEarth: string;
    manLine: string;
    womanLine: string;
    manWoman: string;
    spiritual: string;
    planetary: string;
  })
  return { shared }
})