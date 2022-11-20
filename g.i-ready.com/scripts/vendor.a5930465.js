(function() {
    "use strict";
    var e = {
            function: !0,
            object: !0
        },
        F = e[typeof window] && window || this,
        i = e[typeof exports] && exports,
        t = e[typeof module] && module && !module.nodeType && module,
        r = i && t && "object" == typeof global && global;
    !r || r.global !== r && r.window !== r && r.self !== r || (F = r);
    var a = Math.pow(2, 53) - 1,
        T = /\bOpera/,
        n = Object.prototype,
        o = n.hasOwnProperty,
        G = n.toString;

    function l(e) {
        return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
    }

    function $(e) {
        return e = V(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : l(e)
    }

    function X(e, t) {
        for (var i in e) o.call(e, i) && t(e[i], i, e)
    }

    function K(e) {
        return null == e ? l(e) : G.call(e).slice(8, -1)
    }

    function j(e) {
        return String(e).replace(/([ -])(?!$)/g, "$1?")
    }

    function N(i, r) {
        var n = null;
        return function(e, t) {
            var i = -1,
                r = e ? e.length : 0;
            if ("number" == typeof r && -1 < r && r <= a)
                for (; ++i < r;) t(e[i], i, e);
            else X(e, t)
        }(i, function(e, t) {
            n = r(n, e, t, i)
        }), n
    }

    function V(e) {
        return String(e).replace(/^ +| +$/g, "")
    }
    var s = function e(r) {
        var t = F,
            i = r && "object" == typeof r && "String" != K(r);
        i && (t = r, r = null);
        var n = t.navigator || {},
            a = n.userAgent || "";
        r = r || a;
        var o, l, s = i ? !!n.likeChrome : /\bChrome\b/.test(r) && !/internal|\n/i.test(G.toString()),
            b = "Object",
            p = i ? b : "ScriptBridgingProxyObject",
            c = i ? b : "Environment",
            d = i && t.java ? "JavaPackage" : K(t.java),
            u = i ? b : "RuntimeObject",
            f = /\bJava/.test(d) && t.java,
            S = f && K(t.environment) == c,
            x = f ? "a" : "α",
            h = f ? "b" : "β",
            m = t.document || {},
            g = t.operamini || t.opera,
            O = T.test(O = i && g ? g["[[Class]]"] : K(g)) ? O : g = null,
            y = r,
            M = [],
            E = null,
            w = r == a,
            v = w && g && "function" == typeof g.version && g.version(),
            P = N([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
                return e || RegExp("\\b" + (t.pattern || j(t)) + "\\b", "i").exec(r) && (t.label || t)
            }),
            C = N(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                label: "Samsung Internet",
                pattern: "SamsungBrowser"
            }, "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", {
                label: "SRWare Iron",
                pattern: "Iron"
            }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                label: "Yandex Browser",
                pattern: "YaBrowser"
            }, {
                label: "UC Browser",
                pattern: "UCBrowser"
            }, "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
            }, "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chromium", "Chrome", {
                label: "Chrome",
                pattern: "(?:HeadlessChrome)"
            }, {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "Firefox for iOS",
                pattern: "FxiOS"
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"], function(e, t) {
                return e || RegExp("\\b" + (t.pattern || j(t)) + "\\b", "i").exec(r) && (t.label || t)
            }),
            B = R([{
                label: "BlackBerry",
                pattern: "BB10"
            }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
            }, {
                label: "Galaxy S5",
                pattern: "SM-G900"
            }, {
                label: "Galaxy S6",
                pattern: "SM-G920"
            }, {
                label: "Galaxy S6 Edge",
                pattern: "SM-G925"
            }, {
                label: "Galaxy S7",
                pattern: "SM-G930"
            }, {
                label: "Galaxy S7 Edge",
                pattern: "SM-G935"
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"]),
            W = N({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Alcatel: {},
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                Huawei: {},
                Lenovo: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Oppo: {},
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                },
                Xiaomi: {
                    Mi: 1,
                    Redmi: 1
                }
            }, function(e, t, i) {
                return e || (t[B] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp("\\b" + j(i) + "(?:\\b|\\w*\\d)", "i").exec(r)) && i
            }),
            k = N(["Windows Phone", "KaiOS", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", {
                label: "DragonFly BSD",
                pattern: "DragonFly"
            }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], function(e, t) {
                var i = t.pattern || j(t);
                return !e && (e = RegExp("\\b" + i + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(r)) && (e = function(e, t, i) {
                    var r = {
                        "10.0": "10",
                        6.4: "10 Technical Preview",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        5.2: "Server 2003 / XP 64-bit",
                        5.1: "XP",
                        5.01: "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    return t && i && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && i && (e = e.replace(RegExp(t, "i"), i)), e = $(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }(e, i, t.label || t)), e
            });

        function R(e) {
            return N(e, function(e, t) {
                var i = t.pattern || j(t);
                return !e && (e = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(r) || RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(r) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(r)) && ((e = String(t.label && !RegExp(i, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = $(e[0].replace(RegExp(i, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
            })
        }

        function A(e) {
            return N(e, function(e, t) {
                return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(r) || 0)[1] || null
            })
        }
        if (P = P && [P], /\bAndroid\b/.test(k) && !B && (o = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(r)) && (B = V(o[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), W && !B ? B = R([W]) : W && B && (B = B.replace(RegExp("^(" + j(W) + ")[-_.\\s]", "i"), W + " ").replace(RegExp("^(" + j(W) + ")[-_.]?(\\w)", "i"), W + " $2")), (o = /\bGoogle TV\b/.exec(B)) && (B = o[0]), /\bSimulator\b/i.test(r) && (B = (B ? B + " " : "") + "Simulator"), "Opera Mini" == C && /\bOPiOS\b/.test(r) && M.push("running in Turbo/Uncompressed mode"), "IE" == C && /\blike iPhone OS\b/.test(r) ? (W = (o = e(r.replace(/like iPhone OS/, ""))).manufacturer, B = o.product) : /^iP/.test(B) ? (C = C || "Safari", k = "iOS" + ((o = / OS ([\d_]+)/i.exec(r)) ? " " + o[1].replace(/_/g, ".") : "")) : "Konqueror" == C && /^Linux\b/i.test(k) ? k = "Kubuntu" : W && "Google" != W && (/Chrome/.test(C) && !/\bMobile Safari\b/i.test(r) || /\bVita\b/.test(B)) || /\bAndroid\b/.test(k) && /^Chrome/.test(C) && /\bVersion\//i.test(r) ? (C = "Android Browser", k = /\bAndroid\b/.test(k) ? k : "Android") : "Silk" == C ? (/\bMobi/i.test(r) || (k = "Android", M.unshift("desktop mode")), /Accelerated *= *true/i.test(r) && M.unshift("accelerated")) : "UC Browser" == C && /\bUCWEB\b/.test(r) ? M.push("speed mode") : "PaleMoon" == C && (o = /\bFirefox\/([\d.]+)\b/.exec(r)) ? M.push("identifying as Firefox " + o[1]) : "Firefox" == C && (o = /\b(Mobile|Tablet|TV)\b/i.exec(r)) ? (k = k || "Firefox OS", B = B || o[1]) : !C || (o = !/\bMinefield\b/i.test(r) && /\b(?:Firefox|Safari)\b/.exec(C)) ? (C && !B && /[\/,]|^[^(]+?\)/.test(r.slice(r.indexOf(o + "/") + 8)) && (C = null), (o = B || W || k) && (B || W || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(k)) && (C = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(k) ? k : o) + " Browser")) : "Electron" == C && (o = (/\bChrome\/([\d.]+)\b/.exec(r) || 0)[1]) && M.push("Chromium " + o), v = v || A(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", j(C), "(?:Firefox|Minefield|NetFront)"]), (o = ("iCab" == P && 3 < parseFloat(v) ? "WebKit" : /\bOpera\b/.test(C) && (/\bOPR\b/.test(r) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(r) && !/^(?:Trident|EdgeHTML)$/.test(P) && "WebKit" || !P && /\bMSIE\b/i.test(r) && ("Mac OS" == k ? "Tasman" : "Trident") || "WebKit" == P && /\bPlayStation\b(?! Vita\b)/i.test(C) && "NetFront") && (P = [o]), "IE" == C && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(r) || 0)[1]) ? (C += " Mobile", k = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x"), M.unshift("desktop mode")) : /\bWPDesktop\b/i.test(r) ? (C = "IE Mobile", k = "Windows Phone 8.x", M.unshift("desktop mode"), v = v || (/\brv:([\d.]+)/.exec(r) || 0)[1]) : "IE" != C && "Trident" == P && (o = /\brv:([\d.]+)/.exec(r)) && (C && M.push("identifying as " + C + (v ? " " + v : "")), C = "IE", v = o[1]), w) {
            if (function(e, t) {
                    var i = null != e ? typeof e[t] : "number";
                    return !(/^(?:boolean|number|string|undefined)$/.test(i) || "object" == i && !e[t])
                }(t, "global"))
                if (f && (y = (o = f.lang.System).getProperty("os.arch"), k = k || o.getProperty("os.name") + " " + o.getProperty("os.version")), S) {
                    try {
                        v = t.require("ringo/engine").version.join("."), C = "RingoJS"
                    } catch (e) {
                        (o = t.system) && o.global.system == t.system && (C = "Narwhal", k = k || o[0].os || null)
                    }
                    C = C || "Rhino"
                } else "object" == typeof t.process && !t.process.browser && (o = t.process) && ("object" == typeof o.versions && ("string" == typeof o.versions.electron ? (M.push("Node " + o.versions.node), C = "Electron", v = o.versions.electron) : "string" == typeof o.versions.nw && (M.push("Chromium " + v, "Node " + o.versions.node), C = "NW.js", v = o.versions.nw)), C || (C = "Node.js", y = o.arch, k = o.platform, v = (v = /[\d.]+/.exec(o.version)) ? v[0] : null));
            else K(o = t.runtime) == p ? (C = "Adobe AIR", k = o.flash.system.Capabilities.os) : K(o = t.phantom) == u ? (C = "PhantomJS", v = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch) : "number" == typeof m.documentMode && (o = /\bTrident\/(\d+)/i.exec(r)) ? (v = [v, m.documentMode], (o = +o[1] + 4) != v[1] && (M.push("IE " + v[1] + " mode"), P && (P[1] = ""), v[1] = o), v = "IE" == C ? String(v[1].toFixed(1)) : v[0]) : "number" == typeof m.documentMode && /^(?:Chrome|Firefox)\b/.test(C) && (M.push("masking as " + C + " " + v), C = "IE", v = "11.0", P = ["Trident"], k = "Windows");
            k = k && $(k)
        }
        if (v && (o = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(v) || /(?:alpha|beta)(?: ?\d)?/i.exec(r + ";" + (w && n.appMinorVersion)) || /\bMinefield\b/i.test(r) && "a") && (E = /b/i.test(o) ? "beta" : "alpha", v = v.replace(RegExp(o + "\\+?$"), "") + ("beta" == E ? h : x) + (/\d+\+?/.exec(o) || "")), "Fennec" == C || "Firefox" == C && /\b(?:Android|Firefox OS|KaiOS)\b/.test(k)) C = "Firefox Mobile";
        else if ("Maxthon" == C && v) v = v.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(B)) "Xbox 360" == B && (k = null), "Xbox 360" == B && /\bIEMobile\b/.test(r) && M.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(C) && (!C || B || /Browser|Mobi/.test(C)) || "Windows CE" != k && !/Mobi/i.test(r))
            if ("IE" == C && w) try {
                null === t.external && M.unshift("platform preview")
            } catch (e) {
                M.unshift("embedded")
            } else(/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(r)) && (o = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(r) || 0)[1] || v) ? (k = ((o = [o, /BB10/.test(r)])[1] ? (B = null, W = "BlackBerry") : "Device Software") + " " + o[0], v = null) : this != X && "Wii" != B && (w && g || /Opera/.test(C) && /\b(?:MSIE|Firefox)\b/i.test(r) || "Firefox" == C && /\bOS X (?:\d+\.){2,}/.test(k) || "IE" == C && (k && !/^Win/.test(k) && 5.5 < v || /\bWindows XP\b/.test(k) && 8 < v || 8 == v && !/\bTrident\b/.test(r))) && !T.test(o = e.call(X, r.replace(T, "") + ";")) && o.name && (o = "ing as " + o.name + ((o = o.version) ? " " + o : ""), T.test(C) ? (/\bIE\b/.test(o) && "Mac OS" == k && (k = null), o = "identify" + o) : (o = "mask" + o, C = O ? $(O.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(o) && (k = null), w || (v = null)), P = ["Presto"], M.push(o));
            else C += " Mobile";
        (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(r) || 0)[1]) && (o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o], "Safari" == C && "+" == o[1].slice(-1) ? (C = "WebKit Nightly", E = "alpha", v = o[1].slice(0, -1)) : v != o[1] && v != (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(r) || 0)[1]) || (v = null), o[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(r) || 0)[1], 537.36 == o[0] && 537.36 == o[2] && 28 <= parseFloat(o[1]) && "WebKit" == P && (P = ["Blink"]), o = w && (s || o[1]) ? (P && (P[1] = "like Chrome"), o[1] || ((o = o[0]) < 530 ? 1 : o < 532 ? 2 : o < 532.05 ? 3 : o < 533 ? 4 : o < 534.03 ? 5 : o < 534.07 ? 6 : o < 534.1 ? 7 : o < 534.13 ? 8 : o < 534.16 ? 9 : o < 534.24 ? 10 : o < 534.3 ? 11 : o < 535.01 ? 12 : o < 535.02 ? "13+" : o < 535.07 ? 15 : o < 535.11 ? 16 : o < 535.19 ? 17 : o < 536.05 ? 18 : o < 536.1 ? 19 : o < 537.01 ? 20 : o < 537.11 ? "21+" : o < 537.13 ? 23 : o < 537.18 ? 24 : o < 537.24 ? 25 : o < 537.36 ? 26 : "Blink" != P ? "27" : "28")) : (P && (P[1] = "like Safari"), (o = o[0]) < 400 ? 1 : o < 500 ? 2 : o < 526 ? 3 : o < 533 ? 4 : o < 534 ? "4+" : o < 535 ? 5 : o < 537 ? 6 : o < 538 ? 7 : o < 601 ? 8 : o < 602 ? 9 : o < 604 ? 10 : o < 606 ? 11 : o < 608 ? 12 : "12"), P && (P[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")), "Safari" == C && (!v || 45 < parseInt(v)) ? v = o : "Chrome" == C && /\bHeadlessChrome/i.test(r) && M.unshift("headless")), "Opera" == C && (o = /\bzbov|zvav$/.exec(k)) ? (C += " ", M.unshift("desktop mode"), "zvav" == o ? (C += "Mini", v = null) : C += "Mobile", k = k.replace(RegExp(" *" + o + "$"), "")) : "Safari" == C && /\bChrome\b/.exec(P && P[1]) ? (M.unshift("desktop mode"), C = "Chrome Mobile", v = null, k = /\bOS X\b/.test(k) ? (W = "Apple", "iOS 4.3+") : null) : /\bSRWare Iron\b/.test(C) && !v && (v = A("Chrome")), v && 0 == v.indexOf(o = /[\d.]+$/.exec(k)) && -1 < r.indexOf("/" + o + "-") && (k = V(k.replace(o, ""))), k && -1 != k.indexOf(C) && !RegExp(C + " OS").test(k) && (k = k.replace(RegExp(" *" + j(C) + " *"), "")), P && !/\b(?:Avant|Nook)\b/.test(C) && (/Browser|Lunascape|Maxthon/.test(C) || "Safari" != C && /^iOS/.test(k) && /\bSafari\b/.test(P[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(C) && P[1]) && (o = P[P.length - 1]) && M.push(o), M.length && (M = ["(" + M.join("; ") + ")"]), W && B && B.indexOf(W) < 0 && M.push("on " + W), B && M.push((/^on /.test(M[M.length - 1]) ? "" : "on ") + B), k && (o = / ([\d.+]+)$/.exec(k), l = o && "/" == k.charAt(k.length - o[0].length - 1), k = {
            architecture: 32,
            family: o && !l ? k.replace(o[0], "") : k,
            version: o ? o[1] : null,
            toString: function() {
                var e = this.version;
                return this.family + (e && !l ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
            }
        }), (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(y)) && !/\bi686\b/i.test(y) ? (k && (k.architecture = 64, k.family = k.family.replace(RegExp(" *" + o), "")), C && (/\bWOW64\b/i.test(r) || w && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(r)) && M.unshift("32-bit")) : k && /^OS X/.test(k.family) && "Chrome" == C && 39 <= parseFloat(v) && (k.architecture = 64), r = r || null;
        var I = {};
        return I.description = r, I.layout = P && P[0], I.manufacturer = W, I.name = C, I.prerelease = E, I.product = B, I.ua = r, I.version = C && v, I.os = k || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        }, I.parse = e, I.toString = function() {
            return this.description || ""
        }, I.version && M.unshift(v), I.name && M.unshift(C), k && C && (k != String(k).split(" ")[0] || k != C.split(" ")[0] && !B) && M.push(B ? "(" + k + ")" : "on " + k), M.length && (I.description = M.join(" ")), I
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (F.platform = s, define(function() {
        return s
    })) : i && t ? X(s, function(e, t) {
        i[t] = e
    }) : F.platform = s
}).call(this);