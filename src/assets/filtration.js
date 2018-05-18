class filtration {
  // 转换为用户当前时区的时间
  timezone_filter(val) {
    if (val) {
      let timezone_now = new Date().getTimezoneOffset() / 60
      // 取出后面的时间 for example “10：20：12”
      let newvalue1 = val.split('T')[1].split("Z")[0]
      // 取出年份 for example “2012-10-10”
      let newvalue2 = val.split('T')[0]
      // 取出 时间值 时 for example “09”
      let newvalue3 = parseInt(newvalue1.split(':')[0]) + timezone_now
      let newvalue4 = null
      if (newvalue3 <= 10) {
        newvalue4 = "0" + newvalue3
      }
      //["09", "47", "18"]
      let steps = newvalue1.split(":")
      // 09
      let steps1 = steps[0] = newvalue4
      // 47
      let steps2 = steps[1]
      // 18
      let steps3 = steps[2]
      return newvalue2 + " " + steps1 + ":" + steps2 + ":" + steps3
    }
  }

  // 文章類型過濾
  type_filter(val) {
    switch (val) {
      case 1:
        return '新聞'
        break;
      case 2:
        return '國際'
        break;
      case 3:
        return '娛樂'
        break;
      case 4:
        return '科技'
        break;
      case 5:
        return '軍事'
        break;
      case 6:
        return '體育'
        break;
      case 7:
        return '問答'
        break;
      case 8:
        return '懂車帝'
        break;
      case 9:
        return '財經'
        break;
      case 10:
        return '美食'
        break;
      case 11:
        return '養生'
        break;
    }
  }
}

export default new filtration()

