/**
 * 根据时间戳返回距当前时间的距离
 * @param {*} dateTimeStamp 时间戳
 */
export function getDateByTime(dateTimeStamp: number) {
  let result
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  // const halfamonth = day * 15
  const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - dateTimeStamp
  if (diffValue < 0) {
    return
  }
  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  if (monthC >= 1) {
    if (monthC <= 12)
      result = `${parseInt(monthC.toString())} months ago`
    else {
      result = `${parseInt((monthC / 12).toString())} years ago`
    }
  } else if (weekC >= 1) {
    result = `${parseInt(weekC.toString())} weeks ago`
  } else if (dayC == 1) {
    result = `Yesterday`
  } else if (dayC > 1) {
    result = `${parseInt(dayC.toString())} days ago`
  } else if (hourC >= 1) {
    result = `${parseInt(hourC.toString())} hrs ago`
  } else if (minC >= 1) {
    result = `${parseInt(minC.toString())} min ago`
  } else {
    result = "Now"
  }
  return result
}
/**
 * 防抖 (坐电梯)
 * eg.当持续触发某事件时,一定时间间隔内没有再触发事件时,事件处理函数才会执行一次,如果设定的时间间隔到来之前,又一次触发了事件,就重新开始延时
 * @param { String } handler 函数名
 * @param { Number } delay 延时
 */
export function debounce(handler: Function, delay: number) {
  var timer: any = null
  return function () {
    var _self = this,
      _args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      handler.apply(_self, _args)
    }, delay)
  }
}
/**
 * 节流
 * eg.当持续触发事件时,有规律的每隔一个时间间隔执行一次事件处理函数
 * @param { String } handler 函数名
 * @param { Number } wait 延时
 */
export function throttle(handler: Function, wait: number) {
  var lastTime = 0
  return function () {
    var args = arguments
    var nowTime = new Date().getTime()
    if (nowTime - lastTime > wait) {
      handler.apply(this, args)
      lastTime = nowTime
    }
  }
}

export const random = (max = 1, min = 0) => Math.floor(Math.random() * (max - min) + min)

export function getDeviceType() {
  const sUserAgent = navigator.userAgent.toLowerCase()
  const bIsIpad = sUserAgent.match(/ipad/i)
  const bIsIphoneOs = sUserAgent.match(/iphone os/i)
  const bIsMidp = sUserAgent.match(/midp/i)
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i)
  const bIsUc = sUserAgent.match(/ucweb/i)
  const bIsAndroid = sUserAgent.match(/android/i)
  const bIsCE = sUserAgent.match(/windows ce/i)
  const bIsWM = sUserAgent.match(/windows mobile/i)
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return "phone"
  } else {
    return "pc"
  }
}