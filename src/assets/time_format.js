var moment = require('moment-timezone');

export default {
  //时区转换
  timezone_transition(val) {
    return moment(val).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
  }
}

