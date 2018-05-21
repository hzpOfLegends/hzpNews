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
      case 7:
        return '新聞'
        break;
      case 6:
        return '國際'
        break;
      case 5:
        return '娛樂'
        break;
      case 4:
        return '科技'
        break;
      case 3:
        return '軍事'
        break;
      case 2:
        return '體育'
        break;
      case 1:
        return '問答'
        break;
      case 8:
        return '旅游'
        break;
      case 9:
        return '任務'
        break;
      case 10:
        return '音樂'
        break;
      case 11:
        return '影視'
        break;
      case 12:
        return '軟件'
        break;
      case 13:
        return '文學'
        break;
      case 14:
        return '美食'
        break;
      case 15:
        return '健康'
        break;
      case 16:
        return '醫藥'
        break;
      case 17:
        return '商鋪'
        break;
      case 18:
        return '財經'
        break;
      case 19:
        return '汽車'
        break;
      case 20:
        return '房產'
        break;
      case 21:
        return '動漫'
        break;
      case 22:
        return '教育'
        break;
      case 23:
        return '天氣'
        break;
      case 24:
        return '群體聚集'
        break;
      case 25:
        return '自然災害'
        break;
      case 26:
        return '交通事故'
        break;
      case 27:
        return '刑事犯罪'
        break;
      case 28:
        return '暴力執法'
        break;
      case 29:
        return '求職招聘'
        break;
      case 30:
        return '食品安全'
        break;
      case 31:
        return '環境污染'
        break;
      case 32:
        return '疾病疫情'
        break;
      case 33:
        return '金融安全'
        break;
      case 34:
        return '非法組織'
        break;
      case 35:
        return '反動言論'
        break;
      case 36:
        return '心靈鷄湯'
        break;
    }
  }
}

export default new filtration()

