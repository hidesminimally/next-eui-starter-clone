webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/navigation_links/top_links.ts":
/*!******************************************************!*\
  !*** ./src/components/navigation_links/top_links.ts ***!
  \******************************************************/
/*! exports provided: buildTopLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTopLinks", function() { return buildTopLinks; });
var faveExtraAction = {
  color: 'subdued',
  iconType: 'starEmpty',
  iconSize: 's',
  'aria-label': 'Add to favorites'
};
var buildTopLinks = function buildTopLinks(makeAction) {
  return [{
    label: 'Recently viewed',
    iconType: 'clock',
    flyoutMenu: {
      title: 'Recent items',
      listItems: [{
        label: 'My dashboard',
        onClick: makeAction('/my-dashboard'),
        iconType: 'dashboardApp',
        extraAction: faveExtraAction
      }, {
        label: 'Workpad with title that wraps',
        onClick: makeAction('/workpad'),
        iconType: 'canvasApp',
        extraAction: faveExtraAction
      }, {
        label: 'My logs',
        onClick: makeAction('/my-logs'),
        iconType: 'logsApp',
        'aria-label': 'This is an alternate aria-label',
        extraAction: faveExtraAction
      }]
    }
  }, {
    label: 'Favorites',
    iconType: 'starEmpty',
    flyoutMenu: {
      title: 'Favorite items',
      listItems: [{
        label: 'My workpad',
        onClick: makeAction('/my-workpad'),
        iconType: 'canvasApp',
        extraAction: {
          color: 'subdued',
          iconType: 'starFilled',
          iconSize: 's',
          'aria-label': 'Remove from favorites',
          alwaysShow: true
        }
      }, {
        label: 'My logs',
        onClick: makeAction('/my-logs'),
        iconType: 'logsApp',
        extraAction: {
          color: 'subdued',
          iconType: 'starFilled',
          iconSize: 's',
          'aria-label': 'Remove from favorites',
          alwaysShow: true
        }
      }]
    }
  }];
};

/***/ })

})
//# sourceMappingURL=_app.js.bb1956c7f15bf7f281b8.hot-update.js.map