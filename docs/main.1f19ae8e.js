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
})({"../node_modules/vanilla-sharing/dist/vanilla-sharing.esm.js":[function(require,module,exports) {
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
},{}],"alltecniques.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCurrentWord = resetCurrentWord;
exports.increasseCurrentWord = increasseCurrentWord;
exports.getItemClass = getItemClass;
exports.levelNameClass = levelNameClass;
exports.massageQuestionsClass = massageQuestionsClass;
exports.checkCorrectClass = checkCorrectClass;
exports.choseOptionsClass = choseOptionsClass;
exports.levelsNames = exports.level = exports.score = exports.currentOptions = exports.currentItem = exports.currentWord = void 0;
var alltecniques = [];
var previousTechnique = "";
var MyQ = [];
var currentWord = 0;
exports.currentWord = currentWord;
var currentItem = null;
exports.currentItem = currentItem;
var currentOptions = [];
exports.currentOptions = currentOptions;
var score = 0;
exports.score = score;
var level = 0;
exports.level = level;
var levelsNames = ["Groc", "Taronja", "Verd", "Blau", "Marró", "Negre"];
exports.levelsNames = levelsNames;

function resetCurrentWord() {
  exports.currentWord = currentWord = 0;
}

function increasseCurrentWord() {
  exports.currentWord = currentWord = currentWord + 1;
}

function getItemClass() {
  //get item
  do {
    exports.currentItem = currentItem = MyQ[Math.floor(Math.random() * MyQ.length)];
  } while (currentItem.tecnica == previousTechnique);

  previousTechnique = currentItem.tecnica;
}

function levelNameClass() {
  var levelnumber = {
    "groc": 0,
    "taronja": 1,
    "verd": 2,
    "blau": 3,
    "marró": 4,
    "negre": 5
  };
  return levelsNames[level];
}

function massageQuestionsClass(l, q) {
  exports.level = level = l;
  var levelnumber = {
    "groc": 0,
    "taronja": 1,
    "verd": 2,
    "blau": 3,
    "marró": 4,
    "negre": 5
  };
  MyQ = q.filter(function (x) {
    return levelnumber[x.level] <= level;
  }); //tots els noms a majúscules amb un sol espai

  MyQ.forEach(function (x) {
    return x.tecnica = x.tecnica.toUpperCase().split(" ").filter(function (x) {
      return x != "";
    }).join(" ");
  });
  MyQ.forEach(function (x) {
    return x.alt = x.alt.toUpperCase().split(" ").filter(function (x) {
      return x != "";
    }).join(" ");
  }); //getletalltecniques

  alltecniques = [].concat.apply([], MyQ.map(function (x) {
    return x.tecnica.split(" ");
  })).filter(function (x) {
    return x != "";
  });
  if (alltecniques.length < 5) alltecniques = alltecniques.concat([" - ", " :) ", " :( ", " kiap "]);
}

function checkCorrectClass(answer) {
  var correct = answer == currentItem.tecnica || currentItem.alt != "" && answer == currentItem.alt;
  exports.score = score = score + (correct ? 1 : -1);
  exports.score = score = score < 0 ? 0 : score;
  return correct;
}

function choseOptionsClass() {
  //
  var currentItemWords = (currentItem.tecnica + " " + currentItem.alt).split(" ").filter(function (x) {
    return x != "";
  });
  var alltecniquesWithOutCurrentItemWords = alltecniques.filter(function (x) {
    return !currentItemWords.includes(x);
  }); //take 5

  exports.currentOptions = currentOptions = [];

  do {
    var word = alltecniquesWithOutCurrentItemWords[Math.floor(Math.random() * alltecniquesWithOutCurrentItemWords.length)];

    if (!currentOptions.includes(word)) {
      currentOptions.push(word);
    }
  } while (currentOptions.length < 5); //insert current word


  var rightOptionTecnica = -1;
  var rightWordTec = "";

  if (currentWord < currentItem.tecnica.split(" ").filter(function (x) {
    return x != "";
  }).length) {
    rightWordTec = currentItem.tecnica.split(" ").filter(function (x) {
      return x != "";
    })[currentWord];
    rightOptionTecnica = Math.floor(Math.random() * currentOptions.length);
    currentOptions[rightOptionTecnica] = rightWordTec;
  } //insert alt word


  if (currentWord < currentItem.alt.split(" ").filter(function (x) {
    return x != "";
  }).length) {
    var rightWordAlt = currentItem.alt.split(" ").filter(function (x) {
      return x != "";
    })[currentWord];

    if (rightWordAlt != rightWordTec) {
      var rightOptionAlt = -1;

      do {
        rightOptionAlt = Math.floor(Math.random() * currentOptions.length);
      } while (rightOptionAlt == rightOptionTecnica);

      currentOptions[rightOptionAlt] = rightWordAlt;
    }
  }

  return currentOptions;
}
},{}],"questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Q = void 0;
var Q = [{
  "level": "groc",
  "negre": "si",
  "tecnica": "are maki",
  "video": "y3nUBMaMIgw",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "si",
  "tecnica": "montong maki",
  "video": "5dpFzb5eges",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "si",
  "tecnica": "Montong an maki",
  "video": "5fkuhw3ykeE",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "si",
  "tecnica": "Olgul maki",
  "video": "eLmvdSATImQ",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "Montong bakat maki",
  "video": "FJHvYN50-K0",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "sonnal montong maki",
  "video": "eb52M8MPbIM",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "jansonnal montong bakat maki",
  "video": "vYhSC67r93o",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "nulo maki",
  "video": "hWcDlF0r8DM",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "olgul bakat maki",
  "video": "IuvzhF7rfKk",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "gechio are maki",
  "video": "pmtJV1w_Q0",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "batagson montong an maki",
  "video": "dYO7moC38vI",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "sonnal are maki",
  "video": "V6WI_u9WPJA",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "goduro batagson montong an maki",
  "video": "uHZ6vmvikAc",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "gehio montong maki",
  "video": "f0wssE3FkYQ",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "okgoro are maki",
  "video": "mVd6rud9Wjc",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "jansonnal montong yop maki",
  "video": "Lcs_rJEHvAw",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "goduro montong maki",
  "video": "jDuPHXcKiXs",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "goduro are maki",
  "video": "YjJmEHA62Ck",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "si",
  "tecnica": "Montong bande jirugui",
  "video": "ArcCBvkyLA4",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "si",
  "tecnica": "Montong baro jirugui",
  "video": "zwvB31_dC_k",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "si",
  "tecnica": "olgul bande jirugui",
  "video": "Jpst_GappfM",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "Dubong montong jirugui",
  "video": "FznywtUJlJ8",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "jansonnal mok chigui",
  "video": "GARSXnyJV0U",
  "alt": "jansonnal an chigui",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "pionson kut seuo chirugui",
  "video": "Mu6_Lui_ip4",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "dung chumok ape chigui",
  "video": "l4KM6HRNB48",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "palkup dollyo chigui",
  "video": "kenoYzX61zo",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "du chumok checho jirugui",
  "video": "aI-HSZCWGyc",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "dung chumok bakat chigui",
  "video": "MW-Pfo0CDMI",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "yop jirugui",
  "video": "gbsfs9E3NI0",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "chebipum mok chigui",
  "video": "_vaC0DUpohg",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "montong piochok palkup chigui",
  "video": "WUPBPPUYWT0",
  "alt": "palkup montong piochok chigui",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "bituro jansonnal olgul bakat maki",
  "video": "2ceqGSwbm8M",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marro",
  "negre": "si",
  "tecnica": "gawi maki",
  "video": "zjiPglLsdOY",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "dangkiok ollyo murup chigui",
  "video": "4igah7sddqQ",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "oe santul maki",
  "video": "c0sDiHSDg0w",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "dangkiok tok jirugui",
  "video": "ZbOd9D6RdYw",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "si",
  "tecnica": "ap chagui",
  "video": "G8KCx2g1nfs",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "si",
  "tecnica": "dollyo chagui",
  "video": "mY-lCnt12Ck",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "yop chagui",
  "video": "vHFKx2jRcCU",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "si",
  "tecnica": "tuit chagui",
  "video": "Jdgnmr9enu8",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "nako chagui",
  "video": "HaSC6PZzw0U",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "furio chagui",
  "video": "3QRqe15zIKE",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "verd",
  "negre": "si",
  "tecnica": "neryo chagui",
  "video": "524tqlcNlJk",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "mom dollyo yop chagui",
  "video": "zXnz75Wh308",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "mom dollyo tuit chagui",
  "video": "XFsQVojlQ58",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "mom dollyo nako chagui",
  "video": "z_9Cv3DXcJU",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "mom dollyo furio chagui",
  "video": "m0eF69SfcPY",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "no",
  "tecnica": "bandal chagui",
  "video": "YExkwhssI9k",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "groc",
  "negre": "no",
  "tecnica": "tuio bandal chagui",
  "video": "DxDCg_6v9rE",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "no",
  "tecnica": "tuio ap chagui",
  "video": "Z9rnJ15KKCU",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "si",
  "tecnica": "bakat chagui",
  "video": "5hEZJ_Y22e0",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "no",
  "tecnica": "Tuio dollyo chagui",
  "video": "DmnCfnC7qeM",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "no",
  "tecnica": "Tuio tuit chagui",
  "video": "C5rBfYD15p4",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "no",
  "tecnica": "an chagui",
  "video": "iO-Py_LDQYM",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "si",
  "tecnica": "olgul baro jirugui",
  "video": "ea7GPUMsm6w",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "taronja",
  "negre": "no",
  "tecnica": "miro chagui",
  "video": "SpIJto5c7RM",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "Batangson montong maki ",
  "video": "BY6J0w04cXQ",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "Me chumok neryo yop chigui",
  "video": "nEe4xzKwHQo",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "blau",
  "negre": "si",
  "tecnica": "Tuio mom dollyo yop chagui",
  "video": "IQS3q3AhbWE",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "marró",
  "negre": "si",
  "tecnica": "Piochok chagui",
  "video": "e6UR_s0NWzI",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "Tuio mom dollyo furio chagui ",
  "video": "7DtMO2tEMGs",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "Dubandanlsang ap chagui",
  "video": "wK_1zLUnwQY",
  "alt": "",
  "picture": "are-makki"
}, {
  "level": "negre",
  "negre": "si",
  "tecnica": "Tuio mom dollyo nako chagui",
  "video": "a1C56KYeL2E",
  "alt": "",
  "picture": "are-makki"
}];
exports.Q = Q;
var _default = Q;
exports.default = _default;
},{}],"assets/are-makki.png":[function(require,module,exports) {
module.exports = "/TKW/are-makki.c1e94bc1.png";
},{}],"assets/gm.png":[function(require,module,exports) {
module.exports = "/TKW/gm.6ef19f89.png";
},{}],"assets/montong-an-makki.png":[function(require,module,exports) {
module.exports = "/TKW/montong-an-makki.4cb6432c.png";
},{}],"assets/montong-makki.png":[function(require,module,exports) {
module.exports = "/TKW/montong-makki.29057413.png";
},{}],"assets/*.png":[function(require,module,exports) {
module.exports = {
  "are-makki": require("./are-makki.png"),
  "gm": require("./gm.png"),
  "montong-an-makki": require("./montong-an-makki.png"),
  "montong-makki": require("./montong-makki.png")
};
},{"./are-makki.png":"assets/are-makki.png","./gm.png":"assets/gm.png","./montong-an-makki.png":"assets/montong-an-makki.png","./montong-makki.png":"assets/montong-makki.png"}],"main.js":[function(require,module,exports) {
"use strict";

var _vanillaSharing = require("vanilla-sharing");

var t = _interopRequireWildcard(require("./alltecniques"));

var _questions = _interopRequireDefault(require("./questions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var images = require('./assets/*.png');

var htmlVideo = "\n<div class=\"embed-responsive embed-responsive-16by9 play-video\">\n<iframe class=\"play-video\" id=\"video\" width=\"420\" height=\"315\"\n        src=\"https://www.youtube.com/embed/XXXXX?autoplay=1&mute=1&playlist=XXXXX&loop=1\" >\n</iframe>\n</div>\n<div ><h6 style=\"color: gray; font-size: 50%;\" id=\"video-codi\">XXXXX</h6></div>\n";
var htmlLoading = "\n<div id=\"picture-div\" class=\"col-12 col-lg-6\">\n<div>Loading</div>\n<img id=\"picture\" class=\"img-fluid\" />\n</div>\n";

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

  for (var i = 0; i < 6; i++) {
    _loop2(i);
  } //


  document.getElementById("share").onclick = function () {
    (0, _vanillaSharing.fbButton)({
      url: 'https://ctrl-alt-d.github.io/TKW/'
    });
  }; //


  $("#modal-level").modal("show");
}

function choseOptions() {
  t.choseOptionsClass(); //show

  for (var i = 0; i < 5; i++) {
    var option = document.getElementById("a" + i);
    option.textContent = t.currentOptions[i];
  }
}

function starttest() {
  //clear answer
  var myanswer = document.getElementById("my-answer");
  myanswer.textContent = ""; //get item

  t.getItemClass(); //$("#video-div").fadeIn( "slow" );

  var domVideo = document.getElementById("video-div");
  domVideo.innerHTML = htmlLoading;
  var newHtmlVideo = htmlVideo.replace("XXXXX", t.currentItem.video).replace("XXXXX", t.currentItem.video).replace("XXXXX", t.currentItem.video);
  domVideo.innerHTML = newHtmlVideo;
  choseOptions();
}

function answerpressed(i) {
  var myanswer = document.getElementById("my-answer");
  myanswer.textContent = (myanswer.textContent + " " + t.currentOptions[i]).trim();
  t.increasseCurrentWord();
  choseOptions();
}

function testpressed() {
  //$("#video-div").fadeOut( "slow" );
  var myanswer = document.getElementById("my-answer");
  var correct = t.checkCorrectClass(myanswer.textContent);
  var domscore = document.getElementById("score");
  domscore.innerText = "TKD (" + t.levelsNames[t.level] + ") " + t.score;
  showreview(correct);
}

function showreview(correct) {
  var answerok = document.getElementById("answer-ok");
  answerok.textContent = t.currentItem.tecnica;
  var answerokalt = document.getElementById("answer-ok-alt");
  answerokalt.textContent = t.currentItem.alt;
  var answerko = document.getElementById("answer-ko");
  answerko.textContent = t.currentItem.tecnica;
  var answerkoalt = document.getElementById("answer-ko-alt");
  answerkoalt.textContent = t.currentItem.alt;
  $(correct ? "#modal-ok" : "#modal-ko").modal("toggle");
}

function reviewpressed() {
  t.resetCurrentWord();
  starttest();
}

function setlevel(l) {
  t.massageQuestionsClass(l, _questions.default); //

  var domscore = document.getElementById("score");
  domscore.innerText = "TKD Objectiu: " + t.levelNameClass() + " ";
  $("#modal-level").modal("toggle");
  starttest();
}

initialize();
},{"vanilla-sharing":"../node_modules/vanilla-sharing/dist/vanilla-sharing.esm.js","./alltecniques":"alltecniques.js","./questions":"questions.js","./assets/*.png":"assets/*.png"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45825" + '/');

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