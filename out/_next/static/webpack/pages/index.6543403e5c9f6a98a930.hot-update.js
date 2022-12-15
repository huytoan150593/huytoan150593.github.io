self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "otherProjects": function() { return /* binding */ otherProjects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Cafe-Dekiru',
  description: "先生デザインの通りに作りました。使ったのは HTML - CSS - JavaScript. Responsive complete.",
  image: './images/cafe-dekiru.jpg',
  tags: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/huytoan150593/Cafe-de-dekiru',
  visit: 'https://kind-liskov-f0c618.netlify.app/',
  id: 0
}, {
  title: 'Mobile-App',
  description: "学校のプロジェクト2年生の時やりました。色々なゲームやメモアプリなどを作り, Javascript よくできるようになりました。",
  image: './images/Mobile-app.png',
  tags: ['HTML', 'CSS', 'JQuery', 'JavaScript'],
  source: 'https://github.com/huytoan150593/Mobile-app',
  visit: 'https://eager-jepsen-4dac70.netlify.app/',
  id: 1
}, {
  title: 'Excelsior-Cafe',
  description: "エクセルシオールカフェで１年間アルバイトとして働きました。うちの店のWEBがおしゃれだなと～思ってるので、作ってみました。 モバイル Responsive まだやっていなくて、パソコンでしか見えないです。このサイトは Bootstrap 5 を使いました。全部完成していなくても、コードを書いてる間に色々なことが分かるようになりました。 エクセルシオールカフェにかんしゃしています。",
  image: './images/excelsior-cafe.jpg',
  tags: ['HTML', 'CSS', 'Bootstrap'],
  source: 'https://github.com/huytoan150593/Ex-cafe-with-Bootstrap5',
  visit: 'https://stoic-snyder-890881.netlify.app/#',
  id: 2
}, {
  title: 'Amey-Shop',
  description: "ReactJSを練習するため、こんな通信販売ウェブサイトを作りました。React Hook と ReactRouterV6を用いています. 登録フォーム機能があります。",
  image: './images/amey.png',
  tags: ['HTML', 'CSS', 'ReactJS'],
  source: 'https://github.com/huytoan150593/Amey-shop',
  visit: 'https://symphonious-frangollo-7fcbda.netlify.app/',
  id: 3
}, {
  title: 'Universe',
  description: "This is the Space tourism multi-page website that a fun collaboration with Scrimba and Kevin Powell. Build from Sketch and Figma design - mobile, tablet & desktop layouts. I try to use Sass, Router, Framer-motion and optimized react folder structure.",
  image: "./images/universe.jpg",
  tags: ['Sass', 'Framer-Motion', 'React-Router'],
  source: 'https://github.com/huytoan150593/universe',
  visit: 'https://universe-demo.netlify.app/',
  id: 4
}];
var otherProjects = [{
  name: "Deep Sea",
  description: "Practice Bubble Effect",
  link: "https://romantic-mestorf-3b1976.netlify.app/"
}, {
  name: "Animal Show",
  description: "A story about Animal",
  link: "https://jovial-mccarthy-b08419.netlify.app/"
}, {
  name: "Deep Sea",
  description: "Practice Bubble Effect",
  link: "https://romantic-mestorf-3b1976.netlify.app/"
}, {
  name: "Animal Show",
  description: "A story about Animal",
  link: "https://jovial-mccarthy-b08419.netlify.app/"
}];
var TimeLineData = [{
  year: 2017,
  text: 'Study abroad in Japan'
}, {
  year: 2018,
  text: 'JIN Tokyo Japanese school'
}, {
  year: 2019,
  text: 'Japan College of Foreign Languages school'
}, {
  year: 2020,
  text: 'Sundai Electronic Information Business College'
}, {
  year: 2022,
  text: 'Graduated'
}, {
  year: 2023,
  text: 'Get a Job - incoming...'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIm90aGVyUHJvamVjdHMiLCJuYW1lIiwibGluayIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSxxRUFGZjtBQUdFQyxPQUFLLEVBQUUsMEJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsaURBTFY7QUFNRUMsT0FBSyxFQUFFLHlDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFBQyxrRUFGZDtBQUdFQyxPQUFLLEVBQUUseUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZSxRQUFmLEVBQXlCLFlBQXpCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDZDQUxWO0FBTUVDLE9BQUssRUFBRSwwQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSxpTUFGZjtBQUdFQyxPQUFLLEVBQUUsNkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsV0FBaEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsMERBTFY7QUFNRUMsT0FBSyxFQUFFLDJDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUFFLHNGQUZmO0FBR0VDLE9BQUssRUFBRSxtQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixTQUFoQixDQUpSO0FBS0VDLFFBQU0sRUFBRSw0Q0FMVjtBQU1FQyxPQUFLLEVBQUUsbURBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUUsNFBBRmY7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxlQUFULEVBQTBCLGNBQTFCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDJDQUxWO0FBTUVDLE9BQUssRUFBRSxvQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDc0IsQ0FBakI7QUFnREEsSUFBTUMsYUFBYSxHQUFHLENBQzNCO0FBQ0lDLE1BQUksRUFBRSxVQURWO0FBRUlQLGFBQVcsRUFBRSx3QkFGakI7QUFHSVEsTUFBSSxFQUFFO0FBSFYsQ0FEMkIsRUFNM0I7QUFDSUQsTUFBSSxFQUFFLGFBRFY7QUFFSVAsYUFBVyxFQUFFLHNCQUZqQjtBQUdJUSxNQUFJLEVBQUU7QUFIVixDQU4yQixFQVczQjtBQUNJRCxNQUFJLEVBQUUsVUFEVjtBQUVJUCxhQUFXLEVBQUUsd0JBRmpCO0FBR0lRLE1BQUksRUFBRTtBQUhWLENBWDJCLEVBZ0IzQjtBQUNJRCxNQUFJLEVBQUUsYUFEVjtBQUVJUCxhQUFXLEVBQUUsc0JBRmpCO0FBR0lRLE1BQUksRUFBRTtBQUhWLENBaEIyQixDQUF0QjtBQXVCQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixFQU0xQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FOMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjU0MzQwM2U1YzlmNmE5OGE5MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NhZmUtRGVraXJ1JyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIuWFiOeUn+ODh+OCtuOCpOODs+OBrumAmuOCiuOBq+S9nOOCiuOBvuOBl+OBn+OAguS9v+OBo+OBn+OBruOBryBIVE1MIC0gQ1NTIC0gSmF2YVNjcmlwdC4gUmVzcG9uc2l2ZSBjb21wbGV0ZS5cIixcclxuICAgIGltYWdlOiAnLi9pbWFnZXMvY2FmZS1kZWtpcnUuanBnJyxcclxuICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnSmF2YXNjcmlwdCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2h1eXRvYW4xNTA1OTMvQ2FmZS1kZS1kZWtpcnUnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2tpbmQtbGlza292LWYwYzYxOC5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ01vYmlsZS1BcHAnLFxyXG4gICAgZGVzY3JpcHRpb246XCLlrabmoKHjga7jg5fjg63jgrjjgqfjgq/jg4gy5bm055Sf44Gu5pmC44KE44KK44G+44GX44Gf44CC6Imy44CF44Gq44Ky44O844Og44KE44Oh44Oi44Ki44OX44Oq44Gq44Gp44KS5L2c44KKLCBKYXZhc2NyaXB0IOOCiOOBj+OBp+OBjeOCi+OCiOOBhuOBq+OBquOCiuOBvuOBl+OBn+OAglwiLFxyXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9Nb2JpbGUtYXBwLnBuZycsXHJcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywnSlF1ZXJ5JywgJ0phdmFTY3JpcHQnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9odXl0b2FuMTUwNTkzL01vYmlsZS1hcHAnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2VhZ2VyLWplcHNlbi00ZGFjNzAubmV0bGlmeS5hcHAvJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFeGNlbHNpb3ItQ2FmZScsXHJcbiAgICBkZXNjcmlwdGlvbjogXCLjgqjjgq/jgrvjg6vjgrfjgqrjg7zjg6vjgqvjg5XjgqfjgafvvJHlubTplpPjgqLjg6vjg5DjgqTjg4jjgajjgZfjgablg43jgY3jgb7jgZfjgZ/jgILjgYbjgaHjga7lupfjga5XRULjgYzjgYrjgZfjgoPjgozjgaDjgarjgajvvZ7mgJ3jgaPjgabjgovjga7jgafjgIHkvZzjgaPjgabjgb/jgb7jgZfjgZ/jgIIg44Oi44OQ44Kk44OrIFJlc3BvbnNpdmUg44G+44Gg44KE44Gj44Gm44GE44Gq44GP44Gm44CB44OR44K944Kz44Oz44Gn44GX44GL6KaL44GI44Gq44GE44Gn44GZ44CC44GT44Gu44K144Kk44OI44GvIEJvb3RzdHJhcCA1IOOCkuS9v+OBhOOBvuOBl+OBn+OAguWFqOmDqOWujOaIkOOBl+OBpuOBhOOBquOBj+OBpuOCguOAgeOCs+ODvOODieOCkuabuOOBhOOBpuOCi+mWk+OBq+iJsuOAheOBquOBk+OBqOOBjOWIhuOBi+OCi+OCiOOBhuOBq+OBquOCiuOBvuOBl+OBn+OAgiDjgqjjgq/jgrvjg6vjgrfjgqrjg7zjg6vjgqvjg5XjgqfjgavjgYvjgpPjgZfjgoPjgZfjgabjgYTjgb7jgZnjgIJcIixcclxuICAgIGltYWdlOiAnLi9pbWFnZXMvZXhjZWxzaW9yLWNhZmUuanBnJyxcclxuICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCAnQm9vdHN0cmFwJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vaHV5dG9hbjE1MDU5My9FeC1jYWZlLXdpdGgtQm9vdHN0cmFwNScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vc3RvaWMtc255ZGVyLTg5MDg4MS5uZXRsaWZ5LmFwcC8jJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBbWV5LVNob3AnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUmVhY3RKU+OCkue3tOe/kuOBmeOCi+OBn+OCgeOAgeOBk+OCk+OBqumAmuS/oeiyqeWjsuOCpuOCp+ODluOCteOCpOODiOOCkuS9nOOCiuOBvuOBl+OBn+OAglJlYWN0IEhvb2sg44GoIFJlYWN0Um91dGVyVjbjgpLnlKjjgYTjgabjgYTjgb7jgZkuIOeZu+mMsuODleOCqeODvOODoOapn+iDveOBjOOBguOCiuOBvuOBmeOAglwiLFxyXG4gICAgaW1hZ2U6ICcuL2ltYWdlcy9hbWV5LnBuZycsXHJcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ1JlYWN0SlMnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9odXl0b2FuMTUwNTkzL0FtZXktc2hvcCcsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vc3ltcGhvbmlvdXMtZnJhbmdvbGxvLTdmY2JkYS5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1VuaXZlcnNlJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIFNwYWNlIHRvdXJpc20gbXVsdGktcGFnZSB3ZWJzaXRlIHRoYXQgYSBmdW4gY29sbGFib3JhdGlvbiB3aXRoIFNjcmltYmEgYW5kIEtldmluIFBvd2VsbC4gQnVpbGQgZnJvbSBTa2V0Y2ggYW5kIEZpZ21hIGRlc2lnbiAtIG1vYmlsZSwgdGFibGV0ICYgZGVza3RvcCBsYXlvdXRzLiBJIHRyeSB0byB1c2UgU2FzcywgUm91dGVyLCBGcmFtZXItbW90aW9uIGFuZCBvcHRpbWl6ZWQgcmVhY3QgZm9sZGVyIHN0cnVjdHVyZS5cIixcclxuICAgIGltYWdlOiBcIi4vaW1hZ2VzL3VuaXZlcnNlLmpwZ1wiLFxyXG4gICAgdGFnczogWydTYXNzJywgJ0ZyYW1lci1Nb3Rpb24nLCAnUmVhY3QtUm91dGVyJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vaHV5dG9hbjE1MDU5My91bml2ZXJzZScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vdW5pdmVyc2UtZGVtby5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDQsXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG90aGVyUHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgICBuYW1lOiBcIkRlZXAgU2VhXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlByYWN0aWNlIEJ1YmJsZSBFZmZlY3RcIixcclxuICAgICAgbGluazogXCJodHRwczovL3JvbWFudGljLW1lc3RvcmYtM2IxOTc2Lm5ldGxpZnkuYXBwL1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIG5hbWU6IFwiQW5pbWFsIFNob3dcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQSBzdG9yeSBhYm91dCBBbmltYWxcIixcclxuICAgICAgbGluazogXCJodHRwczovL2pvdmlhbC1tY2NhcnRoeS1iMDg0MTkubmV0bGlmeS5hcHAvXCJcclxuICB9LFxyXG4gIHtcclxuICAgICAgbmFtZTogXCJEZWVwIFNlYVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJQcmFjdGljZSBCdWJibGUgRWZmZWN0XCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9yb21hbnRpYy1tZXN0b3JmLTNiMTk3Ni5uZXRsaWZ5LmFwcC9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBuYW1lOiBcIkFuaW1hbCBTaG93XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc3RvcnkgYWJvdXQgQW5pbWFsXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9qb3ZpYWwtbWNjYXJ0aHktYjA4NDE5Lm5ldGxpZnkuYXBwL1wiXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3R1ZHkgYWJyb2FkIGluIEphcGFuJywgfSxcclxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdKSU4gVG9reW8gSmFwYW5lc2Ugc2Nob29sJywgfSxcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdKYXBhbiBDb2xsZWdlIG9mIEZvcmVpZ24gTGFuZ3VhZ2VzIHNjaG9vbCcsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3VuZGFpIEVsZWN0cm9uaWMgSW5mb3JtYXRpb24gQnVzaW5lc3MgQ29sbGVnZScsIH0sXHJcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnR3JhZHVhdGVkJywgfSxcclxuICB7IHllYXI6IDIwMjMsIHRleHQ6ICdHZXQgYSBKb2IgLSBpbmNvbWluZy4uLicsIH0sXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==