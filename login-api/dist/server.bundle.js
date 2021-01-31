/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/LoginController.js":
/*!************************************!*\
  !*** ./src/api/LoginController.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/utils.js */ \"./src/common/utils.js\");\n\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async forget(ctx) {\n    console.log('LoginController.forget');\n  }\n\n  async login(ctx) {\n    console.log('LoginController.login'); // 接受用户的数据\n    // 返回token\n\n    const {\n      body\n    } = ctx.request;\n    let sid = body.sid;\n    let code = body.code; // 验证图片验证码的时效性和正确性\n\n    const checked = await (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_2__.checkCode)(sid, code);\n    console.log(checked + '--sid: ' + sid + '--code: ' + code);\n\n    if (checked) {\n      // 验证用户账户密码的正确\n      console.log('code is ok : ' + code); // moongoDB查库\n\n      if (true) {\n        // 用户名密码验证通过，返回token数据\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n          _id: 'brian',\n          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24\n        }, _config__WEBPACK_IMPORTED_MODULE_1__.default.JWT_SECRET); // sign(payload, privateKey, options)   payload是明文,记录一些用户信息\n        // 过期时间可以写在payload里面，也可以写在options里面 { expiresIn: '2d'} 两天过期 options内的写法 1h 1d\n\n        ctx.body = {\n          code: 200,\n          token\n        };\n      } else {}\n    } else {\n      // 图片验证码校验失败\n      ctx.body = {\n        code: 401,\n        msg: '图片验证码不正确，请检查！'\n      };\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvYXBpL0xvZ2luQ29udHJvbGxlci5qcz85NTA3Il0sIm5hbWVzIjpbIkxvZ2luQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiZm9yZ2V0IiwiY3R4IiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwiYm9keSIsInJlcXVlc3QiLCJzaWQiLCJjb2RlIiwiY2hlY2tlZCIsImNoZWNrQ29kZSIsInRva2VuIiwianNvbndlYnRva2VuIiwiX2lkIiwiZXhwIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImNvbmZpZyIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBTixDQUFzQjtBQUNsQkMsYUFBVyxHQUFFLENBQUU7O0FBQ2YsUUFBTUMsTUFBTixDQUFhQyxHQUFiLEVBQWlCO0FBQ2JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0g7O0FBRUQsUUFBTUMsS0FBTixDQUFhSCxHQUFiLEVBQWtCO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBRGMsQ0FFZDtBQUVBOztBQUNBLFVBQU07QUFBRUU7QUFBRixRQUFXSixHQUFHLENBQUNLLE9BQXJCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHRixJQUFJLENBQUNFLEdBQWY7QUFDQSxRQUFJQyxJQUFJLEdBQUdILElBQUksQ0FBQ0csSUFBaEIsQ0FQYyxDQVFkOztBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQywyREFBUyxDQUFDSCxHQUFELEVBQU1DLElBQU4sQ0FBL0I7QUFDQU4sV0FBTyxDQUFDQyxHQUFSLENBQVlNLE9BQU8sR0FBRyxTQUFWLEdBQXNCRixHQUF0QixHQUE0QixVQUE1QixHQUF5Q0MsSUFBckQ7O0FBQ0EsUUFBR0MsT0FBSCxFQUFXO0FBQ1A7QUFDQVAsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQWlCSyxJQUE3QixFQUZPLENBR1A7O0FBQ0EsVUFBRyxJQUFILEVBQVE7QUFDSjtBQUNBLGNBQU1HLEtBQUssR0FBR0Msd0RBQUEsQ0FBa0I7QUFBRUMsYUFBRyxFQUFFLE9BQVA7QUFBZ0JDLGFBQUcsRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQXhCLElBQWdDLEtBQUssRUFBTCxHQUFVO0FBQS9ELFNBQWxCLEVBQXVGQyx1REFBdkYsQ0FBZCxDQUZJLENBR0o7QUFDQTs7QUFDQWxCLFdBQUcsQ0FBQ0ksSUFBSixHQUFXO0FBQ1BHLGNBQUksRUFBRSxHQURDO0FBRVBHO0FBRk8sU0FBWDtBQUlILE9BVEQsTUFTTSxFQU1MO0FBQ0osS0FwQkQsTUFvQk07QUFDRjtBQUNBVixTQUFHLENBQUNJLElBQUosR0FBVztBQUNQRyxZQUFJLEVBQUUsR0FEQztBQUVQWSxXQUFHLEVBQUU7QUFGRSxPQUFYO0FBSUg7QUFDSjs7QUE1Q2lCOztBQStDdEIsaUVBQWUsSUFBSXRCLGVBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvTG9naW5Db250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzb253ZWJ0b2tlbiBmcm9tICAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgY2hlY2tDb2RlIH0gZnJvbSAnQC9jb21tb24vdXRpbHMuanMnXHJcblxyXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBhc3luYyBmb3JnZXQoY3R4KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW5Db250cm9sbGVyLmZvcmdldCcpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9naW4gKGN0eCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbkNvbnRyb2xsZXIubG9naW4nKVxyXG4gICAgICAgIC8vIOaOpeWPl+eUqOaIt+eahOaVsOaNrlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOi/lOWbnnRva2VuXHJcbiAgICAgICAgY29uc3QgeyBib2R5IH0gPSBjdHgucmVxdWVzdFxyXG4gICAgICAgIGxldCBzaWQgPSBib2R5LnNpZFxyXG4gICAgICAgIGxldCBjb2RlID0gYm9keS5jb2RlXHJcbiAgICAgICAgLy8g6aqM6K+B5Zu+54mH6aqM6K+B56CB55qE5pe25pWI5oCn5ZKM5q2j56Gu5oCnXHJcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGF3YWl0IGNoZWNrQ29kZShzaWQsIGNvZGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tlZCArICctLXNpZDogJyArIHNpZCArICctLWNvZGU6ICcgKyBjb2RlKVxyXG4gICAgICAgIGlmKGNoZWNrZWQpe1xyXG4gICAgICAgICAgICAvLyDpqozor4HnlKjmiLfotKbmiLflr4bnoIHnmoTmraPnoa5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvZGUgaXMgb2sgOiAnKyBjb2RlKVxyXG4gICAgICAgICAgICAvLyBtb29uZ29EQuafpeW6k1xyXG4gICAgICAgICAgICBpZih0cnVlKXsgXHJcbiAgICAgICAgICAgICAgICAvLyDnlKjmiLflkI3lr4bnoIHpqozor4HpgJrov4fvvIzov5Tlm550b2tlbuaVsOaNrlxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBqc29ud2VidG9rZW4uc2lnbih7IF9pZDogJ2JyaWFuJywgZXhwOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArIDYwICogNjAgKiAyNCB9LCBjb25maWcuSldUX1NFQ1JFVCkgXHJcbiAgICAgICAgICAgICAgICAvLyBzaWduKHBheWxvYWQsIHByaXZhdGVLZXksIG9wdGlvbnMpICAgcGF5bG9hZOaYr+aYjuaWhyzorrDlvZXkuIDkupvnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgIC8vIOi/h+acn+aXtumXtOWPr+S7peWGmeWcqHBheWxvYWTph4zpnaLvvIzkuZ/lj6/ku6XlhpnlnKhvcHRpb25z6YeM6Z2iIHsgZXhwaXJlc0luOiAnMmQnfSDkuKTlpKnov4fmnJ8gb3B0aW9uc+WGheeahOWGmeazlSAxaCAxZFxyXG4gICAgICAgICAgICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOeUqOaIt+WQjeWvhueggemqjOivgeWksei0pe+8jOi/lOWbnuaPkOekulxyXG4gICAgICAgICAgICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogNDA0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZzogJ+eUqOaIt+WQjeaIluWvhueggemUmeivrydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgLy8g5Zu+54mH6aqM6K+B56CB5qCh6aqM5aSx6LSlXHJcbiAgICAgICAgICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgY29kZTogNDAxLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAn5Zu+54mH6aqM6K+B56CB5LiN5q2j56Gu77yM6K+35qOA5p+l77yBJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9naW5Db250cm9sbGVyKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/PublicController.js":
/*!*************************************!*\
  !*** ./src/api/PublicController.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\n\nclass PublicController {\n  constructor() {}\n\n  async getCaptcha(ctx) {\n    const query = ctx.request.query;\n    const newCaptcha = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default().create({\n      size: 4,\n      // 长度\n      ignoreChars: '0o1i',\n      // 忽略容易混淆的字符\n      color: true,\n      // 是否有颜色\n      noise: Math.floor(Math.random() * 5),\n      // 干扰线的数量\n      width: 150,\n      height: 50\n    });\n    (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__.setValue)(query.sid, newCaptcha.text, 10 * 60); // getValue(query.sid).then(res => console.log(res))\n\n    ctx.body = {\n      code: 200,\n      data: newCaptcha.data\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanM/NjhhZSJdLCJuYW1lcyI6WyJQdWJsaWNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJnZXRDYXB0Y2hhIiwiY3R4IiwicXVlcnkiLCJyZXF1ZXN0IiwibmV3Q2FwdGNoYSIsInN2Z0NhcHRjaGEiLCJzaXplIiwiaWdub3JlQ2hhcnMiLCJjb2xvciIsIm5vaXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRWYWx1ZSIsInNpZCIsInRleHQiLCJib2R5IiwiY29kZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLGdCQUFOLENBQXVCO0FBQ25CQyxhQUFXLEdBQUUsQ0FBRTs7QUFDZixRQUFNQyxVQUFOLENBQWlCQyxHQUFqQixFQUFxQjtBQUNqQixVQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZRCxLQUExQjtBQUNBLFVBQU1FLFVBQVUsR0FBR0MseURBQUEsQ0FBa0I7QUFDakNDLFVBQUksRUFBRSxDQUQyQjtBQUN2QjtBQUNWQyxpQkFBVyxFQUFFLE1BRm9CO0FBRVg7QUFDdEJDLFdBQUssRUFBRSxJQUgwQjtBQUduQjtBQUNkQyxXQUFLLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FKMEI7QUFJSztBQUN0Q0MsV0FBSyxFQUFFLEdBTDBCO0FBTWpDQyxZQUFNLEVBQUU7QUFOeUIsS0FBbEIsQ0FBbkI7QUFRQUMsaUVBQVEsQ0FBQ2IsS0FBSyxDQUFDYyxHQUFQLEVBQVlaLFVBQVUsQ0FBQ2EsSUFBdkIsRUFBNkIsS0FBSyxFQUFsQyxDQUFSLENBVmlCLENBV2pCOztBQUNBaEIsT0FBRyxDQUFDaUIsSUFBSixHQUFXO0FBQ1BDLFVBQUksRUFBRSxHQURDO0FBRVBDLFVBQUksRUFBRWhCLFVBQVUsQ0FBQ2dCO0FBRlYsS0FBWDtBQUlIOztBQWxCa0I7O0FBcUJ2QixpRUFBZSxJQUFJdEIsZ0JBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvUHVibGljQ29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdmdDYXB0Y2hhIGZyb20gJ3N2Zy1jYXB0Y2hhJ1xyXG5pbXBvcnQge2dldFZhbHVlLCBzZXRWYWx1ZX0gZnJvbSAnLi4vY29uZmlnL1JlZGlzQ29uZmlnJ1xyXG5cclxuXHJcbmNsYXNzIFB1YmxpY0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBhc3luYyBnZXRDYXB0Y2hhKGN0eCl7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBjdHgucmVxdWVzdC5xdWVyeVxyXG4gICAgICAgIGNvbnN0IG5ld0NhcHRjaGEgPSBzdmdDYXB0Y2hhLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHNpemU6IDQsICAvLyDplb/luqZcclxuICAgICAgICAgICAgaWdub3JlQ2hhcnM6ICcwbzFpJywgIC8vIOW/veeVpeWuueaYk+a3t+a3hueahOWtl+esplxyXG4gICAgICAgICAgICBjb2xvcjogdHJ1ZSwgIC8vIOaYr+WQpuacieminOiJslxyXG4gICAgICAgICAgICBub2lzZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSksIC8vIOW5suaJsOe6v+eahOaVsOmHj1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRWYWx1ZShxdWVyeS5zaWQsIG5ld0NhcHRjaGEudGV4dCwgMTAgKiA2MClcclxuICAgICAgICAvLyBnZXRWYWx1ZShxdWVyeS5zaWQpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICAgICAgZGF0YTogbmV3Q2FwdGNoYS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHVibGljQ29udHJvbGxlcigpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/PublicController.js\n");

/***/ }),

/***/ "./src/common/errorHandler.js":
/*!************************************!*\
  !*** ./src/common/errorHandler.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx, next) => {\n  return next().catch(err => {\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'Protected resource, use Authorization header to get access\\n'\n      };\n    } else {\n      throw err;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvY29tbW9uL2Vycm9ySGFuZGxlci5qcz9lN2NhIl0sIm5hbWVzIjpbImN0eCIsIm5leHQiLCJjYXRjaCIsImVyciIsInN0YXR1cyIsImJvZHkiLCJjb2RlIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsQ0FBQ0EsR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDMUIsU0FBT0EsSUFBSSxHQUFHQyxLQUFQLENBQWNDLEdBQUQsSUFBUztBQUN6QixRQUFJLE9BQU9BLEdBQUcsQ0FBQ0MsTUFBZixFQUF1QjtBQUNyQkosU0FBRyxDQUFDSSxNQUFKLEdBQWEsR0FBYjtBQUNBSixTQUFHLENBQUNLLElBQUosR0FBVztBQUNWQyxZQUFJLEVBQUUsR0FESTtBQUVWQyxXQUFHLEVBQUU7QUFGSyxPQUFYO0FBSUQsS0FORCxNQU1PO0FBQ0wsWUFBTUosR0FBTjtBQUNEO0FBQ0YsR0FWSSxDQUFQO0FBV0gsQ0FaRCIsImZpbGUiOiIuL3NyYy9jb21tb24vZXJyb3JIYW5kbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGN0eCwgbmV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIG5leHQoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKDQwMSA9PSBlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICBjdHguc3RhdHVzID0gNDAxO1xyXG4gICAgICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgICAgY29kZTogNDAxLFxyXG4gICAgICAgICAgIG1zZzogJ1Byb3RlY3RlZCByZXNvdXJjZSwgdXNlIEF1dGhvcml6YXRpb24gaGVhZGVyIHRvIGdldCBhY2Nlc3NcXG4nICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/errorHandler.js\n");

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! namespace exports */
/*! export checkCode [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCode\": () => /* binding */ checkCode\n/* harmony export */ });\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\nconst checkCode = async (key, value) => {\n  const redisData = await (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__.getValue)(key);\n  console.log('redisData: ' + redisData);\n  console.log('value: ' + value);\n\n  if (redisData) {\n    return redisData.toLowerCase() === value.toLowerCase();\n  } else {\n    return false;\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvY29tbW9uL3V0aWxzLmpzPzkwYjkiXSwibmFtZXMiOlsiY2hlY2tDb2RlIiwia2V5IiwidmFsdWUiLCJyZWRpc0RhdGEiLCJnZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxLQUFaLEtBQXNCO0FBQ3BDLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyw2REFBUSxDQUFDSCxHQUFELENBQWhDO0FBQ0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQkgsU0FBNUI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWUosS0FBeEI7O0FBRUEsTUFBR0MsU0FBSCxFQUFhO0FBQ1QsV0FBT0EsU0FBUyxDQUFDSSxXQUFWLE9BQTRCTCxLQUFLLENBQUNLLFdBQU4sRUFBbkM7QUFDSCxHQUZELE1BRU07QUFDRixXQUFPLEtBQVA7QUFDSDtBQUNKLENBVkQiLCJmaWxlIjoiLi9zcmMvY29tbW9uL3V0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRWYWx1ZX0gZnJvbSAnQC9jb25maWcvUmVkaXNDb25maWcnXHJcblxyXG5jb25zdCBjaGVja0NvZGUgPSBhc3luYyAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVkaXNEYXRhID0gYXdhaXQgZ2V0VmFsdWUoa2V5KVxyXG4gICAgY29uc29sZS5sb2coJ3JlZGlzRGF0YTogJyArIHJlZGlzRGF0YSlcclxuICAgIGNvbnNvbGUubG9nKCd2YWx1ZTogJyArIHZhbHVlKVxyXG4gICAgXHJcbiAgICBpZihyZWRpc0RhdGEpe1xyXG4gICAgICAgIHJldHVybiByZWRpc0RhdGEudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2hlY2tDb2RlXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/utils.js\n");

/***/ }),

/***/ "./src/config/RedisConfig.js":
/*!***********************************!*\
  !*** ./src/config/RedisConfig.js ***!
  \***********************************/
/*! namespace exports */
/*! export client [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => /* binding */ client,\n/* harmony export */   \"getValue\": () => /* binding */ getValue,\n/* harmony export */   \"setValue\": () => /* binding */ setValue\n/* harmony export */ });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n  host: '47.110.240.19',\n  port: 15001,\n  password: '123456',\n  detect_buffers: true,\n  retry_strategy: function (options) {\n    if (options.error && options.error.code === \"ECONNREFUSED\") {\n      // End reconnecting on a specific error and flush all commands with\n      // a individual error\n      return new Error(\"The server refused the connection\");\n    }\n\n    if (options.total_retry_time > 1000 * 60 * 60) {\n      // End reconnecting after a specific timeout and flush all commands\n      // with a individual error\n      return new Error(\"Retry time exhausted\");\n    }\n\n    if (options.attempt > 10) {\n      // End reconnecting with built in error\n      return undefined;\n    } // reconnect after\n\n\n    return Math.min(options.attempt * 100, 3000);\n  }\n};\nconst client = redis__WEBPACK_IMPORTED_MODULE_0___default().createClient(options);\n\nconst setValue = (key, value, time) => {\n  if (typeof value === 'undefined' || value === null || value === '') {\n    return;\n  }\n\n  if (typeof value === 'string') {\n    if (typeof time !== 'undefined') {\n      client.set(key, value, 'EX', time); // 设置键值对的过期时间,单位：秒\n    } else {\n      client.set(key, value);\n    }\n  } else if (typeof value === 'object') {\n    Object.keys(value).forEach(item => {\n      client.hset(key, item, value[item], (redis__WEBPACK_IMPORTED_MODULE_0___default().print));\n    });\n  }\n};\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nconst getAsync = promisify(client.get).bind(client);\n\nconst getValue = key => {\n  console.log(getAsync(key));\n  return getAsync(key);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvY29uZmlnL1JlZGlzQ29uZmlnLmpzP2I3ODkiXSwibmFtZXMiOlsib3B0aW9ucyIsImhvc3QiLCJwb3J0IiwicGFzc3dvcmQiLCJkZXRlY3RfYnVmZmVycyIsInJldHJ5X3N0cmF0ZWd5IiwiZXJyb3IiLCJjb2RlIiwiRXJyb3IiLCJ0b3RhbF9yZXRyeV90aW1lIiwiYXR0ZW1wdCIsInVuZGVmaW5lZCIsIk1hdGgiLCJtaW4iLCJjbGllbnQiLCJyZWRpcyIsInNldFZhbHVlIiwia2V5IiwidmFsdWUiLCJ0aW1lIiwic2V0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpdGVtIiwiaHNldCIsInByb21pc2lmeSIsInJlcXVpcmUiLCJnZXRBc3luYyIsImdldCIsImJpbmQiLCJnZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUc7QUFDWkMsTUFBSSxFQUFFLGVBRE07QUFFWkMsTUFBSSxFQUFFLEtBRk07QUFHWkMsVUFBUSxFQUFFLFFBSEU7QUFJWkMsZ0JBQWMsRUFBRSxJQUpKO0FBS1pDLGdCQUFjLEVBQUUsVUFBU0wsT0FBVCxFQUFrQjtBQUM5QixRQUFJQSxPQUFPLENBQUNNLEtBQVIsSUFBaUJOLE9BQU8sQ0FBQ00sS0FBUixDQUFjQyxJQUFkLEtBQXVCLGNBQTVDLEVBQTREO0FBQzVEO0FBQ0E7QUFDQSxhQUFPLElBQUlDLEtBQUosQ0FBVSxtQ0FBVixDQUFQO0FBQ0M7O0FBQ0QsUUFBSVIsT0FBTyxDQUFDUyxnQkFBUixHQUEyQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxFQUErQztBQUMvQztBQUNBO0FBQ0EsYUFBTyxJQUFJRCxLQUFKLENBQVUsc0JBQVYsQ0FBUDtBQUNDOztBQUNELFFBQUlSLE9BQU8sQ0FBQ1UsT0FBUixHQUFrQixFQUF0QixFQUEwQjtBQUMxQjtBQUNBLGFBQU9DLFNBQVA7QUFDQyxLQWQ2QixDQWU5Qjs7O0FBQ0EsV0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNiLE9BQU8sQ0FBQ1UsT0FBUixHQUFrQixHQUEzQixFQUFnQyxJQUFoQyxDQUFQO0FBQ0g7QUF0QlcsQ0FBaEI7QUF5QkEsTUFBTUksTUFBTSxHQUFHQyx5REFBQSxDQUFtQmYsT0FBbkIsQ0FBZjs7QUFFQSxNQUFNZ0IsUUFBUSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFhQyxJQUFiLEtBQXNCO0FBQ25DLE1BQUcsT0FBT0QsS0FBUCxLQUFpQixXQUFqQixJQUFnQ0EsS0FBSyxLQUFLLElBQTFDLElBQWtEQSxLQUFLLEtBQUssRUFBL0QsRUFBa0U7QUFDOUQ7QUFDSDs7QUFDRCxNQUFHLE9BQU9BLEtBQVAsS0FBaUIsUUFBcEIsRUFBNkI7QUFDekIsUUFBRyxPQUFPQyxJQUFQLEtBQWdCLFdBQW5CLEVBQStCO0FBQzNCTCxZQUFNLENBQUNNLEdBQVAsQ0FBV0gsR0FBWCxFQUFnQkMsS0FBaEIsRUFBdUIsSUFBdkIsRUFBNkJDLElBQTdCLEVBRDJCLENBQ1E7QUFDdEMsS0FGRCxNQUVLO0FBQ0RMLFlBQU0sQ0FBQ00sR0FBUCxDQUFXSCxHQUFYLEVBQWdCQyxLQUFoQjtBQUNIO0FBQ0osR0FORCxNQU1NLElBQUcsT0FBT0EsS0FBUCxLQUFpQixRQUFwQixFQUE2QjtBQUMvQkcsVUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLE9BQW5CLENBQTJCQyxJQUFJLElBQUk7QUFDL0JWLFlBQU0sQ0FBQ1csSUFBUCxDQUFZUixHQUFaLEVBQWlCTyxJQUFqQixFQUF1Qk4sS0FBSyxDQUFDTSxJQUFELENBQTVCLEVBQW9DVCxvREFBcEM7QUFDSCxLQUZEO0FBR0g7QUFDSixDQWZEOztBQWlCQSxNQUFNO0FBQUVXO0FBQUYsSUFBZ0JDLG1CQUFPLENBQUMsa0JBQUQsQ0FBN0I7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNaLE1BQU0sQ0FBQ2UsR0FBUixDQUFULENBQXNCQyxJQUF0QixDQUEyQmhCLE1BQTNCLENBQWpCOztBQUVBLE1BQU1pQixRQUFRLEdBQUlkLEdBQUQsSUFBUztBQUN0QmUsU0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsQ0FBQ1gsR0FBRCxDQUFwQjtBQUNBLFNBQU9XLFFBQVEsQ0FBQ1gsR0FBRCxDQUFmO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3NyYy9jb25maWcvUmVkaXNDb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkaXMgZnJvbSAncmVkaXMnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG9zdDogJzQ3LjExMC4yNDAuMTknLFxyXG4gICAgcG9ydDogMTUwMDEsXHJcbiAgICBwYXNzd29yZDogJzEyMzQ1NicsXHJcbiAgICBkZXRlY3RfYnVmZmVyczogdHJ1ZSxcclxuICAgIHJldHJ5X3N0cmF0ZWd5OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IgJiYgb3B0aW9ucy5lcnJvci5jb2RlID09PSBcIkVDT05OUkVGVVNFRFwiKSB7XHJcbiAgICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyBvbiBhIHNwZWNpZmljIGVycm9yIGFuZCBmbHVzaCBhbGwgY29tbWFuZHMgd2l0aFxyXG4gICAgICAgIC8vIGEgaW5kaXZpZHVhbCBlcnJvclxyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgc2VydmVyIHJlZnVzZWQgdGhlIGNvbm5lY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLnRvdGFsX3JldHJ5X3RpbWUgPiAxMDAwICogNjAgKiA2MCkge1xyXG4gICAgICAgIC8vIEVuZCByZWNvbm5lY3RpbmcgYWZ0ZXIgYSBzcGVjaWZpYyB0aW1lb3V0IGFuZCBmbHVzaCBhbGwgY29tbWFuZHNcclxuICAgICAgICAvLyB3aXRoIGEgaW5kaXZpZHVhbCBlcnJvclxyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJSZXRyeSB0aW1lIGV4aGF1c3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXR0ZW1wdCA+IDEwKSB7XHJcbiAgICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyB3aXRoIGJ1aWx0IGluIGVycm9yXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVjb25uZWN0IGFmdGVyXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKG9wdGlvbnMuYXR0ZW1wdCAqIDEwMCwgMzAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudChvcHRpb25zKVxyXG5cclxuY29uc3Qgc2V0VmFsdWUgPSAoa2V5LCB2YWx1ZSwgdGltZSkgPT4ge1xyXG4gICAgaWYodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgaWYodHlwZW9mIHRpbWUgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgY2xpZW50LnNldChrZXksIHZhbHVlLCAnRVgnLCB0aW1lKSAvLyDorr7nva7plK7lgLzlr7nnmoTov4fmnJ/ml7bpl7Qs5Y2V5L2N77ya56eSXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsaWVudC5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKXtcclxuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY2xpZW50LmhzZXQoa2V5LCBpdGVtLCB2YWx1ZVtpdGVtXSwgcmVkaXMucHJpbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5jb25zdCBnZXRBc3luYyA9IHByb21pc2lmeShjbGllbnQuZ2V0KS5iaW5kKGNsaWVudCk7XHJcblxyXG5jb25zdCBnZXRWYWx1ZSA9IChrZXkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGdldEFzeW5jKGtleSkpXHJcbiAgICByZXR1cm4gZ2V0QXN5bmMoa2V5KVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2xpZW50LFxyXG4gICAgZ2V0VmFsdWUsXHJcbiAgICBzZXRWYWx1ZVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/RedisConfig.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst DB_URL = 'mongodb://127.0.0.1:27017';\nconst JWT_SECRET = 'JWT_SECRET';\nconst REDIS = {\n  host: '47.110.240.19',\n  port: 15001,\n  password: '123456'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  DB_URL,\n  JWT_SECRET,\n  REDIS\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvY29uZmlnL2luZGV4LmpzP2YxMjEiXSwibmFtZXMiOlsiREJfVVJMIiwiSldUX1NFQ1JFVCIsIlJFRElTIiwiaG9zdCIsInBvcnQiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRywyQkFBZjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNWQyxNQUFJLEVBQUUsZUFESTtBQUVWQyxNQUFJLEVBQUUsS0FGSTtBQUdWQyxVQUFRLEVBQUU7QUFIQSxDQUFkO0FBTUEsaUVBQWU7QUFDWEwsUUFEVztBQUVYQyxZQUZXO0FBR1hDO0FBSFcsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEQl9VUkwgPSAnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNydcclxuY29uc3QgSldUX1NFQ1JFVCA9ICdKV1RfU0VDUkVUJ1xyXG5jb25zdCBSRURJUyA9IHtcclxuICAgIGhvc3Q6ICc0Ny4xMTAuMjQwLjE5JyxcclxuICAgIHBvcnQ6IDE1MDAxLFxyXG4gICAgcGFzc3dvcmQ6ICcxMjM0NTYnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIERCX1VSTCxcclxuICAgIEpXVF9TRUNSRVQsXHJcbiAgICBSRURJU1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"src\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_routers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/routers */ \"./src/routes/routers.js\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _common_errorHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/errorHandler */ \"./src/common/errorHandler.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n// const koa = require('koa')\n// const app = new koa()\n\n\n\n\n\n\n\n\n // const combineRouter = require('./routes/routes')\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())(); // 定义公共的路径，不需要jwt鉴权   uless后面的路径不校验, 传入一个数组，里面是正则表达式，匹配路由\n\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_4___default()({\n  secret: _config_index__WEBPACK_IMPORTED_MODULE_11__.default.JWT_SECRET\n}).unless({\n  path: [/^\\/public/, /\\/login/]\n}); // app.use(combineRouter())\n// app.use(statics(path.join(__dirname, '../public')))\n// app.use(helmet())\n// 使用koa-compose整合所有中间件\n\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_9___default()([koa_body__WEBPACK_IMPORTED_MODULE_2___default()(), koa_static__WEBPACK_IMPORTED_MODULE_7___default()(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, '../public')), _koa_cors__WEBPACK_IMPORTED_MODULE_5___default()(), koa_json__WEBPACK_IMPORTED_MODULE_3___default()({\n  pretty: false,\n  param: 'pretty'\n}), koa_helmet__WEBPACK_IMPORTED_MODULE_6___default()(), _common_errorHandler__WEBPACK_IMPORTED_MODULE_10__.default, jwt // combineRouter() \n]);\napp.use(middleware);\napp.use((0,_routes_routers__WEBPACK_IMPORTED_MODULE_8__.default)());\nconsole.log('listen to 9420');\napp.listen(9420);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhcHAiLCJrb2EiLCJqd3QiLCJKV1QiLCJzZWNyZXQiLCJjb25maWciLCJKV1RfU0VDUkVUIiwidW5sZXNzIiwicGF0aCIsIm1pZGRsZXdhcmUiLCJjb21wb3NlIiwia29hQm9keSIsInN0YXRpY3MiLCJfX2Rpcm5hbWUiLCJjb3JzIiwianNvbnV0aWwiLCJwcmV0dHkiLCJwYXJhbSIsImhlbG1ldCIsImVycm9ySGFuZGxlciIsInVzZSIsImNvbWJpbmVSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLDRDQUFKLEVBQVosQyxDQUVBOztBQUNBLE1BQU1DLEdBQUcsR0FBR0MsOENBQUcsQ0FBQztBQUFFQyxRQUFNLEVBQUVDLDhEQUFpQkM7QUFBM0IsQ0FBRCxDQUFILENBQW1DQyxNQUFuQyxDQUEwQztBQUFFQyxNQUFJLEVBQUUsQ0FBQyxXQUFELEVBQWMsU0FBZDtBQUFSLENBQTFDLENBQVosQyxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFVBQVUsR0FBR0Msa0RBQU8sQ0FBQyxDQUN2QkMsK0NBQU8sRUFEZ0IsRUFFdkJDLGlEQUFPLENBQUNKLGdEQUFBLENBQVVLLFNBQVYsRUFBcUIsV0FBckIsQ0FBRCxDQUZnQixFQUd2QkMsZ0RBQUksRUFIbUIsRUFJdkJDLCtDQUFRLENBQUM7QUFBQ0MsUUFBTSxFQUFFLEtBQVQ7QUFBZ0JDLE9BQUssRUFBRTtBQUF2QixDQUFELENBSmUsRUFLdkJDLGlEQUFNLEVBTGlCLEVBTXZCQywwREFOdUIsRUFPdkJqQixHQVB1QixDQVF2QjtBQVJ1QixDQUFELENBQTFCO0FBV0FGLEdBQUcsQ0FBQ29CLEdBQUosQ0FBUVgsVUFBUjtBQUNBVCxHQUFHLENBQUNvQixHQUFKLENBQVFDLHdEQUFhLEVBQXJCO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0F2QixHQUFHLENBQUN3QixNQUFKLENBQVcsSUFBWCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGtvYSA9IHJlcXVpcmUoJ2tvYScpXHJcbi8vIGNvbnN0IGFwcCA9IG5ldyBrb2EoKVxyXG5pbXBvcnQga29hIGZyb20gJ2tvYSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IGtvYUJvZHkgZnJvbSAna29hLWJvZHknXHJcbmltcG9ydCBqc29udXRpbCBmcm9tICdrb2EtanNvbidcclxuaW1wb3J0IEpXVCBmcm9tICdrb2Etand0J1xyXG5pbXBvcnQgY29ycyBmcm9tICdAa29hL2NvcnMnXHJcbmltcG9ydCBoZWxtZXQgZnJvbSAna29hLWhlbG1ldCdcclxuaW1wb3J0IHN0YXRpY3MgZnJvbSAna29hLXN0YXRpYydcclxuaW1wb3J0IGNvbWJpbmVSb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvcm91dGVycydcclxuLy8gY29uc3QgY29tYmluZVJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JvdXRlcycpXHJcbmltcG9ydCBjb21wb3NlIGZyb20gJ2tvYS1jb21wb3NlJ1xyXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vY29tbW9uL2Vycm9ySGFuZGxlcidcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9pbmRleCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBrb2EoKVxyXG5cclxuLy8g5a6a5LmJ5YWs5YWx55qE6Lev5b6E77yM5LiN6ZyA6KaBand06Ym05p2DICAgdWxlc3PlkI7pnaLnmoTot6/lvoTkuI3moKHpqowsIOS8oOWFpeS4gOS4quaVsOe7hO+8jOmHjOmdouaYr+ato+WImeihqOi+vuW8j++8jOWMuemFjei3r+eUsVxyXG5jb25zdCBqd3QgPSBKV1QoeyBzZWNyZXQ6IGNvbmZpZy5KV1RfU0VDUkVUIH0pLnVubGVzcyh7IHBhdGg6IFsvXlxcL3B1YmxpYy8sIC9cXC9sb2dpbi9dIH0pXHJcblxyXG4vLyBhcHAudXNlKGNvbWJpbmVSb3V0ZXIoKSlcclxuLy8gYXBwLnVzZShzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpXHJcbi8vIGFwcC51c2UoaGVsbWV0KCkpXHJcbi8vIOS9v+eUqGtvYS1jb21wb3Nl5pW05ZCI5omA5pyJ5Lit6Ze05Lu2XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBjb21wb3NlKFtcclxuICAgIGtvYUJvZHkoKSxcclxuICAgIHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpKSxcclxuICAgIGNvcnMoKSxcclxuICAgIGpzb251dGlsKHtwcmV0dHk6IGZhbHNlLCBwYXJhbTogJ3ByZXR0eSd9KSxcclxuICAgIGhlbG1ldCgpLFxyXG4gICAgZXJyb3JIYW5kbGVyLFxyXG4gICAgand0XHJcbiAgICAvLyBjb21iaW5lUm91dGVyKCkgXHJcbl0pXHJcblxyXG5hcHAudXNlKG1pZGRsZXdhcmUpXHJcbmFwcC51c2UoY29tYmluZVJvdXRlcigpKVxyXG5jb25zb2xlLmxvZygnbGlzdGVuIHRvIDk0MjAnKVxyXG5hcHAubGlzdGVuKDk0MjApIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/login');\nrouter.post('/forget', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.forget);\nrouter.post('/login', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvcm91dGVzL2xvZ2luUm91dGVyLmpzPzNkZDEiXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwicG9zdCIsImxvZ2luQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsbURBQUosRUFBZjtBQUVBRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxRQUFkO0FBQ0FGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFNBQVosRUFBdUJDLGdFQUF2QjtBQUNBSixNQUFNLENBQUNHLElBQVAsQ0FBWSxRQUFaLEVBQXVCQywrREFBdkI7QUFFQSxpRUFBZUosTUFBZiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXHJcbmltcG9ydCBsb2dpbkNvbnRyb2xsZXIgZnJvbSAnLi4vYXBpL0xvZ2luQ29udHJvbGxlcidcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxucm91dGVyLnByZWZpeCgnL2xvZ2luJylcclxucm91dGVyLnBvc3QoJy9mb3JnZXQnLCBsb2dpbkNvbnRyb2xsZXIuZm9yZ2V0KVxyXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgIGxvZ2luQ29udHJvbGxlci5sb2dpbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

/***/ }),

/***/ "./src/routes/publicRouter.js":
/*!************************************!*\
  !*** ./src/routes/publicRouter.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_PublicController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/PublicController */ \"./src/api/PublicController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/public');\nrouter.get('/getCaptcha', _api_PublicController__WEBPACK_IMPORTED_MODULE_1__.default.getCaptcha);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvcm91dGVzL3B1YmxpY1JvdXRlci5qcz9kM2M1Il0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsInByZWZpeCIsImdldCIsInB1YmxpY0NvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLG1EQUFKLEVBQWY7QUFFQUQsTUFBTSxDQUFDRSxNQUFQLENBQWMsU0FBZDtBQUNBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxhQUFYLEVBQTBCQyxxRUFBMUI7QUFHQSxpRUFBZUosTUFBZiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcHVibGljUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5pbXBvcnQgcHVibGljQ29udHJvbGxlciBmcm9tICcuLi9hcGkvUHVibGljQ29udHJvbGxlcidcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxucm91dGVyLnByZWZpeCgnL3B1YmxpYycpXHJcbnJvdXRlci5nZXQoJy9nZXRDYXB0Y2hhJywgcHVibGljQ29udHJvbGxlci5nZXRDYXB0Y2hhKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/publicRouter.js\n");

/***/ }),

/***/ "./src/routes/routers.js":
/*!*******************************!*\
  !*** ./src/routes/routers.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _publicRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicRouter */ \"./src/routes/publicRouter.js\");\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginRouter */ \"./src/routes/loginRouter.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_publicRouter__WEBPACK_IMPORTED_MODULE_1__.default, _loginRouter__WEBPACK_IMPORTED_MODULE_2__.default));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EvLi9zcmMvcm91dGVzL3JvdXRlcnMuanM/ZWY0NyJdLCJuYW1lcyI6WyJjb21iaW5lUm91dGVzIiwicHVibGljUm91dGVyIiwibG9naW5Sb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsaUVBQWVBLDBEQUFhLENBQUNDLGtEQUFELEVBQWVDLGlEQUFmLENBQTVCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9yb3V0ZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbWJpbmVSb3V0ZXMgZnJvbSAna29hLWNvbWJpbmUtcm91dGVycydcclxuXHJcbmltcG9ydCBwdWJsaWNSb3V0ZXIgZnJvbSAnLi9wdWJsaWNSb3V0ZXInXHJcbmltcG9ydCBsb2dpblJvdXRlciBmcm9tICcuL2xvZ2luUm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJvdXRlcyhwdWJsaWNSb3V0ZXIsIGxvZ2luUm91dGVyKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/routers.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@koa/cors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-body");;

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-combine-routers");;

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-compose");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-json");;

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-jwt");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("redis");;

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("svg-captcha");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;