import finger from 'fingerprintjs2';

const browser = {
  versions: (function() {
    const u = navigator.userAgent;
    return {
      appVersion: navigator.appVersion,
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      wechat: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == ' qq', //是否QQ
    };
  })(),
  language: (navigator['browserLanguage'] || navigator.language).toLowerCase(),
};

function getIsIPhoneX() {
  return (
    /iphone/gi.test(navigator.userAgent) &&
    (window.screen.height === 812 && window.screen.width === 375)
  );
}

const device = {
  ...browser.versions,
  language: browser.language,
  isIPhoneX: getIsIPhoneX(),
  getFinger: cb => {
    try {
      new finger().get((res, comp) => {
        cb(res, comp);
      });
    } catch (err) {
      console.warn('finger get error', err);
    }
  },
  createUUID: function() {
    var s = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    var uuid = s.join('');
    return uuid;
  },
};

export default device;
