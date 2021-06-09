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
___CSS_LOADER_EXPORT___.push([module.i, "\nActionBar {\n    background-color: #53ba82;\n    color: #ffffff;\n}\n.app{\n  background-color: #333333;\n}\n.message {\n    text-align: left;\n    font-size: 20;\n    margin-left: 30px;\n}\n.btn {\n   font-size: 18;\n   vertical-align: center;\n   text-align: center;\n   height: 160px;\n   border-radius: 30%;\n   background-color: #cf7200;\n}\n.input{\n  background-color: #FF8C00;\n  border-radius: 10%;\n  color: #000000;\n  margin: 50px 30px;\n  text-align: center;\n  vertical-align: center;\n  font-size: 20;\n}\n.setting{\n  background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\n  border-radius: 40%;\n}\n", "",{"version":3,"sources":["webpack://./../components/App.vue"],"names":[],"mappings":";AA+FA;IACA,yBAAA;IACA,cAAA;AACA;AACA;EACA,yBAAA;AACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,iBAAA;AACA;AAEA;GACA,aAAA;GACA,sBAAA;GACA,kBAAA;GACA,aAAA;GACA,kBAAA;GACA,yBAAA;AACA;AAEA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;AACA;AAEA;EACA,uEAAA;EACA,kBAAA;AACA","sourcesContent":["<template>\r\n  <Page class = \"app\">\r\n    <ActionBar title=\"Поиск кабинета\"/>\r\n    <GridLayout columns=\"5*,2*\" rows=\"*,auto,auto,*,auto,auto\">\r\n      <Label text=\"кабинет:\" class=\"message\"  row=\"1\" col=\"0\"/>\r\n      <Label text=\"корпус:\" class=\"message\" row=\"1\" col=\"1\"/>\r\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"cabinet\" hint=\"кабинет\" row=\"2\" col=\"0\" />\r\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"corps\" hint=\"корпус\" row=\"2\" col=\"1\" @returnPress='request' />\r\n      <Button class='btn' @tap='request' row=\"4\" col=\"0\" text=\"найти\"/> \r\n      <Button class='btn setting' @tap='setUrl' row=\"4\" col=\"1\" /> \r\n      <Button class='btn' @tap='closeApp' row=\"5\" text=\"выход\" colSpan=\"2\"/> \r\n    </GridLayout>\r\n  </Page>\r\n</template>\r\n\r\n<script>\r\nimport page2 from './page2';\r\nimport * as application from \"@nativescript/core/application\";\r\nimport { Http } from '@nativescript/core'\r\n\r\n   export default {\r\n    data() {\r\n      return {\r\n        cabinet: '',\r\n        corps: '',\r\n      }\r\n    },\r\n    methods:{\r\n      search: function(event){\r\n        this.$showModal(page2, {\r\n          fullscreen: true,\r\n        })\r\n      },\r\n      closeApp() {\r\n        if (application.android) {\r\n          application.android.foregroundActivity.finish();\r\n        } else {\r\n          exit(0);\r\n        }\r\n      },\r\n      request(){\r\n        const id = this.cabinet.slice(0,3) + this.corps.slice(0,1) \r\n        console.log(`Id: ${id}`)\r\n\r\n        console.log(`Get request ${this.url + id}`)\r\n        Http.request({\r\n          url: this.$store.state.url + id,\r\n          method: 'get'\r\n        }).then(\r\n          (response) => {\r\n            if (response.statusCode != 200){\r\n              alert({ \r\n                  title: \"Ошибка\",\r\n                  message: \"Кабинет не найден\",\r\n                  okButtonText: \"OK\"})  \r\n            }\r\n            else{\r\n              console.log(`Получение результата:`)\r\n              const content = response.content.toJSON()\r\n              this.$store.commit('changeId', content.id);\r\n              this.$store.commit('changeX', content.x);\r\n              this.$store.commit('changeY', content.y);\r\n              this.$store.commit('changeImg', content.info);\r\n              console.log(`x: ${this.$store.state.x} y: ${this.$store.state.y} \r\n                          id: ${this.$store.state.id} img: ${this.$store.state.img}`)\r\n              this.search();\r\n            }\r\n          },\r\n          (e) => {\r\n            console.log(`Ошибка ${e}`);\r\n             alert({ \r\n                  title: \"Ошибка\",\r\n                  message: \"Проверьте соединение с интернетом\",\r\n                  okButtonText: \"OK\"})\r\n          }\r\n        )\r\n      },\r\n      setUrl(){\r\n        prompt({\r\n          title: \"Настройки\",\r\n          message: \"Введите адрес сервера:\",\r\n          okButtonText: \"ок\",\r\n          cancelButtonText: \"отмена\",\r\n          defaultText: this.$store.state.url,\r\n        }).then(result => {\r\n          console.log(`Set url: ${result.result}, url: ${result.text}`);\r\n          this.$store.commit('changeUrl', result.text);\r\n          this.correctionX();\r\n        });\r\n      },\r\n    }\r\n  }\r\n</script>\r\n\r\n<style>\r\n    ActionBar {\r\n        background-color: #53ba82;\r\n        color: #ffffff;\r\n    }\r\n    .app{\r\n      background-color: #333333;\r\n    }\r\n\r\n    .message {\r\n        text-align: left;\r\n        font-size: 20;\r\n        margin-left: 30px;\r\n    }\r\n\r\n    .btn {\r\n       font-size: 18;\r\n       vertical-align: center;\r\n       text-align: center;\r\n       height: 160px;\r\n       border-radius: 30%;\r\n       background-color: #cf7200;\r\n    }\r\n\r\n    .input{\r\n      background-color: #FF8C00;\r\n      border-radius: 10%;\r\n      color: #000000;\r\n      margin: 50px 30px;\r\n      text-align: center;\r\n      vertical-align: center;\r\n      font-size: 20;\r\n    }\r\n\r\n    .setting{\r\n      background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\r\n      border-radius: 40%;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
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
        url: this.$store.state.url + id,
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
        defaultText: this.$store.state.url
      }).then(result => {
        console.log("Set url: ".concat(result.result, ", url: ").concat(result.text));
        this.$store.commit('changeUrl', result.text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTlmNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT8zZTE3Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvcGFnZTIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83YjBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzNlNGYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ODMzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/YjM3NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT85ZjkwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzUzNGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlMi52dWU/N2RiYSIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOlsiQXBwIiwiVnVlRGV2dG9vbHMiLCJUTlNfRU5WIiwiVnVlIiwidXNlIiwic3RvcmUiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJ4IiwieSIsImltZyIsImlkIiwiY29ycmVjdFgiLCJjb3JyZWN0WSIsInVybCIsIm11dGF0aW9ucyIsImNoYW5nZVgiLCJuZXdYIiwiY2hhbmdlWSIsIm5ld1kiLCJjaGFuZ2VJbWciLCJuZXdJbWciLCJjaGFuZ2VJZCIsIm5ld0lkIiwiY29ycmVjdGlvblgiLCJjb3JYIiwiY29ycmVjdGlvblkiLCJjb3JZIiwiY2hhbmdlVXJsIiwibmV3VXJsIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsZ0JBQWdCLGdDQUFnQyxxQkFBcUIsR0FBRyxPQUFPLDhCQUE4QixHQUFHLFlBQVksdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxRQUFRLG1CQUFtQiw0QkFBNEIsd0JBQXdCLG1CQUFtQix3QkFBd0IsK0JBQStCLEdBQUcsU0FBUyw4QkFBOEIsdUJBQXVCLG1CQUFtQixzQkFBc0IsdUJBQXVCLDJCQUEyQixrQkFBa0IsR0FBRyxXQUFXLDhFQUE4RSx1QkFBdUIsR0FBRyxTQUFTLG9GQUFvRixNQUFNLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsZzZCQUFnNkIsb0VBQW9FLFlBQVksT0FBTyxxREFBcUQsZ0JBQWdCLGtCQUFrQix5REFBeUQsU0FBUyxrQkFBa0Isa0NBQWtDLG9DQUFvQyw0Q0FBNEMsWUFBWSx1QkFBdUIsc0NBQXNDLDhEQUE4RCxhQUFhLE9BQU8sc0JBQXNCLGFBQWEsV0FBVyxxQkFBcUIsc0dBQXNHLEdBQUcsNkNBQTZDLGNBQWMsNEJBQTRCLHNGQUFzRixvQ0FBb0MsZ0RBQWdELHlCQUF5Qix5SUFBeUksb0JBQW9CLHFCQUFxQiw4S0FB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QUFDWCxLQUFELEVBQVFZLElBQVIsRUFBYTtBQUNsQlosV0FBSyxDQUFDRSxDQUFOLEdBQVVVLElBQUksR0FBQ1osS0FBSyxDQUFDTSxRQUFYLEdBQXNCLElBQWhDO0FBQ0QsS0FOUTs7QUFPVE8sYUFBUyxDQUFDYixLQUFELEVBQVFjLE1BQVIsRUFBZTtBQUN0QmQsV0FBSyxDQUFDRyxHQUFOLEdBQVksbUJBQW1CVyxNQUEvQjtBQUNELEtBVFE7O0FBVVRDLFlBQVEsQ0FBQ2YsS0FBRCxFQUFRZ0IsS0FBUixFQUFjO0FBQ3BCaEIsV0FBSyxDQUFDTyxHQUFOLEdBQVlTLEtBQVo7QUFDRCxLQVpROztBQWFUQyxlQUFXLENBQUNqQixLQUFELEVBQVFrQixJQUFSLEVBQWE7QUFDdEJsQixXQUFLLENBQUNLLFFBQU4sR0FBaUJhLElBQWpCO0FBQ0QsS0FmUTs7QUFnQlRDLGVBQVcsQ0FBQ25CLEtBQUQsRUFBT29CLElBQVAsRUFBWTtBQUNyQnBCLFdBQUssQ0FBQ00sUUFBTixHQUFpQmMsSUFBakI7QUFDRCxLQWxCUTs7QUFtQlRDLGFBQVMsQ0FBQ3JCLEtBQUQsRUFBUXNCLE1BQVIsRUFBZTtBQUN0QnRCLFdBQUssQ0FBQ08sR0FBTixHQUFZZSxNQUFaO0FBQ0Q7O0FBckJRLEdBVmlCO0FBaUM1QkMsU0FBTyxFQUFFO0FBakNtQixDQUFmLENBQWYsRTs7Ozs7OztBQ0xBLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5hcHB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG4ubWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYnRuIHtcXG4gICBmb250LXNpemU6IDE4O1xcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMTYwcHg7XFxuICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxufVxcbi5pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5zZXR0aW5ne1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0ZBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtHQUNBLGFBQUE7R0FDQSxzQkFBQTtHQUNBLGtCQUFBO0dBQ0EsYUFBQTtHQUNBLGtCQUFBO0dBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8UGFnZSBjbGFzcyA9IFxcXCJhcHBcXFwiPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcXFwiLz5cXHJcXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiNSosMipcXFwiIHJvd3M9XFxcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXFxcIj5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwi0LrQsNCx0LjQvdC10YI6XFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIi8+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcItC60L7RgNC/0YPRgTpcXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIvPlxcclxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY2FiaW5ldFxcXCIgaGludD1cXFwi0LrQsNCx0LjQvdC10YJcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcclxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY29ycHNcXFwiIGhpbnQ9XFxcItC60L7RgNC/0YPRgVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIEByZXR1cm5QcmVzcz0ncmVxdWVzdCcgLz5cXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLQvdCw0LnRgtC4XFxcIi8+IFxcclxcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0biBzZXR0aW5nJyBAdGFwPSdzZXRVcmwnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiAvPiBcXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XFxcIjVcXFwiIHRleHQ9XFxcItCy0YvRhdC+0LRcXFwiIGNvbFNwYW49XFxcIjJcXFwiLz4gXFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gIDwvUGFnZT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xcclxcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXFxcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblxcXCI7XFxyXFxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSdcXHJcXG5cXHJcXG4gICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIGNhYmluZXQ6ICcnLFxcclxcbiAgICAgICAgY29ycHM6ICcnLFxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgc2VhcmNoOiBmdW5jdGlvbihldmVudCl7XFxyXFxuICAgICAgICB0aGlzLiRzaG93TW9kYWwocGFnZTIsIHtcXHJcXG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcXHJcXG4gICAgICAgIH0pXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBjbG9zZUFwcCgpIHtcXHJcXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XFxyXFxuICAgICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmZpbmlzaCgpO1xcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgZXhpdCgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHJlcXVlc3QoKXtcXHJcXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jYWJpbmV0LnNsaWNlKDAsMykgKyB0aGlzLmNvcnBzLnNsaWNlKDAsMSkgXFxyXFxuICAgICAgICBjb25zb2xlLmxvZyhgSWQ6ICR7aWR9YClcXHJcXG5cXHJcXG4gICAgICAgIGNvbnNvbGUubG9nKGBHZXQgcmVxdWVzdCAke3RoaXMudXJsICsgaWR9YClcXHJcXG4gICAgICAgIEh0dHAucmVxdWVzdCh7XFxyXFxuICAgICAgICAgIHVybDogdGhpcy4kc3RvcmUuc3RhdGUudXJsICsgaWQsXFxyXFxuICAgICAgICAgIG1ldGhvZDogJ2dldCdcXHJcXG4gICAgICAgIH0pLnRoZW4oXFxyXFxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9IDIwMCl7XFxyXFxuICAgICAgICAgICAgICBhbGVydCh7IFxcclxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwi0J7RiNC40LHQutCwXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcXFwi0JrQsNCx0LjQvdC10YIg0L3QtSDQvdCw0LnQtNC10L1cXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXFxcIk9LXFxcIn0pICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgZWxzZXtcXHJcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQn9C+0LvRg9GH0LXQvdC40LUg0YDQtdC30YPQu9GM0YLQsNGC0LA6YClcXHJcXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpXFxyXFxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUlkJywgY29udGVudC5pZCk7XFxyXFxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVgnLCBjb250ZW50LngpO1xcclxcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VZJywgY29udGVudC55KTtcXHJcXG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlSW1nJywgY29udGVudC5pbmZvKTtcXHJcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB4OiAke3RoaXMuJHN0b3JlLnN0YXRlLnh9IHk6ICR7dGhpcy4kc3RvcmUuc3RhdGUueX0gXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pZH0gaW1nOiAke3RoaXMuJHN0b3JlLnN0YXRlLmltZ31gKVxcclxcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke2V9YCk7XFxyXFxuICAgICAgICAgICAgIGFsZXJ0KHsgXFxyXFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCLQntGI0LjQsdC60LBcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFxcXCLQn9GA0L7QstC10YDRjNGC0LUg0YHQvtC10LTQuNC90LXQvdC40LUg0YEg0LjQvdGC0LXRgNC90LXRgtC+0LxcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXFxcIk9LXFxcIn0pXFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIClcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHNldFVybCgpe1xcclxcbiAgICAgICAgcHJvbXB0KHtcXHJcXG4gICAgICAgICAgdGl0bGU6IFxcXCLQndCw0YHRgtGA0L7QudC60LhcXFwiLFxcclxcbiAgICAgICAgICBtZXNzYWdlOiBcXFwi0JLQstC10LTQuNGC0LUg0LDQtNGA0LXRgSDRgdC10YDQstC10YDQsDpcXFwiLFxcclxcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCLQvtC6XFxcIixcXHJcXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXFxcItC+0YLQvNC10L3QsFxcXCIsXFxyXFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLiRzdG9yZS5zdGF0ZS51cmwsXFxyXFxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XFxyXFxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXQgdXJsOiAke3Jlc3VsdC5yZXN1bHR9LCB1cmw6ICR7cmVzdWx0LnRleHR9YCk7XFxyXFxuICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlVXJsJywgcmVzdWx0LnRleHQpO1xcclxcbiAgICAgICAgICB0aGlzLmNvcnJlY3Rpb25YKCk7XFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICB9LFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICBBY3Rpb25CYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcHB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVzc2FnZSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgIGhlaWdodDogMTYwcHg7XFxyXFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5wdXR7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEMwMDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2V0dGluZ3tcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgI2M0NmMwMCBjZW50ZXIgdXJsKFxcXCJ+L2Fzc2V0cy9pbWFnZXMvc2V0dGluZy5wbmdcXFwiKTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0FwcC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFwcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuLm1lc3NhZ2Uge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBjb2xvcjogI2RmZDdkNztcXG59XFxuLmJ0biB7XFxuICAgICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgbWFyZ2luOiA1MHB4IDcwcHg7XFxuICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXG59XFxuLm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlICMwNDAwZmY7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDgwcHg7IFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvcGFnZTIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4QkE7SUFDQSx5QkFBQTtBQUNBO0FBQ0E7UUFDQSxzQkFBQTtRQUNBLGtCQUFBO1FBQ0EsYUFBQTtRQUNBLGNBQUE7QUFDQTtBQUNBO09BQ0EsYUFBQTtPQUNBLGtCQUFBO09BQ0EsYUFBQTtPQUNBLGlCQUFBO09BQ0EsYUFBQTtPQUNBLGtCQUFBO09BQ0EseUJBQUE7QUFDQTtBQUNBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0lBQ0EsYUFBQTtBQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsWUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcclxcbjxQYWdlIGNsYXNzPVxcXCJhcHBcXFwiPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLGF1dG9cXFwiPlxcclxcbiAgICA8QWJzb2x1dGVMYXlvdXQgcm93PVxcXCIwXFxcIj5cXHJcXG4gICAgICA8SW1hZ2UgOnNyYz10aGlzLiRzdG9yZS5zdGF0ZS5pbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiB0b3A9XFxcIlxcXCIgbGVmdD1cXFwiMFxcXCIgLz5cXHJcXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiLlxcXCIgY2xhc3M9XFxcIm1hcmtcXFwiIDp0b3A9J3RoaXMuJHN0b3JlLnN0YXRlLnknIDpsZWZ0PSd0aGlzLiRzdG9yZS5zdGF0ZS54JyAvPlxcclxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2dvYmFjaycgcm93PVxcXCIxXFxcIiB0ZXh0PVxcXCLQvdCw0LfQsNC0XFxcIi8+IFxcclxcbjwvR3JpZExheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT4gXFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xcclxcblxcclxcbiAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgZ29iYWNrOiBmdW5jdGlvbihldmVudCl7XFxyXFxuICAgICAgICB0aGlzLiRzaG93TW9kYWwoQXBwLCB7XFxyXFxuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmFwcHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgICAgICBjb2xvcjogI2RmZDdkNztcXHJcXG4gICAgfSAgIFxcclxcbiAuYnRuIHtcXHJcXG4gICAgICAgZm9udC1zaXplOiAyNTtcXHJcXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICBtYXJnaW46IDUwcHggNzBweDtcXHJcXG4gICAgICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MjAwO1xcclxcbiAgICB9ICBcXHJcXG4gIC5tYXJrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSAjMDQwMGZmO1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgfVxcclxcbiAgLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwODBweDsgXFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIGNsYXNzID0gXCJhcHBcIj5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcIi8+XHJcbiAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNSosMipcIiByb3dzPVwiKixhdXRvLGF1dG8sKixhdXRvLGF1dG9cIj5cclxuICAgICAgPExhYmVsIHRleHQ9XCLQutCw0LHQuNC90LXRgjpcIiBjbGFzcz1cIm1lc3NhZ2VcIiAgcm93PVwiMVwiIGNvbD1cIjBcIi8+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwi0LrQvtGA0L/Rg9GBOlwiIGNsYXNzPVwibWVzc2FnZVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIvPlxyXG4gICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXRcIiB2LW1vZGVsPVwiY2FiaW5ldFwiIGhpbnQ9XCLQutCw0LHQuNC90LXRglwiIHJvdz1cIjJcIiBjb2w9XCIwXCIgLz5cclxuICAgICAgPFRleHRGaWVsZCBrZXlib2FyZFR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImlucHV0XCIgdi1tb2RlbD1cImNvcnBzXCIgaGludD1cItC60L7RgNC/0YPRgVwiIHJvdz1cIjJcIiBjb2w9XCIxXCIgQHJldHVyblByZXNzPSdyZXF1ZXN0JyAvPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cIjRcIiBjb2w9XCIwXCIgdGV4dD1cItC90LDQudGC0LhcIi8+IFxyXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4gc2V0dGluZycgQHRhcD0nc2V0VXJsJyByb3c9XCI0XCIgY29sPVwiMVwiIC8+IFxyXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XCI1XCIgdGV4dD1cItCy0YvRhdC+0LRcIiBjb2xTcGFuPVwiMlwiLz4gXHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnXHJcblxyXG4gICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhYmluZXQ6ICcnLFxyXG4gICAgICAgIGNvcnBzOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICBzZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICB0aGlzLiRzaG93TW9kYWwocGFnZTIsIHtcclxuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY2xvc2VBcHAoKSB7XHJcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcclxuICAgICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmZpbmlzaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBleGl0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcmVxdWVzdCgpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jYWJpbmV0LnNsaWNlKDAsMykgKyB0aGlzLmNvcnBzLnNsaWNlKDAsMSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coYElkOiAke2lkfWApXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBHZXQgcmVxdWVzdCAke3RoaXMudXJsICsgaWR9YClcclxuICAgICAgICBIdHRwLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLiRzdG9yZS5zdGF0ZS51cmwgKyBpZCxcclxuICAgICAgICAgIG1ldGhvZDogJ2dldCdcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9IDIwMCl7XHJcbiAgICAgICAgICAgICAgYWxlcnQoeyBcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi0J7RiNC40LHQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi0JrQsNCx0LjQvdC10YIg0L3QtSDQvdCw0LnQtNC10L1cIixcclxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJ9KSAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0J/QvtC70YPRh9C10L3QuNC1INGA0LXQt9GD0LvRjNGC0LDRgtCwOmApXHJcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKClcclxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUlkJywgY29udGVudC5pZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VYJywgY29udGVudC54KTtcclxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVknLCBjb250ZW50LnkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlSW1nJywgY29udGVudC5pbmZvKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeDogJHt0aGlzLiRzdG9yZS5zdGF0ZS54fSB5OiAke3RoaXMuJHN0b3JlLnN0YXRlLnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAke3RoaXMuJHN0b3JlLnN0YXRlLmlkfSBpbWc6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaW1nfWApXHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtlfWApO1xyXG4gICAgICAgICAgICAgYWxlcnQoeyBcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi0J7RiNC40LHQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi0J/RgNC+0LLQtdGA0YzRgtC1INGB0L7QtdC00LjQvdC10L3QuNC1INGBINC40L3RgtC10YDQvdC10YLQvtC8XCIsXHJcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wifSlcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldFVybCgpe1xyXG4gICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCLQndCw0YHRgtGA0L7QudC60LhcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwi0JLQstC10LTQuNGC0LUg0LDQtNGA0LXRgSDRgdC10YDQstC10YDQsDpcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCLQvtC6XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcItC+0YLQvNC10L3QsFwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMuJHN0b3JlLnN0YXRlLnVybCxcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgU2V0IHVybDogJHtyZXN1bHQucmVzdWx0fSwgdXJsOiAke3Jlc3VsdC50ZXh0fWApO1xyXG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VVcmwnLCByZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3Rpb25YKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIEFjdGlvbkJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIC5hcHB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QzAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBtYXJnaW46IDUwcHggMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXR0aW5ne1xyXG4gICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgI2M0NmMwMCBjZW50ZXIgdXJsKFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXCIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XHJcbjxQYWdlIGNsYXNzPVwiYXBwXCI+XHJcbjxTdGFja0xheW91dD5cclxuPEdyaWRMYXlvdXQgcm93cz1cIiosYXV0b1wiPlxyXG4gICAgPEFic29sdXRlTGF5b3V0IHJvdz1cIjBcIj5cclxuICAgICAgPEltYWdlIDpzcmM9dGhpcy4kc3RvcmUuc3RhdGUuaW1nIGNsYXNzPVwiaW1hZ2VcIiBzdHJldGNoPVwibm9uZVwiIHRvcD1cIlwiIGxlZnQ9XCIwXCIgLz5cclxuICAgICAgPExhYmVsIHRleHQ9XCIuXCIgY2xhc3M9XCJtYXJrXCIgOnRvcD0ndGhpcy4kc3RvcmUuc3RhdGUueScgOmxlZnQ9J3RoaXMuJHN0b3JlLnN0YXRlLngnIC8+XHJcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxyXG4gICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyBAdGFwPSdnb2JhY2snIHJvdz1cIjFcIiB0ZXh0PVwi0L3QsNC30LDQtFwiLz4gXHJcbjwvR3JpZExheW91dD5cclxuPC9TdGFja0xheW91dD5cclxuPC9QYWdlPiBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIGdvYmFjazogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChBcHAsIHtcclxuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmFwcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLm1lc3NhZ2Uge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgY29sb3I6ICNkZmQ3ZDc7XHJcbiAgICB9ICAgXHJcbiAuYnRuIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgbWFyZ2luOiA1MHB4IDcwcHg7XHJcbiAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcclxuICAgIH0gIFxyXG4gIC5tYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiB0aGljayBkb3VibGUgIzA0MDBmZjtcclxuICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgfVxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTA4MHB4OyBcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi0J/QvtC40YHQuiDQutCw0LHQuNC90LXRgtCwXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjUqLDIqXCIsIHJvd3M6IFwiKixhdXRvLGF1dG8sKixhdXRvLGF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwi0LrQsNCx0LjQvdC10YI6XCIsIHJvdzogXCIxXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCLQutC+0YDQv9GD0YE6XCIsIHJvdzogXCIxXCIsIGNvbDogXCIxXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIGhpbnQ6IFwi0LrQsNCx0LjQvdC10YJcIixcbiAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgY29sOiBcIjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2FiaW5ldCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5jYWJpbmV0ID0gJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYWJpbmV0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBoaW50OiBcItC60L7RgNC/0YPRgVwiLFxuICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5yZXF1ZXN0IH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvcnBzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmNvcnBzID0gJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb3Jwc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNFwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcItC90LDQudGC0LhcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucmVxdWVzdCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIHNldHRpbmdcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI0XCIsIGNvbDogXCIxXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNldFVybCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNVwiLCB0ZXh0OiBcItCy0YvRhdC+0LRcIiwgY29sU3BhbjogXCIyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNsb3NlQXBwIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqLGF1dG9cIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiQWJzb2x1dGVMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGhpcy4kc3RvcmUuc3RhdGUuaW1nLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLiRzdG9yZS5zdGF0ZS55LFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuJHN0b3JlLnN0YXRlLnhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwi0L3QsNC30LDQtFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29iYWNrIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL21haW4uanNcIjogXCIuL21haW4uanNcIixcblx0XCIuL3N0b3JlLmpzXCI6IFwiLi9zdG9yZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXEVkdVxcXFxQcm9qZWN0XFxcXGNvdXJzZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWJhNWVkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NWJhNWVkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYWdlMi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODAxN2ZjNTAmYWN0aW9uQmFySGlkZGVuPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wYWdlMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXEVkdVxcXFxQcm9qZWN0XFxcXGNvdXJzZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MDE3ZmM1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MDE3ZmM1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MDE3ZmM1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwMTdmYzUwJmFjdGlvbkJhckhpZGRlbj10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgwMTdmYzUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3BhZ2UyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYWdlMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYWdlMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwMTdmYzUwJmFjdGlvbkJhckhpZGRlbj10cnVlJlwiIiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXHJcbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xyXG5cclxuaWYoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcclxufVxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXHJcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcclxuXHJcblxyXG5uZXcgVnVlKHtcclxuICBzdG9yZSxcclxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcclxufSkuJHN0YXJ0KClcclxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcclxuXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgc3RhdGU6IHtcclxuICAgIHggOiAnODk3cHgnLFxyXG4gICAgeSA6ICc5MjRweCcsXHJcbiAgICBpbWcgOiAnfi9hc3NldHMvbWFwcy8yMi5wbmcnLFxyXG4gICAgaWQgOiAnMjI4NycsXHJcbiAgICBjb3JyZWN0WCA6IC0yMCxcclxuICAgIGNvcnJlY3RZIDogLTIwLFxyXG4gICAgdXJsIDogJ2h0dHA6Ly8xOTIuMTY4LjEuNTA6ODAwMC8nIFxyXG4gIH0sXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICBjaGFuZ2VYKHN0YXRlLCBuZXdYKXtcclxuICAgICAgc3RhdGUueCA9IG5ld1grc3RhdGUuY29ycmVjdFggKyAncHgnO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVkoc3RhdGUsIG5ld1kpe1xyXG4gICAgICBzdGF0ZS55ID0gbmV3WStzdGF0ZS5jb3JyZWN0WSArICdweCc7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlSW1nKHN0YXRlLCBuZXdJbWcpe1xyXG4gICAgICBzdGF0ZS5pbWcgPSAnfi9hc3NldHMvbWFwcy8nICsgbmV3SW1nO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUlkKHN0YXRlLCBuZXdJZCl7XHJcbiAgICAgIHN0YXRlLnVybCA9IG5ld0lkO1xyXG4gICAgfSxcclxuICAgIGNvcnJlY3Rpb25YKHN0YXRlLCBjb3JYKXtcclxuICAgICAgc3RhdGUuY29ycmVjdFggPSBjb3JYO1xyXG4gICAgfSxcclxuICAgIGNvcnJlY3Rpb25ZKHN0YXRlLGNvclkpe1xyXG4gICAgICBzdGF0ZS5jb3JyZWN0WSA9IGNvclk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVXJsKHN0YXRlLCBuZXdVcmwpe1xyXG4gICAgICBzdGF0ZS51cmwgPSBuZXdVcmw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWN0aW9uczoge1xyXG5cclxuICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9