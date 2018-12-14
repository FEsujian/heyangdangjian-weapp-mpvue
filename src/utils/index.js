const host = 'http://68e90253.ngrok.io';

function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

// 日期转换默认格式为MM月dd日 hh:mm
function timeFormat(date, fmt = 'MM月dd日 hh:mm') {
  // 空数据处理
  if (date === null || date === undefined || date === '') {
    return '';
  }
  // 如果是时间戳则转化为时间
  if (typeof date === 'number' || typeof date === 'string') {
    date = new Date(date);
  }

  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
}

function request(url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        wx.hideLoading();
        resolve(res.data);
      },
      fail: function(err) {
        wx.hideLoading();
        reject(err);
      },
      complete: function() {
        wx.hideLoading();
      }
    });
  });
}

function get(obj) {
  return request(obj.url, 'GET', obj.data);
}

function post(obj) {
  return request(obj.url, 'POST', obj.data);
}

export default {
  formatNumber,
  timeFormat,
  request,
  get,
  post
};
