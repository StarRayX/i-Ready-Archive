function hasClass(e, t) {
    return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
}

function addClass(e, t) {
    e.classList ? e.classList.add(t) : hasClass(e, t) || (e.className += " " + t)
}

function removeClass(e, t) {
    if (e.classList) e.classList.remove(t);
    else if (hasClass(e, t)) {
        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className.replace(n, " ")
    }
}

function playAudio(e) {
    document.getElementById(e).play()
}

function shuffle(e) {
    for (var t = e.length; 1 < t;) {
        t--;
        var n = Math.floor(Math.random() * (t + 1)),
            i = e[n];
        e[n] = e[t], e[t] = i
    }
}

function getRandomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}

function sessionId(e) {
    return e.userId + "_" + e.sessionStartTime
}

function parseQueryString(e) {
    var t = (e = (e = decodeURI(e)).replace("?", "")).split("&"),
        n = {};
    for (var i in t) {
        var r = t[i].split("=");
        2 == r.length && (n[r[0]] = r[1])
    }
    return n
}

function getCookie(e) {
    var t = document.cookie.replace(/ /g, "").split(";");
    for (var n in t) {
        var i = t[n];
        if (i && "string" == typeof i && -1 != i.indexOf(e)) return i.replace(e + "=", "")
    }
    return !1
}

function getShortErrorMessage(e) {
    return void 0 === e ? "undefined message" : "string" == typeof e ? e.substring(0, 500) : "object" == typeof e ? getShortErrorMessage(e.message) : e
}

function isJsonString(e) {
    try {
        JSON.parse(e)
    } catch (e) {
        return !1
    }
    return !0
}
var __els = window.location.hostname.split("."),
    __config = __els[3 <= __els.length ? __els.length - 2 : __els.length - 1],
    config = {
        environment: "production",
        apiServerUrl: {
            motionmathgames: "https://g-api.motionmathgames.com",
            "i-ready": "https://g-api.i-ready.com"
        }[__config],
        accountsUrl: {
            motionmathgames: "https://g-accounts.motionmathgames.com/#",
            "i-ready": "https://g-accounts.i-ready.com/#"
        }[__config],
        statscUrl: {
            motionmathgames: "https://statsc.motionmathgames.com",
            "i-ready": "https://g-statsc.i-ready.com"
        }[__config],
        logUrl: {
            motionmathgames: "https://hec.motionmathgames.com/services/collector",
            "i-ready": "https://hec.i-ready.com/services/collector"
        }[__config],
        iReadyLoginUrl: "https://login.i-ready.com/",
        games: [{
            id: "pizza",
            name: "Pizza"
        }, {
            id: "cupcake",
            name: "Cupcake"
        }, {
            id: "zoom",
            name: "Zoom"
        }, {
            id: "hungryfish",
            name: "Hungry Fish"
        }, {
            id: "match",
            name: "Match"
        }, {
            id: "bounce",
            name: "Bounce",
            alias: "fractions"
        }, {
            id: "hungryguppy",
            name: "Hungry Guppy"
        }, {
            id: "cloudmachine",
            name: "Cloud Machine"
        }],
        isDemo: !1,
        version: "4.1.0"
    };

function StatscAPI(n, e) {
    var t, i = e.statscUrl,
        r = "production" === (t = e).environment ? "PROD" : "staging" === t.environment ? "STAGING" : "dev",
        a = "gamesWeb";

    function o(e, t, n) {
        var i = s(e, t + (n < 500 ? "LessThan500ms" : n < 1e3 ? "500to1000ms" : n < 2e3 ? "1000to2000ms" : n < 5e3 ? "2000to5000ms" : n < 1e4 ? "5000to10000ms" : n < 2e4 ? "10000to20000ms" : n < 4e4 ? "20000to40000ms" : n < 9e4 ? "40000to90000ms" : "Over90000ms"));
        return i = i.concat(s(e, t + "Total"))
    }

    function s(e, t, n) {
        var i = [];
        return i.push(h(c(t), n)), i.push(h(d(e, t), n)), i
    }

    function l(e, t, n) {
        var i = [];
        return i.push(p(c(t), n)), i.push(p(d(e, t), n)), i
    }

    function c(e) {
        return u(a, e)
    }

    function d(e, t) {
        return u(a, e + "." + t)
    }

    function u(e, t) {
        return (leanApp.statsContext ? leanApp.statsContext + "." : "") + r + "." + e + "." + t
    }

    function h(e, t) {
        return f("i", e, t || 1)
    }

    function p(e, t) {
        return f("t", e, t)
    }

    function f(e, t, n) {
        return [e, t, n]
    }
    this.isFirstLoadError = !0, this.isFirstLoadCrash = !0, this.isFirstGameCrash = !0, this.isFirstSiteError = !0, this.resetErrorState = function() {
        this.isFirstLoadError = !0, this.isFirstLoadCrash = !0, this.isFirstGameCrash = !0, this.isFirstSiteError = !0
    }, this.gameInitiated = function(e) {
        var t = s(e, "initiation");
        this.send(t)
    }, this.onGameLoadError = function(e) {
        this.sendDualErrorIncrement(e, "gameLoadError", this.isFirstLoadError), this.isFirstLoadError && (this.isFirstLoadError = !1)
    }, this.onGameLoadCrash = function(e) {
        this.sendDualErrorIncrement(e, "gameLoadCrash", this.isFirstLoadCrash), this.isFirstLoadCrash && (this.isFirstLoadCrash = !1)
    }, this.onGameCrash = function(e) {
        this.sendDualErrorIncrement(e, "gameCrash", this.isFirstGameCrash), this.isFirstGameCrash && (this.isFirstGameCrash = !1)
    }, this.onSiteError = function(e) {
        this.sendDualErrorIncrement(e, "siteError", this.isFirstSiteError), this.isFirstSiteError && (this.isFirstSiteError = !1)
    }, this.sendDualErrorIncrement = function(e, t, n) {
        var i = s(e, t + "Raw");
        n && (i = i.concat(s(e, t))), this.send(i)
    }, this.gameAborted = function(e, t) {
        var n = t ? (new Date).getTime() - t : 0,
            i = l(e, "abortTime", n);
        i = i.concat(o(e, "abortTime", n)), this.send(i)
    }, this.gameAbandoned = function(e, t) {
        var n = t ? (new Date).getTime() - t : 0,
            i = l(e, "abandonTime", n);
        i = i.concat(o(e, "abandonTime", n)), this.send(i)
    }, this.blurredGameLoadTime = function(e, t) {
        var n = l(e, "blurredGameLoadTime", t);
        n = n.concat(o(e, "blurredGameLoadTime", t)), this.send(n)
    }, this.gameLoadedAfterCrash = function(e, t) {
        var n = s(e, "loadedAfterCrash");
        this.send(n)
    }, this.gameLoadedAfterError = function(e, t) {
        var n = s(e, "loadedAfterError");
        this.send(n)
    }, this.gameLoadComplete = function(e) {
        var t = s(e, "gameLoadComplete");
        this.send(t)
    }, this.send = function(e, t) {
        n.ajax({
            type: "POST",
            url: i,
            data: JSON.stringify(e),
            complete: function() {
                t && t()
            }
        })
    }
}

function CentralLogAPI(r, e, t) {
    var a = e.logUrl,
        s = e.environment,
        l = t,
        c = "no cookie",
        d = "unknown";
    this.logEventObject = function(e, t, n) {
        void 0 === t && (void 0 === (t = e.userDataString) ? t = "{}" : delete e.userDataString);
        var i = function(e, t) {
            var n = "";
            isJsonString(e) && (n = JSON.parse(e));
            var i = {};
            i.configBranch = s, i.type = "mmgame", i.input_type = "log", i.platform = "Web", i.container = l, i.isWebContainer = !0, "" != n ? (i.user_id = n.userId, i.roster_id = n.rosterId, i.sessionId = sessionId(n), i.iReady = n.iReady, i.isDemo = n.isDemo, i.OBID = n.onboardId, i.SCHOOLID = n.schoolId, i.userRole = n.userRole, i.stateId = n.stateId) : (i.user_id = c, i.roster_id = c, i.sessionId = c, i.iReady = c, i.isDemo = c, i.OBID = c, i.SCHOOLID = c, i.userRole = c, i.stateId = c);
            leanApp ? (i.statsContext = leanApp.statsContext, i.sessionState = leanApp.sessionState) : (i.statsContext = d, i.sessionState = d);
            for (var r = Object.keys(t), a = r.length - 1; 0 <= a; a--) "object" != typeof t[r[a]] && (i[r[a]] = t[r[a]]);
            var o = {};
            return o.event = i, o
        }(t, e);
        this.send(i, n)
    }, this.logRawEventObject = function(e, t) {
        this.send(e, t)
    }, this.logEvent = function(e, t, n, i, r, a) {
        var o = {
            game: t,
            code: n,
            timeElapsed: i,
            message: r,
            isLoading: a
        };
        this.logEventObject(o, e)
    }, this.send = function(e, t) {
        var n = !0;
        if (e.event.logVersion = 0, e.event.message) {
            var i = ((new Date).getTime() - this.priorLogMessageTimestamp) / 1e3;
            e.event.message == this.priorLogMessage && this.priorLogMessageTimestamp && i < 3 ? (this.duplicateLogMessageCount++, e.event.duplicateLogMessageCount = this.duplicateLogMessageCount, [1, 10, 100, 1e3].includes(this.duplicateLogMessageCount) || (n = !1)) : (this.duplicateLogMessageCount = 0, this.priorLogMessage = e.event.message), this.priorLogMessageTimestamp = (new Date).getTime()
        }
        n && r.ajax({
            type: "POST",
            headers: {
                Authorization: "Splunk 5cbb4cca-83f4-470e-9b8c-327d50327a58"
            },
            url: a,
            data: JSON.stringify(e),
            complete: function() {
                t && t()
            }
        })
    }
}

function LeanApp(e) {
    var l, p, c, d, u, t, n, f, h, g = this,
        m = $(e),
        r = !1,
        v = {},
        a = parseQueryString(window.location.search),
        y = ("staging" == config.environment || "development" == config.environment) && !config.isDemo,
        i = -1 != window.location.href.indexOf("9002"),
        o = "receiver",
        s = "",
        w = !1,
        b = !1,
        C = !1,
        x = !1,
        E = !1,
        k = !1,
        L = !1,
        S = !1,
        z = 0,
        M = window.location.hostname.split("."),
        I = (3 <= M.length ? M[M.length - 2] + "." : "") + M[M.length - 1];
    var T, A = "https://" + ("g" === (T = M[0]) || "dory-g" === T ? "cdn" : "g" === T || "local-g" === T ? "dev-cdn" : "stg-cdn") + "." + I;
    $.getJSON("games/gameUrls.json", function(e) {
        h = e
    });
    var N = {
        START: "start",
        LOADING_GAME_STARTED: "loadingGameStarted",
        GAME_LOAD_COMPLETE: "gameLoadComplete",
        PLAYER_CLICKED_PLAY: "playerClickedPlay",
        GAME_QUIT: "gameQuit",
        CLOSE_WINDOW: "closeWindow"
    };
    try {
        document.domain = I
    } catch (e) {
        log(e)
    }
    try {
        var O = window.parent.teacherForGames
    } catch (e) {
        log(e)
    }
    try {
        a = Object.assign({}, a, parseQueryString(window.parent.location.search))
    } catch (e) {
        log(e)
    }

    function D() {
        var e = getCookie("mm_play_userdata");
        if (e && isJsonString(e)) {
            var t = sessionId(e = JSON.parse(e));
            trackJs.configure({
                userId: e.userId,
                sessionId: t
            })
        }
    }

    function F(e) {
        var t = [];
        return e && e.primarySchoolMathClassList && (t = e.primarySchoolMathClassList.map(function(e) {
            return e.classId
        })), t
    }

    function _() {
        return i ? new window.XMLHttpRequest : new(window[o].contentWindow ? window[o].contentWindow.XMLHttpRequest : window[o].XMLHttpRequest)
    }

    function P() {
        if (navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident/i) || isMobile.any()) return p.hide(), void(document.getElementById("main").innerHTML = '<p style="text-align: center; margin-top: 150px;">Sorry, Learning Games are not supported on this browser/device. Please use Chrome, Firefox, Edge, or Safari on a desktop or laptop computer to play.</p>');
        O ? (q(O), U("games")) : a.token ? $.ajax({
            type: "GET",
            url: config.apiServerUrl + "/v1/mm/students/validate/token/" + a.token,
            xhr: _,
            success: function(e) {
                console.log(e);
                var t = "cateacher";
                q({
                    token: e.accessToken,
                    serverDataVersion: e.serverDataVersion,
                    teacherId: t,
                    userId: e.data && e.data.id ? e.data.id : "",
                    userRole: e.data && e.data.userRole ? e.data.userRole : "",
                    firstName: e.data && e.data.firstName ? e.data.firstName : "",
                    lastName: e.data && e.data.lastName ? e.data.lastName : "",
                    gradeLevel: e.data && e.data.gradeLevel ? e.data.gradeLevel : "",
                    placementLevel: e.data && e.data.placementLevel ? e.data.placementLevel : [],
                    onboardId: e.data && e.data.onboardId ? e.data.onboardId : "",
                    stateId: e.data && e.data.stateId ? e.data.stateId : "",
                    schoolId: e.data && e.data.schoolId ? e.data.schoolId : "",
                    primarySchoolMathClasses: F(e.data),
                    iReady: !0,
                    isTeacher: !1,
                    teacher: {
                        first: "",
                        last: "",
                        id: t
                    }
                }), U("games")
            },
            error: function(e) {
                console.log(e), 401 == e.status && ee("Error: Invalid token")
            }
        }) : config.isDemo ? ! function() {
            if (getCookie("mm_play_refresh")) {
                var e = getCookie("mm_play_userdata");
                if (e && isJsonString(e)) return e = JSON.parse(e), r = e.accessCode, q(e), !0
            }
            return g.clearUserSession(), !1
        }() ? U("login") : (p.getChild("waiting").showFull(), U("games")) : window.location.href = config.iReadyLoginUrl
    }

    function R(e) {
        J(), W(), trackJs.addMetadata("game", e);
        Math.pow(1024, 2), h[e];
        var t, n = 0,
            r = (new Date).getTime();
        window.addEventListener("focus", function(e) {
            if (null != u) {
                var t = (new Date).getTime() - u.getTime();
                z += t
            }
        }), window.setLoadingSteps = function(e) {
            t = e
        }, window.finishedLoadingStep = function() {
            c.cancelProgress(), n++, p.getChild("loading-progress").getElement().removeClass("loaded"), p.getChild("loading-progress").getChild("percent").getElement().css("width", 80 + 20 * n / t + "%"), n == t && (B(), p.getChild("loading-iframe").getElement()[0].contentDocument.dispatchEvent(new Event("mainGameLoaded")), p.getChild("loading-progress").getChild("loading-backdrop").hide(), p.getChild("loading-progress").getChild("percent").hide(), p.getChild("loading-progress").getChild("play-loaded-game").show().one("click", function() {
                if (J(), O && p.getChild("educator-demo").getElement().hide(), K(N.PLAYER_CLICKED_PLAY, 0), g.sessionState = N.PLAYER_CLICKED_PLAY, g.adjustGameIframeContainer(), isMobile.Safari() || isMobile.Firefox() || Z(), c.instance.SendMessage(c.callbackObj, "InitiateGame"), c.init = !0, p.getChild("loading-iframe").hide().getElement().attr("src", ""), p.getChild("loading-progress").hide(), m.find("#loading").remove(), m.find("#loading-progress").remove(), p.getChild("game").getElement().removeClass("invis"), console.log(c.getVersion()), y) {
                    p.findChild("version").getElement().html(c.getVersion());
                    var e = c.getMemory(),
                        t = "Memory: window = " + e.windowHeapSizeUsed + "MB / " + e.windowHeapSizeTotal + "MB of max " + e.windowHeapSizeLimit + "MB";
                    p.findChild("debug-memory").getElement().html(t);
                    var n = 1e5,
                        i = p.findChild("memory-log").getChild("memory-log-body");
                    setInterval(function() {
                        var e = c.getMemory();
                        i.addChild(n, '<tr data-index="' + n % 2 + '"></tr>').getChild(n).addChild("td-1", "<td></td>", e.usedMegabytes).addChild("td-2", "<td></td>", e.totalMegabytes).addChild("td-5", "<td></td>", (new Date).toLocaleTimeString()), n--, i.updateContent()
                    }, 6e4)
                }
            }), m.find("#loading-progress .loading-backdrop").remove(), m.find("#loading-progress .percent").remove(), m.find("#loading-progress").addClass("loaded"), K(N.GAME_LOAD_COMPLETE, z), g.sessionState = N.GAME_LOAD_COMPLETE, statscAPI.gameLoadComplete(c.id))
        };
        var i = g.getGameIframe().contentDocument.getElementById("unity-canvas"),
            a = E ? ".error" : "",
            o = L ? ".error" : "",
            s = {
                dataUrl: A + h[e] + "/" + e + ".data.br" + a,
                frameworkUrl: A + h[e] + "/" + e + ".framework.js.br" + o,
                codeUrl: A + h[e] + "/" + e + ".wasm.br",
                streamingAssetsUrl: "StreamingAssets",
                companyName: "Curriculum Associates, Inc.",
                productName: e,
                productVersion: c.getVersion()
            };
        if ((0, g.getGameIframe().contentWindow.createUnityInstance)(i, s, function(e) {
                ! function(e) {
                    1 != e || c.ready ? c.setProgressMax(e) : c.ready = !0
                }(e)
            }).then(function(e) {
                c.instance = e
            }).catch(function(e) {
                var t = {
                    code: "Crash",
                    isLoading: g.isGameLoading,
                    isFromUnityLoader: !0,
                    message: getShortErrorMessage(e),
                    error_timeStamp: (new Date).getTime(),
                    error_type: "ErrorEvent",
                    game: c.id,
                    userDataString: getCookie("mm_play_userdata")
                };
                t.isDuplicate = t.message === this.priorCrashMessage, this.priorCrashMessage = t.message, d && (t.timeElapsed = H(0)), trackJs.addMetadata("crashInfo", t), trackJs.track(e)
            }), c.loading = !0, c.setProgressMax(.1), window.GameLoaded = function(t, e) {
                0 < z && statscAPI.blurredGameLoadTime(c.id, z), g.crashDuringLoading && statscAPI.gameLoadedAfterCrash(c.id, c.timestamp), g.errorDuringLoading && statscAPI.gameLoadedAfterError(c.id, c.timestamp), g.isGameLoading = !1, g.crashDuringLoading = !1, g.errorDuringLoading = !1;
                var n = (new Date).getTime() - r;
                c.callbackObj = t, k && delete v.token;
                var i = {
                    settings: config,
                    user: v,
                    analytics: {
                        sessionStartTime: v.sessionStartTime,
                        loadTimeMillis: n,
                        platform: l,
                        isRetina: isRetina()
                    },
                    debug: c.debug,
                    auditLevelLogging: v.auditLevelLogging,
                    isCAPilot: v.isCAPilot,
                    gradeLevel: v.gradeLevel,
                    statsContext: g.statsContext,
                    containerVersion: config.version
                };
                c.eid ? i.eid = c.eid : c.sid && (i.sid = c.sid), y && c.environment && (i.settings.environment = c.environment), c.loadFail && (i.failToLoad = c.loadFail), i.settings.configBranch = i.settings.environment, c.loading = !1, c.instance.SendMessage(t, e, JSON.stringify(i)), window.startDagger = function(e) {
                    c.instance.SendMessage(t, "StartDaggerTest", e)
                }
            }, window.ShowErrorDialog = function() {
                ! function(e, t) {
                    e = e || "An unknown error occurred.", t = t || "OK";
                    var n = p.getChild("halt-error").showFull();
                    n.findChild("text").insert(e), n.findChild("button").insert(t)
                }("We are having trouble<br/>loading the game.<br/><br/>Please refresh the page<br/>after 30 seconds to try again.")
            }, x) throw new Error("null5 js error after Unity loader initialized (as well as interop callbacks)")
    }

    function q(e) {
        v = e, config.isDemo && (v.isDemo = !0), g.clearUserSession(), g.saveUserSession(e), trackJs.addMetadata("iReady", !!v.iReady), trackJs.addMetadata("isDemo", !!v.isDemo), g.iReadyStudent() ? (g.statsContext = a.statsContext, p.getChild("iready-header").findChild("name").insert(e.firstName), B()) : O ? v.isDemo && (g.statsContext = a.statsContext) : p.getChild("iready-header").findChild("hi").insert("Welcome to the Learning Games Demo"), f = void 0
    }

    function U(e, t) {
        switch (p.hideFull(), p.show(), e) {
            case "games":
                f ? function() {
                    var e = ["waiting", "halt-error", "popup", "loading-iframe", "loading-progress", "game", "logout-dialog"];
                    O && e.push("iready-header");
                    p.showFull(e), O && p.getChild("educator-demo").getElement().show();
                    v.sessionStartTime || (function(e, t) {
                        var n = getCookie("mm_play_userdata");
                        n && isJsonString(n) && ((n = JSON.parse(n))[e] = t, v[e] = t, g.saveUserSession(n))
                    }("sessionStartTime", (new Date).getTime()), D());
                    p.findChild("game-boxes").eachChild(function(e, t) {
                        p.findChild("game-boxes").removeChild(t)
                    });
                    var h = p.findChild("game-boxes").addChild("detail-wrapper", '<div class="detail-wrapper"></div>').getChild("detail-wrapper");
                    f.games.filter(function(e) {
                        return "hidden" != e.state
                    }).map(function(t) {
                        function e(e, t, n) {
                            if (statscAPI.resetErrorState(), U("loadingGame", {
                                    loadingGame: function(e) {
                                        var t = ["largest-number", "whackamatch"];
                                        if (isNaN(parseInt(e)) || parseInt(e) < 2) return "whackamatch";
                                        var n = Math.floor(Math.random() * t.length);
                                        return t[n]
                                    }(v.gradeLevel),
                                    mainGame: {
                                        id: n.id,
                                        name: n.name
                                    }
                                }), b) throw "null3 error before Unity loader begins loading"
                        }
                        var n, i = t.displayName.toLowerCase().replace(/ /g, ""),
                            r = {
                                id: i,
                                name: t.displayName
                            },
                            a = p.findChild("game-boxes").addChild("game-box-" + i, '<div class="game-box"></div>').getChild("game-box-" + i);
                        a.addChild("image", '<img data-name="' + t.imageName + '" alt="' + i + '" src="images/games/' + t.imageName + '.jpg" srcset="images/games/' + t.imageName + ".jpg 247w, images/games/" + t.imageName + '@2x.jpg 495w" sizes="100%, (min-width: 960px) 246px" />'), t.daysToUnlock ? a.addChild("screen", '<div class="screen"></div>') : (a.addChild("button-wrapper", '<span class="button-wrapper"></span>'), a.getChild("button-wrapper").addChild("button", '<button tabindex="-1" class="btn-play-' + i + ' blue button"></button>', "Play " + t.displayName + "!").on("click", e, r), a.getChild("image").on("click", e, r)), n = i, a.addChild("question-mark", '<span class="question-mark' + (t.daysToUnlock ? " locked" : "") + '">?</span>', "?").getChild("question-mark").on("click", function() {
                            ! function(e) {
                                h.show().getChild(e).show()
                            }("detail-popup-" + n)
                        });
                        var o = h.addChild("detail-popup-" + i, '<div class="detail-popup" data-game="' + i + '"></div>').getChild("detail-popup-" + i);
                        if (t.daysToUnlock) {
                            o.addChild("lock-message", '<div class="lock" style="background-image: url(images/domain-icons/LockedIcon.png)"></div>');
                            var s = o.getChild("lock-message").addChild("lock-message-text", '<p class="lock-message-text"></p>');
                            s.getChild("lock-message-text").addChild("lock-notice", '<span class="notice"></span>', t.displayName + " is locked.  "), s.getChild("lock-message-text").addChild("lock-description", "<span></span>", "To unlock it, play the available games for " + t.daysToUnlock + " more day" + (1 != t.daysToUnlock ? "s" : "") + ".")
                        }
                        o.addChild("description", '<div class="description"></div>'), o.getChild("description").addChild("description-text", '<p class="description-text"></p>', t.description);
                        var l, c, d = o.addChild("list", '<div class="list"></div>').getChild("list");
                        for (j = 0; j < f.domains.length; j++) {
                            var u = f.domains[j];
                            0 < f.gameDomains.filter(function(e) {
                                return e.gameId == t.id && e.domainId == u.id
                            }).length && d.addChild("item-" + j, '<div class="item" style="background-image: url(images/domain-icons/' + u.iconName + '.png)"></div>', u.displayName)
                        }
                        t.daysToUnlock || (l = e, c = r, o.addChild("button", '<button class="blue bordered button" type="button"></button>', "Play " + t.displayName + "!").getChild("button").on("click", function() {
                            h.hide().eachChild(function(e) {
                                e.hide()
                            }), l(!1, !1, c)
                        })), o.hide()
                    }), h.hide().on("click", function(e) {
                        e.target.classList.contains("detail-wrapper") && h.hide().eachChild(function(e) {
                            e.hide()
                        })
                    }), setTimeout(function() {
                        g.setGameBoxSizes()
                    }, 10)
                }() : function(n) {
                    var e = {};
                    e["x-mm-token"] = v.token, v.userId && (e["x-mpact-user"] = v.userId), v.teacherRole && (e["x-mm-teacher-role"] = v.teacherRole), v.onboardId && (e["x-lg-onboard-id"] = v.onboardId), v.stateId && (e["x-lg-state-id"] = v.stateId), v.gradeLevel && (e["x-mm-grade-level"] = v.gradeLevel), v.placementLevel && (e["x-mm-domain-placements"] = JSON.stringify(v.placementLevel)), config.version && (e["x-mm-app-version"] = config.version), $.ajax({
                        type: "GET",
                        url: config.apiServerUrl + "/v3/games/learninggames/learninggamesconfig?environment=" + config.environment,
                        headers: e,
                        dataType: "json",
                        xhr: _,
                        success: function(e, t) {
                            f = e, "function" == typeof n && n()
                        },
                        error: function(e, t, n) {
                            v.isSales ? te("Oops! Something went wrong. Please try again") : ee("Error: " + n)
                        }
                    })
                }(function() {
                    U(e, t)
                });
                break;
            case "loadingGame":
                ! function(e) {
                    g.isGameLoading = !0, c.setGame(e.mainGame.id, e.mainGame.name), statscAPI.gameInitiated(c.id);
                    var t, n = ["waiting", "halt-error", "popup", "body", "logout-dialog"];
                    y || n.push("debug-tools");
                    O && n.push("iready-header");

                    function i() {
                        r && a && (d = (new Date).getTime(), z = 0, K(N.LOADING_GAME_STARTED, 0), g.sessionState = N.LOADING_GAME_STARTED, g.runGameIframeScript(t, c.id, getCookie("mm_play_userdata"), function() {
                            R(l)
                        }))
                    }
                    var r = !1,
                        a = !1,
                        o = function() {
                            r = !0, window.removeEventListener("gameIframeLoaded", o), i()
                        };
                    window.addEventListener("gameIframeLoaded", o);
                    var s = function() {
                        a = !0, window.removeEventListener("loadingIframeLoaded", s), i()
                    };
                    if (window.addEventListener("loadingIframeLoaded", s), w) throw new ReferenceError("null2 error before loading game navigation");
                    p.showFull(n), p.getChild("loading-iframe").getElement().attr("src", "loading/" + e.loadingGame + ".html"), p.getChild("game").getElement().addClass("invis"), p.findChild("play-loaded-game").insert("Play " + e.mainGame.name + "!");
                    var l = (l = e.mainGame.name.replace(/ /g, "")).charAt(0).toUpperCase() + l.slice(1);
                    C || (t = A + h[l] + "/" + l + ".loader.js")
                }(t);
                break;
            case "login":
                ! function(e) {
                    var t = "";
                    if (e) switch (parseInt(e)) {
                        case 200:
                            break;
                        case 404:
                            t = "Sorry, the access code you have entered is not valid.  Please try again.";
                            break;
                        default:
                            t = "An error occurred during sign in. Please try again."
                    }
                    e || p.findChild("body-input").findChild("input").getElement().val("");
                    p.getChild("iready-header").findChild("hi").insert("Welcome to the Learning Games Demo"), p.findChild("popup").findChild("error").insert(t);
                    p.showFull(["waiting", "halt-error", "loading-iframe", "loading-progress", "game", "game-boxes", "logout-dialog", "close"])
                }(t);
                break;
            case "logout":
                G()
        }
        g.regen(), swapDeferredImages(p)
    }

    function G() {
        v.isSales ? (v = !1, c.reset(), g.clearUserSession(), U("login")) : X()
    }

    function K(e, t) {
        if (d) {
            var n = H(t);
            centralLogAPI.logEvent(getCookie("mm_play_userdata"), c.id, e, n, e + " after " + n, g.isLoading)
        }
    }

    function H(e) {
        return ((new Date).getTime() - d + e) / 1e3
    }

    function J() {
        clearTimeout(t), window.removeEventListener("click", B), window.removeEventListener("keypress", B), window.removeEventListener("iframeActivity", B)
    }

    function B() {
        J(), g.iReadyStudent() && (t = setTimeout(function() {
            centralLogAPI.logEventObject({
                game: c.id,
                code: "Logout",
                message: "User Inactivity Timeout",
                didUserInitiate: !1
            }, getCookie("mm_play_userdata"), function() {
                X()
            })
        }, 12e4), window.addEventListener("click", B), window.addEventListener("keypress", B), window.addEventListener("iframeActivity", B))
    }

    function W() {
        g.iReadyStudent() && (V(), window.parent.learningGamesBridge && window.parent.learningGamesBridge.initSessionInterval && window.parent.learningGamesBridge.initSessionInterval())
    }

    function V() {
        g.iReadyStudent() && (clearTimeout(n), n = setTimeout(function() {
            W()
        }, 84e4))
    }

    function Q(e) {
        if (y && !(w || b || C || x || E)) {
            var t = e || window.event;
            s += t.key;
            if ("null".includes(s) || -1 < ["null1", "null2", "null3", "null4", "null5", "null6", "null7", "null8"].indexOf(s)) {
                if ("null1" == s) throw console.log("null1: throwing js error"), s = "", new TypeError("null1 error thrown");
                "null2" == s ? (console.log("null2: throw js error before navigating to the loading game"), w = !(s = "")) : "null3" == s ? (console.log("null3: throw js error after loading game nav but before Unity loader file load"), b = !(s = "")) : "null4" == s ? (console.log("null4: prevent the Unity loader file from loading"), C = !(s = "")) : "null5" == s ? (console.log("null5: throw js error after Unity loader initialized"), x = !(s = "")) : "null6" == s ? (console.log("null6: prevent a file from loading on which Unity loader depends"), E = !(s = "")) : "null7" == s ? (console.log("null7: send game an empty access token"), k = !(s = "")) : "null8" == s ? (console.log("null8: prevent a file from loading on which Unity loader depends"), L = !(s = "")) : console.log("captured key " + t.key + " for " + s)
            } else s = ""
        }
    }

    function X() {
        Y(), window.sessionStorage && window.sessionStorage.clear(), window.parent.learningGamesBridge.close()
    }

    function Y() {
        c.instance && "function" == typeof c.instance.Quit ? c.instance.Quit().then(function() {
            K(N.GAME_QUIT, z), g.sessionState = N.GAME_QUIT, c.instance = null
        }).catch(function() {
            console.log("Quitting Unity wasn't successful")
        }) : K("quitBeforeGames", z)
    }

    function Z() {
        g.disableGameIframeResizing(), c.instance.SetFullscreen(1), setTimeout(function() {
            g.enableGameIframeResizing()
        }, 1300)
    }

    function ee(e) {
        var t = p.getChild("halt-error").showFull();
        t.findChild("text").insert("Sorry, we can't log you in to play games right now. " + e), t.findChild("button").hide()
    }

    function te(e) {
        var t = p.getChild("logout-dialog").showFull();
        t.findChild("text").insert(e), t.findChild("button").insert("OK")
    }
    g.isGameLoading = !1, g.sessionState = N.START, g.isFirstCrash = !0, g.crashDuringLoading = !1, g.errorDuringLoading = !1, g.gamesPlayed = 0, g.statsContext = a.statsContext, g.loadingIframe = {
            id: "loading",
            maxWidth: 1e3,
            maxHeight: 650,
            width: 0,
            height: 0
        }, g.gameIframe = {
            width: 1e3,
            height: 600,
            resizingEnabled: !0
        }, g.userDataString = function() {
            return getCookie("mm_play_userdata")
        }, D(), g.regen = function() {
            m.html(p.updateContent()), g.adjustLoadingGameContainer()
        }, g.getRootNode = function() {
            return p
        }, g.iReadyStudent = function() {
            return !v.isSales && !O
        }, g.getGameIframe = function() {
            return p.findChild("game-iframe").getElement()[0]
        },
        function() {
            var e, t = new AsynchTaskChecker(2, P);
            try {
                document.domain = I
            } catch (e) {
                log(e)
            }

            function n() {
                var e = i.findChild("input").getElement().val().trim();
                1 <= e.length && function(e) {
                    r = e,
                        function() {
                            if (!r) return U("logout");
                            p.getChild("waiting").showFull(), $.ajax({
                                type: "POST",
                                url: config.apiServerUrl + "/demo/login",
                                dataType: "json",
                                beforeSend: function(e) {
                                    e.setRequestHeader("Authorization", "Basic " + btoa(r + ":"))
                                },
                                xhr: _,
                                success: function(e, t) {
                                    q({
                                        token: e.accessToken,
                                        serverDataVersion: e.serverDataVersion,
                                        userId: e.data && e.data.id ? e.data.id : "",
                                        userRole: e.data && e.data.userRole ? e.data.userRole : "",
                                        firstName: e.data && e.data.firstName ? e.data.firstName : "",
                                        lastName: e.data && e.data.lastName ? e.data.lastName : "",
                                        primarySchoolMathClasses: F(e.data),
                                        stateId: e.data && e.data.stateId ? e.data.stateId : "",
                                        isSales: !0
                                    }), U("games")
                                },
                                error: function(e, t, n) {
                                    U("login", e.status)
                                }
                            })
                        }()
                }(e)
            }
            window.GoToEduHome = function() {
                Y(), U("games")
            }, window.loadingAborted = function() {
                g.crashDuringLoading || g.errorDuringLoading || (statscAPI.gameAborted(c.id, c.timestamp), S && statscAPI.gameAbandoned(c.id, c.timestamp), c.reset(), U("games"))
            }, window.enterFullscreen = function() {
                Z()
            }, window.exitFullscreen = function() {
                g.disableGameIframeResizing(), c.instance.SetFullscreen(0), setTimeout(function() {
                    g.enableGameIframeResizing()
                }, 1300)
            }, window.handleTimeout = function() {
                1 == c.init && X()
            }, window.logUserOutForBadToken = function() {
                te("Oops! Something went wrong. Please log back in")
            }, window.sendCentralLog = function(e, t, n) {
                centralLogAPI.logRawEventObject(JSON.parse(e), function() {
                    c.instance.SendMessage(t, n)
                })
            }, B(), V(), window.addEventListener("keypress", Q), window.addEventListener("blur", function(e) {
                S = !0, u = new Date, y && console.log("user blurred at " + u)
            }), window.addEventListener("focus", function(e) {
                S = !1, y && console.log("user focused at " + new Date)
            }), window.addEventListener("beforeunload", function(e) {
                c.loading ? function(e) {
                    e.preventDefault(), e.returnValue = ""
                }(e) : (K(N.CLOSE_WINDOW, 0), g.sessionState = N.CLOSE_WINDOW, trackJs.removeMetadata("game"), g.markClosedSession(), c && c.instance && (c.instance.SendMessage(c.callbackObj, "GameEnded"), Y()))
            }), window.addEventListener("unload", function(e) {
                c.loading && window.loadingAborted()
            }), window.addEventListener("resize", function() {
                g.setGameBoxSizes(), g.adjustGameIframeContainer(), g.adjustLoadingGameContainer()
            }), window.addEventListener("enterFullscreen", function() {
                Z()
            }), window.addEventListener("changeGame", function() {
                var e = function() {
                    U("games"), window.removeEventListener("gameIframeLoaded", e)
                };
                window.addEventListener("gameIframeLoaded", e), p.findChild("game-container").removeChild("game-iframe"), p.findChild("game-container").addChild("game-iframe", '<iframe id="gameContainer" src="game-container.html" oncontextmenu="event.preventDefault();" width="' + g.gameIframe.width + '" height="' + g.gameIframe.height + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>'), p.getChild("game").getElement().addClass("invis"), p.getChild("waiting").showFull(), g.regen(), B(), K("changedGame", 0), trackJs.removeMetadata("game")
            }), window.startDaggerTest = function(e) {
                console.log("[Dagger] Test started: " + e), window.isDaggerTestStarted = !0, window.daggerTestId = e
            }, window.endDaggerTest = function(e) {
                console.log("[Dagger] Test ended: " + e), window.isDaggerTestEnded = !0, window.daggerTestId = e
            }, window.resetDaggerTests = function() {
                window.isDaggerTestStarted = !1, window.isDaggerTestEnded = !1
            }, p = new Node(g, "root", '<div class="block" id="root"></div>'), m.after('<iframe id="' + o + '" height="0" width="0"></iframe>'), (e = $("#" + o)).on("load", function() {
                t.check()
            }), e.attr("src", config.apiServerUrl + "/receiver"), O && p.addChild("educator-demo", '<div class="educator-demo"></div>', "Educator Demo"), p.addChild("iready-header", '<div id="iready-header" class="block"></div>').getChild("iready-header").addChild("logo", '<img class="logo" alt="i-ready logo" src="images/iready-logo-cube.png" />').addChild("header-right", '<div class="header-right"></div>').getChild("header-right").addChild("close", '<button class="close"></button>', "").getChild("close").on("click", function() {
                U("logout")
            }).getParent().getParent().addChild("greeting", '<p class="greeting"></p>').getChild("greeting").addChild("hi", "<span></span>", "Welcome to Learning Games, ").addChild("name", '<span class="name"></span>', ""), p.addChild("loading-iframe", '<iframe id="' + g.loadingIframe.id + '" width="' + g.loadingIframe.width + '" height="' + g.loadingIframe.height + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src=""></iframe>').addChild("game", '<div id="game" class="invis"></div>').getChild("game").addChild("game-container", "<div></div>").getChild("game-container").addChild("game-iframe", '<iframe id="gameContainer" src="game-container.html" oncontextmenu="event.preventDefault();" width="' + g.gameIframe.width + '" height="' + g.gameIframe.height + '" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>').getParent().addChild("game-below", '<div id="game-below"></div>').getChild("game-below").addChild("version", '<div id="version"></div>').addChild("debug-tools", '<div id="debug"></div>').getChild("debug-tools").addChild("controls", '<div class="actions block"></div>').getChild("controls").addChild("debug-memory", '<span class="memory"></span>').addChild("toggle-memory-log", '<input id="memory-log-toggle" type="checkbox" />').getChild("toggle-memory-log").on("click", function() {
                p.findChild("memory-log").getElement().toggleClass("visible")
            }).getParent().addChild("toggle-memory-log-label", '<label for="memory-log-toggle"></label>', "Memory Log").getParent().addChild("log", '<table class="log"></table>').getChild("log").addChild("log-head", "<thead></thead>").getChild("log-head").addChild("tr", "<tr></tr>").getChild("tr").addChild("th-1", '<th class="time"></th>', "Time").addChild("th-2", '<th class="id"></th>', "Error").addChild("th-3", '<th class="message"></th>', "Message").getParent().getParent().addChild("log-body", "<tbody></tbody>").getParent().addChild("memory-log", '<table class="memory-log"></table>').getChild("memory-log").addChild("memory-log-head", "<thead></thead>").getChild("memory-log-head").addChild("tr", "<tr></tr>").getChild("tr").addChild("th-1", "<th></th>", "Game Usage (Mb)").addChild("th-2", "<th></th>", "Game Alloc. (Mb)").addChild("th-5", "<th></th>", "Timestamp").getParent().getParent().addChild("memory-log-body", "<tbody></tbody>").getParent().getParent().getParent().getParent().addChild("loading-progress", '<span id="loading-progress"></span>').getChild("loading-progress").addChild("loading-backdrop", '<div class="loading-backdrop"></div>').addChild("percent", '<div class="percent"></div>').addChild("play-loaded-game", '<button tabindex="-1" class="btn-play-game large blue button" type="button"></button>', "Play Game!"), p.addChild("waiting", '<div class="waiting"></div>').getChild("waiting").addChild("spinner-bg", '<div class="loading"></div>'), p.addChild("halt-error", '<div class="halt-error"></div>').getChild("halt-error").addChild("message-wrapper", '<div class="message-wrapper"></div>').getChild("message-wrapper").addChild("text", '<div class="text"></div>').addChild("button", '<button class="large blue button" type="button"></button>').getChild("button").on("click", function() {
                p.getChild("halt-error").hideFull()
            }), p.addChild("logout-dialog", '<div class="halt-error"></div>').getChild("logout-dialog").addChild("message-wrapper", '<div class="message-wrapper"></div>').getChild("message-wrapper").addChild("text", '<div class="text"></div>').addChild("button", '<button class="large blue button" type="button"></button>').getChild("button").on("click", function() {
                p.getChild("logout-dialog").hideFull(), G()
            }), p.addChild("body", '<div id="app-body" class="block"></div>').getChild("body").addChild("game-boxes", '<div class="game-boxes block"></div>');
            var i = p.getChild("body").addChild("popup", '<div id="app-popup"></div>').getChild("popup").addChild("box", '<div class="popup-box"></div>').getChild("box");
            i.addChild("error", '<div class="error block"></div>').addChild("body-input", '<div class="input block"></div>').getChild("body-input").addChild("text", '<label for="access-code" class="text"></div>', "Access Code").addChild("input", '<input class="code" type="text" value="" spellcheck="false" id="access-code">').getChild("input").on("keydown", function(e, t) {
                "Enter" == e.key ? n() : setTimeout(function() {
                    g.regen(), t.getElement().focus()
                }, 10)
            }).getParent().getParent().addChild("button", '<button class="go-button"></button>', "Go!").getChild("button").addClassRule(function() {
                return 1 <= i.findChild("input").getElement().val().trim().length
            }, "green", "grey").on("click", n), p.hideFull(["waiting", "root"]), g.regen(), swapDeferredImages(p), c = new Game(a, g), l = platform.description, t.check()
        }()
}

function addScriptErrorHandler(t, n) {
    "object" == typeof n && null !== n || (n = {}), t.onerror = function(e) {
        n.code = "ScriptError", n.message = t.name + " script failed to load", n.error_timeStamp = e.timeStamp, n.error_type = e.type, trackJs.addMetadata("crashInfo", n), trackJs.track(e)
    }
}

function loadScript(e, t) {
    var n = "",
        i = !1,
        r = document.createElement("script");
    void 0 !== t.forceUncache && t.forceUncache && (n = "?v=" + (new Date).getTime()), r.type = "application/javascript", r.name = e, r.src = e + n, addScriptErrorHandler(r, t.errorObj), r.onload = function() {
        i || "function" != typeof t.afterLoad || t.afterLoad()
    }, "function" == typeof t.appendScript ? t.appendScript(r) : document.body.appendChild(r), "function" == typeof t.isLoaded && t.isLoaded() && "function" == typeof t.afterLoad && (i = !0, t.afterLoad())
}

function log(e) {
    null != console && console.log(e)
}

function isRetina() {
    return 1 < window.devicePixelRatio || !(!window.matchMedia || !window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches)
}

function swapDeferredImages(e) {
    e.getElement().find("img.deferred").each(function() {
        var e = $(this).attr("data-deferred-image");
        $(this).attr("src", e).removeClass("deferred")
    })
}

function preloadImage(e, t, n, i, r) {
    var a, o = arguments.callee,
        s = new Image,
        l = e[i];
    a = isMobile.iOS() || isRetina() ? t + l + "@2x." + n : t + l + "." + n, s.onload = function() {
        ++i < e.length ? o(e, t, n, i, r) : "function" == typeof r && r()
    }, s.src = a
}

function AsynchTaskChecker(t, n) {
    var i = 0;
    this.check = function(e) {
        ++i == t && n(e)
    }
}

function Node(i, e, t, r, n) {
    var a = this,
        o = $(t),
        s = (r = null != r ? r : "", {}),
        l = [],
        c = (n = n || !1, e = e, !0);
    this.isVisible = function() {
        return c
    }, this.getName = function() {
        return e
    }, this.show = function(e) {
        return c = !0, o.removeClass("hidden-node"), a
    }, this.showFull = function(n) {
        return -1 == (n = n || []).indexOf(e) && a.show(), a.hasChildren() && a.eachChild(function(e, t) {
            -1 == n.indexOf(t) && e.showFull(n)
        }), a
    }, this.hide = function(e) {
        return c = !1, o.addClass("hidden-node"), a
    }, this.hideFull = function(n) {
        return -1 == (n = n || []).indexOf(e) && a.hide(), a.hasChildren() && a.eachChild(function(e, t) {
            -1 == n.indexOf(t) && e.hideFull(n)
        }), a
    }, this.showHide = function() {
        this.isVisible() ? this.show() : this.hide()
    }, this.append = function(e) {
        return r += e, this.updateContent(), a
    }, this.insert = function(e) {
        return r = e, this.updateContent(), a
    }, this.updateContent = function() {
        var e = [r];
        for (var t in this.showHide(), l) {
            var n = l[t];
            n.check() ? o.addClass(n.classTrue).removeClass(n.classFalse) : o.removeClass(n.classTrue).addClass(n.classFalse)
        }
        for (var t in s) e.push(s[t].updateContent()), s[t].showHide();
        return o.html(e), o
    }, this.getContent = function() {
        return r
    }, this.getElement = function() {
        return o
    }, this.getParent = function() {
        return n
    }, this.getChild = function(e) {
        return !!s[e] && s[e]
    }, this.findChild = function(e) {
        var t = !1;
        if (t = a.getChild(e)) return t;
        if (!t && a.hasChildren())
            for (var n in s)
                if (t = s[n].findChild(e)) return t;
        return !1
    }, this.addChild = function(e, t, n) {
        return s[e] = new Node(i, e, t, n, a), a
    }, this.removeChild = function(e) {
        a.getChild(e) && (delete s[e], a.updateContent())
    }, this.addChildNode = function(e) {
        return s[e.getName()] = e, a
    }, this.eachChild = function(e) {
        for (var t in s) e(s[t], t)
    }, this.hasChildren = function() {
        return 0 < Object.keys(s).length
    }, this.removeChildren = function() {
        a.eachChild(function(e, t) {
            a.removeChild(t)
        })
    }, this.on = function(e, n, i) {
        return o.on(e, function(e, t) {
            n(e, a, i, t)
        }), a
    }, this.one = function(e, n, i) {
        return o.one(e, function(e, t) {
            n(e, a, i, t)
        }), a
    }, this.off = function(e, t) {
        return o.off(e, t), a
    }, this.addClassRule = function(e, t, n) {
        return l.push({
            check: e,
            classTrue: t,
            classFalse: n
        }), a
    }
}

function Game(e, t) {
    var n, a = this,
        o = t;
    a.reset = function() {
        a.callbackObj = !1, a.configVersion = !1, a.currentProgress = 0, a.debug = "true" === e.debug, a.eid = e.eid || !1, a.gameVersion = !1, a.id = !1, a.init = !1, a.instance = !1, a.loading = !1, a.log = [], a.maxProgress = !1, a.name = !1, a.ready = !1, a.seed = !1, a.sid = e.sid || !1, a.environment = e.environment, a.timestamp = !1, a.loadFail = e.loadFail || !1, clearInterval(n)
    }, a.cancelProgress = function() {
        a.currentProgress = 0, a.maxProgress = !1, clearInterval(n), o.getRootNode().getChild("loading-progress").getElement().removeClass("loaded"), o.getRootNode().getChild("loading-progress").getChild("percent").getElement().css("width", "5.6%")
    }, a.setProgressMax = function(e) {
        if (!(e <= a.maxProgress)) {
            a.maxProgress = e, clearInterval(n), n = setInterval(function() {
                t.adjustLoadingGameContainer(), a.currentProgress += .01, .25 <= a.maxProgress - a.currentProgress && (a.currentProgress += .05);
                var e = a.currentProgress < .07 ? .07 : a.currentProgress;
                o.getRootNode().getChild("loading-progress").getChild("percent").getElement().css("width", 80 * e + "%"), a.currentProgress >= a.maxProgress && clearInterval(n)
            }, 1e3)
        }
    }, a.logEvent = function(e, t, n) {
        a.log.push({
            type: e,
            id: t,
            message: n,
            timestamp: (new Date).getTime()
        }), a.updateDebugLog()
    }, a.updateDebugLog = function() {
        var e = o.getRootNode().findChild("log-body");
        e.removeChildren();
        for (var t = a.log.length - 1; 0 <= t; t--) {
            var n = a.log[t],
                i = new Date(n.timestamp),
                r = a.log.length % 2 == 0 ? (t + 1) % 2 : t % 2;
            e.addChild("tr-" + t, '<tr data-type="' + r + '"></tr>').getChild("tr-" + t).addChild("td-1", '<td class="time"></td>', i.toLocaleTimeString()).addChild("td-2", '<td class="id"></td>', n.id).addChild("td-3", '<td class="message"></td>', n.message)
        }
        e.updateContent()
    }, a.getVersion = function() {
        var e = "";
        return e += "v" + a.gameVersion, e += " c" + a.configVersion, e += " s" + a.seed
    }, a.saveSnapshot = function() {
        a.instance.SendMessage(a.callbackObj, "SaveSnapshot")
    }, a.crashApp = function() {
        var e = a.name + " " + a.getVersion();
        a.instance.SendMessage(a.callbackObj, "CrashApp", e)
    }, a.getMemory = function() {
        var n = {},
            e = window.performance.memory || {};
        return n.usedMegabytes = "function" == typeof a.instance.Module.getMemory && a.instance.Module.getMemory() / 1024 / 1024 || "NaN", n.totalMegabytes = void 0 !== a.instance.Module.TOTAL_MEMORY && Math.ceil(a.instance.Module.TOTAL_MEMORY / 1024 / 1024) || "NaN", n.windowHeapSizeUsed = Math.ceil(e.usedJSHeapSize / 1024 / 1024) || "NaN", n.windowHeapSizeTotal = Math.ceil(e.totalJSHeapSize / 1024 / 1024) || "NaN", n.windowHeapSizeLimit = Math.ceil(e.jsHeapSizeLimit / 1024 / 1024) || "NaN", ["usedMegabytes", "totalMegabytes", "windowHeapSizeUsed", "windowHeapSizeTotal", "windowHeapSizeLimit"].forEach(function(e) {
            var t = n[e];
            n[e] = Math.round(100 * t) / 100
        }), n
    }, a.setGame = function(e, t) {
        a.ready = !1, a.init = !1, a.id = e, a.name = t, a.timestamp = (new Date).getTime(), a.log = [], a.updateDebugLog(), a.cancelProgress()
    }, a.setupGlobalInterfaces = function() {
        window.setConfigVersion = function(e) {
            a.configVersion = e
        }, window.setGameVersion = function(e) {
            a.gameVersion = e
        }, window.setSeed = function(e) {
            a.seed = e
        }, window.showDebugData = function(e, t) {
            a.logEvent("debug", e, t)
        }, window.showInfoData = function(e, t) {
            a.logEvent("debug", e, t)
        }, window.showErrorData = function(e, t) {
            a.logEvent("error", e, t)
        }
    }, a.reset(), a.setupGlobalInterfaces()
}
window.alert = function() {}, window._trackJs = {
        token: "31027b9e4f144c6ea05af14ded1acb01",
        application: "gamesWeb_" + config.environment,
        version: config.version,
        onError: function(e) {
            if (e.code = "trackJsError", e.isLeanAppLoaded = !(void 0 === window.leanApp), e.metadata)
                for (var t = e.metadata.length - 1; 0 <= t; t--) {
                    var n = e.metadata[t];
                    "crashInfo" === n.key && (e = $.extend(e, JSON.parse(n.value))).metadata.splice(t, 1)
                }
            if (void 0 === e.userDataString && leanApp && (e.userDataString = leanApp.userDataString()), null == e.statsContext && leanApp && (e.statsContext = leanApp.statsContext), statscAPI) {
                var i = e.game ? e.game : "site";
                leanApp && leanApp.isGameLoading ? "Crash" === e.code ? (statscAPI.onGameLoadCrash(i), leanApp.crashDuringLoading = !0) : (statscAPI.onGameLoadError(i), leanApp.errorDuringLoading = !0) : "Crash" === e.code ? statscAPI.onGameCrash(i) : statscAPI.onSiteError(i)
            }
            return centralLogAPI && centralLogAPI.logEventObject(e), !0
        }
    },
    function(l, n, a) {
        if (l.trackJs) l.console && l.console.warn && l.console.warn("TrackJS global conflict");
        else {
            var e = function(e, t) {
                this.config = e, this.onError = t, e.enabled && this.watch()
            };
            e.prototype = {
                watch: function() {
                    v.forEach(["EventTarget", "Node", "XMLHttpRequest"], function(e) {
                        v.has(l, e + ".prototype.addEventListener") && v.hasOwn(l[e].prototype, "addEventListener") && this.wrapEventTarget(l[e].prototype)
                    }, this), this.wrapTimer("setTimeout"), this.wrapTimer("setInterval")
                },
                wrap: function(t) {
                    function e() {
                        try {
                            return t.apply(this, arguments)
                        } catch (e) {
                            throw r.onError("catch", e, {
                                bindTime: n,
                                bindStack: i
                            }), v.wrapError(e)
                        }
                    }
                    var n, i, r = this;
                    try {
                        if (!v.isFunction(t) || v.hasOwn(t, "__trackjs__")) return t;
                        if (v.hasOwn(t, "__trackjs_state__")) return t.__trackjs_state__
                    } catch (e) {
                        return t
                    }
                    if (r.config.bindStack) try {
                        throw Error()
                    } catch (e) {
                        i = e.stack, n = v.isoNow()
                    }
                    for (var a in t) v.hasOwn(t, a) && (e[a] = t[a]);
                    return e.prototype = t.prototype, e.__trackjs__ = !0, t.__trackjs_state__ = e
                },
                wrapEventTarget: function(e) {
                    var a = this;
                    v.has(e, "addEventListener.call") && v.has(e, "removeEventListener.call") && (v.patch(e, "addEventListener", function(r) {
                        return function(e, t, n, i) {
                            try {
                                v.has(t, "handleEvent") && (t.handleEvent = a.wrap(t.handleEvent))
                            } catch (e) {}
                            return r.call(this, e, a.wrap(t), n, i)
                        }
                    }), v.patch(e, "removeEventListener", function(r) {
                        return function(e, t, n, i) {
                            try {
                                t = t && (t.__trackjs_state__ || t)
                            } catch (e) {}
                            return r.call(this, e, t, n, i)
                        }
                    }))
                },
                wrapTimer: function(e) {
                    var a = this;
                    v.patch(l, e, function(r) {
                        return function(e, t) {
                            var n = Array.prototype.slice.call(arguments),
                                i = n[0];
                            return v.isFunction(i) && (n[0] = a.wrap(i)), v.has(r, "apply") ? r.apply(this, n) : r(n[0], n[1])
                        }
                    })
                }
            };

            function t(e) {
                this.initCurrent(e)
            }
            t.prototype = {
                current: {},
                initOnly: {
                    cookie: !0,
                    enabled: !0,
                    token: !0,
                    callback: {
                        enabled: !0
                    },
                    console: {
                        enabled: !0
                    },
                    navigation: {
                        enabled: !0
                    },
                    network: {
                        enabled: !0,
                        fetch: !0
                    },
                    visitor: {
                        enabled: !0
                    },
                    window: {
                        enabled: !0,
                        promise: !0
                    }
                },
                defaults: {
                    application: "",
                    cookie: !1,
                    dedupe: !0,
                    enabled: !0,
                    errorURL: "https://capture.trackjs.com/capture",
                    errorNoSSLURL: "http://capture.trackjs.com/capture",
                    faultURL: "https://usage.trackjs.com/fault.gif",
                    onError: function() {
                        return !0
                    },
                    serialize: function(t) {
                        function n(e) {
                            var t = "<" + e.tagName.toLowerCase();
                            e = e.attributes || [];
                            for (var n = 0; n < e.length; n++) t += " " + e[n].name + '="' + e[n].value + '"';
                            return t + ">"
                        }
                        if ("" === t) return "Empty String";
                        if (t === a) return "undefined";
                        if (v.isString(t) || v.isNumber(t) || v.isBoolean(t) || v.isFunction(t)) return "" + t;
                        if (v.isElement(t)) return n(t);
                        var i;
                        try {
                            i = JSON.stringify(t, function(e, t) {
                                return t === a ? "undefined" : v.isNumber(t) && isNaN(t) ? "NaN" : v.isError(t) ? {
                                    name: t.name,
                                    message: t.message,
                                    stack: t.stack
                                } : v.isElement(t) ? n(t) : t
                            })
                        } catch (e) {
                            for (var r in i = "", t) t.hasOwnProperty(r) && (i += ',"' + r + '":"' + t[r] + '"');
                            i = i ? "{" + i.replace(",", "") + "}" : "Unserializable Object"
                        }
                        return i.replace(/"undefined"/g, "undefined").replace(/"NaN"/g, "NaN")
                    },
                    sessionId: "",
                    token: "",
                    userId: "",
                    version: "",
                    callback: {
                        enabled: !0,
                        bindStack: !1
                    },
                    console: {
                        enabled: !0,
                        display: !0,
                        error: !0,
                        warn: !1,
                        watch: ["log", "debug", "info", "warn", "error"]
                    },
                    navigation: {
                        enabled: !0
                    },
                    network: {
                        enabled: !0,
                        error: !0,
                        fetch: !0
                    },
                    visitor: {
                        enabled: !0
                    },
                    usageURL: "https://usage.trackjs.com/usage.gif",
                    window: {
                        enabled: !0,
                        promise: !0
                    }
                },
                initCurrent: function(e) {
                    return this.validate(e, this.defaults, "config", {}) ? (this.current = v.defaultsDeep({}, e, this.defaults), !0) : (this.current = v.defaultsDeep({}, this.defaults), console.log("init current config", this.current), !1)
                },
                setCurrent: function(e) {
                    return !!this.validate(e, this.defaults, "config", this.initOnly) && (this.current = v.defaultsDeep({}, e, this.current), !0)
                },
                validate: function(e, t, n, i) {
                    var r = !0;
                    for (var a in n = n || "", i = i || {}, e)
                        if (e.hasOwnProperty(a))
                            if (t.hasOwnProperty(a)) {
                                var o = typeof t[a];
                                o != typeof e[a] ? (console.warn(n + "." + a + ": property must be type " + o + "."), r = !1) : "[object Array]" !== Object.prototype.toString.call(e[a]) || this.validateArray(e[a], t[a], n + "." + a) ? "[object Object]" === Object.prototype.toString.call(e[a]) ? r = this.validate(e[a], t[a], n + "." + a, i[a]) : i.hasOwnProperty(a) && (console.warn(n + "." + a + ": property cannot be set after load."), r = !1) : r = !1
                            } else console.warn(n + "." + a + ": property not supported."), r = !1;
                    return r
                },
                validateArray: function(e, t, n) {
                    var i = !0;
                    n = n || "";
                    for (var r = 0; r < e.length; r++) v.contains(t, e[r]) || (console.warn(n + "[" + r + "]: invalid value: " + e[r] + "."), i = !1);
                    return i
                }
            };

            function i(e, t, n, i, r, a, o) {
                this.util = e, this.log = t, this.onError = n, this.onFault = i, this.serialize = r, o.enabled && (a.console = this.wrapConsoleObject(a.console, o))
            }
            i.prototype = {
                wrapConsoleObject: function(e, i) {
                    var t, r = (e = e || {}).log || function() {},
                        a = this;
                    for (t = 0; t < i.watch.length; t++) ! function(t) {
                        var n = e[t] || r;
                        e[t] = function() {
                            try {
                                var e = Array.prototype.slice.call(arguments);
                                if (a.log.add("c", {
                                        timestamp: a.util.isoNow(),
                                        severity: t,
                                        message: a.serialize(1 === e.length ? e[0] : e)
                                    }), i[t])
                                    if (v.isError(e[0]) && 1 === e.length) a.onError("console", e[0]);
                                    else try {
                                        throw Error(a.serialize(1 === e.length ? e[0] : e))
                                    } catch (e) {
                                        a.onError("console", e)
                                    }
                                i.display && (a.util.hasFunction(n, "apply") ? n.apply(this, e) : n(e[0]))
                            } catch (e) {
                                a.onFault(e)
                            }
                        }
                    }(i.watch[t]);
                    return e
                },
                report: function() {
                    return this.log.all("c")
                }
            };

            function r(e, t, n, i, r) {
                this.config = e, this.util = t, this.log = n, this.window = i, this.document = r, this.correlationId = this.token = null, this.initialize()
            }
            r.prototype = {
                initialize: function() {
                    this.token = this.getCustomerToken(), this.correlationId = this.getCorrelationId()
                },
                getCustomerToken: function() {
                    if (this.config.current.token) return this.config.current.token;
                    var e = this.document.getElementsByTagName("script");
                    return e[e.length - 1].getAttribute("data-token")
                },
                getCorrelationId: function() {
                    var t;
                    if (!this.config.current.cookie) return this.util.uuid();
                    try {
                        (t = this.document.cookie.replace(/(?:(?:^|.*;\s*)TrackJS\s*\=\s*([^;]*).*$)|^.*$/, "$1")) || (t = this.util.uuid(), this.document.cookie = "TrackJS=" + t + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/")
                    } catch (e) {
                        t = this.util.uuid()
                    }
                    return t
                },
                report: function() {
                    return {
                        application: this.config.current.application,
                        correlationId: this.correlationId,
                        sessionId: this.config.current.sessionId,
                        token: this.token,
                        userId: this.config.current.userId,
                        version: this.config.current.version
                    }
                }
            };

            function o() {
                this.loadedOn = (new Date).getTime(), this.originalUrl = v.getLocation(), this.referrer = n.referrer
            }
            o.prototype = {
                discoverDependencies: function() {
                    var e = {};
                    for (var t in l.jQuery && l.jQuery.fn && l.jQuery.fn.jquery && (e.jQuery = l.jQuery.fn.jquery), l.jQuery && l.jQuery.ui && l.jQuery.ui.version && (e.jQueryUI = l.jQuery.ui.version), l.angular && l.angular.version && l.angular.version.full && (e.angular = l.angular.version.full), l)
                        if ("_trackJs" !== t && "_trackJS" !== t && "_trackjs" !== t && "webkitStorageInfo" !== t && "webkitIndexedDB" !== t && "top" !== t && "parent" !== t && "frameElement" !== t) try {
                            if (l[t]) {
                                var n = l[t].version || l[t].Version || l[t].VERSION;
                                "string" == typeof n && (e[t] = n)
                            }
                        } catch (e) {}
                    return e
                },
                report: function() {
                    return {
                        age: (new Date).getTime() - this.loadedOn,
                        dependencies: this.discoverDependencies(),
                        originalUrl: this.originalUrl,
                        referrer: this.referrer,
                        userAgent: l.navigator.userAgent,
                        viewportHeight: l.document.documentElement.clientHeight,
                        viewportWidth: l.document.documentElement.clientWidth
                    }
                }
            };

            function s(e) {
                this.util = e, this.appender = [], this.maxLength = 30
            }
            s.prototype = {
                all: function(e) {
                    var t, n, i = [];
                    for (n = 0; n < this.appender.length; n++)(t = this.appender[n]) && t.category === e && i.push(t.value);
                    return i
                },
                clear: function() {
                    this.appender.length = 0
                },
                truncate: function() {
                    this.appender.length > this.maxLength && (this.appender = this.appender.slice(Math.max(this.appender.length - this.maxLength, 0)))
                },
                add: function(e, t) {
                    var n = this.util.uuid();
                    return this.appender.push({
                        key: n,
                        category: e,
                        value: t
                    }), this.truncate(), n
                },
                get: function(e, t) {
                    var n, i;
                    for (i = 0; i < this.appender.length; i++)
                        if ((n = this.appender[i]).category === e && n.key === t) return n.value;
                    return !1
                }
            };

            function c(e, t) {
                this.log = e, (this.options = t).enabled && this.watch()
            }
            c.prototype = {
                isCompatible: function(e) {
                    return e = e || l, !v.has(e, "chrome.app.runtime") && v.has(e, "addEventListener") && v.has(e, "history.pushState")
                },
                record: function(e, t, n) {
                    this.log.add("h", {
                        type: e,
                        from: v.truncate(t, 250),
                        to: v.truncate(n, 250),
                        on: v.isoNow()
                    })
                },
                report: function() {
                    return this.log.all("h")
                },
                watch: function() {
                    if (this.isCompatible()) {
                        var r = this,
                            a = v.getLocationURL().relative;
                        l.addEventListener("popstate", function() {
                            var e = v.getLocationURL().relative;
                            r.record("popState", a, e), a = e
                        }, !0), v.forEach(["pushState", "replaceState"], function(i) {
                            v.patch(history, i, function(n) {
                                return function() {
                                    a = v.getLocationURL().relative;
                                    var e = n.apply(this, arguments),
                                        t = v.getLocationURL().relative;
                                    return r.record(i, a, t), a = t, e
                                }
                            })
                        })
                    }
                }
            };

            function d(e, t, n, i, r, a) {
                this.util = e, this.log = t, this.onError = n, this.onFault = i, this.window = r, (this.options = a).enabled && this.initialize(r)
            }
            d.prototype = {
                initialize: function(e) {
                    e.XMLHttpRequest && this.util.hasFunction(e.XMLHttpRequest.prototype.open, "apply") && this.watchNetworkObject(e.XMLHttpRequest), e.XDomainRequest && this.util.hasFunction(e.XDomainRequest.prototype.open, "apply") && this.watchNetworkObject(e.XDomainRequest), this.options.fetch && v.isWrappableFunction(e.fetch) && this.watchFetch()
                },
                watchFetch: function() {
                    var a = this.log,
                        o = this.options,
                        s = this.onError;
                    v.patch(l, "fetch", function(r) {
                        return function(e, t) {
                            var n = e instanceof Request ? e : new Request(e, t),
                                i = r.apply(l, arguments);
                            return i.__trackjs_state__ = a.add("n", {
                                type: "fetch",
                                startedOn: v.isoNow(),
                                method: n.method,
                                url: n.url
                            }), i.then(function(e) {
                                var t = a.get("n", i.__trackjs_state__);
                                return t && (v.defaults(t, {
                                    completedOn: v.isoNow(),
                                    statusCode: e.status,
                                    statusText: e.statusText
                                }), o.error && 400 <= e.status && s("ajax", t.statusCode + " " + t.statusText + ": " + t.method + " " + t.url)), e
                            }).catch(function(e) {
                                var t = a.get("n", i.__trackjs_state__);
                                throw t && (v.defaults(t, {
                                    completedOn: v.isoNow(),
                                    statusCode: 0,
                                    statusText: (e || "").toString()
                                }), o.error && s("ajax", e)), e
                            })
                        }
                    })
                },
                watchNetworkObject: function(e) {
                    var t = this,
                        i = e.prototype.open,
                        n = e.prototype.send;
                    return e.prototype.open = function(e, t) {
                        var n = (t || "").toString();
                        return n.indexOf("localhost:0") < 0 && (this._trackJs = {
                            method: e,
                            url: n
                        }), i.apply(this, arguments)
                    }, e.prototype.send = function() {
                        try {
                            if (!this._trackJs) return n.apply(this, arguments);
                            this._trackJs.logId = t.log.add("n", {
                                type: "xhr",
                                startedOn: t.util.isoNow(),
                                method: this._trackJs.method,
                                url: this._trackJs.url
                            }), t.listenForNetworkComplete(this)
                        } catch (e) {
                            t.onFault(e)
                        }
                        return n.apply(this, arguments)
                    }, e
                },
                listenForNetworkComplete: function(n) {
                    var i = this;
                    i.window.ProgressEvent && n.addEventListener && n.addEventListener("readystatechange", function() {
                        4 === n.readyState && i.finalizeNetworkEvent(n)
                    }, !0), n.addEventListener ? n.addEventListener("load", function() {
                        i.finalizeNetworkEvent(n), i.checkNetworkFault(n)
                    }, !0) : setTimeout(function() {
                        try {
                            var e = n.onload;
                            n.onload = function() {
                                i.finalizeNetworkEvent(n), i.checkNetworkFault(n), "function" == typeof e && i.util.hasFunction(e, "apply") && e.apply(n, arguments)
                            };
                            var t = n.onerror;
                            n.onerror = function() {
                                i.finalizeNetworkEvent(n), i.checkNetworkFault(n), "function" == typeof oldOnError && t.apply(n, arguments)
                            }
                        } catch (e) {
                            i.onFault(e)
                        }
                    }, 0)
                },
                finalizeNetworkEvent: function(e) {
                    if (e._trackJs) {
                        var t = this.log.get("n", e._trackJs.logId);
                        t && (t.completedOn = this.util.isoNow(), t.statusCode = 1223 == e.status ? 204 : e.status, t.statusText = 1223 == e.status ? "No Content" : e.statusText)
                    }
                },
                checkNetworkFault: function(e) {
                    if (this.options.error && 400 <= e.status && 1223 != e.status) {
                        var t = e._trackJs || {};
                        this.onError("ajax", e.status + " " + e.statusText + ": " + t.method + " " + t.url)
                    }
                },
                report: function() {
                    return this.log.all("n")
                }
            };

            function u(e, t) {
                this.util = e, this.config = t, this.disabled = !1, this.throttleStats = {
                    attemptCount: 0,
                    throttledCount: 0,
                    lastAttempt: (new Date).getTime()
                }, l.JSON && l.JSON.stringify || (this.disabled = !0)
            }
            u.prototype = {
                errorEndpoint: function(e) {
                    var t = this.config.current.errorURL;
                    return this.util.testCrossdomainXhr() || -1 !== l.location.protocol.indexOf("https") || (t = this.config.current.errorNoSSLURL), t + "?token=" + e
                },
                usageEndpoint: function(e) {
                    return this.appendObjectAsQuery(e, this.config.current.usageURL)
                },
                trackerFaultEndpoint: function(e) {
                    return this.appendObjectAsQuery(e, this.config.current.faultURL)
                },
                appendObjectAsQuery: function(e, t) {
                    for (var n in t += "?", e) e.hasOwnProperty(n) && (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&");
                    return t
                },
                getCORSRequest: function(e, t) {
                    var n;
                    return this.util.testCrossdomainXhr() ? ((n = new l.XMLHttpRequest).open(e, t), n.setRequestHeader("Content-Type", "text/plain")) : void 0 !== l.XDomainRequest ? (n = new l.XDomainRequest).open(e, t) : n = null, n
                },
                sendTrackerFault: function(e) {
                    this.throttle(e) || ((new Image).src = this.trackerFaultEndpoint(e))
                },
                sendUsage: function(e) {
                    (new Image).src = this.usageEndpoint(e)
                },
                sendError: function(e, t) {
                    var n = this;
                    if (!this.disabled && !this.throttle(e)) try {
                        var i = this.getCORSRequest("POST", this.errorEndpoint(t));
                        i.onreadystatechange = function() {
                            4 === i.readyState && 200 !== i.status && (n.disabled = !0)
                        }, i._trackJs = a, i.send(l.JSON.stringify(e))
                    } catch (e) {
                        throw this.disabled = !0, e
                    }
                },
                throttle: function(e) {
                    var t = (new Date).getTime();
                    if (this.throttleStats.attemptCount++, this.throttleStats.lastAttempt + 1e3 >= t) {
                        if (this.throttleStats.lastAttempt = t, 10 < this.throttleStats.attemptCount) return this.throttleStats.throttledCount++, !0
                    } else e.throttled = this.throttleStats.throttledCount, this.throttleStats.attemptCount = 0, this.throttleStats.lastAttempt = t, this.throttleStats.throttledCount = 0;
                    return !1
                }
            };

            function h(e, t, n, i, r, a) {
                this.util = e, this.log = t, this.onError = n, this.onFault = i, this.options = a, this.document = r, a.enabled && this.initialize(r)
            }
            var v = {
                addEventListenerSafe: function(e, t, n, i) {
                    e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                afterDocumentLoad: function(e) {
                    var t = !1;
                    "complete" === n.readyState ? v.defer(e) : (v.addEventListenerSafe(n, "readystatechange", function() {
                        "complete" !== n.readyState || t || (v.defer(e), t = !0)
                    }), setTimeout(function() {
                        t || (v.defer(e), t = !0)
                    }, 1e4))
                },
                bind: function(e, t) {
                    return function() {
                        return e.apply(t, Array.prototype.slice.call(arguments))
                    }
                },
                contains: function(e, t) {
                    var n;
                    for (n = 0; n < e.length; n++)
                        if (e[n] === t) return !0;
                    return !1
                },
                defaults: function(e) {
                    return y(e, Array.prototype.slice.call(arguments, 1), !1)
                },
                defaultsDeep: function(e) {
                    return y(e, Array.prototype.slice.call(arguments, 1), !0)
                },
                defer: function(e, t) {
                    setTimeout(function() {
                        e.apply(t)
                    })
                },
                forEach: function(e, t, n) {
                    if (e.forEach) return e.forEach(t, n);
                    for (var i = 0; i < e.length;) t.call(n, e[i], i, e), i++
                },
                getLocation: function() {
                    return l.location.toString().replace(/ /g, "%20")
                },
                getLocationURL: function() {
                    return v.parseURL(v.getLocation())
                },
                has: function(e, t) {
                    try {
                        for (var n = t.split("."), i = e, r = 0; r < n.length; r++) {
                            if (!i[n[r]]) return !1;
                            i = i[n[r]]
                        }
                        return !0
                    } catch (e) {
                        return !1
                    }
                },
                hasFunction: function(e, t) {
                    try {
                        return !!e[t]
                    } catch (e) {
                        return !1
                    }
                },
                hasOwn: function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                },
                isArray: function(e) {
                    return "[object Array]" === w(e)
                },
                isBoolean: function(e) {
                    return "boolean" == typeof e || v.isObject(e) && "[object Boolean]" === w(e)
                },
                isBrowserIE: function(e) {
                    var t = (e = e || l.navigator.userAgent).match(/Trident\/([\d.]+)/);
                    return t && "7.0" === t[1] ? 11 : !!(e = e.match(/MSIE ([\d.]+)/)) && parseInt(e[1], 10)
                },
                isBrowserSupported: function() {
                    var e = this.isBrowserIE();
                    return !e || 8 <= e
                },
                isError: function(e) {
                    if (!v.isObject(e)) return !1;
                    var t = w(e);
                    return "[object Error]" === t || "[object DOMException]" === t || v.isString(e.name) && v.isString(e.message)
                },
                isElement: function(e) {
                    return v.isObject(e) && 1 === e.nodeType
                },
                isFunction: function(e) {
                    return !(!e || "function" != typeof e)
                },
                isNumber: function(e) {
                    return "number" == typeof e || v.isObject(e) && "[object Number]" === w(e)
                },
                isObject: function(e) {
                    return !(!e || "object" != typeof e)
                },
                isString: function(e) {
                    return "string" == typeof e || !v.isArray(e) && v.isObject(e) && "[object String]" === w(e)
                },
                isWrappableFunction: function(e) {
                    return this.isFunction(e) && this.hasFunction(e, "apply")
                },
                isoNow: function() {
                    var e = new Date;
                    return e.toISOString ? e.toISOString() : e.getUTCFullYear() + "-" + this.pad(e.getUTCMonth() + 1) + "-" + this.pad(e.getUTCDate()) + "T" + this.pad(e.getUTCHours()) + ":" + this.pad(e.getUTCMinutes()) + ":" + this.pad(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                },
                keys: function(e) {
                    if (!v.isObject(e)) return [];
                    var t, n = [];
                    for (t in e) e.hasOwnProperty(t) && n.push(t);
                    return n
                },
                noop: function() {},
                pad: function(e) {
                    return 1 === (e = String(e)).length && (e = "0" + e), e
                },
                parseURL: function(e) {
                    var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    return t ? ((t = {
                        protocol: t[2],
                        host: t[4],
                        path: t[5],
                        query: t[6],
                        hash: t[8]
                    }).origin = (t.protocol || "") + "://" + (t.host || ""), t.relative = (t.path || "") + (t.query || "") + (t.hash || ""), t.href = e, t) : {}
                },
                patch: function(e, t, n) {
                    e[t] = n(e[t] || v.noop)
                },
                testCrossdomainXhr: function() {
                    return "withCredentials" in new XMLHttpRequest
                },
                truncate: function(e, t) {
                    if (e.length <= t) return e;
                    var n = e.length - t;
                    return e.substr(0, t) + "...{" + n + "}"
                },
                tryGet: function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                },
                uuid: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    })
                },
                wrapError: function(e) {
                    if (e.innerError) return e;
                    var t = Error("TrackJS Caught: " + (e.message || e));
                    return t.description = "TrackJS Caught: " + e.description, t.file = e.file, t.line = e.line || e.lineNumber, t.column = e.column || e.columnNumber, t.stack = e.stack, t.innerError = e, t
                }
            };
            h.prototype = {
                initialize: function(e) {
                    var t = this.util.bind(this.onDocumentClicked, this),
                        n = this.util.bind(this.onInputChanged, this);
                    e.addEventListener ? (e.addEventListener("click", t, !0), e.addEventListener("blur", n, !0)) : e.attachEvent && (e.attachEvent("onclick", t), e.attachEvent("onfocusout", n))
                },
                onDocumentClicked: function(e) {
                    try {
                        var t = this.getElementFromEvent(e);
                        t && t.tagName && (this.isDescribedElement(t, "a") || this.isDescribedElement(t, "button") || this.isDescribedElement(t, "input", ["button", "submit"]) ? this.writeVisitorEvent(t, "click") : this.isDescribedElement(t, "input", ["checkbox", "radio"]) && this.writeVisitorEvent(t, "input", t.value, t.checked))
                    } catch (e) {
                        this.onFault(e)
                    }
                },
                onInputChanged: function(e) {
                    try {
                        var t = this.getElementFromEvent(e);
                        t && t.tagName && (this.isDescribedElement(t, "textarea") ? this.writeVisitorEvent(t, "input", t.value) : this.isDescribedElement(t, "select") && t.options && t.options.length ? this.onSelectInputChanged(t) : this.isDescribedElement(t, "input") && !this.isDescribedElement(t, "input", ["button", "submit", "hidden", "checkbox", "radio"]) && this.writeVisitorEvent(t, "input", t.value))
                    } catch (e) {
                        this.onFault(e)
                    }
                },
                onSelectInputChanged: function(e) {
                    if (e.multiple)
                        for (var t = 0; t < e.options.length; t++) e.options[t].selected && this.writeVisitorEvent(e, "input", e.options[t].value);
                    else 0 <= e.selectedIndex && e.options[e.selectedIndex] && this.writeVisitorEvent(e, "input", e.options[e.selectedIndex].value)
                },
                writeVisitorEvent: function(e, t, n, i) {
                    "password" === this.getElementType(e) && (n = a), this.log.add("v", {
                        timestamp: this.util.isoNow(),
                        action: t,
                        element: {
                            tag: e.tagName.toLowerCase(),
                            attributes: this.getElementAttributes(e),
                            value: this.getMetaValue(n, i)
                        }
                    })
                },
                getElementFromEvent: function(e) {
                    return e.target || n.elementFromPoint(e.clientX, e.clientY)
                },
                isDescribedElement: function(e, t, n) {
                    if (e.tagName.toLowerCase() !== t.toLowerCase()) return !1;
                    if (!n) return !0;
                    for (e = this.getElementType(e), t = 0; t < n.length; t++)
                        if (n[t] === e) return !0;
                    return !1
                },
                getElementType: function(e) {
                    return (e.getAttribute("type") || "").toLowerCase()
                },
                getElementAttributes: function(e) {
                    for (var t = {}, n = 0; n < e.attributes.length; n++) "value" !== e.attributes[n].name.toLowerCase() && (t[e.attributes[n].name] = e.attributes[n].value);
                    return t
                },
                getMetaValue: function(e, t) {
                    return e === a ? a : {
                        length: e.length,
                        pattern: this.matchInputPattern(e),
                        checked: t
                    }
                },
                matchInputPattern: function(e) {
                    return "" === e ? "empty" : /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e) ? "email" : /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e) || /^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(e) ? "date" : /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(e) ? "usphone" : /^\s*$/.test(e) ? "whitespace" : /^\d*$/.test(e) ? "numeric" : /^[a-zA-Z]*$/.test(e) ? "alpha" : /^[a-zA-Z0-9]*$/.test(e) ? "alphanumeric" : "characters"
                },
                report: function() {
                    return this.log.all("v")
                }
            };

            function p(e, t, n, i, r) {
                this.onError = e, this.onFault = t, this.serialize = n, r.enabled && this.watchWindowErrors(i), r.promise && this.watchPromiseErrors(i)
            }

            function f(e, t, n, i, r, a, o, s, l, c, d, u, h, p, f, g) {
                try {
                    if (this.window = p, this.document = f, this.util = v, this.onError = this.util.bind(this.onError, this), this.onFault = this.util.bind(this.onFault, this), this.serialize = this.util.bind(this.serialize, this), this.config = new i(e), this.transmitter = new d(this.util, this.config), this.log = new s(this.util), this.api = new t(this.config, this.util, this.onError, this.serialize), this.metadata = new l(this.serialize), this.environment = new o, this.customer = new a(this.config, this.util, this.log, this.window, this.document), this.customer.token && (this.apiConsoleWatcher = new r(this.util, this.log, this.onError, this.onFault, this.serialize, this.api, this.config.defaults.console), this.config.current.enabled && (this.windowConsoleWatcher = new r(this.util, this.log, this.onError, this.onFault, this.serialize, this.window, this.config.current.console), this.util.isBrowserSupported()))) {
                        this.callbackWatcher = new n(this.config.current.callback, this.onError, this.onFault), this.visitorWatcher = new u(this.util, this.log, this.onError, this.onFault, this.document, this.config.current.visitor), this.navigationWatcher = new g(this.log, this.config.current.navigation), this.networkWatcher = new c(this.util, this.log, this.onError, this.onFault, this.window, this.config.current.network), this.windowWatcher = new h(this.onError, this.onFault, this.serialize, this.window, this.config.current.window);
                        var m = this;
                        v.afterDocumentLoad(function() {
                            m.transmitter.sendUsage({
                                token: m.customer.token,
                                correlationId: m.customer.correlationId,
                                application: m.config.current.application,
                                x: m.util.uuid()
                            })
                        })
                    }
                } catch (e) {
                    this.onFault(e)
                }
            }
            f.prototype = {
                reveal: function() {
                    return this.customer.token ? (this.api.addMetadata = this.metadata.addMetadata, this.api.removeMetadata = this.metadata.removeMetadata, this.api) : (this.config.current.enabled && this.window.console && this.window.console.warn && this.window.console.warn("TrackJS could not find a token"), a)
                },
                onError: (m = !(p.prototype = {
                    watchPromiseErrors: function(e) {
                        var n = this;
                        e.addEventListener ? e.addEventListener("unhandledrejection", function(t) {
                            if ((t = (t = t || {}).detail ? v.tryGet(t.detail, "reason") : v.tryGet(t, "reason")) !== a) {
                                if (!v.isError(t)) try {
                                    throw Error(n.serialize(t))
                                } catch (e) {
                                    t = e
                                }
                                n.onError("promise", t)
                            }
                        }) : e.onunhandledrejection = function(e) {
                            n.onError("promise", e)
                        }
                    },
                    watchWindowErrors: function(e) {
                        var o = this;
                        v.patch(e, "onerror", function(a) {
                            return function(e, t, n, i, r) {
                                try {
                                    (r = r || {}).message = r.message || o.serialize(e), r.name = r.name || "Error", r.line = r.line || parseInt(n, 10) || null, r.column = r.column || parseInt(i, 10) || null, "[object Event]" !== Object.prototype.toString.call(e) || t ? r.file = r.file || o.serialize(t) : r.file = (e.target || {}).src, o.onError("window", r)
                                } catch (e) {
                                    o.onFault(e)
                                }
                                a.apply(this, arguments)
                            }
                        })
                    }
                }), function(e, t, n) {
                    if (v.isBrowserSupported() && this.config.current.enabled) try {
                        if (n = n || {
                                bindStack: null,
                                bindTime: null,
                                force: !1
                            }, t && v.isError(t) || (t = {
                                name: "Error",
                                message: this.serialize(t, n.force)
                            }), -1 === t.message.indexOf("TrackJS Caught"))
                            if (m && -1 !== t.message.indexOf("Script error")) m = !1;
                            else {
                                var i = v.defaultsDeep({}, {
                                    bindStack: n.bindStack,
                                    bindTime: n.bindTime,
                                    column: t.column || t.columnNumber,
                                    console: this.windowConsoleWatcher.report(),
                                    customer: this.customer.report(),
                                    entry: e,
                                    environment: this.environment.report(),
                                    file: t.file || t.fileName,
                                    line: t.line || t.lineNumber,
                                    message: t.message,
                                    metadata: this.metadata.report(),
                                    nav: this.navigationWatcher.report(),
                                    network: this.networkWatcher.report(),
                                    url: (l.location || "").toString(),
                                    stack: t.stack,
                                    timestamp: this.util.isoNow(),
                                    visitor: this.visitorWatcher.report(),
                                    version: "2.10.2"
                                });
                                if (!n.force) try {
                                    if (!this.config.current.onError(i, t)) return
                                } catch (e) {
                                    i.console.push({
                                        timestamp: this.util.isoNow(),
                                        severity: "error",
                                        message: e.message
                                    });
                                    var r = this;
                                    setTimeout(function() {
                                        r.onError("catch", e, {
                                            force: !0
                                        })
                                    }, 0)
                                }
                                if (this.config.current.dedupe) {
                                    var a = (i.message + i.stack).substr(0, 1e4);
                                    if (a === g) return;
                                    g = a
                                }
                                this.log.clear(), setTimeout(function() {
                                    m = !1
                                }), m = !0, this.transmitter.sendError(i, this.customer.token)
                            }
                    } catch (e) {
                        this.onFault(e)
                    }
                }),
                onFault: function(e) {
                    var t = this.transmitter || new u;
                    e = e || {}, e = {
                        token: this.customer.token,
                        file: e.file || e.fileName,
                        msg: e.message || "unknown",
                        stack: (e.stack || "unknown").substr(0, 500),
                        url: this.window.location,
                        v: "2.10.2",
                        h: "a36ab4356e67dd6bcde8ff31f71cc2801b24744d",
                        x: this.util.uuid()
                    }, t.sendTrackerFault(e)
                },
                serialize: function(e, t) {
                    if (this.config.current.serialize && !t) try {
                        return this.config.current.serialize(e)
                    } catch (e) {
                        this.onError("catch", e, {
                            force: !0
                        })
                    }
                    return this.config.defaults.serialize(e)
                }
            }, e = new f(l._trackJs || l._trackJS || l._trackjs || {}, function(t, i, r, n) {
                return {
                    attempt: function(e, t) {
                        try {
                            var n = Array.prototype.slice.call(arguments, 2);
                            return e.apply(t || this, n)
                        } catch (e) {
                            throw r("catch", e), i.wrapError(e)
                        }
                    },
                    configure: function(e) {
                        return t.setCurrent(e)
                    },
                    track: function(t) {
                        var e = n(t);
                        if (!(t = t || {}).stack) try {
                            throw Error(e)
                        } catch (e) {
                            t = e
                        }
                        r("direct", t)
                    },
                    watch: function(t, n) {
                        return function() {
                            try {
                                var e = Array.prototype.slice.call(arguments, 0);
                                return t.apply(n || this, e)
                            } catch (e) {
                                throw r("catch", e), i.wrapError(e)
                            }
                        }
                    },
                    watchAll: function(e) {
                        var n, t = Array.prototype.slice.call(arguments, 1);
                        for (n in e) "function" == typeof e[n] && (i.contains(t, n) || function() {
                            var t = e[n];
                            e[n] = function() {
                                try {
                                    var e = Array.prototype.slice.call(arguments, 0);
                                    return t.apply(this, e)
                                } catch (e) {
                                    throw r("catch", e), i.wrapError(e)
                                }
                            }
                        }());
                        return e
                    },
                    hash: "a36ab4356e67dd6bcde8ff31f71cc2801b24744d",
                    version: "2.10.2"
                }
            }, e, t, i, r, o, s, function(n) {
                var i = {};
                return {
                    addMetadata: function(e, t) {
                        i[e] = t
                    },
                    removeMetadata: function(e) {
                        delete i[e]
                    },
                    report: function() {
                        var e, t = [];
                        for (e in i) i.hasOwnProperty(e) && t.push({
                            key: e,
                            value: n(i[e])
                        });
                        return t
                    },
                    store: i
                }
            }, d, u, h, p, l, n, c), l.trackJs = e.reveal()
        }
        var g, m;

        function y(n, e, i, r) {
            return i = i || !1, r = r || 0, v.forEach(e, function(t) {
                v.forEach(v.keys(t), function(e) {
                    null === t[e] || t[e] === a ? n[e] = t[e] : i && r < 10 && "[object Object]" === w(t[e]) ? (n[e] = n[e] || {}, y(n[e], [t[e]], i, r + 1)) : n.hasOwnProperty(e) || (n[e] = t[e])
                })
            }), n
        }

        function w(e) {
            return Object.prototype.toString.call(e)
        }
    }(window, document), LeanApp.prototype.runGameIframeScript = function(e, t, n, i) {
        var r = this,
            a = this.getGameIframe().contentDocument;
        loadScript(e, {
            forceUncache: !0,
            afterLoad: function() {
                r.gamesPlayed++, i()
            },
            errorObj: {
                game: t,
                isLoading: r.isLoading,
                userDataString: n
            },
            appendScript: function e(t) {
                a && a.body ? a.body.appendChild(t) : setTimeout(e, 0)
            }
        })
    }, isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        Chrome: function() {
            return navigator.userAgent.match(/Chrome/i) && navigator.vendor.match(/Google/i)
        },
        Firefox: function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Safari: function() {
            return navigator.userAgent.match(/Safari/i) && navigator.vendor.match(/Apple/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
        }
    }, LeanApp.prototype.setGameBoxSizes = function() {
        this.getRootNode().getElement().find(".game-boxes .game-box").each(function() {
            $(this).height($(this).width())
        })
    }, LeanApp.prototype.adjustLoadingGameContainer = function() {
        var e = window.innerHeight;
        this.iReadyStudent() && (e -= document.getElementById("iready-header").clientHeight);
        var t = e / this.loadingIframe.maxHeight;
        1 < t && (t = 1), this.loadingIframe.width = this.loadingIframe.maxWidth * t, this.loadingIframe.height = this.loadingIframe.maxHeight * t;
        var n, i = document.getElementById(this.loadingIframe.id),
            r = this.getRootNode();
        i && (i.width = this.loadingIframe.width, i.height = this.loadingIframe.height), r && (n = r.findChild("loading-progress").getElement()) && (n[0].style.top = Math.floor(-104 * t) + "px")
    }, LeanApp.prototype.disableGameIframeResizing = function() {
        this.gameIframe.resizingEnabled = !1
    }, LeanApp.prototype.enableGameIframeResizing = function() {
        this.gameIframe.resizingEnabled = !0
    }, LeanApp.prototype.adjustGameIframeContainer = function() {
        if (this.gameIframe.resizingEnabled) {
            var e = window.innerHeight - 111,
                t = this.gameIframe.width / this.gameIframe.height;
            this.iReadyStudent() && (e -= document.getElementById("iready-header").clientHeight), e > this.gameIframe.height && (e = this.gameIframe.height), $("#gameContainer").attr("height", e + 61), $("#gameContainer").attr("width", (e + 61) * t);
            var n = this.getGameIframe().contentDocument;
            if (n) {
                var i = n.getElementById("#canvas");
                if (i) {
                    var r = e * t;
                    i.height = e, i.width = r, n.getElementsByClassName("game-controls")[0].style.maxWidth = r + "px", document.getElementById("version").style.maxWidth = r + "px"
                }
            }
        }
    }, LeanApp.prototype.markClosedSession = function() {
        var e = new Date;
        e.setSeconds(e.getSeconds() + 14), document.cookie = "mm_play_refresh=path=/;expires=" + e.toUTCString()
    }, LeanApp.prototype.saveUserSession = function(e) {
        document.cookie = "mm_play_userdata=" + JSON.stringify(e) + ";path=/"
    }, LeanApp.prototype.clearUserSession = function() {
        document.cookie = "mm_play_userdata=;path=/;expires=0"
    },
    function(e, t) {
        "function" == typeof define && define.amd ? define(function() {
            return t(e)
        }) : t(e)
    }(this, function(mp) {
        var Kp, Lp, Mp, Np, Op, Pp, Qp, Rp, Sp, Tp, Up, Vp, Wp, Xp, Yp, Zp, $p, _p, aq, bq, dq, eq, fq, gq, hq, iq, jq, kq, lq, mq, nq, bA, np = (Rp = (Qp = []).concat, Sp = Qp.filter, Tp = Qp.slice, Up = mp.document, Vp = {}, Wp = {}, Xp = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, Yp = /^\s*<(\w+|!)[^>]*>/, Zp = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, $p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, _p = /^(?:body|html)$/i, aq = /([A-Z])/g, bq = ["val", "css", "html", "text", "data", "width", "height", "offset"], dq = Up.createElement("table"), eq = Up.createElement("tr"), fq = {
            tr: Up.createElement("tbody"),
            tbody: dq,
            thead: dq,
            tfoot: dq,
            td: eq,
            th: eq,
            "*": Up.createElement("div")
        }, gq = /complete|loaded|interactive/, hq = /^[\w-]*$/, jq = (iq = {}).toString, kq = {}, lq = Up.createElement("div"), mq = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, nq = Array.isArray || function(e) {
            return e instanceof Array
        }, kq.matches = function(e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, t);
            var i, r = e.parentNode,
                a = !r;
            return a && (r = lq).appendChild(e), i = ~kq.qsa(r, t).indexOf(e), a && lq.removeChild(e), i
        }, Op = function(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, Pp = function(n) {
            return Sp.call(n, function(e, t) {
                return n.indexOf(e) == t
            })
        }, kq.fragment = function(e, t, n) {
            var i, r, a;
            return Zp.test(e) && (i = Mp(Up.createElement(RegExp.$1))), i || (e.replace && (e = e.replace($p, "<$1></$2>")), t === Kp && (t = Yp.test(e) && RegExp.$1), t in fq || (t = "*"), (a = fq[t]).innerHTML = "" + e, i = Mp.each(Tp.call(a.childNodes), function() {
                a.removeChild(this)
            })), tp(n) && (r = Mp(i), Mp.each(n, function(e, t) {
                -1 < bq.indexOf(e) ? r[e](t) : r.attr(e, t)
            })), i
        }, kq.Z = function(e, t) {
            return new Cp(e, t)
        }, kq.isZ = function(e) {
            return e instanceof kq.Z
        }, kq.init = function(e, t) {
            var n;
            if (!e) return kq.Z();
            if ("string" == typeof e)
                if ("<" == (e = e.trim())[0] && Yp.test(e)) n = kq.fragment(e, RegExp.$1, t), e = null;
                else {
                    if (t !== Kp) return Mp(t).find(e);
                    n = kq.qsa(Up, e)
                }
            else {
                if (pp(e)) return Mp(Up).ready(e);
                if (kq.isZ(e)) return e;
                if (nq(e)) n = function(e) {
                    return Sp.call(e, function(e) {
                        return null != e
                    })
                }(e);
                else if (sp(e)) n = [e], e = null;
                else if (Yp.test(e)) n = kq.fragment(e.trim(), RegExp.$1, t), e = null;
                else {
                    if (t !== Kp) return Mp(t).find(e);
                    n = kq.qsa(Up, e)
                }
            }
            return kq.Z(n, e)
        }, (Mp = function(e, t) {
            return kq.init(e, t)
        }).extend = function(t) {
            var n, e = Tp.call(arguments, 1);
            return "boolean" == typeof t && (n = t, t = e.shift()), e.forEach(function(e) {
                ! function e(t, n, i) {
                    for (Lp in n) i && (tp(n[Lp]) || nq(n[Lp])) ? (tp(n[Lp]) && !tp(t[Lp]) && (t[Lp] = {}), nq(n[Lp]) && !nq(t[Lp]) && (t[Lp] = []), e(t[Lp], n[Lp], i)) : n[Lp] !== Kp && (t[Lp] = n[Lp])
                }(t, e, n)
            }), t
        }, kq.qsa = function(e, t) {
            var n, i = "#" == t[0],
                r = !i && "." == t[0],
                a = i || r ? t.slice(1) : t,
                o = hq.test(a);
            return e.getElementById && o && i ? (n = e.getElementById(a)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : Tp.call(o && !i && e.getElementsByClassName ? r ? e.getElementsByClassName(a) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        }, Mp.contains = Up.documentElement.contains ? function(e, t) {
            return e !== t && e.contains(t)
        } : function(e, t) {
            for (; t = t && t.parentNode;)
                if (t === e) return !0;
            return !1
        }, Mp.type = op, Mp.isFunction = pp, Mp.isWindow = qp, Mp.isArray = nq, Mp.isPlainObject = tp, Mp.isEmptyObject = function(e) {
            var t;
            for (t in e) return !1;
            return !0
        }, Mp.isNumeric = function(e) {
            var t = Number(e),
                n = typeof e;
            return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
        }, Mp.inArray = function(e, t, n) {
            return Qp.indexOf.call(t, e, n)
        }, Mp.camelCase = Op, Mp.trim = function(e) {
            return null == e ? "" : String.prototype.trim.call(e)
        }, Mp.uuid = 0, Mp.support = {}, Mp.expr = {}, Mp.noop = function() {}, Mp.map = function(e, t) {
            var n, i, r, a = [];
            if (up(e))
                for (i = 0; i < e.length; i++) null != (n = t(e[i], i)) && a.push(n);
            else
                for (r in e) null != (n = t(e[r], r)) && a.push(n);
            return function(e) {
                return 0 < e.length ? Mp.fn.concat.apply([], e) : e
            }(a)
        }, Mp.each = function(e, t) {
            var n, i;
            if (up(e)) {
                for (n = 0; n < e.length; n++)
                    if (!1 === t.call(e[n], n, e[n])) return e
            } else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) return e;
            return e
        }, Mp.grep = function(e, t) {
            return Sp.call(e, t)
        }, mp.JSON && (Mp.parseJSON = JSON.parse), Mp.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            iq["[object " + t + "]"] = t.toLowerCase()
        }), Mp.fn = {
            constructor: kq.Z,
            length: 0,
            forEach: Qp.forEach,
            reduce: Qp.reduce,
            push: Qp.push,
            sort: Qp.sort,
            splice: Qp.splice,
            indexOf: Qp.indexOf,
            concat: function() {
                var e, t, n = [];
                for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = kq.isZ(t) ? t.toArray() : t;
                return Rp.apply(kq.isZ(this) ? this.toArray() : this, n)
            },
            map: function(n) {
                return Mp(Mp.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return Mp(Tp.apply(this, arguments))
            },
            ready: function(e) {
                return gq.test(Up.readyState) && Up.body ? e(Mp) : Up.addEventListener("DOMContentLoaded", function() {
                    e(Mp)
                }, !1), this
            },
            get: function(e) {
                return e === Kp ? Tp.call(this) : this[0 <= e ? e : e + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(n) {
                return Qp.every.call(this, function(e, t) {
                    return !1 !== n.call(e, t, e)
                }), this
            },
            filter: function(t) {
                return pp(t) ? this.not(this.not(t)) : Mp(Sp.call(this, function(e) {
                    return kq.matches(e, t)
                }))
            },
            add: function(e, t) {
                return Mp(Pp(this.concat(Mp(e, t))))
            },
            is: function(e) {
                return 0 < this.length && kq.matches(this[0], e)
            },
            not: function(t) {
                var n = [];
                if (pp(t) && t.call !== Kp) this.each(function(e) {
                    t.call(this, e) || n.push(this)
                });
                else {
                    var i = "string" == typeof t ? this.filter(t) : up(t) && pp(t.item) ? Tp.call(t) : Mp(t);
                    this.forEach(function(e) {
                        i.indexOf(e) < 0 && n.push(e)
                    })
                }
                return Mp(n)
            },
            has: function(e) {
                return this.filter(function() {
                    return sp(e) ? Mp.contains(this, e) : Mp(this).find(e).size()
                })
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function() {
                var e = this[0];
                return e && !sp(e) ? e : Mp(e)
            },
            last: function() {
                var e = this[this.length - 1];
                return e && !sp(e) ? e : Mp(e)
            },
            find: function(e) {
                var n = this;
                return e ? "object" == typeof e ? Mp(e).filter(function() {
                    var t = this;
                    return Qp.some.call(n, function(e) {
                        return Mp.contains(e, t)
                    })
                }) : 1 == this.length ? Mp(kq.qsa(this[0], e)) : this.map(function() {
                    return kq.qsa(this, e)
                }) : Mp()
            },
            closest: function(n, i) {
                var r = [],
                    a = "object" == typeof n && Mp(n);
                return this.each(function(e, t) {
                    for (; t && !(a ? 0 <= a.indexOf(t) : kq.matches(t, n));) t = t !== i && !rp(t) && t.parentNode;
                    t && r.indexOf(t) < 0 && r.push(t)
                }), Mp(r)
            },
            parents: function(e) {
                for (var t = [], n = this; 0 < n.length;) n = Mp.map(n, function(e) {
                    return (e = e.parentNode) && !rp(e) && t.indexOf(e) < 0 ? (t.push(e), e) : void 0
                });
                return Ep(t, e)
            },
            parent: function(e) {
                return Ep(Pp(this.pluck("parentNode")), e)
            },
            children: function(e) {
                return Ep(this.map(function() {
                    return Bp(this)
                }), e)
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || Tp.call(this.childNodes)
                })
            },
            siblings: function(e) {
                return Ep(this.map(function(e, t) {
                    return Sp.call(Bp(t.parentNode), function(e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(t) {
                return Mp.map(this, function(e) {
                    return e[t]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = function(e) {
                        var t, n;
                        return Vp[e] || (t = Up.createElement(e), Up.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), Vp[e] = n), Vp[e]
                    }(this.nodeName))
                })
            },
            replaceWith: function(e) {
                return this.before(e).remove()
            },
            wrap: function(t) {
                var n = pp(t);
                if (this[0] && !n) var i = Mp(t).get(0),
                    r = i.parentNode || 1 < this.length;
                return this.each(function(e) {
                    Mp(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
                })
            },
            wrapAll: function(e) {
                if (this[0]) {
                    Mp(this[0]).before(e = Mp(e));
                    for (var t;
                        (t = e.children()).length;) e = t.first();
                    Mp(e).append(this)
                }
                return this
            },
            wrapInner: function(r) {
                var a = pp(r);
                return this.each(function(e) {
                    var t = Mp(this),
                        n = t.contents(),
                        i = a ? r.call(this, e) : r;
                    n.length ? n.wrapAll(i) : t.append(i)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Mp(this).replaceWith(Mp(this).children())
                }), this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(t) {
                return this.each(function() {
                    var e = Mp(this);
                    (t === Kp ? "none" == e.css("display") : t) ? e.show(): e.hide()
                })
            },
            prev: function(e) {
                return Mp(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function(e) {
                return Mp(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function(n) {
                return 0 in arguments ? this.each(function(e) {
                    var t = this.innerHTML;
                    Mp(this).empty().append(Fp(this, n, e, t))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function(n) {
                return 0 in arguments ? this.each(function(e) {
                    var t = Fp(this, n, e, this.textContent);
                    this.textContent = null == t ? "" : "" + t
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function(t, n) {
                var e;
                return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                    if (1 === this.nodeType)
                        if (sp(t))
                            for (Lp in t) Gp(this, Lp, t[Lp]);
                        else Gp(this, t, Fp(this, n, e, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (e = this[0].getAttribute(t)) ? e : Kp
            },
            removeAttr: function(e) {
                return this.each(function() {
                    1 === this.nodeType && e.split(" ").forEach(function(e) {
                        Gp(this, e)
                    }, this)
                })
            },
            prop: function(t, n) {
                return t = mq[t] || t, 1 in arguments ? this.each(function(e) {
                    this[t] = Fp(this, n, e, this[t])
                }) : this[0] && this[0][t]
            },
            removeProp: function(e) {
                return e = mq[e] || e, this.each(function() {
                    delete this[e]
                })
            },
            data: function(e, t) {
                var n = "data-" + e.replace(aq, "-$1").toLowerCase(),
                    i = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== i ? Ip(i) : Kp
            },
            val: function(t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
                    this.value = Fp(this, t, e, this.value)
                })) : this[0] && (this[0].multiple ? Mp(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(a) {
                if (a) return this.each(function(e) {
                    var t = Mp(this),
                        n = Fp(this, a, e, t.offset()),
                        i = t.offsetParent().offset(),
                        r = {
                            top: n.top - i.top,
                            left: n.left - i.left
                        };
                    "static" == t.css("position") && (r.position = "relative"), t.css(r)
                });
                if (!this.length) return null;
                if (Up.documentElement !== this[0] && !Mp.contains(Up.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                };
                var e = this[0].getBoundingClientRect();
                return {
                    left: e.left + mp.pageXOffset,
                    top: e.top + mp.pageYOffset,
                    width: Math.round(e.width),
                    height: Math.round(e.height)
                }
            },
            css: function(e, t) {
                if (arguments.length < 2) {
                    var n = this[0];
                    if ("string" == typeof e) {
                        if (!n) return;
                        return n.style[Op(e)] || getComputedStyle(n, "").getPropertyValue(e)
                    }
                    if (nq(e)) {
                        if (!n) return;
                        var i = {},
                            r = getComputedStyle(n, "");
                        return Mp.each(e, function(e, t) {
                            i[t] = n.style[Op(t)] || r.getPropertyValue(t)
                        }), i
                    }
                }
                var a = "";
                if ("string" == op(e)) t || 0 === t ? a = xp(e) + ":" + zp(e, t) : this.each(function() {
                    this.style.removeProperty(xp(e))
                });
                else
                    for (Lp in e) e[Lp] || 0 === e[Lp] ? a += xp(Lp) + ":" + zp(Lp, e[Lp]) + ";" : this.each(function() {
                        this.style.removeProperty(xp(Lp))
                    });
                return this.each(function() {
                    this.style.cssText += ";" + a
                })
            },
            index: function(e) {
                return e ? this.indexOf(Mp(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(e) {
                return !!e && Qp.some.call(this, function(e) {
                    return this.test(Hp(e))
                }, yp(e))
            },
            addClass: function(n) {
                return n ? this.each(function(e) {
                    if ("className" in this) {
                        Np = [];
                        var t = Hp(this);
                        Fp(this, n, e, t).split(/\s+/g).forEach(function(e) {
                            Mp(this).hasClass(e) || Np.push(e)
                        }, this), Np.length && Hp(this, t + (t ? " " : "") + Np.join(" "))
                    }
                }) : this
            },
            removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === Kp) return Hp(this, "");
                        Np = Hp(this), Fp(this, t, e, Np).split(/\s+/g).forEach(function(e) {
                            Np = Np.replace(yp(e), " ")
                        }), Hp(this, Np.trim())
                    }
                })
            },
            toggleClass: function(n, i) {
                return n ? this.each(function(e) {
                    var t = Mp(this);
                    Fp(this, n, e, Hp(this)).split(/\s+/g).forEach(function(e) {
                        (i === Kp ? !t.hasClass(e) : i) ? t.addClass(e): t.removeClass(e)
                    })
                }) : this
            },
            scrollTop: function(e) {
                if (this.length) {
                    var t = "scrollTop" in this[0];
                    return e === Kp ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                        this.scrollTop = e
                    } : function() {
                        this.scrollTo(this.scrollX, e)
                    })
                }
            },
            scrollLeft: function(e) {
                if (this.length) {
                    var t = "scrollLeft" in this[0];
                    return e === Kp ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                        this.scrollLeft = e
                    } : function() {
                        this.scrollTo(e, this.scrollY)
                    })
                }
            },
            position: function() {
                if (this.length) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        i = _p.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(Mp(e).css("margin-top")) || 0, n.left -= parseFloat(Mp(e).css("margin-left")) || 0, i.top += parseFloat(Mp(t[0]).css("border-top-width")) || 0, i.left += parseFloat(Mp(t[0]).css("border-left-width")) || 0, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Up.body; e && !_p.test(e.nodeName) && "static" == Mp(e).css("position");) e = e.offsetParent;
                    return e
                })
            }
        }, Mp.fn.detach = Mp.fn.remove, ["width", "height"].forEach(function(i) {
            var r = i.replace(/./, function(e) {
                return e[0].toUpperCase()
            });
            Mp.fn[i] = function(t) {
                var e, n = this[0];
                return t === Kp ? qp(n) ? n["inner" + r] : rp(n) ? n.documentElement["scroll" + r] : (e = this.offset()) && e[i] : this.each(function(e) {
                    (n = Mp(this)).css(i, Fp(this, t, e, n[i]()))
                })
            }
        }), ["after", "prepend", "before", "append"].forEach(function(t, o) {
            var s = o % 2;
            Mp.fn[t] = function() {
                var n, i, r = Mp.map(arguments, function(e) {
                        var t = [];
                        return "array" == (n = op(e)) ? (e.forEach(function(e) {
                            return e.nodeType !== Kp ? t.push(e) : Mp.zepto.isZ(e) ? t = t.concat(e.get()) : void(t = t.concat(kq.fragment(e)))
                        }), t) : "object" == n || null == e ? e : kq.fragment(e)
                    }),
                    a = 1 < this.length;
                return r.length < 1 ? this : this.each(function(e, t) {
                    i = s ? t : t.parentNode, t = 0 == o ? t.nextSibling : 1 == o ? t.firstChild : 2 == o ? t : null;
                    var n = Mp.contains(Up.documentElement, i);
                    r.forEach(function(e) {
                        if (a) e = e.cloneNode(!0);
                        else if (!i) return Mp(e).remove();
                        i.insertBefore(e, t), n && function e(t, n) {
                            n(t);
                            for (var i = 0, r = t.childNodes.length; i < r; i++) e(t.childNodes[i], n)
                        }(e, function(e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var t = e.ownerDocument ? e.ownerDocument.defaultView : mp;
                                t.eval.call(t, e.innerHTML)
                            }
                        })
                    })
                })
            }, Mp.fn[s ? t + "To" : "insert" + (o ? "Before" : "After")] = function(e) {
                return Mp(e)[t](this), this
            }
        }), kq.Z.prototype = Cp.prototype = Mp.fn, kq.uniq = Pp, kq.deserializeValue = Ip, Mp.zepto = kq, Mp);

        function op(e) {
            return null == e ? String(e) : iq[jq.call(e)] || "object"
        }

        function pp(e) {
            return "function" == op(e)
        }

        function qp(e) {
            return null != e && e == e.window
        }

        function rp(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }

        function sp(e) {
            return "object" == op(e)
        }

        function tp(e) {
            return sp(e) && !qp(e) && Object.getPrototypeOf(e) == Object.prototype
        }

        function up(e) {
            var t = !!e && "length" in e && e.length,
                n = Mp.type(e);
            return "function" != n && !qp(e) && ("array" == n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }

        function xp(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function yp(e) {
            return e in Wp ? Wp[e] : Wp[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
        }

        function zp(e, t) {
            return "number" != typeof t || Xp[xp(e)] ? t : t + "px"
        }

        function Bp(e) {
            return "children" in e ? Tp.call(e.children) : Mp.map(e.childNodes, function(e) {
                return 1 == e.nodeType ? e : void 0
            })
        }

        function Cp(e, t) {
            var n, i = e ? e.length : 0;
            for (n = 0; n < i; n++) this[n] = e[n];
            this.length = i, this.selector = t || ""
        }

        function Ep(e, t) {
            return null == t ? Mp(e) : Mp(e).filter(t)
        }

        function Fp(e, t, n, i) {
            return pp(t) ? t.call(e, n, i) : t
        }

        function Gp(e, t, n) {
            null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function Hp(e, t) {
            var n = e.className || "",
                i = n && n.baseVal !== Kp;
            return t === Kp ? i ? n.baseVal : n : void(i ? n.baseVal = t : e.className = t)
        }

        function Ip(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? Mp.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }
        return mp.Zepto = np, void 0 === mp.$ && (mp.$ = np),
            function(d) {
                function u(e) {
                    return e._zid || (e._zid = t++)
                }

                function o(e, t, n, i) {
                    if ((t = h(t)).ns) var r = function(e) {
                        return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
                    }(t.ns);
                    return (x[u(e)] || []).filter(function(e) {
                        return e && (!t.e || e.e == t.e) && (!t.ns || r.test(e.ns)) && (!n || u(e.fn) === u(n)) && (!i || e.sel == i)
                    })
                }

                function h(e) {
                    var t = ("" + e).split(".");
                    return {
                        e: t[0],
                        ns: t.slice(1).sort().join(" ")
                    }
                }

                function p(e, t) {
                    return e.del && !n && e.e in i || !!t
                }

                function f(e) {
                    return E[e] || n && i[e] || e
                }

                function c(r, e, t, a, o, s, l) {
                    var n = u(r),
                        c = x[n] || (x[n] = []);
                    e.split(/\s/).forEach(function(e) {
                        if ("ready" == e) return d(document).ready(t);
                        var n = h(e);
                        n.fn = t, n.sel = o, n.e in E && (t = function(e) {
                            var t = e.relatedTarget;
                            return !t || t !== this && !d.contains(this, t) ? n.fn.apply(this, arguments) : void 0
                        });
                        var i = (n.del = s) || t;
                        n.proxy = function(e) {
                            if (!(e = m(e)).isImmediatePropagationStopped()) {
                                e.data = a;
                                var t = i.apply(r, e._args == w ? [e] : [e].concat(e._args));
                                return !1 === t && (e.preventDefault(), e.stopPropagation()), t
                            }
                        }, n.i = c.length, c.push(n), "addEventListener" in r && r.addEventListener(f(n.e), n.proxy, p(n, l))
                    })
                }

                function g(t, e, n, i, r) {
                    var a = u(t);
                    (e || "").split(/\s/).forEach(function(e) {
                        o(t, e, n, i).forEach(function(e) {
                            delete x[a][e.i], "removeEventListener" in t && t.removeEventListener(f(e.e), e.proxy, p(e, r))
                        })
                    })
                }

                function m(i, r) {
                    return !r && i.isDefaultPrevented || (r = r || i, d.each(e, function(e, t) {
                        var n = r[e];
                        i[e] = function() {
                            return this[t] = s, n && n.apply(r, arguments)
                        }, i[t] = k
                    }), i.timeStamp || (i.timeStamp = Date.now()), (r.defaultPrevented !== w ? r.defaultPrevented : "returnValue" in r ? !1 === r.returnValue : r.getPreventDefault && r.getPreventDefault()) && (i.isDefaultPrevented = s)), i
                }

                function v(e) {
                    var t, n = {
                        originalEvent: e
                    };
                    for (t in e) r.test(t) || e[t] === w || (n[t] = e[t]);
                    return m(n, e)
                }

                function y(e) {
                    return "string" == typeof e
                }
                var w, t = 1,
                    b = Array.prototype.slice,
                    C = d.isFunction,
                    x = {},
                    a = {},
                    n = "onfocusin" in mp,
                    i = {
                        focus: "focusin",
                        blur: "focusout"
                    },
                    E = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };
                a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", d.event = {
                    add: c,
                    remove: g
                }, d.proxy = function(e, t) {
                    var n = 2 in arguments && b.call(arguments, 2);
                    if (C(e)) {
                        function i() {
                            return e.apply(t, n ? n.concat(b.call(arguments)) : arguments)
                        }
                        return i._zid = u(e), i
                    }
                    if (y(t)) return n ? (n.unshift(e[t], e), d.proxy.apply(null, n)) : d.proxy(e[t], e);
                    throw new TypeError("expected function")
                }, d.fn.bind = function(e, t, n) {
                    return this.on(e, t, n)
                }, d.fn.unbind = function(e, t) {
                    return this.off(e, t)
                }, d.fn.one = function(e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                };
                var s = function() {
                        return !0
                    },
                    k = function() {
                        return !1
                    },
                    r = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                    e = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                d.fn.delegate = function(e, t, n) {
                    return this.on(t, e, n)
                }, d.fn.undelegate = function(e, t, n) {
                    return this.off(t, e, n)
                }, d.fn.live = function(e, t) {
                    return d(document.body).delegate(this.selector, e, t), this
                }, d.fn.die = function(e, t) {
                    return d(document.body).undelegate(this.selector, e, t), this
                }, d.fn.on = function(t, r, n, a, o) {
                    var s, l, i = this;
                    return t && !y(t) ? (d.each(t, function(e, t) {
                        i.on(e, r, n, t, o)
                    }), i) : (y(r) || C(a) || !1 === a || (a = n, n = r, r = w), a !== w && !1 !== n || (a = n, n = w), !1 === a && (a = k), i.each(function(e, i) {
                        o && (s = function(e) {
                            return g(i, e.type, a), a.apply(this, arguments)
                        }), r && (l = function(e) {
                            var t, n = d(e.target).closest(r, i).get(0);
                            return n && n !== i ? (t = d.extend(v(e), {
                                currentTarget: n,
                                liveFired: i
                            }), (s || a).apply(n, [t].concat(b.call(arguments, 1)))) : void 0
                        }), c(i, t, a, n, r, l || s)
                    }))
                }, d.fn.off = function(e, n, t) {
                    var i = this;
                    return e && !y(e) ? (d.each(e, function(e, t) {
                        i.off(e, n, t)
                    }), i) : (y(n) || C(t) || !1 === t || (t = n, n = w), !1 === t && (t = k), i.each(function() {
                        g(this, e, t, n)
                    }))
                }, d.fn.trigger = function(e, t) {
                    return (e = y(e) || d.isPlainObject(e) ? d.Event(e) : m(e))._args = t, this.each(function() {
                        e.type in i && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : d(this).triggerHandler(e, t)
                    })
                }, d.fn.triggerHandler = function(n, i) {
                    var r, a;
                    return this.each(function(e, t) {
                        (r = v(y(n) ? d.Event(n) : n))._args = i, r.target = t, d.each(o(t, n.type || n), function(e, t) {
                            return a = t.proxy(r), !r.isImmediatePropagationStopped() && void 0
                        })
                    }), a
                }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                    d.fn[t] = function(e) {
                        return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                    }
                }), d.Event = function(e, t) {
                    y(e) || (e = (t = e).type);
                    var n = document.createEvent(a[e] || "Events"),
                        i = !0;
                    if (t)
                        for (var r in t) "bubbles" == r ? i = !!t[r] : n[r] = t[r];
                    return n.initEvent(e, i, !0), m(n)
                }
            }(np),
            function(Kx) {
                function Mx(e, t, n, i) {
                    return e.global ? function(e, t, n) {
                        var i = Kx.Event(t);
                        return Kx(e).trigger(i, n), !i.isDefaultPrevented()
                    }(t || by, n, i) : void 0
                }

                function Px(e, t) {
                    var n = t.context;
                    return !1 !== t.beforeSend.call(n, e, t) && !1 !== Mx(t, n, "ajaxBeforeSend", [e, t]) && void Mx(t, n, "ajaxSend", [e, t])
                }

                function Qx(e, t, n, i) {
                    var r = n.context,
                        a = "success";
                    n.success.call(r, e, a, t), i && i.resolveWith(r, [e, a, t]), Mx(n, r, "ajaxSuccess", [t, n, e]), Sx(a, t, n)
                }

                function Rx(e, t, n, i, r) {
                    var a = i.context;
                    i.error.call(a, n, t, e), r && r.rejectWith(a, [n, t, e]), Mx(i, a, "ajaxError", [n, i, e || t]), Sx(t, n, i)
                }

                function Sx(e, t, n) {
                    var i = n.context;
                    n.complete.call(i, t, e), Mx(n, i, "ajaxComplete", [t, n]),
                        function(e) {
                            e.global && !--Kx.active && Mx(e, null, "ajaxStop")
                        }(n)
                }

                function Ux() {}

                function Wx(e, t) {
                    return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
                }

                function Yx(e, t, n, i) {
                    return Kx.isFunction(t) && (i = n, n = t, t = void 0), Kx.isFunction(n) || (i = n, n = void 0), {
                        url: e,
                        data: t,
                        success: n,
                        dataType: i
                    }
                }
                var $x, _x, ay = +new Date,
                    by = mp.document,
                    cy = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    dy = /^(?:text|application)\/javascript/i,
                    ey = /^(?:text|application)\/xml/i,
                    fy = "application/json",
                    gy = "text/html",
                    hy = /^\s*$/,
                    iy = by.createElement("a");
                iy.href = mp.location.href, Kx.active = 0, Kx.ajaxJSONP = function(n, i) {
                    if (!("type" in n)) return Kx.ajax(n);

                    function e(e) {
                        Kx(s).triggerHandler("error", e || "abort")
                    }
                    var r, a, t = n.jsonpCallback,
                        o = (Kx.isFunction(t) ? t() : t) || "Zepto" + ay++,
                        s = by.createElement("script"),
                        l = mp[o],
                        c = {
                            abort: e
                        };
                    return i && i.promise(c), Kx(s).on("load error", function(e, t) {
                        clearTimeout(a), Kx(s).off().remove(), "error" != e.type && r ? Qx(r[0], c, n, i) : Rx(null, t || "error", c, n, i), mp[o] = l, r && Kx.isFunction(l) && l(r[0]), l = r = void 0
                    }), !1 === Px(c, n) ? e("abort") : (mp[o] = function() {
                        r = arguments
                    }, s.src = n.url.replace(/\?(.+)=\?/, "?$1=" + o), by.head.appendChild(s), 0 < n.timeout && (a = setTimeout(function() {
                        e("timeout")
                    }, n.timeout))), c
                }, Kx.ajaxSettings = {
                    type: "GET",
                    beforeSend: Ux,
                    success: Ux,
                    error: Ux,
                    complete: Ux,
                    context: null,
                    global: !0,
                    xhr: function() {
                        return new mp.XMLHttpRequest
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: fy,
                        xml: "application/xml, text/xml",
                        html: gy,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0,
                    dataFilter: Ux
                }, Kx.ajax = function(tz) {
                    var uz, vz, wz = Kx.extend({}, tz || {}),
                        xz = Kx.Deferred && Kx.Deferred();
                    for ($x in Kx.ajaxSettings) void 0 === wz[$x] && (wz[$x] = Kx.ajaxSettings[$x]);
                    (function(e) {
                        e.global && 0 == Kx.active++ && Mx(e, null, "ajaxStart")
                    })(wz), wz.crossDomain || ((uz = by.createElement("a")).href = wz.url, uz.href = uz.href, wz.crossDomain = iy.protocol + "//" + iy.host != uz.protocol + "//" + uz.host), wz.url || (wz.url = mp.location.toString()), -1 < (vz = wz.url.indexOf("#")) && (wz.url = wz.url.slice(0, vz)),
                        function(e) {
                            e.processData && e.data && "string" != Kx.type(e.data) && (e.data = Kx.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = Wx(e.url, e.data), e.data = void 0)
                        }(wz);
                    var yz = wz.dataType,
                        zz = /\?.+=\?/.test(wz.url);
                    if (zz && (yz = "jsonp"), !1 !== wz.cache && (tz && !0 === tz.cache || "script" != yz && "jsonp" != yz) || (wz.url = Wx(wz.url, "_=" + Date.now())), "jsonp" == yz) return zz || (wz.url = Wx(wz.url, wz.jsonp ? wz.jsonp + "=?" : !1 === wz.jsonp ? "" : "callback=?")), Kx.ajaxJSONP(wz, xz);

                    function Dz(e, t) {
                        Cz[e.toLowerCase()] = [e, t]
                    }
                    var Az, Bz = wz.accepts[yz],
                        Cz = {},
                        Ez = /^([\w-]+:)\/\//.test(wz.url) ? RegExp.$1 : mp.location.protocol,
                        Fz = wz.xhr(),
                        Gz = Fz.setRequestHeader;
                    if (xz && xz.promise(Fz), wz.crossDomain || Dz("X-Requested-With", "XMLHttpRequest"), Dz("Accept", Bz || "*/*"), (Bz = wz.mimeType || Bz) && (-1 < Bz.indexOf(",") && (Bz = Bz.split(",", 2)[0]), Fz.overrideMimeType && Fz.overrideMimeType(Bz)), (wz.contentType || !1 !== wz.contentType && wz.data && "GET" != wz.type.toUpperCase()) && Dz("Content-Type", wz.contentType || "application/x-www-form-urlencoded"), wz.headers)
                        for (_x in wz.headers) Dz(_x, wz.headers[_x]);
                    if (Fz.setRequestHeader = Dz, !(Fz.onreadystatechange = function() {
                            if (4 == Fz.readyState) {
                                Fz.onreadystatechange = Ux, clearTimeout(Az);
                                var Kz, Lz = !1;
                                if (200 <= Fz.status && Fz.status < 300 || 304 == Fz.status || 0 == Fz.status && "file:" == Ez) {
                                    if (yz = yz || function(e) {
                                            return (e = e && e.split(";", 2)[0]) && (e == gy ? "html" : e == fy ? "json" : dy.test(e) ? "script" : ey.test(e) && "xml") || "text"
                                        }(wz.mimeType || Fz.getResponseHeader("content-type")), "arraybuffer" == Fz.responseType || "blob" == Fz.responseType) Kz = Fz.response;
                                    else {
                                        Kz = Fz.responseText;
                                        try {
                                            Kz = function(e, t, n) {
                                                if (n.dataFilter == Ux) return e;
                                                var i = n.context;
                                                return n.dataFilter.call(i, e, t)
                                            }(Kz, yz, wz), "script" == yz ? eval(Kz) : "xml" == yz ? Kz = Fz.responseXML : "json" == yz && (Kz = hy.test(Kz) ? null : Kx.parseJSON(Kz))
                                        } catch (e) {
                                            Lz = e
                                        }
                                        if (Lz) return Rx(Lz, "parsererror", Fz, wz, xz)
                                    }
                                    Qx(Kz, Fz, wz, xz)
                                } else Rx(Fz.statusText || null, Fz.status ? "error" : "abort", Fz, wz, xz)
                            }
                        }) === Px(Fz, wz)) return Fz.abort(), Rx(null, "abort", Fz, wz, xz), Fz;
                    var Hz = !("async" in wz) || wz.async;
                    if (Fz.open(wz.type, wz.url, Hz, wz.username, wz.password), wz.xhrFields)
                        for (_x in wz.xhrFields) Fz[_x] = wz.xhrFields[_x];
                    for (_x in Cz) Gz.apply(Fz, Cz[_x]);
                    return 0 < wz.timeout && (Az = setTimeout(function() {
                        Fz.onreadystatechange = Ux, Fz.abort(), Rx(null, "timeout", Fz, wz, xz)
                    }, wz.timeout)), Fz.send(wz.data ? wz.data : null), Fz
                }, Kx.get = function() {
                    return Kx.ajax(Yx.apply(null, arguments))
                }, Kx.post = function() {
                    var e = Yx.apply(null, arguments);
                    return e.type = "POST", Kx.ajax(e)
                }, Kx.getJSON = function() {
                    var e = Yx.apply(null, arguments);
                    return e.dataType = "json", Kx.ajax(e)
                }, Kx.fn.load = function(e, t, n) {
                    if (!this.length) return this;
                    var i, r = this,
                        a = e.split(/\s/),
                        o = Yx(e, t, n),
                        s = o.success;
                    return 1 < a.length && (o.url = a[0], i = a[1]), o.success = function(e) {
                        r.html(i ? Kx("<div>").html(e.replace(cy, "")).find(i) : e), s && s.apply(r, arguments)
                    }, Kx.ajax(o), this
                };
                var jy = encodeURIComponent;
                Kx.param = function(e, t) {
                    var n = [];
                    return n.add = function(e, t) {
                            Kx.isFunction(t) && (t = t()), null == t && (t = ""), this.push(jy(e) + "=" + jy(t))
                        },
                        function n(i, e, r, a) {
                            var o, s = Kx.isArray(e),
                                l = Kx.isPlainObject(e);
                            Kx.each(e, function(e, t) {
                                o = Kx.type(t), a && (e = r ? a : a + "[" + (l || "object" == o || "array" == o ? e : "") + "]"), !a && s ? i.add(t.name, t.value) : "array" == o || !r && "object" == o ? n(i, t, r, e) : i.add(e, t)
                            })
                        }(n, e, t), n.join("&").replace(/%20/g, "+")
                }
            }(np), (bA = np).fn.serializeArray = function() {
                var n, i, t = [],
                    r = function(e) {
                        return e.forEach ? e.forEach(r) : void t.push({
                            name: n,
                            value: e
                        })
                    };
                return this[0] && bA.each(this[0].elements, function(e, t) {
                    i = t.type, (n = t.name) && "fieldset" != t.nodeName.toLowerCase() && !t.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && ("radio" != i && "checkbox" != i || t.checked) && r(bA(t).val())
                }), t
            }, bA.fn.serialize = function() {
                var t = [];
                return this.serializeArray().forEach(function(e) {
                    t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                }), t.join("&")
            }, bA.fn.submit = function(e) {
                if (0 in arguments) this.bind("submit", e);
                else if (this.length) {
                    var t = bA.Event("submit");
                    this.eq(0).trigger(t), t.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            },
            function() {
                try {
                    getComputedStyle(void 0)
                } catch (e) {
                    var n = getComputedStyle;
                    mp.getComputedStyle = function(e, t) {
                        try {
                            return n(e, t)
                        } catch (e) {
                            return null
                        }
                    }
                }
            }(), np
    }), $(window).on("load", function() {
        window.statscAPI = new StatscAPI($, config), window.centralLogAPI = new CentralLogAPI($, config, platform.description), window.leanApp = new LeanApp("#app-container")
    });