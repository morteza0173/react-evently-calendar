import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

function ChevronLeft() {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-left", viewBox: "0 0 16 16", children: jsx("path", { fillRule: "evenodd", d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" }) }));
}
function ChevronRight() {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-right", viewBox: "0 0 16 16", children: jsx("path", { fillRule: "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" }) }));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".calendar-app {\r\n  width: 100%;\r\n  min-width: 400px;\r\n}\r\n\r\n.calendar {\r\n  width: 100%;\r\n}\r\n\r\n.heading {\r\n  font-size: clamp(2rem, 3.8cqi, 3.5rem);\r\n}\r\n\r\n.navigate-date {\r\n  display: flex;\r\n  align-items: center;\r\n  column-gap: 1rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.navigate-date h2 {\r\n  font-size: clamp(1.5rem, 1.5cqi, 2.5rem);\r\n  color: #4b4b4b;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  column-gap: 1rem;\r\n  margin-inline-start: auto;\r\n}\r\n\r\n.buttons button {\r\n  background-color: #f0f0f0;\r\n  border: none;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  border-radius: 0.3rem;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.buttons button:hover {\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.weekdays,\r\n.weekdays span,\r\n.days,\r\n.days span {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.weekdays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  border-top-left-radius: 0.5rem;\r\n  border-top-right-radius: 0.5rem;\r\n  border: 1px solid #ccc;\r\n  border-bottom: none;\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.weekdays span {\r\n  text-align: center;\r\n  padding: 0.5rem 0;\r\n  font-weight: bold;\r\n  color: #4b4b4b;\r\n  border-inline-end: 1px solid #ccc;\r\n}\r\n\r\n.weekdays span:last-child {\r\n  border-inline-end: none;\r\n}\r\n\r\n.days {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  border: 1px solid #ccc;\r\n  border-bottom-left-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n}\r\n\r\n.days span.defaultDays {\r\n  text-align: start;\r\n  padding: 0.5rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n  border-inline-end: 1px solid #ccc;\r\n  border-bottom: 1px solid #ccc;\r\n  aspect-ratio: 3 / 2;\r\n  overflow: hidden;\r\n}\r\n\r\n.days span:nth-child(7n) {\r\n  border-inline-end: none;\r\n}\r\n\r\n.days span:nth-last-child(-n + 7) {\r\n  border-bottom: none;\r\n}\r\n\r\n.days span.defaultDays:hover {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.days span.current-day {\r\n  font-weight: bold;\r\n}\r\n\r\n.days span.disabled {\r\n  color: #aaa;\r\n}\r\n";
styleInject(css_248z);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dayjs_min = {exports: {}};

(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
} (dayjs_min));

var dayjs_minExports = dayjs_min.exports;
var baseDayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var fa$2 = {exports: {}};

(function (module, exports) {
	!function(_,e){module.exports=e(dayjs_minExports);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"fa",weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekStart:6,months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"}};return t.default.locale(d,null,!0),d})); 
} (fa$2));

var faExports = fa$2.exports;
var fa$1 = /*@__PURE__*/getDefaultExportFromCjs(faExports);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/* eslint-disable */
function gregorianToJulian(year, month, day) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }

  var A = Math.floor(year / 100);
  var B = 2 - A + Math.floor(A / 4);
  var JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
  return JD;
}

function julianToPersian(jd) {
  jd = jd + 0.5;
  var Z = Math.floor(jd);
  var F = jd - Z;
  var A = Z;

  if (Z >= 2299161) {
    var alpha = Math.floor((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - Math.floor(alpha / 4);
  }

  var B = A + 1524;
  var C = Math.floor((B - 122.1) / 365.25);
  var D = Math.floor(365.25 * C);
  var E = Math.floor((B - D) / 30.6001);
  var day = B - D - Math.floor(30.6001 * E) + F;
  var month = E < 14 ? E - 1 : E - 13;
  var year = month > 2 ? C - 4716 : C - 4715;
  return gregorianToJalali(year, month, day);
}

function julianToGregorian(jd) {
  jd = jd + 0.5;
  var Z = Math.floor(jd);
  var F = jd - Z;
  var A = Z;

  if (Z >= 2299161) {
    var alpha = Math.floor((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - Math.floor(alpha / 4);
  }

  var B = A + 1524;
  var C = Math.floor((B - 122.1) / 365.25);
  var D = Math.floor(365.25 * C);
  var E = Math.floor((B - D) / 30.6001);
  var day = B - D - Math.floor(30.6001 * E) + F;
  var month = E < 14 ? E - 1 : E - 13;
  var year = month > 2 ? C - 4716 : C - 4715;
  return [Math.floor(year), Math.floor(month), Math.floor(day)];
}

function persianToJulian(jy, jm, jd) {
  var g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  function div(a, b) {
    return Math.floor(a / b);
  }

  jy -= 979;
  var j_day_no = 365 * jy + div(jy, 33) * 8 + div(jy % 33 + 3, 4);

  for (var i = 0; i < jm - 1; ++i) {
    j_day_no += j_days_in_month[i];
  }

  j_day_no += jd - 1;
  var g_day_no = j_day_no + 79;
  var gy = 1600 + 400 * div(g_day_no, 146097);
  g_day_no = g_day_no % 146097;
  var leap = true;

  if (g_day_no >= 36525) {
    g_day_no--;
    gy += 100 * div(g_day_no, 36524);
    g_day_no = g_day_no % 36524;

    if (g_day_no >= 365) {
      g_day_no++;
    } else {
      leap = false;
    }
  }

  gy += 4 * div(g_day_no, 1461);
  g_day_no %= 1461;

  if (g_day_no >= 366) {
    leap = false;
    g_day_no--;
    gy += div(g_day_no, 365);
    g_day_no = g_day_no % 365;
  }

  for (i = 0; g_day_no >= g_days_in_month[i] + (i == 1 && leap); i++) {
    g_day_no -= g_days_in_month[i] + (i == 1 && leap);
  }

  var gm = i + 1;
  var gd = g_day_no + 1;
  return gregorianToJulian(gy, gm, gd);
}

function gregorianToJalali(gYear, gMonth, gDay) {
  var g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  function div(a, b) {
    return Math.floor(a / b);
  }

  var gy = gYear - 1600;
  var gm = gMonth - 1;
  var gd = gDay - 1;
  var g_day_no = 365 * gy + div(gy + 3, 4) - div(gy + 99, 100) + div(gy + 399, 400);

  for (var i = 0; i < gm; ++i) {
    g_day_no += g_days_in_month[i];
  }

  if (gm > 1 && (gYear % 4 == 0 && gYear % 100 != 0 || gYear % 400 == 0)) g_day_no++;
  g_day_no += gd;
  var j_day_no = g_day_no - 79;
  var j_np = div(j_day_no, 12053);
  j_day_no %= 12053;
  var jy = 979 + 33 * j_np + 4 * div(j_day_no, 1461);
  j_day_no %= 1461;

  if (j_day_no >= 366) {
    jy += div(j_day_no - 1, 365);
    j_day_no = (j_day_no - 1) % 365;
  }

  for (var j = 0; j < 11 && j_day_no >= j_days_in_month[j]; ++j) {
    j_day_no -= j_days_in_month[j];
  }

  var jm = j + 1;
  var jd = j_day_no + 1;
  return [jy, jm, jd];
}

var jdate = {
  J: function J(y, m, d) {
    return julianToPersian(gregorianToJulian(y, m, d));
  },
  G: function G(y, m, d) {
    return julianToGregorian(persianToJulian(y, m, d));
  }
};

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})[-/]?(\d{0,2})(.*)?$/;
var REGEX_FORMAT = /\[.*?\]|jY{2,4}|jM{1,4}|jD{1,2}|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var DATE = 'date';
var D = 'day';
var M = 'month';
var Y = 'year';
var W = 'week';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var fa = {
  jmonths: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_')
};

var plugin = (function (o, Dayjs, dayjs) {
  var proto = Dayjs.prototype;
  var U = proto.$utils();

  var $isJalali = function $isJalali(v) {
    return v.$C === 'jalali';
  };

  var $prettyUnit = U.prettyUnit || U.p;
  var $isUndefined = U.isUndefined || U.u;
  var $padStart = U.padStart || U.s;
  var $monthDiff = U.monthDiff || U.m;
  var $absFloor = U.absFloor || U.a;

  var wrapperOfTruth = function wrapperOfTruth(action) {
    return function () {
      var unsure = action.bind(this).apply(void 0, arguments);
      unsure.$C = this.$C;

      if (unsure.isJalali()) {
        unsure.InitJalali();
      }

      return unsure;
    };
  }; // keep calendar on date manipulation


  proto.startOf = wrapperOfTruth(proto.startOf);
  proto.endOf = wrapperOfTruth(proto.endOf);
  proto.add = wrapperOfTruth(proto.add);
  proto.subtract = wrapperOfTruth(proto.subtract);
  proto.set = wrapperOfTruth(proto.set);
  var oldParse = proto.parse;
  var oldInit = proto.init;
  var oldStartOf = proto.startOf;
  var old$Set = proto.$set;
  var oldAdd = proto.add;
  var oldFormat = proto.format;
  var oldDiff = proto.diff;
  var oldYear = proto.year;
  var oldMonth = proto.month;
  var oldDate = proto.date;
  var oldDaysInMonth = proto.daysInMonth;
  var oldToArray = proto.toArray;
  dayjs.$C = 'gregory'; // First Day Of Week

  dayjs.$fdow = 6; // 0: sunday, ...

  dayjs.calendar = function (calendar) {
    dayjs.$C = calendar;
    return dayjs;
  };

  proto.calendar = function (calendar) {
    var that = this.clone();
    that.$C = calendar;

    if (that.isJalali()) {
      that.InitJalali();
    }

    return that;
  };

  proto.isJalali = function () {
    return $isJalali(this);
  };

  dayjs.en.jmonths = 'Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand'.split('_');
  dayjs.locale('fa', Object.assign({}, fa$1, {}, fa), true);

  var wrapper = function wrapper(date, instance) {
    return dayjs(date, {
      locale: instance.$L,
      utc: instance.$u,
      calendar: instance.$C
    });
  };

  proto.init = function () {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    oldInit.bind(this)(cfg);

    if (this.isJalali()) {
      this.InitJalali();
    }
  };

  proto.parse = function (cfg) {
    var reg;
    this.$C = cfg.calendar || this.$C || dayjs.$C; // eslint-disable-next-line no-cond-assign

    if (cfg.jalali && typeof cfg.date === 'string' && /.*[^Z]$/i.test(cfg.date) // looking for a better way
    && (reg = cfg.date.match(REGEX_PARSE))) {
      // 1397-08-08 or 13970808
      var _jdate$G = jdate.G(parseInt(reg[1], 10), parseInt(reg[2], 10), parseInt(reg[3] || 1, 10)),
          _jdate$G2 = _slicedToArray(_jdate$G, 3),
          y = _jdate$G2[0],
          m = _jdate$G2[1],
          d = _jdate$G2[2];

      cfg.date = "".concat(y, "-").concat(m, "-").concat(d).concat(reg[4] || '');
    }

    return oldParse.bind(this)(cfg);
  };

  proto.InitJalali = function () {
    var _jdate$J = jdate.J(this.$y, this.$M + 1, this.$D),
        _jdate$J2 = _slicedToArray(_jdate$J, 3),
        jy = _jdate$J2[0],
        jm = _jdate$J2[1],
        jd = _jdate$J2[2];

    this.$jy = jy;
    this.$jM = jm - 1;
    this.$jD = jd;
  };

  proto.startOf = function (units, startOf) {
    var _this = this;

    // startOf -> endOf
    if (!$isJalali(this)) {
      return oldStartOf.bind(this)(units, startOf);
    }

    var isStartOf = !$isUndefined(startOf) ? startOf : true;
    var unit = $prettyUnit(units);

    var instanceFactory = function instanceFactory(d, m) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.$jy;

      var _jdate$G3 = jdate.G(y, m + 1, d),
          _jdate$G4 = _slicedToArray(_jdate$G3, 3),
          gy = _jdate$G4[0],
          gm = _jdate$G4[1],
          gd = _jdate$G4[2];

      var ins = wrapper(new Date(gy, gm - 1, gd), _this);
      return (isStartOf ? ins : ins.endOf(D)).$set('hour', 1); // prevent daylight saving issue in safari
    };

    var WModifier = (this.$W + (7 - dayjs.$fdow)) % 7;

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(0, 0, this.$jy + 1);

      case M:
        return isStartOf ? instanceFactory(1, this.$jM) : instanceFactory(0, (this.$jM + 1) % 12, this.$jy + parseInt((this.$jM + 1) / 12, 10));

      case W:
        return isStartOf ? instanceFactory(this.$jD - WModifier, this.$jM) : instanceFactory(this.$jD + (6 - WModifier), this.$jM);

      default:
        return oldStartOf.bind(this)(units, startOf);
    }
  };

  proto.$set = function (units, _int) {
    var _this2 = this;

    if (!$isJalali(this)) {
      return old$Set.bind(this)(units, _int);
    }

    var unit = $prettyUnit(units);

    var instanceFactory = function instanceFactory(d, m) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this2.$jy;

      var _jdate$G5 = jdate.G(y, m + 1, d),
          _jdate$G6 = _slicedToArray(_jdate$G5, 3),
          gy = _jdate$G6[0],
          gm = _jdate$G6[1],
          gd = _jdate$G6[2];

      _this2.$d.setFullYear(gy);

      _this2.$d.setMonth(gm - 1);

      _this2.$d.setDate(gd);

      return _this2;
    };

    switch (unit) {
      case DATE:
      case D:
        instanceFactory(_int, this.$jM);
        break;

      case M:
        instanceFactory(this.$jD, _int);
        break;

      case Y:
        instanceFactory(this.$jD, this.$jM, _int);
        break;

      default:
        return old$Set.bind(this)(units, _int);
    }

    this.init();
    return this;
  };

  proto.add = function (number, units) {
    var _this3 = this;

    if (!$isJalali(this)) {
      return oldAdd.bind(this)(number, units);
    }

    number = Number(number); // eslint-disable-line no-param-reassign
    // units === 'ms' hard code here, will update in next release

    var unit = units && (units.length === 1 || units === 'ms') ? units : $prettyUnit(units);

    var instanceFactory = function instanceFactory(u, n) {
      var date = _this3.set(DATE, 1).set(u, n + number);

      return date.set(DATE, Math.min(_this3.$jD, date.daysInMonth()));
    };

    if (['M', M].indexOf(unit) > -1) {
      var n = this.$jM + number;
      var y = n < 0 ? -Math.ceil(-n / 12) : Math.floor(n / 12);
      var d = this.$jD;
      var x = this.set(D, 1).add(y, Y).set(M, n - y * 12);
      return x.set(D, Math.min(x.daysInMonth(), d));
    }

    if (['y', Y].indexOf(unit) > -1) {
      return instanceFactory(Y, this.$jy);
    }

    if (['d', D].indexOf(unit) > -1) {
      var date = new Date(this.$d);
      date.setDate(date.getDate() + number);
      return wrapper(date, this);
    }

    if (['w', W].indexOf(unit) > -1) {
      var _date = new Date(this.$d);

      _date.setDate(_date.getDate() + number * 7);

      return wrapper(_date, this);
    }

    return oldAdd.bind(this)(number, units);
  };

  proto.format = function (formatStr, localeObject) {
    var _this4 = this;

    if (!$isJalali(this)) {
      return oldFormat.bind(this)(formatStr, localeObject);
    }

    var str = formatStr || FORMAT_DEFAULT;
    var locale = localeObject || this.$locale();
    var jmonths = locale.jmonths;
    return str.replace(REGEX_FORMAT, function (match) {
      if (match.indexOf('[') > -1) return match.replace(/\[|\]/g, '');

      switch (match) {
        case 'YY':
          return String(_this4.$jy).slice(-2);

        case 'YYYY':
          return String(_this4.$jy);

        case 'M':
          return String(_this4.$jM + 1);

        case 'MM':
          return $padStart(_this4.$jM + 1, 2, '0');

        case 'MMM':
          return jmonths[_this4.$jM].slice(0, 3);

        case 'MMMM':
          return jmonths[_this4.$jM];

        case 'D':
          return String(_this4.$jD);

        case 'DD':
          return $padStart(_this4.$jD, 2, '0');

        default:
          return oldFormat.bind(_this4)(match, localeObject);
      }
    });
  };

  proto.diff = function (input, units, _float) {
    if (!$isJalali(this)) {
      return oldDiff.bind(this)(input, units, _float);
    }

    var unit = $prettyUnit(units);
    var that = dayjs(input);
    var result = $monthDiff(this, that);

    switch (unit) {
      case Y:
        result /= 12;
        break;

      case M:
        break;

      default:
        // milliseconds
        return oldDiff.bind(this)(input, units, _float);
    }

    return _float ? result : $absFloor(result);
  };

  proto.$g = function (input, get, set) {
    if ($isUndefined(input)) return this[get];
    return this.set(set, input);
  };

  proto.year = function (input) {
    if (!$isJalali(this)) {
      return oldYear.bind(this)(input);
    }

    return this.$g(input, '$jy', Y);
  };

  proto.month = function (input) {
    if (!$isJalali(this)) {
      return oldMonth.bind(this)(input);
    }

    return this.$g(input, '$jM', M);
  };

  proto.date = function (input) {
    if (!$isJalali(this)) {
      return oldDate.bind(this)(input);
    }

    return this.$g(input, '$jD', D);
  };

  proto.daysInMonth = function () {
    if (!$isJalali(this)) {
      return oldDaysInMonth.bind(this)();
    }

    return this.endOf(M).$jD;
  };
  /**
   * toArray function moved to official plugin
   * Check function existence before override
   */


  if (oldToArray) {
    proto.toArray = function () {
      if (!$isJalali(this)) {
        return oldToArray.bind(this)();
      }

      return [this.$jy, this.$jM, this.$jD, this.$H, this.$m, this.$s, this.$ms];
    };
  }

  proto.clone = function () {
    return wrapper(this.toDate(), this);
  };
});

baseDayjs.extend(plugin);

const daysOfWeekFa = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
];
const monthsFa = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
];
const daysOfWeekEn = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var isToday$1 = {exports: {}};

(function (module, exports) {
	!function(e,o){module.exports=o();}(commonjsGlobal,(function(){return function(e,o,t){o.prototype.isToday=function(){var e="YYYY-MM-DD",o=t();return this.format(e)===o.format(e)};}})); 
} (isToday$1));

var isTodayExports = isToday$1.exports;
var isToday = /*@__PURE__*/getDefaultExportFromCjs(isTodayExports);

baseDayjs.extend(isToday);
const getDate = (date, calendar) => {
    if (calendar === "gregorian") {
        return baseDayjs(date).calendar("gregory");
    }
    else {
        return baseDayjs(date).calendar("jalali");
    }
};
const Calendar = ({ dir = "ltr", CalendarType = "gregorian", firstDayOfWeek = 6, onChange, renderDay, classNames, components, }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const current = getDate(currentDate, CalendarType);
    const daysInMonth = current.daysInMonth();
    const firstDayOfMonth = getDate(current.startOf("month").toDate(), CalendarType).day();
    const offset = (firstDayOfMonth - (firstDayOfWeek ?? 0) + 7) % 7;
    const getDaysOfWeek = (calendar, firstDayOfWeek) => {
        const days = calendar === "jalali" ? daysOfWeekFa : daysOfWeekEn;
        const index = (firstDayOfWeek + (1 % 7) + 7) % 7;
        return [...days.slice(index), ...days.slice(0, index)];
    };
    const prevMonth = () => {
        const newDate = current.subtract(1, "month").toDate();
        setCurrentDate(newDate);
    };
    const nextMonth = () => {
        const newDate = current.add(1, "month").toDate();
        setCurrentDate(newDate);
    };
    const prevMonthDate = current.subtract(1, "month");
    const daysInPrevMonth = prevMonthDate.daysInMonth();
    const prevMonthDays = [...Array(offset).keys()].map((i) => daysInPrevMonth - offset + i + 1);
    const nextOffset = 6 - ((offset + daysInMonth - 1) % 7);
    const nextMonthDays = [...Array(nextOffset).keys()].map((i) => i + 1);
    const handleSelectDate = (date) => {
        if (onChange)
            onChange(date);
    };
    return (jsx("div", { className: `calendar-app ${classNames?.root ?? ""}`, dir: dir, children: jsxs("div", { className: `calendar ${classNames?.header ?? ""}`, children: [jsxs("div", { className: `navigate-date ${classNames?.nav ?? ""}`, children: [jsxs("h2", { className: `month ${classNames?.month ?? ""}`, children: [CalendarType === "gregorian"
                                    ? monthsEn[current.month()]
                                    : monthsFa[current.month()], " ", "\u060C"] }), jsx("h2", { className: `year ${classNames?.year ?? ""}`, children: CalendarType === "gregorian" ? current.year() : current.year() }), jsxs("div", { className: "buttons", children: [components?.PrevButton ? (components.PrevButton({ onClick: prevMonth, dir })) : (jsx("button", { onClick: prevMonth, children: dir === "ltr" ? jsx(ChevronLeft, {}) : jsx(ChevronRight, {}) })), components?.NextButton ? (components.NextButton({ onClick: nextMonth, dir })) : (jsx("button", { onClick: nextMonth, children: dir === "ltr" ? jsx(ChevronRight, {}) : jsx(ChevronLeft, {}) }))] })] }), jsx("div", { className: `weekdays ${classNames?.weekdays ?? ""}`, children: getDaysOfWeek(CalendarType, firstDayOfWeek).map((day) => (jsx("span", { className: classNames?.weekday ?? "", children: day }, day))) }), jsxs("div", { className: `days ${classNames?.days ?? ""}`, children: [prevMonthDays.map((day, i) => {
                            const showMonth = i === 0;
                            const prevDayDate = prevMonthDate
                                .date(daysInPrevMonth - offset + i + 1)
                                .toDate();
                            if (renderDay) {
                                return renderDay(day + 1, prevDayDate, false, showMonth, false, () => handleSelectDate(prevDayDate));
                            }
                            return (jsx("span", { className: `defaultDays ${classNames?.lastMonth ?? "disabled"}`, onClick: () => handleSelectDate(prevDayDate), children: i === 0
                                    ? `${day} ${CalendarType === "jalali"
                                        ? monthsFa[prevMonthDate.month()]
                                        : monthsEn[prevMonthDate.month()]}`
                                    : day }, `prev-${day}`));
                        }), [...Array(daysInMonth).keys()].map((day, i) => {
                            const showMonth = i === 0;
                            const dayDate = current.date(day + 1).toDate();
                            if (renderDay) {
                                return renderDay(day + 1, dayDate, true, showMonth, baseDayjs(dayDate).isToday(), () => handleSelectDate(dayDate));
                            }
                            return (jsx("span", { className: day + 1 === current.date()
                                    ? `${classNames?.currentDay ?? "current-day"} defaultDays`
                                    : `${classNames?.day ?? "defaultDays"}`, onClick: () => handleSelectDate(dayDate), children: i === 0 ? (jsx("span", { children: `${day + 1} ${CalendarType === "jalali"
                                        ? monthsFa[current.month()]
                                        : monthsEn[current.month()]}` })) : (day + 1) }, day));
                        }), nextMonthDays.map((day, i) => {
                            const showMonth = i === 0;
                            const nextDayDate = current.add(1, "month").date(day).toDate();
                            if (renderDay) {
                                return renderDay(day + 1, nextDayDate, false, showMonth, false, () => handleSelectDate(nextDayDate));
                            }
                            return (jsx("span", { className: `defaultDays ${classNames?.nextMonth ?? "disabled"}`, onClick: () => handleSelectDate(nextDayDate), children: i === 0
                                    ? `${day} ${CalendarType === "jalali"
                                        ? monthsFa[current.add(1, "month").month()]
                                        : monthsEn[current.add(1, "month").month()]}`
                                    : day }, `next-${day}`));
                        })] })] }) }));
};

export { Calendar };
//# sourceMappingURL=index.js.map
