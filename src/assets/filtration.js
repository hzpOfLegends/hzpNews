class filtration {
  // 转换为用户当前时区的时间
  timezone_filter(val){
    if(val){
      let timezone_now = new Date().getTimezoneOffset()/60
      // 取出后面的时间 for example “10：20：12”
      let newvalue1 = val.split('T')[1].split("Z")[0]
      // 取出年份 for example “2012-10-10”
      let newvalue2 = val.split('T')[0]
      // 取出 时间值 时 for example “09”
      let newvalue3 = parseInt(newvalue1.split(':')[0])+timezone_now
      let newvalue4 = null
      if(newvalue3<=10){
       newvalue4 = "0"+newvalue3
      }
      //["09", "47", "18"]
      let steps = newvalue1.split(":")
      // 09
      let steps1 = steps[0] = newvalue4
      // 47
      let steps2 = steps[1]
      // 18
      let steps3 = steps[2]
      return newvalue2 + " " + steps1+":"+steps2+":"+steps3
    }
  }
}
export default new filtration()

