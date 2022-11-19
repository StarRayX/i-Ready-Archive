(window.webpackJsonp = window.webpackJsonp || []).push([[1], {314: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.default = void 0;
  var i = r(n(4)), a = r(n(5)), s = r(n(28)), o = r(n(11)), u = r(n(12)), c = r(n(10)), d = n(122), l = n(313), h = n(868), p = n(762), f = n(779);
  function v(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n, r = (0, c.default)(e);
      if (t) {
        var i = (0, c.default)(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (0, u.default)(this, n);
    };
  }
  var y = d.SHARED_DEPENDENCIES.React, g = d.SHARED_DEPENDENCIES._, m = d.UTILS.rendererLogger, _ = d.UTILS.assetUtil, E = function (e) {
    (0, o.default)(n, e);
    var t = v(n);
    function n(e, r) {
      var a;
      (0, i.default)(this, n);
      var s = e.userData.grade.replace("Grade ", ""), o = (0, p.getParameterByName)("grade") ? g.toInteger((0, p.getParameterByName)("grade")) : (0, f.gradeLevel)(s), u = g.merge({}, e, {userData: {grade: o}});
      return (a = t.call(this, u, r, l.readingCompRendererProvider))._passageStateKey = a.screenData.passage_selection, a;
    }
    return (0, a.default)(n, [{key: "renderDisplay", value: function () {
      var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n = arguments.length > 1 ? arguments[1] : void 0, r = {screen: {get: function () {
        return e.model;
      }, save: function (t) {
        e.model = t;
      }}, passage: {get: function () {
        return e.passageState;
      }, save: function (t) {
        e.passageState = t;
      }}}, i = this.Renderer;
      return y.createElement(i, {key: "display", api: this.api, models: r, ref: t, type: "main", passageContent: n, sharedScreenContent: this.sharedScreenContent, lessonInfo: this.lessonInfo, screen: this.screenData, size: this.api.screen.size, userData: this.userData});
    }}, {key: "render", value: function () {
      for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
      (e = (0, s.default)((0, c.default)(n.prototype), "render", this)).call.apply(e, [this].concat(r));
    }}, {key: "passageState", set: function (e) {
      if (this._persist) {
        var t = JSON.stringify(e), n = g.get(_, "config.state.warnAtPassageSize", 2e4);
        t.length > n && m.warn("state for passage ".concat(this._passageStateKey, " exceeds ").concat(n, " characters")), this.storage.setItem(this._passageStateKey, t);
      }
    }, get: function () {
      var e;
      return this._persist ? null == (e = this.storage.getItem(this._passageStateKey)) ? (e = {}, this.passageState = e) : e = JSON.parse(e) : e = {}, e;
    }}]), n;
  }(h.RendererLearningComponent);
  t.default = E;
}, 762: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.getParameterByName = function (e) {
    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]".concat(e, "=([^&#]*)")).exec(location.search);
    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
  }, t.gatherFeedbackActions = function (e) {
    var t = [];
    return s.forEach(e, function (e) {
      s.forEach(e, function (e) {
        s.forEach(e.sequence, function (e) {
          s.forEach(e.parts, function (e) {
            s.forEach(e.events, function (e) {
              s.forEach(e.targets, function (e) {
                if ("callable-mechanism" === e.type) {
                  var n = e.target.replace("#", "");
                  t.push(n);
                }
              });
            });
          });
        });
      });
    }), t;
  }, t.gatherRemainingScreenIds = function (e, t) {
    if (s.isUndefined(e)) return [];
    var n = e, r = n.id, i = [];
    i.push(r);
    for (; null !== n;) null !== (n = t[r].next) && (r = n.id, i.push(r));
    return i;
  }, t.findObjectByName = function e(t, n) {
    if (n in t) return [t[n]];
    return s.flatten(s.map(t, function (t) {
      return "object" === (0, i.default)(t) ? e(t, n) : [];
    }), true);
  }, t.captureElementEvent = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    u.sendEvent({type: c.ELEMENT, payload: function () {
      var r = new d;
      return r.elementId = e, r.event = t, n && (r.detail = n), r;
    }});
  }, t.delayedCall = function (e, t) {
    o.delayedCall(e, t);
  };
  var i = r(n(44)), a = n(122), s = a.SHARED_DEPENDENCIES._, o = a.SHARED_DEPENDENCIES.TweenMax, u = a.DATA_CAPTURE.dataCaptureUtil, c = a.DATA_CAPTURE.DC_EVENT_TYPES, d = a.DATA_CAPTURE.ElementPayload;
}, 779: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true}), t.lessonLevel = function (e) {
    var t;
    t = "Grade K" === e ? 0 : parseInt(e.replace("Grade ", ""), 10);
    return t;
  }, t.gradeLevel = function (e) {
    var t = r.isMenuButtonShown() ? "2" : e;
    return /^\d+$/.test(t) ? parseInt(t, 10) : 0;
  };
  var r = n(122).STORES.navigationStore;
}, 838: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true}), Object.defineProperty(t, "LearningComponent", {enumerable: true, get: function () {
    return r.LearningComponent;
  }});
  var r = n(870);
}, 839: function (e, t, n) {
  var r = n(312), i = n(23);
  function a(e, t, n, s) {
    return (a = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, t, n, a) {
      var s, o = r(e, t);
      if (o) {
        if ((s = Object.getOwnPropertyDescriptor(o, t)).set) return s.set.call(a, n), true;
        if (!s.writable) return false;
      }
      if (s = Object.getOwnPropertyDescriptor(a, t)) {
        if (!s.writable) return false;
        s.value = n, Object.defineProperty(a, t, s);
      } else i(a, t, n);
      return true;
    })(e, t, n, s);
  }
  e.exports = function (e, t, n, r, i) {
    if (!a(e, t, n, r || e) && i) throw new Error("failed to set property");
    return n;
  };
}, 840: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.VideoLearningComponent = t.DEFAULT_VIDEO_HEIGHT = void 0;
  var i = r(n(4)), a = r(n(5)), s = r(n(24)), o = r(n(28)), u = r(n(11)), c = r(n(12)), d = r(n(10)), l = r(n(15)), h = n(838);
  function p(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n, r = (0, d.default)(e);
      if (t) {
        var i = (0, d.default)(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (0, c.default)(this, n);
    };
  }
  t.DEFAULT_VIDEO_HEIGHT = 750;
  var f = function (e) {
    (0, u.default)(n, e);
    var t = p(n);
    function n(e, r, a) {
      var o;
      return (0, i.default)(this, n), o = t.call(this, e, r, a), l.default.bindAll((0, s.default)(o), ["complete", "ended", "play", "pause", "unpause"]), o._complete = false, o._ended = false, o._isPaused = false, o;
    }
    return (0, a.default)(n, [{key: "load", value: function (e) {
      var t = this;
      (0, o.default)((0, d.default)(n.prototype), "load", this).call(this, e);
      var r = this.appApi.UTILS, i = r.assetLoader, a = r.assetUtil;
      i.load({screen: this.screenData, style: this.screenData.style, onComplete: function () {
        t.videoAsset = a.getAsset({type: "video", src: t.screenData.structure.video.src}), t.onLoad();
      }});
    }}, {key: "render", value: function (e, t) {
      (0, o.default)((0, d.default)(n.prototype), "render", this).call(this, e, t), this.isAutomationRunning && (window.display = this), this.loadFailure || (this.domContainerNode.innerHTML = '<div id="'.concat("videoPlayer", '" />'), this.videoHolder = this.domContainerNode.querySelector("#".concat("videoPlayer")), this.videoHolder.appendChild(this.video), this._setupVideo());
    }}, {key: "start", value: function () {
      var e = this;
      if (this._started = true, this.state = {uiEnabled: true}, this.api.dataCapture.sendEvent.start({type: this.api.dataCapture.eventTypes.SCREEN}), this.loadFailure) this.complete(); else {
        this.videoHolder.classList.add("active");
        var t = this.video.play();
        this.skippable && this.complete(true), this._monitorVideo(), l.default.isObject(t) && t.catch(function () {
          e.api.navigation.pause();
        });
      }
      this.api.screen.preloadNext();
    }}, {key: "pause", value: function () {
      this._isPaused = true, this.loadFailure || this.video.pause();
    }}, {key: "unpause", value: function () {
      this._isPaused = false, this._ended || this.video.play();
    }}, {key: "play", value: function () {
      this.video.play();
    }}, {key: "destroy", value: function () {
      this.loadFailure || (this.videoHolder && (this.videoHolder.classList.remove("active"), this.videoHolder.remove()), this._unlisten(), this.video.pause(), this.video.unload(), this.monitorTimeout && clearTimeout(this.monitorTimeout));
      var e = this.screenData;
      this.api && this.api.dataCapture.sendEvent.destroy({contextData: {screen: e}});
    }}, {key: "_setupVideo", value: function () {
      var e = this, t = this.appApi.SCREEN, n = 750;
      this.video && this.video.videoHeight && (n = this.video.videoHeight / this.video.videoWidth * t.WIDTH), this.video.addEventListener("pause", function () {
        !e._isPaused && e.video.currentTime < e.video.duration && e.unpause();
      }), this.video.style.height = "".concat(n, "px"), this.video.style.width = "".concat(t.WIDTH, "px"), this.video.currentTime = 0, this._listen();
    }}, {key: "_monitorVideo", value: function () {
      var e = this, t = this.appApi.UTILS.rendererLogger, n = this.video.duration, r = this.bufferDuration;
      this.monitorTimeout = r > n - 1 ? setTimeout(function () {
        t.info("".concat(e.video.src, " is 100% loaded.")), e.monitorTimeout = null, e.api.screen.ready();
      }, n - r) : setTimeout(this.monitorVideo, 250);
    }}, {key: "complete", value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = true !== e && this.autoProgress, n = this.score, r = n.raw, i = void 0 === r ? 0 : r, a = n.max, s = void 0 === a ? 0 : a;
      if (!this._complete) {
        this.api.screen.complete(this.score);
        var o = this.screenData;
        this.api.dataCapture.sendEvent.complete({type: this.api.dataCapture.eventTypes.SCREEN, payload: {maxScore: s, score: i}, contextData: {screen: o, partNum: 1}}), this.api.dataCapture.sendEvent.finish({contextData: {screen: o, partNum: 1}});
      }
      this.api.screen.enableNext(t), this._complete = true;
    }}, {key: "ended", value: function () {
      this.complete(), this._ended = true;
    }}, {key: "_listen", value: function () {
      var e = this.appApi.UTILS, t = e.animationUtil, n = e.EventManager;
      n.on("ended", this.ended, this.video), n.on("error", this.complete, this.video), t.on("pause", this.pause), t.on("unpause", this.unpause);
    }}, {key: "_unlisten", value: function () {
      var e = this.appApi.UTILS, t = e.animationUtil, n = e.EventManager;
      n.off("ended", this.ended, this.video), n.off("error", this.complete, this.video), t.off("pause", this.pause), t.off("unpause", this.unpause);
    }}, {key: "isAutomationRunning", get: function () {
      return window.navigator.webdriver;
    }}, {key: "video", get: function () {
      return this.videoAsset;
    }}, {key: "loadFailure", get: function () {
      return this.video && this.video.error;
    }}, {key: "autoProgress", get: function () {
      return l.default.get(this.options, "autoProgress", l.default.get(this.screenData, "structure.metaData.autoProgress", true));
    }}, {key: "skippable", get: function () {
      return l.default.get(this.screenData, "structure.metaData.skippable", false);
    }}, {key: "score", get: function () {
      return {raw: 0, min: 0, max: 0};
    }}]), n;
  }(h.LearningComponent);
  t.VideoLearningComponent = f;
}, 841: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.Processor = void 0;
  var i = r(n(23)), a = r(n(4)), s = r(n(5)), o = n(15), u = n(842), c = n(843);
  function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  var l = function () {
    function e(t) {
      var n = t.renderer, r = t.model, s = t.settings;
      (0, a.default)(this, e), this.model = r, this.renderer = n, this.settings = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d(Object(n), true).forEach(function (t) {
            (0, i.default)(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }({autoPlay: false, complete: false, grouping: false, maxAttempts: 1, ready: true, scorable: true}, s), this._phase = this.settings.complete ? u.PHASE.COMPLETE : u.PHASE.SETUP, this._attempt = 0, (0, o.bindAll)(this, ["ready", "select", "start"]);
    }
    return (0, s.default)(e, [{key: "_lockResponse", value: function () {
      this.model.selections.push(this._userSelection);
    }}, {key: "deliverFeedback", value: function (e) {
      var t = this.attempt, n = this.isFinalAttempt, r = this.isCorrect, i = "IncorrectFeedback";
      r ? i = "CorrectFeedback" : n || (i = "TryAgainFeedback");
      var a = this.renderer["pre".concat(i)] || o.noop, s = this.renderer["post".concat(i)] || o.noop;
      e.playFeedback({attempt: t, isCorrect: r, preFeedback: a, postFeedback: s}), this.renderer.postFeedback(e);
    }}, {key: "deselect", value: function (e, t) {
      this.useDoneButton && e.hideDoneButton(), this.renderer.deselect(e, t);
    }}, {key: "feedbackPhase", value: function (e) {
      this.renderer.hideDoneOnEvaluation && e.hideDoneButton(), this.deliverFeedback(e), this.interactiveFeedback(e);
    }}, {key: "interactiveFeedback", value: function (e) {
      if (this.hasInteractiveFeedback) {
        var t = this.isFinalAttempt, n = "incorrect";
        this.isCorrect ? n = "correct" : t || (n = "tryAgain");
        var r = this.renderer["".concat(n, "InteractiveFeedbackIntro")] || o.noop, i = this.renderer["".concat(n, "InteractiveFeedbackInteraction")] || o.noop, a = this.renderer["".concat(n, "InteractiveFeedbackOutro")] || o.noop;
        r(e), e.enableUI(), i(e), e.disableUI(), a(e);
      }
    }}, {key: "introPhase", value: function (e) {
      this.renderer.performIntro(e), this.settings.autoEnableHelp && e.enableHelp(), e.enableUI();
    }}, {key: "ready", value: function (e) {
      this.isReady && (this.phase === u.PHASE.COMPLETE && this.renderer.performTransitionIn(e), this.start(e));
    }}, {key: "score", value: function (e) {
      if (!this.complete) {
        var t = this.renderer.score(this.isCorrect, this.userSelection, this.attempt);
        this.model.result.score += t;
      }
      this.attempt++, this.isComplete && (e.completeScreen({raw: this.model.result.score, min: 0, max: this.renderer.maxScore}), c.emitter.emit("processor:score", this));
    }}, {key: "select", value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      this.userSelection = t, this.useDoneButton ? (e.showDoneButton(), e.shouldEnableDoneButton(t)) : this.start(e);
    }}, {key: "setupPhase", value: function (e) {
      this.renderer.performTransitionIn(e), e.disableHelp(), e.disableUI();
    }}, {key: "start", value: function (e) {
      var t = this, n = this.phase;
      switch (this.phase) {
        case u.PHASE.LOCKED:
          break;
        case u.PHASE.SETUP:
          n = u.PHASE.INTRO, this.setupPhase(e);
          break;
        case u.PHASE.INTRO:
          this.introPhase(e), e.execute(function () {
            n = u.PHASE.USER_INTERACTION, t.phase = n;
          }), this.postIntro(e);
          break;
        case u.PHASE.USER_INTERACTION:
          n = u.PHASE.FEEDBACK, this.userInteractionPhase(e);
          break;
        case u.PHASE.FEEDBACK:
          this.feedbackPhase(e), this.isComplete ? n = !this.isCorrect && this.hasForcedAttempt ? u.PHASE.FORCE_ATTEMPT : u.PHASE.WRAPUP : this.postFeedBack(e);
          break;
        case u.PHASE.FORCE_ATTEMPT:
          this.forceAttemptInteraction(e);
          break;
        case u.PHASE.WRAPUP:
          this.wrapup(e), this.isComplete ? (c.emitter.emit("processor:".concat(this.phase), this), n = u.PHASE.COMPLETE) : n = u.PHASE.USER_INTERACTION, this.phase = n;
          break;
        case u.PHASE.COMPLETE:
          this.renderer.performCompletedState(e);
      }
      c.emitter.emit("processor:".concat(this.phase), this), this.phase !== n && (this.phase = n, this.start(e));
    }}, {key: "userInteractionPhase", value: function (e) {
      e.disableUI(), e.disableHelp(), e.disableDoneButton(), this._lockResponse(), this.score(e);
    }}, {key: "forceAttemptInteraction", value: function (e) {
      var t = this;
      e.execute(function () {
        return t.phase = u.PHASE.WRAPUP;
      }), e.enableUI(), this.settings.autoEnableHelp && e.enableHelp(), this.renderer.performForceAttempt(e);
    }}, {key: "wrapup", value: function (e) {
      var t = this;
      e.completeScreen({raw: this.model.result.score, min: 0, max: this.renderer.maxScore}), e.disableHelp(), e.hideDoneButton(), this.renderer.performOutro(e), this.renderer.performTransitionOut(e), e.finish(this.settings.autoProgressOnFinish), e.execute(function () {
        return t.phase = u.PHASE.COMPLETE;
      });
    }}, {key: "postIntro", value: function (e) {
      this.autoPlay && this.renderer.performAutoplay(e, {method: "introPhase"}), this.renderer.postIntro(e);
    }}, {key: "postFeedBack", value: function (e) {
      var t = this;
      e.execute(function () {
        return t.phase = u.PHASE.USER_INTERACTION;
      }), e.enableUI(), this.settings.autoEnableHelp && e.enableHelp(), this.autoPlay && this.renderer.performAutoplay(e, {method: "postFeedBack "}), this.renderer.postDone(e);
    }}, {key: "attempt", get: function () {
      return this._attempt;
    }, set: function (e) {
      this._attempt = e;
    }}, {key: "autoPlay", get: function () {
      return this.settings.autoPlay;
    }}, {key: "complete", get: function () {
      return this.model.complete;
    }}, {key: "hasForcedAttempt", get: function () {
      return this.renderer.hasForcedAttempt;
    }}, {key: "hasInteractiveFeedback", get: function () {
      return this.settings.hasInteractiveFeedback;
    }}, {key: "isCorrect", get: function () {
      return this.renderer.isCorrect(this.userSelection);
    }}, {key: "isComplete", get: function () {
      return !this.renderer.hasNextStep() && (this.isCorrect || this.isFinalAttempt);
    }}, {key: "isFinalAttempt", get: function () {
      return !this.isCorrect && this.attempt >= this.settings.maxAttempts;
    }}, {key: "isReady", set: function (e) {
      this.settings.ready = e;
    }, get: function () {
      return this.settings.ready;
    }}, {key: "phase", set: function (e) {
      this.renderer.phase = e, this._phase = e;
    }, get: function () {
      return this._phase;
    }}, {key: "settings", get: function () {
      return this._settings;
    }, set: function (e) {
      this._settings = e;
    }}, {key: "useDoneButton", get: function () {
      return this.renderer.useDoneButton;
    }}, {key: "userSelections", get: function () {
      return this.model.selections;
    }}, {key: "userSelection", get: function () {
      return (0, o.isUndefined)(this._userSelection) ? (0, o.last)(this.model.selections) : this._userSelection;
    }, set: function (e) {
      this._userSelection = e;
    }}]), e;
  }();
  t.Processor = l;
}, 842: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true}), t.PHASE = void 0;
  t.PHASE = {LOCKED: -1, SETUP: 0, INTRO: 10, USER_INTERACTION: 20, FEEDBACK: 30, FORCE_ATTEMPT: 40, WRAPUP: 50, COMPLETE: 60};
}, 843: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true});
  var r = n(877);
  Object.keys(r).forEach(function (e) {
    "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {enumerable: true, get: function () {
      return r[e];
    }}));
  });
}, 868: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.RendererLearningComponent = void 0;
  var i = r(n(38)), a = r(n(4)), s = r(n(5)), o = r(n(24)), u = r(n(839)), c = r(n(28)), d = r(n(11)), l = r(n(12)), h = r(n(10)), p = n(122), f = r(n(869)), v = n(779);
  function y(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n, r = (0, h.default)(e);
      if (t) {
        var i = (0, h.default)(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (0, l.default)(this, n);
    };
  }
  var g, m = p.ACTIONS.navigationActions, _ = p.MODULES.AudioModule, E = p.MODULES.DisplayAnimationModule, S = p.ORCHESTRATORS.sequenceRunner, P = p.SHARED_DEPENDENCIES.ReactDOM, k = p.SHARED_DEPENDENCIES._, b = p.UTILS.animationUtil, C = p.UTILS.assetLoader, A = p.UTILS.assetUtil, D = p.UTILS.audioPlayer, R = p.STORES.navigationStore, O = p.DATA_CAPTURE.dataCaptureUtil, I = p.DATA_CAPTURE.DC_EVENT_TYPES, T = p.DATA_CAPTURE.DC_EVENT_PAYLOADS, L = false;
  m.setClassName("two-fifths instant disabled");
  var N = function (e) {
    (0, d.default)(n, e);
    var t = y(n);
    function n(e, r, i) {
      var s;
      (0, a.default)(this, n), (s = t.call(this, e, r)).updatePaths = function (e) {
        e && (e = k.isString(e) ? [e] : e, k.each(e, function (e) {
          return s.updatedPaths.push(e);
        })), s.onStateChange();
      }, s.toggleAppClassName = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        s.lessonContainer && (k.isNull(t) ? s.lessonContainer.classList.contains(e) ? s.lessonContainer.classList.remove(e) : s.lessonContainer.classList.add(e) : t ? s.lessonContainer.classList.add(e) : s.lessonContainer.classList.remove(e));
      }, s._rendererProvider = i, s.assets = {};
      var u = s.screenData.properties.scored, c = k.get(s.screenData, "style.properties.saveIntermediateState", false), d = k.get(s.screenData, "style.properties.disableState", false);
      return s._persist = !d && (c || u), k.bindAll((0, o.default)(s), "_done", "_onSequenceChange", "onStateChange"), s.updatedPaths = [], s;
    }
    return (0, s.default)(n, [{key: "load", value: function (e) {
      var t = this, r = this.screenData, a = this.style, s = this.sharedScreenContent;
      (0, c.default)((0, h.default)(n.prototype), "load", this).call(this, e);
      var o = s[r.passage_selection], u = this.loadPassage(o, r.passage_chunk_selection), d = u.images, l = u.audio;
      A.options = {image: {blobify: true}};
      var p = new Promise(function (e, t) {
        C.load({screen: r, style: a, additionalAudio: l, additionalImages: d, onComplete: e});
      });
      return Promise.all([this._rendererProvider.getRenderer(this.style.id), p]).then(function (e) {
        var n = (0, i.default)(e, 1)[0];
        return t.Renderer = n.module.renderer, t.onLoad(), n;
      });
    }}, {key: "loadPassage", value: function (e, t) {
      var n = [], r = [];
      if (e && !k.isNull(t)) {
        var i = e.data[t].chunkStyle;
        if (i && i.backgroundImage) {
          var a = i.backgroundImage.match(/%cdnURL%(.*)(\.jp(e?)g|\.png|\.gif)/g);
          if (a) {
            var s = k.first(a).replace("%cdnURL%", "${content}/");
            n.push({src: s, type: "image"});
          }
        }
        var o = (0, v.gradeLevel)(this.userData.grade), u = (0, v.lessonLevel)(this.lessonInfo.grade);
        if (o < 2 && u < 3) {
          var c = k.find(e.generated_audio, function (e) {
            return e.audio[0].meta.chunkId === t;
          });
          c && k.some(c.audio) && k.merge(r, c.audio);
        }
      }
      return {images: n, audio: r};
    }}, {key: "render", value: function () {
      for (var e, t = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      (e = (0, c.default)((0, h.default)(n.prototype), "render", this)).call.apply(e, [this].concat(i)), this._enhanceApi(), document.querySelector(".header__close").style.pointerEvents = "none", this.api.lesson.toggleClassName("showMenu", R.isMenuButtonShown() || false), this.api.navigation.help.callback = function () {
        return t.renderer.help();
      }, this.api.navigation.help.visible = true, this.api.navigation.customButton.callback = function () {
        return t.renderer.customButton();
      }, this.api.navigation.customButton.visible = false, this.api.navigation.done.callback = function () {
        L || (L = true, g = setInterval(function () {
          true === document.querySelector("button.done").disabled && (L = false, clearInterval(g));
        }, 10), t._done(), t.renderer.done());
      }, this.passage.then(function (e) {
        var n = t.renderDisplay(function (e) {
          e && (t.renderer = e, t.audio = new _({assets: t.assets, cue: t.renderer.cue, searchScreen: t.renderer.searchScreen, searchStyle: t.renderer.searchStyle, onUpdate: t.updatePaths}), t.renderer.audio = t.audio, t.displayAnimations = new E, t._listen(), t.renderer.ready());
        }, e);
        P.render(n, t.domContainerNode);
      });
    }}, {key: "start", value: function () {
      this._started = true, this._onStart && this._onStart(), O.sendEvent({type: I.SCREEN, payload: T.START, contextData: {screen: this.screenData, partNum: 1}});
    }}, {key: "pause", value: function () {
      this.renderer && this.renderer.setState({paused: true}), b.pauseUpdates(), this.audio.pause();
    }}, {key: "unpause", value: function () {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      this.renderer && e && this.renderer.setState({paused: false}), b.resumeUpdates(), this.audio && this.audio.resume();
    }}, {key: "destroy", value: function () {
      A.clearContext(this.screenData.id), this.domContainerNode && (P.unmountComponentAtNode(this.domContainerNode), this.domContainerNode.innerHTML = "", this.audio.destroy()), this.renderer && (this.renderer.audio = null, this.api.navigation.done.visible = false, this.api.navigation.done.enabled = false), this._unlisten(), S.abort(), this.unpause(false), D.unlock();
      var e = this.screenData, t = R.getStep(e.id), n = {section: k.get(t, "section"), screen: e, partNum: 1};
      O.sendEvent({payload: T.DESTROY, contextData: n});
    }}, {key: "renderDisplay", value: function () {
      throw new Error("renderDisplay must be implemented by a subclass");
    }}, {key: "_onSequenceChange", value: function () {
      this.displayAnimations.process(S.activeDisplayAnimations, this.renderer);
    }}, {key: "_done", value: function () {
      this.audio.stop();
    }}, {key: "onStateChange", value: function () {
      var e = this;
      if (!k.isEmpty(this.updatedPaths)) {
        var t = {};
        k.forEach(this.updatedPaths, function (n) {
          k.set(t, n, k.get(e.state, n));
        }), t.assets && (t.assets = k.omit(t.assets, k.isUndefined));
      }
    }}, {key: "_enhanceApi", value: function () {
      this.api.lesson.toggleClassName || (this.api.lesson.toggleClassName = this.toggleAppClassName), this.api.lesson.sharedScreenContent = this.sharedScreenContent;
    }}, {key: "_listen", value: function () {
      S.on("change", this._onSequenceChange), this.audio.listen();
    }}, {key: "_unlisten", value: function () {
      S.off("change", this._onSequenceChange), this.audio && this.audio.unlisten();
    }}, {key: "searchScreen", value: function (e) {
      var t = JSON.toXML(this.screenData, true);
      return JSON.search(t, e);
    }}, {key: "model", set: function (e) {
      this._persist && (0, u.default)((0, h.default)(n.prototype), "state", e, this, true), this._model = e;
    }, get: function () {
      return k.isUndefined(this._model) && (this._persist && (this._model = (0, c.default)((0, h.default)(n.prototype), "state", this)), k.isUndefined(this._model) && (this._model = {})), this._model;
    }}, {key: "lessonContainer", get: function () {
      return document.getElementById("lesson");
    }}, {key: "passage", get: function () {
      var e = this.screenData, t = this.sharedScreenContent, n = k.cloneDeep(t[e.passage_selection]), r = e.passage_chunk_selection;
      return new Promise(function (e, t) {
        if (n && !k.isNull(r)) {
          n.data = k.map(n.data, function (e, t) {
            var n = k.cloneDeep(e);
            return n.reduce = Array.prototype.reduce, n.uniqueKey = "".concat(e.title, "-").concat(t), n;
          });
          var i = n.data[r], a = i.chunkDelta, s = i.chunkStyle, o = [];
          if (k.each(a.ops, function (e, t) {
            var n = e.insert, r = void 0 !== n && n;
            if (r && r.image && r.image.match(/%cdnURL%/g)) {
              var i = r.image.replace("%cdnURL%", "${content}/");
              o.push(new Promise(function (e, t) {
                A.loadAsset({src: i, type: "image"}).assetLoader.then(function (t) {
                  r.image = t.src, e();
                });
              }));
            }
          }), s && s.backgroundImage) {
            var u = s.backgroundImage.match(/%cdnURL%(.*)(\.jp(e?)g|\.png|\.gif)/g);
            if (u) {
              var c = k.first(u).replace("%cdnURL%", "${content}/");
              o.push(new Promise(function (e, t) {
                A.loadAsset({src: c, type: "image"}).assetLoader.then(function (t) {
                  s.backgroundImage = "url('".concat(t.src, "')"), e();
                });
              }));
            }
          }
          Promise.all(o).then(function () {
            return e(n);
          });
        } else e(n);
      });
    }}, {key: "state", set: function (e) {
      this._state = e;
    }, get: function () {
      return this._state;
    }}, {key: "style", get: function () {
      return this.screenData.style;
    }}]), n;
  }(f.default.LearningComponent);
  t.RendererLearningComponent = N;
}, 869: function (e, t, n) {
  "use strict";
  var r = n(123);
  Object.defineProperty(t, "__esModule", {value: true}), t.default = void 0;
  var i = n(838), a = r(n(871)), s = n(873), o = r(n(875)), u = r(n(843)), c = {LearningComponent: i.LearningComponent, videoLearningComponent: a, RendererLearningComponent: s.RendererLearningComponent, processor: o, utils: u};
  t.default = c;
}, 870: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.LearningComponent = void 0;
  var i = r(n(153)), a = r(n(4)), s = r(n(5)), o = function () {
    function e(t, n, r) {
      var s = (0, i.default)({}, t);
      (0, a.default)(this, e), Object.assign(this, s), this.storage = n, this.appApi = r;
    }
    return (0, s.default)(e, [{key: "_saveScreenInfo", value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {keyName: this.screenData.id}, n = t.keyName;
      this.storage.setItem(n, JSON.stringify(e));
    }}, {key: "_fetchScreenInfo", value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {keyName: this.screenData.id}, t = e.keyName;
      return JSON.parse(this.storage.getItem(t));
    }}, {key: "load", value: function (e) {
      this.onLoad = e;
    }}, {key: "render", value: function (e, t) {
      this.domContainerNode = e, this.api = t;
    }}, {key: "start", value: function () {}}, {key: "pause", value: function () {}}, {key: "unpause", value: function () {}}, {key: "destroy", value: function () {
      delete this.onLoad;
    }}, {key: "state", set: function (e) {
      this._saveScreenInfo(e);
    }, get: function () {
      return this._fetchScreenInfo();
    }}]), e;
  }();
  t.LearningComponent = o;
}, 871: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true}), Object.defineProperty(t, "VideoLearningComponent", {enumerable: true, get: function () {
    return r.VideoLearningComponent;
  }}), Object.defineProperty(t, "registerVideoProvider", {enumerable: true, get: function () {
    return i.register;
  }});
  var r = n(840), i = n(872);
}, 872: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true}), t.register = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inter_t2_s1", t = arguments.length > 1 ? arguments[1] : void 0;
    t(e, {load: function () {
      return Promise.resolve({module: {default: r.VideoLearningComponent}});
    }});
  };
  var r = n(840);
}, 873: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true}), Object.defineProperty(t, "RendererLearningComponent", {enumerable: true, get: function () {
    return r.RendererLearningComponent;
  }});
  var r = n(874);
}, 874: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.RendererLearningComponent = void 0;
  var i = r(n(38)), a = r(n(4)), s = r(n(5)), o = r(n(24)), u = r(n(839)), c = r(n(28)), d = r(n(11)), l = r(n(12)), h = r(n(10)), p = r(n(15));
  function f(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n, r = (0, h.default)(e);
      if (t) {
        var i = (0, h.default)(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (0, l.default)(this, n);
    };
  }
  var v = function (e) {
    (0, d.default)(n, e);
    var t = f(n);
    function n(e, r, i, s) {
      var u;
      (0, a.default)(this, n), (u = t.call(this, e, r, s))._rendererProvider = i, u.assets = {};
      var c = u.screenData.properties.scored, d = p.default.get(u.screenData, "style.properties.saveIntermediateState", false), l = p.default.get(u.screenData, "style.properties.disableState", false);
      return u._persist = !l && (d || c), u._isHelpAudioPlaying = false, p.default.bindAll((0, o.default)(u), "_done", "_onSequenceChange"), u.updatedPaths = [], u;
    }
    return (0, s.default)(n, [{key: "load", value: function (e) {
      var t = this;
      return (0, c.default)((0, h.default)(n.prototype), "load", this).call(this, e), Promise.all([this._rendererProvider.getRenderer(this.style.id)]).then(function (e) {
        var n = (0, i.default)(e, 1)[0];
        return t.Renderer = n.module.renderer, t.onLoad(), n;
      });
    }}, {key: "render", value: function () {
      for (var e, t = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      (e = (0, c.default)((0, h.default)(n.prototype), "render", this)).call.apply(e, [this].concat(i));
      var s = this.appApi.SHARED_DEPENDENCIES.ReactDOM, o = this.appApi.MODULES, u = o.AudioModule, d = o.DisplayAnimationModule;
      this.api.navigation.help.callback = function () {
        t._isHelpAudioPlaying ? (t._isHelpAudioPlaying = false, t.renderer.onHelpStop()) : (t._isHelpAudioPlaying = true, t.renderer.help());
      }, this.api.navigation.done.callback = function () {
        t._done(), t.renderer.done();
      };
      var l = this.renderDisplay(function (e) {
        e && (t.renderer = e, t.audio = new u({assets: t.assets, cue: t.renderer.cue, searchScreen: t.renderer.searchScreen, searchStyle: t.renderer.searchStyle}), t.displayAnimations = new d, t._listen(), t.renderer.ready());
      });
      s.render(l, this.domContainerNode);
    }}, {key: "start", value: function () {
      this._started = true, this._onStart && this._onStart(), this.api.dataCapture.sendEvent.start({type: this.api.dataCapture.eventTypes.SCREEN});
    }}, {key: "pause", value: function () {
      this.appApi.UTILS.animationUtil.pauseUpdates(), this.audio.pause();
    }}, {key: "unpause", value: function () {
      this.appApi.UTILS.animationUtil.resumeUpdates(), this.audio.resume();
    }}, {key: "destroy", value: function () {
      var e = this.appApi.SHARED_DEPENDENCIES.ReactDOM, t = this.appApi.UTILS.assetUtil, n = this.screenData;
      this.api.dataCapture.sendEvent.destroy({contextData: {screen: n}}), t.clearContext(this.screenData.id), e.unmountComponentAtNode(this.domContainerNode), this.domContainerNode.innerHTML = "", this.audio.destroy(), this._unlisten(), this.sequenceRunner.abort(), this.unpause();
    }}, {key: "renderDisplay", value: function () {
      throw new Error("renderDisplay must be implemented by a subclass");
    }}, {key: "_onSequenceChange", value: function () {
      this.displayAnimations.process(this.sequenceRunner.activeDisplayAnimations, this.renderer);
    }}, {key: "_done", value: function () {
      this.audio.stop();
    }}, {key: "_listen", value: function () {
      this.sequenceRunner.on("change", this._onSequenceChange), this.audio.listen();
    }}, {key: "_unlisten", value: function () {
      this.sequenceRunner.off("change", this._onSequenceChange), this.audio.unlisten();
    }}, {key: "searchScreen", value: function (e) {
      var t = JSON.toXML(this.screen, true);
      return JSON.search(t, e);
    }}, {key: "model", set: function (e) {
      this._persist && (0, u.default)((0, h.default)(n.prototype), "state", e, this, true), this._model = e;
    }, get: function () {
      return p.default.isUndefined(this._model) && (this._persist && (this._model = (0, c.default)((0, h.default)(n.prototype), "state", this)), p.default.isUndefined(this._model) && (this._model = {})), this._model;
    }}, {key: "state", set: function (e) {
      this._state = e;
    }, get: function () {
      return this._state;
    }}, {key: "style", get: function () {
      return this.screenData.style;
    }}, {key: "sequenceRunner", get: function () {
      return this.appApi.ORCHESTRATORS.sequenceRunner;
    }}]), n;
  }(n(838).LearningComponent);
  t.RendererLearningComponent = v;
}, 875: function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true});
  var r = {createProcessor: true};
  t.createProcessor = void 0;
  var i = n(876);
  Object.keys(i).forEach(function (e) {
    "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {enumerable: true, get: function () {
      return i[e];
    }}));
  });
  var a = n(841);
  Object.keys(a).forEach(function (e) {
    "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === a[e] || Object.defineProperty(t, e, {enumerable: true, get: function () {
      return a[e];
    }}));
  });
  var s = n(842);
  Object.keys(s).forEach(function (e) {
    "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === s[e] || Object.defineProperty(t, e, {enumerable: true, get: function () {
      return s[e];
    }}));
  });
  t.createProcessor = function (e) {
    var t = e.renderer, n = e.model, r = e.settings;
    return r.grouping ? new i.GroupingProcessor({renderer: t, model: n, settings: r}) : new a.Processor({renderer: t, model: n, settings: r});
  };
}, 876: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.GroupingProcessor = void 0;
  var i = r(n(4)), a = r(n(5)), s = r(n(28)), o = r(n(11)), u = r(n(12)), c = r(n(10)), d = n(15);
  function l(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n, r = (0, c.default)(e);
      if (t) {
        var i = (0, c.default)(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (0, u.default)(this, n);
    };
  }
  var h = function (e) {
    (0, o.default)(n, e);
    var t = l(n);
    function n(e) {
      var r, a = e.renderer, s = e.model, o = e.settings;
      return (0, i.default)(this, n), (r = t.call(this, {renderer: a, model: s, settings: o}))._groupMap = {}, (0, d.map)(r.groups, function (e) {
        r._groupMap[e.id] = {attempt: 0};
      }), r;
    }
    return (0, a.default)(n, [{key: "userInteractionPhase", value: function (e) {
      e.hideDoneButton(), (0, s.default)((0, c.default)(n.prototype), "userInteractionPhase", this).call(this, e);
    }}, {key: "attempt", get: function () {
      var e = this.userSelection, t = e.id, n = e.bucketId;
      return (0, d.isUndefined)(n) || !this._groupMap[n] ? this._groupMap[t].attempt : (this._groupMap[n][t] = this._groupMap[n][t] || {attempt: 0}, this._groupMap[n][t].attempt);
    }, set: function (e) {
      var t = this.userSelection, n = t.id, r = t.bucketId;
      (0, d.isUndefined)(r) || !this._groupMap[r] ? this._groupMap[n].attempt = e : (this._groupMap[r][n] = this._groupMap[r][n] || {attempt: 0}, this._groupMap[r][n].attempt = e);
    }}, {key: "groups", get: function () {
      return this.renderer.buckets;
    }}, {key: "isGroupingActivity", get: function () {
      return this.settings.grouping;
    }}]), n;
  }(n(841).Processor);
  t.GroupingProcessor = h;
}, 877: function (e, t, n) {
  "use strict";
  var r = n(2);
  Object.defineProperty(t, "__esModule", {value: true}), t.emitter = t.EventEmitter = void 0;
  var i = r(n(4)), a = r(n(11)), s = r(n(12)), o = r(n(10));
  function u(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n, r = (0, o.default)(e);
      if (t) {
        var i = (0, o.default)(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (0, s.default)(this, n);
    };
  }
  var c = function (e) {
    (0, a.default)(n, e);
    var t = u(n);
    return n;
  }(r(n(193)).default);
  t.EventEmitter = c;
  var d = new c;
  t.emitter = d;
}}]);
