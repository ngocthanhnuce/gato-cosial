module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/notifications.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/*! exports provided: NoProfilePosts, NoFollowData, NoMessages, NoPosts, NoProfile, NoNotifications, NoPostFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProfilePosts", function() { return NoProfilePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFollowData", function() { return NoFollowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMessages", function() { return NoMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPosts", function() { return NoPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProfile", function() { return NoProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoNotifications", function() { return NoNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPostFound", function() { return NoPostFound; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\Gato-cocial\\components\\Layout\\Nodata.js";

const NoProfilePosts = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    info: true,
    icon: "meh",
    header: "Sorry",
    content: "User has not posted anything yet!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: "long arrow alternate left",
    content: "Go Back",
    as: "a",
    href: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [followersComponent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    icon: "user outline",
    info: true,
    content: `User does not have followers`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    icon: "user outline",
    info: true,
    content: `User does not follow any users`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined)]
}, void 0, true);
const NoMessages = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);
const NoProfile = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);
const NoNotifications = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  content: "No Notifications",
  icon: "smile",
  info: true
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 3
}, undefined);
const NoPostFound = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Notifications/CommentNotification.js":
/*!*********************************************************!*\
  !*** ./components/Notifications/CommentNotification.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\Admin\\Documents\\Gato-cocial\\components\\Notifications\\CommentNotification.js";




function CommentNotification({
  notification
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Event, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Content, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Summary, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), " ", "commented on your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Date, {
              children: Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__["default"])(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), notification.post.picUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Extra, {
          images: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: notification.post.picUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Extra, {
          text: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: notification.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CommentNotification);

/***/ }),

/***/ "./components/Notifications/FollowerNotification.js":
/*!**********************************************************!*\
  !*** ./components/Notifications/FollowerNotification.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\Admin\\Documents\\Gato-cocial\\components\\Notifications\\FollowerNotification.js";





function FollowerNotification({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Event, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Content, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Summary, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), " ", "started following you.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Date, {
              children: Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__["default"])(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            right: "5px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            size: "small",
            compact: true,
            icon: isFollowing ? "check circle" : "add user",
            color: isFollowing ? "instagram" : "twitter",
            disabled: disabled,
            onClick: async () => {
              setDisabled(true);
              isFollowing ? await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["unfollowUser"])(notification.user._id, setUserFollowStats) : await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["followUser"])(notification.user._id, setUserFollowStats);
              setDisabled(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (FollowerNotification);

/***/ }),

/***/ "./components/Notifications/LikeNotification.js":
/*!******************************************************!*\
  !*** ./components/Notifications/LikeNotification.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\Admin\\Documents\\Gato-cocial\\components\\Notifications\\LikeNotification.js";




function LikeNotification({
  notification
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Event, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Content, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Summary, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), " ", "liked your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 26
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Date, {
              children: Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__["default"])(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), notification.post.picUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Extra, {
          images: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: notification.post.picUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (LikeNotification);

/***/ }),

/***/ "./pages/notifications.js":
/*!********************************!*\
  !*** ./pages/notifications.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Notifications/LikeNotification */ "./components/Notifications/LikeNotification.js");
/* harmony import */ var _components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Notifications/CommentNotification */ "./components/Notifications/CommentNotification.js");
/* harmony import */ var _components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Notifications/FollowerNotification */ "./components/Notifications/FollowerNotification.js");


var _jsxFileName = "C:\\Users\\Admin\\Documents\\Gato-cocial\\pages\\notifications.js";











function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(userFollowStats);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const notificationRead = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__["default"]}/api/notifications`, {}, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("token")
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        marginTop: "1.5rem"
      },
      children: [(notifications === null || notifications === void 0 ? void 0 : notifications.length) > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        color: "teal",
        raised: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            maxHeight: "40rem",
            overflow: "auto",
            height: "40rem",
            position: "relative",
            width: "100%"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"], {
            size: "small",
            children: notifications === null || notifications === void 0 ? void 0 : notifications.map(notification => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [notification.type === "newLike" && notification.post !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_8__["default"], {
                notification: notification
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 23
              }, this), notification.type === "newComment" && notification.post !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_9__["default"], {
                notification: notification
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 23
              }, this), notification.type === "newFollower" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_10__["default"], {
                notification: notification,
                loggedUserFollowStats: loggedUserFollowStats,
                setUserFollowStats: setUserFollowStats
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 23
              }, this)]
            }, void 0, true))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__["NoNotifications"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = Object(nookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__["default"]}/api/notifications`, {
      headers: {
        Authorization: token
      }
    });
    return {
      notifications: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\Gato-cocial\\utils\\calculateTime.js";



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: ["Today ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 24 && diffInHours < 36) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: ["Yesterday ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 36) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "DD/MM/YYYY hh:mm A",
      children: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/*! exports provided: followUser, unfollowUser, profileUpdate, passwordUpdate, toggleMessagePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdate", function() { return profileUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdate", function() { return passwordUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMessagePopup", function() { return toggleMessagePopup; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__["default"]}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.reload();
  } catch (error) {
    setError(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTm9kYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Db21tZW50Tm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Gb2xsb3dlck5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvTGlrZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wcm9maWxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJOb1Byb2ZpbGVQb3N0cyIsIk5vRm9sbG93RGF0YSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsIk5vTWVzc2FnZXMiLCJOb1Bvc3RzIiwiTm9Qcm9maWxlIiwiTm9Ob3RpZmljYXRpb25zIiwiTm9Qb3N0Rm91bmQiLCJDb21tZW50Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJ1c2VybmFtZSIsIm5hbWUiLCJwb3N0IiwiX2lkIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJwaWNVcmwiLCJ0ZXh0IiwiRm9sbG93ZXJOb3RpZmljYXRpb24iLCJsb2dnZWRVc2VyRm9sbG93U3RhdHMiLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwidXNlU3RhdGUiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsImxlbmd0aCIsImZpbHRlciIsInBvc2l0aW9uIiwicmlnaHQiLCJ1bmZvbGxvd1VzZXIiLCJmb2xsb3dVc2VyIiwiTGlrZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwiZXJyb3JMb2FkaW5nIiwidXNlckZvbGxvd1N0YXRzIiwidXNlRWZmZWN0Iiwibm90aWZpY2F0aW9uUmVhZCIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsInR5cGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsInJlcyIsImRhdGEiLCJjcmVhdGVkQXQiLCJ0b2RheSIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsImNhdGNoRXJyb3JzIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwidXNlclRvRm9sbG93SWQiLCJwcmV2IiwiYWxlcnQiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0IiwicHJvZmlsZVVwZGF0ZSIsInByb2ZpbGUiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiUm91dGVyIiwicmVsb2FkIiwicGFzc3dvcmRVcGRhdGUiLCJzZXRTdWNjZXNzIiwidXNlclBhc3N3b3JkcyIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidG9nZ2xlTWVzc2FnZVBvcHVwIiwicG9wdXBTZXR0aW5nIiwic2V0UG9wdXBTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLG1CQUM1QjtBQUFBLDBCQUNFLHFFQUFDLHlEQUFEO0FBQVMsUUFBSSxNQUFiO0FBQWMsUUFB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OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL25vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL25vdGlmaWNhdGlvbnMuanNcIik7XG4iLCJpbXBvcnQgeyBNZXNzYWdlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiU29ycnlcIiBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCIgLz5cclxuICAgIDxCdXR0b24gaWNvbj1cImxvbmcgYXJyb3cgYWx0ZXJuYXRlIGxlZnRcIiBjb250ZW50PVwiR28gQmFja1wiIGFzPVwiYVwiIGhyZWY9XCIvXCIgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb0ZvbGxvd0RhdGEgPSAoeyBmb2xsb3dlcnNDb21wb25lbnQsIGZvbGxvd2luZ0NvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBoYXZlIGZvbGxvd2Vyc2B9IC8+XHJcbiAgICApfVxyXG5cclxuICAgIHtmb2xsb3dpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzYH0gLz5cclxuICAgICl9XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcclxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcclxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwibWVoXCJcclxuICAgIGhlYWRlcj1cIkhleSFcIlxyXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTm90aWZpY2F0aW9ucyA9ICgpID0+IChcclxuICA8TWVzc2FnZSBjb250ZW50PVwiTm8gTm90aWZpY2F0aW9uc1wiIGljb249XCJzbWlsZVwiIGluZm8gLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RGb3VuZCA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFBvc3QgRm91bmQuXCIgLz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBGZWVkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50Tm90aWZpY2F0aW9uKHsgbm90aWZpY2F0aW9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgY29tbWVudGVkIG9uIHlvdXIgPGEgaHJlZj17YC9wb3N0LyR7bm90aWZpY2F0aW9uLnBvc3QuX2lkfWB9PnBvc3QuPC9hPlxyXG4gICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUobm90aWZpY2F0aW9uLmRhdGUpfTwvRmVlZC5EYXRlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxyXG5cclxuICAgICAgICAgIHtub3RpZmljYXRpb24ucG9zdC5waWNVcmwgJiYgKFxyXG4gICAgICAgICAgICA8RmVlZC5FeHRyYSBpbWFnZXM+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb3N0LyR7bm90aWZpY2F0aW9uLnBvc3QuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e25vdGlmaWNhdGlvbi5wb3N0LnBpY1VybH0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxyXG4gICAgICAgICAgICA8c3Ryb25nPntub3RpZmljYXRpb24udGV4dH08L3N0cm9uZz5cclxuICAgICAgICAgIDwvRmVlZC5FeHRyYT5cclxuICAgICAgICA8L0ZlZWQuQ29udGVudD5cclxuICAgICAgPC9GZWVkLkV2ZW50PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudE5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZlZWQsIEJ1dHRvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIEZvbGxvd2VyTm90aWZpY2F0aW9uKHtcclxuICBub3RpZmljYXRpb24sXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxyXG4gIHNldFVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gbm90aWZpY2F0aW9uLnVzZXIuX2lkXHJcbiAgICApLmxlbmd0aCA+IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmVlZC5FdmVudD5cclxuICAgICAgICA8RmVlZC5MYWJlbCBpbWFnZT17bm90aWZpY2F0aW9uLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPEZlZWQuU3VtbWFyeT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8RmVlZC5Vc2VyIGFzPVwiYVwiIGhyZWY9e2AvJHtub3RpZmljYXRpb24udXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvRmVlZC5Vc2VyPntcIiBcIn1cclxuICAgICAgICAgICAgICBzdGFydGVkIGZvbGxvd2luZyB5b3UuXHJcbiAgICAgICAgICAgICAgPEZlZWQuRGF0ZT57Y2FsY3VsYXRlVGltZShub3RpZmljYXRpb24uZGF0ZSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVjayBjaXJjbGVcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgID8gYXdhaXQgdW5mb2xsb3dVc2VyKG5vdGlmaWNhdGlvbi51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICA6IGF3YWl0IGZvbGxvd1VzZXIobm90aWZpY2F0aW9uLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XHJcbiAgICAgIDwvRmVlZC5FdmVudD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VyTm90aWZpY2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZlZWQsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIExpa2VOb3RpZmljYXRpb24oeyBub3RpZmljYXRpb24gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmVlZC5FdmVudD5cclxuICAgICAgICA8RmVlZC5MYWJlbCBpbWFnZT17bm90aWZpY2F0aW9uLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPEZlZWQuU3VtbWFyeT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8RmVlZC5Vc2VyIGFzPVwiYVwiIGhyZWY9e2AvJHtub3RpZmljYXRpb24udXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvRmVlZC5Vc2VyPntcIiBcIn1cclxuICAgICAgICAgICAgICBsaWtlZCB5b3VyIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5wb3N0LjwvYT5cclxuICAgICAgICAgICAgICA8RmVlZC5EYXRlPntjYWxjdWxhdGVUaW1lKG5vdGlmaWNhdGlvbi5kYXRlKX08L0ZlZWQuRGF0ZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cclxuXHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLnBvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEZlZWQuRXh0cmEgaW1hZ2VzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZmljYXRpb24ucG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICA8L0ZlZWQuRXZlbnQ+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWtlTm90aWZpY2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWVkLCBTZWdtZW50LCBEaXZpZGVyLCBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgTm9Ob3RpZmljYXRpb25zIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgTGlrZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0xpa2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IENvbW1lbnROb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Db21tZW50Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBGb2xsb3dlck5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0ZvbGxvd2VyTm90aWZpY2F0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgbm90aWZpY2F0aW9ucywgZXJyb3JMb2FkaW5nLCB1c2VyLCB1c2VyRm9sbG93U3RhdHMgfSkge1xyXG4gIGNvbnN0IFtsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0c10gPSB1c2VTdGF0ZSh1c2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uUmVhZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL25vdGlmaWNhdGlvbnNgLFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0gfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG5vdGlmaWNhdGlvblJlYWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxLjVyZW1cIiB9fT5cclxuICAgICAgICB7bm90aWZpY2F0aW9ucz8ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwidGVhbFwiIHJhaXNlZD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiNDByZW1cIixcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmVlZCBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zPy5tYXAobm90aWZpY2F0aW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnR5cGUgPT09IFwibmV3TGlrZVwiICYmIG5vdGlmaWNhdGlvbi5wb3N0ICE9PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaWtlTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udHlwZSA9PT0gXCJuZXdDb21tZW50XCIgJiYgbm90aWZpY2F0aW9uLnBvc3QgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnROb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi50eXBlID09PSBcIm5ld0ZvbGxvd2VyXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbGxvd2VyTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0ZlZWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Tm9Ob3RpZmljYXRpb25zIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Ob3RpZmljYXRpb25zLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvbm90aWZpY2F0aW9uc2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBub3RpZmljYXRpb25zOiByZXMuZGF0YSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IGNyZWF0ZWRBdCA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcclxuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XHJcblxyXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAzNikge1xyXG4gICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTtcclxuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSAoZXJyb3IpID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvRm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvZm9sbG93LyR7dXNlclRvRm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBbLi4ucHJldi5mb2xsb3dpbmcsIHsgdXNlcjogdXNlclRvRm9sbG93SWQgfV1cclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb1VuZm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmZvbGxvdy8ke3VzZXJUb1VuZm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBwcmV2LmZvbGxvd2luZy5maWx0ZXIoZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyICE9PSB1c2VyVG9VbmZvbGxvd0lkKVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVXBkYXRlID0gYXN5bmMgKHByb2ZpbGUsIHNldExvYWRpbmcsIHNldEVycm9yLCBwcm9maWxlUGljVXJsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgYmlvLCBmYWNlYm9vaywgeW91dHViZSwgdHdpdHRlciwgaW5zdGFncmFtIH0gPSBwcm9maWxlO1xyXG5cclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC91cGRhdGVgLCB7XHJcbiAgICAgIGJpbyxcclxuICAgICAgZmFjZWJvb2ssXHJcbiAgICAgIHlvdXR1YmUsXHJcbiAgICAgIHR3aXR0ZXIsXHJcbiAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgcHJvZmlsZVBpY1VybFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBSb3V0ZXIucmVsb2FkKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHNldEVycm9yKGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRVcGRhdGUgPSBhc3luYyAoc2V0U3VjY2VzcywgdXNlclBhc3N3b3JkcykgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9ID0gdXNlclBhc3N3b3JkcztcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL3Bhc3N3b3JkYCwgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0pO1xyXG5cclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1lc3NhZ2VQb3B1cCA9IGFzeW5jIChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvbWVzc2FnZVBvcHVwYCk7XHJcblxyXG4gICAgc2V0UG9wdXBTZXR0aW5nKCFwb3B1cFNldHRpbmcpO1xyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=