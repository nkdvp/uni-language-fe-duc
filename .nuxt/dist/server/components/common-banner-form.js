exports.ids = [1];
exports.modules = {

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("9bf69fae", content, true, context)
};

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_016dacff_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_016dacff_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_016dacff_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_016dacff_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_016dacff_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#banner-form{background:#eee;border-radius:30px;bottom:-150px;padding:30px 30px 0;position:absolute;width:960px}::-moz-placeholder{color:#000!important}::placeholder{color:#000!important}.el-input input{background:transparent;border:none;border-bottom:1px solid #000;color:#000;font-size:18px}.el-form-item{margin-bottom:40px}@media (max-width:63.9375em){#banner-form{bottom:-450px;padding:30px 10px 0;width:90%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/BannerForm.vue?vue&type=template&id=016dacff&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "banner-form"
    }
  }, [_c('el-form', {
    ref: "rule-form",
    staticClass: "rule-form",
    attrs: {
      "model": _vm.ruleForm,
      "status-icon": "",
      "rules": _vm.rules,
      "label-width": "0px"
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Họ và tên học viên"
    },
    model: {
      value: _vm.ruleForm.name,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "name", $$v);
      },
      expression: "ruleForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "birthyear"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Năm sinh"
    },
    model: {
      value: _vm.ruleForm.birthyear,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "birthyear", $$v);
      },
      expression: "ruleForm.birthyear"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "phoneNo"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Số điện thoại"
    },
    model: {
      value: _vm.ruleForm.phoneNo,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "phoneNo", $$v);
      },
      expression: "ruleForm.phoneNo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "mail"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Email (Nếu có)"
    },
    model: {
      value: _vm.ruleForm.mail,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "mail", $$v);
      },
      expression: "ruleForm.mail"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "btn-sign-up"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("ĐĂNG KÝ TƯ VẤN")])])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/BannerForm.vue?vue&type=template&id=016dacff&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/BannerForm.vue?vue&type=script&lang=js&
/* harmony default export */ var BannerFormvue_type_script_lang_js_ = ({
  data() {
    return {
      ruleForm: {
        name: '',
        birthyear: '',
        phoneNo: '',
        mail: ''
      },
      rules: {
        name: [{
          required: true,
          message: 'Hãy nhập tên của mình bạn nhé',
          trigger: 'blur'
        }],
        birthyear: [{
          required: true,
          message: 'Hãy nhập năm sinh của mình bạn nhé',
          trigger: 'blur'
        }],
        phoneNo: [{
          required: true,
          message: 'Hãy nhập số điện thoại của mình hoặc của phụ huynh bạn nhé',
          trigger: 'blur'
        }]
      }
    };
  }
});
// CONCATENATED MODULE: ./components/common/BannerForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_BannerFormvue_type_script_lang_js_ = (BannerFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/common/BannerForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_BannerFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "24d51232"
  
)

/* harmony default export */ var BannerForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-banner-form.js.map