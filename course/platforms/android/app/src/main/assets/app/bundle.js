require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nActionBar {\n    background-color: #53ba82;\n    color: #ffffff;\n}\n.app{\n  background-color: #333333;\n}\n.message {\n    text-align: left;\n    font-size: 20;\n    margin-left: 30px;\n}\n.btn {\n   font-size: 18;\n   vertical-align: center;\n   text-align: center;\n   height: 160px;\n   border-radius: 30%;\n   background-color: #cf7200;\n}\n.input{\n  background-color: #FF8C00;\n  border-radius: 10%;\n  color: #000000;\n  margin: 50px 30px;\n  text-align: center;\n  vertical-align: center;\n  font-size: 20;\n}\n.setting{\n  background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\n  border-radius: 40%;\n}\n", "",{"version":3,"sources":["webpack://./../components/App.vue"],"names":[],"mappings":";AAgGA;IACA,yBAAA;IACA,cAAA;AACA;AACA;EACA,yBAAA;AACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,iBAAA;AACA;AAEA;GACA,aAAA;GACA,sBAAA;GACA,kBAAA;GACA,aAAA;GACA,kBAAA;GACA,yBAAA;AACA;AAEA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;AACA;AAEA;EACA,uEAAA;EACA,kBAAA;AACA","sourcesContent":["<template>\r\n  <Page class = \"app\">\r\n    <ActionBar title=\"Поиск кабинета\"/>\r\n    <GridLayout columns=\"5*,2*\" rows=\"*,auto,auto,*,auto,auto\">\r\n      <Label text=\"кабинет:\" class=\"message\"  row=\"1\" col=\"0\"/>\r\n      <Label text=\"корпус:\" class=\"message\" row=\"1\" col=\"1\"/>\r\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"cabinet\" hint=\"кабинет\" row=\"2\" col=\"0\" />\r\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"corps\" hint=\"корпус\" row=\"2\" col=\"1\" @returnPress='request' />\r\n      <Button class='btn' @tap='request' row=\"4\" col=\"0\" text=\"найти\"/> \r\n      <Button class='btn setting' @tap='setUrl' row=\"4\" col=\"1\" /> \r\n      <Button class='btn' @tap='closeApp' row=\"5\" text=\"выход\" colSpan=\"2\"/> \r\n    </GridLayout>\r\n  </Page>\r\n</template>\r\n\r\n<script>\r\nimport page2 from './page2';\r\nimport * as application from \"@nativescript/core/application\";\r\nimport { Http } from '@nativescript/core'\r\n\r\n   export default {\r\n    data() {\r\n      return {\r\n        url: 'http://192.168.18.114:8000/',\r\n        cabinet: '',\r\n        corps: '',\r\n      }\r\n    },\r\n    methods:{\r\n      search: function(event){\r\n        this.$showModal(page2, {\r\n          fullscreen: true,\r\n        })\r\n      },\r\n      closeApp() {\r\n        if (application.android) {\r\n          application.android.foregroundActivity.finish();\r\n        } else {\r\n          exit(0);\r\n        }\r\n      },\r\n      request(){\r\n        const id = this.cabinet.slice(0,3) + this.corps.slice(0,1) \r\n        console.log(`Id: ${id}`)\r\n\r\n        console.log(`Get request ${this.url + id}`)\r\n        Http.request({\r\n          url: this.url + id,\r\n          method: 'get'\r\n        }).then(\r\n          (response) => {\r\n            if (response.statusCode != 200){\r\n              alert({ \r\n                  title: \"Ошибка\",\r\n                  message: \"Кабинет не найден\",\r\n                  okButtonText: \"OK\"})  \r\n            }\r\n            else{\r\n              console.log(`Получение результата:`)\r\n              const content = response.content.toJSON()\r\n              this.$store.commit('changeId', content.id);\r\n              this.$store.commit('changeX', content.x);\r\n              this.$store.commit('changeY', content.y);\r\n              this.$store.commit('changeImg', content.info);\r\n              console.log(`x: ${this.$store.state.x} y: ${this.$store.state.y} \r\n                          id: ${this.$store.state.id} img: ${this.$store.state.img}`)\r\n              this.search();\r\n            }\r\n          },\r\n          (e) => {\r\n            console.log(`Ошибка ${e}`);\r\n             alert({ \r\n                  title: \"Ошибка\",\r\n                  message: \"Проверьте соединение с интернетом\",\r\n                  okButtonText: \"OK\"})\r\n          }\r\n        )\r\n      },\r\n      setUrl(){\r\n        prompt({\r\n          title: \"Настройки\",\r\n          message: \"Введите адрес сервера:\",\r\n          okButtonText: \"ок\",\r\n          cancelButtonText: \"отмена\",\r\n          defaultText: this.url,\r\n        }).then(result => {\r\n          console.log(`Set url: ${result.result}, url: ${result.text}`)\r\n          this.url = result.text;\r\n          this.correctionX();\r\n        });\r\n      },\r\n    }\r\n  }\r\n</script>\r\n\r\n<style>\r\n    ActionBar {\r\n        background-color: #53ba82;\r\n        color: #ffffff;\r\n    }\r\n    .app{\r\n      background-color: #333333;\r\n    }\r\n\r\n    .message {\r\n        text-align: left;\r\n        font-size: 20;\r\n        margin-left: 30px;\r\n    }\r\n\r\n    .btn {\r\n       font-size: 18;\r\n       vertical-align: center;\r\n       text-align: center;\r\n       height: 160px;\r\n       border-radius: 30%;\r\n       background-color: #cf7200;\r\n    }\r\n\r\n    .input{\r\n      background-color: #FF8C00;\r\n      border-radius: 10%;\r\n      color: #000000;\r\n      margin: 50px 30px;\r\n      text-align: center;\r\n      vertical-align: center;\r\n      font-size: 20;\r\n    }\r\n\r\n    .setting{\r\n      background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\r\n      border-radius: 40%;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.app{\n    background-color: #333333;\n}\n.message {\n        vertical-align: center;\n        text-align: center;\n        font-size: 20;\n        color: #dfd7d7;\n}\n.btn {\n       font-size: 25;\n       text-align: center;\n       height: 200px;\n       margin: 50px 70px;\n       padding: 50px;\n       border-radius: 40%;\n       background-color: #cf7200;\n}\n.mark {\n    background-color: crimson;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    vertical-align: center;\n    border-radius: 100%;\n    border: thick double #0400ff;\n    font-size: 20;\n}\n.image {\n    width: 1080px; \n    height: auto;\n}\n", "",{"version":3,"sources":["webpack://./../components/page2.vue"],"names":[],"mappings":";AA8BA;IACA,yBAAA;AACA;AACA;QACA,sBAAA;QACA,kBAAA;QACA,aAAA;QACA,cAAA;AACA;AACA;OACA,aAAA;OACA,kBAAA;OACA,aAAA;OACA,iBAAA;OACA,aAAA;OACA,kBAAA;OACA,yBAAA;AACA;AACA;IACA,yBAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,sBAAA;IACA,mBAAA;IACA,4BAAA;IACA,aAAA;AACA;AACA;IACA,aAAA;IACA,YAAA;AACA","sourcesContent":["<template actionBarHidden=\"true\">\r\n<Page class=\"app\">\r\n<StackLayout>\r\n<GridLayout rows=\"*,auto\">\r\n    <AbsoluteLayout row=\"0\">\r\n      <Image :src=this.$store.state.img class=\"image\" stretch=\"none\" top=\"\" left=\"0\" />\r\n      <Label text=\".\" class=\"mark\" :top='this.$store.state.y' :left='this.$store.state.x' />\r\n    </AbsoluteLayout>\r\n    <Button class='btn' @tap='goback' row=\"1\" text=\"назад\"/> \r\n</GridLayout>\r\n</StackLayout>\r\n</Page> \r\n</template>\r\n\r\n<script>\r\nimport App from './App';\r\n\r\n   export default {\r\n    methods:{\r\n      goback: function(event){\r\n        this.$showModal(App, {\r\n          fullscreen: true,\r\n        })\r\n      }\r\n      \r\n    }\r\n  }\r\n</script>\r\n\r\n<style>\r\n    .app{\r\n    background-color: #333333;\r\n}\r\n.message {\r\n        vertical-align: center;\r\n        text-align: center;\r\n        font-size: 20;\r\n        color: #dfd7d7;\r\n    }   \r\n .btn {\r\n       font-size: 25;\r\n       text-align: center;\r\n       height: 200px;\r\n       margin: 50px 70px;\r\n       padding: 50px;\r\n       border-radius: 40%;\r\n       background-color: #cf7200;\r\n    }  \r\n  .mark {\r\n    background-color: crimson;\r\n    height: 50px;\r\n    width: 50px;\r\n    text-align: center;\r\n    vertical-align: center;\r\n    border-radius: 100%;\r\n    border: thick double #0400ff;\r\n    font-size: 20;\r\n  }\r\n  .image {\r\n    width: 1080px; \r\n    height: auto;\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/page2.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/page2.vue");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      url: 'http://192.168.18.114:8000/',
      cabinet: '',
      corps: ''
    };
  },

  methods: {
    search: function search(event) {
      this.$showModal(_page2__WEBPACK_IMPORTED_MODULE_0__["default"], {
        fullscreen: true
      });
    },

    closeApp() {
      if (_nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__["android"]) {
        _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__["android"].foregroundActivity.finish();
      } else {
        exit(0);
      }
    },

    request() {
      var id = this.cabinet.slice(0, 3) + this.corps.slice(0, 1);
      console.log("Id: ".concat(id));
      console.log("Get request ".concat(this.url + id));
      _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Http"].request({
        url: this.url + id,
        method: 'get'
      }).then(response => {
        if (response.statusCode != 200) {
          alert({
            title: "Ошибка",
            message: "Кабинет не найден",
            okButtonText: "OK"
          });
        } else {
          console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430:");
          var content = response.content.toJSON();
          this.$store.commit('changeId', content.id);
          this.$store.commit('changeX', content.x);
          this.$store.commit('changeY', content.y);
          this.$store.commit('changeImg', content.info);
          console.log("x: ".concat(this.$store.state.x, " y: ").concat(this.$store.state.y, " \n                          id: ").concat(this.$store.state.id, " img: ").concat(this.$store.state.img));
          this.search();
        }
      }, e => {
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(e));
        alert({
          title: "Ошибка",
          message: "Проверьте соединение с интернетом",
          okButtonText: "OK"
        });
      });
    },

    setUrl() {
      prompt({
        title: "Настройки",
        message: "Введите адрес сервера:",
        okButtonText: "ок",
        cancelButtonText: "отмена",
        defaultText: this.url
      }).then(result => {
        console.log("Set url: ".concat(result.result, ", url: ").concat(result.text));
        this.url = result.text;
        this.correctionX();
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goback: function goback(event) {
      this.$showModal(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
        fullscreen: true
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "app" },
    [
      _c("ActionBar", { attrs: { title: "Поиск кабинета" } }),
      _c(
        "GridLayout",
        { attrs: { columns: "5*,2*", rows: "*,auto,auto,*,auto,auto" } },
        [
          _c("Label", {
            staticClass: "message",
            attrs: { text: "кабинет:", row: "1", col: "0" }
          }),
          _c("Label", {
            staticClass: "message",
            attrs: { text: "корпус:", row: "1", col: "1" }
          }),
          _c("TextField", {
            staticClass: "input",
            attrs: {
              keyboardType: "number",
              hint: "кабинет",
              row: "2",
              col: "0"
            },
            model: {
              value: _vm.cabinet,
              callback: function($event) {
                _vm.cabinet = $event.object["text"]
              },
              expression: "cabinet"
            }
          }),
          _c("TextField", {
            staticClass: "input",
            attrs: {
              keyboardType: "number",
              hint: "корпус",
              row: "2",
              col: "1"
            },
            on: { returnPress: _vm.request },
            model: {
              value: _vm.corps,
              callback: function($event) {
                _vm.corps = $event.object["text"]
              },
              expression: "corps"
            }
          }),
          _c("Button", {
            staticClass: "btn",
            attrs: { row: "4", col: "0", text: "найти" },
            on: { tap: _vm.request }
          }),
          _c("Button", {
            staticClass: "btn setting",
            attrs: { row: "4", col: "1" },
            on: { tap: _vm.setUrl }
          }),
          _c("Button", {
            staticClass: "btn",
            attrs: { row: "5", text: "выход", colSpan: "2" },
            on: { tap: _vm.closeApp }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "app" },
    [
      _c(
        "StackLayout",
        [
          _c(
            "GridLayout",
            { attrs: { rows: "*,auto" } },
            [
              _c(
                "AbsoluteLayout",
                { attrs: { row: "0" } },
                [
                  _c("Image", {
                    staticClass: "image",
                    attrs: {
                      src: this.$store.state.img,
                      stretch: "none",
                      top: "",
                      left: "0"
                    }
                  }),
                  _c("Label", {
                    staticClass: "mark",
                    attrs: {
                      text: ".",
                      top: this.$store.state.y,
                      left: this.$store.state.x
                    }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn",
                attrs: { row: "1", text: "назад" },
                on: { tap: _vm.goback }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./main.js": "./main.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n3 │ @import '~@nativescript/theme/core';\r\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  src\\app.scss 3:9  root stylesheet");

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/page2.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&");
/* harmony import */ var _page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _page2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/page2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('8017fc50')) {
      api.createRecord('8017fc50', component.options)
    } else {
      api.reload('8017fc50', component.options)
    }
    module.hot.accept("./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&");
(function () {
      api.rerender('8017fc50', {
        render: _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/page2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/page2.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/page2.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-vue-devtools/dist/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./store.js");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        
        



if (true) {
  nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

 // Prints Vue logs when --env.production is *NOT* set while building

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.config.silent = "development" === 'production';
new nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: h => h('frame', [h(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    x: '897px',
    y: '924px',
    img: '~/assets/maps/22.png',
    id: '2287',
    correctX: -20,
    correctY: -20,
    url: 'http://192.168.1.50:8000/'
  },
  mutations: {
    changeX(state, newX) {
      state.x = newX + state.correctX + 'px';
    },

    changeY(state, newY) {
      state.y = newY + state.correctY + 'px';
    },

    changeImg(state, newImg) {
      state.img = '~/assets/maps/' + newImg;
    },

    changeId(state, newId) {
      state.url = newId;
    },

    correctionX(state, corX) {
      state.correctX = corX;
    },

    correctionY(state, corY) {
      state.correctY = corY;
    },

    changeUrl(state, newUrl) {
      state.url = newUrl;
    }

  },
  actions: {}
}));

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTlmNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT8zZTE3Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvcGFnZTIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83YjBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzNlNGYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ODMzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/YjM3NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT85ZjkwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzUzNGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlMi52dWU/N2RiYSIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOlsiQXBwIiwiVnVlRGV2dG9vbHMiLCJUTlNfRU5WIiwiVnVlIiwidXNlIiwic3RvcmUiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJ4IiwieSIsImltZyIsImlkIiwiY29ycmVjdFgiLCJjb3JyZWN0WSIsInVybCIsIm11dGF0aW9ucyIsImNoYW5nZVgiLCJuZXdYIiwiY2hhbmdlWSIsIm5ld1kiLCJjaGFuZ2VJbWciLCJuZXdJbWciLCJjaGFuZ2VJZCIsIm5ld0lkIiwiY29ycmVjdGlvblgiLCJjb3JYIiwiY29ycmVjdGlvblkiLCJjb3JZIiwiY2hhbmdlVXJsIiwibmV3VXJsIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsZ0JBQWdCLGdDQUFnQyxxQkFBcUIsR0FBRyxPQUFPLDhCQUE4QixHQUFHLFlBQVksdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxRQUFRLG1CQUFtQiw0QkFBNEIsd0JBQXdCLG1CQUFtQix3QkFBd0IsK0JBQStCLEdBQUcsU0FBUyw4QkFBOEIsdUJBQXVCLG1CQUFtQixzQkFBc0IsdUJBQXVCLDJCQUEyQixrQkFBa0IsR0FBRyxXQUFXLDhFQUE4RSx1QkFBdUIsR0FBRyxTQUFTLG9GQUFvRixNQUFNLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsZzZCQUFnNkIsb0VBQW9FLFlBQVksT0FBTyxxREFBcUQsZ0JBQWdCLGtCQUFrQix3R0FBd0csU0FBUyxrQkFBa0Isa0NBQWtDLG9DQUFvQyw0Q0FBNEMsWUFBWSx1QkFBdUIsc0NBQXNDLDhEQUE4RCxhQUFhLE9BQU8sc0JBQXNCLGFBQWEsV0FBVyxxQkFBcUIsc0dBQXNHLEdBQUcsNkNBQTZDLGNBQWMsNEJBQTRCLHlFQUF5RSxvQ0FBb0MsZ0RBQWdELHlCQUF5Qix5SUFBeUksb0JBQW9CLHFCQUFxQiw4S0FB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V0FBTyxDQUFDWCxLQUFELEVBQVFZLElBQVIsRUFBYTtBQUNsQlosV0FBSyxDQUFDRSxDQUFOLEdBQVVVLElBQUksR0FBQ1osS0FBSyxDQUFDTSxRQUFYLEdBQXNCLElBQWhDO0FBQ0QsS0FOUTs7QUFPVE8sYUFBUyxDQUFDYixLQUFELEVBQVFjLE1BQVIsRUFBZTtBQUN0QmQsV0FBSyxDQUFDRyxHQUFOLEdBQVksbUJBQW1CVyxNQUEvQjtBQUNELEtBVFE7O0FBVVRDLFlBQVEsQ0FBQ2YsS0FBRCxFQUFRZ0IsS0FBUixFQUFjO0FBQ3BCaEIsV0FBSyxDQUFDTyxHQUFOLEdBQVlTLEtBQVo7QUFDRCxLQVpROztBQWFUQyxlQUFXLENBQUNqQixLQUFELEVBQVFrQixJQUFSLEVBQWE7QUFDdEJsQixXQUFLLENBQUNLLFFBQU4sR0FBaUJhLElBQWpCO0FBQ0QsS0FmUTs7QUFnQlRDLGVBQVcsQ0FBQ25CLEtBQUQsRUFBT29CLElBQVAsRUFBWTtBQUNyQnBCLFdBQUssQ0FBQ00sUUFBTixHQUFpQmMsSUFBakI7QUFDRCxLQWxCUTs7QUFtQlRDLGFBQVMsQ0FBQ3JCLEtBQUQsRUFBUXNCLE1BQVIsRUFBZTtBQUN0QnRCLFdBQUssQ0FBQ08sR0FBTixHQUFZZSxNQUFaO0FBQ0Q7O0FBckJRLEdBVmlCO0FBaUM1QkMsU0FBTyxFQUFFO0FBakNtQixDQUFmLENBQWYsRTs7Ozs7OztBQ0xBLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5hcHB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG4ubWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYnRuIHtcXG4gICBmb250LXNpemU6IDE4O1xcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMTYwcHg7XFxuICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxufVxcbi5pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5zZXR0aW5ne1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0dBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtHQUNBLGFBQUE7R0FDQSxzQkFBQTtHQUNBLGtCQUFBO0dBQ0EsYUFBQTtHQUNBLGtCQUFBO0dBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8UGFnZSBjbGFzcyA9IFxcXCJhcHBcXFwiPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcXFwiLz5cXHJcXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiNSosMipcXFwiIHJvd3M9XFxcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXFxcIj5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwi0LrQsNCx0LjQvdC10YI6XFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIi8+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcItC60L7RgNC/0YPRgTpcXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIvPlxcclxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY2FiaW5ldFxcXCIgaGludD1cXFwi0LrQsNCx0LjQvdC10YJcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcclxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY29ycHNcXFwiIGhpbnQ9XFxcItC60L7RgNC/0YPRgVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIEByZXR1cm5QcmVzcz0ncmVxdWVzdCcgLz5cXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLQvdCw0LnRgtC4XFxcIi8+IFxcclxcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0biBzZXR0aW5nJyBAdGFwPSdzZXRVcmwnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiAvPiBcXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XFxcIjVcXFwiIHRleHQ9XFxcItCy0YvRhdC+0LRcXFwiIGNvbFNwYW49XFxcIjJcXFwiLz4gXFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gIDwvUGFnZT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xcclxcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXFxcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblxcXCI7XFxyXFxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSdcXHJcXG5cXHJcXG4gICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjE4LjExNDo4MDAwLycsXFxyXFxuICAgICAgICBjYWJpbmV0OiAnJyxcXHJcXG4gICAgICAgIGNvcnBzOiAnJyxcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6e1xcclxcbiAgICAgIHNlYXJjaDogZnVuY3Rpb24oZXZlbnQpe1xcclxcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKHBhZ2UyLCB7XFxyXFxuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgY2xvc2VBcHAoKSB7XFxyXFxuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xcclxcbiAgICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgIGV4aXQoMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICByZXF1ZXN0KCl7XFxyXFxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuY2FiaW5ldC5zbGljZSgwLDMpICsgdGhpcy5jb3Jwcy5zbGljZSgwLDEpIFxcclxcbiAgICAgICAgY29uc29sZS5sb2coYElkOiAke2lkfWApXFxyXFxuXFxyXFxuICAgICAgICBjb25zb2xlLmxvZyhgR2V0IHJlcXVlc3QgJHt0aGlzLnVybCArIGlkfWApXFxyXFxuICAgICAgICBIdHRwLnJlcXVlc3Qoe1xcclxcbiAgICAgICAgICB1cmw6IHRoaXMudXJsICsgaWQsXFxyXFxuICAgICAgICAgIG1ldGhvZDogJ2dldCdcXHJcXG4gICAgICAgIH0pLnRoZW4oXFxyXFxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9IDIwMCl7XFxyXFxuICAgICAgICAgICAgICBhbGVydCh7IFxcclxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwi0J7RiNC40LHQutCwXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcXFwi0JrQsNCx0LjQvdC10YIg0L3QtSDQvdCw0LnQtNC10L1cXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXFxcIk9LXFxcIn0pICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgZWxzZXtcXHJcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQn9C+0LvRg9GH0LXQvdC40LUg0YDQtdC30YPQu9GM0YLQsNGC0LA6YClcXHJcXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpXFxyXFxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUlkJywgY29udGVudC5pZCk7XFxyXFxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVgnLCBjb250ZW50LngpO1xcclxcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VZJywgY29udGVudC55KTtcXHJcXG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlSW1nJywgY29udGVudC5pbmZvKTtcXHJcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB4OiAke3RoaXMuJHN0b3JlLnN0YXRlLnh9IHk6ICR7dGhpcy4kc3RvcmUuc3RhdGUueX0gXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pZH0gaW1nOiAke3RoaXMuJHN0b3JlLnN0YXRlLmltZ31gKVxcclxcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke2V9YCk7XFxyXFxuICAgICAgICAgICAgIGFsZXJ0KHsgXFxyXFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCLQntGI0LjQsdC60LBcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFxcXCLQn9GA0L7QstC10YDRjNGC0LUg0YHQvtC10LTQuNC90LXQvdC40LUg0YEg0LjQvdGC0LXRgNC90LXRgtC+0LxcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXFxcIk9LXFxcIn0pXFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIClcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHNldFVybCgpe1xcclxcbiAgICAgICAgcHJvbXB0KHtcXHJcXG4gICAgICAgICAgdGl0bGU6IFxcXCLQndCw0YHRgtGA0L7QudC60LhcXFwiLFxcclxcbiAgICAgICAgICBtZXNzYWdlOiBcXFwi0JLQstC10LTQuNGC0LUg0LDQtNGA0LXRgSDRgdC10YDQstC10YDQsDpcXFwiLFxcclxcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCLQvtC6XFxcIixcXHJcXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXFxcItC+0YLQvNC10L3QsFxcXCIsXFxyXFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnVybCxcXHJcXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcXHJcXG4gICAgICAgICAgY29uc29sZS5sb2coYFNldCB1cmw6ICR7cmVzdWx0LnJlc3VsdH0sIHVybDogJHtyZXN1bHQudGV4dH1gKVxcclxcbiAgICAgICAgICB0aGlzLnVybCA9IHJlc3VsdC50ZXh0O1xcclxcbiAgICAgICAgICB0aGlzLmNvcnJlY3Rpb25YKCk7XFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICB9LFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICBBY3Rpb25CYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcHB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVzc2FnZSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgIGhlaWdodDogMTYwcHg7XFxyXFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5wdXR7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEMwMDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2V0dGluZ3tcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgI2M0NmMwMCBjZW50ZXIgdXJsKFxcXCJ+L2Fzc2V0cy9pbWFnZXMvc2V0dGluZy5wbmdcXFwiKTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0FwcC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFwcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuLm1lc3NhZ2Uge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBjb2xvcjogI2RmZDdkNztcXG59XFxuLmJ0biB7XFxuICAgICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgbWFyZ2luOiA1MHB4IDcwcHg7XFxuICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXG59XFxuLm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlICMwNDAwZmY7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDgwcHg7IFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvcGFnZTIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4QkE7SUFDQSx5QkFBQTtBQUNBO0FBQ0E7UUFDQSxzQkFBQTtRQUNBLGtCQUFBO1FBQ0EsYUFBQTtRQUNBLGNBQUE7QUFDQTtBQUNBO09BQ0EsYUFBQTtPQUNBLGtCQUFBO09BQ0EsYUFBQTtPQUNBLGlCQUFBO09BQ0EsYUFBQTtPQUNBLGtCQUFBO09BQ0EseUJBQUE7QUFDQTtBQUNBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0lBQ0EsYUFBQTtBQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsWUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcclxcbjxQYWdlIGNsYXNzPVxcXCJhcHBcXFwiPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLGF1dG9cXFwiPlxcclxcbiAgICA8QWJzb2x1dGVMYXlvdXQgcm93PVxcXCIwXFxcIj5cXHJcXG4gICAgICA8SW1hZ2UgOnNyYz10aGlzLiRzdG9yZS5zdGF0ZS5pbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiB0b3A9XFxcIlxcXCIgbGVmdD1cXFwiMFxcXCIgLz5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiLlxcXCIgY2xhc3M9XFxcIm1hcmtcXFwiIDp0b3A9J3RoaXMuJHN0b3JlLnN0YXRlLnknIDpsZWZ0PSd0aGlzLiRzdG9yZS5zdGF0ZS54JyAvPlxcclxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2dvYmFjaycgcm93PVxcXCIxXFxcIiB0ZXh0PVxcXCLQvdCw0LfQsNC0XFxcIi8+IFxcclxcbjwvR3JpZExheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT4gXFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xcclxcblxcclxcbiAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgZ29iYWNrOiBmdW5jdGlvbihldmVudCl7XFxyXFxuICAgICAgICB0aGlzLiRzaG93TW9kYWwoQXBwLCB7XFxyXFxuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmFwcHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgICAgICBjb2xvcjogI2RmZDdkNztcXHJcXG4gICAgfSAgIFxcclxcbiAuYnRuIHtcXHJcXG4gICAgICAgZm9udC1zaXplOiAyNTtcXHJcXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICBtYXJnaW46IDUwcHggNzBweDtcXHJcXG4gICAgICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MjAwO1xcclxcbiAgICB9ICBcXHJcXG4gIC5tYXJrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSAjMDQwMGZmO1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgfVxcclxcbiAgLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwODBweDsgXFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIGNsYXNzID0gXCJhcHBcIj5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcIi8+XHJcbiAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNSosMipcIiByb3dzPVwiKixhdXRvLGF1dG8sKixhdXRvLGF1dG9cIj5cclxuICAgICAgPExhYmVsIHRleHQ9XCLQutCw0LHQuNC90LXRgjpcIiBjbGFzcz1cIm1lc3NhZ2VcIiAgcm93PVwiMVwiIGNvbD1cIjBcIi8+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwi0LrQvtGA0L/Rg9GBOlwiIGNsYXNzPVwibWVzc2FnZVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIvPlxyXG4gICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXRcIiB2LW1vZGVsPVwiY2FiaW5ldFwiIGhpbnQ9XCLQutCw0LHQuNC90LXRglwiIHJvdz1cIjJcIiBjb2w9XCIwXCIgLz5cclxuICAgICAgPFRleHRGaWVsZCBrZXlib2FyZFR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImlucHV0XCIgdi1tb2RlbD1cImNvcnBzXCIgaGludD1cItC60L7RgNC/0YPRgVwiIHJvdz1cIjJcIiBjb2w9XCIxXCIgQHJldHVyblByZXNzPSdyZXF1ZXN0JyAvPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cIjRcIiBjb2w9XCIwXCIgdGV4dD1cItC90LDQudGC0LhcIi8+IFxyXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4gc2V0dGluZycgQHRhcD0nc2V0VXJsJyByb3c9XCI0XCIgY29sPVwiMVwiIC8+IFxyXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XCI1XCIgdGV4dD1cItCy0YvRhdC+0LRcIiBjb2xTcGFuPVwiMlwiLz4gXHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnXHJcblxyXG4gICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjE4LjExNDo4MDAwLycsXHJcbiAgICAgICAgY2FiaW5ldDogJycsXHJcbiAgICAgICAgY29ycHM6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIHNlYXJjaDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChwYWdlMiwge1xyXG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZUFwcCgpIHtcclxuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xyXG4gICAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGV4aXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXF1ZXN0KCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNhYmluZXQuc2xpY2UoMCwzKSArIHRoaXMuY29ycHMuc2xpY2UoMCwxKSBcclxuICAgICAgICBjb25zb2xlLmxvZyhgSWQ6ICR7aWR9YClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYEdldCByZXF1ZXN0ICR7dGhpcy51cmwgKyBpZH1gKVxyXG4gICAgICAgIEh0dHAucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMudXJsICsgaWQsXHJcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPSAyMDApe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KHsgXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcItCe0YjQuNCx0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcItCa0LDQsdC40L3QtdGCINC90LUg0L3QsNC50LTQtdC9XCIsXHJcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wifSkgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCf0L7Qu9GD0YfQtdC90LjQtSDRgNC10LfRg9C70YzRgtCw0YLQsDpgKVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpXHJcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VJZCcsIGNvbnRlbnQuaWQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlWCcsIGNvbnRlbnQueCk7XHJcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VZJywgY29udGVudC55KTtcclxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUltZycsIGNvbnRlbnQuaW5mbyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYHg6ICR7dGhpcy4kc3RvcmUuc3RhdGUueH0geTogJHt0aGlzLiRzdG9yZS5zdGF0ZS55fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pZH0gaW1nOiAke3RoaXMuJHN0b3JlLnN0YXRlLmltZ31gKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg0J7RiNC40LHQutCwICR7ZX1gKTtcclxuICAgICAgICAgICAgIGFsZXJ0KHsgXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcItCe0YjQuNCx0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcItCf0YDQvtCy0LXRgNGM0YLQtSDRgdC+0LXQtNC40L3QtdC90LjQtSDRgSDQuNC90YLQtdGA0L3QtdGC0L7QvFwiLFxyXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9LFxyXG4gICAgICBzZXRVcmwoKXtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwi0J3QsNGB0YLRgNC+0LnQutC4XCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcItCS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0YHQtdGA0LLQtdGA0LA6XCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwi0L7QulwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCLQvtGC0LzQtdC90LBcIixcclxuICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnVybCxcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgU2V0IHVybDogJHtyZXN1bHQucmVzdWx0fSwgdXJsOiAke3Jlc3VsdC50ZXh0fWApXHJcbiAgICAgICAgICB0aGlzLnVybCA9IHJlc3VsdC50ZXh0O1xyXG4gICAgICAgICAgdGhpcy5jb3JyZWN0aW9uWCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICBBY3Rpb25CYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAuYXBwe1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEMwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2V0dGluZ3tcclxuICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcIn4vYXNzZXRzL2ltYWdlcy9zZXR0aW5nLnBuZ1wiKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGUgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxyXG48UGFnZSBjbGFzcz1cImFwcFwiPlxyXG48U3RhY2tMYXlvdXQ+XHJcbjxHcmlkTGF5b3V0IHJvd3M9XCIqLGF1dG9cIj5cclxuICAgIDxBYnNvbHV0ZUxheW91dCByb3c9XCIwXCI+XHJcbiAgICAgIDxJbWFnZSA6c3JjPXRoaXMuJHN0b3JlLnN0YXRlLmltZyBjbGFzcz1cImltYWdlXCIgc3RyZXRjaD1cIm5vbmVcIiB0b3A9XCJcIiBsZWZ0PVwiMFwiIC8+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiLlwiIGNsYXNzPVwibWFya1wiIDp0b3A9J3RoaXMuJHN0b3JlLnN0YXRlLnknIDpsZWZ0PSd0aGlzLiRzdG9yZS5zdGF0ZS54JyAvPlxyXG4gICAgPC9BYnNvbHV0ZUxheW91dD5cclxuICAgIDxCdXR0b24gY2xhc3M9J2J0bicgQHRhcD0nZ29iYWNrJyByb3c9XCIxXCIgdGV4dD1cItC90LDQt9Cw0LRcIi8+IFxyXG48L0dyaWRMYXlvdXQ+XHJcbjwvU3RhY2tMYXlvdXQ+XHJcbjwvUGFnZT4gXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuXHJcbiAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICBnb2JhY2s6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICB0aGlzLiRzaG93TW9kYWwoQXBwLCB7XHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5hcHB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5tZXNzYWdlIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGNvbG9yOiAjZGZkN2Q3O1xyXG4gICAgfSAgIFxyXG4gLmJ0biB7XHJcbiAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgIG1hcmdpbjogNTBweCA3MHB4O1xyXG4gICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XHJcbiAgICB9ICBcclxuICAubWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlICMwNDAwZmY7XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG4gIH1cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwODBweDsgXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcItCf0L7QuNGB0Log0LrQsNCx0LjQvdC10YLQsFwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI1KiwyKlwiLCByb3dzOiBcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcItC60LDQsdC40L3QtdGCOlwiLCByb3c6IFwiMVwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwi0LrQvtGA0L/Rg9GBOlwiLCByb3c6IFwiMVwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBoaW50OiBcItC60LDQsdC40L3QtdGCXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgIGNvbDogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhYmluZXQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY2FiaW5ldCA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2FiaW5ldFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgaGludDogXCLQutC+0YDQv9GD0YFcIixcbiAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHJldHVyblByZXNzOiBfdm0ucmVxdWVzdCB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb3JwcyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5jb3JwcyA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29ycHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjRcIiwgY29sOiBcIjBcIiwgdGV4dDogXCLQvdCw0LnRgtC4XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnJlcXVlc3QgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBzZXR0aW5nXCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNFwiLCBjb2w6IFwiMVwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zZXRVcmwgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjVcIiwgdGV4dDogXCLQstGL0YXQvtC0XCIsIGNvbFNwYW46IFwiMlwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jbG9zZUFwcCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKixhdXRvXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkFic29sdXRlTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHRoaXMuJHN0b3JlLnN0YXRlLmltZyxcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFya1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy4kc3RvcmUuc3RhdGUueSxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLiRzdG9yZS5zdGF0ZS54XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0OiBcItC90LDQt9Cw0LRcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvYmFjayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9tYWluLmpzXCIsXG5cdFwiLi9zdG9yZS5qc1wiOiBcIi4vc3RvcmUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxFZHVcXFxcUHJvamVjdFxcXFxjb3Vyc2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDViYTVlZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDViYTVlZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwMTdmYzUwJmFjdGlvbkJhckhpZGRlbj10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxFZHVcXFxcUHJvamVjdFxcXFxjb3Vyc2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODAxN2ZjNTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODAxN2ZjNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODAxN2ZjNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDE3ZmM1MCZhY3Rpb25CYXJIaWRkZW49dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MDE3ZmM1MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9wYWdlMi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDE3ZmM1MCZhY3Rpb25CYXJIaWRkZW49dHJ1ZSZcIiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xyXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcclxuXHJcbmlmKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXHJcbn1cclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xyXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXHJcblxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgc3RvcmUsXHJcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goQXBwKV0pXHJcbn0pLiRzdGFydCgpXHJcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcblxyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4gIHN0YXRlOiB7XHJcbiAgICB4IDogJzg5N3B4JyxcclxuICAgIHkgOiAnOTI0cHgnLFxyXG4gICAgaW1nIDogJ34vYXNzZXRzL21hcHMvMjIucG5nJyxcclxuICAgIGlkIDogJzIyODcnLFxyXG4gICAgY29ycmVjdFggOiAtMjAsXHJcbiAgICBjb3JyZWN0WSA6IC0yMCxcclxuICAgIHVybCA6ICdodHRwOi8vMTkyLjE2OC4xLjUwOjgwMDAvJyBcclxuICB9LFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgY2hhbmdlWChzdGF0ZSwgbmV3WCl7XHJcbiAgICAgIHN0YXRlLnggPSBuZXdYK3N0YXRlLmNvcnJlY3RYICsgJ3B4JztcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VZKHN0YXRlLCBuZXdZKXtcclxuICAgICAgc3RhdGUueSA9IG5ld1krc3RhdGUuY29ycmVjdFkgKyAncHgnO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUltZyhzdGF0ZSwgbmV3SW1nKXtcclxuICAgICAgc3RhdGUuaW1nID0gJ34vYXNzZXRzL21hcHMvJyArIG5ld0ltZztcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VJZChzdGF0ZSwgbmV3SWQpe1xyXG4gICAgICBzdGF0ZS51cmwgPSBuZXdJZDtcclxuICAgIH0sXHJcbiAgICBjb3JyZWN0aW9uWChzdGF0ZSwgY29yWCl7XHJcbiAgICAgIHN0YXRlLmNvcnJlY3RYID0gY29yWDtcclxuICAgIH0sXHJcbiAgICBjb3JyZWN0aW9uWShzdGF0ZSxjb3JZKXtcclxuICAgICAgc3RhdGUuY29ycmVjdFkgPSBjb3JZO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVVybChzdGF0ZSwgbmV3VXJsKXtcclxuICAgICAgc3RhdGUudXJsID0gbmV3VXJsO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuXHJcbiAgfVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==