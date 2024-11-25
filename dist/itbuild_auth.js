const jr = (r) => {
  if (Array.isArray(r) && (r = Uint8Array.from(r)), r instanceof ArrayBuffer && (r = new Uint8Array(r)), r instanceof Uint8Array) {
    let e = "";
    const f = r.byteLength;
    for (let i = 0; i < f; i++)
      e += String.fromCharCode(r[i]);
    r = window.btoa(e);
  }
  if (typeof r != "string")
    throw new Error("could not coerce to string");
  return r = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=*$/g, ""), r;
};
var rf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nf(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var f = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    f.prototype = e.prototype;
  } else f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(f, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), f;
}
var ff = {};
const Of = "elliptic", kf = "6.6.1", Lf = "EC cryptography", Cf = "lib/elliptic.js", Hf = [
  "lib"
], Tf = {
  lint: "eslint lib test",
  "lint:fix": "npm run lint -- --fix",
  unit: "istanbul test _mocha --reporter=spec test/index.js",
  test: "npm run lint && npm run unit",
  version: "grunt dist && git add dist/"
}, Df = {
  type: "git",
  url: "git@github.com:indutny/elliptic"
}, Jf = [
  "EC",
  "Elliptic",
  "curve",
  "Cryptography"
], Kf = "Fedor Indutny <fedor@indutny.com>", jf = "MIT", Uf = {
  url: "https://github.com/indutny/elliptic/issues"
}, Wf = "https://github.com/indutny/elliptic", Xf = {
  brfs: "^2.0.2",
  coveralls: "^3.1.0",
  eslint: "^7.6.0",
  grunt: "^1.2.1",
  "grunt-browserify": "^5.3.0",
  "grunt-cli": "^1.3.2",
  "grunt-contrib-connect": "^3.0.0",
  "grunt-contrib-copy": "^1.0.0",
  "grunt-contrib-uglify": "^5.0.0",
  "grunt-mocha-istanbul": "^5.0.2",
  "grunt-saucelabs": "^9.0.1",
  istanbul: "^0.4.5",
  mocha: "^8.0.1"
}, Zf = {
  "bn.js": "^4.11.9",
  brorand: "^1.1.0",
  "hash.js": "^1.0.0",
  "hmac-drbg": "^1.0.1",
  inherits: "^2.0.4",
  "minimalistic-assert": "^1.0.1",
  "minimalistic-crypto-utils": "^1.0.1"
}, Vf = {
  name: Of,
  version: kf,
  description: Lf,
  main: Cf,
  files: Hf,
  scripts: Tf,
  repository: Df,
  keywords: Jf,
  author: Kf,
  license: jf,
  bugs: Uf,
  homepage: Wf,
  devDependencies: Xf,
  dependencies: Zf
};
var Oe = {}, Mr = { exports: {} };
const Yf = {}, Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yf
}, Symbol.toStringTag, { value: "Module" })), Rt = /* @__PURE__ */ Nf(Gf);
Mr.exports;
(function(r) {
  (function(e, f) {
    function i(o, t) {
      if (!o) throw new Error(t || "Assertion failed");
    }
    function s(o, t) {
      o.super_ = t;
      var a = function() {
      };
      a.prototype = t.prototype, o.prototype = new a(), o.prototype.constructor = o;
    }
    function n(o, t, a) {
      if (n.isBN(o))
        return o;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, o !== null && ((t === "le" || t === "be") && (a = t, t = 10), this._init(o || 0, t || 10, a || "be"));
    }
    typeof e == "object" ? e.exports = n : f.BN = n, n.BN = n, n.wordSize = 26;
    var x;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? x = window.Buffer : x = Rt.Buffer;
    } catch {
    }
    n.isBN = function(t) {
      return t instanceof n ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === n.wordSize && Array.isArray(t.words);
    }, n.max = function(t, a) {
      return t.cmp(a) > 0 ? t : a;
    }, n.min = function(t, a) {
      return t.cmp(a) < 0 ? t : a;
    }, n.prototype._init = function(t, a, c) {
      if (typeof t == "number")
        return this._initNumber(t, a, c);
      if (typeof t == "object")
        return this._initArray(t, a, c);
      a === "hex" && (a = 16), i(a === (a | 0) && a >= 2 && a <= 36), t = t.toString().replace(/\s+/g, "");
      var h = 0;
      t[0] === "-" && (h++, this.negative = 1), h < t.length && (a === 16 ? this._parseHex(t, h, c) : (this._parseBase(t, a, h), c === "le" && this._initArray(this.toArray(), a, c)));
    }, n.prototype._initNumber = function(t, a, c) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [
        t & 67108863,
        t / 67108864 & 67108863
      ], this.length = 2) : (i(t < 9007199254740992), this.words = [
        t & 67108863,
        t / 67108864 & 67108863,
        1
      ], this.length = 3), c === "le" && this._initArray(this.toArray(), a, c);
    }, n.prototype._initArray = function(t, a, c) {
      if (i(typeof t.length == "number"), t.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
      for (var h = 0; h < this.length; h++)
        this.words[h] = 0;
      var b, m, y = 0;
      if (c === "be")
        for (h = t.length - 1, b = 0; h >= 0; h -= 3)
          m = t[h] | t[h - 1] << 8 | t[h - 2] << 16, this.words[b] |= m << y & 67108863, this.words[b + 1] = m >>> 26 - y & 67108863, y += 24, y >= 26 && (y -= 26, b++);
      else if (c === "le")
        for (h = 0, b = 0; h < t.length; h += 3)
          m = t[h] | t[h + 1] << 8 | t[h + 2] << 16, this.words[b] |= m << y & 67108863, this.words[b + 1] = m >>> 26 - y & 67108863, y += 24, y >= 26 && (y -= 26, b++);
      return this.strip();
    };
    function v(o, t) {
      var a = o.charCodeAt(t);
      return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
    }
    function p(o, t, a) {
      var c = v(o, a);
      return a - 1 >= t && (c |= v(o, a - 1) << 4), c;
    }
    n.prototype._parseHex = function(t, a, c) {
      this.length = Math.ceil((t.length - a) / 6), this.words = new Array(this.length);
      for (var h = 0; h < this.length; h++)
        this.words[h] = 0;
      var b = 0, m = 0, y;
      if (c === "be")
        for (h = t.length - 1; h >= a; h -= 2)
          y = p(t, a, h) << b, this.words[m] |= y & 67108863, b >= 18 ? (b -= 18, m += 1, this.words[m] |= y >>> 26) : b += 8;
      else {
        var u = t.length - a;
        for (h = u % 2 === 0 ? a + 1 : a; h < t.length; h += 2)
          y = p(t, a, h) << b, this.words[m] |= y & 67108863, b >= 18 ? (b -= 18, m += 1, this.words[m] |= y >>> 26) : b += 8;
      }
      this.strip();
    };
    function w(o, t, a, c) {
      for (var h = 0, b = Math.min(o.length, a), m = t; m < b; m++) {
        var y = o.charCodeAt(m) - 48;
        h *= c, y >= 49 ? h += y - 49 + 10 : y >= 17 ? h += y - 17 + 10 : h += y;
      }
      return h;
    }
    n.prototype._parseBase = function(t, a, c) {
      this.words = [0], this.length = 1;
      for (var h = 0, b = 1; b <= 67108863; b *= a)
        h++;
      h--, b = b / a | 0;
      for (var m = t.length - c, y = m % h, u = Math.min(m, m - y) + c, d = 0, l = c; l < u; l += h)
        d = w(t, l, l + h, a), this.imuln(b), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
      if (y !== 0) {
        var B = 1;
        for (d = w(t, l, t.length, a), l = 0; l < y; l++)
          B *= a;
        this.imuln(B), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
      }
      this.strip();
    }, n.prototype.copy = function(t) {
      t.words = new Array(this.length);
      for (var a = 0; a < this.length; a++)
        t.words[a] = this.words[a];
      t.length = this.length, t.negative = this.negative, t.red = this.red;
    }, n.prototype.clone = function() {
      var t = new n(null);
      return this.copy(t), t;
    }, n.prototype._expand = function(t) {
      for (; this.length < t; )
        this.words[this.length++] = 0;
      return this;
    }, n.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, n.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, n.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var g = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], M = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], I = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    n.prototype.toString = function(t, a) {
      t = t || 10, a = a | 0 || 1;
      var c;
      if (t === 16 || t === "hex") {
        c = "";
        for (var h = 0, b = 0, m = 0; m < this.length; m++) {
          var y = this.words[m], u = ((y << h | b) & 16777215).toString(16);
          b = y >>> 24 - h & 16777215, h += 2, h >= 26 && (h -= 26, m--), b !== 0 || m !== this.length - 1 ? c = g[6 - u.length] + u + c : c = u + c;
        }
        for (b !== 0 && (c = b.toString(16) + c); c.length % a !== 0; )
          c = "0" + c;
        return this.negative !== 0 && (c = "-" + c), c;
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var d = M[t], l = I[t];
        c = "";
        var B = this.clone();
        for (B.negative = 0; !B.isZero(); ) {
          var q = B.modn(l).toString(t);
          B = B.idivn(l), B.isZero() ? c = q + c : c = g[d - q.length] + q + c;
        }
        for (this.isZero() && (c = "0" + c); c.length % a !== 0; )
          c = "0" + c;
        return this.negative !== 0 && (c = "-" + c), c;
      }
      i(!1, "Base should be between 2 and 36");
    }, n.prototype.toNumber = function() {
      var t = this.words[0];
      return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
    }, n.prototype.toJSON = function() {
      return this.toString(16);
    }, n.prototype.toBuffer = function(t, a) {
      return i(typeof x < "u"), this.toArrayLike(x, t, a);
    }, n.prototype.toArray = function(t, a) {
      return this.toArrayLike(Array, t, a);
    }, n.prototype.toArrayLike = function(t, a, c) {
      var h = this.byteLength(), b = c || Math.max(1, h);
      i(h <= b, "byte array longer than desired length"), i(b > 0, "Requested array length <= 0"), this.strip();
      var m = a === "le", y = new t(b), u, d, l = this.clone();
      if (m) {
        for (d = 0; !l.isZero(); d++)
          u = l.andln(255), l.iushrn(8), y[d] = u;
        for (; d < b; d++)
          y[d] = 0;
      } else {
        for (d = 0; d < b - h; d++)
          y[d] = 0;
        for (d = 0; !l.isZero(); d++)
          u = l.andln(255), l.iushrn(8), y[b - d - 1] = u;
      }
      return y;
    }, Math.clz32 ? n.prototype._countBits = function(t) {
      return 32 - Math.clz32(t);
    } : n.prototype._countBits = function(t) {
      var a = t, c = 0;
      return a >= 4096 && (c += 13, a >>>= 13), a >= 64 && (c += 7, a >>>= 7), a >= 8 && (c += 4, a >>>= 4), a >= 2 && (c += 2, a >>>= 2), c + a;
    }, n.prototype._zeroBits = function(t) {
      if (t === 0) return 26;
      var a = t, c = 0;
      return a & 8191 || (c += 13, a >>>= 13), a & 127 || (c += 7, a >>>= 7), a & 15 || (c += 4, a >>>= 4), a & 3 || (c += 2, a >>>= 2), a & 1 || c++, c;
    }, n.prototype.bitLength = function() {
      var t = this.words[this.length - 1], a = this._countBits(t);
      return (this.length - 1) * 26 + a;
    };
    function S(o) {
      for (var t = new Array(o.bitLength()), a = 0; a < t.length; a++) {
        var c = a / 26 | 0, h = a % 26;
        t[a] = (o.words[c] & 1 << h) >>> h;
      }
      return t;
    }
    n.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var t = 0, a = 0; a < this.length; a++) {
        var c = this._zeroBits(this.words[a]);
        if (t += c, c !== 26) break;
      }
      return t;
    }, n.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, n.prototype.toTwos = function(t) {
      return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, n.prototype.fromTwos = function(t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, n.prototype.isNeg = function() {
      return this.negative !== 0;
    }, n.prototype.neg = function() {
      return this.clone().ineg();
    }, n.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, n.prototype.iuor = function(t) {
      for (; this.length < t.length; )
        this.words[this.length++] = 0;
      for (var a = 0; a < t.length; a++)
        this.words[a] = this.words[a] | t.words[a];
      return this.strip();
    }, n.prototype.ior = function(t) {
      return i((this.negative | t.negative) === 0), this.iuor(t);
    }, n.prototype.or = function(t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, n.prototype.uor = function(t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, n.prototype.iuand = function(t) {
      var a;
      this.length > t.length ? a = t : a = this;
      for (var c = 0; c < a.length; c++)
        this.words[c] = this.words[c] & t.words[c];
      return this.length = a.length, this.strip();
    }, n.prototype.iand = function(t) {
      return i((this.negative | t.negative) === 0), this.iuand(t);
    }, n.prototype.and = function(t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, n.prototype.uand = function(t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, n.prototype.iuxor = function(t) {
      var a, c;
      this.length > t.length ? (a = this, c = t) : (a = t, c = this);
      for (var h = 0; h < c.length; h++)
        this.words[h] = a.words[h] ^ c.words[h];
      if (this !== a)
        for (; h < a.length; h++)
          this.words[h] = a.words[h];
      return this.length = a.length, this.strip();
    }, n.prototype.ixor = function(t) {
      return i((this.negative | t.negative) === 0), this.iuxor(t);
    }, n.prototype.xor = function(t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, n.prototype.uxor = function(t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, n.prototype.inotn = function(t) {
      i(typeof t == "number" && t >= 0);
      var a = Math.ceil(t / 26) | 0, c = t % 26;
      this._expand(a), c > 0 && a--;
      for (var h = 0; h < a; h++)
        this.words[h] = ~this.words[h] & 67108863;
      return c > 0 && (this.words[h] = ~this.words[h] & 67108863 >> 26 - c), this.strip();
    }, n.prototype.notn = function(t) {
      return this.clone().inotn(t);
    }, n.prototype.setn = function(t, a) {
      i(typeof t == "number" && t >= 0);
      var c = t / 26 | 0, h = t % 26;
      return this._expand(c + 1), a ? this.words[c] = this.words[c] | 1 << h : this.words[c] = this.words[c] & ~(1 << h), this.strip();
    }, n.prototype.iadd = function(t) {
      var a;
      if (this.negative !== 0 && t.negative === 0)
        return this.negative = 0, a = this.isub(t), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && t.negative !== 0)
        return t.negative = 0, a = this.isub(t), t.negative = 1, a._normSign();
      var c, h;
      this.length > t.length ? (c = this, h = t) : (c = t, h = this);
      for (var b = 0, m = 0; m < h.length; m++)
        a = (c.words[m] | 0) + (h.words[m] | 0) + b, this.words[m] = a & 67108863, b = a >>> 26;
      for (; b !== 0 && m < c.length; m++)
        a = (c.words[m] | 0) + b, this.words[m] = a & 67108863, b = a >>> 26;
      if (this.length = c.length, b !== 0)
        this.words[this.length] = b, this.length++;
      else if (c !== this)
        for (; m < c.length; m++)
          this.words[m] = c.words[m];
      return this;
    }, n.prototype.add = function(t) {
      var a;
      return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, a = this.sub(t), t.negative ^= 1, a) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = t.sub(this), this.negative = 1, a) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, n.prototype.isub = function(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var a = this.iadd(t);
        return t.negative = 1, a._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var c = this.cmp(t);
      if (c === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var h, b;
      c > 0 ? (h = this, b = t) : (h = t, b = this);
      for (var m = 0, y = 0; y < b.length; y++)
        a = (h.words[y] | 0) - (b.words[y] | 0) + m, m = a >> 26, this.words[y] = a & 67108863;
      for (; m !== 0 && y < h.length; y++)
        a = (h.words[y] | 0) + m, m = a >> 26, this.words[y] = a & 67108863;
      if (m === 0 && y < h.length && h !== this)
        for (; y < h.length; y++)
          this.words[y] = h.words[y];
      return this.length = Math.max(this.length, y), h !== this && (this.negative = 1), this.strip();
    }, n.prototype.sub = function(t) {
      return this.clone().isub(t);
    };
    function F(o, t, a) {
      a.negative = t.negative ^ o.negative;
      var c = o.length + t.length | 0;
      a.length = c, c = c - 1 | 0;
      var h = o.words[0] | 0, b = t.words[0] | 0, m = h * b, y = m & 67108863, u = m / 67108864 | 0;
      a.words[0] = y;
      for (var d = 1; d < c; d++) {
        for (var l = u >>> 26, B = u & 67108863, q = Math.min(d, t.length - 1), E = Math.max(0, d - o.length + 1); E <= q; E++) {
          var k = d - E | 0;
          h = o.words[k] | 0, b = t.words[E] | 0, m = h * b + B, l += m / 67108864 | 0, B = m & 67108863;
        }
        a.words[d] = B | 0, u = l | 0;
      }
      return u !== 0 ? a.words[d] = u | 0 : a.length--, a.strip();
    }
    var R = function(t, a, c) {
      var h = t.words, b = a.words, m = c.words, y = 0, u, d, l, B = h[0] | 0, q = B & 8191, E = B >>> 13, k = h[1] | 0, D = k & 8191, K = k >>> 13, tt = h[2] | 0, j = tt & 8191, W = tt >>> 13, zr = h[3] | 0, Z = zr & 8191, V = zr >>> 13, Rr = h[4] | 0, Y = Rr & 8191, G = Rr >>> 13, Br = h[5] | 0, Q = Br & 8191, ee = Br >>> 13, Pr = h[6] | 0, te = Pr & 8191, re = Pr >>> 13, qr = h[7] | 0, fe = qr & 8191, ae = qr >>> 13, $r = h[8] | 0, ie = $r & 8191, de = $r >>> 13, Er = h[9] | 0, ne = Er & 8191, se = Er >>> 13, Nr = b[0] | 0, ce = Nr & 8191, he = Nr >>> 13, Or = b[1] | 0, oe = Or & 8191, ue = Or >>> 13, kr = b[2] | 0, be = kr & 8191, le = kr >>> 13, Lr = b[3] | 0, ve = Lr & 8191, pe = Lr >>> 13, Cr = b[4] | 0, xe = Cr & 8191, me = Cr >>> 13, Hr = b[5] | 0, ye = Hr & 8191, ge = Hr >>> 13, Tr = b[6] | 0, Me = Tr & 8191, we = Tr >>> 13, Dr = b[7] | 0, _e = Dr & 8191, Se = Dr >>> 13, Jr = b[8] | 0, Ae = Jr & 8191, Ie = Jr >>> 13, Kr = b[9] | 0, Fe = Kr & 8191, ze = Kr >>> 13;
      c.negative = t.negative ^ a.negative, c.length = 19, u = Math.imul(q, ce), d = Math.imul(q, he), d = d + Math.imul(E, ce) | 0, l = Math.imul(E, he);
      var Kt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, u = Math.imul(D, ce), d = Math.imul(D, he), d = d + Math.imul(K, ce) | 0, l = Math.imul(K, he), u = u + Math.imul(q, oe) | 0, d = d + Math.imul(q, ue) | 0, d = d + Math.imul(E, oe) | 0, l = l + Math.imul(E, ue) | 0;
      var jt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, u = Math.imul(j, ce), d = Math.imul(j, he), d = d + Math.imul(W, ce) | 0, l = Math.imul(W, he), u = u + Math.imul(D, oe) | 0, d = d + Math.imul(D, ue) | 0, d = d + Math.imul(K, oe) | 0, l = l + Math.imul(K, ue) | 0, u = u + Math.imul(q, be) | 0, d = d + Math.imul(q, le) | 0, d = d + Math.imul(E, be) | 0, l = l + Math.imul(E, le) | 0;
      var Ut = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, u = Math.imul(Z, ce), d = Math.imul(Z, he), d = d + Math.imul(V, ce) | 0, l = Math.imul(V, he), u = u + Math.imul(j, oe) | 0, d = d + Math.imul(j, ue) | 0, d = d + Math.imul(W, oe) | 0, l = l + Math.imul(W, ue) | 0, u = u + Math.imul(D, be) | 0, d = d + Math.imul(D, le) | 0, d = d + Math.imul(K, be) | 0, l = l + Math.imul(K, le) | 0, u = u + Math.imul(q, ve) | 0, d = d + Math.imul(q, pe) | 0, d = d + Math.imul(E, ve) | 0, l = l + Math.imul(E, pe) | 0;
      var Wt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863, u = Math.imul(Y, ce), d = Math.imul(Y, he), d = d + Math.imul(G, ce) | 0, l = Math.imul(G, he), u = u + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, ue) | 0, d = d + Math.imul(V, oe) | 0, l = l + Math.imul(V, ue) | 0, u = u + Math.imul(j, be) | 0, d = d + Math.imul(j, le) | 0, d = d + Math.imul(W, be) | 0, l = l + Math.imul(W, le) | 0, u = u + Math.imul(D, ve) | 0, d = d + Math.imul(D, pe) | 0, d = d + Math.imul(K, ve) | 0, l = l + Math.imul(K, pe) | 0, u = u + Math.imul(q, xe) | 0, d = d + Math.imul(q, me) | 0, d = d + Math.imul(E, xe) | 0, l = l + Math.imul(E, me) | 0;
      var Xt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, u = Math.imul(Q, ce), d = Math.imul(Q, he), d = d + Math.imul(ee, ce) | 0, l = Math.imul(ee, he), u = u + Math.imul(Y, oe) | 0, d = d + Math.imul(Y, ue) | 0, d = d + Math.imul(G, oe) | 0, l = l + Math.imul(G, ue) | 0, u = u + Math.imul(Z, be) | 0, d = d + Math.imul(Z, le) | 0, d = d + Math.imul(V, be) | 0, l = l + Math.imul(V, le) | 0, u = u + Math.imul(j, ve) | 0, d = d + Math.imul(j, pe) | 0, d = d + Math.imul(W, ve) | 0, l = l + Math.imul(W, pe) | 0, u = u + Math.imul(D, xe) | 0, d = d + Math.imul(D, me) | 0, d = d + Math.imul(K, xe) | 0, l = l + Math.imul(K, me) | 0, u = u + Math.imul(q, ye) | 0, d = d + Math.imul(q, ge) | 0, d = d + Math.imul(E, ye) | 0, l = l + Math.imul(E, ge) | 0;
      var Zt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, u = Math.imul(te, ce), d = Math.imul(te, he), d = d + Math.imul(re, ce) | 0, l = Math.imul(re, he), u = u + Math.imul(Q, oe) | 0, d = d + Math.imul(Q, ue) | 0, d = d + Math.imul(ee, oe) | 0, l = l + Math.imul(ee, ue) | 0, u = u + Math.imul(Y, be) | 0, d = d + Math.imul(Y, le) | 0, d = d + Math.imul(G, be) | 0, l = l + Math.imul(G, le) | 0, u = u + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, pe) | 0, d = d + Math.imul(V, ve) | 0, l = l + Math.imul(V, pe) | 0, u = u + Math.imul(j, xe) | 0, d = d + Math.imul(j, me) | 0, d = d + Math.imul(W, xe) | 0, l = l + Math.imul(W, me) | 0, u = u + Math.imul(D, ye) | 0, d = d + Math.imul(D, ge) | 0, d = d + Math.imul(K, ye) | 0, l = l + Math.imul(K, ge) | 0, u = u + Math.imul(q, Me) | 0, d = d + Math.imul(q, we) | 0, d = d + Math.imul(E, Me) | 0, l = l + Math.imul(E, we) | 0;
      var Vt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, u = Math.imul(fe, ce), d = Math.imul(fe, he), d = d + Math.imul(ae, ce) | 0, l = Math.imul(ae, he), u = u + Math.imul(te, oe) | 0, d = d + Math.imul(te, ue) | 0, d = d + Math.imul(re, oe) | 0, l = l + Math.imul(re, ue) | 0, u = u + Math.imul(Q, be) | 0, d = d + Math.imul(Q, le) | 0, d = d + Math.imul(ee, be) | 0, l = l + Math.imul(ee, le) | 0, u = u + Math.imul(Y, ve) | 0, d = d + Math.imul(Y, pe) | 0, d = d + Math.imul(G, ve) | 0, l = l + Math.imul(G, pe) | 0, u = u + Math.imul(Z, xe) | 0, d = d + Math.imul(Z, me) | 0, d = d + Math.imul(V, xe) | 0, l = l + Math.imul(V, me) | 0, u = u + Math.imul(j, ye) | 0, d = d + Math.imul(j, ge) | 0, d = d + Math.imul(W, ye) | 0, l = l + Math.imul(W, ge) | 0, u = u + Math.imul(D, Me) | 0, d = d + Math.imul(D, we) | 0, d = d + Math.imul(K, Me) | 0, l = l + Math.imul(K, we) | 0, u = u + Math.imul(q, _e) | 0, d = d + Math.imul(q, Se) | 0, d = d + Math.imul(E, _e) | 0, l = l + Math.imul(E, Se) | 0;
      var Yt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Yt >>> 26) | 0, Yt &= 67108863, u = Math.imul(ie, ce), d = Math.imul(ie, he), d = d + Math.imul(de, ce) | 0, l = Math.imul(de, he), u = u + Math.imul(fe, oe) | 0, d = d + Math.imul(fe, ue) | 0, d = d + Math.imul(ae, oe) | 0, l = l + Math.imul(ae, ue) | 0, u = u + Math.imul(te, be) | 0, d = d + Math.imul(te, le) | 0, d = d + Math.imul(re, be) | 0, l = l + Math.imul(re, le) | 0, u = u + Math.imul(Q, ve) | 0, d = d + Math.imul(Q, pe) | 0, d = d + Math.imul(ee, ve) | 0, l = l + Math.imul(ee, pe) | 0, u = u + Math.imul(Y, xe) | 0, d = d + Math.imul(Y, me) | 0, d = d + Math.imul(G, xe) | 0, l = l + Math.imul(G, me) | 0, u = u + Math.imul(Z, ye) | 0, d = d + Math.imul(Z, ge) | 0, d = d + Math.imul(V, ye) | 0, l = l + Math.imul(V, ge) | 0, u = u + Math.imul(j, Me) | 0, d = d + Math.imul(j, we) | 0, d = d + Math.imul(W, Me) | 0, l = l + Math.imul(W, we) | 0, u = u + Math.imul(D, _e) | 0, d = d + Math.imul(D, Se) | 0, d = d + Math.imul(K, _e) | 0, l = l + Math.imul(K, Se) | 0, u = u + Math.imul(q, Ae) | 0, d = d + Math.imul(q, Ie) | 0, d = d + Math.imul(E, Ae) | 0, l = l + Math.imul(E, Ie) | 0;
      var Gt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, u = Math.imul(ne, ce), d = Math.imul(ne, he), d = d + Math.imul(se, ce) | 0, l = Math.imul(se, he), u = u + Math.imul(ie, oe) | 0, d = d + Math.imul(ie, ue) | 0, d = d + Math.imul(de, oe) | 0, l = l + Math.imul(de, ue) | 0, u = u + Math.imul(fe, be) | 0, d = d + Math.imul(fe, le) | 0, d = d + Math.imul(ae, be) | 0, l = l + Math.imul(ae, le) | 0, u = u + Math.imul(te, ve) | 0, d = d + Math.imul(te, pe) | 0, d = d + Math.imul(re, ve) | 0, l = l + Math.imul(re, pe) | 0, u = u + Math.imul(Q, xe) | 0, d = d + Math.imul(Q, me) | 0, d = d + Math.imul(ee, xe) | 0, l = l + Math.imul(ee, me) | 0, u = u + Math.imul(Y, ye) | 0, d = d + Math.imul(Y, ge) | 0, d = d + Math.imul(G, ye) | 0, l = l + Math.imul(G, ge) | 0, u = u + Math.imul(Z, Me) | 0, d = d + Math.imul(Z, we) | 0, d = d + Math.imul(V, Me) | 0, l = l + Math.imul(V, we) | 0, u = u + Math.imul(j, _e) | 0, d = d + Math.imul(j, Se) | 0, d = d + Math.imul(W, _e) | 0, l = l + Math.imul(W, Se) | 0, u = u + Math.imul(D, Ae) | 0, d = d + Math.imul(D, Ie) | 0, d = d + Math.imul(K, Ae) | 0, l = l + Math.imul(K, Ie) | 0, u = u + Math.imul(q, Fe) | 0, d = d + Math.imul(q, ze) | 0, d = d + Math.imul(E, Fe) | 0, l = l + Math.imul(E, ze) | 0;
      var Qt = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, u = Math.imul(ne, oe), d = Math.imul(ne, ue), d = d + Math.imul(se, oe) | 0, l = Math.imul(se, ue), u = u + Math.imul(ie, be) | 0, d = d + Math.imul(ie, le) | 0, d = d + Math.imul(de, be) | 0, l = l + Math.imul(de, le) | 0, u = u + Math.imul(fe, ve) | 0, d = d + Math.imul(fe, pe) | 0, d = d + Math.imul(ae, ve) | 0, l = l + Math.imul(ae, pe) | 0, u = u + Math.imul(te, xe) | 0, d = d + Math.imul(te, me) | 0, d = d + Math.imul(re, xe) | 0, l = l + Math.imul(re, me) | 0, u = u + Math.imul(Q, ye) | 0, d = d + Math.imul(Q, ge) | 0, d = d + Math.imul(ee, ye) | 0, l = l + Math.imul(ee, ge) | 0, u = u + Math.imul(Y, Me) | 0, d = d + Math.imul(Y, we) | 0, d = d + Math.imul(G, Me) | 0, l = l + Math.imul(G, we) | 0, u = u + Math.imul(Z, _e) | 0, d = d + Math.imul(Z, Se) | 0, d = d + Math.imul(V, _e) | 0, l = l + Math.imul(V, Se) | 0, u = u + Math.imul(j, Ae) | 0, d = d + Math.imul(j, Ie) | 0, d = d + Math.imul(W, Ae) | 0, l = l + Math.imul(W, Ie) | 0, u = u + Math.imul(D, Fe) | 0, d = d + Math.imul(D, ze) | 0, d = d + Math.imul(K, Fe) | 0, l = l + Math.imul(K, ze) | 0;
      var er = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, u = Math.imul(ne, be), d = Math.imul(ne, le), d = d + Math.imul(se, be) | 0, l = Math.imul(se, le), u = u + Math.imul(ie, ve) | 0, d = d + Math.imul(ie, pe) | 0, d = d + Math.imul(de, ve) | 0, l = l + Math.imul(de, pe) | 0, u = u + Math.imul(fe, xe) | 0, d = d + Math.imul(fe, me) | 0, d = d + Math.imul(ae, xe) | 0, l = l + Math.imul(ae, me) | 0, u = u + Math.imul(te, ye) | 0, d = d + Math.imul(te, ge) | 0, d = d + Math.imul(re, ye) | 0, l = l + Math.imul(re, ge) | 0, u = u + Math.imul(Q, Me) | 0, d = d + Math.imul(Q, we) | 0, d = d + Math.imul(ee, Me) | 0, l = l + Math.imul(ee, we) | 0, u = u + Math.imul(Y, _e) | 0, d = d + Math.imul(Y, Se) | 0, d = d + Math.imul(G, _e) | 0, l = l + Math.imul(G, Se) | 0, u = u + Math.imul(Z, Ae) | 0, d = d + Math.imul(Z, Ie) | 0, d = d + Math.imul(V, Ae) | 0, l = l + Math.imul(V, Ie) | 0, u = u + Math.imul(j, Fe) | 0, d = d + Math.imul(j, ze) | 0, d = d + Math.imul(W, Fe) | 0, l = l + Math.imul(W, ze) | 0;
      var tr = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, u = Math.imul(ne, ve), d = Math.imul(ne, pe), d = d + Math.imul(se, ve) | 0, l = Math.imul(se, pe), u = u + Math.imul(ie, xe) | 0, d = d + Math.imul(ie, me) | 0, d = d + Math.imul(de, xe) | 0, l = l + Math.imul(de, me) | 0, u = u + Math.imul(fe, ye) | 0, d = d + Math.imul(fe, ge) | 0, d = d + Math.imul(ae, ye) | 0, l = l + Math.imul(ae, ge) | 0, u = u + Math.imul(te, Me) | 0, d = d + Math.imul(te, we) | 0, d = d + Math.imul(re, Me) | 0, l = l + Math.imul(re, we) | 0, u = u + Math.imul(Q, _e) | 0, d = d + Math.imul(Q, Se) | 0, d = d + Math.imul(ee, _e) | 0, l = l + Math.imul(ee, Se) | 0, u = u + Math.imul(Y, Ae) | 0, d = d + Math.imul(Y, Ie) | 0, d = d + Math.imul(G, Ae) | 0, l = l + Math.imul(G, Ie) | 0, u = u + Math.imul(Z, Fe) | 0, d = d + Math.imul(Z, ze) | 0, d = d + Math.imul(V, Fe) | 0, l = l + Math.imul(V, ze) | 0;
      var rr = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, u = Math.imul(ne, xe), d = Math.imul(ne, me), d = d + Math.imul(se, xe) | 0, l = Math.imul(se, me), u = u + Math.imul(ie, ye) | 0, d = d + Math.imul(ie, ge) | 0, d = d + Math.imul(de, ye) | 0, l = l + Math.imul(de, ge) | 0, u = u + Math.imul(fe, Me) | 0, d = d + Math.imul(fe, we) | 0, d = d + Math.imul(ae, Me) | 0, l = l + Math.imul(ae, we) | 0, u = u + Math.imul(te, _e) | 0, d = d + Math.imul(te, Se) | 0, d = d + Math.imul(re, _e) | 0, l = l + Math.imul(re, Se) | 0, u = u + Math.imul(Q, Ae) | 0, d = d + Math.imul(Q, Ie) | 0, d = d + Math.imul(ee, Ae) | 0, l = l + Math.imul(ee, Ie) | 0, u = u + Math.imul(Y, Fe) | 0, d = d + Math.imul(Y, ze) | 0, d = d + Math.imul(G, Fe) | 0, l = l + Math.imul(G, ze) | 0;
      var fr = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, u = Math.imul(ne, ye), d = Math.imul(ne, ge), d = d + Math.imul(se, ye) | 0, l = Math.imul(se, ge), u = u + Math.imul(ie, Me) | 0, d = d + Math.imul(ie, we) | 0, d = d + Math.imul(de, Me) | 0, l = l + Math.imul(de, we) | 0, u = u + Math.imul(fe, _e) | 0, d = d + Math.imul(fe, Se) | 0, d = d + Math.imul(ae, _e) | 0, l = l + Math.imul(ae, Se) | 0, u = u + Math.imul(te, Ae) | 0, d = d + Math.imul(te, Ie) | 0, d = d + Math.imul(re, Ae) | 0, l = l + Math.imul(re, Ie) | 0, u = u + Math.imul(Q, Fe) | 0, d = d + Math.imul(Q, ze) | 0, d = d + Math.imul(ee, Fe) | 0, l = l + Math.imul(ee, ze) | 0;
      var ar = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, u = Math.imul(ne, Me), d = Math.imul(ne, we), d = d + Math.imul(se, Me) | 0, l = Math.imul(se, we), u = u + Math.imul(ie, _e) | 0, d = d + Math.imul(ie, Se) | 0, d = d + Math.imul(de, _e) | 0, l = l + Math.imul(de, Se) | 0, u = u + Math.imul(fe, Ae) | 0, d = d + Math.imul(fe, Ie) | 0, d = d + Math.imul(ae, Ae) | 0, l = l + Math.imul(ae, Ie) | 0, u = u + Math.imul(te, Fe) | 0, d = d + Math.imul(te, ze) | 0, d = d + Math.imul(re, Fe) | 0, l = l + Math.imul(re, ze) | 0;
      var ir = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, u = Math.imul(ne, _e), d = Math.imul(ne, Se), d = d + Math.imul(se, _e) | 0, l = Math.imul(se, Se), u = u + Math.imul(ie, Ae) | 0, d = d + Math.imul(ie, Ie) | 0, d = d + Math.imul(de, Ae) | 0, l = l + Math.imul(de, Ie) | 0, u = u + Math.imul(fe, Fe) | 0, d = d + Math.imul(fe, ze) | 0, d = d + Math.imul(ae, Fe) | 0, l = l + Math.imul(ae, ze) | 0;
      var dr = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, u = Math.imul(ne, Ae), d = Math.imul(ne, Ie), d = d + Math.imul(se, Ae) | 0, l = Math.imul(se, Ie), u = u + Math.imul(ie, Fe) | 0, d = d + Math.imul(ie, ze) | 0, d = d + Math.imul(de, Fe) | 0, l = l + Math.imul(de, ze) | 0;
      var nr = (y + u | 0) + ((d & 8191) << 13) | 0;
      y = (l + (d >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, u = Math.imul(ne, Fe), d = Math.imul(ne, ze), d = d + Math.imul(se, Fe) | 0, l = Math.imul(se, ze);
      var sr = (y + u | 0) + ((d & 8191) << 13) | 0;
      return y = (l + (d >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, m[0] = Kt, m[1] = jt, m[2] = Ut, m[3] = Wt, m[4] = Xt, m[5] = Zt, m[6] = Vt, m[7] = Yt, m[8] = Gt, m[9] = Qt, m[10] = er, m[11] = tr, m[12] = rr, m[13] = fr, m[14] = ar, m[15] = ir, m[16] = dr, m[17] = nr, m[18] = sr, y !== 0 && (m[19] = y, c.length++), c;
    };
    Math.imul || (R = F);
    function O(o, t, a) {
      a.negative = t.negative ^ o.negative, a.length = o.length + t.length;
      for (var c = 0, h = 0, b = 0; b < a.length - 1; b++) {
        var m = h;
        h = 0;
        for (var y = c & 67108863, u = Math.min(b, t.length - 1), d = Math.max(0, b - o.length + 1); d <= u; d++) {
          var l = b - d, B = o.words[l] | 0, q = t.words[d] | 0, E = B * q, k = E & 67108863;
          m = m + (E / 67108864 | 0) | 0, k = k + y | 0, y = k & 67108863, m = m + (k >>> 26) | 0, h += m >>> 26, m &= 67108863;
        }
        a.words[b] = y, c = m, m = h;
      }
      return c !== 0 ? a.words[b] = c : a.length--, a.strip();
    }
    function N(o, t, a) {
      var c = new L();
      return c.mulp(o, t, a);
    }
    n.prototype.mulTo = function(t, a) {
      var c, h = this.length + t.length;
      return this.length === 10 && t.length === 10 ? c = R(this, t, a) : h < 63 ? c = F(this, t, a) : h < 1024 ? c = O(this, t, a) : c = N(this, t, a), c;
    };
    function L(o, t) {
      this.x = o, this.y = t;
    }
    L.prototype.makeRBT = function(t) {
      for (var a = new Array(t), c = n.prototype._countBits(t) - 1, h = 0; h < t; h++)
        a[h] = this.revBin(h, c, t);
      return a;
    }, L.prototype.revBin = function(t, a, c) {
      if (t === 0 || t === c - 1) return t;
      for (var h = 0, b = 0; b < a; b++)
        h |= (t & 1) << a - b - 1, t >>= 1;
      return h;
    }, L.prototype.permute = function(t, a, c, h, b, m) {
      for (var y = 0; y < m; y++)
        h[y] = a[t[y]], b[y] = c[t[y]];
    }, L.prototype.transform = function(t, a, c, h, b, m) {
      this.permute(m, t, a, c, h, b);
      for (var y = 1; y < b; y <<= 1)
        for (var u = y << 1, d = Math.cos(2 * Math.PI / u), l = Math.sin(2 * Math.PI / u), B = 0; B < b; B += u)
          for (var q = d, E = l, k = 0; k < y; k++) {
            var D = c[B + k], K = h[B + k], tt = c[B + k + y], j = h[B + k + y], W = q * tt - E * j;
            j = q * j + E * tt, tt = W, c[B + k] = D + tt, h[B + k] = K + j, c[B + k + y] = D - tt, h[B + k + y] = K - j, k !== u && (W = d * q - l * E, E = d * E + l * q, q = W);
          }
    }, L.prototype.guessLen13b = function(t, a) {
      var c = Math.max(a, t) | 1, h = c & 1, b = 0;
      for (c = c / 2 | 0; c; c = c >>> 1)
        b++;
      return 1 << b + 1 + h;
    }, L.prototype.conjugate = function(t, a, c) {
      if (!(c <= 1))
        for (var h = 0; h < c / 2; h++) {
          var b = t[h];
          t[h] = t[c - h - 1], t[c - h - 1] = b, b = a[h], a[h] = -a[c - h - 1], a[c - h - 1] = -b;
        }
    }, L.prototype.normalize13b = function(t, a) {
      for (var c = 0, h = 0; h < a / 2; h++) {
        var b = Math.round(t[2 * h + 1] / a) * 8192 + Math.round(t[2 * h] / a) + c;
        t[h] = b & 67108863, b < 67108864 ? c = 0 : c = b / 67108864 | 0;
      }
      return t;
    }, L.prototype.convert13b = function(t, a, c, h) {
      for (var b = 0, m = 0; m < a; m++)
        b = b + (t[m] | 0), c[2 * m] = b & 8191, b = b >>> 13, c[2 * m + 1] = b & 8191, b = b >>> 13;
      for (m = 2 * a; m < h; ++m)
        c[m] = 0;
      i(b === 0), i((b & -8192) === 0);
    }, L.prototype.stub = function(t) {
      for (var a = new Array(t), c = 0; c < t; c++)
        a[c] = 0;
      return a;
    }, L.prototype.mulp = function(t, a, c) {
      var h = 2 * this.guessLen13b(t.length, a.length), b = this.makeRBT(h), m = this.stub(h), y = new Array(h), u = new Array(h), d = new Array(h), l = new Array(h), B = new Array(h), q = new Array(h), E = c.words;
      E.length = h, this.convert13b(t.words, t.length, y, h), this.convert13b(a.words, a.length, l, h), this.transform(y, m, u, d, h, b), this.transform(l, m, B, q, h, b);
      for (var k = 0; k < h; k++) {
        var D = u[k] * B[k] - d[k] * q[k];
        d[k] = u[k] * q[k] + d[k] * B[k], u[k] = D;
      }
      return this.conjugate(u, d, h), this.transform(u, d, E, m, h, b), this.conjugate(E, m, h), this.normalize13b(E, h), c.negative = t.negative ^ a.negative, c.length = t.length + a.length, c.strip();
    }, n.prototype.mul = function(t) {
      var a = new n(null);
      return a.words = new Array(this.length + t.length), this.mulTo(t, a);
    }, n.prototype.mulf = function(t) {
      var a = new n(null);
      return a.words = new Array(this.length + t.length), N(this, t, a);
    }, n.prototype.imul = function(t) {
      return this.clone().mulTo(t, this);
    }, n.prototype.imuln = function(t) {
      i(typeof t == "number"), i(t < 67108864);
      for (var a = 0, c = 0; c < this.length; c++) {
        var h = (this.words[c] | 0) * t, b = (h & 67108863) + (a & 67108863);
        a >>= 26, a += h / 67108864 | 0, a += b >>> 26, this.words[c] = b & 67108863;
      }
      return a !== 0 && (this.words[c] = a, this.length++), this;
    }, n.prototype.muln = function(t) {
      return this.clone().imuln(t);
    }, n.prototype.sqr = function() {
      return this.mul(this);
    }, n.prototype.isqr = function() {
      return this.imul(this.clone());
    }, n.prototype.pow = function(t) {
      var a = S(t);
      if (a.length === 0) return new n(1);
      for (var c = this, h = 0; h < a.length && a[h] === 0; h++, c = c.sqr())
        ;
      if (++h < a.length)
        for (var b = c.sqr(); h < a.length; h++, b = b.sqr())
          a[h] !== 0 && (c = c.mul(b));
      return c;
    }, n.prototype.iushln = function(t) {
      i(typeof t == "number" && t >= 0);
      var a = t % 26, c = (t - a) / 26, h = 67108863 >>> 26 - a << 26 - a, b;
      if (a !== 0) {
        var m = 0;
        for (b = 0; b < this.length; b++) {
          var y = this.words[b] & h, u = (this.words[b] | 0) - y << a;
          this.words[b] = u | m, m = y >>> 26 - a;
        }
        m && (this.words[b] = m, this.length++);
      }
      if (c !== 0) {
        for (b = this.length - 1; b >= 0; b--)
          this.words[b + c] = this.words[b];
        for (b = 0; b < c; b++)
          this.words[b] = 0;
        this.length += c;
      }
      return this.strip();
    }, n.prototype.ishln = function(t) {
      return i(this.negative === 0), this.iushln(t);
    }, n.prototype.iushrn = function(t, a, c) {
      i(typeof t == "number" && t >= 0);
      var h;
      a ? h = (a - a % 26) / 26 : h = 0;
      var b = t % 26, m = Math.min((t - b) / 26, this.length), y = 67108863 ^ 67108863 >>> b << b, u = c;
      if (h -= m, h = Math.max(0, h), u) {
        for (var d = 0; d < m; d++)
          u.words[d] = this.words[d];
        u.length = m;
      }
      if (m !== 0) if (this.length > m)
        for (this.length -= m, d = 0; d < this.length; d++)
          this.words[d] = this.words[d + m];
      else
        this.words[0] = 0, this.length = 1;
      var l = 0;
      for (d = this.length - 1; d >= 0 && (l !== 0 || d >= h); d--) {
        var B = this.words[d] | 0;
        this.words[d] = l << 26 - b | B >>> b, l = B & y;
      }
      return u && l !== 0 && (u.words[u.length++] = l), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, n.prototype.ishrn = function(t, a, c) {
      return i(this.negative === 0), this.iushrn(t, a, c);
    }, n.prototype.shln = function(t) {
      return this.clone().ishln(t);
    }, n.prototype.ushln = function(t) {
      return this.clone().iushln(t);
    }, n.prototype.shrn = function(t) {
      return this.clone().ishrn(t);
    }, n.prototype.ushrn = function(t) {
      return this.clone().iushrn(t);
    }, n.prototype.testn = function(t) {
      i(typeof t == "number" && t >= 0);
      var a = t % 26, c = (t - a) / 26, h = 1 << a;
      if (this.length <= c) return !1;
      var b = this.words[c];
      return !!(b & h);
    }, n.prototype.imaskn = function(t) {
      i(typeof t == "number" && t >= 0);
      var a = t % 26, c = (t - a) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c)
        return this;
      if (a !== 0 && c++, this.length = Math.min(c, this.length), a !== 0) {
        var h = 67108863 ^ 67108863 >>> a << a;
        this.words[this.length - 1] &= h;
      }
      return this.strip();
    }, n.prototype.maskn = function(t) {
      return this.clone().imaskn(t);
    }, n.prototype.iaddn = function(t) {
      return i(typeof t == "number"), i(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, n.prototype._iaddn = function(t) {
      this.words[0] += t;
      for (var a = 0; a < this.length && this.words[a] >= 67108864; a++)
        this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
      return this.length = Math.max(this.length, a + 1), this;
    }, n.prototype.isubn = function(t) {
      if (i(typeof t == "number"), i(t < 67108864), t < 0) return this.iaddn(-t);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var a = 0; a < this.length && this.words[a] < 0; a++)
          this.words[a] += 67108864, this.words[a + 1] -= 1;
      return this.strip();
    }, n.prototype.addn = function(t) {
      return this.clone().iaddn(t);
    }, n.prototype.subn = function(t) {
      return this.clone().isubn(t);
    }, n.prototype.iabs = function() {
      return this.negative = 0, this;
    }, n.prototype.abs = function() {
      return this.clone().iabs();
    }, n.prototype._ishlnsubmul = function(t, a, c) {
      var h = t.length + c, b;
      this._expand(h);
      var m, y = 0;
      for (b = 0; b < t.length; b++) {
        m = (this.words[b + c] | 0) + y;
        var u = (t.words[b] | 0) * a;
        m -= u & 67108863, y = (m >> 26) - (u / 67108864 | 0), this.words[b + c] = m & 67108863;
      }
      for (; b < this.length - c; b++)
        m = (this.words[b + c] | 0) + y, y = m >> 26, this.words[b + c] = m & 67108863;
      if (y === 0) return this.strip();
      for (i(y === -1), y = 0, b = 0; b < this.length; b++)
        m = -(this.words[b] | 0) + y, y = m >> 26, this.words[b] = m & 67108863;
      return this.negative = 1, this.strip();
    }, n.prototype._wordDiv = function(t, a) {
      var c = this.length - t.length, h = this.clone(), b = t, m = b.words[b.length - 1] | 0, y = this._countBits(m);
      c = 26 - y, c !== 0 && (b = b.ushln(c), h.iushln(c), m = b.words[b.length - 1] | 0);
      var u = h.length - b.length, d;
      if (a !== "mod") {
        d = new n(null), d.length = u + 1, d.words = new Array(d.length);
        for (var l = 0; l < d.length; l++)
          d.words[l] = 0;
      }
      var B = h.clone()._ishlnsubmul(b, 1, u);
      B.negative === 0 && (h = B, d && (d.words[u] = 1));
      for (var q = u - 1; q >= 0; q--) {
        var E = (h.words[b.length + q] | 0) * 67108864 + (h.words[b.length + q - 1] | 0);
        for (E = Math.min(E / m | 0, 67108863), h._ishlnsubmul(b, E, q); h.negative !== 0; )
          E--, h.negative = 0, h._ishlnsubmul(b, 1, q), h.isZero() || (h.negative ^= 1);
        d && (d.words[q] = E);
      }
      return d && d.strip(), h.strip(), a !== "div" && c !== 0 && h.iushrn(c), {
        div: d || null,
        mod: h
      };
    }, n.prototype.divmod = function(t, a, c) {
      if (i(!t.isZero()), this.isZero())
        return {
          div: new n(0),
          mod: new n(0)
        };
      var h, b, m;
      return this.negative !== 0 && t.negative === 0 ? (m = this.neg().divmod(t, a), a !== "mod" && (h = m.div.neg()), a !== "div" && (b = m.mod.neg(), c && b.negative !== 0 && b.iadd(t)), {
        div: h,
        mod: b
      }) : this.negative === 0 && t.negative !== 0 ? (m = this.divmod(t.neg(), a), a !== "mod" && (h = m.div.neg()), {
        div: h,
        mod: m.mod
      }) : this.negative & t.negative ? (m = this.neg().divmod(t.neg(), a), a !== "div" && (b = m.mod.neg(), c && b.negative !== 0 && b.isub(t)), {
        div: m.div,
        mod: b
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new n(0),
        mod: this
      } : t.length === 1 ? a === "div" ? {
        div: this.divn(t.words[0]),
        mod: null
      } : a === "mod" ? {
        div: null,
        mod: new n(this.modn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new n(this.modn(t.words[0]))
      } : this._wordDiv(t, a);
    }, n.prototype.div = function(t) {
      return this.divmod(t, "div", !1).div;
    }, n.prototype.mod = function(t) {
      return this.divmod(t, "mod", !1).mod;
    }, n.prototype.umod = function(t) {
      return this.divmod(t, "mod", !0).mod;
    }, n.prototype.divRound = function(t) {
      var a = this.divmod(t);
      if (a.mod.isZero()) return a.div;
      var c = a.div.negative !== 0 ? a.mod.isub(t) : a.mod, h = t.ushrn(1), b = t.andln(1), m = c.cmp(h);
      return m < 0 || b === 1 && m === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
    }, n.prototype.modn = function(t) {
      i(t <= 67108863);
      for (var a = (1 << 26) % t, c = 0, h = this.length - 1; h >= 0; h--)
        c = (a * c + (this.words[h] | 0)) % t;
      return c;
    }, n.prototype.idivn = function(t) {
      i(t <= 67108863);
      for (var a = 0, c = this.length - 1; c >= 0; c--) {
        var h = (this.words[c] | 0) + a * 67108864;
        this.words[c] = h / t | 0, a = h % t;
      }
      return this.strip();
    }, n.prototype.divn = function(t) {
      return this.clone().idivn(t);
    }, n.prototype.egcd = function(t) {
      i(t.negative === 0), i(!t.isZero());
      var a = this, c = t.clone();
      a.negative !== 0 ? a = a.umod(t) : a = a.clone();
      for (var h = new n(1), b = new n(0), m = new n(0), y = new n(1), u = 0; a.isEven() && c.isEven(); )
        a.iushrn(1), c.iushrn(1), ++u;
      for (var d = c.clone(), l = a.clone(); !a.isZero(); ) {
        for (var B = 0, q = 1; !(a.words[0] & q) && B < 26; ++B, q <<= 1) ;
        if (B > 0)
          for (a.iushrn(B); B-- > 0; )
            (h.isOdd() || b.isOdd()) && (h.iadd(d), b.isub(l)), h.iushrn(1), b.iushrn(1);
        for (var E = 0, k = 1; !(c.words[0] & k) && E < 26; ++E, k <<= 1) ;
        if (E > 0)
          for (c.iushrn(E); E-- > 0; )
            (m.isOdd() || y.isOdd()) && (m.iadd(d), y.isub(l)), m.iushrn(1), y.iushrn(1);
        a.cmp(c) >= 0 ? (a.isub(c), h.isub(m), b.isub(y)) : (c.isub(a), m.isub(h), y.isub(b));
      }
      return {
        a: m,
        b: y,
        gcd: c.iushln(u)
      };
    }, n.prototype._invmp = function(t) {
      i(t.negative === 0), i(!t.isZero());
      var a = this, c = t.clone();
      a.negative !== 0 ? a = a.umod(t) : a = a.clone();
      for (var h = new n(1), b = new n(0), m = c.clone(); a.cmpn(1) > 0 && c.cmpn(1) > 0; ) {
        for (var y = 0, u = 1; !(a.words[0] & u) && y < 26; ++y, u <<= 1) ;
        if (y > 0)
          for (a.iushrn(y); y-- > 0; )
            h.isOdd() && h.iadd(m), h.iushrn(1);
        for (var d = 0, l = 1; !(c.words[0] & l) && d < 26; ++d, l <<= 1) ;
        if (d > 0)
          for (c.iushrn(d); d-- > 0; )
            b.isOdd() && b.iadd(m), b.iushrn(1);
        a.cmp(c) >= 0 ? (a.isub(c), h.isub(b)) : (c.isub(a), b.isub(h));
      }
      var B;
      return a.cmpn(1) === 0 ? B = h : B = b, B.cmpn(0) < 0 && B.iadd(t), B;
    }, n.prototype.gcd = function(t) {
      if (this.isZero()) return t.abs();
      if (t.isZero()) return this.abs();
      var a = this.clone(), c = t.clone();
      a.negative = 0, c.negative = 0;
      for (var h = 0; a.isEven() && c.isEven(); h++)
        a.iushrn(1), c.iushrn(1);
      do {
        for (; a.isEven(); )
          a.iushrn(1);
        for (; c.isEven(); )
          c.iushrn(1);
        var b = a.cmp(c);
        if (b < 0) {
          var m = a;
          a = c, c = m;
        } else if (b === 0 || c.cmpn(1) === 0)
          break;
        a.isub(c);
      } while (!0);
      return c.iushln(h);
    }, n.prototype.invm = function(t) {
      return this.egcd(t).a.umod(t);
    }, n.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, n.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, n.prototype.andln = function(t) {
      return this.words[0] & t;
    }, n.prototype.bincn = function(t) {
      i(typeof t == "number");
      var a = t % 26, c = (t - a) / 26, h = 1 << a;
      if (this.length <= c)
        return this._expand(c + 1), this.words[c] |= h, this;
      for (var b = h, m = c; b !== 0 && m < this.length; m++) {
        var y = this.words[m] | 0;
        y += b, b = y >>> 26, y &= 67108863, this.words[m] = y;
      }
      return b !== 0 && (this.words[m] = b, this.length++), this;
    }, n.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, n.prototype.cmpn = function(t) {
      var a = t < 0;
      if (this.negative !== 0 && !a) return -1;
      if (this.negative === 0 && a) return 1;
      this.strip();
      var c;
      if (this.length > 1)
        c = 1;
      else {
        a && (t = -t), i(t <= 67108863, "Number is too big");
        var h = this.words[0] | 0;
        c = h === t ? 0 : h < t ? -1 : 1;
      }
      return this.negative !== 0 ? -c | 0 : c;
    }, n.prototype.cmp = function(t) {
      if (this.negative !== 0 && t.negative === 0) return -1;
      if (this.negative === 0 && t.negative !== 0) return 1;
      var a = this.ucmp(t);
      return this.negative !== 0 ? -a | 0 : a;
    }, n.prototype.ucmp = function(t) {
      if (this.length > t.length) return 1;
      if (this.length < t.length) return -1;
      for (var a = 0, c = this.length - 1; c >= 0; c--) {
        var h = this.words[c] | 0, b = t.words[c] | 0;
        if (h !== b) {
          h < b ? a = -1 : h > b && (a = 1);
          break;
        }
      }
      return a;
    }, n.prototype.gtn = function(t) {
      return this.cmpn(t) === 1;
    }, n.prototype.gt = function(t) {
      return this.cmp(t) === 1;
    }, n.prototype.gten = function(t) {
      return this.cmpn(t) >= 0;
    }, n.prototype.gte = function(t) {
      return this.cmp(t) >= 0;
    }, n.prototype.ltn = function(t) {
      return this.cmpn(t) === -1;
    }, n.prototype.lt = function(t) {
      return this.cmp(t) === -1;
    }, n.prototype.lten = function(t) {
      return this.cmpn(t) <= 0;
    }, n.prototype.lte = function(t) {
      return this.cmp(t) <= 0;
    }, n.prototype.eqn = function(t) {
      return this.cmpn(t) === 0;
    }, n.prototype.eq = function(t) {
      return this.cmp(t) === 0;
    }, n.red = function(t) {
      return new A(t);
    }, n.prototype.toRed = function(t) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, n.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, n.prototype._forceRed = function(t) {
      return this.red = t, this;
    }, n.prototype.forceRed = function(t) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, n.prototype.redAdd = function(t) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, n.prototype.redIAdd = function(t) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, n.prototype.redSub = function(t) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, n.prototype.redISub = function(t) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, n.prototype.redShl = function(t) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, n.prototype.redMul = function(t) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, n.prototype.redIMul = function(t) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, n.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, n.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, n.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, n.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, n.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, n.prototype.redPow = function(t) {
      return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var C = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function J(o, t) {
      this.name = o, this.p = new n(t, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    J.prototype._tmp = function() {
      var t = new n(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, J.prototype.ireduce = function(t) {
      var a = t, c;
      do
        this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), c = a.bitLength();
      while (c > this.n);
      var h = c < this.n ? -1 : a.ucmp(this.p);
      return h === 0 ? (a.words[0] = 0, a.length = 1) : h > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
    }, J.prototype.split = function(t, a) {
      t.iushrn(this.n, 0, a);
    }, J.prototype.imulK = function(t) {
      return t.imul(this.k);
    };
    function T() {
      J.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    s(T, J), T.prototype.split = function(t, a) {
      for (var c = 4194303, h = Math.min(t.length, 9), b = 0; b < h; b++)
        a.words[b] = t.words[b];
      if (a.length = h, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return;
      }
      var m = t.words[9];
      for (a.words[a.length++] = m & c, b = 10; b < t.length; b++) {
        var y = t.words[b] | 0;
        t.words[b - 10] = (y & c) << 4 | m >>> 22, m = y;
      }
      m >>>= 22, t.words[b - 10] = m, m === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, T.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var a = 0, c = 0; c < t.length; c++) {
        var h = t.words[c] | 0;
        a += h * 977, t.words[c] = a & 67108863, a = h * 64 + (a / 67108864 | 0);
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
    };
    function _() {
      J.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    s(_, J);
    function z() {
      J.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    s(z, J);
    function P() {
      J.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    s(P, J), P.prototype.imulK = function(t) {
      for (var a = 0, c = 0; c < t.length; c++) {
        var h = (t.words[c] | 0) * 19 + a, b = h & 67108863;
        h >>>= 26, t.words[c] = b, a = h;
      }
      return a !== 0 && (t.words[t.length++] = a), t;
    }, n._prime = function(t) {
      if (C[t]) return C[t];
      var a;
      if (t === "k256")
        a = new T();
      else if (t === "p224")
        a = new _();
      else if (t === "p192")
        a = new z();
      else if (t === "p25519")
        a = new P();
      else
        throw new Error("Unknown prime " + t);
      return C[t] = a, a;
    };
    function A(o) {
      if (typeof o == "string") {
        var t = n._prime(o);
        this.m = t.p, this.prime = t;
      } else
        i(o.gtn(1), "modulus must be greater than 1"), this.m = o, this.prime = null;
    }
    A.prototype._verify1 = function(t) {
      i(t.negative === 0, "red works only with positives"), i(t.red, "red works only with red numbers");
    }, A.prototype._verify2 = function(t, a) {
      i((t.negative | a.negative) === 0, "red works only with positives"), i(
        t.red && t.red === a.red,
        "red works only with red numbers"
      );
    }, A.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
    }, A.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, A.prototype.add = function(t, a) {
      this._verify2(t, a);
      var c = t.add(a);
      return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this);
    }, A.prototype.iadd = function(t, a) {
      this._verify2(t, a);
      var c = t.iadd(a);
      return c.cmp(this.m) >= 0 && c.isub(this.m), c;
    }, A.prototype.sub = function(t, a) {
      this._verify2(t, a);
      var c = t.sub(a);
      return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this);
    }, A.prototype.isub = function(t, a) {
      this._verify2(t, a);
      var c = t.isub(a);
      return c.cmpn(0) < 0 && c.iadd(this.m), c;
    }, A.prototype.shl = function(t, a) {
      return this._verify1(t), this.imod(t.ushln(a));
    }, A.prototype.imul = function(t, a) {
      return this._verify2(t, a), this.imod(t.imul(a));
    }, A.prototype.mul = function(t, a) {
      return this._verify2(t, a), this.imod(t.mul(a));
    }, A.prototype.isqr = function(t) {
      return this.imul(t, t.clone());
    }, A.prototype.sqr = function(t) {
      return this.mul(t, t);
    }, A.prototype.sqrt = function(t) {
      if (t.isZero()) return t.clone();
      var a = this.m.andln(3);
      if (i(a % 2 === 1), a === 3) {
        var c = this.m.add(new n(1)).iushrn(2);
        return this.pow(t, c);
      }
      for (var h = this.m.subn(1), b = 0; !h.isZero() && h.andln(1) === 0; )
        b++, h.iushrn(1);
      i(!h.isZero());
      var m = new n(1).toRed(this), y = m.redNeg(), u = this.m.subn(1).iushrn(1), d = this.m.bitLength();
      for (d = new n(2 * d * d).toRed(this); this.pow(d, u).cmp(y) !== 0; )
        d.redIAdd(y);
      for (var l = this.pow(d, h), B = this.pow(t, h.addn(1).iushrn(1)), q = this.pow(t, h), E = b; q.cmp(m) !== 0; ) {
        for (var k = q, D = 0; k.cmp(m) !== 0; D++)
          k = k.redSqr();
        i(D < E);
        var K = this.pow(l, new n(1).iushln(E - D - 1));
        B = B.redMul(K), l = K.redSqr(), q = q.redMul(l), E = D;
      }
      return B;
    }, A.prototype.invm = function(t) {
      var a = t._invmp(this.m);
      return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
    }, A.prototype.pow = function(t, a) {
      if (a.isZero()) return new n(1).toRed(this);
      if (a.cmpn(1) === 0) return t.clone();
      var c = 4, h = new Array(1 << c);
      h[0] = new n(1).toRed(this), h[1] = t;
      for (var b = 2; b < h.length; b++)
        h[b] = this.mul(h[b - 1], t);
      var m = h[0], y = 0, u = 0, d = a.bitLength() % 26;
      for (d === 0 && (d = 26), b = a.length - 1; b >= 0; b--) {
        for (var l = a.words[b], B = d - 1; B >= 0; B--) {
          var q = l >> B & 1;
          if (m !== h[0] && (m = this.sqr(m)), q === 0 && y === 0) {
            u = 0;
            continue;
          }
          y <<= 1, y |= q, u++, !(u !== c && (b !== 0 || B !== 0)) && (m = this.mul(m, h[y]), u = 0, y = 0);
        }
        d = 26;
      }
      return m;
    }, A.prototype.convertTo = function(t) {
      var a = t.umod(this.m);
      return a === t ? a.clone() : a;
    }, A.prototype.convertFrom = function(t) {
      var a = t.clone();
      return a.red = null, a;
    }, n.mont = function(t) {
      return new $(t);
    };
    function $(o) {
      A.call(this, o), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    s($, A), $.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift));
    }, $.prototype.convertFrom = function(t) {
      var a = this.imod(t.mul(this.rinv));
      return a.red = null, a;
    }, $.prototype.imul = function(t, a) {
      if (t.isZero() || a.isZero())
        return t.words[0] = 0, t.length = 1, t;
      var c = t.imul(a), h = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = c.isub(h).iushrn(this.shift), m = b;
      return b.cmp(this.m) >= 0 ? m = b.isub(this.m) : b.cmpn(0) < 0 && (m = b.iadd(this.m)), m._forceRed(this);
    }, $.prototype.mul = function(t, a) {
      if (t.isZero() || a.isZero()) return new n(0)._forceRed(this);
      var c = t.mul(a), h = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = c.isub(h).iushrn(this.shift), m = b;
      return b.cmp(this.m) >= 0 ? m = b.isub(this.m) : b.cmpn(0) < 0 && (m = b.iadd(this.m)), m._forceRed(this);
    }, $.prototype.invm = function(t) {
      var a = this.imod(t._invmp(this.m).mul(this.r2));
      return a._forceRed(this);
    };
  })(r, rf);
})(Mr);
var et = Mr.exports, ht = af;
function af(r, e) {
  if (!r)
    throw new Error(e || "Assertion failed");
}
af.equal = function(e, f, i) {
  if (e != f)
    throw new Error(i || "Assertion failed: " + e + " != " + f);
};
var wr = {};
(function(r) {
  var e = r;
  function f(n, x) {
    if (Array.isArray(n))
      return n.slice();
    if (!n)
      return [];
    var v = [];
    if (typeof n != "string") {
      for (var p = 0; p < n.length; p++)
        v[p] = n[p] | 0;
      return v;
    }
    if (x === "hex") {
      n = n.replace(/[^a-z0-9]+/ig, ""), n.length % 2 !== 0 && (n = "0" + n);
      for (var p = 0; p < n.length; p += 2)
        v.push(parseInt(n[p] + n[p + 1], 16));
    } else
      for (var p = 0; p < n.length; p++) {
        var w = n.charCodeAt(p), g = w >> 8, M = w & 255;
        g ? v.push(g, M) : v.push(M);
      }
    return v;
  }
  e.toArray = f;
  function i(n) {
    return n.length === 1 ? "0" + n : n;
  }
  e.zero2 = i;
  function s(n) {
    for (var x = "", v = 0; v < n.length; v++)
      x += i(n[v].toString(16));
    return x;
  }
  e.toHex = s, e.encode = function(x, v) {
    return v === "hex" ? s(x) : x;
  };
})(wr);
(function(r) {
  var e = r, f = et, i = ht, s = wr;
  e.assert = i, e.toArray = s.toArray, e.zero2 = s.zero2, e.toHex = s.toHex, e.encode = s.encode;
  function n(g, M, I) {
    var S = new Array(Math.max(g.bitLength(), I) + 1), F;
    for (F = 0; F < S.length; F += 1)
      S[F] = 0;
    var R = 1 << M + 1, O = g.clone();
    for (F = 0; F < S.length; F++) {
      var N, L = O.andln(R - 1);
      O.isOdd() ? (L > (R >> 1) - 1 ? N = (R >> 1) - L : N = L, O.isubn(N)) : N = 0, S[F] = N, O.iushrn(1);
    }
    return S;
  }
  e.getNAF = n;
  function x(g, M) {
    var I = [
      [],
      []
    ];
    g = g.clone(), M = M.clone();
    for (var S = 0, F = 0, R; g.cmpn(-S) > 0 || M.cmpn(-F) > 0; ) {
      var O = g.andln(3) + S & 3, N = M.andln(3) + F & 3;
      O === 3 && (O = -1), N === 3 && (N = -1);
      var L;
      O & 1 ? (R = g.andln(7) + S & 7, (R === 3 || R === 5) && N === 2 ? L = -O : L = O) : L = 0, I[0].push(L);
      var C;
      N & 1 ? (R = M.andln(7) + F & 7, (R === 3 || R === 5) && O === 2 ? C = -N : C = N) : C = 0, I[1].push(C), 2 * S === L + 1 && (S = 1 - S), 2 * F === C + 1 && (F = 1 - F), g.iushrn(1), M.iushrn(1);
    }
    return I;
  }
  e.getJSF = x;
  function v(g, M, I) {
    var S = "_" + M;
    g.prototype[M] = function() {
      return this[S] !== void 0 ? this[S] : this[S] = I.call(this);
    };
  }
  e.cachedProperty = v;
  function p(g) {
    return typeof g == "string" ? e.toArray(g, "hex") : g;
  }
  e.parseBytes = p;
  function w(g) {
    return new f(g, "hex", "le");
  }
  e.intFromLE = w;
})(Oe);
var _r = { exports: {} }, cr;
_r.exports = function(e) {
  return cr || (cr = new ft(null)), cr.generate(e);
};
function ft(r) {
  this.rand = r;
}
_r.exports.Rand = ft;
ft.prototype.generate = function(e) {
  return this._rand(e);
};
ft.prototype._rand = function(e) {
  if (this.rand.getBytes)
    return this.rand.getBytes(e);
  for (var f = new Uint8Array(e), i = 0; i < f.length; i++)
    f[i] = this.rand.getByte();
  return f;
};
if (typeof self == "object")
  self.crypto && self.crypto.getRandomValues ? ft.prototype._rand = function(e) {
    var f = new Uint8Array(e);
    return self.crypto.getRandomValues(f), f;
  } : self.msCrypto && self.msCrypto.getRandomValues ? ft.prototype._rand = function(e) {
    var f = new Uint8Array(e);
    return self.msCrypto.getRandomValues(f), f;
  } : typeof window == "object" && (ft.prototype._rand = function() {
    throw new Error("Not implemented yet");
  });
else
  try {
    var Ur = Rt;
    if (typeof Ur.randomBytes != "function")
      throw new Error("Not supported");
    ft.prototype._rand = function(e) {
      return Ur.randomBytes(e);
    };
  } catch {
  }
var df = _r.exports, Sr = {}, dt = et, At = Oe, Bt = At.getNAF, Qf = At.getJSF, Pt = At.assert;
function it(r, e) {
  this.type = r, this.p = new dt(e.p, 16), this.red = e.prime ? dt.red(e.prime) : dt.mont(this.p), this.zero = new dt(0).toRed(this.red), this.one = new dt(1).toRed(this.red), this.two = new dt(2).toRed(this.red), this.n = e.n && new dt(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var f = this.n && this.p.div(this.n);
  !f || f.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var $t = it;
it.prototype.point = function() {
  throw new Error("Not implemented");
};
it.prototype.validate = function() {
  throw new Error("Not implemented");
};
it.prototype._fixedNafMul = function(e, f) {
  Pt(e.precomputed);
  var i = e._getDoubles(), s = Bt(f, 1, this._bitLength), n = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
  n /= 3;
  var x = [], v, p;
  for (v = 0; v < s.length; v += i.step) {
    p = 0;
    for (var w = v + i.step - 1; w >= v; w--)
      p = (p << 1) + s[w];
    x.push(p);
  }
  for (var g = this.jpoint(null, null, null), M = this.jpoint(null, null, null), I = n; I > 0; I--) {
    for (v = 0; v < x.length; v++)
      p = x[v], p === I ? M = M.mixedAdd(i.points[v]) : p === -I && (M = M.mixedAdd(i.points[v].neg()));
    g = g.add(M);
  }
  return g.toP();
};
it.prototype._wnafMul = function(e, f) {
  var i = 4, s = e._getNAFPoints(i);
  i = s.wnd;
  for (var n = s.points, x = Bt(f, i, this._bitLength), v = this.jpoint(null, null, null), p = x.length - 1; p >= 0; p--) {
    for (var w = 0; p >= 0 && x[p] === 0; p--)
      w++;
    if (p >= 0 && w++, v = v.dblp(w), p < 0)
      break;
    var g = x[p];
    Pt(g !== 0), e.type === "affine" ? g > 0 ? v = v.mixedAdd(n[g - 1 >> 1]) : v = v.mixedAdd(n[-g - 1 >> 1].neg()) : g > 0 ? v = v.add(n[g - 1 >> 1]) : v = v.add(n[-g - 1 >> 1].neg());
  }
  return e.type === "affine" ? v.toP() : v;
};
it.prototype._wnafMulAdd = function(e, f, i, s, n) {
  var x = this._wnafT1, v = this._wnafT2, p = this._wnafT3, w = 0, g, M, I;
  for (g = 0; g < s; g++) {
    I = f[g];
    var S = I._getNAFPoints(e);
    x[g] = S.wnd, v[g] = S.points;
  }
  for (g = s - 1; g >= 1; g -= 2) {
    var F = g - 1, R = g;
    if (x[F] !== 1 || x[R] !== 1) {
      p[F] = Bt(i[F], x[F], this._bitLength), p[R] = Bt(i[R], x[R], this._bitLength), w = Math.max(p[F].length, w), w = Math.max(p[R].length, w);
      continue;
    }
    var O = [
      f[F],
      /* 1 */
      null,
      /* 3 */
      null,
      /* 5 */
      f[R]
      /* 7 */
    ];
    f[F].y.cmp(f[R].y) === 0 ? (O[1] = f[F].add(f[R]), O[2] = f[F].toJ().mixedAdd(f[R].neg())) : f[F].y.cmp(f[R].y.redNeg()) === 0 ? (O[1] = f[F].toJ().mixedAdd(f[R]), O[2] = f[F].add(f[R].neg())) : (O[1] = f[F].toJ().mixedAdd(f[R]), O[2] = f[F].toJ().mixedAdd(f[R].neg()));
    var N = [
      -3,
      /* -1 -1 */
      -1,
      /* -1 0 */
      -5,
      /* -1 1 */
      -7,
      /* 0 -1 */
      0,
      /* 0 0 */
      7,
      /* 0 1 */
      5,
      /* 1 -1 */
      1,
      /* 1 0 */
      3
      /* 1 1 */
    ], L = Qf(i[F], i[R]);
    for (w = Math.max(L[0].length, w), p[F] = new Array(w), p[R] = new Array(w), M = 0; M < w; M++) {
      var C = L[0][M] | 0, J = L[1][M] | 0;
      p[F][M] = N[(C + 1) * 3 + (J + 1)], p[R][M] = 0, v[F] = O;
    }
  }
  var T = this.jpoint(null, null, null), _ = this._wnafT4;
  for (g = w; g >= 0; g--) {
    for (var z = 0; g >= 0; ) {
      var P = !0;
      for (M = 0; M < s; M++)
        _[M] = p[M][g] | 0, _[M] !== 0 && (P = !1);
      if (!P)
        break;
      z++, g--;
    }
    if (g >= 0 && z++, T = T.dblp(z), g < 0)
      break;
    for (M = 0; M < s; M++) {
      var A = _[M];
      A !== 0 && (A > 0 ? I = v[M][A - 1 >> 1] : A < 0 && (I = v[M][-A - 1 >> 1].neg()), I.type === "affine" ? T = T.mixedAdd(I) : T = T.add(I));
    }
  }
  for (g = 0; g < s; g++)
    v[g] = null;
  return n ? T : T.toP();
};
function Le(r, e) {
  this.curve = r, this.type = e, this.precomputed = null;
}
it.BasePoint = Le;
Le.prototype.eq = function() {
  throw new Error("Not implemented");
};
Le.prototype.validate = function() {
  return this.curve.validate(this);
};
it.prototype.decodePoint = function(e, f) {
  e = At.toArray(e, f);
  var i = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * i) {
    e[0] === 6 ? Pt(e[e.length - 1] % 2 === 0) : e[0] === 7 && Pt(e[e.length - 1] % 2 === 1);
    var s = this.point(
      e.slice(1, 1 + i),
      e.slice(1 + i, 1 + 2 * i)
    );
    return s;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === i)
    return this.pointFromX(e.slice(1, 1 + i), e[0] === 3);
  throw new Error("Unknown point format");
};
Le.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
};
Le.prototype._encode = function(e) {
  var f = this.curve.p.byteLength(), i = this.getX().toArray("be", f);
  return e ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray("be", f));
};
Le.prototype.encode = function(e, f) {
  return At.encode(this._encode(f), e);
};
Le.prototype.precompute = function(e) {
  if (this.precomputed)
    return this;
  var f = {
    doubles: null,
    naf: null,
    beta: null
  };
  return f.naf = this._getNAFPoints(8), f.doubles = this._getDoubles(4, e), f.beta = this._getBeta(), this.precomputed = f, this;
};
Le.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
    return !1;
  var f = this.precomputed.doubles;
  return f ? f.points.length >= Math.ceil((e.bitLength() + 1) / f.step) : !1;
};
Le.prototype._getDoubles = function(e, f) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var i = [this], s = this, n = 0; n < f; n += e) {
    for (var x = 0; x < e; x++)
      s = s.dbl();
    i.push(s);
  }
  return {
    step: e,
    points: i
  };
};
Le.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var f = [this], i = (1 << e) - 1, s = i === 1 ? null : this.dbl(), n = 1; n < i; n++)
    f[n] = f[n - 1].add(s);
  return {
    wnd: e,
    points: f
  };
};
Le.prototype._getBeta = function() {
  return null;
};
Le.prototype.dblp = function(e) {
  for (var f = this, i = 0; i < e; i++)
    f = f.dbl();
  return f;
};
var xr = { exports: {} };
typeof Object.create == "function" ? xr.exports = function(e, f) {
  f && (e.super_ = f, e.prototype = Object.create(f.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : xr.exports = function(e, f) {
  if (f) {
    e.super_ = f;
    var i = function() {
    };
    i.prototype = f.prototype, e.prototype = new i(), e.prototype.constructor = e;
  }
};
var Et = xr.exports, e0 = Oe, X = et, Ar = Et, xt = $t, t0 = e0.assert;
function Ce(r) {
  xt.call(this, "short", r), this.a = new X(r.a, 16).toRed(this.red), this.b = new X(r.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(r), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Ar(Ce, xt);
var r0 = Ce;
Ce.prototype._getEndomorphism = function(e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var f, i;
    if (e.beta)
      f = new X(e.beta, 16).toRed(this.red);
    else {
      var s = this._getEndoRoots(this.p);
      f = s[0].cmp(s[1]) < 0 ? s[0] : s[1], f = f.toRed(this.red);
    }
    if (e.lambda)
      i = new X(e.lambda, 16);
    else {
      var n = this._getEndoRoots(this.n);
      this.g.mul(n[0]).x.cmp(this.g.x.redMul(f)) === 0 ? i = n[0] : (i = n[1], t0(this.g.mul(i).x.cmp(this.g.x.redMul(f)) === 0));
    }
    var x;
    return e.basis ? x = e.basis.map(function(v) {
      return {
        a: new X(v.a, 16),
        b: new X(v.b, 16)
      };
    }) : x = this._getEndoBasis(i), {
      beta: f,
      lambda: i,
      basis: x
    };
  }
};
Ce.prototype._getEndoRoots = function(e) {
  var f = e === this.p ? this.red : X.mont(e), i = new X(2).toRed(f).redInvm(), s = i.redNeg(), n = new X(3).toRed(f).redNeg().redSqrt().redMul(i), x = s.redAdd(n).fromRed(), v = s.redSub(n).fromRed();
  return [x, v];
};
Ce.prototype._getEndoBasis = function(e) {
  for (var f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = e, s = this.n.clone(), n = new X(1), x = new X(0), v = new X(0), p = new X(1), w, g, M, I, S, F, R, O = 0, N, L; i.cmpn(0) !== 0; ) {
    var C = s.div(i);
    N = s.sub(C.mul(i)), L = v.sub(C.mul(n));
    var J = p.sub(C.mul(x));
    if (!M && N.cmp(f) < 0)
      w = R.neg(), g = n, M = N.neg(), I = L;
    else if (M && ++O === 2)
      break;
    R = N, s = i, i = N, v = n, n = L, p = x, x = J;
  }
  S = N.neg(), F = L;
  var T = M.sqr().add(I.sqr()), _ = S.sqr().add(F.sqr());
  return _.cmp(T) >= 0 && (S = w, F = g), M.negative && (M = M.neg(), I = I.neg()), S.negative && (S = S.neg(), F = F.neg()), [
    { a: M, b: I },
    { a: S, b: F }
  ];
};
Ce.prototype._endoSplit = function(e) {
  var f = this.endo.basis, i = f[0], s = f[1], n = s.b.mul(e).divRound(this.n), x = i.b.neg().mul(e).divRound(this.n), v = n.mul(i.a), p = x.mul(s.a), w = n.mul(i.b), g = x.mul(s.b), M = e.sub(v).sub(p), I = w.add(g).neg();
  return { k1: M, k2: I };
};
Ce.prototype.pointFromX = function(e, f) {
  e = new X(e, 16), e.red || (e = e.toRed(this.red));
  var i = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), s = i.redSqrt();
  if (s.redSqr().redSub(i).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var n = s.fromRed().isOdd();
  return (f && !n || !f && n) && (s = s.redNeg()), this.point(e, s);
};
Ce.prototype.validate = function(e) {
  if (e.inf)
    return !0;
  var f = e.x, i = e.y, s = this.a.redMul(f), n = f.redSqr().redMul(f).redIAdd(s).redIAdd(this.b);
  return i.redSqr().redISub(n).cmpn(0) === 0;
};
Ce.prototype._endoWnafMulAdd = function(e, f, i) {
  for (var s = this._endoWnafT1, n = this._endoWnafT2, x = 0; x < e.length; x++) {
    var v = this._endoSplit(f[x]), p = e[x], w = p._getBeta();
    v.k1.negative && (v.k1.ineg(), p = p.neg(!0)), v.k2.negative && (v.k2.ineg(), w = w.neg(!0)), s[x * 2] = p, s[x * 2 + 1] = w, n[x * 2] = v.k1, n[x * 2 + 1] = v.k2;
  }
  for (var g = this._wnafMulAdd(1, s, n, x * 2, i), M = 0; M < x * 2; M++)
    s[M] = null, n[M] = null;
  return g;
};
function Pe(r, e, f, i) {
  xt.BasePoint.call(this, r, "affine"), e === null && f === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new X(e, 16), this.y = new X(f, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
Ar(Pe, xt.BasePoint);
Ce.prototype.point = function(e, f, i) {
  return new Pe(this, e, f, i);
};
Ce.prototype.pointFromJSON = function(e, f) {
  return Pe.fromJSON(this, e, f);
};
Pe.prototype._getBeta = function() {
  if (this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta)
      return e.beta;
    var f = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var i = this.curve, s = function(n) {
        return i.point(n.x.redMul(i.endo.beta), n.y);
      };
      e.beta = f, f.precomputed = {
        beta: null,
        naf: e.naf && {
          wnd: e.naf.wnd,
          points: e.naf.points.map(s)
        },
        doubles: e.doubles && {
          step: e.doubles.step,
          points: e.doubles.points.map(s)
        }
      };
    }
    return f;
  }
};
Pe.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }] : [this.x, this.y];
};
Pe.fromJSON = function(e, f, i) {
  typeof f == "string" && (f = JSON.parse(f));
  var s = e.point(f[0], f[1], i);
  if (!f[2])
    return s;
  function n(v) {
    return e.point(v[0], v[1], i);
  }
  var x = f[2];
  return s.precomputed = {
    beta: null,
    doubles: x.doubles && {
      step: x.doubles.step,
      points: [s].concat(x.doubles.points.map(n))
    },
    naf: x.naf && {
      wnd: x.naf.wnd,
      points: [s].concat(x.naf.points.map(n))
    }
  }, s;
};
Pe.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
Pe.prototype.isInfinity = function() {
  return this.inf;
};
Pe.prototype.add = function(e) {
  if (this.inf)
    return e;
  if (e.inf)
    return this;
  if (this.eq(e))
    return this.dbl();
  if (this.neg().eq(e))
    return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0)
    return this.curve.point(null, null);
  var f = this.y.redSub(e.y);
  f.cmpn(0) !== 0 && (f = f.redMul(this.x.redSub(e.x).redInvm()));
  var i = f.redSqr().redISub(this.x).redISub(e.x), s = f.redMul(this.x.redSub(i)).redISub(this.y);
  return this.curve.point(i, s);
};
Pe.prototype.dbl = function() {
  if (this.inf)
    return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0)
    return this.curve.point(null, null);
  var f = this.curve.a, i = this.x.redSqr(), s = e.redInvm(), n = i.redAdd(i).redIAdd(i).redIAdd(f).redMul(s), x = n.redSqr().redISub(this.x.redAdd(this.x)), v = n.redMul(this.x.redSub(x)).redISub(this.y);
  return this.curve.point(x, v);
};
Pe.prototype.getX = function() {
  return this.x.fromRed();
};
Pe.prototype.getY = function() {
  return this.y.fromRed();
};
Pe.prototype.mul = function(e) {
  return e = new X(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
};
Pe.prototype.mulAdd = function(e, f, i) {
  var s = [this, f], n = [e, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(s, n) : this.curve._wnafMulAdd(1, s, n, 2);
};
Pe.prototype.jmulAdd = function(e, f, i) {
  var s = [this, f], n = [e, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(s, n, !0) : this.curve._wnafMulAdd(1, s, n, 2, !0);
};
Pe.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
};
Pe.prototype.neg = function(e) {
  if (this.inf)
    return this;
  var f = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var i = this.precomputed, s = function(n) {
      return n.neg();
    };
    f.precomputed = {
      naf: i.naf && {
        wnd: i.naf.wnd,
        points: i.naf.points.map(s)
      },
      doubles: i.doubles && {
        step: i.doubles.step,
        points: i.doubles.points.map(s)
      }
    };
  }
  return f;
};
Pe.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function qe(r, e, f, i) {
  xt.BasePoint.call(this, r, "jacobian"), e === null && f === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new X(0)) : (this.x = new X(e, 16), this.y = new X(f, 16), this.z = new X(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Ar(qe, xt.BasePoint);
Ce.prototype.jpoint = function(e, f, i) {
  return new qe(this, e, f, i);
};
qe.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var e = this.z.redInvm(), f = e.redSqr(), i = this.x.redMul(f), s = this.y.redMul(f).redMul(e);
  return this.curve.point(i, s);
};
qe.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
qe.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var f = e.z.redSqr(), i = this.z.redSqr(), s = this.x.redMul(f), n = e.x.redMul(i), x = this.y.redMul(f.redMul(e.z)), v = e.y.redMul(i.redMul(this.z)), p = s.redSub(n), w = x.redSub(v);
  if (p.cmpn(0) === 0)
    return w.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var g = p.redSqr(), M = g.redMul(p), I = s.redMul(g), S = w.redSqr().redIAdd(M).redISub(I).redISub(I), F = w.redMul(I.redISub(S)).redISub(x.redMul(M)), R = this.z.redMul(e.z).redMul(p);
  return this.curve.jpoint(S, F, R);
};
qe.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
    return e.toJ();
  if (e.isInfinity())
    return this;
  var f = this.z.redSqr(), i = this.x, s = e.x.redMul(f), n = this.y, x = e.y.redMul(f).redMul(this.z), v = i.redSub(s), p = n.redSub(x);
  if (v.cmpn(0) === 0)
    return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w = v.redSqr(), g = w.redMul(v), M = i.redMul(w), I = p.redSqr().redIAdd(g).redISub(M).redISub(M), S = p.redMul(M.redISub(I)).redISub(n.redMul(g)), F = this.z.redMul(v);
  return this.curve.jpoint(I, S, F);
};
qe.prototype.dblp = function(e) {
  if (e === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!e)
    return this.dbl();
  var f;
  if (this.curve.zeroA || this.curve.threeA) {
    var i = this;
    for (f = 0; f < e; f++)
      i = i.dbl();
    return i;
  }
  var s = this.curve.a, n = this.curve.tinv, x = this.x, v = this.y, p = this.z, w = p.redSqr().redSqr(), g = v.redAdd(v);
  for (f = 0; f < e; f++) {
    var M = x.redSqr(), I = g.redSqr(), S = I.redSqr(), F = M.redAdd(M).redIAdd(M).redIAdd(s.redMul(w)), R = x.redMul(I), O = F.redSqr().redISub(R.redAdd(R)), N = R.redISub(O), L = F.redMul(N);
    L = L.redIAdd(L).redISub(S);
    var C = g.redMul(p);
    f + 1 < e && (w = w.redMul(S)), x = O, p = C, g = L;
  }
  return this.curve.jpoint(x, g.redMul(n), p);
};
qe.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
qe.prototype._zeroDbl = function() {
  var e, f, i;
  if (this.zOne) {
    var s = this.x.redSqr(), n = this.y.redSqr(), x = n.redSqr(), v = this.x.redAdd(n).redSqr().redISub(s).redISub(x);
    v = v.redIAdd(v);
    var p = s.redAdd(s).redIAdd(s), w = p.redSqr().redISub(v).redISub(v), g = x.redIAdd(x);
    g = g.redIAdd(g), g = g.redIAdd(g), e = w, f = p.redMul(v.redISub(w)).redISub(g), i = this.y.redAdd(this.y);
  } else {
    var M = this.x.redSqr(), I = this.y.redSqr(), S = I.redSqr(), F = this.x.redAdd(I).redSqr().redISub(M).redISub(S);
    F = F.redIAdd(F);
    var R = M.redAdd(M).redIAdd(M), O = R.redSqr(), N = S.redIAdd(S);
    N = N.redIAdd(N), N = N.redIAdd(N), e = O.redISub(F).redISub(F), f = R.redMul(F.redISub(e)).redISub(N), i = this.y.redMul(this.z), i = i.redIAdd(i);
  }
  return this.curve.jpoint(e, f, i);
};
qe.prototype._threeDbl = function() {
  var e, f, i;
  if (this.zOne) {
    var s = this.x.redSqr(), n = this.y.redSqr(), x = n.redSqr(), v = this.x.redAdd(n).redSqr().redISub(s).redISub(x);
    v = v.redIAdd(v);
    var p = s.redAdd(s).redIAdd(s).redIAdd(this.curve.a), w = p.redSqr().redISub(v).redISub(v);
    e = w;
    var g = x.redIAdd(x);
    g = g.redIAdd(g), g = g.redIAdd(g), f = p.redMul(v.redISub(w)).redISub(g), i = this.y.redAdd(this.y);
  } else {
    var M = this.z.redSqr(), I = this.y.redSqr(), S = this.x.redMul(I), F = this.x.redSub(M).redMul(this.x.redAdd(M));
    F = F.redAdd(F).redIAdd(F);
    var R = S.redIAdd(S);
    R = R.redIAdd(R);
    var O = R.redAdd(R);
    e = F.redSqr().redISub(O), i = this.y.redAdd(this.z).redSqr().redISub(I).redISub(M);
    var N = I.redSqr();
    N = N.redIAdd(N), N = N.redIAdd(N), N = N.redIAdd(N), f = F.redMul(R.redISub(e)).redISub(N);
  }
  return this.curve.jpoint(e, f, i);
};
qe.prototype._dbl = function() {
  var e = this.curve.a, f = this.x, i = this.y, s = this.z, n = s.redSqr().redSqr(), x = f.redSqr(), v = i.redSqr(), p = x.redAdd(x).redIAdd(x).redIAdd(e.redMul(n)), w = f.redAdd(f);
  w = w.redIAdd(w);
  var g = w.redMul(v), M = p.redSqr().redISub(g.redAdd(g)), I = g.redISub(M), S = v.redSqr();
  S = S.redIAdd(S), S = S.redIAdd(S), S = S.redIAdd(S);
  var F = p.redMul(I).redISub(S), R = i.redAdd(i).redMul(s);
  return this.curve.jpoint(M, F, R);
};
qe.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var e = this.x.redSqr(), f = this.y.redSqr(), i = this.z.redSqr(), s = f.redSqr(), n = e.redAdd(e).redIAdd(e), x = n.redSqr(), v = this.x.redAdd(f).redSqr().redISub(e).redISub(s);
  v = v.redIAdd(v), v = v.redAdd(v).redIAdd(v), v = v.redISub(x);
  var p = v.redSqr(), w = s.redIAdd(s);
  w = w.redIAdd(w), w = w.redIAdd(w), w = w.redIAdd(w);
  var g = n.redIAdd(v).redSqr().redISub(x).redISub(p).redISub(w), M = f.redMul(g);
  M = M.redIAdd(M), M = M.redIAdd(M);
  var I = this.x.redMul(p).redISub(M);
  I = I.redIAdd(I), I = I.redIAdd(I);
  var S = this.y.redMul(g.redMul(w.redISub(g)).redISub(v.redMul(p)));
  S = S.redIAdd(S), S = S.redIAdd(S), S = S.redIAdd(S);
  var F = this.z.redAdd(v).redSqr().redISub(i).redISub(p);
  return this.curve.jpoint(I, S, F);
};
qe.prototype.mul = function(e, f) {
  return e = new X(e, f), this.curve._wnafMul(this, e);
};
qe.prototype.eq = function(e) {
  if (e.type === "affine")
    return this.eq(e.toJ());
  if (this === e)
    return !0;
  var f = this.z.redSqr(), i = e.z.redSqr();
  if (this.x.redMul(i).redISub(e.x.redMul(f)).cmpn(0) !== 0)
    return !1;
  var s = f.redMul(this.z), n = i.redMul(e.z);
  return this.y.redMul(n).redISub(e.y.redMul(s)).cmpn(0) === 0;
};
qe.prototype.eqXToP = function(e) {
  var f = this.z.redSqr(), i = e.toRed(this.curve.red).redMul(f);
  if (this.x.cmp(i) === 0)
    return !0;
  for (var s = e.clone(), n = this.curve.redN.redMul(f); ; ) {
    if (s.iadd(this.curve.n), s.cmp(this.curve.p) >= 0)
      return !1;
    if (i.redIAdd(n), this.x.cmp(i) === 0)
      return !0;
  }
};
qe.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
qe.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var ut = et, nf = Et, Nt = $t, f0 = Oe;
function mt(r) {
  Nt.call(this, "mont", r), this.a = new ut(r.a, 16).toRed(this.red), this.b = new ut(r.b, 16).toRed(this.red), this.i4 = new ut(4).toRed(this.red).redInvm(), this.two = new ut(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
nf(mt, Nt);
var a0 = mt;
mt.prototype.validate = function(e) {
  var f = e.normalize().x, i = f.redSqr(), s = i.redMul(f).redAdd(i.redMul(this.a)).redAdd(f), n = s.redSqrt();
  return n.redSqr().cmp(s) === 0;
};
function Be(r, e, f) {
  Nt.BasePoint.call(this, r, "projective"), e === null && f === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new ut(e, 16), this.z = new ut(f, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
}
nf(Be, Nt.BasePoint);
mt.prototype.decodePoint = function(e, f) {
  return this.point(f0.toArray(e, f), 1);
};
mt.prototype.point = function(e, f) {
  return new Be(this, e, f);
};
mt.prototype.pointFromJSON = function(e) {
  return Be.fromJSON(this, e);
};
Be.prototype.precompute = function() {
};
Be.prototype._encode = function() {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
Be.fromJSON = function(e, f) {
  return new Be(e, f[0], f[1] || e.one);
};
Be.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
Be.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
Be.prototype.dbl = function() {
  var e = this.x.redAdd(this.z), f = e.redSqr(), i = this.x.redSub(this.z), s = i.redSqr(), n = f.redSub(s), x = f.redMul(s), v = n.redMul(s.redAdd(this.curve.a24.redMul(n)));
  return this.curve.point(x, v);
};
Be.prototype.add = function() {
  throw new Error("Not supported on Montgomery curve");
};
Be.prototype.diffAdd = function(e, f) {
  var i = this.x.redAdd(this.z), s = this.x.redSub(this.z), n = e.x.redAdd(e.z), x = e.x.redSub(e.z), v = x.redMul(i), p = n.redMul(s), w = f.z.redMul(v.redAdd(p).redSqr()), g = f.x.redMul(v.redISub(p).redSqr());
  return this.curve.point(w, g);
};
Be.prototype.mul = function(e) {
  for (var f = e.clone(), i = this, s = this.curve.point(null, null), n = this, x = []; f.cmpn(0) !== 0; f.iushrn(1))
    x.push(f.andln(1));
  for (var v = x.length - 1; v >= 0; v--)
    x[v] === 0 ? (i = i.diffAdd(s, n), s = s.dbl()) : (s = i.diffAdd(s, n), i = i.dbl());
  return s;
};
Be.prototype.mulAdd = function() {
  throw new Error("Not supported on Montgomery curve");
};
Be.prototype.jumlAdd = function() {
  throw new Error("Not supported on Montgomery curve");
};
Be.prototype.eq = function(e) {
  return this.getX().cmp(e.getX()) === 0;
};
Be.prototype.normalize = function() {
  return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
};
Be.prototype.getX = function() {
  return this.normalize(), this.x.fromRed();
};
var i0 = Oe, Ye = et, sf = Et, Ot = $t, d0 = i0.assert;
function Ze(r) {
  this.twisted = (r.a | 0) !== 1, this.mOneA = this.twisted && (r.a | 0) === -1, this.extended = this.mOneA, Ot.call(this, "edwards", r), this.a = new Ye(r.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new Ye(r.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new Ye(r.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), d0(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (r.c | 0) === 1;
}
sf(Ze, Ot);
var n0 = Ze;
Ze.prototype._mulA = function(e) {
  return this.mOneA ? e.redNeg() : this.a.redMul(e);
};
Ze.prototype._mulC = function(e) {
  return this.oneC ? e : this.c.redMul(e);
};
Ze.prototype.jpoint = function(e, f, i, s) {
  return this.point(e, f, i, s);
};
Ze.prototype.pointFromX = function(e, f) {
  e = new Ye(e, 16), e.red || (e = e.toRed(this.red));
  var i = e.redSqr(), s = this.c2.redSub(this.a.redMul(i)), n = this.one.redSub(this.c2.redMul(this.d).redMul(i)), x = s.redMul(n.redInvm()), v = x.redSqrt();
  if (v.redSqr().redSub(x).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var p = v.fromRed().isOdd();
  return (f && !p || !f && p) && (v = v.redNeg()), this.point(e, v);
};
Ze.prototype.pointFromY = function(e, f) {
  e = new Ye(e, 16), e.red || (e = e.toRed(this.red));
  var i = e.redSqr(), s = i.redSub(this.c2), n = i.redMul(this.d).redMul(this.c2).redSub(this.a), x = s.redMul(n.redInvm());
  if (x.cmp(this.zero) === 0) {
    if (f)
      throw new Error("invalid point");
    return this.point(this.zero, e);
  }
  var v = x.redSqrt();
  if (v.redSqr().redSub(x).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  return v.fromRed().isOdd() !== f && (v = v.redNeg()), this.point(v, e);
};
Ze.prototype.validate = function(e) {
  if (e.isInfinity())
    return !0;
  e.normalize();
  var f = e.x.redSqr(), i = e.y.redSqr(), s = f.redMul(this.a).redAdd(i), n = this.c2.redMul(this.one.redAdd(this.d.redMul(f).redMul(i)));
  return s.cmp(n) === 0;
};
function U(r, e, f, i, s) {
  Ot.BasePoint.call(this, r, "projective"), e === null && f === null && i === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new Ye(e, 16), this.y = new Ye(f, 16), this.z = i ? new Ye(i, 16) : this.curve.one, this.t = s && new Ye(s, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
}
sf(U, Ot.BasePoint);
Ze.prototype.pointFromJSON = function(e) {
  return U.fromJSON(this, e);
};
Ze.prototype.point = function(e, f, i, s) {
  return new U(this, e, f, i, s);
};
U.fromJSON = function(e, f) {
  return new U(e, f[0], f[1], f[2]);
};
U.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
U.prototype.isInfinity = function() {
  return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
};
U.prototype._extDbl = function() {
  var e = this.x.redSqr(), f = this.y.redSqr(), i = this.z.redSqr();
  i = i.redIAdd(i);
  var s = this.curve._mulA(e), n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(f), x = s.redAdd(f), v = x.redSub(i), p = s.redSub(f), w = n.redMul(v), g = x.redMul(p), M = n.redMul(p), I = v.redMul(x);
  return this.curve.point(w, g, I, M);
};
U.prototype._projDbl = function() {
  var e = this.x.redAdd(this.y).redSqr(), f = this.x.redSqr(), i = this.y.redSqr(), s, n, x, v, p, w;
  if (this.curve.twisted) {
    v = this.curve._mulA(f);
    var g = v.redAdd(i);
    this.zOne ? (s = e.redSub(f).redSub(i).redMul(g.redSub(this.curve.two)), n = g.redMul(v.redSub(i)), x = g.redSqr().redSub(g).redSub(g)) : (p = this.z.redSqr(), w = g.redSub(p).redISub(p), s = e.redSub(f).redISub(i).redMul(w), n = g.redMul(v.redSub(i)), x = g.redMul(w));
  } else
    v = f.redAdd(i), p = this.curve._mulC(this.z).redSqr(), w = v.redSub(p).redSub(p), s = this.curve._mulC(e.redISub(v)).redMul(w), n = this.curve._mulC(v).redMul(f.redISub(i)), x = v.redMul(w);
  return this.curve.point(s, n, x);
};
U.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
};
U.prototype._extAdd = function(e) {
  var f = this.y.redSub(this.x).redMul(e.y.redSub(e.x)), i = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)), s = this.t.redMul(this.curve.dd).redMul(e.t), n = this.z.redMul(e.z.redAdd(e.z)), x = i.redSub(f), v = n.redSub(s), p = n.redAdd(s), w = i.redAdd(f), g = x.redMul(v), M = p.redMul(w), I = x.redMul(w), S = v.redMul(p);
  return this.curve.point(g, M, S, I);
};
U.prototype._projAdd = function(e) {
  var f = this.z.redMul(e.z), i = f.redSqr(), s = this.x.redMul(e.x), n = this.y.redMul(e.y), x = this.curve.d.redMul(s).redMul(n), v = i.redSub(x), p = i.redAdd(x), w = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(s).redISub(n), g = f.redMul(v).redMul(w), M, I;
  return this.curve.twisted ? (M = f.redMul(p).redMul(n.redSub(this.curve._mulA(s))), I = v.redMul(p)) : (M = f.redMul(p).redMul(n.redSub(s)), I = this.curve._mulC(v).redMul(p)), this.curve.point(g, M, I);
};
U.prototype.add = function(e) {
  return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
};
U.prototype.mul = function(e) {
  return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
};
U.prototype.mulAdd = function(e, f, i) {
  return this.curve._wnafMulAdd(1, [this, f], [e, i], 2, !1);
};
U.prototype.jmulAdd = function(e, f, i) {
  return this.curve._wnafMulAdd(1, [this, f], [e, i], 2, !0);
};
U.prototype.normalize = function() {
  if (this.zOne)
    return this;
  var e = this.z.redInvm();
  return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this;
};
U.prototype.neg = function() {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg()
  );
};
U.prototype.getX = function() {
  return this.normalize(), this.x.fromRed();
};
U.prototype.getY = function() {
  return this.normalize(), this.y.fromRed();
};
U.prototype.eq = function(e) {
  return this === e || this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0;
};
U.prototype.eqXToP = function(e) {
  var f = e.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(f) === 0)
    return !0;
  for (var i = e.clone(), s = this.curve.redN.redMul(this.z); ; ) {
    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)
      return !1;
    if (f.redIAdd(s), this.x.cmp(f) === 0)
      return !0;
  }
};
U.prototype.toP = U.prototype.normalize;
U.prototype.mixedAdd = U.prototype.add;
(function(r) {
  var e = r;
  e.base = $t, e.short = r0, e.mont = a0, e.edwards = n0;
})(Sr);
var kt = {}, Lt = {}, H = {}, s0 = ht, c0 = Et;
H.inherits = c0;
function h0(r, e) {
  return (r.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= r.length ? !1 : (r.charCodeAt(e + 1) & 64512) === 56320;
}
function o0(r, e) {
  if (Array.isArray(r))
    return r.slice();
  if (!r)
    return [];
  var f = [];
  if (typeof r == "string")
    if (e) {
      if (e === "hex")
        for (r = r.replace(/[^a-z0-9]+/ig, ""), r.length % 2 !== 0 && (r = "0" + r), s = 0; s < r.length; s += 2)
          f.push(parseInt(r[s] + r[s + 1], 16));
    } else for (var i = 0, s = 0; s < r.length; s++) {
      var n = r.charCodeAt(s);
      n < 128 ? f[i++] = n : n < 2048 ? (f[i++] = n >> 6 | 192, f[i++] = n & 63 | 128) : h0(r, s) ? (n = 65536 + ((n & 1023) << 10) + (r.charCodeAt(++s) & 1023), f[i++] = n >> 18 | 240, f[i++] = n >> 12 & 63 | 128, f[i++] = n >> 6 & 63 | 128, f[i++] = n & 63 | 128) : (f[i++] = n >> 12 | 224, f[i++] = n >> 6 & 63 | 128, f[i++] = n & 63 | 128);
    }
  else
    for (s = 0; s < r.length; s++)
      f[s] = r[s] | 0;
  return f;
}
H.toArray = o0;
function u0(r) {
  for (var e = "", f = 0; f < r.length; f++)
    e += hf(r[f].toString(16));
  return e;
}
H.toHex = u0;
function cf(r) {
  var e = r >>> 24 | r >>> 8 & 65280 | r << 8 & 16711680 | (r & 255) << 24;
  return e >>> 0;
}
H.htonl = cf;
function b0(r, e) {
  for (var f = "", i = 0; i < r.length; i++) {
    var s = r[i];
    e === "little" && (s = cf(s)), f += of(s.toString(16));
  }
  return f;
}
H.toHex32 = b0;
function hf(r) {
  return r.length === 1 ? "0" + r : r;
}
H.zero2 = hf;
function of(r) {
  return r.length === 7 ? "0" + r : r.length === 6 ? "00" + r : r.length === 5 ? "000" + r : r.length === 4 ? "0000" + r : r.length === 3 ? "00000" + r : r.length === 2 ? "000000" + r : r.length === 1 ? "0000000" + r : r;
}
H.zero8 = of;
function l0(r, e, f, i) {
  var s = f - e;
  s0(s % 4 === 0);
  for (var n = new Array(s / 4), x = 0, v = e; x < n.length; x++, v += 4) {
    var p;
    i === "big" ? p = r[v] << 24 | r[v + 1] << 16 | r[v + 2] << 8 | r[v + 3] : p = r[v + 3] << 24 | r[v + 2] << 16 | r[v + 1] << 8 | r[v], n[x] = p >>> 0;
  }
  return n;
}
H.join32 = l0;
function v0(r, e) {
  for (var f = new Array(r.length * 4), i = 0, s = 0; i < r.length; i++, s += 4) {
    var n = r[i];
    e === "big" ? (f[s] = n >>> 24, f[s + 1] = n >>> 16 & 255, f[s + 2] = n >>> 8 & 255, f[s + 3] = n & 255) : (f[s + 3] = n >>> 24, f[s + 2] = n >>> 16 & 255, f[s + 1] = n >>> 8 & 255, f[s] = n & 255);
  }
  return f;
}
H.split32 = v0;
function p0(r, e) {
  return r >>> e | r << 32 - e;
}
H.rotr32 = p0;
function x0(r, e) {
  return r << e | r >>> 32 - e;
}
H.rotl32 = x0;
function m0(r, e) {
  return r + e >>> 0;
}
H.sum32 = m0;
function y0(r, e, f) {
  return r + e + f >>> 0;
}
H.sum32_3 = y0;
function g0(r, e, f, i) {
  return r + e + f + i >>> 0;
}
H.sum32_4 = g0;
function M0(r, e, f, i, s) {
  return r + e + f + i + s >>> 0;
}
H.sum32_5 = M0;
function w0(r, e, f, i) {
  var s = r[e], n = r[e + 1], x = i + n >>> 0, v = (x < i ? 1 : 0) + f + s;
  r[e] = v >>> 0, r[e + 1] = x;
}
H.sum64 = w0;
function _0(r, e, f, i) {
  var s = e + i >>> 0, n = (s < e ? 1 : 0) + r + f;
  return n >>> 0;
}
H.sum64_hi = _0;
function S0(r, e, f, i) {
  var s = e + i;
  return s >>> 0;
}
H.sum64_lo = S0;
function A0(r, e, f, i, s, n, x, v) {
  var p = 0, w = e;
  w = w + i >>> 0, p += w < e ? 1 : 0, w = w + n >>> 0, p += w < n ? 1 : 0, w = w + v >>> 0, p += w < v ? 1 : 0;
  var g = r + f + s + x + p;
  return g >>> 0;
}
H.sum64_4_hi = A0;
function I0(r, e, f, i, s, n, x, v) {
  var p = e + i + n + v;
  return p >>> 0;
}
H.sum64_4_lo = I0;
function F0(r, e, f, i, s, n, x, v, p, w) {
  var g = 0, M = e;
  M = M + i >>> 0, g += M < e ? 1 : 0, M = M + n >>> 0, g += M < n ? 1 : 0, M = M + v >>> 0, g += M < v ? 1 : 0, M = M + w >>> 0, g += M < w ? 1 : 0;
  var I = r + f + s + x + p + g;
  return I >>> 0;
}
H.sum64_5_hi = F0;
function z0(r, e, f, i, s, n, x, v, p, w) {
  var g = e + i + n + v + w;
  return g >>> 0;
}
H.sum64_5_lo = z0;
function R0(r, e, f) {
  var i = e << 32 - f | r >>> f;
  return i >>> 0;
}
H.rotr64_hi = R0;
function B0(r, e, f) {
  var i = r << 32 - f | e >>> f;
  return i >>> 0;
}
H.rotr64_lo = B0;
function P0(r, e, f) {
  return r >>> f;
}
H.shr64_hi = P0;
function q0(r, e, f) {
  var i = r << 32 - f | e >>> f;
  return i >>> 0;
}
H.shr64_lo = q0;
var yt = {}, Wr = H, $0 = ht;
function Ct() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
yt.BlockHash = Ct;
Ct.prototype.update = function(e, f) {
  if (e = Wr.toArray(e, f), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
    e = this.pending;
    var i = e.length % this._delta8;
    this.pending = e.slice(e.length - i, e.length), this.pending.length === 0 && (this.pending = null), e = Wr.join32(e, 0, e.length - i, this.endian);
    for (var s = 0; s < e.length; s += this._delta32)
      this._update(e, s, s + this._delta32);
  }
  return this;
};
Ct.prototype.digest = function(e) {
  return this.update(this._pad()), $0(this.pending === null), this._digest(e);
};
Ct.prototype._pad = function() {
  var e = this.pendingTotal, f = this._delta8, i = f - (e + this.padLength) % f, s = new Array(i + this.padLength);
  s[0] = 128;
  for (var n = 1; n < i; n++)
    s[n] = 0;
  if (e <<= 3, this.endian === "big") {
    for (var x = 8; x < this.padLength; x++)
      s[n++] = 0;
    s[n++] = 0, s[n++] = 0, s[n++] = 0, s[n++] = 0, s[n++] = e >>> 24 & 255, s[n++] = e >>> 16 & 255, s[n++] = e >>> 8 & 255, s[n++] = e & 255;
  } else
    for (s[n++] = e & 255, s[n++] = e >>> 8 & 255, s[n++] = e >>> 16 & 255, s[n++] = e >>> 24 & 255, s[n++] = 0, s[n++] = 0, s[n++] = 0, s[n++] = 0, x = 8; x < this.padLength; x++)
      s[n++] = 0;
  return s;
};
var gt = {}, Ve = {}, E0 = H, Je = E0.rotr32;
function N0(r, e, f, i) {
  if (r === 0)
    return uf(e, f, i);
  if (r === 1 || r === 3)
    return lf(e, f, i);
  if (r === 2)
    return bf(e, f, i);
}
Ve.ft_1 = N0;
function uf(r, e, f) {
  return r & e ^ ~r & f;
}
Ve.ch32 = uf;
function bf(r, e, f) {
  return r & e ^ r & f ^ e & f;
}
Ve.maj32 = bf;
function lf(r, e, f) {
  return r ^ e ^ f;
}
Ve.p32 = lf;
function O0(r) {
  return Je(r, 2) ^ Je(r, 13) ^ Je(r, 22);
}
Ve.s0_256 = O0;
function k0(r) {
  return Je(r, 6) ^ Je(r, 11) ^ Je(r, 25);
}
Ve.s1_256 = k0;
function L0(r) {
  return Je(r, 7) ^ Je(r, 18) ^ r >>> 3;
}
Ve.g0_256 = L0;
function C0(r) {
  return Je(r, 17) ^ Je(r, 19) ^ r >>> 10;
}
Ve.g1_256 = C0;
var bt = H, H0 = yt, T0 = Ve, hr = bt.rotl32, _t = bt.sum32, D0 = bt.sum32_5, J0 = T0.ft_1, vf = H0.BlockHash, K0 = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function Ue() {
  if (!(this instanceof Ue))
    return new Ue();
  vf.call(this), this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ], this.W = new Array(80);
}
bt.inherits(Ue, vf);
var j0 = Ue;
Ue.blockSize = 512;
Ue.outSize = 160;
Ue.hmacStrength = 80;
Ue.padLength = 64;
Ue.prototype._update = function(e, f) {
  for (var i = this.W, s = 0; s < 16; s++)
    i[s] = e[f + s];
  for (; s < i.length; s++)
    i[s] = hr(i[s - 3] ^ i[s - 8] ^ i[s - 14] ^ i[s - 16], 1);
  var n = this.h[0], x = this.h[1], v = this.h[2], p = this.h[3], w = this.h[4];
  for (s = 0; s < i.length; s++) {
    var g = ~~(s / 20), M = D0(hr(n, 5), J0(g, x, v, p), w, i[s], K0[g]);
    w = p, p = v, v = hr(x, 30), x = n, n = M;
  }
  this.h[0] = _t(this.h[0], n), this.h[1] = _t(this.h[1], x), this.h[2] = _t(this.h[2], v), this.h[3] = _t(this.h[3], p), this.h[4] = _t(this.h[4], w);
};
Ue.prototype._digest = function(e) {
  return e === "hex" ? bt.toHex32(this.h, "big") : bt.split32(this.h, "big");
};
var lt = H, U0 = yt, Mt = Ve, W0 = ht, He = lt.sum32, X0 = lt.sum32_4, Z0 = lt.sum32_5, V0 = Mt.ch32, Y0 = Mt.maj32, G0 = Mt.s0_256, Q0 = Mt.s1_256, ea = Mt.g0_256, ta = Mt.g1_256, pf = U0.BlockHash, ra = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
function We() {
  if (!(this instanceof We))
    return new We();
  pf.call(this), this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], this.k = ra, this.W = new Array(64);
}
lt.inherits(We, pf);
var xf = We;
We.blockSize = 512;
We.outSize = 256;
We.hmacStrength = 192;
We.padLength = 64;
We.prototype._update = function(e, f) {
  for (var i = this.W, s = 0; s < 16; s++)
    i[s] = e[f + s];
  for (; s < i.length; s++)
    i[s] = X0(ta(i[s - 2]), i[s - 7], ea(i[s - 15]), i[s - 16]);
  var n = this.h[0], x = this.h[1], v = this.h[2], p = this.h[3], w = this.h[4], g = this.h[5], M = this.h[6], I = this.h[7];
  for (W0(this.k.length === i.length), s = 0; s < i.length; s++) {
    var S = Z0(I, Q0(w), V0(w, g, M), this.k[s], i[s]), F = He(G0(n), Y0(n, x, v));
    I = M, M = g, g = w, w = He(p, S), p = v, v = x, x = n, n = He(S, F);
  }
  this.h[0] = He(this.h[0], n), this.h[1] = He(this.h[1], x), this.h[2] = He(this.h[2], v), this.h[3] = He(this.h[3], p), this.h[4] = He(this.h[4], w), this.h[5] = He(this.h[5], g), this.h[6] = He(this.h[6], M), this.h[7] = He(this.h[7], I);
};
We.prototype._digest = function(e) {
  return e === "hex" ? lt.toHex32(this.h, "big") : lt.split32(this.h, "big");
};
var mr = H, mf = xf;
function Ge() {
  if (!(this instanceof Ge))
    return new Ge();
  mf.call(this), this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
mr.inherits(Ge, mf);
var fa = Ge;
Ge.blockSize = 512;
Ge.outSize = 224;
Ge.hmacStrength = 192;
Ge.padLength = 64;
Ge.prototype._digest = function(e) {
  return e === "hex" ? mr.toHex32(this.h.slice(0, 7), "big") : mr.split32(this.h.slice(0, 7), "big");
};
var Ee = H, aa = yt, ia = ht, Ke = Ee.rotr64_hi, je = Ee.rotr64_lo, yf = Ee.shr64_hi, gf = Ee.shr64_lo, rt = Ee.sum64, or = Ee.sum64_hi, ur = Ee.sum64_lo, da = Ee.sum64_4_hi, na = Ee.sum64_4_lo, sa = Ee.sum64_5_hi, ca = Ee.sum64_5_lo, Mf = aa.BlockHash, ha = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
function De() {
  if (!(this instanceof De))
    return new De();
  Mf.call(this), this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ], this.k = ha, this.W = new Array(160);
}
Ee.inherits(De, Mf);
var wf = De;
De.blockSize = 1024;
De.outSize = 512;
De.hmacStrength = 192;
De.padLength = 128;
De.prototype._prepareBlock = function(e, f) {
  for (var i = this.W, s = 0; s < 32; s++)
    i[s] = e[f + s];
  for (; s < i.length; s += 2) {
    var n = Ma(i[s - 4], i[s - 3]), x = wa(i[s - 4], i[s - 3]), v = i[s - 14], p = i[s - 13], w = ya(i[s - 30], i[s - 29]), g = ga(i[s - 30], i[s - 29]), M = i[s - 32], I = i[s - 31];
    i[s] = da(
      n,
      x,
      v,
      p,
      w,
      g,
      M,
      I
    ), i[s + 1] = na(
      n,
      x,
      v,
      p,
      w,
      g,
      M,
      I
    );
  }
};
De.prototype._update = function(e, f) {
  this._prepareBlock(e, f);
  var i = this.W, s = this.h[0], n = this.h[1], x = this.h[2], v = this.h[3], p = this.h[4], w = this.h[5], g = this.h[6], M = this.h[7], I = this.h[8], S = this.h[9], F = this.h[10], R = this.h[11], O = this.h[12], N = this.h[13], L = this.h[14], C = this.h[15];
  ia(this.k.length === i.length);
  for (var J = 0; J < i.length; J += 2) {
    var T = L, _ = C, z = xa(I, S), P = ma(I, S), A = oa(I, S, F, R, O), $ = ua(I, S, F, R, O, N), o = this.k[J], t = this.k[J + 1], a = i[J], c = i[J + 1], h = sa(
      T,
      _,
      z,
      P,
      A,
      $,
      o,
      t,
      a,
      c
    ), b = ca(
      T,
      _,
      z,
      P,
      A,
      $,
      o,
      t,
      a,
      c
    );
    T = va(s, n), _ = pa(s, n), z = ba(s, n, x, v, p), P = la(s, n, x, v, p, w);
    var m = or(T, _, z, P), y = ur(T, _, z, P);
    L = O, C = N, O = F, N = R, F = I, R = S, I = or(g, M, h, b), S = ur(M, M, h, b), g = p, M = w, p = x, w = v, x = s, v = n, s = or(h, b, m, y), n = ur(h, b, m, y);
  }
  rt(this.h, 0, s, n), rt(this.h, 2, x, v), rt(this.h, 4, p, w), rt(this.h, 6, g, M), rt(this.h, 8, I, S), rt(this.h, 10, F, R), rt(this.h, 12, O, N), rt(this.h, 14, L, C);
};
De.prototype._digest = function(e) {
  return e === "hex" ? Ee.toHex32(this.h, "big") : Ee.split32(this.h, "big");
};
function oa(r, e, f, i, s) {
  var n = r & f ^ ~r & s;
  return n < 0 && (n += 4294967296), n;
}
function ua(r, e, f, i, s, n) {
  var x = e & i ^ ~e & n;
  return x < 0 && (x += 4294967296), x;
}
function ba(r, e, f, i, s) {
  var n = r & f ^ r & s ^ f & s;
  return n < 0 && (n += 4294967296), n;
}
function la(r, e, f, i, s, n) {
  var x = e & i ^ e & n ^ i & n;
  return x < 0 && (x += 4294967296), x;
}
function va(r, e) {
  var f = Ke(r, e, 28), i = Ke(e, r, 2), s = Ke(e, r, 7), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function pa(r, e) {
  var f = je(r, e, 28), i = je(e, r, 2), s = je(e, r, 7), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function xa(r, e) {
  var f = Ke(r, e, 14), i = Ke(r, e, 18), s = Ke(e, r, 9), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function ma(r, e) {
  var f = je(r, e, 14), i = je(r, e, 18), s = je(e, r, 9), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function ya(r, e) {
  var f = Ke(r, e, 1), i = Ke(r, e, 8), s = yf(r, e, 7), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function ga(r, e) {
  var f = je(r, e, 1), i = je(r, e, 8), s = gf(r, e, 7), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function Ma(r, e) {
  var f = Ke(r, e, 19), i = Ke(e, r, 29), s = yf(r, e, 6), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
function wa(r, e) {
  var f = je(r, e, 19), i = je(e, r, 29), s = gf(r, e, 6), n = f ^ i ^ s;
  return n < 0 && (n += 4294967296), n;
}
var yr = H, _f = wf;
function Qe() {
  if (!(this instanceof Qe))
    return new Qe();
  _f.call(this), this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
yr.inherits(Qe, _f);
var _a = Qe;
Qe.blockSize = 1024;
Qe.outSize = 384;
Qe.hmacStrength = 192;
Qe.padLength = 128;
Qe.prototype._digest = function(e) {
  return e === "hex" ? yr.toHex32(this.h.slice(0, 12), "big") : yr.split32(this.h.slice(0, 12), "big");
};
gt.sha1 = j0;
gt.sha224 = fa;
gt.sha256 = xf;
gt.sha384 = _a;
gt.sha512 = wf;
var Sf = {}, ct = H, Sa = yt, zt = ct.rotl32, Xr = ct.sum32, St = ct.sum32_3, Zr = ct.sum32_4, Af = Sa.BlockHash;
function Xe() {
  if (!(this instanceof Xe))
    return new Xe();
  Af.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
ct.inherits(Xe, Af);
Sf.ripemd160 = Xe;
Xe.blockSize = 512;
Xe.outSize = 160;
Xe.hmacStrength = 192;
Xe.padLength = 64;
Xe.prototype._update = function(e, f) {
  for (var i = this.h[0], s = this.h[1], n = this.h[2], x = this.h[3], v = this.h[4], p = i, w = s, g = n, M = x, I = v, S = 0; S < 80; S++) {
    var F = Xr(
      zt(
        Zr(i, Vr(S, s, n, x), e[Fa[S] + f], Aa(S)),
        Ra[S]
      ),
      v
    );
    i = v, v = x, x = zt(n, 10), n = s, s = F, F = Xr(
      zt(
        Zr(p, Vr(79 - S, w, g, M), e[za[S] + f], Ia(S)),
        Ba[S]
      ),
      I
    ), p = I, I = M, M = zt(g, 10), g = w, w = F;
  }
  F = St(this.h[1], n, M), this.h[1] = St(this.h[2], x, I), this.h[2] = St(this.h[3], v, p), this.h[3] = St(this.h[4], i, w), this.h[4] = St(this.h[0], s, g), this.h[0] = F;
};
Xe.prototype._digest = function(e) {
  return e === "hex" ? ct.toHex32(this.h, "little") : ct.split32(this.h, "little");
};
function Vr(r, e, f, i) {
  return r <= 15 ? e ^ f ^ i : r <= 31 ? e & f | ~e & i : r <= 47 ? (e | ~f) ^ i : r <= 63 ? e & i | f & ~i : e ^ (f | ~i);
}
function Aa(r) {
  return r <= 15 ? 0 : r <= 31 ? 1518500249 : r <= 47 ? 1859775393 : r <= 63 ? 2400959708 : 2840853838;
}
function Ia(r) {
  return r <= 15 ? 1352829926 : r <= 31 ? 1548603684 : r <= 47 ? 1836072691 : r <= 63 ? 2053994217 : 0;
}
var Fa = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
], za = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
], Ra = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
], Ba = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
], Pa = H, qa = ht;
function vt(r, e, f) {
  if (!(this instanceof vt))
    return new vt(r, e, f);
  this.Hash = r, this.blockSize = r.blockSize / 8, this.outSize = r.outSize / 8, this.inner = null, this.outer = null, this._init(Pa.toArray(e, f));
}
var $a = vt;
vt.prototype._init = function(e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()), qa(e.length <= this.blockSize);
  for (var f = e.length; f < this.blockSize; f++)
    e.push(0);
  for (f = 0; f < e.length; f++)
    e[f] ^= 54;
  for (this.inner = new this.Hash().update(e), f = 0; f < e.length; f++)
    e[f] ^= 106;
  this.outer = new this.Hash().update(e);
};
vt.prototype.update = function(e, f) {
  return this.inner.update(e, f), this;
};
vt.prototype.digest = function(e) {
  return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
(function(r) {
  var e = r;
  e.utils = H, e.common = yt, e.sha = gt, e.ripemd = Sf, e.hmac = $a, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
})(Lt);
var br, Yr;
function Ea() {
  return Yr || (Yr = 1, br = {
    doubles: {
      step: 4,
      points: [
        [
          "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
          "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
        ],
        [
          "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
          "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
        ],
        [
          "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
          "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
        ],
        [
          "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
          "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
        ],
        [
          "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
          "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
        ],
        [
          "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
          "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
        ],
        [
          "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
          "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
        ],
        [
          "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
          "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
        ],
        [
          "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
          "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
        ],
        [
          "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
          "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
        ],
        [
          "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
          "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
        ],
        [
          "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
          "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
        ],
        [
          "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
          "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
        ],
        [
          "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
          "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
        ],
        [
          "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
          "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
        ],
        [
          "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
          "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
        ],
        [
          "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
          "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
        ],
        [
          "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
          "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
        ],
        [
          "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
          "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
        ],
        [
          "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
          "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
        ],
        [
          "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
          "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
        ],
        [
          "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
          "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
        ],
        [
          "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
          "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
        ],
        [
          "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
          "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
        ],
        [
          "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
          "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
        ],
        [
          "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
          "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
        ],
        [
          "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
          "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
        ],
        [
          "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
          "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
        ],
        [
          "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
          "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
        ],
        [
          "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
          "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
        ],
        [
          "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
          "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
        ],
        [
          "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
          "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
        ],
        [
          "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
          "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
        ],
        [
          "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
          "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
        ],
        [
          "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
          "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
        ],
        [
          "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
          "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
        ],
        [
          "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
          "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
        ],
        [
          "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
          "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
        ],
        [
          "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
          "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
        ],
        [
          "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
          "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
        ],
        [
          "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
          "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
        ],
        [
          "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
          "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
        ],
        [
          "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
          "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
        ],
        [
          "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
          "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
        ],
        [
          "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
          "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
        ],
        [
          "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
          "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
        ],
        [
          "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
          "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
        ],
        [
          "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
          "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
        ],
        [
          "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
          "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
        ],
        [
          "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
          "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
        ],
        [
          "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
          "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
        ],
        [
          "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
          "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
        ],
        [
          "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
          "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
        ],
        [
          "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
          "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
        ],
        [
          "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
          "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
        ],
        [
          "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
          "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
        ],
        [
          "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
          "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
        ],
        [
          "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
          "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
        ],
        [
          "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
          "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
        ],
        [
          "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
          "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
        ],
        [
          "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
          "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
        ],
        [
          "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
          "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
        ],
        [
          "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
          "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
        ],
        [
          "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
          "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
        ],
        [
          "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
          "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
        ]
      ]
    },
    naf: {
      wnd: 7,
      points: [
        [
          "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
          "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
        ],
        [
          "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
          "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
        ],
        [
          "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
          "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
        ],
        [
          "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
        ],
        [
          "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
          "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
        ],
        [
          "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
          "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
        ],
        [
          "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
          "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
        ],
        [
          "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
          "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
        ],
        [
          "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
          "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
        ],
        [
          "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
          "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
        ],
        [
          "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
          "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
        ],
        [
          "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
          "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
        ],
        [
          "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
          "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
        ],
        [
          "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
          "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
        ],
        [
          "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
          "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
        ],
        [
          "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
          "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
        ],
        [
          "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
          "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
        ],
        [
          "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
          "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
        ],
        [
          "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
          "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
        ],
        [
          "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
          "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
        ],
        [
          "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
          "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
        ],
        [
          "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
          "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
        ],
        [
          "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
          "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
        ],
        [
          "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
          "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
        ],
        [
          "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
          "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
        ],
        [
          "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
          "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
        ],
        [
          "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
          "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
        ],
        [
          "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
          "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
        ],
        [
          "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
          "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
        ],
        [
          "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
          "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
        ],
        [
          "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
          "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
        ],
        [
          "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
          "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
        ],
        [
          "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
          "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
        ],
        [
          "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
          "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
        ],
        [
          "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
          "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
        ],
        [
          "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
          "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
        ],
        [
          "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
          "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
        ],
        [
          "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
          "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
        ],
        [
          "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
          "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
        ],
        [
          "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
          "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
        ],
        [
          "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
          "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
        ],
        [
          "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
          "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
        ],
        [
          "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
          "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
        ],
        [
          "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
          "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
        ],
        [
          "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
          "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
        ],
        [
          "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
          "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
        ],
        [
          "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
          "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
        ],
        [
          "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
          "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
        ],
        [
          "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
          "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
        ],
        [
          "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
          "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
        ],
        [
          "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
          "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
        ],
        [
          "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
          "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
        ],
        [
          "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
          "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
        ],
        [
          "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
          "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
        ],
        [
          "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
          "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
        ],
        [
          "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
          "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
        ],
        [
          "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
          "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
        ],
        [
          "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
          "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
        ],
        [
          "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
          "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
        ],
        [
          "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
          "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
        ],
        [
          "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
          "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
        ],
        [
          "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
          "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
        ],
        [
          "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
          "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
        ],
        [
          "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
          "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
        ],
        [
          "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
          "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
        ],
        [
          "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
          "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
        ],
        [
          "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
          "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
        ],
        [
          "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
          "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
        ],
        [
          "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
          "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
        ],
        [
          "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
          "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
        ],
        [
          "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
          "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
        ],
        [
          "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
          "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
        ],
        [
          "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
          "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
        ],
        [
          "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
          "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
        ],
        [
          "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
          "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
        ],
        [
          "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
          "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
        ],
        [
          "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
          "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
        ],
        [
          "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
          "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
        ],
        [
          "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
          "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
        ],
        [
          "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
          "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
        ],
        [
          "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
          "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
        ],
        [
          "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
          "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
        ],
        [
          "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
          "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
        ],
        [
          "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
          "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
        ],
        [
          "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
          "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
        ],
        [
          "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
          "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
        ],
        [
          "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
          "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
        ],
        [
          "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
          "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
        ],
        [
          "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
          "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
        ],
        [
          "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
          "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
        ],
        [
          "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
          "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
        ],
        [
          "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
          "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
        ],
        [
          "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
          "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
        ],
        [
          "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
          "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
        ],
        [
          "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
          "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
        ],
        [
          "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
          "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
        ],
        [
          "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
          "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
        ],
        [
          "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
          "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
        ],
        [
          "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
          "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
        ],
        [
          "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
          "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
        ],
        [
          "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
          "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
        ],
        [
          "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
          "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
        ],
        [
          "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
          "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
        ],
        [
          "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
          "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
        ],
        [
          "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
          "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
        ],
        [
          "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
          "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
        ],
        [
          "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
          "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
        ],
        [
          "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
          "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
        ],
        [
          "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
          "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
        ],
        [
          "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
          "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
        ],
        [
          "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
          "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
        ],
        [
          "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
          "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
        ],
        [
          "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
          "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
        ],
        [
          "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
          "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
        ],
        [
          "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
          "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
        ],
        [
          "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
          "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
        ],
        [
          "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
          "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
        ],
        [
          "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
          "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
        ],
        [
          "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
          "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
        ],
        [
          "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
          "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
        ],
        [
          "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
          "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
        ],
        [
          "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
          "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
        ],
        [
          "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
          "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
        ],
        [
          "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
          "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
        ],
        [
          "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
          "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
        ],
        [
          "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
          "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
        ],
        [
          "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
          "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
        ]
      ]
    }
  }), br;
}
(function(r) {
  var e = r, f = Lt, i = Sr, s = Oe, n = s.assert;
  function x(w) {
    w.type === "short" ? this.curve = new i.short(w) : w.type === "edwards" ? this.curve = new i.edwards(w) : this.curve = new i.mont(w), this.g = this.curve.g, this.n = this.curve.n, this.hash = w.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  e.PresetCurve = x;
  function v(w, g) {
    Object.defineProperty(e, w, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var M = new x(g);
        return Object.defineProperty(e, w, {
          configurable: !0,
          enumerable: !0,
          value: M
        }), M;
      }
    });
  }
  v("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: f.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), v("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: f.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), v("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: f.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), v("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: f.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), v("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: f.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), v("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: f.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), v("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    // -121665 * (121666^(-1)) (mod P)
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: f.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      // 4/5
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var p;
  try {
    p = Ea();
  } catch {
    p = void 0;
  }
  v("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: f.sha256,
    // Precomputed endomorphism
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      p
    ]
  });
})(kt);
var Na = Lt, st = wr, If = ht;
function at(r) {
  if (!(this instanceof at))
    return new at(r);
  this.hash = r.hash, this.predResist = !!r.predResist, this.outLen = this.hash.outSize, this.minEntropy = r.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = st.toArray(r.entropy, r.entropyEnc || "hex"), f = st.toArray(r.nonce, r.nonceEnc || "hex"), i = st.toArray(r.pers, r.persEnc || "hex");
  If(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(e, f, i);
}
var Oa = at;
at.prototype._init = function(e, f, i) {
  var s = e.concat(f).concat(i);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var n = 0; n < this.V.length; n++)
    this.K[n] = 0, this.V[n] = 1;
  this._update(s), this._reseed = 1, this.reseedInterval = 281474976710656;
};
at.prototype._hmac = function() {
  return new Na.hmac(this.hash, this.K);
};
at.prototype._update = function(e) {
  var f = this._hmac().update(this.V).update([0]);
  e && (f = f.update(e)), this.K = f.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
};
at.prototype.reseed = function(e, f, i, s) {
  typeof f != "string" && (s = i, i = f, f = null), e = st.toArray(e, f), i = st.toArray(i, s), If(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(e.concat(i || [])), this._reseed = 1;
};
at.prototype.generate = function(e, f, i, s) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof f != "string" && (s = i, i = f, f = null), i && (i = st.toArray(i, s || "hex"), this._update(i));
  for (var n = []; n.length < e; )
    this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
  var x = n.slice(0, e);
  return this._update(i), this._reseed++, st.encode(x, f);
};
var ka = et, La = Oe, gr = La.assert;
function $e(r, e) {
  this.ec = r, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Ca = $e;
$e.fromPublic = function(e, f, i) {
  return f instanceof $e ? f : new $e(e, {
    pub: f,
    pubEnc: i
  });
};
$e.fromPrivate = function(e, f, i) {
  return f instanceof $e ? f : new $e(e, {
    priv: f,
    privEnc: i
  });
};
$e.prototype.validate = function() {
  var e = this.getPublic();
  return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
$e.prototype.getPublic = function(e, f) {
  return typeof e == "string" && (f = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), f ? this.pub.encode(f, e) : this.pub;
};
$e.prototype.getPrivate = function(e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
$e.prototype._importPrivate = function(e, f) {
  this.priv = new ka(e, f || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
$e.prototype._importPublic = function(e, f) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont" ? gr(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && gr(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, f);
};
$e.prototype.derive = function(e) {
  return e.validate() || gr(e.validate(), "public point not validated"), e.mul(this.priv).getX();
};
$e.prototype.sign = function(e, f, i) {
  return this.ec.sign(e, this, f, i);
};
$e.prototype.verify = function(e, f, i) {
  return this.ec.verify(e, f, this, void 0, i);
};
$e.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qt = et, Ir = Oe, Ha = Ir.assert;
function Ht(r, e) {
  if (r instanceof Ht)
    return r;
  this._importDER(r, e) || (Ha(r.r && r.s, "Signature without r or s"), this.r = new qt(r.r, 16), this.s = new qt(r.s, 16), r.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = r.recoveryParam);
}
var Ta = Ht;
function Da() {
  this.place = 0;
}
function lr(r, e) {
  var f = r[e.place++];
  if (!(f & 128))
    return f;
  var i = f & 15;
  if (i === 0 || i > 4 || r[e.place] === 0)
    return !1;
  for (var s = 0, n = 0, x = e.place; n < i; n++, x++)
    s <<= 8, s |= r[x], s >>>= 0;
  return s <= 127 ? !1 : (e.place = x, s);
}
function Gr(r) {
  for (var e = 0, f = r.length - 1; !r[e] && !(r[e + 1] & 128) && e < f; )
    e++;
  return e === 0 ? r : r.slice(e);
}
Ht.prototype._importDER = function(e, f) {
  e = Ir.toArray(e, f);
  var i = new Da();
  if (e[i.place++] !== 48)
    return !1;
  var s = lr(e, i);
  if (s === !1 || s + i.place !== e.length || e[i.place++] !== 2)
    return !1;
  var n = lr(e, i);
  if (n === !1 || e[i.place] & 128)
    return !1;
  var x = e.slice(i.place, n + i.place);
  if (i.place += n, e[i.place++] !== 2)
    return !1;
  var v = lr(e, i);
  if (v === !1 || e.length !== v + i.place || e[i.place] & 128)
    return !1;
  var p = e.slice(i.place, v + i.place);
  if (x[0] === 0)
    if (x[1] & 128)
      x = x.slice(1);
    else
      return !1;
  if (p[0] === 0)
    if (p[1] & 128)
      p = p.slice(1);
    else
      return !1;
  return this.r = new qt(x), this.s = new qt(p), this.recoveryParam = null, !0;
};
function vr(r, e) {
  if (e < 128) {
    r.push(e);
    return;
  }
  var f = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (r.push(f | 128); --f; )
    r.push(e >>> (f << 3) & 255);
  r.push(e);
}
Ht.prototype.toDER = function(e) {
  var f = this.r.toArray(), i = this.s.toArray();
  for (f[0] & 128 && (f = [0].concat(f)), i[0] & 128 && (i = [0].concat(i)), f = Gr(f), i = Gr(i); !i[0] && !(i[1] & 128); )
    i = i.slice(1);
  var s = [2];
  vr(s, f.length), s = s.concat(f), s.push(2), vr(s, i.length);
  var n = s.concat(i), x = [48];
  return vr(x, n.length), x = x.concat(n), Ir.encode(x, e);
};
var Te = et, Ff = Oa, Ja = Oe, pr = kt, Ka = df, nt = Ja.assert, Fr = Ca, Tt = Ta;
function ke(r) {
  if (!(this instanceof ke))
    return new ke(r);
  typeof r == "string" && (nt(
    Object.prototype.hasOwnProperty.call(pr, r),
    "Unknown curve " + r
  ), r = pr[r]), r instanceof pr.PresetCurve && (r = { curve: r }), this.curve = r.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = r.curve.g, this.g.precompute(r.curve.n.bitLength() + 1), this.hash = r.hash || r.curve.hash;
}
var ja = ke;
ke.prototype.keyPair = function(e) {
  return new Fr(this, e);
};
ke.prototype.keyFromPrivate = function(e, f) {
  return Fr.fromPrivate(this, e, f);
};
ke.prototype.keyFromPublic = function(e, f) {
  return Fr.fromPublic(this, e, f);
};
ke.prototype.genKeyPair = function(e) {
  e || (e = {});
  for (var f = new Ff({
    hash: this.hash,
    pers: e.pers,
    persEnc: e.persEnc || "utf8",
    entropy: e.entropy || Ka(this.hash.hmacStrength),
    entropyEnc: e.entropy && e.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), i = this.n.byteLength(), s = this.n.sub(new Te(2)); ; ) {
    var n = new Te(f.generate(i));
    if (!(n.cmp(s) > 0))
      return n.iaddn(1), this.keyFromPrivate(n);
  }
};
ke.prototype._truncateToN = function(e, f, i) {
  var s;
  if (Te.isBN(e) || typeof e == "number")
    e = new Te(e, 16), s = e.byteLength();
  else if (typeof e == "object")
    s = e.length, e = new Te(e, 16);
  else {
    var n = e.toString();
    s = n.length + 1 >>> 1, e = new Te(n, 16);
  }
  typeof i != "number" && (i = s * 8);
  var x = i - this.n.bitLength();
  return x > 0 && (e = e.ushrn(x)), !f && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
};
ke.prototype.sign = function(e, f, i, s) {
  if (typeof i == "object" && (s = i, i = null), s || (s = {}), typeof e != "string" && typeof e != "number" && !Te.isBN(e)) {
    nt(
      typeof e == "object" && e && typeof e.length == "number",
      "Expected message to be an array-like, a hex string, or a BN instance"
    ), nt(e.length >>> 0 === e.length);
    for (var n = 0; n < e.length; n++) nt((e[n] & 255) === e[n]);
  }
  f = this.keyFromPrivate(f, i), e = this._truncateToN(e, !1, s.msgBitLength), nt(!e.isNeg(), "Can not sign a negative message");
  var x = this.n.byteLength(), v = f.getPrivate().toArray("be", x), p = e.toArray("be", x);
  nt(new Te(p).eq(e), "Can not sign message");
  for (var w = new Ff({
    hash: this.hash,
    entropy: v,
    nonce: p,
    pers: s.pers,
    persEnc: s.persEnc || "utf8"
  }), g = this.n.sub(new Te(1)), M = 0; ; M++) {
    var I = s.k ? s.k(M) : new Te(w.generate(this.n.byteLength()));
    if (I = this._truncateToN(I, !0), !(I.cmpn(1) <= 0 || I.cmp(g) >= 0)) {
      var S = this.g.mul(I);
      if (!S.isInfinity()) {
        var F = S.getX(), R = F.umod(this.n);
        if (R.cmpn(0) !== 0) {
          var O = I.invm(this.n).mul(R.mul(f.getPrivate()).iadd(e));
          if (O = O.umod(this.n), O.cmpn(0) !== 0) {
            var N = (S.getY().isOdd() ? 1 : 0) | (F.cmp(R) !== 0 ? 2 : 0);
            return s.canonical && O.cmp(this.nh) > 0 && (O = this.n.sub(O), N ^= 1), new Tt({ r: R, s: O, recoveryParam: N });
          }
        }
      }
    }
  }
};
ke.prototype.verify = function(e, f, i, s, n) {
  n || (n = {}), e = this._truncateToN(e, !1, n.msgBitLength), i = this.keyFromPublic(i, s), f = new Tt(f, "hex");
  var x = f.r, v = f.s;
  if (x.cmpn(1) < 0 || x.cmp(this.n) >= 0 || v.cmpn(1) < 0 || v.cmp(this.n) >= 0)
    return !1;
  var p = v.invm(this.n), w = p.mul(e).umod(this.n), g = p.mul(x).umod(this.n), M;
  return this.curve._maxwellTrick ? (M = this.g.jmulAdd(w, i.getPublic(), g), M.isInfinity() ? !1 : M.eqXToP(x)) : (M = this.g.mulAdd(w, i.getPublic(), g), M.isInfinity() ? !1 : M.getX().umod(this.n).cmp(x) === 0);
};
ke.prototype.recoverPubKey = function(r, e, f, i) {
  nt((3 & f) === f, "The recovery param is more than two bits"), e = new Tt(e, i);
  var s = this.n, n = new Te(r), x = e.r, v = e.s, p = f & 1, w = f >> 1;
  if (x.cmp(this.curve.p.umod(this.curve.n)) >= 0 && w)
    throw new Error("Unable to find sencond key candinate");
  w ? x = this.curve.pointFromX(x.add(this.curve.n), p) : x = this.curve.pointFromX(x, p);
  var g = e.r.invm(s), M = s.sub(n).mul(g).umod(s), I = v.mul(g).umod(s);
  return this.g.mulAdd(M, x, I);
};
ke.prototype.getKeyRecoveryParam = function(r, e, f, i) {
  if (e = new Tt(e, i), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var s = 0; s < 4; s++) {
    var n;
    try {
      n = this.recoverPubKey(r, e, s);
    } catch {
      continue;
    }
    if (n.eq(f))
      return s;
  }
  throw new Error("Unable to find valid recovery factor");
};
var It = Oe, zf = It.assert, Qr = It.parseBytes, wt = It.cachedProperty;
function Re(r, e) {
  this.eddsa = r, this._secret = Qr(e.secret), r.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = Qr(e.pub);
}
Re.fromPublic = function(e, f) {
  return f instanceof Re ? f : new Re(e, { pub: f });
};
Re.fromSecret = function(e, f) {
  return f instanceof Re ? f : new Re(e, { secret: f });
};
Re.prototype.secret = function() {
  return this._secret;
};
wt(Re, "pubBytes", function() {
  return this.eddsa.encodePoint(this.pub());
});
wt(Re, "pub", function() {
  return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
});
wt(Re, "privBytes", function() {
  var e = this.eddsa, f = this.hash(), i = e.encodingLength - 1, s = f.slice(0, e.encodingLength);
  return s[0] &= 248, s[i] &= 127, s[i] |= 64, s;
});
wt(Re, "priv", function() {
  return this.eddsa.decodeInt(this.privBytes());
});
wt(Re, "hash", function() {
  return this.eddsa.hash().update(this.secret()).digest();
});
wt(Re, "messagePrefix", function() {
  return this.hash().slice(this.eddsa.encodingLength);
});
Re.prototype.sign = function(e) {
  return zf(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
};
Re.prototype.verify = function(e, f) {
  return this.eddsa.verify(e, f, this);
};
Re.prototype.getSecret = function(e) {
  return zf(this._secret, "KeyPair is public only"), It.encode(this.secret(), e);
};
Re.prototype.getPublic = function(e) {
  return It.encode(this.pubBytes(), e);
};
var Ua = Re, Wa = et, Dt = Oe, ef = Dt.assert, Jt = Dt.cachedProperty, Xa = Dt.parseBytes;
function ot(r, e) {
  this.eddsa = r, typeof e != "object" && (e = Xa(e)), Array.isArray(e) && (ef(e.length === r.encodingLength * 2, "Signature has invalid size"), e = {
    R: e.slice(0, r.encodingLength),
    S: e.slice(r.encodingLength)
  }), ef(e.R && e.S, "Signature without R or S"), r.isPoint(e.R) && (this._R = e.R), e.S instanceof Wa && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
}
Jt(ot, "S", function() {
  return this.eddsa.decodeInt(this.Sencoded());
});
Jt(ot, "R", function() {
  return this.eddsa.decodePoint(this.Rencoded());
});
Jt(ot, "Rencoded", function() {
  return this.eddsa.encodePoint(this.R());
});
Jt(ot, "Sencoded", function() {
  return this.eddsa.encodeInt(this.S());
});
ot.prototype.toBytes = function() {
  return this.Rencoded().concat(this.Sencoded());
};
ot.prototype.toHex = function() {
  return Dt.encode(this.toBytes(), "hex").toUpperCase();
};
var Za = ot, Va = Lt, Ya = kt, pt = Oe, Ga = pt.assert, Rf = pt.parseBytes, Bf = Ua, tf = Za;
function Ne(r) {
  if (Ga(r === "ed25519", "only tested with ed25519 so far"), !(this instanceof Ne))
    return new Ne(r);
  r = Ya[r].curve, this.curve = r, this.g = r.g, this.g.precompute(r.n.bitLength() + 1), this.pointClass = r.point().constructor, this.encodingLength = Math.ceil(r.n.bitLength() / 8), this.hash = Va.sha512;
}
var Qa = Ne;
Ne.prototype.sign = function(e, f) {
  e = Rf(e);
  var i = this.keyFromSecret(f), s = this.hashInt(i.messagePrefix(), e), n = this.g.mul(s), x = this.encodePoint(n), v = this.hashInt(x, i.pubBytes(), e).mul(i.priv()), p = s.add(v).umod(this.curve.n);
  return this.makeSignature({ R: n, S: p, Rencoded: x });
};
Ne.prototype.verify = function(e, f, i) {
  if (e = Rf(e), f = this.makeSignature(f), f.S().gte(f.eddsa.curve.n) || f.S().isNeg())
    return !1;
  var s = this.keyFromPublic(i), n = this.hashInt(f.Rencoded(), s.pubBytes(), e), x = this.g.mul(f.S()), v = f.R().add(s.pub().mul(n));
  return v.eq(x);
};
Ne.prototype.hashInt = function() {
  for (var e = this.hash(), f = 0; f < arguments.length; f++)
    e.update(arguments[f]);
  return pt.intFromLE(e.digest()).umod(this.curve.n);
};
Ne.prototype.keyFromPublic = function(e) {
  return Bf.fromPublic(this, e);
};
Ne.prototype.keyFromSecret = function(e) {
  return Bf.fromSecret(this, e);
};
Ne.prototype.makeSignature = function(e) {
  return e instanceof tf ? e : new tf(this, e);
};
Ne.prototype.encodePoint = function(e) {
  var f = e.getY().toArray("le", this.encodingLength);
  return f[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, f;
};
Ne.prototype.decodePoint = function(e) {
  e = pt.parseBytes(e);
  var f = e.length - 1, i = e.slice(0, f).concat(e[f] & -129), s = (e[f] & 128) !== 0, n = pt.intFromLE(i);
  return this.curve.pointFromY(n, s);
};
Ne.prototype.encodeInt = function(e) {
  return e.toArray("le", this.encodingLength);
};
Ne.prototype.decodeInt = function(e) {
  return pt.intFromLE(e);
};
Ne.prototype.isPoint = function(e) {
  return e instanceof this.pointClass;
};
(function(r) {
  var e = r;
  e.version = Vf.version, e.utils = Oe, e.rand = df, e.curve = Sr, e.curves = kt, e.ec = ja, e.eddsa = Qa;
})(ff);
const ei = new ff.eddsa("ed25519"), Pf = (r, e) => {
  const f = ei.keyFromSecret(r), i = f.getPublic(), s = f.sign(e).toBytes();
  return { public_key: jr(i), signature: jr(s) };
}, qf = (r) => Uint8Array.from(window.atob(r.replace(/-/g, "+").replace(/_/g, "/")), (e) => e.charCodeAt(0)), ti = (r = 12) => {
  const e = [], f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < r; i++) e.push(f.charAt(Math.floor(Math.random() * f.length)));
  return e.join("");
};
var $f = { exports: {} };
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
(function(r) {
  (function() {
    var e = "input is invalid type", f = typeof window == "object", i = f ? window : {};
    i.JS_SHA256_NO_WINDOW && (f = !1);
    var s = !f && typeof self == "object", n = !i.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    n ? i = rf : s && (i = self);
    var x = !i.JS_SHA256_NO_COMMON_JS && !0 && r.exports, v = !i.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", p = "0123456789abcdef".split(""), w = [-2147483648, 8388608, 32768, 128], g = [24, 16, 8, 0], M = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ], I = ["hex", "array", "digest", "arrayBuffer"], S = [];
    (i.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(_) {
      return Object.prototype.toString.call(_) === "[object Array]";
    }), v && (i.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(_) {
      return typeof _ == "object" && _.buffer && _.buffer.constructor === ArrayBuffer;
    });
    var F = function(_, z) {
      return function(P) {
        return new C(z, !0).update(P)[_]();
      };
    }, R = function(_) {
      var z = F("hex", _);
      n && (z = O(z, _)), z.create = function() {
        return new C(_);
      }, z.update = function($) {
        return z.create().update($);
      };
      for (var P = 0; P < I.length; ++P) {
        var A = I[P];
        z[A] = F(A, _);
      }
      return z;
    }, O = function(_, z) {
      var P = Rt, A = Rt.Buffer, $ = z ? "sha224" : "sha256", o;
      A.from && !i.JS_SHA256_NO_BUFFER_FROM ? o = A.from : o = function(a) {
        return new A(a);
      };
      var t = function(a) {
        if (typeof a == "string")
          return P.createHash($).update(a, "utf8").digest("hex");
        if (a == null)
          throw new Error(e);
        return a.constructor === ArrayBuffer && (a = new Uint8Array(a)), Array.isArray(a) || ArrayBuffer.isView(a) || a.constructor === A ? P.createHash($).update(o(a)).digest("hex") : _(a);
      };
      return t;
    }, N = function(_, z) {
      return function(P, A) {
        return new J(P, z, !0).update(A)[_]();
      };
    }, L = function(_) {
      var z = N("hex", _);
      z.create = function($) {
        return new J($, _);
      }, z.update = function($, o) {
        return z.create($).update(o);
      };
      for (var P = 0; P < I.length; ++P) {
        var A = I[P];
        z[A] = N(A, _);
      }
      return z;
    };
    function C(_, z) {
      z ? (S[0] = S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0, this.blocks = S) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _ ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = _;
    }
    C.prototype.update = function(_) {
      if (!this.finalized) {
        var z, P = typeof _;
        if (P !== "string") {
          if (P === "object") {
            if (_ === null)
              throw new Error(e);
            if (v && _.constructor === ArrayBuffer)
              _ = new Uint8Array(_);
            else if (!Array.isArray(_) && (!v || !ArrayBuffer.isView(_)))
              throw new Error(e);
          } else
            throw new Error(e);
          z = !0;
        }
        for (var A, $ = 0, o, t = _.length, a = this.blocks; $ < t; ) {
          if (this.hashed && (this.hashed = !1, a[0] = this.block, this.block = a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), z)
            for (o = this.start; $ < t && o < 64; ++$)
              a[o >>> 2] |= _[$] << g[o++ & 3];
          else
            for (o = this.start; $ < t && o < 64; ++$)
              A = _.charCodeAt($), A < 128 ? a[o >>> 2] |= A << g[o++ & 3] : A < 2048 ? (a[o >>> 2] |= (192 | A >>> 6) << g[o++ & 3], a[o >>> 2] |= (128 | A & 63) << g[o++ & 3]) : A < 55296 || A >= 57344 ? (a[o >>> 2] |= (224 | A >>> 12) << g[o++ & 3], a[o >>> 2] |= (128 | A >>> 6 & 63) << g[o++ & 3], a[o >>> 2] |= (128 | A & 63) << g[o++ & 3]) : (A = 65536 + ((A & 1023) << 10 | _.charCodeAt(++$) & 1023), a[o >>> 2] |= (240 | A >>> 18) << g[o++ & 3], a[o >>> 2] |= (128 | A >>> 12 & 63) << g[o++ & 3], a[o >>> 2] |= (128 | A >>> 6 & 63) << g[o++ & 3], a[o >>> 2] |= (128 | A & 63) << g[o++ & 3]);
          this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.block = a[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }
    }, C.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var _ = this.blocks, z = this.lastByteIndex;
        _[16] = this.block, _[z >>> 2] |= w[z & 3], this.block = _[16], z >= 56 && (this.hashed || this.hash(), _[0] = this.block, _[16] = _[1] = _[2] = _[3] = _[4] = _[5] = _[6] = _[7] = _[8] = _[9] = _[10] = _[11] = _[12] = _[13] = _[14] = _[15] = 0), _[14] = this.hBytes << 3 | this.bytes >>> 29, _[15] = this.bytes << 3, this.hash();
      }
    }, C.prototype.hash = function() {
      var _ = this.h0, z = this.h1, P = this.h2, A = this.h3, $ = this.h4, o = this.h5, t = this.h6, a = this.h7, c = this.blocks, h, b, m, y, u, d, l, B, q, E, k;
      for (h = 16; h < 64; ++h)
        u = c[h - 15], b = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3, u = c[h - 2], m = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10, c[h] = c[h - 16] + b + c[h - 7] + m << 0;
      for (k = z & P, h = 0; h < 64; h += 4)
        this.first ? (this.is224 ? (B = 300032, u = c[0] - 1413257819, a = u - 150054599 << 0, A = u + 24177077 << 0) : (B = 704751109, u = c[0] - 210244248, a = u - 1521486534 << 0, A = u + 143694565 << 0), this.first = !1) : (b = (_ >>> 2 | _ << 30) ^ (_ >>> 13 | _ << 19) ^ (_ >>> 22 | _ << 10), m = ($ >>> 6 | $ << 26) ^ ($ >>> 11 | $ << 21) ^ ($ >>> 25 | $ << 7), B = _ & z, y = B ^ _ & P ^ k, l = $ & o ^ ~$ & t, u = a + m + l + M[h] + c[h], d = b + y, a = A + u << 0, A = u + d << 0), b = (A >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10), m = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7), q = A & _, y = q ^ A & z ^ B, l = a & $ ^ ~a & o, u = t + m + l + M[h + 1] + c[h + 1], d = b + y, t = P + u << 0, P = u + d << 0, b = (P >>> 2 | P << 30) ^ (P >>> 13 | P << 19) ^ (P >>> 22 | P << 10), m = (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7), E = P & A, y = E ^ P & _ ^ q, l = t & a ^ ~t & $, u = o + m + l + M[h + 2] + c[h + 2], d = b + y, o = z + u << 0, z = u + d << 0, b = (z >>> 2 | z << 30) ^ (z >>> 13 | z << 19) ^ (z >>> 22 | z << 10), m = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7), k = z & P, y = k ^ z & A ^ E, l = o & t ^ ~o & a, u = $ + m + l + M[h + 3] + c[h + 3], d = b + y, $ = _ + u << 0, _ = u + d << 0, this.chromeBugWorkAround = !0;
      this.h0 = this.h0 + _ << 0, this.h1 = this.h1 + z << 0, this.h2 = this.h2 + P << 0, this.h3 = this.h3 + A << 0, this.h4 = this.h4 + $ << 0, this.h5 = this.h5 + o << 0, this.h6 = this.h6 + t << 0, this.h7 = this.h7 + a << 0;
    }, C.prototype.hex = function() {
      this.finalize();
      var _ = this.h0, z = this.h1, P = this.h2, A = this.h3, $ = this.h4, o = this.h5, t = this.h6, a = this.h7, c = p[_ >>> 28 & 15] + p[_ >>> 24 & 15] + p[_ >>> 20 & 15] + p[_ >>> 16 & 15] + p[_ >>> 12 & 15] + p[_ >>> 8 & 15] + p[_ >>> 4 & 15] + p[_ & 15] + p[z >>> 28 & 15] + p[z >>> 24 & 15] + p[z >>> 20 & 15] + p[z >>> 16 & 15] + p[z >>> 12 & 15] + p[z >>> 8 & 15] + p[z >>> 4 & 15] + p[z & 15] + p[P >>> 28 & 15] + p[P >>> 24 & 15] + p[P >>> 20 & 15] + p[P >>> 16 & 15] + p[P >>> 12 & 15] + p[P >>> 8 & 15] + p[P >>> 4 & 15] + p[P & 15] + p[A >>> 28 & 15] + p[A >>> 24 & 15] + p[A >>> 20 & 15] + p[A >>> 16 & 15] + p[A >>> 12 & 15] + p[A >>> 8 & 15] + p[A >>> 4 & 15] + p[A & 15] + p[$ >>> 28 & 15] + p[$ >>> 24 & 15] + p[$ >>> 20 & 15] + p[$ >>> 16 & 15] + p[$ >>> 12 & 15] + p[$ >>> 8 & 15] + p[$ >>> 4 & 15] + p[$ & 15] + p[o >>> 28 & 15] + p[o >>> 24 & 15] + p[o >>> 20 & 15] + p[o >>> 16 & 15] + p[o >>> 12 & 15] + p[o >>> 8 & 15] + p[o >>> 4 & 15] + p[o & 15] + p[t >>> 28 & 15] + p[t >>> 24 & 15] + p[t >>> 20 & 15] + p[t >>> 16 & 15] + p[t >>> 12 & 15] + p[t >>> 8 & 15] + p[t >>> 4 & 15] + p[t & 15];
      return this.is224 || (c += p[a >>> 28 & 15] + p[a >>> 24 & 15] + p[a >>> 20 & 15] + p[a >>> 16 & 15] + p[a >>> 12 & 15] + p[a >>> 8 & 15] + p[a >>> 4 & 15] + p[a & 15]), c;
    }, C.prototype.toString = C.prototype.hex, C.prototype.digest = function() {
      this.finalize();
      var _ = this.h0, z = this.h1, P = this.h2, A = this.h3, $ = this.h4, o = this.h5, t = this.h6, a = this.h7, c = [
        _ >>> 24 & 255,
        _ >>> 16 & 255,
        _ >>> 8 & 255,
        _ & 255,
        z >>> 24 & 255,
        z >>> 16 & 255,
        z >>> 8 & 255,
        z & 255,
        P >>> 24 & 255,
        P >>> 16 & 255,
        P >>> 8 & 255,
        P & 255,
        A >>> 24 & 255,
        A >>> 16 & 255,
        A >>> 8 & 255,
        A & 255,
        $ >>> 24 & 255,
        $ >>> 16 & 255,
        $ >>> 8 & 255,
        $ & 255,
        o >>> 24 & 255,
        o >>> 16 & 255,
        o >>> 8 & 255,
        o & 255,
        t >>> 24 & 255,
        t >>> 16 & 255,
        t >>> 8 & 255,
        t & 255
      ];
      return this.is224 || c.push(a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255), c;
    }, C.prototype.array = C.prototype.digest, C.prototype.arrayBuffer = function() {
      this.finalize();
      var _ = new ArrayBuffer(this.is224 ? 28 : 32), z = new DataView(_);
      return z.setUint32(0, this.h0), z.setUint32(4, this.h1), z.setUint32(8, this.h2), z.setUint32(12, this.h3), z.setUint32(16, this.h4), z.setUint32(20, this.h5), z.setUint32(24, this.h6), this.is224 || z.setUint32(28, this.h7), _;
    };
    function J(_, z, P) {
      var A, $ = typeof _;
      if ($ === "string") {
        var o = [], t = _.length, a = 0, c;
        for (A = 0; A < t; ++A)
          c = _.charCodeAt(A), c < 128 ? o[a++] = c : c < 2048 ? (o[a++] = 192 | c >>> 6, o[a++] = 128 | c & 63) : c < 55296 || c >= 57344 ? (o[a++] = 224 | c >>> 12, o[a++] = 128 | c >>> 6 & 63, o[a++] = 128 | c & 63) : (c = 65536 + ((c & 1023) << 10 | _.charCodeAt(++A) & 1023), o[a++] = 240 | c >>> 18, o[a++] = 128 | c >>> 12 & 63, o[a++] = 128 | c >>> 6 & 63, o[a++] = 128 | c & 63);
        _ = o;
      } else if ($ === "object") {
        if (_ === null)
          throw new Error(e);
        if (v && _.constructor === ArrayBuffer)
          _ = new Uint8Array(_);
        else if (!Array.isArray(_) && (!v || !ArrayBuffer.isView(_)))
          throw new Error(e);
      } else
        throw new Error(e);
      _.length > 64 && (_ = new C(z, !0).update(_).array());
      var h = [], b = [];
      for (A = 0; A < 64; ++A) {
        var m = _[A] || 0;
        h[A] = 92 ^ m, b[A] = 54 ^ m;
      }
      C.call(this, z, P), this.update(b), this.oKeyPad = h, this.inner = !0, this.sharedMemory = P;
    }
    J.prototype = new C(), J.prototype.finalize = function() {
      if (C.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var _ = this.array();
        C.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(_), C.prototype.finalize.call(this);
      }
    };
    var T = R();
    T.sha256 = T, T.sha224 = R(!0), T.sha256.hmac = L(), T.sha224.hmac = L(!0), x ? r.exports = T : (i.sha256 = T.sha256, i.sha224 = T.sha224);
  })();
})($f);
var ri = $f.exports;
const fi = (r) => ri.sha256(r), ai = () => {
  const r = document.cookie.split(";");
  let e = !0, f;
  for (let i = 0; i < r.length; i++) {
    const s = r[i].split("=");
    s[0].trim() == "device_guid" && (e = !1, f = s[1]);
  }
  return e && (f = self.crypto.randomUUID(), document.cookie = `device_guid=${f}; path = /; max-age=${365 * 24 * 60 * 60}`), f;
};
let Ef = {
  serverPath: null
};
const ui = (r) => Ef = r, ii = () => Ef, Ft = async (r, e) => {
  const f = ii(), i = {};
  try {
    const s = await fetch(f.serverPath + r, e);
    return s.ok ? (s.headers.forEach((n, x) => {
      i[x] = n;
    }), {
      ...await s.json(),
      headers: i
    }) : {
      error: { message: `Status: ${s.status}. ${s == null ? void 0 : s.statusText}` },
      headers: i
    };
  } catch (s) {
    return {
      error: { message: s == null ? void 0 : s.message },
      headers: null
    };
  }
}, di = () => Ft(
  "auth/v1/login_options",
  {
    credentials: "include",
    headers: {
      Accept: "application/json"
    }
  }
), ni = (r) => Ft(
  "auth/v1/login",
  {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(r),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      resolution: `${screen.width}x${screen.height}`,
      device_guid: ai()
    }
  }
), si = (r) => Ft(
  `auth/v1/reset_password?phone=${r}`,
  {
    credentials: "include",
    headers: {
      Accept: "application/json"
    }
  }
), ci = (r, e) => Ft(
  `auth/v1/register_options${r ? `?code=${r}` : ""}`,
  {
    credentials: "include",
    headers: {
      Accept: "application/json",
      Cookie: `sid=${e}`
    }
  }
), hi = (r) => Ft(
  "auth/v1/register_key",
  {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(r),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }
);
async function bi(r, e) {
  if (!r.trim() && r.length !== 6) return null;
  const f = qf(e.fido2_options.challenge), i = ti(), s = fi(i), { signature: n, public_key: x } = Pf(s, f), v = {
    challenge_id: e.challenge_id,
    code: r.trim(),
    public_key: x,
    signature: n
  }, p = await hi(v);
  return p.result && p.result !== "Failure" ? s : p.error;
}
async function li(r) {
  if (!r.trim()) return null;
  const e = await di();
  if (!e.result) return null;
  const f = e.result, i = qf(f.challenge), { signature: s, public_key: n } = Pf(r, i), x = {
    challenge_id: f.challenge_id,
    credential: null,
    public_key: n,
    signature: s
  }, v = await ni(x);
  return v.result && v.result !== "Failure" ? v.headers["Set-Cookie"] : null;
}
const oi = (r) => r.replace(/\D/g, "");
async function vi(r) {
  if (!oi(r.trim())) return null;
  const e = await si(r);
  return e.result || e.result !== "Failure" ? e.result : null;
}
async function pi({ code: r, sid: e }) {
  if (!r.trim()) return null;
  const f = await ci(r, e);
  return f.result ? f.result : null;
}
export {
  bi as createPassKey,
  ui as defineConfig,
  pi as initializeNewKey,
  vi as resetPassword,
  li as signInPassKey
};
