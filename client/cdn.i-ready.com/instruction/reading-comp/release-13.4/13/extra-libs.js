(() => {
    "use strict";
    var t = {
            67331: () => {
                var t = location.hostname.split(".");
                t.length > 2 && !/amazonaws/.test(location.hostname) && !/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/.test(location.hostname) && (t.shift(), document.domain = t.join("."))
            },
            7959: () => {
                ! function(t) {
                    function e(t, e) {
                        this.initialize(t, e)
                    }
                    var i = e.prototype;
                    e.HEADER_SIZE = 2, e._workingCanvas = document.createElement("canvas"), i.sampleRate = 0, i.stereo = !0, i.numSamples = 0, i.gain = 1, i._data = null, i._headerSize = 0, i._color1 = -1, i._color2 = -1, i.initialize = function(t, i) {
                        if (this.sampleRate = i || 50, "string" == typeof t) this._getVolume = this._getVolumeString, this.data = t, this._headerSize = 1, this.stereo = "0" != t.charAt(0), this.numSamples = t.length - this._headerSize;
                        else {
                            if (!(t instanceof Image || t instanceof HTMLImageElement)) throw "Unrecognized data type for VolumeData. Must be Image or String.";
                            this._getVolume = this._getVolumeImage;
                            var a = e._workingCanvas;
                            a.width = t.width, a.height = t.height;
                            var h = a.getContext("2d");
                            if (h.drawImage(t, 0, 0), this.data = h.getImageData(0, 0, a.width, a.height).data, this._getColors(0), -1 == this.color1) throw "Unable to parse color markers.";
                            this.stereo = -1 != this.color2, this._headerSize = 2, this.numSamples = this.data.length / 4 - this._headerSize
                        }
                    }, i.getIndex = function(t) {
                        return Math.max(0, Math.min(this.numSamples, t * this.sampleRate))
                    }, i.getVolume = function(t, e) {
                        e || (e = {});
                        var i = Math.round(this.getIndex(t));
                        return i < 0 || i > this.numSamples ? e.left = e.right = 0 : this._getVolume(i, e), e
                    }, i.getAverageVolume = function(t, e, i) {
                        if (i || (i = {}), t = Math.round(this.getIndex(t)), (e = Math.round(this.getIndex(e))) < t) i.left = i.right = 0;
                        else {
                            for (var a = 0, h = 0, o = t; o <= e; o++) this._getVolume(o, i), a += i.left, h += i.right;
                            i.left = a / (e - t + 1), i.right = h / (e - t + 1)
                        }
                        return i
                    }, i.toString = function() {
                        return "[VolumeData]"
                    }, i._getVolume = null, i._getVolumeImage = function(t, e) {
                        t += this._headerSize, this.stereo ? (e.left = Math.min(1, this.data[4 * t + this.color1] / 255 * this.gain), e.right = Math.min(1, this.data[4 * t + this.color2] / 255 * this.gain)) : e.left = e.right = Math.min(1, this.data[4 * t + this.color1] / 255 * this.gain)
                    }, i._getVolumeString = function(t, e) {
                        this.stereo ? (e.left = Math.min(1, (this.data.charCodeAt(2 * t + this._headerSize | 0) - 33) / 93 * this.gain), e.right = Math.min(1, (this.data.charCodeAt(2 * t + this._headerSize + 1 | 0) - 33) / 93 * this.gain)) : e.left = e.right = Math.min(1, (this.data.charCodeAt(t + this._headerSize | 0) - 33) / 93 * this.gain)
                    }, i._getColors = function(t) {
                        var e = this.data[4 * t],
                            i = this.data[4 * t + 1],
                            a = this.data[4 * t + 2];
                        this.color1 = this.color2 = -1, e > 64 ? (this.color1 = 0, i > 64 ? this.color2 = 1 : a > 64 && (this.color2 = 2)) : i > 64 ? (this.color1 = 1, a > 64 && (this.color2 = 2)) : a > 64 && (this.color1 = 2)
                    }, i._getSampleRate = function(t) {
                        var e = this.data[4 * t + 1],
                            i = this.data[4 * t + 2];
                        this.sampleRate = 16 * Math.round(e / 15) + Math.round(i / 15)
                    }, t.VolumeData = e
                }(window)
            }
        },
        e = {};

    function i(a) {
        var h = e[a];
        if (void 0 !== h) return h.exports;
        var o = e[a] = {
            exports: {}
        };
        return t[a](o, o.exports, i), o.exports
    }
    i(67331), i(7959)
})();