var LargestNumber, Step = function(t, e, i) {
    this.maxDepth = 4, this.app = e, this.hasNext = !1, this.leftChild = !1, this.rightChild = !1, this.initialValue = t, this.depth = i || 0, this.operations = {};
    var r = "default";
    switch (this.depth) {
        case 0:
            r = "easy";
            break;
        case 2:
            r = "negative"
    }
    this.setupOperations(r), this.spawnChildSteps()
};
Step.prototype.isPrimeNumber = function(t) {
    return -1 != [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101].indexOf(t)
}, Step.prototype.spawnChildSteps = function() {
    this.depth < this.maxDepth && (this.leftChild = new Step(this.getResult("left"), this.app, this.depth + 1), this.rightChild = new Step(this.getResult("right"), this.app, this.depth + 1), this.hasNext = !0)
}, Step.prototype.calculateEndPoints = function() {
    var t = [];
    return this.hasNext ? t = (t = t.concat(this.leftChild.calculateEndPoints())).concat(this.rightChild.calculateEndPoints()) : (t.push(this.getResult("left")), t.push(this.getResult("right"))), t
}, Step.prototype.getResult = function(t) {
    "left" != t && "right" != t && (t = "left");
    var e = this.initialValue,
        i = this.operations[t].value;
    switch (this.operations[t].operator) {
        case "add":
            e += i;
            break;
        case "divide":
            e /= i;
            break;
        case "multiply":
            e *= i;
            break;
        case "subtract":
            e -= i
    }
    return e
}, Step.prototype.setupOperations = function(t) {
    var e, i, r = !1;
    if ("negative" === t) {
        var s = Math.floor(this.app.randomFromTo(4, 10));
        e = {
            operator: "subtract",
            symbol: "-",
            value: 0
        }, i = {
            operator: "divide",
            symbol: "%",
            value: s
        }
    } else {
        var n = Math.floor(this.app.randomFromTo(2, 9));
        e = {
            operator: "add",
            symbol: "+",
            value: 0
        }, i = {
            operator: "multiply",
            symbol: "x",
            value: n
        }
    }
    if (.5 < Math.random() ? (r = !0, this.operations.left = e, this.operations.right = i) : (this.operations.left = i, this.operations.right = e), "negative" === t) {
        for (var a = this.initialValue / s; a != Math.floor(a);) s--, a = this.initialValue / s;
        for (r ? this.operations.right.value = s : this.operations.left.value = s; !l;) l = Math.floor(this.app.randomFromTo(-2, 3));
        for (var c = a + l, o = this.initialValue - c; this.isPrimeNumber(c) || c == a;) o--, c = this.initialValue - o;
        r ? this.operations.left.value = o : this.operations.right.value = o
    } else {
        var h;
        if ("easy" === t) r ? (this.operations.left.value = 1, this.operations.right.value = 2) : (this.operations.left.value = 2, this.operations.right.value = 1);
        else {
            var l;
            for (50 < (h = this.initialValue * n) && (n = 2, r ? this.operations.right.value = 2 : this.operations.left.value = 2, h = 2 * this.initialValue); !l;) l = Math.floor(this.app.randomFromTo(-2, 3));
            for (o = (c = h + l) - this.initialValue; this.isPrimeNumber(c) || c == h;) o++, c = this.initialValue + o;
            r ? this.operations.left.value = o : this.operations.right.value = o
        }
    }
}, (LargestNumber = LargestNumber || function() {}).prototype.init = function() {
    var f = this,
        n = [],
        a = [],
        e = [],
        t = [],
        m = {},
        s = {},
        c = ["Correct2.m4a", "ending-failure.mp3", "ending-success.mp3", "Show1.m4a"];

    function o(t) {
        switch (f.screenAge = 0, n = [], a = [], t) {
            case "defeat":
                e = ["end-failure"], n = ["restart-game"], f.playSound("ending-failure", 1800);
                break;
            case "main":
                e = ["header", "choices", "prompt", "footer"], n = ["click-left-choice", "click-right-choice"];
                break;
            case "victory":
                e = ["end-success"], n = ["restart-game"], f.playSound("ending-success", 750);
                break;
            default:
                e = []
        }
    }

    function i(t) {
        var e = f.canvas.getBoundingClientRect(),
            i = {
                x: t.clientX - e.x,
                y: t.clientY - e.y
            };
        i.x = i.x / f.canvas.width * 100, i.y = i.y / f.canvas.height * 100;
        var r = [];
        for (var s in "mousedown" == t.type && 0 == t.button && (r = n), "mousemove" == t.type && (r = a), r) {
            h(r[s], i)
        }
    }

    function h(t, e) {
        if (!f.blockedEvents[t]) switch (t) {
            case "click-left-choice":
                f.fireLeftChoice(e);
                break;
            case "click-right-choice":
                f.fireRightChoice(e);
                break;
            case "hover-left-choice":
                f.hoverLeftChoice(e);
                break;
            case "hover-right-choice":
                f.hoverRightChoice(e);
                break;
            case "hover-defeat-play-again":
                f.hoverDefeatPlayAgain(e);
                break;
            case "hover-success-play-again":
                f.hoverSuccessPlayAgain(e);
                break;
            case "restart-game":
                f.fireGameRestart(e)
        }
    }
    f.canvas = document.createElement("canvas"), f.ctx = f.canvas.getContext("2d"), f.CANVAS_WIDTH = 900, f.CANVAS_HEIGHT = 565, f.scale = 1, f.aspectRatio = f.CANVAS_WIDTH / f.CANVAS_HEIGHT, f.predictedOutcomes = [], f.predictedLargest = 0, f.canvas.width = f.CANVAS_WIDTH, f.canvas.height = f.CANVAS_HEIGHT, f.blockedEvents = {}, f.screenAge = 0, f.steps, f.stepPath = [], f.currentStep = !1, f.currentNumber = !1, f.predictedLargest = 0, document.body.appendChild(f.canvas), f.ctx.textBaseline = "top", f.ctx.textAlign = "center", f.playSound = function(t, e) {
        s[t] && (s[t].currentTime = 0, e ? setTimeout(function() {
            s[t].play()
        }, e) : s[t].play())
    }, f.getState = function() {
        return JSON.parse(JSON.stringify(m))
    }, f.setCurrentNumber = function(t) {
        m.currentNumber = t
    }, f.setInitialNumber = function(t) {
        m.initialNumber = t
    }, f.setCurrentStep = function(t) {
        m.currentStep = t
    }, f.getCurrentStep = function() {
        return JSON.parse(JSON.stringify(t[m.currentStep]))
    }, f.getHintString = function() {
        for (var t = "You had {current} and could have {actionAPast} or {actionBPast}. {smallerActionPresent} makes {smallerResult}, but {largerActionPresent} makes {largerResult}.", e = m.initialNumber, i = f.steps, r = 0; r < f.stepPath.length; r++) {
            var s = f.stepPath[r];
            if (!s.correct) {
                var n, a, c, o, h, l, u = f.getOperatorActionStrings(i.operations.left.operator),
                    p = f.getOperatorActionStrings(i.operations.right.operator),
                    g = i.getResult("left"),
                    d = i.getResult("right");
                return l = d < g ? (n = d, a = g, c = p.present, o = u.present, h = i.operations.right.value, i.operations.left.value) : (n = g, a = d, c = u.present, o = p.present, h = i.operations.left.value, i.operations.right.value), c = c.slice(0, 1).toUpperCase() + c.slice(1), t = (t = (t = (t = (t = (t = (t = t.replace("{current}", e)).replace("{actionAPast}", u.past + " " + i.operations.left.value)).replace("{actionBPast}", p.past + " " + i.operations.right.value)).replace("{smallerActionPresent}", c + " " + h)).replace("{largerActionPresent}", o + " " + l)).replace("{smallerResult}", n)).replace("{largerResult}", a)
            }
            e = i.getResult(s.choice), i = "left" == s.choice ? i.leftChild : i.rightChild
        }
        return !1
    }, f.isFirstStep = function() {
        return 0 == f.currentStep.depth
    }, f.isLastStep = function() {
        return !f.currentStep.hasNext
    }, f.advanceStep = function(t, e) {
        var i = f.currentStep.getResult("left"),
            r = f.currentStep.getResult("right"),
            s = !1;
        r <= i && "left" == t && (s = !0), i <= r && "right" == t && (s = !0), f.stepPath.push({
            correct: s,
            choice: t
        }), m.currentNumber = f.currentStep.getResult(t), e = e || 1, setTimeout(function() {
            if (f.isLastStep()) {
                f.stepPath.every(function(t) {
                    return t.correct
                }) ? o("victory") : o("defeat")
            } else m.currentStep++, f.currentStep = "left" == t ? f.currentStep.leftChild : f.currentStep.rightChild, o("main")
        }, e)
    }, f.render = function() {
        for (var t in f.screenAge++, f.ctx.save(), f.ctx.clearRect(0, 0, f.CANVAS_WIDTH, f.CANVAS_HEIGHT), e) f.showView(e[t]);
        f.ctx.restore(), window.requestAnimationFrame(f.render)
    }, f.startSequence = function() {
        ! function() {
            for (var t in c) {
                var e = c[t],
                    i = new Audio;
                i.src = "../audio/" + e;
                var r = e.split(".")[0];
                s[r] = i
            }
        }(), f.setupRenderProps(), f.setRandomizationSeed(), f.resetState(), f.resetSteps(), f.updateScale(), o("main")
    }, f.startSequence(), f.render(), f.canvas.addEventListener("mousedown", i), f.canvas.addEventListener("mousemove", i), window.addEventListener("resize", function() {
        f.updateScale()
    })
}, LargestNumber.prototype.resetState = function() {
    var t = Math.floor(this.randomFromTo(2, 8));
    this.setInitialNumber(t), this.setCurrentNumber(t), this.setCurrentStep(0)
}, LargestNumber.prototype.blockEvent = function(t) {
    this.blockedEvents[t] = !0
}, LargestNumber.prototype.unblockEvent = function(t) {
    this.blockedEvents[t] = !1
}, LargestNumber.prototype.showView = function(t) {
    switch (t) {
        case "choices":
            this.renderChoices();
            break;
        case "end-failure":
            this.renderEndingFailure();
            break;
        case "end-success":
            this.renderEndingSuccess();
            break;
        case "footer":
            this.renderFooter();
            break;
        case "header":
            this.renderHeader();
            break;
        case "prompt":
            this.renderPrompt()
    }
}, window.addEventListener("load", function() {
    (new LargestNumber).init()
}), (LargestNumber = LargestNumber || function() {}).prototype.setFontSize = function(t, e) {
    e = e ? "Italic" : "", this.ctx.font = t * this.scale + "px GibsonSemiBold" + e + ", Gibson, Arial"
}, LargestNumber.prototype.heightToPercent = function(t) {
    return t / this.canvas.height * 100
}, LargestNumber.prototype.percentWidth = function(t) {
    return this.canvas.width * t / 100
}, LargestNumber.prototype.percentHeight = function(t) {
    return this.canvas.height * t / 100
}, LargestNumber.prototype.fromRight = function(t) {
    return this.canvas.width - this.percentWidth(t)
}, LargestNumber.prototype.fromBottom = function(t) {
    return this.canvas.height - this.percentHeight(t)
}, LargestNumber.prototype.measureTextPercent = function(t, e) {
    return e && this.setFontSize(e), (t = this.ctx.measureText(t)).width / this.canvas.width * 100
}, LargestNumber.prototype.calcLargest = function(t, e, i) {
    var r = this.calcResult(t, i),
        s = this.calcResult(e, i);
    return s < r ? "A" : r < s ? "B" : 0
}, LargestNumber.prototype.calcResult = function(t, e) {
    switch (t.operator) {
        case "add":
            e += t.value;
            break;
        case "divide":
            e /= t.value;
            break;
        case "multiply":
            e *= t.value;
            break;
        case "subtract":
            e -= t.value
    }
    return e
}, LargestNumber.prototype.getOperatorActionStrings = function(t) {
    var e = {
        past: "",
        present: ""
    };
    switch (t) {
        case "add":
            e.past = "added", e.present = "adding";
            break;
        case "divide":
            e.past = "divided by", e.present = "dividing by";
            break;
        case "multiply":
            e.past = "multiplied by", e.present = "multiplying by";
            break;
        case "subtract":
            e.past = "subtracted", e.present = "subtracting"
    }
    return e
}, LargestNumber.prototype.pointIsWithinBounds = function(t, e, i) {
    return t.x >= e.x && t.x <= i.x && t.y >= e.y && t.y <= i.y
}, LargestNumber.prototype.linewrapText = function(t, e, i) {
    var r = t.split(" "),
        s = [],
        n = "",
        a = 0;
    for (var c in i && this.setFontSize(i), r) {
        var o = r[c],
            h = this.ctx.measureText(o + " ");
        h.width + a <= e ? (n += o + " ", a += h.width) : (s.push(n.trim()), n = o + " ", a = h.width)
    }
    return s.push(n.trim()), s
}, LargestNumber.prototype.setRandomizationSeed = function() {
    var i = this,
        t = new Date;
    this.seed = t.getDate() * t.getFullYear(), this.seed = Math.floor(1e3 * Math.random()), this.seededRandom = function(t, e) {
        return t = t || 1, e = e || 0, i.seed = (9301 * i.seed + 49297) % 233280, e + i.seed / 233280 * (t - e)
    }
}, LargestNumber.prototype.randomFromTo = function(t, e, i) {
    return (i ? Math.random() : this.seededRandom()) * (e - t + 1) + t
}, LargestNumber.prototype.easingBackOut = function(t) {
    return --t * t * (2.3 * t + 1.3) + 1
}, (LargestNumber = LargestNumber || function() {}).prototype.fireLeftChoice = function(t) {
    var e = this,
        i = {
            x: 4.7,
            y: 57.8
        },
        r = {
            x: 26.3,
            y: 92.2
        };
    if (this.pointIsWithinBounds(t, i, r)) {
        this.playSound("Show1"), this.blockEvent("click-left-choice");
        this.buttonShrinkTiming(function(t) {
            e.renderProps["left-choice"].scale = t
        }, function() {
            e.growCurrentNumber(function() {
                e.advanceStep("left", 800), e.unblockEvent("click-left-choice")
            })
        }, 150)
    }
}, LargestNumber.prototype.fireRightChoice = function(t) {
    var e = this,
        i = {
            x: 72.7,
            y: 57.8
        },
        r = {
            x: 94.3,
            y: 92.2
        };
    if (this.pointIsWithinBounds(t, i, r)) {
        this.playSound("Show1"), this.blockEvent("click-right-choice");
        this.buttonShrinkTiming(function(t) {
            e.renderProps["right-choice"].scale = t
        }, function() {
            e.growCurrentNumber(function() {
                e.advanceStep("right", 800), e.unblockEvent("click-right-choice")
            })
        }, 150)
    }
}, LargestNumber.prototype.fireGameRestart = function(t) {
    var e = this,
        i = {
            x: 76,
            y: 64.8
        },
        r = {
            x: 94,
            y: 93.4
        };
    this.pointIsWithinBounds(t, i, r) && (this.playSound("Show1"), this.buttonShrinkTiming(function(t) {
        e.renderProps["play-again"].scale = t
    }, e.startSequence, 500))
}, (LargestNumber = LargestNumber || function() {}).prototype.growCurrentNumber = function(t, e) {
    var i, r = this.renderProps["current-number"];
    r.color, r.activeColor;
    this.playSound("Correct2", 150), i = setInterval(function() {
        r.adj++, 44 <= r.adj && (clearInterval(i), setTimeout(function() {
            "function" == typeof t && t()
        }, 10), i = setInterval(function() {
            r.adj--, 0 == r.adj && clearInterval(i)
        }, 3))
    }, 3)
}, LargestNumber.prototype.buttonShrinkTiming = function(t, e, i) {
    var r, s = 1;
    r = setInterval(function() {
        t(s *= .99), s < .92 && (clearInterval(r), setTimeout(function() {
            r = setInterval(function() {
                t(s *= 1.01), 1 <= s && (t(s = 1), clearInterval(r), "function" == typeof e && setTimeout(function() {
                    e()
                }, i || 1))
            }, 5)
        }, 50))
    }, 5)
}, (LargestNumber = LargestNumber || function() {}).prototype.hoverLeftChoice = function(t) {
    var e = {
            x: 4.7,
            y: 57.8
        },
        i = {
            x: 26.3,
            y: 92.2
        };
    this.pointIsWithinBounds(t, e, i) ? this.renderProps["left-choice"].active = !0 : this.renderProps["left-choice"].active = !1
}, LargestNumber.prototype.hoverRightChoice = function(t) {
    var e = {
            x: 72.7,
            y: 57.8
        },
        i = {
            x: 94.3,
            y: 92.2
        };
    this.pointIsWithinBounds(t, e, i) ? this.renderProps["right-choice"].active = !0 : this.renderProps["right-choice"].active = !1
}, LargestNumber.prototype.hoverDefeatPlayAgain = function(t) {
    var e = {
            x: 63.55,
            y: 70.1
        },
        i = {
            x: 90.22,
            y: 80.72
        };
    this.pointIsWithinBounds(t, e, i) ? this.renderProps["play-again"].active = !0 : this.renderProps["play-again"].active = !1
}, LargestNumber.prototype.hoverSuccessPlayAgain = function(t) {
    var e = {
            x: 36.67,
            y: 70.1
        },
        i = {
            x: 63.34,
            y: 80.7
        };
    this.pointIsWithinBounds(t, e, i) ? this.renderProps["play-again"].active = !0 : this.renderProps["play-again"].active = !1
}, (LargestNumber = LargestNumber || function() {}).prototype.updateScale = function() {
    var t;
    window.innerWidth / (window.innerHeight - 38) > this.aspectRatio ? (Math.floor(window.innerHeight - 38), t = Math.floor((window.innerHeight - 38) * this.aspectRatio)) : (t = Math.floor(window.innerWidth) - 14, Math.floor(window.innerWidth / this.aspectRatio)), this.scale = t / this.CANVAS_WIDTH, 1 < this.scale && (this.scale = 1), this.canvas.width = this.CANVAS_WIDTH * this.scale, this.canvas.height = this.CANVAS_HEIGHT * this.scale
}, (LargestNumber = LargestNumber || function() {}).prototype.setupRenderProps = function() {
    this.renderProps = {
        "current-number": {
            adj: 0,
            color: "#f9f79c",
            activeColor: "#da92ff",
            size: 210
        },
        "left-choice": {
            active: !1,
            color: "#ffffff",
            activeColor: "#37baea",
            scale: 1
        },
        "right-choice": {
            active: !1,
            color: "#ffffff",
            activeColor: "#37baea",
            scale: 1
        },
        "play-again": {
            active: !1,
            color: "#32a281",
            activeColor: "#2acb9c",
            scale: 1
        }
    }
}, (LargestNumber = LargestNumber || function() {}).prototype.renderHeader = function() {
    this.screenAge < 10 && this.isFirstStep() && this.playSound("Correct2", 1300), this.drawVectorText("Try to make the largest number you can.", 50, 7.78, {
        color: "#ffffff",
        size: 37,
        alignment: "center"
    }), this.ctx.clearRect(this.percentWidth(41.5), this.percentHeight(7.8), this.percentWidth(29.4), this.percentHeight(7.2)), this.drawVectorText("largest number", 56.07, 7.85, {
        color: "#f9f79c"
    })
}, (LargestNumber = LargestNumber || function() {}).prototype.renderPrompt = function() {
    var t;
    this.isFirstStep() && (t = (this.screenAge - 122) / 12) < 0 && (t = 0);
    this.drawVectorText("Do you want to...", 50, 71, {
        alignment: "center",
        color: "#ffffff",
        opacity: t,
        size: 30
    })
}, (LargestNumber = LargestNumber || function() {}).prototype.renderFooter = function() {
    var t = this.isFirstStep() ? "Your starting number is:" : "You now have:";
    if (this.isFirstStep()) {
        var e = (this.screenAge - 30) / 12;
        e < 0 && (e = 0), this.ctx.globalAlpha = e
    }
    this.drawVectorText(t, 50, 21, {
        color: "#ffffff",
        size: 30,
        alignment: "center"
    }), this.isFirstStep() && (this.ctx.globalAlpha = 1)
}, (LargestNumber = LargestNumber || function() {}).prototype.renderEndingSuccess = function() {
    var t = (this.screenAge - 15) / 17;
    t < 0 && (t = 0), this.ctx.globalAlpha = t, this.drawVectorRectangle(0, 4.3, 100, 16, "#f9f79c"), this.ctx.globalAlpha = 1;
    var e = this.easingBackOut((this.screenAge - 40) / 30);
    30 < this.screenAge - 40 && (e = 1), this.drawVectorText("WOOHOO!", 50, 13, {
        alignment: "center",
        baseline: "middle",
        color: "#3497d0",
        opacity: this.screenAge < 40 ? 0 : (this.screenAge - 40) / 10,
        size: 74 * e
    }), this.ctx.translate(this.percentWidth(50), this.percentHeight(43));
    var i = this.screenAge < 110 ? (1 - this.screenAge / 110) * -Math.PI / 2 : 0;
    this.ctx.rotate(i), this.drawVectorText(this.getState().currentNumber, 0, 0, {
        alignment: "center",
        baseline: "middle",
        color: "#f9f79c",
        opacity: this.screenAge < 80 ? 0 : (this.screenAge - 80) / 16,
        size: this.screenAge < 110 ? (this.screenAge - 80) / 30 * 210 : 210
    }), this.ctx.rotate(-i), this.ctx.translate(-this.percentWidth(50), -this.percentHeight(43)), this.ctx.globalAlpha = 150 < this.screenAge ? (this.screenAge - 150) / 8 : 0, this.renderEndingBackground(), this.drawVectorText("You made the largest possible number!", 6.75, 76, {
        alignment: "left",
        color: "#706c6b",
        size: 34
    }), this.ctx.globalAlpha = 1, this.renderPlayAgainButton(85, 79.1)
}, LargestNumber.prototype.renderEndingFailure = function() {
    this.drawVectorText("Your final number is", 50, 7.78, {
        alignment: "center",
        color: "#ffffff",
        opacity: 20 < this.screenAge ? 1 : 0,
        size: 36
    }), this.drawVectorText("Very big! But you could have made a bigger number.", 50, 50.7, {
        opacity: 140 < this.screenAge ? 1 : 0,
        size: 35
    }), this.ctx.globalAlpha = 190 < this.screenAge ? (this.screenAge - 190) / 8 : 0, this.renderEndingBackground();
    var t = this.getHintString();
    if (t) {
        var e = this.linewrapText(t, this.percentWidth(66), 24);
        for (var i in e) this.drawVectorText(e[i], 6.7, 70 + 7 * i, {
            color: "#706c6b",
            size: 24,
            alignment: "left"
        });
        this.ctx.globalAlpha = 1, this.renderPlayAgainButton(85, 79.1);
        var r = this.easingBackOut((this.screenAge - 30) / 40);
        40 < this.screenAge - 30 && (r = 1), this.ctx.translate(this.percentWidth(50), this.percentHeight(34.5)), this.ctx.scale(r, r), this.drawVectorText(this.getState().currentNumber, 0, 0, {
            alignment: "center",
            baseline: "middle",
            color: "#f9f79c",
            opacity: this.screenAge < 41 ? 0 : this.screenAge / 66,
            size: 210
        }), this.ctx.scale(1 / r, 1 / r), this.ctx.translate(-this.percentWidth(50), -this.percentHeight(34.5))
    }
}, LargestNumber.prototype.renderEndingBackground = function() {
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.55)", this.drawVectorRectangle(4.5, 62, 91, 4), this.drawVectorRectangle(2, 66, 96, 26), this.drawVectorRectangle(4.5, 92, 91, 4), this.ctx.beginPath(), this.ctx.moveTo(this.percentWidth(2), this.percentHeight(66)), this.ctx.quadraticCurveTo(this.percentWidth(2), this.percentHeight(62), this.percentWidth(4.5), this.percentHeight(62)), this.ctx.lineTo(this.percentWidth(4.5), this.percentHeight(66)), this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(this.percentWidth(2), this.percentHeight(92)), this.ctx.quadraticCurveTo(this.percentWidth(2), this.percentHeight(96), this.percentWidth(4.5), this.percentHeight(96)), this.ctx.lineTo(this.percentWidth(4.5), this.percentHeight(92)), this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(this.percentWidth(95.5), this.percentHeight(62)), this.ctx.quadraticCurveTo(this.percentWidth(98), this.percentHeight(62), this.percentWidth(98), this.percentHeight(66)), this.ctx.lineTo(this.percentWidth(95.5), this.percentHeight(66)), this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(this.percentWidth(98), this.percentHeight(92)), this.ctx.quadraticCurveTo(this.percentWidth(98), this.percentHeight(96), this.percentWidth(95.5), this.percentHeight(96)), this.ctx.lineTo(this.percentWidth(95.5), this.percentHeight(92)), this.ctx.closePath(), this.ctx.fill()
}, LargestNumber.prototype.renderPlayAgainButton = function(t, e) {
    var i = this.easingBackOut((this.screenAge - 220) / 33);
    33 < this.screenAge - 220 && (i = 1);
    var r = this.renderProps["play-again"],
        s = (this.screenAge - 220) / 33;
    s < 0 && (s = 0), this.ctx.globalAlpha = s, this.ctx.translate(this.percentWidth(t), this.percentHeight(e)), this.ctx.scale(i * r.scale, i * r.scale), this.drawVectorCircle(0, 0, 9, "#ffffff"), this.drawVectorCircle(0, 0, 8.3, "#00b8d1"), this.drawVectorText("Play", 0, -7.1, {
        color: "#ffffff",
        size: 34,
        alignment: "center"
    }), this.drawVectorText("Again!", 0, -.1, {
        color: "#ffffff",
        size: 34,
        alignment: "center"
    }), this.ctx.scale(1 / (i * r.scale), 1 / (i * r.scale)), this.ctx.translate(-this.percentWidth(t), -this.percentHeight(e)), this.ctx.globalAlpha = 1
}, (LargestNumber = LargestNumber || function() {}).prototype.renderChoices = function() {
    var t = this.renderProps["current-number"].size + this.renderProps["current-number"].adj,
        e = this.isFirstStep() ? 78 : 0,
        i = this.easingBackOut((this.screenAge - e) / 33),
        r = 1;
    this.isFirstStep() && (r = (this.screenAge - e) / 17) < 0 && (r = 0), 33 < this.screenAge - e && (i = 1), this.isFirstStep() || (i = 1), this.ctx.globalAlpha = r, this.drawVectorText(this.getState().currentNumber, 50, 46, {
        baseline: "middle",
        color: this.renderProps["current-number"].color,
        size: t * i
    }), this.ctx.globalAlpha = 1;
    var s = this.currentStep,
        n = this.isFirstStep() ? 100 : 0,
        a = 45;
    this.isFirstStep() || (a += 3);
    var c = (this.screenAge - (n + a)) / 20 - 0;
    this.ctx.globalAlpha = c < 0 ? 0 : c, this.renderChoiceButton("left", 15.5, 75, s.operations.left, n), this.renderChoiceButton("right", 83.5, 75, s.operations.right, n), this.ctx.globalAlpha = 1
}, LargestNumber.prototype.renderChoiceButton = function(t, e, i, r, s) {
    var n = this.percentWidth(e),
        a = this.percentHeight(i);
    i = e = 0;
    var c = this.easingBackOut((this.screenAge - (40 + s)) / 30);
    30 < this.screenAge - (40 + s) && (c = 1), this.ctx.translate(n, a);
    var o = this.renderProps[t + "-choice"],
        h = o.active ? o.activeColor : o.color;
    this.ctx.scale(o.scale * c, o.scale * c), this.drawVectorCircle(e, i, 10.8, "#ffffff"), this.drawVectorCircle(e, i, 10, "#00b8d1"), this.drawVectorText(r.value, e + .667, i - 4.48, {
        color: h,
        size: 52
    });
    var l = .55 + e - (this.measureTextPercent(r.value) / 2 + 3.33),
        u = i - .35;
    this.renderSymbol(l, u, r.symbol, h), this.ctx.scale(1 / (o.scale * c), 1 / (o.scale * c)), this.ctx.translate(-n, -a)
}, LargestNumber.prototype.renderSymbol = function(t, e, i, r) {
    var s = this.ctx;
    switch (s.strokeStyle = r, s.fillStyle = r, i) {
        case "+":
            this.drawVectorRectangle(t, e, 3.11, 1.415), this.drawVectorRectangle(t + 1.11, e - 1.77, .889, 4.95);
            break;
        case "-":
            this.drawVectorRectangle(t, e, 3.11, 1.415);
            break;
        case "x":
            t += .2222, this.drawVectorLine(t, e - 1.06, 2.44, 3.89, 8), this.drawVectorLine(t, e + 2.83, 2.44, -3.89, 8);
            break;
        case "%":
            this.drawVectorRectangle(t, e, 3.11, 1.415), this.drawVectorCircle(t + 1.55, e - 1.415, .555), this.drawVectorCircle(t + 1.55, e + 2.83, .555)
    }
}, (LargestNumber = LargestNumber || function() {}).prototype.drawVectorRectangle = function(t, e, i, r, s) {
    s && (this.ctx.fillStyle = s), this.ctx.fillRect(this.percentWidth(t), this.percentHeight(e), this.percentWidth(i), this.percentHeight(r))
}, LargestNumber.prototype.drawVectorCircle = function(t, e, i, r) {
    r && (this.ctx.fillStyle = r), this.ctx.beginPath(), this.ctx.arc(this.percentWidth(t), this.percentHeight(e), this.percentWidth(i), 0, 2 * Math.PI), this.ctx.fill(), this.ctx.closePath()
}, LargestNumber.prototype.drawVectorLine = function(t, e, i, r, s, n) {
    n && (this.ctx.fillStyle = n), s && (this.ctx.lineWidth = s * this.scale), this.ctx.beginPath(), this.ctx.moveTo(this.percentWidth(t), this.percentHeight(e)), this.ctx.lineTo(this.percentWidth(t + i), this.percentHeight(e + r)), this.ctx.stroke(), this.ctx.closePath()
}, LargestNumber.prototype.drawVectorText = function(t, e, i, r) {
    (r = r || {}).color && (this.ctx.fillStyle = r.color), r.size && this.setFontSize(r.size, r.italic), r.alignment && (this.ctx.textAlign = r.alignment), void 0 !== r.opacity && (this.ctx.globalAlpha = r.opacity), this.ctx.textBaseline = r.baseline ? r.baseline : "top", this.ctx.fillText(t, this.percentWidth(e), this.percentHeight(i)), void 0 !== r.opacity && (this.ctx.globalAlpha = 1)
}, (LargestNumber = LargestNumber || function() {}).prototype.resetSteps = function() {
    var t = this;
    t.stepPath = [], t.steps = new Step(t.getState().initialNumber, t), t.currentStep = t.steps;
    for (var e = t.currentStep.calculateEndPoints(), i = 0, r = 0; r < e.length; r++) {
        var s = e[r];
        i < s && (i = s)
    }
    t.predictedLargest = i
};