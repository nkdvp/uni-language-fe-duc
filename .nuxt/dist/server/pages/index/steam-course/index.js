exports.ids = [30,8];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("9334ef08", content, true, context)
};

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_6eac57e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_6eac57e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_6eac57e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_6eac57e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_6eac57e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(120);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(121);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(122);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(123);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(124);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(125);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(126);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(127);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(128);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(129);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#other-course-kindergarten{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}#other-course-primary{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}#other-course-secondary{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}#other-course-ielts{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}#other-course-storytelling{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}#other-course-steam{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")}#other-course-presentation{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ")}#other-course-toeic{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")}#other-course-grammar{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")}#other-course-transition{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")}.main-course-section-heading,.other-course-section-heading{opacity:0;transform:translateY(100px)}@media screen and (min-width:740px) and (max-width:1023px){.other-course-section{margin:0!important}}@media (max-width:63.9375em){.section5{margin:30px 0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kindergarten.e5fb411.jpg";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/primary.e7daaa2.jpg";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/secondary.f6ab857.jpg";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ielts.471c957.jpg";

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/storytelling.2d19619.jpg";

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam.eb70441.jpg";

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/presentation.d91412f.jpg";

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/toeic.c5e1a7f.jpg";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grammar.e5794b1.jpg";

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transition.81e7af9.jpg";

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/OtherCourseSection.vue?vue&type=template&id=6eac57e4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section section5"
  }, [_vm._ssrNode("<h2 class=\"main-course-section-heading\" style=\"margin-top: 0; text-align: center\">\n    CÁC CHƯƠNG TRÌNH HỌC CHÍNH TẠI UNI LANGUAGE HOUSE\n  </h2> "), _c('el-row', {
    staticClass: "other-course-section",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-kindergarten"
    },
    on: {
      "click": function ($event) {
        return _vm.router('kindergarten-course');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH MẪU GIÁO")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-primary"
    },
    on: {
      "click": function ($event) {
        return _vm.router('primary-course');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH TIỂU HỌC")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-secondary"
    },
    on: {
      "click": function ($event) {
        return _vm.router('secondary-course');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH THCS")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-ielts"
    },
    on: {
      "click": function ($event) {
        return _vm.router('ielts');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH LUYỆN THI IELTS")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])])], 1), _vm._ssrNode(" <h2 class=\"other-course-section-heading\" style=\"margin-top: 30px; text-align: center\">\n    CÁC CHƯƠNG TRÌNH HỌC NGẮN HẠN TẠI UNI LANGUAGE HOUSE\n  </h2> "), _c('el-row', {
    staticClass: "other-course-section",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-storytelling"
    },
    on: {
      "click": function ($event) {
        return _vm.router('storytelling-course');
      }
    }
  }, [_c('h2', [_vm._v("KHÓA HỌC KỂ CHUYỆN")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-steam"
    },
    on: {
      "click": function ($event) {
        return _vm.router('steam-course');
      }
    }
  }, [_c('h2', [_vm._v("KHÓA HỌC STEAM")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-presentation"
    },
    on: {
      "click": function ($event) {
        return _vm.router('presentation-course');
      }
    }
  }, [_c('h2', [_vm._v("KHÓA HỌC THUYẾT TRÌNH")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-toeic"
    },
    on: {
      "click": function ($event) {
        return _vm.router('toeic');
      }
    }
  }, [_c('h2', [_vm._v("LUYỆN THI TOEIC")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-grammar"
    },
    on: {
      "click": function ($event) {
        return _vm.router('grammar-course');
      }
    }
  }, [_c('h2', [_vm._v("BỔ TRỢ NGỮ ÂM "), _c('br'), _vm._v(" -"), _c('br'), _vm._v(" NGỮ PHÁP")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-transition"
    },
    on: {
      "click": function ($event) {
        return _vm.router('transition-course');
      }
    }
  }, [_c('h2', [_vm._v("LUYỆN THI CHUYỂN CẤP")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/OtherCourseSection.vue?vue&type=template&id=6eac57e4&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/OtherCourseSection.vue?vue&type=script&lang=js&
/* harmony default export */ var OtherCourseSectionvue_type_script_lang_js_ = ({
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('.other-course-section-heading', {
        scrollTrigger: '.other-course-section-heading',
        y: 0,
        opacity: 1,
        duration: .5
      });
      gsap.to('.main-course-section-heading', {
        scrollTrigger: '.main-course-section-heading',
        y: 0,
        opacity: 1,
        duration: .5
      });
    },
    router(course) {
      this.$router.push({
        path: `/${course}`
      });
    }
  }
});
// CONCATENATED MODULE: ./components/common/OtherCourseSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_OtherCourseSectionvue_type_script_lang_js_ = (OtherCourseSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/common/OtherCourseSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_OtherCourseSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e7345f1"
  
)

/* harmony default export */ var OtherCourseSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("92e41ac2", content, true, context)
};

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam1.41367be.png";

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam2.80198fe.png";

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam3.6ef61a5.png";

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam4.520bf4c.png";

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam5.5ee5c50.png";

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b129b49_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b129b49_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b129b49_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b129b49_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b129b49_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(282);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#storytelling-course-banner{align-items:flex-end;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");margin-right:50p}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/item.f0c5ebf.jpg";

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/steam-course/index.vue?vue&type=template&id=1b129b49&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"storytelling-course-banner\" class=\"banner\"><div class=\"banner-text\"><div class=\"banner-text-content\"><p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p> <h1>KHÓA HỌC STEAM</h1> <h2>STEAM COURSE</h2> <h4 style=\"margin:5px 0\">THỜI GIAN ĐÀO TẠO: 3 THÁNG</h4></div> <div class=\"banner-border-bottom\"></div></div></div> "), _vm._ssrNode("<div class=\"section section1\">", "</div>", [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(275),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Hỏi như một nhà khoa học")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(276),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Thiết kế như dân công nghệ")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(277),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Xây dựng như một kỹ sư")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 12
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(278),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Sáng tạo như một nghệ sĩ")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 12
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(279),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Suy luận như một nhà toán học")])])])])], 1)], 1), _vm._ssrNode(" "), _c('OtherCourseSection')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index/steam-course/index.vue?vue&type=template&id=1b129b49&

// EXTERNAL MODULE: ./components/common/OtherCourseSection.vue + 4 modules
var OtherCourseSection = __webpack_require__(138);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/steam-course/index.vue?vue&type=script&lang=js&

/* harmony default export */ var steam_coursevue_type_script_lang_js_ = ({
  components: {
    OtherCourseSection: OtherCourseSection["default"]
  },
  mounted() {
    this.$gsap.to(window, {
      duration: .5,
      scrollTo: 0
    });
  }
});
// CONCATENATED MODULE: ./pages/index/steam-course/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_steam_coursevue_type_script_lang_js_ = (steam_coursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/index/steam-course/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(280)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_steam_coursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "57824962"
  
)

/* harmony default export */ var steam_course = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map