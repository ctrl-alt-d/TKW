// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Q = [// makki defenses
{
  "level": 0,
  "tecnica": "Are Makki",
  "video": "",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": 0,
  "tecnica": "Montong makki",
  "video": "zWenAK-MXos",
  "alt": "",
  "picture": "montong-makki"
}, {
  "level": 0,
  "tecnica": "Montong an makki",
  "video": "",
  "alt": "",
  "picture": "montong-an-makki"
}, {
  "level": 0,
  "tecnica": "Olgul makki",
  "video": "Ns0L-K-8EpU",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "Montong bakat makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "sonnal montong maki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 1,
  "tecnica": "jansonnal montong bakat maki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "nulo maki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "olgul bakat maki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "gechio are maki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "batagson monton an makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 1,
  "tecnica": "sonnal are makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "goduro batagson montong makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "gehio montong makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "okgoro are makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "jansonnal montong yop makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "goduro montong makki",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "goduro are makki",
  "video": "",
  "alt": "",
  "picture": ""
}, // gong kiok, atacs
{
  "level": 0,
  "tecnica": "Mongtong bande jirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "Mongtong baro jirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "ogul bande jirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "Dubong montong jirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "sonnal mok chigui",
  "video": "",
  "alt": "sonnal an chigui",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "pionson kut seuo chirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "dung chumok ape chigui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "me chumok ape chigui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "palkup dollio chigui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "du checho jirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "dung chumok bakat chigui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "yop jirugui",
  "video": "",
  "alt": "",
  "picture": ""
}, // soguis. posiciones
{
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, // movimientos pum (especiales)
{
  "level": 0,
  "tecnica": "Kibon chumbi seogi",
  "video": "is_z4kJU6nA",
  "alt": "Kibon chumbi seogi",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "chebipum mok chigui",
  "video": "YQvbWkYt5II",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "montong piochok palkup chigi",
  "video": "gwaUWWeC1AM",
  "alt": "PALKUT MONTONG PIOCHOk CHIGUI",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "bituro jansonnal olgul backat makki",
  "video": "WejuWi4ALHs",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "bochumok chumbi",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "gawi makki",
  "video": "OGMiZj_VDRw",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "dangkiok ollyo murop chigui",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "oe santul makki",
  "video": "zjz1XceSfl0",
  "alt": "",
  "picture": ""
}, {
  "level": 2,
  "tecnica": "dangkiok tok jirugui",
  "video": "So60sYvI840",
  "alt": "",
  "picture": ""
}, // Bal kisul 
{
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}, {
  "level": 0,
  "tecnica": "",
  "video": "",
  "alt": "",
  "picture": ""
}];
var _default = Q;
exports.default = _default;
},{}],"../node_modules/vanilla-sharing/dist/vanilla-sharing.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fbFeed = fbFeed;
exports.getFbFeedUrl = getFbFeedUrl;
exports.fbShare = fbShare;
exports.getFbShareUrl = getFbShareUrl;
exports.fbButton = fbButton;
exports.getFbButtonUrl = getFbButtonUrl;
exports.messenger = messenger;
exports.tw = tw;
exports.getTwUrl = getTwUrl;
exports.reddit = reddit;
exports.pinterest = pinterest;
exports.tumblr = tumblr;
exports.gp = gp;
exports.vk = vk;
exports.getVkUrl = getVkUrl;
exports.ok = ok;
exports.getOkUrl = getOkUrl;
exports.mail = mail;
exports.email = email;
exports.linkedin = linkedin;
exports.whatsapp = whatsapp;
exports.getWhatsappUrl = getWhatsappUrl;
exports.viber = viber;
exports.getViberUrl = getViberUrl;
exports.telegram = telegram;
exports.getTelegramUrl = getTelegramUrl;
exports.line = line;
var WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0'; // eslint-disable-line import/prefer-default-export

function encodeParams(obj) {
  return Object.keys(obj).filter(function (k) {
    return typeof obj[k] !== 'undefined' && obj[k] !== '';
  }).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}

function getFbFeedUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url,
      redirectUri = options.redirectUri;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url
  });
  return 'https://www.facebook.com/dialog/feed?' + params;
}

function fbFeed() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getFbFeedUrl(options), '_blank', WIN_PARAMS);
}

function getFbShareUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url,
      hashtag = options.hashtag,
      redirectUri = options.redirectUri;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    href: url,
    hashtag: hashtag
  });
  return 'https://www.facebook.com/dialog/share?' + params;
}

function fbShare() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getFbShareUrl(options), '_blank', WIN_PARAMS);
}

function getFbButtonUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;

  if (!url) {
    throw new Error('url is not defined');
  }

  var params = encodeParams({
    kid_directed_site: '0',
    sdk: 'joey',
    u: url,
    display: 'popup',
    ref: 'plugin',
    src: 'share_button'
  });
  return 'https://www.facebook.com/sharer/sharer.php?' + params;
}

function fbButton() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getFbButtonUrl(options), '_blank', WIN_PARAMS);
}

function gp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;
  var params = encodeParams({
    url: url
  });
  return window.open('https://plus.google.com/share?' + params, '_blank', WIN_PARAMS);
}

function mail() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      description = options.description,
      image = options.image;
  var params = encodeParams({
    share_url: url,
    title: title,
    description: description,
    imageurl: image
  });
  return window.open('http://connect.mail.ru/share?' + params, '_blank', WIN_PARAMS);
}

function email() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      description = options.description,
      subject = options.subject;
  var params = encodeParams({
    subject: subject,
    body: (title || '') + '\r\n' + (description || '') + '\r\n' + (url || '')
  });
  return window.location.assign('mailto:?' + params);
}

function getOkUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      image = options.image;
  var params = encodeParams({
    url: url,
    title: title,
    imageUrl: image
  });
  return 'https://connect.ok.ru/offer?' + params;
}

function ok() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getOkUrl(options), '_blank', WIN_PARAMS);
}

function getTelegramUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;
  var params = encodeParams({
    url: url,
    text: title
  });
  return 'https://t.me/share/url?' + params;
}

function telegram() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getTelegramUrl(options), '_blank', WIN_PARAMS);
}

function getTwUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url,
      _options$hashtags = options.hashtags,
      hashtags = _options$hashtags === undefined ? [] : _options$hashtags;
  var params = encodeParams({
    text: title,
    url: url,
    hashtags: hashtags.join(',')
  });
  return 'https://twitter.com/intent/tweet?' + params;
}

function tw() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getTwUrl(options), '_blank', WIN_PARAMS);
}

function reddit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;
  var params = encodeParams({
    url: url,
    title: title
  });
  return window.open('https://www.reddit.com/submit?' + params, '_blank', WIN_PARAMS);
}

function pinterest() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var description = options.description,
      url = options.url,
      media = options.media;
  var params = encodeParams({
    url: url,
    description: description,
    media: media
  });
  return window.open('https://pinterest.com/pin/create/button/?' + params, '_blank', WIN_PARAMS);
}

function tumblr() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      caption = options.caption,
      _options$tags = options.tags,
      tags = _options$tags === undefined ? [] : _options$tags,
      _options$posttype = options.posttype,
      posttype = _options$posttype === undefined ? 'link' : _options$posttype;
  var params = encodeParams({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags.join(','),
    posttype: posttype
  });
  return window.open('https://www.tumblr.com/widgets/share/tool?' + params, '_blank', WIN_PARAMS);
}

function isMobileSafari() {
  return !!window.navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
}

function mobileShare(link) {
  return isMobileSafari() ? window.open(link) : window.location.assign(link);
}

function getViberUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;

  if (!url && !title) {
    throw new Error('url and title not specified');
  }

  var params = encodeParams({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' ')
  });
  return 'viber://forward?' + params;
}

function viber() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mobileShare(getViberUrl(options));
}

var VK_MAX_LENGTH = 80;

function getVkUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      image = options.image,
      isVkParse = options.isVkParse;
  var description = options.description,
      title = options.title;

  if (description && description.length > VK_MAX_LENGTH) {
    description = description.substr(0, VK_MAX_LENGTH) + '...';
  }

  if (title && title.length > VK_MAX_LENGTH) {
    title = title.substr(0, VK_MAX_LENGTH) + '...';
  }

  var params = void 0;

  if (isVkParse) {
    params = encodeParams({
      url: url
    });
  } else {
    params = encodeParams({
      url: url,
      title: title,
      description: description,
      image: image,
      noparse: true
    });
  }

  return 'https://vk.com/share.php?' + params;
}

function vk() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getVkUrl(options), '_blank', WIN_PARAMS);
}

function getWhatsappUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var phone = options.phone,
      title = options.title,
      url = options.url;
  var params = encodeParams({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' '),
    phone: phone
  });
  return 'https://api.whatsapp.com/send?' + params;
}

function whatsapp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return window.open(getWhatsappUrl(options), '_blank', WIN_PARAMS);
}

function linkedin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url,
      description = options.description;
  var params = encodeParams({
    title: title,
    summary: description,
    url: url
  });
  return window.open('https://www.linkedin.com/shareArticle?mini=true&' + params, '_blank', WIN_PARAMS);
}

function messenger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url;

  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = encodeParams({
    app_id: fbAppId,
    link: url
  });
  return window.location.assign('fb-messenger://share?' + params);
}

function line() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;

  if (!url) {
    throw new Error('url is not defined');
  }

  var params = encodeURIComponent('' + url);

  if (title) {
    params = '' + encodeURIComponent(title + ' ') + params;
  }

  return window.open('https://line.me/R/msg/text/?' + params, '_blank', WIN_PARAMS);
}
},{}],"assets/are-makki.png":[function(require,module,exports) {
module.exports = "/TKW/are-makki.c1e94bc1.png";
},{}],"assets/montong-an-makki.png":[function(require,module,exports) {
module.exports = "/TKW/montong-an-makki.4cb6432c.png";
},{}],"assets/montong-makki.png":[function(require,module,exports) {
module.exports = "/TKW/montong-makki.29057413.png";
},{}],"assets/*.png":[function(require,module,exports) {
module.exports = {
  "are-makki": require("./are-makki.png"),
  "montong-an-makki": require("./montong-an-makki.png"),
  "montong-makki": require("./montong-makki.png")
};
},{"./are-makki.png":"assets/are-makki.png","./montong-an-makki.png":"assets/montong-an-makki.png","./montong-makki.png":"assets/montong-makki.png"}],"main.js":[function(require,module,exports) {
"use strict";

var _questions = _interopRequireDefault(require("./questions"));

var _vanillaSharing = require("vanilla-sharing");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = require('./assets/*.png');

var alltecniques = [];
var currentWord = 0;
var currentAnswer = "";
var currentItem = null;
var currentOptions = [];
var score = 0;
var level = 0;
var MyQ = [];
var levelsNames = ["Noob", "Middle", "Pro"];
var pictureovervideo = true;

function initialize() {
  var _loop = function _loop(i) {
    var option = document.getElementById("a" + i);

    option.onclick = function () {
      return answerpressed(i);
    };
  };

  //options events
  for (var i = 0; i < 5; i++) {
    _loop(i);
  } //test event


  var test = document.getElementById("test");

  test.onclick = function () {
    return testpressed();
  }; //


  var okbbton = document.getElementById("ok-button");

  okbbton.onclick = function () {
    return reviewpressed();
  };

  var kobbton = document.getElementById("ko-button");

  kobbton.onclick = function () {
    return reviewpressed();
  }; //levels


  var _loop2 = function _loop2(i) {
    var domlevel = document.getElementById("level-" + i);

    domlevel.onclick = function () {
      return setlevel(i);
    };
  };

  for (var i = 0; i < 3; i++) {
    _loop2(i);
  }

  $("#modal-level").modal("show");
}

function choseOptions() {
  //take 5
  currentOptions = [];

  do {
    var word = alltecniques[Math.floor(Math.random() * alltecniques.length)];

    if (!currentOptions.includes(word)) {
      currentOptions.push(word);
    }
  } while (currentOptions.length < 5); //sure word is in


  if (currentWord < currentItem.tecnica.split(" ").length) {
    var rightWord = currentItem.tecnica.split(" ")[currentWord];
    var rightOption = currentOptions.indexOf(rightWord);
    if (rightOption == -1) rightOption = Math.floor(Math.random() * currentOptions.length);
    currentOptions[rightOption] = rightWord;
  } //show


  for (var i = 0; i < 5; i++) {
    var option = document.getElementById("a" + i);
    option.textContent = currentOptions[i];
  }
}

function starttest() {
  //clear answer
  var myanswer = document.getElementById("my-answer");
  myanswer.textContent = ""; //get item

  currentItem = MyQ[Math.floor(Math.random() * MyQ.length)];
  var hasvideo = currentItem.video != "";
  var haspicture = currentItem.picture != "";
  var hasboth = hasvideo && haspicture;

  if (haspicture && !hasvideo || hasboth && pictureovervideo) {
    //picture
    [].forEach.call(document.getElementsByClassName("play-video"), function (x) {
      return x.style.display = "none";
    });
    document.getElementById("picture-div").style.display = "";
    var domPicture = document.getElementById("picture");
    domPicture.setAttribute("src", images[currentItem.picture]);
  } else {
    //video
    document.getElementById("picture-div").style.display = "none";
    [].forEach.call(document.getElementsByClassName("play-video"), function (x) {
      return x.style.display = "";
    });
    var videourl = "https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1&&loop=1".replace("XXXXX", currentItem.video);
    var domVideo = document.getElementById("video");
    domVideo.setAttribute("src", videourl);
  }

  choseOptions();
}

function answerpressed(i) {
  var myanswer = document.getElementById("my-answer");
  myanswer.textContent = (myanswer.textContent + " " + currentOptions[i]).trim();
  currentWord++;
  choseOptions();
}

function testpressed() {
  var myanswer = document.getElementById("my-answer");
  var correct = myanswer.textContent == currentItem.tecnica;
  score += correct ? 1 : -1;
  var domscore = document.getElementById("score");
  domscore.innerText = "TKW (" + levelsNames[level] + ") " + score;
  showreview(correct);
}

function showreview(correct) {
  var answerok = document.getElementById("answer-ok");
  answerok.textContent = currentItem.tecnica;
  var answerko = document.getElementById("answer-ko");
  answerko.textContent = currentItem.tecnica;
  $(correct ? "#modal-ok" : "#modal-ko").modal("toggle");
}

function reviewpressed() {
  currentWord = 0;
  starttest();
}

function setlevel(l) {
  level = l;
  MyQ = _questions.default.filter(function (x) {
    return x.level <= level && x.video != "";
  });
  console.log('MyQ :', MyQ); //tots els noms a majúscules amb un sol espai

  MyQ.forEach(function (x) {
    return x.tecnica = x.tecnica.toUpperCase().split(" ").join(" ");
  }); //getletalltecniques

  alltecniques = [].concat.apply([], MyQ.map(function (x) {
    return x.tecnica.split(" ");
  }));
  if (alltecniques.length < 5) alltecniques = alltecniques.concat([" - ", " :) ", " :( ", " kiap "]); //

  var domscore = document.getElementById("score");
  domscore.innerText = "TKW Test " + levelsNames[level] + " "; //

  pictureovervideo = document.getElementById("video-picture-picture").checked;
  $("#modal-level").modal("toggle");
  starttest();
}

initialize();

document.getElementById("share").onclick = function () {
  (0, _vanillaSharing.fbButton)({
    url: 'https://ctrl-alt-d.github.io/TKW/'
  });
};
},{"./questions":"questions.js","vanilla-sharing":"../node_modules/vanilla-sharing/dist/vanilla-sharing.esm.js","./assets/*.png":"assets/*.png"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33785" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/TKW/main.1f19ae8e.map