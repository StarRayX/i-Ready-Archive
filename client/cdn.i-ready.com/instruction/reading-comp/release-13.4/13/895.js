(self.webpackChunkreading_comp = self.webpackChunkreading_comp || []).push([
    [895], {
        71712: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LearningComponent = void 0;
            var i = r(n(10434)),
                a = r(n(56690)),
                s = r(n(89728)),
                o = function() {
                    function e(t, n, r) {
                        var s = (0, i.default)({}, t);
                        (0, a.default)(this, e), Object.assign(this, s), this.storage = n, this.appApi = r
                    }
                    return (0, s.default)(e, [{
                        key: "state",
                        get: function() {
                            return this._fetchScreenInfo()
                        },
                        set: function(e) {
                            this._saveScreenInfo(e)
                        }
                    }, {
                        key: "_saveScreenInfo",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    keyName: this.screenData.id
                                },
                                n = t.keyName;
                            this.storage.setItem(n, JSON.stringify(e))
                        }
                    }, {
                        key: "_fetchScreenInfo",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                    keyName: this.screenData.id
                                },
                                t = e.keyName;
                            return JSON.parse(this.storage.getItem(t))
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            this.onLoad = e
                        }
                    }, {
                        key: "render",
                        value: function(e, t) {
                            this.domContainerNode = e, this.api = t
                        }
                    }, {
                        key: "start",
                        value: function() {}
                    }, {
                        key: "pause",
                        value: function() {}
                    }, {
                        key: "unpause",
                        value: function() {}
                    }, {
                        key: "destroy",
                        value: function() {
                            delete this.onLoad
                        }
                    }]), e
                }();
            t.LearningComponent = o
        },
        17756: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LearningComponent", {
                enumerable: !0,
                get: function() {
                    return r.LearningComponent
                }
            });
            var r = n(71712)
        },
        3332: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RendererLearningComponent = void 0;
            var i = r(n(38416)),
                a = r(n(27424)),
                s = r(n(56690)),
                o = r(n(89728)),
                u = r(n(66115)),
                c = r(n(53788)),
                l = r(n(41588)),
                d = r(n(61655)),
                p = r(n(94993)),
                h = r(n(73808)),
                f = r(n(96486));

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = function(e) {
                (0, d.default)(i, e);
                var t, n, r = (t = i, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = (0, h.default)(t);
                    if (n) {
                        var i = (0, h.default)(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return (0, p.default)(this, e)
                });

                function i(e, t, n, a) {
                    var o;
                    (0, s.default)(this, i), (o = r.call(this, e, t, a))._rendererProvider = n, o.assets = {};
                    var c = o.screenData.properties.scored,
                        l = f.default.get(o.screenData, "style.properties.saveIntermediateState", !1),
                        d = f.default.get(o.screenData, "style.properties.disableState", !1);
                    return o._persist = !d && (l || c), o._isHelpAudioPlaying = !1, o._state = {
                        started: !1
                    }, f.default.bindAll((0, u.default)(o), "_done", "_onSequenceChange"), o.updatedPaths = [], o
                }
                return (0, o.default)(i, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        return (0, l.default)((0, h.default)(i.prototype), "load", this).call(this, e), Promise.all([this._rendererProvider.getRenderer(this.style.id)]).then((function(e) {
                            var n = (0, a.default)(e, 1)[0];
                            return t.Renderer = n.module.renderer, t.onLoad(), n
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var e, t = this, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        (e = (0, l.default)((0, h.default)(i.prototype), "render", this)).call.apply(e, [this].concat(r));
                        var s = this.appApi.SHARED_DEPENDENCIES.ReactDOM,
                            o = this.appApi.MODULES,
                            u = o.AudioModule,
                            c = o.DisplayAnimationModule;
                        this.api.navigation.help.callback = function() {
                            t._isHelpAudioPlaying ? (t._isHelpAudioPlaying = !1, t.renderer.onHelpStop()) : (t._isHelpAudioPlaying = !0, t.renderer.help())
                        }, this.api.navigation.done.callback = function() {
                            t._done(), t.renderer.done()
                        };
                        var d = this.renderDisplay((function(e) {
                            e && (t.renderer = e, t.audio = new u({
                                assets: t.assets,
                                cue: t.renderer.cue,
                                searchScreen: t.renderer.searchScreen,
                                searchStyle: t.renderer.searchStyle
                            }), t.displayAnimations = new c, t._listen(), t.renderer.ready())
                        }));
                        s.render(d, this.domContainerNode)
                    }
                }, {
                    key: "start",
                    value: function() {
                        this._updateState({
                            started: !0
                        }), this._onStart && this._onStart(), this.api.dataCapture.sendEvent.start({
                            type: this.api.dataCapture.eventTypes.SCREEN
                        })
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.appApi.UTILS.animationUtil.pauseUpdates(), this.audio.pause()
                    }
                }, {
                    key: "unpause",
                    value: function() {
                        this.appApi.UTILS.animationUtil.resumeUpdates(), this.audio.resume()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.appApi.SHARED_DEPENDENCIES.ReactDOM,
                            t = this.appApi.UTILS.assetUtil,
                            n = this.screenData;
                        this.api.dataCapture.sendEvent.destroy({
                            contextData: {
                                screen: n
                            }
                        }), t.clearContext(this.screenData.id), e.unmountComponentAtNode(this.domContainerNode), this.domContainerNode.innerHTML = "", this.audio.destroy(), this._unlisten(), this.sequenceRunner.abort(), this.unpause()
                    }
                }, {
                    key: "renderDisplay",
                    value: function() {
                        throw new Error("renderDisplay must be implemented by a subclass")
                    }
                }, {
                    key: "model",
                    get: function() {
                        return f.default.isUndefined(this._model) && (this._persist && (this._model = (0, l.default)((0, h.default)(i.prototype), "state", this)), f.default.isUndefined(this._model) && (this._model = {})), this._model
                    },
                    set: function(e) {
                        this._persist && (0, c.default)((0, h.default)(i.prototype), "state", e, this, !0), this._model = e
                    }
                }, {
                    key: "_onSequenceChange",
                    value: function() {
                        this.displayAnimations.process(this.sequenceRunner.activeDisplayAnimations, this.renderer)
                    }
                }, {
                    key: "_done",
                    value: function() {
                        this.audio.stop()
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this._state
                    },
                    set: function(e) {
                        this._state = e
                    }
                }, {
                    key: "style",
                    get: function() {
                        return this.screenData.style
                    }
                }, {
                    key: "sequenceRunner",
                    get: function() {
                        return this.appApi.ORCHESTRATORS.sequenceRunner
                    }
                }, {
                    key: "_started",
                    get: function() {
                        return this.state.started
                    },
                    set: function(e) {
                        this._updateState({
                            started: e
                        })
                    }
                }, {
                    key: "_updateState",
                    value: function(e) {
                        this.state = y(y({}, this.state), e)
                    }
                }, {
                    key: "_listen",
                    value: function() {
                        this.sequenceRunner.on("change", this._onSequenceChange), this.audio.listen()
                    }
                }, {
                    key: "_unlisten",
                    value: function() {
                        this.sequenceRunner.off("change", this._onSequenceChange), this.audio.unlisten()
                    }
                }, {
                    key: "searchScreen",
                    value: function(e) {
                        var t = JSON.toXML(this.screen, !0);
                        return JSON.search(t, e)
                    }
                }]), i
            }(n(17756).LearningComponent);
            t.RendererLearningComponent = g
        },
        15149: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RendererLearningComponent", {
                enumerable: !0,
                get: function() {
                    return r.RendererLearningComponent
                }
            });
            var r = n(3332)
        },
        15118: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VideoLearningComponent = t.DEFAULT_VIDEO_HEIGHT = void 0;
            var i = r(n(38416)),
                a = r(n(56690)),
                s = r(n(89728)),
                o = r(n(66115)),
                u = r(n(41588)),
                c = r(n(61655)),
                l = r(n(94993)),
                d = r(n(73808)),
                p = r(n(96486)),
                h = n(17756);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = "videoPlayer";
            t.DEFAULT_VIDEO_HEIGHT = 750;
            var g = function(e) {
                (0, c.default)(i, e);
                var t, n, r = (t = i, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = (0, d.default)(t);
                    if (n) {
                        var i = (0, d.default)(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return (0, l.default)(this, e)
                });

                function i(e, t, n) {
                    var s;
                    return (0, a.default)(this, i), (s = r.call(this, e, t, n))._state = {
                        completed: !1,
                        ended: !1,
                        paused: !1,
                        started: !1
                    }, p.default.bindAll((0, o.default)(s), ["complete", "ended", "play", "pause", "unpause"]), s
                }
                return (0, s.default)(i, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        (0, u.default)((0, d.default)(i.prototype), "load", this).call(this, e);
                        var n = this.appApi.UTILS,
                            r = n.assetLoader,
                            a = n.assetUtil;
                        r.load({
                            screen: this.screenData,
                            style: this.screenData.style,
                            onComplete: function() {
                                t.videoAsset = a.getAsset({
                                    type: "video",
                                    src: t.screenData.structure.video.src
                                }), t.onLoad()
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function(e, t) {
                        (0, u.default)((0, d.default)(i.prototype), "render", this).call(this, e, t), this.isAutomationRunning && (window.display = this), this.loadFailure || (this.domContainerNode.innerHTML = '<div id="'.concat(y, '" />'), this.videoHolder = this.domContainerNode.querySelector("#".concat(y)), this.videoHolder.appendChild(this.video), this._setupVideo())
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = this;
                        if (this._updateState({
                                uiEnabled: !0,
                                started: !0
                            }), this.api.dataCapture.sendEvent.start({
                                type: this.api.dataCapture.eventTypes.SCREEN
                            }), this.loadFailure) this.complete();
                        else {
                            this.videoHolder.classList.add("active");
                            var t = this.video.play();
                            this.skippable && this.complete(!0), this._monitorVideo(), p.default.isObject(t) && t.catch((function() {
                                e.api.navigation.pause()
                            }))
                        }
                        this.api.screen.preloadNext()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this._updateState({
                            paused: !0
                        }), this.loadFailure || this.video.pause()
                    }
                }, {
                    key: "unpause",
                    value: function() {
                        this._updateState({
                            paused: !1
                        }), this.state.ended || this.video.play()
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.video.play()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.loadFailure || (this.videoHolder && (this.videoHolder.classList.remove("active"), this.videoHolder.remove()), this._unlisten(), this.video.pause(), this.video.unload(), this.monitorTimeout && clearTimeout(this.monitorTimeout));
                        var e = this.screenData;
                        this.api && this.api.dataCapture.sendEvent.destroy({
                            contextData: {
                                screen: e
                            }
                        }), this._updateState({
                            started: !1
                        })
                    }
                }, {
                    key: "isAutomationRunning",
                    get: function() {
                        var e = p.default.get(this.api, "ui.automation.isRunning");
                        return p.default.isFunction(e) && e()
                    }
                }, {
                    key: "video",
                    get: function() {
                        return this.videoAsset
                    }
                }, {
                    key: "loadFailure",
                    get: function() {
                        return this.video && this.video.error
                    }
                }, {
                    key: "autoProgress",
                    get: function() {
                        return p.default.get(this.options, "autoProgress", p.default.get(this.screenData, "structure.metaData.autoProgress", !0))
                    }
                }, {
                    key: "skippable",
                    get: function() {
                        return p.default.get(this.screenData, "structure.metaData.skippable", !1)
                    }
                }, {
                    key: "score",
                    get: function() {
                        return {
                            raw: 0,
                            min: 0,
                            max: 0
                        }
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this._state
                    },
                    set: function(e) {
                        this._state = e
                    }
                }, {
                    key: "_started",
                    get: function() {
                        return this.state.started
                    },
                    set: function(e) {
                        this._updateState({
                            started: e
                        })
                    }
                }, {
                    key: "_updateState",
                    value: function(e) {
                        this.state = v(v({}, this.state), e)
                    }
                }, {
                    key: "_setupVideo",
                    value: function() {
                        var e = this,
                            t = this.appApi.SCREEN,
                            n = 750;
                        this.video && this.video.videoHeight && (n = this.video.videoHeight / this.video.videoWidth * t.WIDTH), this.video.addEventListener("pause", (function() {
                            !e.state.paused && e.video.currentTime < e.video.duration && e.unpause()
                        })), this.video.style.height = "".concat(n, "px"), this.video.style.width = "".concat(t.WIDTH, "px"), this.video.currentTime = 0, this._listen()
                    }
                }, {
                    key: "_monitorVideo",
                    value: function() {
                        var e = this,
                            t = this.appApi.UTILS.rendererLogger,
                            n = this.video.duration,
                            r = this.bufferDuration;
                        this.monitorTimeout = r > n - 1 ? setTimeout((function() {
                            t.info("".concat(e.video.src, " is 100% loaded.")), e.monitorTimeout = null, e.api.screen.ready()
                        }), n - r) : setTimeout(this.monitorVideo, 250)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = !0 !== e && this.autoProgress,
                            n = this.score,
                            r = n.raw,
                            i = void 0 === r ? 0 : r,
                            a = n.max,
                            s = void 0 === a ? 0 : a;
                        if (!this.state.completed) {
                            this.api.screen.complete(this.score);
                            var o = this.screenData;
                            this.api.dataCapture.sendEvent.complete({
                                type: this.api.dataCapture.eventTypes.SCREEN,
                                payload: {
                                    maxScore: s,
                                    score: i
                                },
                                contextData: {
                                    screen: o,
                                    partNum: 1
                                }
                            }), this.api.dataCapture.sendEvent.finish({
                                contextData: {
                                    screen: o,
                                    partNum: 1
                                }
                            })
                        }
                        this.api.screen.enableNext(t), this._updateState({
                            completed: !0
                        })
                    }
                }, {
                    key: "ended",
                    value: function() {
                        this.complete(), this._updateState({
                            ended: !0
                        })
                    }
                }, {
                    key: "_listen",
                    value: function() {
                        var e = this.appApi.UTILS,
                            t = e.animationUtil,
                            n = e.EventManager;
                        n.on("ended", this.ended, this.video), n.on("error", this.complete, this.video), t.on("pause", this.pause), t.on("unpause", this.unpause)
                    }
                }, {
                    key: "_unlisten",
                    value: function() {
                        var e = this.appApi.UTILS,
                            t = e.animationUtil,
                            n = e.EventManager;
                        n.off("ended", this.ended, this.video), n.off("error", this.complete, this.video), t.off("pause", this.pause), t.off("unpause", this.unpause)
                    }
                }]), i
            }(h.LearningComponent);
            t.VideoLearningComponent = g
        },
        91068: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "VideoLearningComponent", {
                enumerable: !0,
                get: function() {
                    return r.VideoLearningComponent
                }
            }), Object.defineProperty(t, "registerVideoProvider", {
                enumerable: !0,
                get: function() {
                    return i.register
                }
            });
            var r = n(15118),
                i = n(29634)
        },
        29634: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.register = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inter_t2_s1",
                    t = arguments.length > 1 ? arguments[1] : void 0;
                t(e, {
                    load: function() {
                        return Promise.resolve({
                            module: {
                                default: r.VideoLearningComponent
                            }
                        })
                    }
                })
            };
            var r = n(15118)
        },
        35958: (e, t, n) => {
            "use strict";
            var r = n(18698);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(17756),
                a = l(n(91068)),
                s = n(15149),
                o = l(n(64317)),
                u = l(n(11693));

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (c = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = c(t);
                if (n && n.has(e)) return n.get(e);
                var i = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(i, s, o) : i[s] = e[s]
                    }
                return i.default = e, n && n.set(e, i), i
            }
            var d = {
                LearningComponent: i.LearningComponent,
                videoLearningComponent: a,
                RendererLearningComponent: s.RendererLearningComponent,
                processor: o,
                utils: u
            };
            t.default = d
        },
        67388: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupingProcessor = void 0;
            var i = r(n(56690)),
                a = r(n(89728)),
                s = r(n(41588)),
                o = r(n(61655)),
                u = r(n(94993)),
                c = r(n(73808)),
                l = n(96486);
            var d = function(e) {
                (0, o.default)(d, e);
                var t, n, r = (t = d, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = (0, c.default)(t);
                    if (n) {
                        var i = (0, c.default)(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return (0, u.default)(this, e)
                });

                function d(e) {
                    var t, n = e.renderer,
                        a = e.model,
                        s = e.settings;
                    return (0, i.default)(this, d), (t = r.call(this, {
                        renderer: n,
                        model: a,
                        settings: s
                    }))._groupMap = {}, (0, l.map)(t.groups, (function(e) {
                        t._groupMap[e.id] = {
                            attempt: 0
                        }
                    })), t
                }
                return (0, a.default)(d, [{
                    key: "attempt",
                    get: function() {
                        var e = this.userSelection,
                            t = e.id,
                            n = e.bucketId;
                        return (0, l.isUndefined)(n) || !this._groupMap[n] ? this._groupMap[t].attempt : (this._groupMap[n][t] = this._groupMap[n][t] || {
                            attempt: 0
                        }, this._groupMap[n][t].attempt)
                    },
                    set: function(e) {
                        var t = this.userSelection,
                            n = t.id,
                            r = t.bucketId;
                        (0, l.isUndefined)(r) || !this._groupMap[r] ? this._groupMap[n].attempt = e : (this._groupMap[r][n] = this._groupMap[r][n] || {
                            attempt: 0
                        }, this._groupMap[r][n].attempt = e)
                    }
                }, {
                    key: "groups",
                    get: function() {
                        return this.renderer.buckets
                    }
                }, {
                    key: "isGroupingActivity",
                    get: function() {
                        return this.settings.grouping
                    }
                }, {
                    key: "userInteractionPhase",
                    value: function(e) {
                        e.hideDoneButton(), (0, s.default)((0, c.default)(d.prototype), "userInteractionPhase", this).call(this, e)
                    }
                }]), d
            }(n(98518).Processor);
            t.GroupingProcessor = d
        },
        17691: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PHASE = void 0, t.PHASE = {
                LOCKED: -1,
                SETUP: 0,
                INTRO: 10,
                USER_INTERACTION: 20,
                FEEDBACK: 30,
                FORCE_ATTEMPT: 40,
                WRAPUP: 50,
                COMPLETE: 60
            }
        },
        98518: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Processor = void 0;
            var i = r(n(38416)),
                a = r(n(56690)),
                s = r(n(89728)),
                o = n(96486),
                u = n(17691),
                c = n(11693);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var d = function() {
                function e(t) {
                    var n = t.renderer,
                        r = t.model,
                        s = t.settings;
                    (0, a.default)(this, e), this.model = r, this.renderer = n, this.settings = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(Object(n), !0).forEach((function(t) {
                                (0, i.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        autoPlay: !1,
                        complete: !1,
                        grouping: !1,
                        maxAttempts: 1,
                        ready: !0,
                        scorable: !0
                    }, s), this._phase = this.settings.complete ? u.PHASE.COMPLETE : u.PHASE.SETUP, this._attempt = 0, (0, o.bindAll)(this, ["ready", "select", "start"])
                }
                return (0, s.default)(e, [{
                    key: "attempt",
                    get: function() {
                        return this._attempt
                    },
                    set: function(e) {
                        this._attempt = e
                    }
                }, {
                    key: "autoPlay",
                    get: function() {
                        return this.settings.autoPlay
                    }
                }, {
                    key: "complete",
                    get: function() {
                        return this.model.complete
                    }
                }, {
                    key: "hasForcedAttempt",
                    get: function() {
                        return this.renderer.hasForcedAttempt
                    }
                }, {
                    key: "hasInteractiveFeedback",
                    get: function() {
                        return this.settings.hasInteractiveFeedback
                    }
                }, {
                    key: "isCorrect",
                    get: function() {
                        return this.renderer.isCorrect(this.userSelection)
                    }
                }, {
                    key: "isComplete",
                    get: function() {
                        return !this.renderer.hasNextStep() && (this.isCorrect || this.isFinalAttempt)
                    }
                }, {
                    key: "isFinalAttempt",
                    get: function() {
                        return !this.isCorrect && this.attempt >= this.settings.maxAttempts
                    }
                }, {
                    key: "isReady",
                    get: function() {
                        return this.settings.ready
                    },
                    set: function(e) {
                        this.settings.ready = e
                    }
                }, {
                    key: "phase",
                    get: function() {
                        return this._phase
                    },
                    set: function(e) {
                        this.renderer.phase = e, this._phase = e
                    }
                }, {
                    key: "settings",
                    get: function() {
                        return this._settings
                    },
                    set: function(e) {
                        this._settings = e
                    }
                }, {
                    key: "useDoneButton",
                    get: function() {
                        return this.renderer.useDoneButton
                    }
                }, {
                    key: "userSelections",
                    get: function() {
                        return this.model.selections
                    }
                }, {
                    key: "userSelection",
                    get: function() {
                        return (0, o.isUndefined)(this._userSelection) ? (0, o.last)(this.model.selections) : this._userSelection
                    },
                    set: function(e) {
                        this._userSelection = e
                    }
                }, {
                    key: "_lockResponse",
                    value: function() {
                        this.model.selections.push(this._userSelection)
                    }
                }, {
                    key: "deliverFeedback",
                    value: function(e) {
                        var t = this.attempt,
                            n = this.isFinalAttempt,
                            r = this.isCorrect,
                            i = "IncorrectFeedback";
                        r ? i = "CorrectFeedback" : n || (i = "TryAgainFeedback");
                        var a = this.renderer["pre".concat(i)] || o.noop,
                            s = this.renderer["post".concat(i)] || o.noop;
                        e.playFeedback({
                            attempt: t,
                            isCorrect: r,
                            preFeedback: a,
                            postFeedback: s
                        }), this.renderer.postFeedback(e)
                    }
                }, {
                    key: "deselect",
                    value: function(e, t) {
                        this.useDoneButton && e.hideDoneButton(), this.renderer.deselect(e, t)
                    }
                }, {
                    key: "feedbackPhase",
                    value: function(e) {
                        this.renderer.hideDoneOnEvaluation && e.hideDoneButton(), this.deliverFeedback(e), this.interactiveFeedback(e)
                    }
                }, {
                    key: "interactiveFeedback",
                    value: function(e) {
                        if (this.hasInteractiveFeedback) {
                            var t = this.isFinalAttempt,
                                n = "incorrect";
                            this.isCorrect ? n = "correct" : t || (n = "tryAgain");
                            var r = this.renderer["".concat(n, "InteractiveFeedbackIntro")] || o.noop,
                                i = this.renderer["".concat(n, "InteractiveFeedbackInteraction")] || o.noop,
                                a = this.renderer["".concat(n, "InteractiveFeedbackOutro")] || o.noop;
                            r(e), e.enableUI(), i(e), e.disableUI(), a(e)
                        }
                    }
                }, {
                    key: "introPhase",
                    value: function(e) {
                        this.renderer.performIntro(e), this.settings.autoEnableHelp && e.enableHelp(), e.enableUI()
                    }
                }, {
                    key: "ready",
                    value: function(e) {
                        this.isReady && (this.phase === u.PHASE.COMPLETE && this.renderer.performTransitionIn(e), this.start(e))
                    }
                }, {
                    key: "score",
                    value: function(e) {
                        if (!this.complete) {
                            var t = this.renderer.score(this.isCorrect, this.userSelection, this.attempt);
                            this.model.result.score += t
                        }
                        this.attempt++, this.isComplete && (e.completeScreen({
                            raw: this.model.result.score,
                            min: 0,
                            max: this.renderer.maxScore
                        }), c.emitter.emit("processor:score", this))
                    }
                }, {
                    key: "select",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        this.userSelection = t, this.useDoneButton ? (e.showDoneButton(), e.shouldEnableDoneButton(t)) : this.start(e)
                    }
                }, {
                    key: "setupPhase",
                    value: function(e) {
                        this.renderer.performTransitionIn(e), e.disableHelp(), e.disableUI()
                    }
                }, {
                    key: "start",
                    value: function(e) {
                        var t = this,
                            n = this.phase;
                        switch (this.phase) {
                            case u.PHASE.LOCKED:
                                break;
                            case u.PHASE.SETUP:
                                n = u.PHASE.INTRO, this.setupPhase(e);
                                break;
                            case u.PHASE.INTRO:
                                this.introPhase(e), e.execute((function() {
                                    n = u.PHASE.USER_INTERACTION, t.phase = n
                                })), this.postIntro(e);
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
                                this.renderer.performCompletedState(e)
                        }
                        c.emitter.emit("processor:".concat(this.phase), this), this.phase !== n && (this.phase = n, this.start(e))
                    }
                }, {
                    key: "userInteractionPhase",
                    value: function(e) {
                        e.disableUI(), e.disableHelp(), e.disableDoneButton(), this._lockResponse(), this.score(e)
                    }
                }, {
                    key: "forceAttemptInteraction",
                    value: function(e) {
                        var t = this;
                        e.execute((function() {
                            return t.phase = u.PHASE.WRAPUP
                        })), e.enableUI(), this.settings.autoEnableHelp && e.enableHelp(), this.renderer.performForceAttempt(e)
                    }
                }, {
                    key: "wrapup",
                    value: function(e) {
                        var t = this;
                        e.completeScreen({
                            raw: this.model.result.score,
                            min: 0,
                            max: this.renderer.maxScore
                        }), e.disableHelp(), e.hideDoneButton(), this.renderer.performOutro(e), this.renderer.performTransitionOut(e), e.finish(this.settings.autoProgressOnFinish), e.execute((function() {
                            return t.phase = u.PHASE.COMPLETE
                        }))
                    }
                }, {
                    key: "postIntro",
                    value: function(e) {
                        this.autoPlay && this.renderer.performAutoplay(e, {
                            method: "introPhase"
                        }), this.renderer.postIntro(e)
                    }
                }, {
                    key: "postFeedBack",
                    value: function(e) {
                        var t = this;
                        e.execute((function() {
                            return t.phase = u.PHASE.USER_INTERACTION
                        })), e.enableUI(), this.settings.autoEnableHelp && e.enableHelp(), this.autoPlay && this.renderer.performAutoplay(e, {
                            method: "postFeedBack "
                        }), this.renderer.postDone(e)
                    }
                }]), e
            }();
            t.Processor = d
        },
        64317: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                createProcessor: !0
            };
            t.createProcessor = void 0;
            var i = n(67388);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var a = n(98518);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var s = n(17691);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            })), t.createProcessor = function(e) {
                var t = e.renderer,
                    n = e.model,
                    r = e.settings;
                return r.grouping ? new i.GroupingProcessor({
                    renderer: t,
                    model: n,
                    settings: r
                }) : new a.Processor({
                    renderer: t,
                    model: n,
                    settings: r
                })
            }
        },
        53451: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.emitter = t.EventEmitter = void 0;
            var i = r(n(89728)),
                a = r(n(56690)),
                s = r(n(61655)),
                o = r(n(94993)),
                u = r(n(73808));
            var c = function(e) {
                (0, s.default)(c, e);
                var t, n, r = (t = c, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = (0, u.default)(t);
                    if (n) {
                        var i = (0, u.default)(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return (0, o.default)(this, e)
                });

                function c() {
                    return (0, a.default)(this, c), r.apply(this, arguments)
                }
                return (0, i.default)(c)
            }(r(n(98767)).default);
            t.EventEmitter = c;
            var l = new c;
            t.emitter = l
        },
        11693: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(53451);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        11379: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RendererLearningComponent = void 0;
            var i = r(n(38416)),
                a = r(n(27424)),
                s = r(n(56690)),
                o = r(n(89728)),
                u = r(n(66115)),
                c = r(n(53788)),
                l = r(n(41588)),
                d = r(n(61655)),
                p = r(n(94993)),
                h = r(n(73808)),
                f = n(41686),
                v = r(n(35958)),
                y = n(38778);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _, b = f.ACTIONS.navigationActions,
                E = f.MODULES.AudioModule,
                P = f.MODULES.DisplayAnimationModule,
                S = f.ORCHESTRATORS.sequenceRunner,
                k = f.SHARED_DEPENDENCIES.ReactDOM,
                O = f.SHARED_DEPENDENCIES._,
                C = f.UTILS.animationUtil,
                A = f.UTILS.assetLoader,
                D = f.UTILS.assetUtil,
                R = f.UTILS.emitterUtil,
                I = f.STORES.navigationStore,
                T = f.DATA_CAPTURE.dataCaptureUtil,
                j = f.DATA_CAPTURE.DC_EVENT_TYPES,
                L = f.DATA_CAPTURE.DC_EVENT_PAYLOADS,
                N = !1;
            b.setClassName("two-fifths instant disabled");
            var w = function(e) {
                (0, d.default)(i, e);
                var t, n, r = (t = i, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = (0, h.default)(t);
                    if (n) {
                        var i = (0, h.default)(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return (0, p.default)(this, e)
                });

                function i(e, t, n) {
                    var a;
                    (0, s.default)(this, i), (a = r.call(this, e, t)).updatePaths = function(e) {
                        e && (e = O.isString(e) ? [e] : e, O.each(e, (function(e) {
                            return a.updatedPaths.push(e)
                        }))), a.onStateChange()
                    }, a.toggleAppClassName = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        a.lessonContainer && (O.isNull(t) ? a.lessonContainer.classList.contains(e) ? a.lessonContainer.classList.remove(e) : a.lessonContainer.classList.add(e) : t ? a.lessonContainer.classList.add(e) : a.lessonContainer.classList.remove(e))
                    }, a._rendererProvider = n, a.assets = {};
                    var o = a.screenData.properties.scored,
                        c = O.get(a.screenData, "style.properties.saveIntermediateState", !1),
                        l = O.get(a.screenData, "style.properties.disableState", !1);
                    return a._persist = !l && (c || o), O.bindAll((0, u.default)(a), "_done", "_onSequenceChange", "onStateChange"), a.updatedPaths = [], a._started = !1, a._state = {}, a
                }
                return (0, o.default)(i, [{
                    key: "load",
                    value: function(e) {
                        var t = this,
                            n = this.screenData,
                            r = this.style,
                            s = this.sharedScreenContent;
                        (0, l.default)((0, h.default)(i.prototype), "load", this).call(this, e);
                        var o = s[n.passage_selection],
                            u = this.loadPassage(o, n.passage_chunk_selection),
                            c = u.images,
                            d = u.audio;
                        D.options = {
                            image: {
                                blobify: !0
                            }
                        };
                        var p = new Promise((function(e, t) {
                            A.load({
                                screen: n,
                                style: r,
                                additionalAudio: d,
                                additionalImages: c,
                                onComplete: e
                            })
                        }));
                        return Promise.all([this._rendererProvider.getRenderer(this.style.id), p]).then((function(e) {
                            var n = (0, a.default)(e, 1)[0];
                            return t.Renderer = n.module.renderer, t.onLoad(), n
                        }))
                    }
                }, {
                    key: "loadPassage",
                    value: function(e, t) {
                        var n = [],
                            r = [];
                        if (e && !O.isNull(t)) {
                            var i = e.data[t].chunkStyle;
                            if (i && i.backgroundImage) {
                                var a = i.backgroundImage.match(/%cdnURL%(.*)(\.jp(e?)g|\.png|\.gif)/g);
                                if (a) {
                                    var s = O.first(a).replace("%cdnURL%", "${content}/");
                                    n.push({
                                        src: s,
                                        type: "image"
                                    })
                                }
                            }
                            var o = (0, y.gradeLevel)(this.userData.grade),
                                u = (0, y.lessonLevel)(this.lessonInfo.grade);
                            if (o < 2 && u < 3) {
                                var c = O.find(e.generated_audio, (function(e) {
                                    return e.audio[0].meta.chunkId === t
                                }));
                                c && O.some(c.audio) && O.merge(r, c.audio)
                            }
                        }
                        return {
                            images: n,
                            audio: r
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var e, t = this, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        (e = (0, l.default)((0, h.default)(i.prototype), "render", this)).call.apply(e, [this].concat(r)), this._enhanceApi(), document.querySelector("main").setAttribute("data-style-type", this.screenData.type), document.querySelector(".header__close").style.pointerEvents = "none", this.api.lesson.toggleClassName("showMenu", this.api.navigation.isMenuButtonShown() || !1), this.api.navigation.help.callback = function() {
                            return t.renderer.help()
                        }, this.api.navigation.help.visible = !0, this.api.navigation.customButton.callback = function() {
                            return t.renderer.customButton()
                        }, this.api.navigation.customButton.visible = !1, this.api.navigation.done.callback = function() {
                            N || (N = !0, _ = setInterval((function() {
                                !0 === document.querySelector("button.done").disabled && (N = !1, clearInterval(_))
                            }), 10), t._done(), t.renderer.done())
                        }, this.passage.then((function(e) {
                            var n = t.renderDisplay((function(e) {
                                e && (t.renderer = e, t.audio = new E({
                                    assets: t.assets,
                                    cue: t.renderer.cue,
                                    searchScreen: t.renderer.searchScreen,
                                    searchStyle: t.renderer.searchStyle,
                                    onUpdate: t.updatePaths
                                }), t.renderer.audio = t.audio, t.displayAnimations = new P, t._listen(), t.renderer.ready())
                            }), e);
                            k.render(n, t.domContainerNode)
                        }))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this._started = !0, this._onStart && this._onStart(), T.sendEvent({
                            type: j.SCREEN,
                            payload: L.START,
                            contextData: {
                                screen: this.screenData,
                                partNum: 1
                            }
                        })
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.renderer && this.renderer.setState({
                            paused: !0
                        }), C.pauseUpdates(), this.audio.pause()
                    }
                }, {
                    key: "unpause",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.renderer && e && this.renderer.setState({
                            paused: !1
                        }), C.resumeUpdates(), this.audio && this.audio.resume()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        D.clearContext(this.screenData.id), this.domContainerNode && (k.unmountComponentAtNode(this.domContainerNode), this.domContainerNode.innerHTML = "", this.audio.destroy()), this.renderer && (this.renderer.audio = null, this.api.navigation.done.visible = !1, this.api.navigation.done.enabled = !1), this._unlisten(), S.abort(), this.unpause(!1);
                        var e = this.screenData,
                            t = I.getStep(e.id),
                            n = {
                                section: O.get(t, "section"),
                                screen: e,
                                partNum: 1
                            };
                        T.sendEvent({
                            payload: L.DESTROY,
                            contextData: n
                        })
                    }
                }, {
                    key: "renderDisplay",
                    value: function() {
                        throw new Error("renderDisplay must be implemented by a subclass")
                    }
                }, {
                    key: "model",
                    get: function() {
                        return O.isUndefined(this._model) && (this._persist && (this._model = (0, l.default)((0, h.default)(i.prototype), "state", this)), O.isUndefined(this._model) && (this._model = {})), this._model
                    },
                    set: function(e) {
                        this._persist && (0, c.default)((0, h.default)(i.prototype), "state", e, this, !0), this._model = e
                    }
                }, {
                    key: "lessonContainer",
                    get: function() {
                        return document.getElementById("lesson")
                    }
                }, {
                    key: "_onSequenceChange",
                    value: function() {
                        this.displayAnimations.process(S.activeDisplayAnimations, this.renderer)
                    }
                }, {
                    key: "_done",
                    value: function() {
                        this.audio.stop()
                    }
                }, {
                    key: "onStateChange",
                    value: function() {
                        var e = this;
                        if (!O.isEmpty(this.updatedPaths)) {
                            var t = {};
                            O.forEach(this.updatedPaths, (function(n) {
                                O.set(t, n, O.get(e.state, n))
                            })), t.assets && (t.assets = O.omit(t.assets, O.isUndefined))
                        }
                    }
                }, {
                    key: "passage",
                    get: function() {
                        var e = this.screenData,
                            t = this.sharedScreenContent,
                            n = O.cloneDeep(t[e.passage_selection]),
                            r = e.passage_chunk_selection;
                        return new Promise((function(e, t) {
                            if (n && !O.isNull(r)) {
                                n.data = O.map(n.data, (function(e, t) {
                                    var n = O.cloneDeep(e);
                                    return n.reduce = Array.prototype.reduce, n.uniqueKey = "".concat(e.title, "-").concat(t), n
                                }));
                                var i = n.data[r],
                                    a = i.chunkDelta,
                                    s = i.chunkStyle,
                                    o = [];
                                if (O.each(a.ops, (function(e, t) {
                                        var n = e.insert,
                                            r = void 0 !== n && n;
                                        if (r && r.image && r.image.match(/%cdnURL%/g)) {
                                            var i = r.image.replace("%cdnURL%", "${content}/");
                                            o.push(new Promise((function(e, t) {
                                                D.loadAsset({
                                                    src: i,
                                                    type: "image"
                                                }).assetLoader.then((function(t) {
                                                    r.image = t.src, e()
                                                }))
                                            })))
                                        }
                                    })), s && s.backgroundImage) {
                                    var u = s.backgroundImage.match(/%cdnURL%(.*)(\.jp(e?)g|\.png|\.gif)/g);
                                    if (u) {
                                        var c = O.first(u).replace("%cdnURL%", "${content}/");
                                        o.push(new Promise((function(e, t) {
                                            D.loadAsset({
                                                src: c,
                                                type: "image"
                                            }).assetLoader.then((function(t) {
                                                s.backgroundImage = "url('".concat(t.src, "')"), e()
                                            }))
                                        })))
                                    }
                                }
                                Promise.all(o).then((function() {
                                    return e(n)
                                }))
                            } else e(n)
                        }))
                    }
                }, {
                    key: "state",
                    get: function() {
                        return m(m({}, this._state), {}, {
                            started: this._started
                        })
                    },
                    set: function(e) {
                        this._state = e
                    }
                }, {
                    key: "style",
                    get: function() {
                        return this.screenData.style
                    }
                }, {
                    key: "_enhanceApi",
                    value: function() {
                        this.api.lesson.toggleClassName || (this.api.lesson.toggleClassName = this.toggleAppClassName), this.api.lesson.sharedScreenContent = this.sharedScreenContent
                    }
                }, {
                    key: "_listen",
                    value: function() {
                        R.on("SequenceRunner.change", this._onSequenceChange), this.audio.listen()
                    }
                }, {
                    key: "_unlisten",
                    value: function() {
                        R.off("SequenceRunner.change", this._onSequenceChange), this.audio && this.audio.unlisten()
                    }
                }, {
                    key: "searchScreen",
                    value: function(e) {
                        var t = JSON.toXML(this.screenData, !0);
                        return JSON.search(t, e)
                    }
                }]), i
            }(v.default.LearningComponent);
            t.RendererLearningComponent = w
        },
        76895: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(56690)),
                a = r(n(89728)),
                s = r(n(41588)),
                o = r(n(61655)),
                u = r(n(94993)),
                c = r(n(73808)),
                l = n(41686),
                d = n(8393),
                p = n(11379),
                h = n(10316),
                f = n(38778);
            var v = l.SHARED_DEPENDENCIES.React,
                y = l.SHARED_DEPENDENCIES._,
                g = l.UTILS.rendererLogger,
                m = l.UTILS.assetUtil,
                _ = function(e) {
                    (0, o.default)(p, e);
                    var t, n, r = (t = p, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, c.default)(t);
                        if (n) {
                            var i = (0, c.default)(this).constructor;
                            e = Reflect.construct(r, arguments, i)
                        } else e = r.apply(this, arguments);
                        return (0, u.default)(this, e)
                    });

                    function p(e, t) {
                        var n;
                        (0, i.default)(this, p);
                        var a = e.userData.grade.replace("Grade ", ""),
                            s = y.merge({}, e, {
                                userData: {
                                    grade: (0, h.getParameterByName)("grade") ? y.toInteger((0, h.getParameterByName)("grade")) : (0, f.gradeLevel)(a)
                                }
                            });
                        return (n = r.call(this, s, t, d.readingCompRendererProvider))._passageStateKey = n.screenData.passage_selection, l.ACCESSIBILITY.EXTENDED_SCREEN_ELEMENT_SELECTOR = ":not([data-ignore-uienabled])", n
                    }
                    return (0, a.default)(p, [{
                        key: "renderDisplay",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0,
                                r = {
                                    screen: {
                                        get: function() {
                                            return e.model
                                        },
                                        save: function(t) {
                                            e.model = t
                                        }
                                    },
                                    passage: {
                                        get: function() {
                                            return e.passageState
                                        },
                                        save: function(t) {
                                            e.passageState = t
                                        }
                                    }
                                },
                                i = this.Renderer;
                            return v.createElement(i, {
                                key: "display",
                                api: this.api,
                                models: r,
                                ref: t,
                                type: "main",
                                passageContent: n,
                                sharedScreenContent: this.sharedScreenContent,
                                lessonInfo: this.lessonInfo,
                                screen: this.screenData,
                                size: this.api.screen.size,
                                userData: this.userData
                            })
                        }
                    }, {
                        key: "passageState",
                        get: function() {
                            var e;
                            return this._persist ? null == (e = this.storage.getItem(this._passageStateKey)) ? (e = {}, this.passageState = e) : e = JSON.parse(e) : e = {}, e
                        },
                        set: function(e) {
                            if (this._persist) {
                                var t = JSON.stringify(e),
                                    n = y.get(m, "config.state.warnAtPassageSize", 2e4);
                                t.length > n && g.warn("state for passage ".concat(this._passageStateKey, " exceeds ").concat(n, " characters")), this.storage.setItem(this._passageStateKey, t)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            (e = (0, s.default)((0, c.default)(p.prototype), "render", this)).call.apply(e, [this].concat(n))
                        }
                    }]), p
                }(p.RendererLearningComponent);
            t.default = _
        },
        38778: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.gradeLevel = function(e) {
                return /^\d+$/.test(e) ? parseInt(e, 10) : 0
            }, t.lessonLevel = function(e) {
                return "Grade K" === e ? 0 : parseInt(e.replace("Grade ", ""), 10)
            }
        },
        10316: (e, t, n) => {
            "use strict";
            var r = n(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.captureElementEvent = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                u.sendEvent({
                    type: c.ELEMENT,
                    payload: function() {
                        var r = new l;
                        return r.elementId = e, r.event = t, n && (r.detail = n), r
                    }
                })
            }, t.delayedCall = function(e, t) {
                o.delayedCall(e, t)
            }, t.findObjectByName = function e(t, n) {
                if ("object" !== (0, i.default)(t) || null === t) throw new Error("Error in findObjectByName: ".concat(t, " is not an object"));
                return n in t ? [t[n]] : s.flatten(s.map(t, (function(t) {
                    return "object" === (0, i.default)(t) ? e(t, n) : []
                })), !0)
            }, t.gatherFeedbackActions = function(e) {
                var t = [];
                return s.forEach(e, (function(e) {
                    s.forEach(e, (function(e) {
                        s.forEach(e.sequence, (function(e) {
                            s.forEach(e.parts, (function(e) {
                                s.forEach(e.events, (function(e) {
                                    s.forEach(e.targets, (function(e) {
                                        if ("callable-mechanism" === e.type) {
                                            var n = e.target.replace("#", "");
                                            t.push(n)
                                        }
                                    }))
                                }))
                            }))
                        }))
                    }))
                })), t
            }, t.gatherRemainingScreenIds = function(e, t) {
                if (s.isUndefined(e)) return [];
                var n = e,
                    r = n.id,
                    i = [];
                for (i.push(r); null !== n;) null !== (n = t[r].next) && (r = n.id, i.push(r));
                return i
            }, t.getParameterByName = function(e) {
                e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]".concat(e, "=([^&#]*)")).exec(window.location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
            };
            var i = r(n(18698)),
                a = n(41686),
                s = a.SHARED_DEPENDENCIES._,
                o = a.SHARED_DEPENDENCIES.TweenMax,
                u = a.DATA_CAPTURE.dataCaptureUtil,
                c = a.DATA_CAPTURE.DC_EVENT_TYPES,
                l = a.DATA_CAPTURE.ElementPayload
        },
        10434: e => {
            function t() {
                return e.exports = t = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        53788: (e, t, n) => {
            var r = n(1753),
                i = n(38416);

            function a(e, t, n, s) {
                return a = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, t, n, a) {
                    var s, o = r(e, t);
                    if (o) {
                        if ((s = Object.getOwnPropertyDescriptor(o, t)).set) return s.set.call(a, n), !0;
                        if (!s.writable) return !1
                    }
                    if (s = Object.getOwnPropertyDescriptor(a, t)) {
                        if (!s.writable) return !1;
                        s.value = n, Object.defineProperty(a, t, s)
                    } else i(a, t, n);
                    return !0
                }, a(e, t, n, s)
            }
            e.exports = function(e, t, n, r, i) {
                if (!a(e, t, n, r || e) && i) throw new Error("failed to set property");
                return n
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    }
]);