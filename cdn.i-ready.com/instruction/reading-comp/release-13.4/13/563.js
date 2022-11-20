"use strict";
(self.webpackChunkreading_comp = self.webpackChunkreading_comp || []).push([
    [563], {
        30227: (e, t, r) => {
            function o(e, t, r, o) {
                return new(r = r || Promise)((function(n, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function d(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        e.done ? n(e.value) : new r((function(t) {
                            t(e.value)
                        })).then(s, d)
                    }
                    c((o = o.apply(e, t || [])).next())
                }))
            }
            var n, i, s, d, c, a;
            r.r(t), r.d(t, {
                    platformConnectionFactory: () => p
                }), (a = n = n || {}).Call = "call", a.Reply = "reply", a.Syn = "syn", a.SynAck = "synAck", a.Ack = "ack",
                function(e) {
                    e.Fulfilled = "fulfilled", e.Rejected = "rejected"
                }(i = i || {}),
                function(e) {
                    e.ConnectionDestroyed = "ConnectionDestroyed", e.ConnectionTimeout = "ConnectionTimeout", e.NotInIframe = "NotInIframe", e.NoIframeSrc = "NoIframeSrc"
                }(s = s || {}), (d = d || {}).DataCloneError = "DataCloneError", (c = c || {}).Message = "message";
            const l = ({
                name: e,
                message: t,
                stack: r
            }) => ({
                name: e,
                message: t,
                stack: r
            });
            let u = 0;
            var m = (e, t, r, o) => {
                const {
                    destroy: a,
                    onDestroy: m
                } = r;
                return r => {
                    var p, v;
                    if (e instanceof RegExp ? e.test(r.origin) : "*" === e || e === r.origin) return o("Child: Handshake - Received SYN-ACK, responding with ACK"), p = "null" === r.origin ? "*" : r.origin, v = {
                        penpal: n.Ack,
                        methodNames: Object.keys(t)
                    }, window.parent.postMessage(v, p), p = ((e, t, r) => {
                        const {
                            localName: o,
                            local: s,
                            remote: a,
                            originForSending: u,
                            originForReceiving: m
                        } = e;
                        let p = !1;
                        const v = e => {
                            if (e.source === a && e.data.penpal === n.Call)
                                if (e.origin !== m) r(`${o} received message from origin ${e.origin} which did not match expected origin ` + m);
                                else {
                                    const {
                                        methodName: s,
                                        args: c,
                                        id: m
                                    } = e.data;
                                    r(`${o}: Received ${s}() call`), e = e => t => {
                                        if (r(`${o}: Sending ${s}() reply`), p) r(`${o}: Unable to send ${s}() reply due to destroyed connection`);
                                        else {
                                            const r = {
                                                penpal: n.Reply,
                                                id: m,
                                                resolution: e,
                                                returnValue: t
                                            };
                                            e === i.Rejected && t instanceof Error && (r.returnValue = l(t), r.returnValueIsError = !0);
                                            try {
                                                a.postMessage(r, u)
                                            } catch (e) {
                                                throw e.name === d.DataCloneError && (t = {
                                                    penpal: n.Reply,
                                                    id: m,
                                                    resolution: i.Rejected,
                                                    returnValue: l(e),
                                                    returnValueIsError: !0
                                                }, a.postMessage(t, u)), e
                                            }
                                        }
                                    }, new Promise((e => e(t[s].apply(t, c)))).then(e(i.Fulfilled), e(i.Rejected))
                                }
                        };
                        return s.addEventListener(c.Message, v), () => {
                            p = !0, s.removeEventListener(c.Message, v)
                        }
                    })(v = {
                        localName: "Child",
                        local: window,
                        remote: window.parent,
                        originForSending: p,
                        originForReceiving: r.origin
                    }, t, o), m(p), v = ((e, t, r, o, d) => {
                        const {
                            localName: a,
                            local: l,
                            remote: m,
                            originForSending: p,
                            originForReceiving: v
                        } = t;
                        let f = !1;
                        return d(a + ": Connecting call sender"), r.reduce(((e, t) => {
                            var r;
                            return e[t] = (r = t, (...e) => {
                                let t;
                                d(a + `: Sending ${r}() call`);
                                try {
                                    m.closed && (t = !0)
                                } catch (e) {
                                    t = !0
                                }
                                if (t && o(), f) {
                                    const e = new Error(`Unable to send ${r}() call due to destroyed connection`);
                                    throw e.code = s.ConnectionDestroyed, e
                                }
                                return new Promise(((t, o) => {
                                    const s = ++u,
                                        f = e => {
                                            if (e.source === m && e.data.penpal === n.Reply && e.data.id === s)
                                                if (e.origin !== v) d(`${a} received message from origin ${e.origin} which did not match expected origin ` + v);
                                                else {
                                                    e = e.data, d(a + `: Received ${r}() reply`), l.removeEventListener(c.Message, f);
                                                    let n = e.returnValue;
                                                    e.returnValueIsError && (n = (e => {
                                                        const t = new Error;
                                                        return Object.keys(e).forEach((r => t[r] = e[r])), t
                                                    })(n)), (e.resolution === i.Fulfilled ? t : o)(n)
                                                }
                                        };
                                    l.addEventListener(c.Message, f);
                                    var h = {
                                        penpal: n.Call,
                                        id: s,
                                        methodName: r,
                                        args: e
                                    };
                                    m.postMessage(h, p)
                                }))
                            }), e
                        }), e), () => {
                            f = !0
                        }
                    })(p = {}, v, r.data.methodNames, a, o), m(v), p;
                    o(`Child: Handshake - Received SYN-ACK from origin ${r.origin} which did not match expected origin ` + e)
                }
            };
            const p = () => {
                let e = () => {
                    throw new Error("onSplashScreenCompleted must be set.")
                };
                var t = (t = document.referrer && new URL(document.referrer)) ? t.protocol + "//" + t.host : /i-ready.com(:\d+)?$/;
                const r = ((e = {}) => {
                    const {
                        parentOrigin: t = "*",
                        methods: r = {},
                        timeout: o,
                        debug: i = !1
                    } = e, d = (e => (...t) => {
                        e && console.log("[Penpal]", ...t)
                    })(i);
                    e = (() => {
                        const e = [];
                        let t = !1;
                        return {
                            destroy(r) {
                                t = !0, e.forEach((e => {
                                    e(r)
                                }))
                            },
                            onDestroy(r) {
                                t ? r() : e.push(r)
                            }
                        }
                    })();
                    const {
                        destroy: a,
                        onDestroy: l
                    } = e, u = ((() => {
                        if (window === window.top) {
                            const e = new Error("connectToParent() must be called within an iframe");
                            throw e.code = s.NotInIframe, e
                        }
                    })(), m(t, r, e, d));
                    return {
                        promise: new Promise(((e, r) => {
                            const i = ((e, t) => {
                                    let r;
                                    return void 0 !== e && (r = window.setTimeout((() => {
                                        const r = new Error(`Connection timed out after ${e}ms`);
                                        r.code = s.ConnectionTimeout, t(r)
                                    }), e)), () => {
                                        clearTimeout(r)
                                    }
                                })(o, a),
                                m = t => {
                                    (() => {
                                        try {
                                            clearTimeout()
                                        } catch (e) {
                                            return !1
                                        }
                                        return !0
                                    })() && t.source === parent && t.data && t.data.penpal === n.SynAck && (t = u(t)) && (window.removeEventListener(c.Message, m), i(), e(t))
                                };
                            var p, v;
                            window.addEventListener(c.Message, m), d("Child: Handshake - Sending SYN"), p = {
                                penpal: n.Syn
                            }, v = t instanceof RegExp ? "*" : t, window.parent.postMessage(p, v), l((e => {
                                window.removeEventListener(c.Message, m), e || ((e = new Error("Connection destroyed")).code = s.ConnectionDestroyed), r(e)
                            }))
                        })),
                        destroy() {
                            a()
                        }
                    }
                })({
                    parentOrigin: t,
                    methods: {
                        loaderCompleted() {
                            return o(this, void 0, void 0, (function*() {
                                e()
                            }))
                        }
                    }
                });
                return r.promise.catch((() => console.error("disconnected from platform before making connection"))), {
                    preferences: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).preferencesFetch()
                            }))
                        },
                        update(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).preferencesUpdate(e)
                            }))
                        }
                    },
                    settings: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).settingsFetch()
                            }))
                        }
                    },
                    stateStore: {
                        save(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).stateStoreSave(e)
                            }))
                        },
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).stateStoreFetch()
                            }))
                        },
                        delete() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).stateStoreDelete()
                            }))
                        },
                        mark(e, t) {
                            return o(this, void 0, void 0, (function*() {
                                localStorage.setItem(e, JSON.stringify(t))
                            }))
                        },
                        jump(e) {
                            (e = localStorage.getItem(e)) && this.save(JSON.parse(e)).then((() => window.location.reload()))
                        }
                    },
                    loader: {
                        setProgress(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).loaderSetProgress(e)
                            }))
                        },
                        setCredits(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).loaderSetCredits(e)
                            }))
                        },
                        onCompleted(t) {
                            e = t
                        }
                    },
                    student: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).studentFetch()
                            }))
                        }
                    },
                    activity: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).activityFetch()
                            }))
                        }
                    },
                    component: {
                        start() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).componentStart()
                            }))
                        },
                        pause() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).componentPause()
                            }))
                        },
                        resume() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).componentResume()
                            }))
                        },
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).componentClose()
                            }))
                        },
                        complete(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).componentComplete(e)
                            }))
                        }
                    },
                    learnosity: {
                        start() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).learnosityStart()
                            }))
                        },
                        complete() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).learnosityComplete()
                            }))
                        },
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).learnosityClose()
                            }))
                        }
                    },
                    fluency: {
                        makeHttpRequest(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).fluencyMakeHttpRequest(e)
                            }))
                        },
                        complete() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).fluencyComplete()
                            }))
                        },
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).fluencyClose()
                            }))
                        }
                    },
                    dataCapture: {
                        config() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).dataCaptureConfig()
                            }))
                        }
                    },
                    remoteLogger: {
                        error(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).remoteLoggerError(e)
                            }))
                        },
                        fatal(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield r.promise).remoteLoggerFatal(e)
                            }))
                        }
                    },
                    ready() {
                        return o(this, void 0, void 0, (function*() {
                            yield r.promise
                        }))
                    },
                    close() {
                        try {
                            r.destroy()
                        } catch (e) {}
                    }
                }
            }
        }
    }
]);