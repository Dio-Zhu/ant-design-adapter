registerLibrary(/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _zzjGenadapter = __webpack_require__(3);

window.EnvConfig = window.EnvConfig || {}; /**
                                            * 统一对外部的依赖入口（所有第三方依赖）
                                            */

var SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;

module.exports = {
    UiLibrary: _zzjGenadapter.UiLibrary,
    ViewAdapter: _zzjGenadapter.ViewAdapter,
    PropAdapter: _zzjGenadapter.PropAdapter,
    EventAdapter: _zzjGenadapter.EventAdapter,
    MetaType: _zzjGenadapter.MetaType,
    LogicUtils: _zzjGenadapter.LogicUtils,
    SUPPORT_SERVER: SUPPORT_SERVER
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * UI枚举定义
 */
//常用
var UiTypeDef = {}; //定义uitype值,uitype标识元素类型
var UiTitleDef = {}; //定义uititle值,uititle标识元素名称
var UiDefaultDef = {}; //定义uidefault值,uidefault预置元素默认属性值
var UiIconDef = {}; //定义uiicon值,uiicon为元素图标名称


UiTypeDef.button = 'Button';
UiTitleDef.button = '按钮';
UiIconDef.button = 'icon-anniu';

UiTypeDef.row = 'Row';
UiTitleDef.row = '24格布局';
UiIconDef.row = 'icon-zhagebuju';
UiTypeDef.col = 'Col';
UiTitleDef.col = '格子';

module.exports = {
    UiTypeDef: UiTypeDef,
    UiTitleDef: UiTitleDef,
    UiDefaultDef: UiDefaultDef,
    UiIconDef: UiIconDef
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexDeps = __webpack_require__(0);

var _Defines = __webpack_require__(1);

var _Defines2 = _interopRequireDefault(_Defines);

var _ButtonAdapter = __webpack_require__(5);

var _ButtonAdapter2 = _interopRequireDefault(_ButtonAdapter);

var _RowAdapter = __webpack_require__(6);

var _RowAdapter2 = _interopRequireDefault(_RowAdapter);

var _ColAdapter = __webpack_require__(8);

var _ColAdapter2 = _interopRequireDefault(_ColAdapter);

var _ButtonViewAdapter = __webpack_require__(9);

var _ButtonViewAdapter2 = _interopRequireDefault(_ButtonViewAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UiTypeDef = _Defines2.default.UiTypeDef,
    UiTitleDef = _Defines2.default.UiTitleDef,
    UiIconDef = _Defines2.default.UiIconDef,
    UiDefaultDef = _Defines2.default.UiDefaultDef;

var uiObjects = {};
for (var key in UiTypeDef) {
    uiObjects[key] = uiObjects[key] || {};
    uiObjects[key].uitype = UiTypeDef[key];
}
for (var _key in UiTitleDef) {
    uiObjects[_key] = uiObjects[_key] || {};
    uiObjects[_key].uititile = UiTitleDef[_key];
}
for (var _key2 in UiIconDef) {
    uiObjects[_key2] = uiObjects[_key2] || {};
    uiObjects[_key2].uiicon = UiIconDef[_key2];
}
for (var _key3 in UiDefaultDef) {
    uiObjects[_key3] = uiObjects[_key3] || {};
    uiObjects[_key3].uidefault = UiDefaultDef[_key3];
}
var myLibrary = new _indexDeps.UiLibrary('ant-design-adapter');
//----------------组件定义------------------
for (var _key4 in uiObjects) {
    var obj = uiObjects[_key4];
    myLibrary.addDefine(_key4, obj.uitype, obj.uititile, obj.uiicon, obj.uidefault);
}
//----------------属性适配--------------------
myLibrary.addPropAdapter(UiTypeDef.button, _ButtonAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.row, _RowAdapter2.default);
myLibrary.addPropAdapter(UiTypeDef.col, _ColAdapter2.default);
//------------事件适配---------------
myLibrary.addEventAdapter(UiTypeDef.button, _indexDeps.EventAdapter);
//------------视图适配----------------
myLibrary.addViewAdapter(UiTypeDef.button, _ButtonViewAdapter2.default);
exports.default = myLibrary;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["GenAdapter"] = factory();else root["GenAdapter"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 11);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 基础数据转换适配器
             */
            var BaseDataAdapter = function () {
                /**
                 * @desc 构建对象
                 * @param primaryKey 主键/组件标识
                 */
                function BaseDataAdapter(primaryKey) {
                    _classCallCheck(this, BaseDataAdapter);

                    this.primaryKey = primaryKey;
                }

                /**
                 * @desc 获取主键/组件标识
                 * @return {string}
                 */

                _createClass(BaseDataAdapter, [{
                    key: "getPrimaryKey",
                    value: function getPrimaryKey() {
                        return this.primaryKey;
                    }

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 构建适配页面(元数据)
                     * @param options {
                     *     tplNode,     //当前数据节点值
                     *     tplTree,     //当前数据树
                     *     productType, //所属产品类型
                     *     currApp,     //所属应用信息
                     *     currPage,    //所属页面信息
                     *     pageList     //所属应用下的全部页面信息
                     * }
                     * @return {Array} 元数据数组集合 @link 请参考PageMeta说明
                     */

                }, {
                    key: "onPageMetas",
                    value: function onPageMetas(options) {}

                    /**
                     * @desc 构建适配页面(属性)
                     * @param options {无}
                     * @return {object} 适配页面的属性 @link 请参考PageProp说明
                     */

                }, {
                    key: "onPageProps",
                    value: function onPageProps(options) {}

                    /**
                     *  @desc 新建数据节点时触发
                     *  @param options:{
                     *      tplTree,        //当前数据树
                     *      tplNode,        //当前添加的数据节点对象
                     *      tplParentNode   //当前对应的父节点对象
                     *   }
                     *   @return {无}
                     */

                }, {
                    key: "onCreateData",
                    value: function onCreateData(options) {}

                    /**
                     * @desc 将数据转换为配置值
                     * @param options {
                     *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
                     *     tplNode,     //当前数据节点对象
                     *     tplTree,     //当前数据树
                     *     productType, //所属产品类型
                     *     currApp,     //所属应用信息
                     *     currPage,    //所属页面信息
                     *     pageList     //所属应用下的全部页面信息
                     * }
                     * @return {object} 适配页面的表单值
                     */

                }, {
                    key: "onDataToValue",
                    value: function onDataToValue(options) {}

                    /**
                     * @desc 将配置值转换为数据
                     * @param options {
                     *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
                     *     formData,    //变更后的配置值
                     *     tplPreNode,  //上一次的数据值
                     *     tplNode,     //当前数据节点对象
                     *     tplTree,     //当前数据树
                     *     productType, //所属产品类型
                     *     currApp,     //所属应用信息
                     *     currPage,    //所属页面信息
                     *     pageList     //所属应用下的全部页面信息
                     * }
                     * @return {无}
                     */

                }, {
                    key: "onValueToData",
                    value: function onValueToData(options) {}
                }]);

                return BaseDataAdapter;
            }();

            exports.default = BaseDataAdapter;

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * 适配页面元数据的输入类型定义
             */

            module.exports = {
                /** css 类型-已过期begin */
                // Background: 'Background',
                // Border: 'Border',
                // Radius: 'Radius',
                // Font: 'Font',
                // Margin: 'Margin',
                // Size: 'Size',
                // Padding: 'Padding',
                /***css 类型-已过期end***/
                /** 基本类型 */
                Bool: 'Bool',
                Checkbox: 'Checkbox',
                Color: 'Color',
                Select: 'Select',
                Text: 'Text',
                Icon: 'Icon',
                Number: 'Number',
                Date: 'Date',
                Time: 'Time',
                Refer: 'Refer',
                SelectTree: 'SelectTree',
                Textarea: 'Textarea',
                TitleGroup: 'TitleGroup', //表头合并配置
                EventActions: 'EventActions', //组织事件动作配置
                MathFormula: 'MathFormula', //计算公式列配置
                LogicFormula: 'LogicFormula', //逻辑公式配置
                EditorIcons: 'EditorIcons',
                Pagination: 'Pagination', //分页配置
                SwitchText: 'SwitchText',
                EnumSelect: 'EnumSelect',
                ReferEditRelation: 'ReferEditRelation', // 参照编辑关联项
                LocalData: 'LocalData', //数据表格本地数据源配置
                RowMenu: 'RowMenu',
                FilterAreaConfig: 'FilterAreaConfig',
                EChartData: 'EChartData'
            };

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 基础视图转换适配器
             */
            var BaseViewAdapter = function () {
                /**
                 * 构建对象
                 * @param primaryKey 主键/组件标识
                 */
                function BaseViewAdapter(primaryKey) {
                    _classCallCheck(this, BaseViewAdapter);

                    this.primaryKey = primaryKey;
                }

                /**
                 * 获取主键/组件标识
                 * @return {string}
                 */

                _createClass(BaseViewAdapter, [{
                    key: "getPrimaryKey",
                    value: function getPrimaryKey() {
                        return this.primaryKey;
                    }
                }]);

                return BaseViewAdapter;
            }();

            exports.default = BaseViewAdapter;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseViewAdapter2 = __webpack_require__(2);

            var _BaseViewAdapter3 = _interopRequireDefault(_BaseViewAdapter2);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            } /**
               * 视图转换适配器
               */

            var ViewAdapter = function (_BaseViewAdapter) {
                _inherits(ViewAdapter, _BaseViewAdapter);

                function ViewAdapter() {
                    _classCallCheck(this, ViewAdapter);

                    return _possibleConstructorReturn(this, (ViewAdapter.__proto__ || Object.getPrototypeOf(ViewAdapter)).apply(this, arguments));
                }

                _createClass(ViewAdapter, [{
                    key: "onDataView",

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 构建数据节点的显示视图
                     * @param options {
                     *     tplNode,     //当前数据节点对象
                     *     tplTree,     //当前数据树
                     * }
                     * @return {Array} 视图元数据集合 @link 请参考ViewMeta说明
                     */
                    value: function onDataView(options) {}

                    /**
                     *  @desc 当前数据节点下添加子数据节点时的校验
                     *  @param options:{
                     *      tplTree,     //当前数据树
                     *      tplNode,     //当前数据节点对象
                     *      tplChildNode //即将添加的子数据节点对象
                     *   }
                     *   @return {Object} 校验元数据视图 @link 请参考ValidMeta说明
                     */

                }, {
                    key: "onDataValid",
                    value: function onDataValid(options) {}
                }]);

                return ViewAdapter;
            }(_BaseViewAdapter3.default);

            exports.default = ViewAdapter;

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseDataAdapter2 = __webpack_require__(0);

            var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

            var _PropMeta = __webpack_require__(5);

            var _PropMeta2 = _interopRequireDefault(_PropMeta);

            var _PropDataToValue = __webpack_require__(6);

            var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

            var _PropValueToData = __webpack_require__(7);

            var _PropValueToData2 = _interopRequireDefault(_PropValueToData);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * 属性转换适配器
             */
            var PropAdapter = function (_BaseDataAdapter) {
                _inherits(PropAdapter, _BaseDataAdapter);

                function PropAdapter() {
                    _classCallCheck(this, PropAdapter);

                    return _possibleConstructorReturn(this, (PropAdapter.__proto__ || Object.getPrototypeOf(PropAdapter)).apply(this, arguments));
                }

                _createClass(PropAdapter, [{
                    key: 'onPageMetas',

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */
                    value: function onPageMetas(options) {
                        return (0, _PropMeta2.default)(options);
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onPageProps',
                    value: function onPageProps(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onCreateData',
                    value: function onCreateData(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onDataToValue',
                    value: function onDataToValue(options) {
                        return (0, _PropDataToValue2.default)(options);
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onValueToData',
                    value: function onValueToData(options) {
                        (0, _PropValueToData2.default)(options);
                    }
                }]);

                return PropAdapter;
            }(_BaseDataAdapter3.default);

            exports.default = PropAdapter;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * 基础的通用属性定义
             */

            var MetaType = __webpack_require__(1);
            window.EnvConfig = window.EnvConfig || {};
            var SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;
            var PRODUCT_TYPE_PAGE_SIMPLE = 2;
            module.exports = function (options) {
                var productType = options.productType,
                    tplNode = options.tplNode,
                    currPage = options.currPage;

                var PropMeta = [{
                    name: 'uikey',
                    label: '键值',
                    type: MetaType.Text,
                    props: {},
                    readOnly: !!(productType == PRODUCT_TYPE_PAGE_SIMPLE && currPage && currPage.isDevelopment !== 1),
                    defaultValue: ''
                }, {
                    name: 'uititle',
                    label: '名称',
                    type: MetaType.Text,
                    props: {},
                    defaultValue: ''
                }];
                if (tplNode && tplNode.MetaType == "YYPage") {
                    PropMeta.push({
                        name: 'themeClassName',
                        label: '页面风格',
                        help: '主题样式皮肤风格名称',
                        type: MetaType.Select,
                        props: {
                            options: [{ text: '平台默认', value: '' }, { text: '公有云风格', value: 'GYY' }]
                        },
                        defaultValue: ''
                    });
                }
                PropMeta = PropMeta.concat([{
                    name: 'className',
                    label: '定制样式',
                    help: '自定义样式规则的名称，即：css的class名称',
                    type: MetaType.Text,
                    props: {},
                    defaultValue: ''
                }, {
                    name: 'specialTag',
                    label: '特殊标识',
                    type: MetaType.Refer,
                    props: {
                        refinfokey: 'defdoc-component_props',
                        serverUrl: SUPPORT_SERVER
                    },
                    defaultValue: null
                }]);
                return PropMeta;
            };

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = function (options) {
                var formMeta = options.formMeta,
                    tplNode = options.tplNode,
                    tplTree = options.tplTree;

                var newFormData = {};
                for (var i = 0; i < formMeta.length; i++) {
                    var meta = formMeta[i];
                    switch (meta.name) {
                        case "specialTag":
                            {
                                if (tplNode[meta.name] !== undefined) {
                                    newFormData[meta.name] = {};
                                    newFormData[meta.name].id = tplNode[meta.name].id;
                                    newFormData[meta.name].code = tplNode[meta.name].code;
                                    newFormData[meta.name].name = tplNode[meta.name].name;
                                }
                                break;
                            }
                        case "uikey":
                        case "uititle":
                        case "themeClassName":
                        case "className":
                        default:
                            if (tplNode[meta.name] !== undefined) {
                                newFormData[meta.name] = tplNode[meta.name];
                            }
                            break;
                    }
                }
                return newFormData;
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * 去除前后多余空字符串
             * @param x
             * @return {*}
             */

            function strTrim(x) {
                if (typeof x === 'string') {
                    return x.replace(/^\s+|\s+$/gm, '');
                } else {
                    return x;
                }
            }
            /**
             * 如果存在有效值，则设置属性值，否则清除属性
             */
            function isExistSet(object, propName, propValue) {
                if (!object) return;
                if (propValue !== undefined && propValue !== '' && propValue !== null) {
                    object[propName] = propValue;
                } else {
                    delete object[propName];
                }
            }
            module.exports = function (options) {
                var formMeta = options.formMeta,
                    formData = options.formData,
                    tplNode = options.tplNode,
                    tplTree = options.tplTree;

                for (var i = 0; i < formMeta.length; i++) {
                    var meta = formMeta[i];
                    if (!(meta.name in formData)) continue;
                    var value = formData[meta.name];
                    value = strTrim(value); //去除前后多余空格
                    switch (meta.name) {
                        case "specialTag":
                            {
                                if (value) {
                                    tplNode[meta.name] = {};
                                    tplNode[meta.name].id = value.id;
                                    tplNode[meta.name].code = value.code;
                                    tplNode[meta.name].name = value.name;
                                } else {
                                    delete tplNode[meta.name];
                                }
                                break;
                            }
                        case "uikey":
                        case "uititle":
                        case "themeClassName":
                        case "className":
                        default:
                            //默认值===表单项值，则不生成节点属性
                            if (meta.defaultValue === value) {
                                delete tplNode[meta.name];
                            } else {
                                isExistSet(tplNode, meta.name, value);
                            }
                            break;

                    }
                }
            };

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseDataAdapter2 = __webpack_require__(0);

            var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

            var _LogicUtils = __webpack_require__(9);

            var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

            var _MetaType = __webpack_require__(1);

            var _MetaType2 = _interopRequireDefault(_MetaType);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * 基础事件转换适配器
             */
            var EventAdapter = function (_BaseDataAdapter) {
                _inherits(EventAdapter, _BaseDataAdapter);

                function EventAdapter() {
                    _classCallCheck(this, EventAdapter);

                    return _possibleConstructorReturn(this, (EventAdapter.__proto__ || Object.getPrototypeOf(EventAdapter)).apply(this, arguments));
                }

                _createClass(EventAdapter, [{
                    key: 'onPageMetas',

                    //--------------生命周期方法--------------------
                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */
                    value: function onPageMetas(options) {
                        var metas = [{
                            name: 'onClick',
                            label: '鼠标点击',
                            type: _MetaType2.default.EventActions,
                            props: {},
                            defaultValue: null
                        }];
                        return metas;
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onPageProps',
                    value: function onPageProps(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onCreateData',
                    value: function onCreateData(options) {}

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onDataToValue',
                    value: function onDataToValue(options) {
                        var formMeta = options.formMeta,
                            tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var newFormData = {};
                        for (var i = 0; i < formMeta.length; i++) {
                            var meta = formMeta[i];
                            switch (meta.name) {
                                default:
                                    if (tplNode.uievents[meta.name] !== undefined) {
                                        newFormData[meta.name] = tplNode.uievents[meta.name];
                                    }
                                    break;
                            }
                        }
                        return newFormData;
                    }

                    /**
                     * @desc 参考 BaseDataAdapter
                     * @param options
                     */

                }, {
                    key: 'onValueToData',
                    value: function onValueToData(options) {
                        var formMeta = options.formMeta,
                            formData = options.formData,
                            tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        for (var i = 0; i < formMeta.length; i++) {
                            var meta = formMeta[i];
                            if (!(meta.name in formData)) continue;
                            var value = formData[meta.name];
                            switch (meta.name) {
                                default:
                                    _LogicUtils2.default.isExistSet(tplNode.uievents, meta.name, value);
                                    break;
                            }
                        }
                    }
                }]);

                return EventAdapter;
            }(_BaseDataAdapter3.default);

            exports.default = EventAdapter;

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = {
                /**
                * 如果存在有效值，则设置属性值，否则清除属性
                */
                isExistSet: function isExistSet(object, propName, propValue) {
                    if (!object) return;
                    if (propValue !== undefined && propValue !== '' && propValue !== null) {
                        object[propName] = propValue;
                    } else {
                        delete object[propName];
                    }
                },
                /**
                 * 如果等于指定值，则设置属性值，否则清除属性
                 */
                isEqualSet: function isEqualSet(object, propName, propValue, eqValue) {
                    if (!object) return;
                    if (propValue === eqValue) {
                        object[propName] = propValue;
                    } else {
                        delete object[propName];
                    }
                },
                /**
                 * 如果不等于指定值，则设置属性值，否则清除属性
                 */
                isNotEqualSet: function isNotEqualSet(object, propName, propValue, eqValue) {
                    if (!object) return;
                    if (propValue !== eqValue) {
                        object[propName] = propValue;
                    } else {
                        delete object[propName];
                    }
                },
                /**
                 * 如果等于指定值等于包含的任意一个值，则设置属性值，否则清除属性
                 */
                isIncludeSet: function isIncludeSet(object, propName, propValue, eqValues) {
                    if (!object) return;
                    for (var i = 0; i < eqValues.length; i++) {
                        if (propValue === eqValues[i]) {
                            object[propName] = propValue;
                            return;
                        }
                    }
                    delete object[propName];
                },
                /**
                 * 如果是true值，则设置属性值，否则清除属性
                 */
                isTrueSet: function isTrueSet(object, propName, propValue) {
                    this.isEqualSet(object, propName, propValue, true);
                },
                /**
                 * 如果是false值，则设置属性值，否则清除属性
                 */
                isFalseSet: function isFalseSet(object, propName, propValue) {
                    this.isEqualSet(object, propName, propValue, false);
                }

            };

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 一套组件定义
             */
            var UiDefines = function () {
                function UiDefines() {
                    _classCallCheck(this, UiDefines);

                    this.UiType = {};
                    this.UiTitle = {};
                    this.UiIcon = {};
                    this.UiDefault = {};
                }

                /**
                 * 添加一个组件的定义
                 * @param primaryKey    主键标识
                 * @param uitype        组件类型
                 * @param uititle       组件名称
                 * @param uiicon        组件图标
                 * @param uidefault     组件缺省属性
                 */

                _createClass(UiDefines, [{
                    key: "add",
                    value: function add(primaryKey, uitype, uititle, uiicon, uidefault) {
                        this.UiType[primaryKey] = uitype;
                        this.UiTitle[primaryKey] = uititle;
                        this.UiIcon[primaryKey] = uiicon;
                        this.UiDefault[primaryKey] = uidefault;
                    }

                    /**
                     * 移除一个组件的定义
                     * @param primaryKey    主键标识
                     */

                }, {
                    key: "remove",
                    value: function remove(primaryKey) {
                        delete this.UiType[primaryKey];
                        delete this.UiTitle[primaryKey];
                        delete this.UiIcon[primaryKey];
                        delete this.UiDefault[primaryKey];
                    }

                    /**
                     * 获得一个组件的定义
                     * @param primaryKey
                     */

                }, {
                    key: "get",
                    value: function get(primaryKey) {
                        return {
                            uitype: this.UiType[primaryKey],
                            uititle: this.UiTitle[primaryKey],
                            uiicon: this.UiIcon[primaryKey],
                            uidefault: this.UiDefault[primaryKey]
                        };
                    }
                }]);

                return UiDefines;
            }();

            exports.default = UiDefines;

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _BaseDataAdapter = __webpack_require__(0);

            var _BaseDataAdapter2 = _interopRequireDefault(_BaseDataAdapter);

            var _BaseViewAdapter = __webpack_require__(2);

            var _BaseViewAdapter2 = _interopRequireDefault(_BaseViewAdapter);

            var _ViewAdapter = __webpack_require__(3);

            var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

            var _PropAdapter = __webpack_require__(4);

            var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

            var _EventAdapter = __webpack_require__(8);

            var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

            var _MetaType = __webpack_require__(1);

            var _MetaType2 = _interopRequireDefault(_MetaType);

            var _UiDefines = __webpack_require__(10);

            var _UiDefines2 = _interopRequireDefault(_UiDefines);

            var _UiLibrary = __webpack_require__(12);

            var _UiLibrary2 = _interopRequireDefault(_UiLibrary);

            var _LogicUtils = __webpack_require__(9);

            var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

            var _PluginAdapter = __webpack_require__(13);

            var _PluginAdapter2 = _interopRequireDefault(_PluginAdapter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            module.exports = {
                BaseDataAdapter: _BaseDataAdapter2.default,
                BaseViewAdapter: _BaseViewAdapter2.default,
                ViewAdapter: _ViewAdapter2.default,
                PropAdapter: _PropAdapter2.default,
                EventAdapter: _EventAdapter2.default,
                PluginAdapter: _PluginAdapter2.default,
                UiDefines: _UiDefines2.default,
                UiLibrary: _UiLibrary2.default,
                MetaType: _MetaType2.default,
                LogicUtils: _LogicUtils2.default
            };

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _UiDefines = __webpack_require__(10);

            var _UiDefines2 = _interopRequireDefault(_UiDefines);

            var _PropAdapter = __webpack_require__(4);

            var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

            var _EventAdapter = __webpack_require__(8);

            var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

            var _ViewAdapter = __webpack_require__(3);

            var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * 定义一套适配的组件库
             */
            var UiLibrary = function () {
                /**
                 * 构建一套组件库的适配套件
                 * @param libraryName   组件库标识名
                 * @param libraryVer    组件库版本号
                 */
                function UiLibrary(libraryName, libraryVer) {
                    _classCallCheck(this, UiLibrary);

                    this.libraryName = libraryName;
                    this.libraryVer = libraryVer;
                    this.uiDefines = new _UiDefines2.default();
                    this.propAdapters = {};
                    this.eventAdapters = {};
                    this.viewAdapters = {};
                }
                /**
                 * 添加一个组件的定义
                 * @param primaryKey    主键标识
                 * @param uitype        组件类型
                 * @param uititle       组件名称
                 * @param uiicon        组件图标
                 * @param uidefault     组件缺省属性
                 */

                _createClass(UiLibrary, [{
                    key: "addDefine",
                    value: function addDefine(primaryKey, uitype, uititle, uiicon, uidefault) {
                        this.uiDefines.add(primaryKey, uitype, uititle, uiicon, uidefault);
                    }
                    /**
                     * 移除一个组件的定义
                     * @param primaryKey    主键标识
                     */

                }, {
                    key: "removeDefine",
                    value: function removeDefine(primaryKey) {
                        this.uiDefines.remove(primaryKey);
                    }

                    /**
                     * 获得一个组件的定义
                     * @param primaryKey
                     */

                }, {
                    key: "getDefine",
                    value: function getDefine(primaryKey) {
                        return this.uiDefines.get(primaryKey);
                    }

                    /**
                     * 获取全部组件的定义
                     */

                }, {
                    key: "addPropAdapter",

                    /**
                     * 添加属性适配类
                     * @param primaryKey
                     * @param AdapterClass 继承于PropAdapter的类
                     */
                    value: function addPropAdapter(primaryKey, AdapterClass) {
                        if (typeof AdapterClass == 'function') {
                            var adapter = new AdapterClass(primaryKey);
                            if (adapter instanceof _PropAdapter2.default) {
                                this.propAdapters[primaryKey] = new AdapterClass(primaryKey);
                                return;
                            }
                        }
                        console.warn('addPropAdapter fail ,that is not PropAdapter class!');
                    }

                    /**
                     * 添加事件适配类
                     * @param primaryKey
                     * @param AdapterClass 继承于EventAdapter的类
                     */

                }, {
                    key: "addEventAdapter",
                    value: function addEventAdapter(primaryKey, AdapterClass) {
                        if (typeof AdapterClass == 'function') {
                            var adapter = new AdapterClass(primaryKey);
                            if (adapter instanceof _EventAdapter2.default) {
                                this.eventAdapters[primaryKey] = adapter;
                                return;
                            }
                        }
                        console.warn('addEventAdapter fail ,that is not EventAdapter class!');
                    }

                    /**
                     * 添加视图适配类
                     * @param primaryKey
                     * @param AdapterClass 继承于ViewAdapter的类
                     */

                }, {
                    key: "addViewAdapter",
                    value: function addViewAdapter(primaryKey, AdapterClass) {
                        if (typeof AdapterClass == 'function') {
                            var adapter = new AdapterClass(primaryKey);
                            if (adapter instanceof _ViewAdapter2.default) {
                                this.viewAdapters[primaryKey] = adapter;
                                return;
                            }
                        }
                        console.warn('addEventAdapter fail ,that is not ViewAdapter class!');
                    }

                    /**
                     * 获取属性适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "getPropAdapter",
                    value: function getPropAdapter(primaryKey) {
                        return this.propAdapters[primaryKey];
                    }
                    /**
                     * 获取事件适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "getEventAdapter",
                    value: function getEventAdapter(primaryKey) {
                        return this.eventAdapters[primaryKey];
                    }
                    /**
                     * 获取视图适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "getViewAdapter",
                    value: function getViewAdapter(primaryKey) {
                        return this.viewAdapters[primaryKey];
                    }

                    /**
                     * 移除属性适配
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "removePropAdapter",
                    value: function removePropAdapter(primaryKey) {
                        delete this.propAdapters[primaryKey];
                    }
                    /**
                     * 移除事件适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "removeEventAdapter",
                    value: function removeEventAdapter(primaryKey) {
                        delete this.eventAdapters[primaryKey];
                    }
                    /**
                     * 移除视图适配实例
                     * @param primaryKey
                     * @return {*}
                     */

                }, {
                    key: "removeViewAdapter",
                    value: function removeViewAdapter(primaryKey) {
                        delete this.viewAdapters[primaryKey];
                    }

                    /**
                     * 获取全部属性适配实例
                     * @return {*}
                     */

                }, {
                    key: "UiDefines",
                    get: function get() {
                        return this.uiDefines;
                    }
                }, {
                    key: "PropAdapters",
                    get: function get() {
                        var adapters = [];
                        for (var key in this.propAdapters) {
                            adapters.push(this.propAdapters[key]);
                        }
                        return adapters;
                    }

                    /**
                     * 获取全部事件适配实例
                     * @return {*}
                     */

                }, {
                    key: "EventAdapters",
                    get: function get() {
                        var adapters = [];
                        for (var key in this.eventAdapters) {
                            adapters.push(this.eventAdapters[key]);
                        }
                        return adapters;
                    }

                    /**
                     * 获取全部视图适配实例
                     * @return {*}
                     */

                }, {
                    key: "ViewAdapters",
                    get: function get() {
                        var adapters = [];
                        for (var key in this.viewAdapters) {
                            adapters.push(this.viewAdapters[key]);
                        }
                        return adapters;
                    }
                }]);

                return UiLibrary;
            }();

            exports.default = UiLibrary;

            /***/
        },
        /* 13 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _BaseDataAdapter2 = __webpack_require__(0);

            var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

            var _MetaType = __webpack_require__(1);

            var _MetaType2 = _interopRequireDefault(_MetaType);

            var _PropMeta = __webpack_require__(5);

            var _PropMeta2 = _interopRequireDefault(_PropMeta);

            var _PropDataToValue = __webpack_require__(6);

            var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

            var _PropValueToData = __webpack_require__(7);

            var _PropValueToData2 = _interopRequireDefault(_PropValueToData);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * 插件转换适配器
             */
            var PluginAdapter = function (_BaseDataAdapter) {
                _inherits(PluginAdapter, _BaseDataAdapter);

                function PluginAdapter() {
                    _classCallCheck(this, PluginAdapter);

                    return _possibleConstructorReturn(this, (PluginAdapter.__proto__ || Object.getPrototypeOf(PluginAdapter)).apply(this, arguments));
                }

                _createClass(PluginAdapter, [{
                    key: 'onPageMetas',

                    //--------------生命周期方法--------------------
                    //配置页面的元数据
                    value: function onPageMetas(options) {
                        var baseMetas = (0, _PropMeta2.default)(options);
                        baseMetas.unshift({
                            name: 'uitype',
                            label: '解析器',
                            type: _MetaType2.default.Text,
                            props: {},
                            defaultValue: 'UnKnowWidget'
                        });
                        return baseMetas;
                    }

                    //数据转换为值的适配

                }, {
                    key: 'onDataToValue',
                    value: function onDataToValue(options) {
                        return (0, _PropDataToValue2.default)(options);
                    }

                    //值转换为数据的适配

                }, {
                    key: 'onValueToData',
                    value: function onValueToData(options) {
                        (0, _PropValueToData2.default)(options);
                    }
                }]);

                return PluginAdapter;
            }(_BaseDataAdapter3.default);

            exports.default = PluginAdapter;

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonAdapter = function (_PropAdapter) {
    _inherits(ButtonAdapter, _PropAdapter);

    function ButtonAdapter() {
        _classCallCheck(this, ButtonAdapter);

        return _possibleConstructorReturn(this, (ButtonAdapter.__proto__ || Object.getPrototypeOf(ButtonAdapter)).apply(this, arguments));
    }

    _createClass(ButtonAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonAdapter.prototype), 'onPageMetas', this).call(this, options);
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var propMetas = [{
                name: 'type',
                label: '颜色',
                type: _indexDeps.MetaType.Select,
                help: '按钮的填充颜色',
                props: {
                    options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
                },
                defaultValue: 'default'
            }, {
                name: 'size',
                label: '大小',
                type: _indexDeps.MetaType.Select,
                props: {
                    options: [{ text: '默认', value: '' }, { text: '较小', value: 'small' }, { text: '较大', value: 'large' }]
                },
                defaultValue: ''
            }, {
                name: 'icon',
                label: '图标',
                type: _indexDeps.MetaType.Icon,
                props: {},
                defaultValue: ''
            }, {
                name: 'ghost',
                label: '透明',
                help: '按钮的内部是否填充颜色',
                type: _indexDeps.MetaType.Bool,
                props: {},
                defaultValue: false
            }, {
                name: 'visible',
                label: '显示',
                type: _indexDeps.MetaType.Bool,
                props: {},
                defaultValue: true
            }, {
                name: 'disabled',
                label: '禁用',
                type: _indexDeps.MetaType.Bool,
                props: {},
                defaultValue: false
            }];
            return baseMetas.concat(propMetas);
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            _get(ButtonAdapter.prototype.__proto__ || Object.getPrototypeOf(ButtonAdapter.prototype), 'onValueToData', this).call(this, options);
            var formMeta = options.formMeta,
                formData = options.formData,
                tplNode = options.tplNode,
                tplTree = options.tplTree;

            for (var i = 0; i < formMeta.length; i++) {
                var meta = formMeta[i];
                if (!(meta.name in formData)) continue;
                var value = formData[meta.name];
                switch (meta.name) {
                    case "uititle":
                        {
                            _indexDeps.LogicUtils.isExistSet(tplNode, 'children', value);
                            break;
                        }
                }
            }
        }
        //当前数据被创建时的适配

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {
            var tplTree = options.tplTree,
                tplNode = options.tplNode,
                tplParentNode = options.tplParentNode;

            tplNode.children = tplNode.uititle;
        }
    }]);

    return ButtonAdapter;
}(_indexDeps.PropAdapter);

exports.default = ButtonAdapter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

var _Utils = __webpack_require__(7);

var _Utils2 = _interopRequireDefault(_Utils);

var _Defines = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowAdapter = function (_PropAdapter) {
    _inherits(RowAdapter, _PropAdapter);

    function RowAdapter() {
        _classCallCheck(this, RowAdapter);

        return _possibleConstructorReturn(this, (RowAdapter.__proto__ || Object.getPrototypeOf(RowAdapter)).apply(this, arguments));
    }

    _createClass(RowAdapter, [{
        key: "onPageProps",


        //--------------生命周期方法--------------------
        // //配置页面的元数据
        // onPageMetas(options){
        //     return super.onPageMetas(options);
        // }
        //配置页面的属性
        value: function onPageProps(options) {
            return {
                "buttons": [{
                    text: '添加格子',
                    onClick: function onClick(e, options) {
                        var tplNode = options.tplNode,
                            tplTree = options.tplTree;

                        var value = 1 + tplNode.children ? tplNode.children.length : 0;
                        _Utils2.default.appendNode(tplNode, {
                            uitype: _Defines.UiTypeDef.col,
                            uititle: _Defines.UiTitleDef.col + value
                        });
                        return true;
                    }
                }]
            };
            return RowPage(options);
        }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return RowAdapter;
}(_indexDeps.PropAdapter);

exports.default = RowAdapter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//标识唯一ID
var _uuid = 0;
var Utils = {
    //生成一个唯一ID序列数
    uuid: function uuid() {
        return Date.now() + '_' + _uuid++;
    }
    //给指定节点追加一个子节点，nid未指定则自动生成一个唯一nid
    , appendNode: function appendNode(pnode, node) {
        if (!pnode || !node) return;
        pnode.children = Array.isArray(pnode.children) ? pnode.children : [];
        if (!node.nid) node.nid = 'nid_' + Utils.uuid(); //注意：生成"nid"属性
        pnode.children.push(node);
    }
    //递归遍历树数据，其中参数tree为数组
    , loopTreeData: function loopTreeData(tree, callback) {
        var _this = this;
        (tree || []).forEach(function (item, index, arr) {
            if (item && Array.isArray(item.children)) {
                _this.loopTreeData(item.children, callback);
            }
            callback(item, index, arr);
        });
    }
    //依据nid查找当前节点的父节点
    , findParentNode: function findParentNode(tree, nodeId) {
        if (!tree || !nodeId) return;
        var pNode = null;
        this.loopTreeData(Array.isArray(tree) ? tree : [tree], function (item) {
            //找到第一个父级节点就不再匹配
            if (pNode == null && item && Array.isArray(item.children)) {
                var isParent = (item.children || []).some(function (child) {
                    return child.nid === nodeId; //注意：匹配"nid"属性
                });
                if (isParent) pNode = item;
            }
        });
        return pNode;
    }
    //查找树节点下指定uikey的节点
    , findByUiKey: function findByUiKey(nodes, uikey) {
        var results = this.findWithPropName(nodes, 'uikey', uikey, true, true);
        return results.length > 0 ? results[0] : null;
    }
    /**
     * 查找树节点下指定节点属性值匹配的节点
     * @param nodes {array} 子节点集合
     * @param propName {string} 属性名
     * @param propValue {*} 属性值
     * @param loop{boolean} 默认：true，是否递归遍历子集合
     * @param only{boolean} 默认：true，是否匹配到第一个就终止
     * @param childPropName{boolean} 默认：children，子节点集合的属性名
     */
    , findWithPropName: function findWithPropName(nodes, propName, propValue, loop, only, childPropName) {
        var _results = [];
        var _nodes = Array.isArray(nodes) ? nodes : [];
        var _childPropName = childPropName ? childPropName : 'children';
        for (var i = 0; i < _nodes.length; i++) {
            var node = _nodes[i];
            if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') continue;
            if (node[propName] && node[propName] == propValue) {
                _results.push(node);
                if (only == undefined || only == true) break;
            }
            if (loop != false && node[_childPropName] && node[_childPropName].length > 0) {
                var currResults = this.findWithPropName(node[_childPropName], propName, propValue, loop, only, _childPropName);
                if (currResults != null) {
                    _results = _results.concat(currResults);
                }
            }
        }
        return _results;
    }
};
module.exports = Utils;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColAdapter = function (_PropAdapter) {
    _inherits(ColAdapter, _PropAdapter);

    function ColAdapter() {
        _classCallCheck(this, ColAdapter);

        return _possibleConstructorReturn(this, (ColAdapter.__proto__ || Object.getPrototypeOf(ColAdapter)).apply(this, arguments));
    }

    _createClass(ColAdapter, [{
        key: 'onPageMetas',


        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = _get(ColAdapter.prototype.__proto__ || Object.getPrototypeOf(ColAdapter.prototype), 'onPageMetas', this).call(this, options);
            var myMetas = [{
                name: 'span',
                label: '栅格占位',
                type: _indexDeps.MetaType.Number,
                props: {
                    min: 0,
                    max: 24,
                    enableSelect: false
                },
                defaultValue: null
            }];
            return baseMetas.concat(myMetas);
        }
        // //配置页面的属性
        // onPageProps(options){
        //     return super.onPageProps(options);
        // }
        // //数据转换为值的适配
        // onDataToValue(options){
        //     return super.onDataToValue(options);
        // }
        // //值转换为数据的适配
        // onValueToData(options){
        //      super.onValueToData(options);
        // }

    }]);

    return ColAdapter;
}(_indexDeps.PropAdapter);

exports.default = ColAdapter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexDeps = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonViewAdapter = function (_ViewAdapter) {
    _inherits(ButtonViewAdapter, _ViewAdapter);

    function ButtonViewAdapter() {
        _classCallCheck(this, ButtonViewAdapter);

        return _possibleConstructorReturn(this, (ButtonViewAdapter.__proto__ || Object.getPrototypeOf(ButtonViewAdapter)).apply(this, arguments));
    }

    _createClass(ButtonViewAdapter, [{
        key: 'onDataView',


        //--------------生命周期方法--------------------
        //数据节点视图
        value: function onDataView(options) {
            var tplNode = options.tplNode,
                tplTree = options.tplTree;

            var nodeViews = [];
            //点击事件
            if (tplNode.uievents) {
                nodeViews.push({
                    uititle: '已绑定交互事件',
                    uitype: 'icon',
                    type: 'share-alt'
                });
            }
            //隐藏
            if (tplNode.visible == false) {
                nodeViews.push({
                    uititle: '被隐藏',
                    uitype: 'icon',
                    type: 'eye-o'
                });
            }
            return nodeViews;
        }
    }]);

    return ButtonViewAdapter;
}(_indexDeps.ViewAdapter);

exports.default = ButtonViewAdapter;

/***/ })
/******/ ]));;