function gd(t) {
    var n = (new Date).getTime().toString();
    return n
}

function gs() {
    return "24haowan"
}! function(t) {
    String.prototype.trim === t && (String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), Array.prototype.reduce === t && (Array.prototype.reduce = function(n) {
        if (void 0 === this || null === this) throw new TypeError;
        var e, i = Object(this),
            r = i.length >>> 0,
            o = 0;
        if ("function" != typeof n) throw new TypeError;
        if (0 == r && 1 == arguments.length) throw new TypeError;
        if (arguments.length >= 2) e = arguments[1];
        else
            for (;;) {
                if (o in i) {
                    e = i[o++];
                    break
                }
                if (++o >= r) throw new TypeError
            }
        for (; r > o;) o in i && (e = n.call(t, e, i[o], o, i)), o++;
        return e
    })
}();
var Zepto = function() {
    function t(t) {
        return "[object Function]" == _.call(t)
    }

    function n(t) {
        return t instanceof Object
    }

    function e(n) {
        var e, i;
        if ("[object Object]" !== _.call(n)) return !1;
        if (i = t(n.constructor) && n.constructor.prototype, !i || !hasOwnProperty.call(i, "isPrototypeOf")) return !1;
        for (e in n);
        return e === m || hasOwnProperty.call(n, e)
    }

    function i(t) {
        return t instanceof Array
    }

    function r(t) {
        return "number" == typeof t.length
    }

    function o(t) {
        return t.filter(function(t) {
            return t !== m && null !== t
        })
    }

    function a(t) {
        return t.length > 0 ? [].concat.apply([], t) : t
    }

    function u(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function s(t) {
        return t in S ? S[t] : S[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function c(t, n) {
        return "number" != typeof n || O[u(t)] ? n : n + "px"
    }

    function l(t) {
        var n, e;
        return j[t] || (n = T.createElement(t), T.body.appendChild(n), e = N(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), j[t] = e), j[t]
    }

    function f(t, n) {
        return n === m ? g(t) : g(t).filter(n)
    }

    function h(n, e, i, r) {
        return t(e) ? e.call(n, i, r) : e
    }

    function p(t, n, e) {
        var i = t % 2 ? n : n.parentNode;
        i ? i.insertBefore(e, t ? 1 == t ? i.firstChild : 2 == t ? n : null : n.nextSibling) : g(e).remove()
    }

    function d(t, n) {
        n(t);
        for (var e in t.childNodes) d(t.childNodes[e], n)
    }
    var m, v, g, y, w, x, b = [],
        E = b.slice,
        T = window.document,
        j = {},
        S = {},
        N = T.defaultView.getComputedStyle,
        O = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        C = /^\s*<(\w+|!)[^>]*>/,
        P = [1, 3, 8, 9, 11],
        k = ["after", "prepend", "before", "append"],
        A = T.createElement("table"),
        M = T.createElement("tr"),
        Z = {
            tr: T.createElement("tbody"),
            tbody: A,
            thead: A,
            tfoot: A,
            td: M,
            th: M,
            "*": T.createElement("div")
        },
        R = /complete|loaded|interactive/,
        $ = /^\.([\w-]+)$/,
        z = /^#([\w-]+)$/,
        L = /^[\w-]+$/,
        _ = {}.toString,
        D = {},
        q = T.createElement("div");
    return D.matches = function(t, n) {
        if (!t || 1 !== t.nodeType) return !1;
        var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (e) return e.call(t, n);
        var i, r = t.parentNode,
            o = !r;
        return o && (r = q).appendChild(t), i = ~D.qsa(r, n).indexOf(t), o && q.removeChild(t), i
    }, w = function(t) {
        return t.replace(/-+(.)?/g, function(t, n) {
            return n ? n.toUpperCase() : ""
        })
    }, x = function(t) {
        return t.filter(function(n, e) {
            return t.indexOf(n) == e
        })
    }, D.fragment = function(t, n) {
        n === m && (n = C.test(t) && RegExp.$1), n in Z || (n = "*");
        var e = Z[n];
        return e.innerHTML = "" + t, g.each(E.call(e.childNodes), function() {
            e.removeChild(this)
        })
    }, D.Z = function(t, n) {
        return t = t || [], t.__proto__ = arguments.callee.prototype, t.selector = n || "", t
    }, D.isZ = function(t) {
        return t instanceof D.Z
    }, D.init = function(n, r) {
        if (!n) return D.Z();
        if (t(n)) return g(T).ready(n);
        if (D.isZ(n)) return n;
        var a;
        if (i(n)) a = o(n);
        else if (e(n)) a = [g.extend({}, n)], n = null;
        else if (P.indexOf(n.nodeType) >= 0 || n === window) a = [n], n = null;
        else if (C.test(n)) a = D.fragment(n.trim(), RegExp.$1), n = null;
        else {
            if (r !== m) return g(r).find(n);
            a = D.qsa(T, n)
        }
        return D.Z(a, n)
    }, g = function(t, n) {
        return D.init(t, n)
    }, g.extend = function(t) {
        return E.call(arguments, 1).forEach(function(n) {
            for (v in n) n[v] !== m && (t[v] = n[v])
        }), t
    }, D.qsa = function(t, n) {
        var e;
        return t === T && z.test(n) ? (e = t.getElementById(RegExp.$1)) ? [e] : b : 1 !== t.nodeType && 9 !== t.nodeType ? b : E.call($.test(n) ? t.getElementsByClassName(RegExp.$1) : L.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n))
    }, g.isFunction = t, g.isObject = n, g.isArray = i, g.isPlainObject = e, g.inArray = function(t, n, e) {
        return b.indexOf.call(n, t, e)
    }, g.trim = function(t) {
        return t.trim()
    }, g.uuid = 0, g.map = function(t, n) {
        var e, i, o, u = [];
        if (r(t))
            for (i = 0; i < t.length; i++) e = n(t[i], i), null != e && u.push(e);
        else
            for (o in t) e = n(t[o], o), null != e && u.push(e);
        return a(u)
    }, g.each = function(t, n) {
        var e, i;
        if (r(t)) {
            for (e = 0; e < t.length; e++)
                if (n.call(t[e], e, t[e]) === !1) return t
        } else
            for (i in t)
                if (n.call(t[i], i, t[i]) === !1) return t;
        return t
    }, g.fn = {
        forEach: b.forEach,
        reduce: b.reduce,
        push: b.push,
        indexOf: b.indexOf,
        concat: b.concat,
        map: function(t) {
            return g.map(this, function(n, e) {
                return t.call(n, e, n)
            })
        },
        slice: function() {
            return g(E.apply(this, arguments))
        },
        ready: function(t) {
            return R.test(T.readyState) ? t(g) : T.addEventListener("DOMContentLoaded", function() {
                t(g)
            }, !1), this
        },
        get: function(t) {
            return t === m ? E.call(this) : this[t]
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
        each: function(t) {
            return this.forEach(function(n, e) {
                t.call(n, e, n)
            }), this
        },
        filter: function(t) {
            return g([].filter.call(this, function(n) {
                return D.matches(n, t)
            }))
        },
        add: function(t, n) {
            return g(x(this.concat(g(t, n))))
        },
        is: function(t) {
            return this.length > 0 && D.matches(this[0], t)
        },
        not: function(n) {
            var e = [];
            if (t(n) && n.call !== m) this.each(function(t) {
                n.call(this, t) || e.push(this)
            });
            else {
                var i = "string" == typeof n ? this.filter(n) : r(n) && t(n.item) ? E.call(n) : g(n);
                this.forEach(function(t) {
                    i.indexOf(t) < 0 && e.push(t)
                })
            }
            return g(e)
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !n(t) ? t : g(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !n(t) ? t : g(t)
        },
        find: function(t) {
            var n;
            return n = 1 == this.length ? D.qsa(this[0], t) : this.map(function() {
                return D.qsa(this, t)
            }), g(n)
        },
        closest: function(t, n) {
            for (var e = this[0]; e && !D.matches(e, t);) e = e !== n && e !== T && e.parentNode;
            return g(e)
        },
        parents: function(t) {
            for (var n = [], e = this; e.length > 0;) e = g.map(e, function(t) {
                return (t = t.parentNode) && t !== T && n.indexOf(t) < 0 ? (n.push(t), t) : void 0
            });
            return f(n, t)
        },
        parent: function(t) {
            return f(x(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return f(this.map(function() {
                return E.call(this.children)
            }), t)
        },
        siblings: function(t) {
            return f(this.map(function(t, n) {
                return E.call(n.parentNode.children).filter(function(t) {
                    return t !== n
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return this.map(function() {
                return this[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = null), "none" == N(this, "").getPropertyValue("display") && (this.style.display = l(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            return this.each(function() {
                g(this).wrapAll(g(t)[0].cloneNode(!1))
            })
        },
        wrapAll: function(t) {
            return this[0] && (g(this[0]).before(t = g(t)), t.append(this)), this
        },
        unwrap: function() {
            return this.parent().each(function() {
                g(this).replaceWith(g(this).children())
            }), this
        },
        clone: function() {
            return g(this.map(function() {
                return this.cloneNode(!0)
            }))
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return (t === m ? "none" == this.css("display") : t) ? this.show() : this.hide()
        },
        prev: function() {
            return g(this.pluck("previousElementSibling"))
        },
        next: function() {
            return g(this.pluck("nextElementSibling"))
        },
        html: function(t) {
            return t === m ? this.length > 0 ? this[0].innerHTML : null : this.each(function(n) {
                var e = this.innerHTML;
                g(this).empty().append(h(this, t, n, e))
            })
        },
        text: function(t) {
            return t === m ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                this.textContent = t
            })
        },
        attr: function(t, e) {
            var i;
            return "string" == typeof t && e === m ? 0 == this.length || 1 !== this[0].nodeType ? m : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : this.each(function(i) {
                if (1 === this.nodeType)
                    if (n(t))
                        for (v in t) this.setAttribute(v, t[v]);
                    else this.setAttribute(t, h(this, e, i, this.getAttribute(t)))
            })
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && this.removeAttribute(t)
            })
        },
        prop: function(t, n) {
            return n === m ? this[0] ? this[0][t] : m : this.each(function(e) {
                this[t] = h(this, n, e, this[t])
            })
        },
        data: function(t, n) {
            var e = this.attr("data-" + u(t), n);
            return null !== e ? e : m
        },
        val: function(t) {
            return t === m ? this.length > 0 ? this[0].value : m : this.each(function(n) {
                this.value = h(this, t, n, this.value)
            })
        },
        offset: function() {
            if (0 == this.length) return null;
            var t = this[0].getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                width: t.width,
                height: t.height
            }
        },
        css: function(t, n) {
            if (n === m && "string" == typeof t) return 0 == this.length ? m : this[0].style[w(t)] || N(this[0], "").getPropertyValue(t);
            var e = "";
            for (v in t) "string" == typeof t[v] && "" == t[v] ? this.each(function() {
                this.style.removeProperty(u(v))
            }) : e += u(v) + ":" + c(v, t[v]) + ";";
            return "string" == typeof t && ("" == n ? this.each(function() {
                this.style.removeProperty(u(t))
            }) : e = u(t) + ":" + c(t, n)), this.each(function() {
                this.style.cssText += ";" + e
            })
        },
        index: function(t) {
            return t ? this.indexOf(g(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return this.length < 1 ? !1 : s(t).test(this[0].className)
        },
        addClass: function(t) {
            return this.each(function(n) {
                y = [];
                var e = this.className,
                    i = h(this, t, n, e);
                i.split(/\s+/g).forEach(function(t) {
                    g(this).hasClass(t) || y.push(t)
                }, this), y.length && (this.className += (e ? " " : "") + y.join(" "))
            })
        },
        removeClass: function(t) {
            return this.each(function(n) {
                return t === m ? this.className = "" : (y = this.className, h(this, t, n, y).split(/\s+/g).forEach(function(t) {
                    y = y.replace(s(t), " ")
                }), this.className = y.trim(), void 0)
            })
        },
        toggleClass: function(t, n) {
            return this.each(function(e) {
                var i = h(this, t, e, this.className);
                (n === m ? !g(this).hasClass(i) : n) ? g(this).addClass(i): g(this).removeClass(i)
            })
        }
    }, ["width", "height"].forEach(function(t) {
        g.fn[t] = function(n) {
            var e, i = t.replace(/./, function(t) {
                return t[0].toUpperCase()
            });
            return n === m ? this[0] == window ? window["inner" + i] : this[0] == T ? T.documentElement["offset" + i] : (e = this.offset()) && e[t] : this.each(function(e) {
                var i = g(this);
                i.css(t, h(this, n, e, i[t]()))
            })
        }
    }), k.forEach(function(t, e) {
        g.fn[t] = function() {
            var t = g.map(arguments, function(t) {
                return n(t) ? t : D.fragment(t)
            });
            if (t.length < 1) return this;
            var i = this.length,
                r = i > 1,
                o = 2 > e;
            return this.each(function(n, a) {
                for (var u = 0; u < t.length; u++) {
                    var s = t[o ? t.length - u - 1 : u];
                    d(s, function(t) {
                        null != t.nodeName && "SCRIPT" === t.nodeName.toUpperCase() && (!t.type || "text/javascript" === t.type) && window.eval.call(window, t.innerHTML)
                    }), r && i - 1 > n && (s = s.cloneNode(!0)), p(e, a, s)
                }
            })
        }, g.fn[e % 2 ? t + "To" : "insert" + (e ? "Before" : "After")] = function(n) {
            return g(n)[t](this), this
        }
    }), D.Z.prototype = g.fn, D.camelize = w, D.uniq = x, g.zepto = D, g
}();
window.Zepto = Zepto, "$" in window || (window.$ = Zepto),
    function(t) {
        function n(t) {
            return t._zid || (t._zid = f++)
        }

        function e(t, e, o, a) {
            if (e = i(e), e.ns) var u = r(e.ns);
            return (l[n(t)] || []).filter(function(t) {
                return t && (!e.e || t.e == e.e) && (!e.ns || u.test(t.ns)) && (!o || n(t.fn) === n(o)) && (!a || t.sel == a)
            })
        }

        function i(t) {
            var n = ("" + t).split(".");
            return {
                e: n[0],
                ns: n.slice(1).sort().join(" ")
            }
        }

        function r(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function o(n, e, i) {
            t.isObject(n) ? t.each(n, i) : n.split(/\s/).forEach(function(t) {
                i(t, e)
            })
        }

        function a(e, r, a, u, s, c) {
            c = !!c;
            var f = n(e),
                h = l[f] || (l[f] = []);
            o(r, a, function(n, r) {
                var o = s && s(r, n),
                    a = o || r,
                    l = function(t) {
                        var n = a.apply(e, [t].concat(t.data));
                        return n === !1 && t.preventDefault(), n
                    },
                    f = t.extend(i(n), {
                        fn: r,
                        proxy: l,
                        sel: u,
                        del: o,
                        i: h.length
                    });
                h.push(f), e.addEventListener(f.e, l, c)
            })
        }

        function u(t, i, r, a) {
            var u = n(t);
            o(i || "", r, function(n, i) {
                e(t, n, i, a).forEach(function(n) {
                    delete l[u][n.i], t.removeEventListener(n.e, n.proxy, !1)
                })
            })
        }

        function s(n) {
            var e = t.extend({
                originalEvent: n
            }, n);
            return t.each(m, function(t, i) {
                e[t] = function() {
                    return this[i] = p, n[t].apply(n, arguments)
                }, e[i] = d
            }), e
        }

        function c(t) {
            if (!("defaultPrevented" in t)) {
                t.defaultPrevented = !1;
                var n = t.preventDefault;
                t.preventDefault = function() {
                    this.defaultPrevented = !0, n.call(this)
                }
            }
        }
        var l = (t.zepto.qsa, {}),
            f = 1,
            h = {};
        h.click = h.mousedown = h.mouseup = h.mousemove = "MouseEvents", t.event = {
            add: a,
            remove: u
        }, t.proxy = function(e, i) {
            if (t.isFunction(e)) {
                var r = function() {
                    return e.apply(i, arguments)
                };
                return r._zid = n(e), r
            }
            if ("string" == typeof i) return t.proxy(e[i], e);
            throw new TypeError("expected function")
        }, t.fn.bind = function(t, n) {
            return this.each(function() {
                a(this, t, n)
            })
        }, t.fn.unbind = function(t, n) {
            return this.each(function() {
                u(this, t, n)
            })
        }, t.fn.one = function(t, n) {
            return this.each(function(e, i) {
                a(this, t, n, null, function(t, n) {
                    return function() {
                        var e = t.apply(i, arguments);
                        return u(i, n, t), e
                    }
                })
            })
        };
        var p = function() {
                return !0
            },
            d = function() {
                return !1
            },
            m = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        t.fn.delegate = function(n, e, i) {
            var r = !1;
            return "blur" != e && "focus" != e || (t.iswebkit ? e = "blur" == e ? "focusout" : "focus" == e ? "focusin" : e : r = !0), this.each(function(o, u) {
                a(u, e, i, n, function(e) {
                    return function(i) {
                        var r, o = t(i.target).closest(n, u).get(0);
                        return o ? (r = t.extend(s(i), {
                            currentTarget: o,
                            liveFired: u
                        }), e.apply(o, [r].concat([].slice.call(arguments, 1)))) : void 0
                    }
                }, r)
            })
        }, t.fn.undelegate = function(t, n, e) {
            return this.each(function() {
                u(this, n, e, t)
            })
        }, t.fn.live = function(n, e) {
            return t(document.body).delegate(this.selector, n, e), this
        }, t.fn.die = function(n, e) {
            return t(document.body).undelegate(this.selector, n, e), this
        }, t.fn.on = function(n, e, i) {
            return void 0 == e || t.isFunction(e) ? this.bind(n, e) : this.delegate(e, n, i)
        }, t.fn.off = function(n, e, i) {
            return void 0 == e || t.isFunction(e) ? this.unbind(n, e) : this.undelegate(e, n, i)
        }, t.fn.trigger = function(n, e) {
            return "string" == typeof n && (n = t.Event(n)), c(n), n.data = e, this.each(function() {
                "dispatchEvent" in this && this.dispatchEvent(n)
            })
        }, t.fn.triggerHandler = function(n, i) {
            var r, o;
            return this.each(function(a, u) {
                r = s("string" == typeof n ? t.Event(n) : n), r.data = i, r.target = u, t.each(e(u, n.type || n), function(t, n) {
                    return o = n.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), o
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(n) {
            t.fn[n] = function(t) {
                return this.bind(n, t)
            }
        }), ["focus", "blur"].forEach(function(n) {
            t.fn[n] = function(t) {
                if (t) this.bind(n, t);
                else if (this.length) try {
                    this.get(0)[n]()
                } catch (e) {}
                return this
            }
        }), t.Event = function(t, n) {
            var e = document.createEvent(h[t] || "Events"),
                i = !0;
            if (n)
                for (var r in n) "bubbles" == r ? i = !!n[r] : e[r] = n[r];
            return e.initEvent(t, i, !0, null, null, null, null, null, null, null, null, null, null, null, null), e
        }
    }(Zepto),
    function(t) {
        function n(t) {
            var n = this.os = {},
                e = this.browser = {},
                i = t.match(/WebKit\/([\d.]+)/),
                r = t.match(/(Android)\s+([\d.]+)/),
                o = t.match(/(iPad).*OS\s([\d_]+)/),
                a = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
                u = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                s = u && t.match(/TouchPad/),
                c = t.match(/Kindle\/([\d.]+)/),
                l = t.match(/Silk\/([\d._]+)/),
                f = t.match(/(BlackBerry).*Version\/([\d.]+)/);
            (e.webkit = !!i) && (e.version = i[1]), r && (n.android = !0, n.version = r[2]), a && (n.ios = n.iphone = !0, n.version = a[2].replace(/_/g, ".")), o && (n.ios = n.ipad = !0, n.version = o[2].replace(/_/g, ".")), u && (n.webos = !0, n.version = u[2]), s && (n.touchpad = !0), f && (n.blackberry = !0, n.version = f[2]), c && (n.kindle = !0, n.version = c[1]), l && (e.silk = !0, e.version = l[1]), !l && n.android && t.match(/Kindle Fire/) && (e.silk = !0)
        }
        n.call(t, navigator.userAgent), t.__detect = n
    }(Zepto),
    function(t, n) {
        function e(t) {
            return t.toLowerCase()
        }

        function i(t) {
            return r ? r + t : e(t)
        }
        var r, o = "",
            a = {
                Webkit: "webkit",
                Moz: "",
                O: "o",
                ms: "MS"
            },
            u = window.document,
            s = u.createElement("div"),
            c = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            l = {};
        t.each(a, function(t, i) {
            return s.style[t + "TransitionProperty"] !== n ? (o = "-" + e(t) + "-", r = i, !1) : void 0
        }), l[o + "transition-property"] = l[o + "transition-duration"] = l[o + "transition-timing-function"] = l[o + "animation-name"] = l[o + "animation-duration"] = "", t.fx = {
            off: r === n && s.style.transitionProperty === n,
            cssPrefix: o,
            transitionEnd: i("TransitionEnd"),
            animationEnd: i("AnimationEnd")
        }, t.fn.animate = function(n, e, i, r) {
            return t.isObject(e) && (i = e.easing, r = e.complete, e = e.duration), e && (e /= 1e3), this.anim(n, e, i, r)
        }, t.fn.anim = function(e, i, r, a) {
            var u, s, f, h = {},
                p = this,
                d = t.fx.transitionEnd;
            if (i === n && (i = .4), t.fx.off && (i = 0), "string" == typeof e) h[o + "animation-name"] = e, h[o + "animation-duration"] = i + "s", d = t.fx.animationEnd;
            else {
                for (s in e) c.test(s) ? (u || (u = []), u.push(s + "(" + e[s] + ")")) : h[s] = e[s];
                u && (h[o + "transform"] = u.join(" ")), !t.fx.off && "object" == typeof e && (h[o + "transition-property"] = Object.keys(e).join(", "), h[o + "transition-duration"] = i + "s", h[o + "transition-timing-function"] = r || "linear")
            }
            return f = function(n) {
                if ("undefined" != typeof n) {
                    if (n.target !== n.currentTarget) return;
                    t(n.target).unbind(d, arguments.callee)
                }
                t(this).css(l), a && a.call(this)
            }, i > 0 && this.bind(d, f), setTimeout(function() {
                p.css(h), 0 >= i && setTimeout(function() {
                    p.each(function() {
                        f.call(this)
                    })
                }, 0)
            }, 0), this
        }, s = null
    }(Zepto),
    function(t) {
        function n(n, e, i) {
            var r = t.Event(e);
            return t(n).trigger(r, i), !r.defaultPrevented
        }

        function e(t, e, i, r) {
            return t.global ? n(e || y, i, r) : void 0
        }

        function i(n) {
            n.global && 0 === t.active++ && e(n, null, "ajaxStart")
        }

        function r(n) {
            n.global && !--t.active && e(n, null, "ajaxStop")
        }

        function o(t, n) {
            var i = n.context;
            return n.beforeSend.call(i, t, n) === !1 || e(n, i, "ajaxBeforeSend", [t, n]) === !1 ? !1 : void e(n, i, "ajaxSend", [t, n])
        }

        function a(t, n, i) {
            var r = i.context,
                o = "success";
            i.success.call(r, t, o, n), e(i, r, "ajaxSuccess", [n, i, t]), s(o, n, i)
        }

        function u(t, n, i, r) {
            var o = r.context;
            r.error.call(o, i, n, t), e(r, o, "ajaxError", [i, r, t]), s(n, i, r)
        }

        function s(t, n, i) {
            var o = i.context;
            i.complete.call(o, n, t), e(i, o, "ajaxComplete", [n, i]), r(i)
        }

        function c() {}

        function l(t) {
            return t && (t == T ? "html" : t == E ? "json" : x.test(t) ? "script" : b.test(t) && "xml") || "text"
        }

        function f(t, n) {
            return (t + "&" + n).replace(/[&?]{1,2}/, "?")
        }

        function h(n) {
            g(n.data) && (n.data = t.param(n.data)), n.data && (!n.type || "GET" == n.type.toUpperCase()) && (n.url = f(n.url, n.data))
        }

        function p(n, e, i, r) {
            var o = t.isArray(e);
            t.each(e, function(e, a) {
                r && (e = i ? r : r + "[" + (o ? "" : e) + "]"), !r && o ? n.add(a.name, a.value) : (i ? t.isArray(a) : g(a)) ? p(n, a, i, e) : n.add(e, a)
            })
        }
        var d, m, v = 0,
            g = t.isObject,
            y = window.document,
            w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            x = /^(?:text|application)\/javascript/i,
            b = /^(?:text|application)\/xml/i,
            E = "application/json",
            T = "text/html",
            j = /^\s*$/;
        t.active = 0, t.ajaxJSONP = function(n) {
            var e, i = "jsonp" + ++v,
                r = y.createElement("script"),
                o = function() {
                    t(r).remove(), i in window && (window[i] = c), s("abort", u, n)
                },
                u = {
                    abort: o
                };
            return n.error && (r.onerror = function() {
                u.abort(), n.error()
            }), window[i] = function(o) {
                clearTimeout(e), t(r).remove(), delete window[i], a(o, u, n)
            }, h(n), r.src = n.url.replace(/=\?/, "=" + i), t("head").append(r), n.timeout > 0 && (e = setTimeout(function() {
                u.abort(), s("timeout", u, n)
            }, n.timeout)), u
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript",
                json: E,
                xml: "application/xml, text/xml",
                html: T,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0
        }, t.ajax = function(n) {
            var e = t.extend({}, n || {});
            for (d in t.ajaxSettings) void 0 === e[d] && (e[d] = t.ajaxSettings[d]);
            i(e), e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host);
            var r = e.dataType,
                s = /=\?/.test(e.url);
            if ("jsonp" == r || s) return s || (e.url = f(e.url, "callback=?")), t.ajaxJSONP(e);
            e.url || (e.url = window.location.toString()), h(e);
            var p, v = e.accepts[r],
                g = {},
                y = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol,
                w = t.ajaxSettings.xhr();
            e.crossDomain || (g["X-Requested-With"] = "XMLHttpRequest"), v && (g.Accept = v, v.indexOf(",") > -1 && (v = v.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(v)), (e.contentType || e.data && "GET" != e.type.toUpperCase()) && (g["Content-Type"] = e.contentType || "application/x-www-form-urlencoded"), e.headers = t.extend(g, e.headers || {}), w.onreadystatechange = function() {
                if (4 == w.readyState) {
                    clearTimeout(p);
                    var t, n = !1;
                    if (w.status >= 200 && w.status < 300 || 304 == w.status || 0 == w.status && "file:" == y) {
                        r = r || l(w.getResponseHeader("content-type")), t = w.responseText;
                        try {
                            "script" == r ? (0, eval)(t) : "xml" == r ? t = w.responseXML : "json" == r && (t = j.test(t) ? null : JSON.parse(t))
                        } catch (i) {
                            n = i
                        }
                        n ? u(n, "parsererror", w, e) : a(t, w, e)
                    } else u(null, "error", w, e)
                }
            };
            var x = "async" in e ? e.async : !0;
            w.open(e.type, e.url, x);
            for (m in e.headers) w.setRequestHeader(m, e.headers[m]);
            return o(w, e) === !1 ? (w.abort(), !1) : (e.timeout > 0 && (p = setTimeout(function() {
                w.onreadystatechange = c, w.abort(), u(null, "timeout", w, e)
            }, e.timeout)), w.send(e.data ? e.data : null), w)
        }, t.get = function(n, e) {
            return t.ajax({
                url: n,
                success: e
            })
        }, t.post = function(n, e, i, r) {
            return t.isFunction(e) && (r = r || i, i = e, e = null), t.ajax({
                type: "POST",
                url: n,
                data: e,
                success: i,
                dataType: r
            })
        }, t.getJSON = function(n, e) {
            return t.ajax({
                url: n,
                success: e,
                dataType: "json"
            })
        }, t.fn.load = function(n, e) {
            if (!this.length) return this;
            var i, r = this,
                o = n.split(/\s/);
            return o.length > 1 && (n = o[0], i = o[1]), t.get(n, function(n) {
                r.html(i ? t(y.createElement("div")).html(n.replace(w, "")).find(i).html() : n), e && e.call(r)
            }), this
        };
        var S = encodeURIComponent;
        t.param = function(t, n) {
            var e = [];
            return e.add = function(t, n) {
                this.push(S(t) + "=" + S(n))
            }, p(e, t, n), e.join("&").replace("%20", "+")
        }
    }(Zepto),
    function(t) {
        t.fn.serializeArray = function() {
            var n, e = [];
            return t(Array.prototype.slice.call(this.get(0).elements)).each(function() {
                n = t(this);
                var i = n.attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                    name: n.attr("name"),
                    value: n.val()
                })
            }), e
        }, t.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach(function(n) {
                t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
            }), t.join("&")
        }, t.fn.submit = function(n) {
            if (n) this.bind("submit", n);
            else if (this.length) {
                var e = t.Event("submit");
                this.eq(0).trigger(e), e.defaultPrevented || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function(t) {
        function n(t) {
            return "tagName" in t ? t : t.parentNode
        }

        function e(t, n, e, i) {
            var r = Math.abs(t - n),
                o = Math.abs(e - i);
            return r >= o ? t - n > 0 ? "Left" : "Right" : e - i > 0 ? "Up" : "Down"
        }

        function i() {
            a = null, u.last && (u.el.trigger("longTap"), u = {})
        }

        function r() {
            a && clearTimeout(a), a = null
        }
        var o, a, u = {},
            s = 750;
        t(document).ready(function() {
            var c, l;
            t(document.body).bind("touchstart", function(e) {
                c = Date.now(), l = c - (u.last || c), u.el = t(n(e.touches[0].target)), o && clearTimeout(o), u.x1 = e.touches[0].pageX, u.y1 = e.touches[0].pageY, l > 0 && 250 >= l && (u.isDoubleTap = !0), u.last = c, a = setTimeout(i, s)
            }).bind("touchmove", function(t) {
                r(), u.x2 = t.touches[0].pageX, u.y2 = t.touches[0].pageY
            }).bind("touchend", function(t) {
                r(), u.isDoubleTap ? (u.el.trigger("doubleTap"), u = {}) : u.x2 && Math.abs(u.x1 - u.x2) > 30 || u.y2 && Math.abs(u.y1 - u.y2) > 30 ? (u.el.trigger("swipe") && u.el.trigger("swipe" + e(u.x1, u.x2, u.y1, u.y2)), u = {}) : "last" in u && (u.el.trigger("tap"), o = setTimeout(function() {
                    o = null, u.el.trigger("singleTap"), u = {}
                }, 250))
            }).bind("touchcancel", function() {
                o && clearTimeout(o), a && clearTimeout(a), a = o = null, u = {}
            })
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(n) {
            t.fn[n] = function(t) {
                return this.bind(n, t)
            }
        })
    }(Zepto);
var Sprite = pc.createScript("sprite");
Sprite.attributes.add("textureAsset", {
    type: "asset",
    assetType: "texture",
    description: "The sprite texture"
}), Sprite.attributes.add("pos", {
    type: "vec2",
    description: "The coordinate in pixels",
    placeholder: ["x", "y"]
}), Sprite.attributes.add("size", {
    type: "vec2",
    description: "The size of sprite in pixels",
    placeholder: ["w", "h"],
    "default": [128, 128]
}), Sprite.attributes.add("depth", {
    type: "number",
    description: "The z depth of the sprite compared to other sprites",
    "default": 1
}), Sprite.attributes.add("uPercentage", {
    type: "number",
    description: "The horizontal texture percentage that is visible (used for progress bars)",
    "default": 1,
    min: 0,
    max: 1
}), Sprite.attributes.add("vPercentage", {
    type: "number",
    description: "The vertical texture percentage that is visible (used for progress bars)",
    "default": 1,
    min: 0,
    max: 1
}), Sprite.attributes.add("anchor", {
    type: "number",
    "default": 0,
    description: "The anchor of the sprite related to the screen bounds",
    "enum": [{
        topLeft: 0
    }, {
        top: 1
    }, {
        topRight: 2
    }, {
        left: 3
    }, {
        center: 4
    }, {
        right: 5
    }, {
        bottomLeft: 6
    }, {
        bottom: 7
    }, {
        bottomRight: 8
    }]
}), Sprite.attributes.add("pivot", {
    type: "number",
    "default": 0,
    description: "The pivot point of the sprite",
    "enum": [{
        topLeft: 0
    }, {
        top: 1
    }, {
        topRight: 2
    }, {
        left: 3
    }, {
        center: 4
    }, {
        right: 5
    }, {
        bottomLeft: 6
    }, {
        bottom: 7
    }, {
        bottomRight: 8
    }]
}), Sprite.attributes.add("tint", {
    type: "rgba",
    description: "A color that is multiplied with the current color of the sprite",
    "default": [1, 1, 1, 1]
}), Sprite.attributes.add("maxResHeight", {
    type: "number",
    "default": 720,
    description: "The maximum resolution height of the application. Used to scale the sprite accordingly."
}), Sprite.shader = null, Sprite.vertexFormat = null, Sprite.resolution = new pc.Vec2, Sprite.prototype.initialize = function() {
    var e = document.getElementById("application-canvas");
    this.userOffset = new pc.Vec2, this.offset = new pc.Vec2, this.scaling = new pc.Vec2, this.anchorOffset = new pc.Vec2, this.pivotOffset = new pc.Vec2;
    var t = this.app,
        s = t.graphicsDevice;
    if (!Sprite.shader) {
        var i = {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION,
                aUv0: pc.SEMANTIC_TEXCOORD0
            },
            vshader: ["attribute vec2 aPosition;", "attribute vec2 aUv0;", "varying vec2 vUv0;", "uniform vec2 uResolution;", "uniform vec2 uOffset;", "uniform vec2 uScale;", "", "void main(void)", "{", "    gl_Position = vec4(2.0 * ((uScale * aPosition.xy + uOffset) / uResolution ) - 1.0, -0.9, 1.0);", "    vUv0 = aUv0;", "}"].join("\n"),
            fshader: ["precision " + s.precision + " float;", "", "varying vec2 vUv0;", "", "uniform vec4 vTint;", "", "uniform sampler2D uColorMap;", "", "void main(void)", "{", "    vec4 color = texture2D(uColorMap, vUv0);", "    gl_FragColor = vec4(color.rgb * vTint.rgb, color.a * vTint.a);", "}"].join("\n")
        };
        Sprite.shader = new pc.Shader(s, i)
    }
    Sprite.vertexFormat || (Sprite.vertexFormat = new pc.VertexFormat(s, [{
        semantic: pc.SEMANTIC_POSITION,
        components: 2,
        type: pc.ELEMENTTYPE_FLOAT32
    }, {
        semantic: pc.SEMANTIC_TEXCOORD0,
        components: 2,
        type: pc.ELEMENTTYPE_FLOAT32
    }])), this.texture = this.textureAsset.resource, this.vertexBuffer = new pc.VertexBuffer(s, Sprite.vertexFormat, 6, pc.BUFFER_DYNAMIC), this.updateSprite();
    var r = new pc.Command(pc.LAYER_HUD, pc.BLEND_NORMAL, function() {
        this.entity.enabled && (s.setShader(Sprite.shader), s.setBlending(!0), s.setBlendFunction(pc.BLENDMODE_SRC_ALPHA, pc.BLENDMODE_ONE_MINUS_SRC_ALPHA), s.setDepthWrite(!1), s.setDepthTest(!1), Sprite.resolution.set(e.offsetWidth, e.offsetHeight), s.scope.resolve("uResolution").setValue(Sprite.resolution.data), s.scope.resolve("uScale").setValue(this.calculateScaling().data), s.scope.resolve("uOffset").setValue(this.calculateOffset().data), s.scope.resolve("uColorMap").setValue(this.texture), s.scope.resolve("vTint").setValue(this.tint.data), s.setVertexBuffer(this.vertexBuffer, 0), s.draw({
            type: pc.PRIMITIVE_TRIANGLES,
            base: 0,
            count: 6,
            indexed: !1
        }))
    }.bind(this));
    this.command = r, r.key = this.depth, t.scene.drawCalls.push(r), t.mouse.on("mousedown", this.onMouseDown, this), t.touch && t.touch.on("touchstart", this.onTouchDown, this), this.on("state", this.onState), this.on("destroy", this.onDestroy, this), this.on("attr:depth", function(e) {
        this.eventsEnabled = !1, this.command.key = e
    }), this.on("attr:size", this.updateSprite), this.on("attr:uPercentage", this.updateSprite), this.on("attr:vPercentage", this.updateSprite), this.onState()
}, Sprite.prototype.onMouseDown = function(e) {
    this.eventsEnabled && this.onClick(e)
}, Sprite.prototype.onTouchDown = function(e) {
    this.eventsEnabled && this.onClick(e.changedTouches[0])
}, Sprite.prototype.onClick = function(e) {
    var t, s, i, r, o, a, n = this.app.graphicsDevice.canvas,
        c = this.scaling,
        p = this.offset;
    t = 2 * (0 * c.x + p.x) / Sprite.resolution.x - 1, s = 2 * (0 * c.y + p.y) / Sprite.resolution.y - 1, i = 2 * (c.x * this.size.x + p.x) / Sprite.resolution.x - 1, r = 2 * (c.y * -this.size.y + p.y) / Sprite.resolution.y - 1, o = 2 * e.x / n.offsetWidth - 1, a = 2 * (n.offsetHeight - e.y) / n.offsetHeight - 1, o >= t && i >= o && s >= a && a >= r && this.fire("click")
}, Sprite.prototype.updateSprite = function() {
    if (this.vertexBuffer) {
        this.eventsEnabled = !1, this.vertexBuffer.lock();
        var e = (this.app.graphicsDevice.canvas, new pc.VertexIterator(this.vertexBuffer));
        e.element[pc.SEMANTIC_POSITION].set(0, -this.size.y), e.element[pc.SEMANTIC_TEXCOORD0].set(0, 0), e.next(), e.element[pc.SEMANTIC_POSITION].set(this.size.x, -this.size.y), e.element[pc.SEMANTIC_TEXCOORD0].set(this.uPercentage, 0), e.next(), e.element[pc.SEMANTIC_POSITION].set(0, 0), e.element[pc.SEMANTIC_TEXCOORD0].set(0, this.vPercentage), e.next(), e.element[pc.SEMANTIC_POSITION].set(this.size.x, -this.size.y), e.element[pc.SEMANTIC_TEXCOORD0].set(this.uPercentage, 0), e.next(), e.element[pc.SEMANTIC_POSITION].set(this.size.x, 0), e.element[pc.SEMANTIC_TEXCOORD0].set(this.uPercentage, this.vPercentage), e.next(), e.element[pc.SEMANTIC_POSITION].set(0, 0), e.element[pc.SEMANTIC_TEXCOORD0].set(0, this.vPercentage), this.vertexBuffer.unlock()
    }
}, Sprite.prototype.calculateOffset = function() {
    var e = this.app.graphicsDevice.canvas;
    return this.calculateAnchorOffset(), this.calculatePivotOffset(), this.offset.set(this.pos.x * this.scaling.x, this.pos.y * this.scaling.y).add(this.userOffset).add(this.anchorOffset).add(this.pivotOffset), this.offset.y += e.offsetHeight, this.offset
}, Sprite.prototype.calculateScaling = function() {
    var e = this.app.graphicsDevice.canvas,
        t = e.offsetHeight / this.maxResHeight;
    return this.scaling.set(t, t), this.scaling
}, Sprite.prototype.calculateAnchorOffset = function() {
    var e = this.app.graphicsDevice.canvas,
        t = e.offsetWidth,
        s = e.offsetHeight;
    switch (this.anchor) {
        case 0:
            this.anchorOffset.set(0, 0);
            break;
        case 1:
            this.anchorOffset.set(.5 * t, 0);
            break;
        case 2:
            this.anchorOffset.set(t, 0);
            break;
        case 3:
            this.anchorOffset.set(0, .5 * -s);
            break;
        case 4:
            this.anchorOffset.set(.5 * t, .5 * -s);
            break;
        case 5:
            this.anchorOffset.set(t, .5 * -s);
            break;
        case 6:
            this.anchorOffset.set(0, -s);
            break;
        case 7:
            this.anchorOffset.set(t / 2, -s);
            break;
        case 8:
            this.anchorOffset.set(t, -s);
            break;
        default:
            console.error("Wrong anchor: " + this.anchor)
    }
    return this.anchorOffset
}, Sprite.prototype.calculatePivotOffset = function() {
    var e = this.size.x * this.scaling.x,
        t = this.size.y * this.scaling.y;
    switch (this.pivot) {
        case 0:
            this.pivotOffset.set(0, 0);
            break;
        case 1:
            this.pivotOffset.set(.5 * -e, 0);
            break;
        case 2:
            this.pivotOffset.set(-e, 0);
            break;
        case 3:
            this.pivotOffset.set(0, .5 * t);
            break;
        case 4:
            this.pivotOffset.set(.5 * -e, .5 * t);
            break;
        case 5:
            this.pivotOffset.set(-e, .5 * t);
            break;
        case 6:
            this.pivotOffset.set(0, t);
            break;
        case 7:
            this.pivotOffset.set(-e / 2, t);
            break;
        case 8:
            this.pivotOffset.set(-e, t);
            break;
        default:
            console.error("Wrong pivot: " + this.pivot)
    }
    return this.pivotOffset
}, Sprite.prototype.onState = function(e) {
    this.eventsEnabled = !1
}, Sprite.prototype.update = function(e) {
    this.eventsEnabled = !0
}, Sprite.prototype.onDestroy = function() {
    if (this.command) {
        var e = this.app.scene.drawCalls.indexOf(this.command);
        e >= 0 && this.app.scene.drawCalls.splice(e, 1)
    }
};
var FontRenderer = pc.createScript("fontRenderer");
FontRenderer.attributes.add("text", {
    type: "string"
}), FontRenderer.attributes.add("maxTextLength", {
    type: "number",
    "default": 256,
    description: "The maximum length of the text - used to set the initial size of the vertex buffer"
}), FontRenderer.attributes.add("fontAtlas", {
    type: "asset",
    assetType: "texture",
    description: "The texture atlas that contains all the letters, this has to be a png file with an alpha channel"
}), FontRenderer.attributes.add("fontJson", {
    type: "asset",
    assetType: "json",
    description: "JSON file that contains all the font metadata that was converted from an .fnt file"
}), FontRenderer.attributes.add("x", {
    type: "number",
    "default": 0,
    description: "The x coordinate in pixels"
}), FontRenderer.attributes.add("y", {
    type: "number",
    "default": 0,
    description: "The y coordinate in pixels"
}), FontRenderer.attributes.add("depth", {
    type: "number",
    "default": 1,
    description: "The z depth of the font compared to other fonts"
}), FontRenderer.attributes.add("anchor", {
    type: "number",
    "default": 0,
    description: "The anchor of the font related to the screen bounds",
    "enum": [{
        topLeft: 0
    }, {
        top: 1
    }, {
        topRight: 2
    }, {
        left: 3
    }, {
        center: 4
    }, {
        right: 5
    }, {
        bottomLeft: 6
    }, {
        bottom: 7
    }, {
        bottomRight: 8
    }]
}), FontRenderer.attributes.add("pivot", {
    type: "number",
    "default": 0,
    description: "The pivot point of the font",
    "enum": [{
        topLeft: 0
    }, {
        top: 1
    }, {
        topRight: 2
    }, {
        left: 3
    }, {
        center: 4
    }, {
        right: 5
    }, {
        bottomLeft: 6
    }, {
        bottom: 7
    }, {
        bottomRight: 8
    }]
}), FontRenderer.attributes.add("tint", {
    type: "rgba",
    description: "A color that is multiplied with the current color of the font",
    "default": [1, 1, 1, 1]
}), FontRenderer.attributes.add("maxResHeight", {
    type: "number",
    "default": 720,
    description: "The maximum resolution height of the application. Used to scale the font accordingly."
}), FontRenderer.shader = null, FontRenderer.vertexFormat = null, FontRenderer.resolution = new pc.Vec2, FontRenderer.prototype.initialize = function() {
    var t = document.getElementById("application-canvas");
    this.userOffset = new pc.Vec2, this.offset = new pc.Vec2, this.scaling = new pc.Vec2, this.anchorOffset = new pc.Vec2, this.pivotOffset = new pc.Vec2, this.width = 0, this.height = 0;
    var e = this.app,
        s = e.graphicsDevice;
    if (!FontRenderer.shader) {
        var n = {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION,
                aUv0: pc.SEMANTIC_TEXCOORD0
            },
            vshader: ["attribute vec2 aPosition;", "attribute vec2 aUv0;", "varying vec2 vUv0;", "uniform vec2 uResolution;", "uniform vec2 uOffset;", "uniform vec2 uScale;", "", "void main(void)", "{", "    gl_Position = vec4(2.0 * ((uScale * aPosition.xy + uOffset) / uResolution ) - 1.0, -0.9, 1.0);", "    vUv0 = aUv0;", "}"].join("\n"),
            fshader: ["precision " + s.precision + " float;", "", "varying vec2 vUv0;", "", "uniform vec4 vTint;", "", "uniform sampler2D uColorMap;", "", "void main(void)", "{", "    vec4 color = texture2D(uColorMap, vUv0);", "    gl_FragColor = vec4(color.rgb * vTint.rgb, color.a * vTint.a);", "}"].join("\n")
        };
        FontRenderer.shader = new pc.Shader(s, n)
    }
    if (FontRenderer.vertexFormat || (FontRenderer.vertexFormat = new pc.VertexFormat(s, [{
            semantic: pc.SEMANTIC_POSITION,
            components: 2,
            type: pc.ELEMENTTYPE_FLOAT32
        }, {
            semantic: pc.SEMANTIC_TEXCOORD0,
            components: 2,
            type: pc.ELEMENTTYPE_FLOAT32
        }])), this.fontAtlas) {
        this.atlas = this.fontAtlas.resource, this.font = this.fontJson.resource, this.vertexBuffer = new pc.VertexBuffer(s, FontRenderer.vertexFormat, 6 * this.maxTextLength, pc.BUFFER_DYNAMIC), this.updateText(this.text);
        var o = new pc.Command(pc.LAYER_HUD, pc.BLEND_NORMAL, function() {
            if (this.entity.enabled) {
                s.setShader(FontRenderer.shader);
                var e = s.getBlending(),
                    n = s.getDepthTest(),
                    o = s.getDepthWrite();
                s.setBlending(!0), s.setDepthTest(!1), s.setDepthWrite(!1), s.setBlendFunction(pc.BLENDMODE_SRC_ALPHA, pc.BLENDMODE_ONE_MINUS_SRC_ALPHA), FontRenderer.resolution.set(t.offsetWidth, t.offsetHeight), s.scope.resolve("uResolution").setValue(FontRenderer.resolution.data), s.scope.resolve("uScale").setValue(this.calculateScaling().data), s.scope.resolve("uOffset").setValue(this.calculateOffset().data), s.scope.resolve("uColorMap").setValue(this.atlas), s.scope.resolve("vTint").setValue(this.tint.data), s.setVertexBuffer(this.vertexBuffer, 0), s.draw({
                    type: pc.PRIMITIVE_TRIANGLES,
                    base: 0,
                    count: 6 * this.text.length,
                    indexed: !1
                }), s.setBlending(e), s.setDepthTest(n), s.setDepthWrite(o)
            }
        }.bind(this));
        this.command = o, o.key = this.depth, e.scene.drawCalls.push(o), this.on("attr", this.onAttributeChanged, this), this.on("state", this.onState), this.on("destroy", this.onDestroy), e.mouse.on("mousedown", this.onMouseDown, this), e.touch && e.touch.on("touchstart", this.onTouchDown, this), this.onState()
    }
}, FontRenderer.prototype.onMouseDown = function(t) {
    this.eventsEnabled && this.onClick(t)
}, FontRenderer.prototype.onTouchDown = function(t) {
    this.eventsEnabled && this.onClick(t.changedTouches[0])
}, FontRenderer.prototype.onClick = function(t) {
    var e, s, n, o, i, r, a = this.app.graphicsDevice.canvas,
        h = this.scaling,
        c = this.offset,
        f = this.width,
        p = this.height;
    e = 2 * (0 * h.x + c.x) / FontRenderer.resolution.x - 1, s = 2 * (0 * h.y + c.y) / FontRenderer.resolution.y - 1, n = 2 * (h.x * f + c.x) / FontRenderer.resolution.x - 1, o = 2 * (h.y * -p + c.y) / FontRenderer.resolution.y - 1, i = 2 * t.x / a.offsetWidth - 1, r = 2 * (a.offsetHeight - t.y) / a.offsetHeight - 1, i >= e && n >= i && s >= r && r >= o && this.fire("click")
}, FontRenderer.prototype.onAttributeChanged = function(t, e, s) {
    this.eventsEnabled = !1, "text" === t ? s !== e && this.updateText() : "depth" === t && (this.command.key = e)
}, FontRenderer.prototype.getTotalOffset = function(t) {
    return t.copy(this.userOffset).add(this.alignOffset)
}, FontRenderer.prototype.updateText = function() {
    this.vertexBuffer.lock();
    var t, e, s, n, o, i = 0,
        r = 0,
        a = i,
        h = r,
        c = this.text,
        f = c.length;
    this.width = 0, this.height = 0;
    var p = new pc.VertexIterator(this.vertexBuffer);
    for (o = 0; f > o; o++) {
        var d = c.charCodeAt(o),
            l = this.font.chars[d];
        if (void 0 !== l) {
            t = l.x / this.font.common.scaleW, e = 1 - (l.y + l.height) / this.font.common.scaleH, s = (l.x + l.width) / this.font.common.scaleW, n = 1 - l.y / this.font.common.scaleH;
            var u = l.width,
                v = l.height,
                m = l.xoffset,
                O = l.yoffset;
            if (a = i + m, h = -O, this.width = Math.max(this.width, a + u), this.height = Math.max(this.height, h + v), p.element[pc.SEMANTIC_POSITION].set(a, h - v), p.element[pc.SEMANTIC_TEXCOORD0].set(t, e), p.next(), p.element[pc.SEMANTIC_POSITION].set(a + u, h - v), p.element[pc.SEMANTIC_TEXCOORD0].set(s, e), p.next(), p.element[pc.SEMANTIC_POSITION].set(a, h), p.element[pc.SEMANTIC_TEXCOORD0].set(t, n), p.next(), p.element[pc.SEMANTIC_POSITION].set(a + u, h - v), p.element[pc.SEMANTIC_TEXCOORD0].set(s, e), p.next(), p.element[pc.SEMANTIC_POSITION].set(a + u, h), p.element[pc.SEMANTIC_TEXCOORD0].set(s, n), p.next(), p.element[pc.SEMANTIC_POSITION].set(a, h), p.element[pc.SEMANTIC_TEXCOORD0].set(t, n), o == f - 1) p.end();
            else {
                p.next();
                var g = c.charCodeAt(o + 1),
                    R = 0;
                this.font.kernings[d] && this.font.kernings[d][g] && (R = this.font.kernings[d][g]), i += l.xadvance + R
            }
        }
    }
    this.vertexBuffer.unlock()
}, FontRenderer.prototype.calculateOffset = function() {
    var t = this.app.graphicsDevice.canvas;
    return this.calculateAnchorOffset(), this.calculatePivotOffset(), this.offset.set(this.x * this.scaling.x, this.y * this.scaling.y).add(this.userOffset).add(this.anchorOffset).add(this.pivotOffset), this.offset.y += t.offsetHeight, this.offset
}, FontRenderer.prototype.calculateScaling = function() {
    var t = this.app.graphicsDevice.canvas,
        e = t.offsetHeight / this.maxResHeight;
    return this.scaling.set(e, e), this.scaling
}, FontRenderer.prototype.calculateAnchorOffset = function() {
    var t = this.app.graphicsDevice.canvas,
        e = t.offsetWidth,
        s = t.offsetHeight;
    switch (this.anchor) {
        case 0:
            this.anchorOffset.set(0, 0);
            break;
        case 1:
            this.anchorOffset.set(.5 * e, 0);
            break;
        case 2:
            this.anchorOffset.set(e, 0);
            break;
        case 3:
            this.anchorOffset.set(0, .5 * -s);
            break;
        case 4:
            this.anchorOffset.set(.5 * e, .5 * -s);
            break;
        case 5:
            this.anchorOffset.set(e, .5 * -s);
            break;
        case 6:
            this.anchorOffset.set(0, -s);
            break;
        case 7:
            this.anchorOffset.set(e / 2, -s);
            break;
        case 8:
            this.anchorOffset.set(e, -s);
            break;
        default:
            console.error("Wrong anchor: " + this.anchor)
    }
    return this.anchorOffset
}, FontRenderer.prototype.calculatePivotOffset = function() {
    var t = this.width * this.scaling.x,
        e = this.height * this.scaling.y;
    switch (this.pivot) {
        case 0:
            this.pivotOffset.set(0, 0);
            break;
        case 1:
            this.pivotOffset.set(.5 * -t, 0);
            break;
        case 2:
            this.pivotOffset.set(-t, 0);
            break;
        case 3:
            this.pivotOffset.set(0, .5 * e);
            break;
        case 4:
            this.pivotOffset.set(.5 * -t, .5 * e);
            break;
        case 5:
            this.pivotOffset.set(-t, .5 * e);
            break;
        case 6:
            this.pivotOffset.set(0, e);
            break;
        case 7:
            this.pivotOffset.set(-t / 2, e);
            break;
        case 8:
            this.pivotOffset.set(-t, e);
            break;
        default:
            console.error("Wrong pivot: " + this.pivot)
    }
    return this.pivotOffset
}, FontRenderer.prototype.onState = function(t) {
    this.eventsEnabled = !1
}, FontRenderer.prototype.update = function(t) {
    this.eventsEnabled = !0
}, FontRenderer.prototype.onDestroy = function() {
    if (this.command) {
        var t = this.app.scene.drawCalls.indexOf(this.command);
        t >= 0 && this.app.scene.drawCalls.splice(t, 1)
    }
};
var HtmlAndCss = pc.createScript("htmlAndCss");
HtmlAndCss.animationTime = 800, HtmlAndCss.prototype.initialize = function() {
    this.loadAllResource(), this.hideAllHtml()
}, HtmlAndCss.prototype.swap = function(t) {}, HtmlAndCss.prototype.update = function(t) {}, HtmlAndCss.prototype.loadAllResource = function() {
    this.loadRotateHtml(), this.loadBackgroundOverlay(), this.loadAnimationCss(), this.loadCss()
}, HtmlAndCss.prototype.hideAllHtml = function() {
    $("#bg-overlay").hide()
}, HtmlAndCss.prototype.overlayFadeOut = function(t) {
    t.addClass("animated overlayFadeOut"), setTimeout(function() {
        t.hide(), t.removeClass("animated overlayFadeOut")
    }, HtmlAndCss.animationTime)
}, HtmlAndCss.prototype.overlayFadeIn = function(t) {
    t.show(), t.addClass("animated overlayFadeIn"), setTimeout(function() {
        t.removeClass("animated overlayFadeIn")
    }, HtmlAndCss.animationTime)
}, HtmlAndCss.prototype.fadeOutUp = function(t) {
    t.addClass("animated fadeOutUp"), setTimeout(function() {
        t.hide(), t.removeClass("animated fadeOutUp")
    }, HtmlAndCss.animationTime)
}, HtmlAndCss.prototype.fadeInDown = function(t) {
    t.show(), t.addClass("animated fadeInDown"), setTimeout(function() {
        t.removeClass("animated fadeInDown")
    }, HtmlAndCss.animationTime)
}, HtmlAndCss.prototype.loadBackgroundOverlay = function() {
    var t = document.createElement("div");
    t.id = "bg-overlay", document.body.appendChild(t)
}, HtmlAndCss.prototype.loadRotateHtml = function() {
    var t = document.createElement("div");
    t.id = "rotate-box", document.body.appendChild(t)
}, HtmlAndCss.prototype.loadCss = function() {
    var t = this.app.assets.findByTag("justRollingCss")[0],
        n = pc.createStyle(t.resource || "");
    document.head.appendChild(n), t.on("load", function() {
        n.innerHTML = t.resource
    }), this.app.assets.load(t)
}, HtmlAndCss.prototype.loadAnimationCss = function() {
    var t = this.app.assets.findByTag("AnimationCss")[0],
        n = ".animated {-webkit-animation-duration: " + HtmlAndCss.animationTime / 1e3 + "s;animation-duration: " + HtmlAndCss.animationTime / 1e3 + "s;-webkit-animation-fill-mode: both;animation-fill-mode: both}";
    t.resource += n;
    var a = pc.createStyle(t.resource || "");
    document.head.appendChild(a), t.on("load", function() {
        var n = ".animated {-webkit-animation-duration: " + HtmlAndCss.animationTime / 1e3 + "s;animation-duration: " + HtmlAndCss.animationTime / 1e3 + "s;-webkit-animation-fill-mode: both;animation-fill-mode: both}";
        t.resource += n, a.innerHTML = t.resource
    }), this.app.assets.load(t)
};
var GameManager = pc.createScript("gameManager");
GameManager.LOADING = "LOADING", GameManager.START_MENU = "START_MENU", GameManager.IN_GAME = "IN_GAME", GameManager.GAMEOVER_MENU = "GAMEOVER_MENU", GameManager.gameState = GameManager.LOADING, GameManager.GAME_PAUSE = !0, GameManager.isHighPerformence = !0, GameManager.initTime = 2e3, GameManager.CAT = "CAT", GameManager.BEAR = "BEAR", GameManager.DRAGON = "DRAGON", GameManager.LION = "LION", GameManager.PIG = "PIG", GameManager.ANIMAL_STATE_ARRAY = [GameManager.CAT, GameManager.BEAR, GameManager.DRAGON, GameManager.LION, GameManager.PIG], GameManager.animalState = GameManager.CAT, GameManager.PINK = "PINK", GameManager.PURPLE = "PURPLE", GameManager.GREEN = "GREEN", GameManager.BLUE = "BLUE", GameManager.YELLOW = "YELLOW", GameManager.SKIN_STATE_ARRAY = [GameManager.PINK, GameManager.PURPLE, GameManager.GREEN, GameManager.BLUE, GameManager.YELLOW], GameManager.skinState = GameManager.PINK, GameManager.attributes.add("startMenu", {
    type: "entity",
    description: "开始页"
}), GameManager.attributes.add("inGame", {
    type: "entity",
    description: "游戏页"
}), GameManager.attributes.add("gameoverMenu", {
    type: "entity",
    description: "结束页"
}), GameManager.attributes.add("scoreEntity", {
    type: "entity",
    description: "分数实体"
}), GameManager.attributes.add("scoreStep", {
    type: "number",
    "default": 1,
    description: "分数的步增, 即过一块道路增加的分数"
}), GameManager.attributes.add("scoreAmazing", {
    type: "number",
    "default": 2,
    description: "惊险躲避增加的分数"
}), GameManager.attributes.add("scoreGetGemstone", {
    type: "number",
    "default": 3,
    description: "获得钻石增加的分数"
}), GameManager.prototype.initialize = function() {
    var e = this;
    this.score = 0, this.distance = 0, this.catModel = this.app.assets.findByTag("CatModel")[0], this.bearModel = this.app.assets.findByTag("BearModel")[0], this.pigModel = this.app.assets.findByTag("PigModel")[0], this.dragonModel = this.app.assets.findByTag("DragonModel")[0], this.lionModel = this.app.assets.findByTag("LionModel")[0], this.catShadowModel = this.app.assets.findByTag("CatShadowModel")[0], this.bearShadowModel = this.app.assets.findByTag("BearShadowModel")[0], this.pigShadowModel = this.app.assets.findByTag("PigShadowModel")[0], this.dragonShadowModel = this.app.assets.findByTag("DragonShadowModel")[0], this.lionShadowModel = this.app.assets.findByTag("LionShadowModel")[0], this.app.on("ui:onGameStart", this.onUiGameStart, this), this.app.on("trigger:onAddScore", this.addScore, this), this.app.on("game:gameover", this.onUiGameover, this), this.app.on("game:reset", this.onGameReset, this), this.app.on("trigger:addDistance", this.addDistance, this), this.app.on("ui:startChallenge", this.startChallenge, this), this.formatDate(), this.onWindowResize(), this.initRem(), $("#dev-tools").css("height", "100px"), $("#application-canvas").css("z-index", "10"), $("#application-splash-wrapper").css("z-index", "100"), setTimeout(function() {
        e.onUiStartMenu()
    }, GameManager.initTime)
}, GameManager.prototype.swap = function(e) {
    this.score = e.score, this.distance = e.distance, this.level = e.level, this.catModel = e.catModel, this.bearModel = e.bearModel, this.pigModel = e.pigModel, this.dragonModel = e.dragonModel, this.lionModel = e.lionModel, e.app.off("ui:onGameStart", this.onUiGameStart, this), this.app.on("ui:onGameStart", this.onUiGameStart, this), e.app.off("trigger:onAddScore", this.addScore, this), this.app.on("trigger:onAddScore", this.addScore, this), e.app.off("game:gameover", this.onUiGameover, this), this.app.on("game:gameover", this.onUiGameover, this), e.app.off("game:reset", this.onGameReset, this), this.app.on("game:reset", this.onGameReset, this), e.app.off("trigger:addDistance", this.addDistance, this), this.app.on("trigger:addDistance", this.addDistance, this)
}, GameManager.prototype.update = function(e) {}, GameManager.prototype.initRem = function() {
    var e = -1,
        a = window.innerWidth;
    e = 100 * a / 375, document.querySelector("html").style.fontSize = e + "px"
}, GameManager.prototype.getLocalScore = function() {
    return this.score
}, GameManager.prototype.onGameReset = function(e) {
    this.score = 0, this.distance = 0, this.scoreEntity.script.fontRenderer.text = this.score.toString();
    var a = Math.floor(Math.random() * GameManager.ANIMAL_STATE_ARRAY.length);
    GameManager.animalState = GameManager.ANIMAL_STATE_ARRAY[a];
    var t = Math.floor(Math.random() * GameManager.SKIN_STATE_ARRAY.length);
    GameManager.skinState = GameManager.SKIN_STATE_ARRAY[t], this.app.fire("game:onChangeSkin"), this.onUiStartMenu(e)
}, GameManager.prototype.onUiStartMenu = function(e) {
    var a = "undefined" != typeof e && "challenge" === e,
        t = 0;
    a && (t = 1e3), GameManager.gameState = GameManager.START_MENU, setTimeout(function() {
        this.startMenu.enabled = !0, a && this.onUiGameStart(e)
    }.bind(this), GameManager.initTime + t), this.gameoverMenu.enabled = !1
}, GameManager.prototype.onUiGameStart = function(e) {
    GameManager.gameState = GameManager.IN_GAME, GameManager.GAME_PAUSE = !1, this.app.fire("game:start"), this.inGame.enabled = !0, this.startMenu.enabled = !1, "undefined" != typeof e && "challenge" === e && this.app.fire("game:countDown", e)
}, GameManager.prototype.onUiGameover = function() {
    var e = this;
    GameManager.gameState = GameManager.GAMEOVER_MENU, this.entity.sound.play("Dead"), GameManager.GAME_PAUSE = !0, setTimeout(function() {
        e.gameoverMenu.enabled = !0
    }, 1e3), this.inGame.enabled = !1, this.app.fire("message:update")
}, GameManager.prototype.addScore = function(e) {
    var a = this;
    this.score += e, this.app.fire("game:addScore", e), setTimeout(function() {
        a.scoreEntity.script.fontRenderer.text = a.score.toString()
    }, 20)
}, GameManager.prototype.addDistance = function(e) {
    this.distance += e
}, GameManager.prototype.getDistance = function() {
    return this.distance
}, GameManager.prototype.onWindowResize = function() {
    var e = this;
    window.onresize = function() {
        window.innerHeight < window.innerWidth ? (console.log("Orientation"), GameManager.gameState !== GameManager.IN_GAME || Revive.isRevivePage || (GameManager.GAME_PAUSE = !0, e.app.fire("game:pause")), $("#rotate-box").show()) : (console.log("Verticle"), GameManager.gameState !== GameManager.IN_GAME || Revive.isRevivePage || (GameManager.GAME_PAUSE = !1), $("#rotate-box").hide())
    }, setTimeout(window.onresize, 0)
}, GameManager.prototype.formatDate = function() {
    Date.prototype.Format = function(e) {
        var a = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var t in a) new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? a[t] : ("00" + a[t]).substr(("" + a[t]).length)));
        return e
    }
};
var StartMenu = pc.createScript("startMenu");
StartMenu.attributes.add("startBtnEntity", {
    type: "entity",
    description: "开始按钮"
}), StartMenu.attributes.add("gameRuleEntity", {
    type: "entity",
    description: "游戏规则"
}), StartMenu.attributes.add("moreGameEntity", {
    type: "entity",
    description: "更多游戏"
}), StartMenu.attributes.add("rankingEntity", {
    type: "entity",
    description: "排行榜"
}), StartMenu.attributes.add("settingEntity", {
    type: "entity",
    description: "设置实体"
}), StartMenu.attributes.add("diamondNumberEntity", {
    type: "entity",
    description: "钻石数量实体"
}), StartMenu.attributes.add("rotateAnimal", {
    type: "entity",
    description: "动物实体"
}), StartMenu.attributes.add("rotateSpeed", {
    type: "number",
    "default": 60,
    description: "小猫的旋转速度, 度/秒"
}), StartMenu.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.isAndroid = window.navigator.userAgent.indexOf("Android") > -1, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, StartMenu.prototype.swap = function(t) {
    this.gameEntity = t.gameEntity, this.isAndroid = t.isAndroid, t.off("enable", this.onEnable, this), t.off("disable", this.onDisable, this), this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this)
}, StartMenu.prototype.update = function(t) {
    this.rotateAnimal.rotate(0, this.rotateSpeed * t, 0)
}, StartMenu.prototype.changeRotateAnimal = function() {
    GameManager.animalState === GameManager.CAT ? this.rotateAnimal.model.asset = this.gameEntity.script.gameManager.catModel : GameManager.animalState === GameManager.BEAR ? this.rotateAnimal.model.asset = this.gameEntity.script.gameManager.bearModel : GameManager.animalState === GameManager.DRAGON ? this.rotateAnimal.model.asset = this.gameEntity.script.gameManager.dragonModel : GameManager.animalState === GameManager.LION ? this.rotateAnimal.model.asset = this.gameEntity.script.gameManager.lionModel : GameManager.animalState === GameManager.PIG && (this.rotateAnimal.model.asset = this.gameEntity.script.gameManager.pigModel)
}, StartMenu.prototype.onEnable = function() {
    var t = this;
    this.app.touch ? (t.app.touch.on("touchstart", t.onTouchStart, t), t.app.touch.on("touchend", t.onTouchEnd, t)) : (t.app.mouse.on("mousedown", t.onMouseDown, t), t.app.mouse.on("mouseup", t.onMouseUp, t)), this.changeRotateAnimal(), this.setDiamond()
}, StartMenu.prototype.onDisable = function() {
    this.app.touch ? (this.app.touch.off("touchstart", this.onTouchStart, this), this.app.touch.off("touchend", this.onTouchEnd, this)) : (this.app.mouse.off("mousedown", this.onMouseDown, this), this.app.mouse.off("mouseup", this.onMouseUp, this))
}, StartMenu.prototype.setDiamond = function() {
    this.diamondNumberEntity.script.fontRenderer.text = WeChat.diamond.toString()
}, StartMenu.prototype.playSound = function() {
    var t = Math.ceil(2 * Math.random());
    this.gameEntity.sound.play("Turn0" + t)
}, StartMenu.prototype.tapStart = function(t, e) {
    var i = this.app.graphicsDevice.canvas,
        a = parseInt(i.clientWidth, 10),
        n = parseInt(i.clientHeight, 10);
    t > .351 * a && .647 * a > t && e > .554 * n && .726 * n > e ? this.startBtnEntity.script.sprite.maxResHeight += 30 : t > .543 * a && .678 * a > t && e > .823 * n && .91 * n > e ? this.moreGameEntity.script.sprite.maxResHeight += 20 : t > .326 * a && .461 * a > t && e > .823 * n && .91 * n > e ? this.rankingEntity.script.sprite.maxResHeight += 20 : t > .111 * a && .248 * a > t && e > .823 * n && .91 * n > e ? this.gameRuleEntity.script.sprite.maxResHeight += 20 : t > .36 * a && .621 * a > t && e > .301 * n && .447 * n > e ? (this.rotateAnimal.setLocalEulerAngles(0, -45, 0), this.playSound()) : t > .756 * a && .888 * a > t && e > .823 * n && .91 * n > e && (this.settingEntity.script.sprite.maxResHeight += 20)
}, StartMenu.prototype.tapEnd = function(t, e) {
    var i = this,
        a = this.app.graphicsDevice.canvas,
        n = parseInt(a.clientWidth, 10),
        s = parseInt(a.clientHeight, 10);
    t > .351 * n && .647 * n > t && e > .554 * s && .726 * s > e ? (this.startBtnEntity.script.sprite.maxResHeight -= 30, this.playSound(), setTimeout(function() {
        i.app.fire("ui:onGameStart")
    }, 100)) : t > .756 * n && .888 * n > t && e > .823 * s && .91 * s > e ? (this.playSound(), this.settingEntity.script.sprite.maxResHeight -= 20, this.app.fire("setting:showing")) : t > .111 * n && .248 * n > t && e > .823 * s && .91 * s > e ? (this.gameRuleEntity.script.sprite.maxResHeight -= 20, this.playSound(), this.app.fire("message:show")) : t > .326 * n && .461 * n > t && e > .823 * s && .91 * s > e ? (this.rankingEntity.script.sprite.maxResHeight -= 20, this.playSound(), i.app.fire("ranking:showRanking")) : t > .543 * n && .678 * n > t && e > .823 * s && .91 * s > e && (this.moreGameEntity.script.sprite.maxResHeight -= 20, this.playSound(), setTimeout(function() {
        window.location.href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI2OTQzNzM3NQ==#wechat_redirect"
    }, 100))
}, StartMenu.prototype.onTouchStart = function(t) {
    var e = t.changedTouches[0];
    this.tapStart(e.x, e.y), t.event.preventDefault()
}, StartMenu.prototype.onTouchEnd = function(t) {
    var e = t.changedTouches[0];
    this.tapEnd(e.x, e.y), t.event.preventDefault()
}, StartMenu.prototype.onMouseDown = function(t) {
    this.tapStart(t.x, t.y)
}, StartMenu.prototype.onMouseUp = function(t) {
    this.tapEnd(t.x, t.y)
};
var Road = pc.createScript("road");
Road.attributes.add("Road01", {
    type: "entity",
    description: "路"
}), Road.attributes.add("treeEntity01", {
    type: "entity",
    description: "小树"
}), Road.attributes.add("treeEntity02", {
    type: "entity",
    description: "中树"
}), Road.attributes.add("treeEntity03", {
    type: "entity",
    description: "大树"
}), Road.attributes.add("boxEntity", {
    type: "entity",
    description: "障碍物：盒子"
}), Road.attributes.add("cylinderEntity", {
    type: "entity",
    description: "障碍物：圆柱"
}), Road.attributes.add("gemstoneEntity", {
    type: "entity",
    description: "钻石"
}), Road.attributes.add("cloudNoAdEntity", {
    type: "entity",
    description: "没有广告的云"
}), Road.attributes.add("cloudAdEntity", {
    type: "entity",
    description: "有广告的云"
}), Road.attributes.add("RoadWidth", {
    type: "number",
    "default": 20,
    description: "一块路在Z方向的长度"
}), Road.attributes.add("roadNum", {
    type: "number",
    "default": 12,
    description: "被铺在一个场景中道路块的数量"
}), Road.attributes.add("treeNum", {
    type: "number",
    "default": 24,
    description: "被铺在一个场景中树的数量"
}), Road.attributes.add("treePositionX", {
    type: "number",
    "default": 6.8,
    description: "树被分布在道路的两边，距离道路中心点X的值，左右分别是treePositionX和-treePositionX。"
}), Road.attributes.add("treePositionZ", {
    type: "number",
    "default": 2,
    description: "树被分布在道路的两边，距离道路中心点Z的值，左右分别是treePositionZ和-treePositionZ。"
}), Road.attributes.add("treePositionY", {
    type: "number",
    "default": -.8,
    description: "树相对于地面的高度。"
}), Road.attributes.add("blockNodeNum", {
    type: "number",
    "default": 9,
    description: "一块路有9个坑。"
}), Road.attributes.add("optimizationNum", {
    type: "number",
    "default": 6,
    description: "性能优化参数，越大性能越好，实际上是最前面的道路隐藏的数量"
}), Road.attributes.add("minBlockDis50", {
    type: "number",
    "default": 5,
    description: "0-50分时同一水平线上的两个障碍物的随机最小距离, 最大值不能超过8，可以为8"
}), Road.attributes.add("vDis50", {
    type: "number",
    "default": 4,
    description: "0-50分时障碍物随机分布最大的垂直距离, verticleDistance50, 最大值不能超过12，可以为12"
}), Road.attributes.add("hNum50", {
    type: "number",
    "default": 1,
    description: "0-50分时同一水平线上最多存在的障碍物数量, horizontalNumber50, 只能为1或者2或者3"
}), Road.attributes.add("minBlockDis150", {
    type: "number",
    "default": 5,
    description: "50-150分时同一水平线上的两个障碍物的随机最小距离, 最大值不能超过8，可以为8"
}), Road.attributes.add("vDis150", {
    type: "number",
    "default": 4,
    description: "50-150分时障碍物随机分布最大的垂直距离, verticleDistance150, 最大值不能超过12，可以为12"
}), Road.attributes.add("hNum150", {
    type: "number",
    "default": 1,
    description: "50-150分时同一水平线上最多存在的障碍物数量, horizontalNumber150, 只能为1或者2或者3"
}), Road.attributes.add("minBlockDis300", {
    type: "number",
    "default": 5,
    description: "150-300分时同一水平线上的两个障碍物的随机最小距离, 最大值不能超过8，可以为8"
}), Road.attributes.add("vDis300", {
    type: "number",
    "default": 4,
    description: "150-300分时障碍物随机分布最大的垂直距离, verticleDistance300, 最大值不能超过12，可以为12"
}), Road.attributes.add("hNum300", {
    type: "number",
    "default": 1,
    description: "150-300分时同一水平线上最多存在的障碍物数量, horizontalNumber300, 只能为1或者2或者3"
}), Road.attributes.add("minBlockDis500", {
    type: "number",
    "default": 5,
    description: "300-500分时同一水平线上的两个障碍物的随机最小距离, 最大值不能超过8，可以为8"
}), Road.attributes.add("vDis500", {
    type: "number",
    "default": 4,
    description: "300-500分时障碍物随机分布最大的垂直距离, verticleDistance500, 最大值不能超过12，可以为12"
}), Road.attributes.add("hNum500", {
    type: "number",
    "default": 1,
    description: "300-500分时同一水平线上最多存在的障碍物数量, horizontalNumber500, 只能为1或者2或者3"
}), Road.attributes.add("minBlockDis500Up", {
    type: "number",
    "default": 5,
    description: "500分以上时同一水平线上的两个障碍物的随机最小距离, 最大值不能超过8，可以为8"
}), Road.attributes.add("vDis500Up", {
    type: "number",
    "default": 4,
    description: "500分以上时障碍物随机分布最大的垂直距离, verticleDistance500Up, 最大值不能超过12，可以为12"
}), Road.attributes.add("hNum500Up", {
    type: "number",
    "default": 1,
    description: "500分以上时同一水平线上最多存在的障碍物数量, horizontalNumber500Up, 只能为1或者2或者3"
}), Road.prototype.initialize = function() {
    this.tileZ = -1, this.distanceCount = 0, this.roadEntitiesArray = [], this.treeEntitiesArray = [], this.blockEntitiesArray = [], this.levelOnePosArray = [], this.cloudEntitiesArray = [], this.gemstoneEntitiesArray = [], this.roadMaterialArray = [], this.treeSmallMaterialArray = [], this.treeMiddleMaterialArray = [], this.treeLargeMaterialArray = [], this.shadowRoadBlockArray = [], this.gameEntity = this.app.root.findByName("Game"), this.app.on("trigger:onAddRoad", this.addRoad, this), this.app.on("game:reset", this.reset, this), this.app.on("shadow:initShadowRoadArrayAndSoOn", this.initShadowRoadArrayAndSoOn, this), this.initLevelOnePosArray(), this.initBlockEntitiesArray(), this.initCloudEntitiesArray(), this.initGemstoneEntitiesArrar(), this.initTreeEntityArray(), this.initRoadMaterialArray(), this.initTreeMaterialArray(), this.initRoad()
}, Road.prototype.swap = function(t) {
    this.tileZ = t.tileZ, this.distanceCount = t.distanceCount, this.roadEntitiesArray = t.roadEntitiesArray, this.treeEntitiesArray = t.treeEntitiesArray, this.blockEntitiesArray = t.blockEntitiesArray, this.levelOnePosArray = t.levelOnePosArray, this.cloudEntitiesArray = t.cloudEntitiesArray, this.gemstoneEntitiesArray = t.gemstoneEntitiesArray, this.roadMaterialArray = t.roadMaterialArray, this.treeSmallMaterialArray = t.treeSmallMaterialArray, this.treeMiddleMaterialArray = t.treeMiddleMaterialArray, this.treeLargeMaterialArray = t.treeLargeMaterialArray, this.shadowRoadBlockArray = t.shadowRoadBlockArray, this.gameEntity = t.gameEntity, t.app.off("trigger:onAddRoad", this.addRoad, this), this.app.on("trigger:onAddRoad", this.addRoad, this), t.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this), t.app.off("shadow:initShadowRoadArrayAndSoOn", this.initShadowRoadArrayAndSoOn, this), this.app.on("shadow:initShadowRoadArrayAndSoOn", this.initShadowRoadArrayAndSoOn, this)
}, Road.prototype.update = function(t) {}, Road.prototype.initShadowRoadArrayAndSoOn = function() {
    this.shadowRoadBlockArray = [], this.shadowRoadBlockArray = this.gameEntity.script.shadowSystem.getPlayerShadowObstacleInfo().slice(0)
}, Road.prototype.initTreeMaterialArray = function() {
    for (var t = ["TreeSmallBlueMaterial", "TreeSmallGreenMaterial", "TreeSmallPinkMaterial", "TreeSmallPurpleMaterial", "TreeSmallYellowMaterial"], e = ["TreeMiddleBlueMaterial", "TreeMiddleGreenMaterial", "TreeMiddlePinkMaterial", "TreeMiddlePurpleMaterial", "TreeMiddleYellowMaterial"], i = ["TreeLargeBlueMaterial", "TreeLargeGreenMaterial", "TreeLargePinkMaterial", "TreeLargePurpleMaterial", "TreeLargeYellowMaterial"], r = 0, a = t.length; a > r; r++) this.treeSmallMaterialArray.push(this.app.assets.findByTag(t[r])[0]), this.treeMiddleMaterialArray.push(this.app.assets.findByTag(e[r])[0]), this.treeLargeMaterialArray.push(this.app.assets.findByTag(i[r])[0])
}, Road.prototype.initRoadMaterialArray = function() {
    for (var t = ["BlueFloorMaterial", "GreenFloorMaterial", "PinkFloorMaterial", "PurpleFloorMaterial", "YellowFloorMaterial"], e = 0, i = t.length; i > e; e++) this.roadMaterialArray.push(this.app.assets.findByTag(t[e])[0])
}, Road.prototype.initGemstoneEntitiesArrar = function() {
    this.gemstoneEntitiesArray.push(this.gemstoneEntity);
    var t = this.gemstoneEntity.clone();
    this.gemstoneEntitiesArray.push(t)
}, Road.prototype.initCloudEntitiesArray = function() {
    var t = null;
    this.cloudEntitiesArray.push(this.cloudAdEntity), this.cloudEntitiesArray.push(this.cloudNoAdEntity), t = this.cloudNoAdEntity.clone(), this.cloudEntitiesArray.push(t), t = this.cloudAdEntity.clone(), this.cloudEntitiesArray.push(t)
}, Road.prototype.initLevelOnePosArray = function() {
    for (var t = 0; t < this.blockNodeNum; t++) {
        var e = new pc.Vec3(-4 + t, 1, 10);
        this.levelOnePosArray.push(e)
    }
}, Road.prototype.initBlockEntitiesArray = function() {
    for (var t = null, e = 0, i = 3 * this.roadNum; i > e; e++)
        if (2 > e) switch (e) {
            case 0:
                this.blockEntitiesArray.push(this.boxEntity);
                break;
            case 1:
                this.blockEntitiesArray.push(this.cylinderEntity)
        } else {
            var r = Math.ceil(2 * Math.random());
            switch (r) {
                case 1:
                    t = this.boxEntity.clone(), this.blockEntitiesArray.push(t);
                    break;
                case 2:
                    t = this.cylinderEntity.clone(), this.blockEntitiesArray.push(t)
            }
        }
    this.adjustDifficulty()
}, Road.prototype.adjustDifficulty = function() {
    for (var t = 0, e = this.blockEntitiesArray.length; e > t; t++) switch (t) {
        case 1:
        case 16:
        case 22:
        case 28:
        case 34:
            this.blockEntitiesArray[t].enabled = !0;
            break;
        default:
            this.blockEntitiesArray[t].enabled = !1
    }
}, Road.prototype.initTreeEntityArray = function() {
    for (var t = null, e = 0; e < this.treeNum; e++)
        if (3 > e) switch (e) {
            case 0:
                this.treeEntitiesArray.push(this.treeEntity01);
                break;
            case 1:
                this.treeEntitiesArray.push(this.treeEntity02);
                break;
            case 2:
                this.treeEntitiesArray.push(this.treeEntity03)
        } else {
            var i = Math.ceil(4 * Math.random());
            switch (i) {
                case 1:
                    t = this.treeEntity01.clone(), this.treeEntitiesArray.push(t);
                    break;
                case 2:
                case 3:
                    t = this.treeEntity02.clone(), this.treeEntitiesArray.push(t);
                    break;
                case 4:
                    t = this.treeEntity03.clone(), this.treeEntitiesArray.push(t)
            }
        }
}, Road.prototype.reset = function() {
    this.tileZ = -1, this.distanceCount = 0;
    var t = null,
        e = null,
        i = null,
        r = null;
    GameManager.skinState === GameManager.BLUE ? (t = this.roadMaterialArray[0], e = this.treeSmallMaterialArray[0], i = this.treeMiddleMaterialArray[0], r = this.treeLargeMaterialArray[0]) : GameManager.skinState === GameManager.GREEN ? (t = this.roadMaterialArray[1], e = this.treeSmallMaterialArray[1], i = this.treeMiddleMaterialArray[1], r = this.treeLargeMaterialArray[1]) : GameManager.skinState === GameManager.PINK ? (t = this.roadMaterialArray[2], e = this.treeSmallMaterialArray[2], i = this.treeMiddleMaterialArray[2], r = this.treeLargeMaterialArray[2]) : GameManager.skinState === GameManager.PURPLE ? (t = this.roadMaterialArray[3], e = this.treeSmallMaterialArray[3], i = this.treeMiddleMaterialArray[3], r = this.treeLargeMaterialArray[3]) : GameManager.skinState === GameManager.YELLOW && (t = this.roadMaterialArray[4], e = this.treeSmallMaterialArray[4], i = this.treeMiddleMaterialArray[4], r = this.treeLargeMaterialArray[4]);
    for (var a = 0, s = this.roadEntitiesArray.length; s > a; a++) {
        switch (this.roadEntitiesArray[a].children[4].setLocalPosition(this.levelOnePosArray[0]), this.roadEntitiesArray[a].children[5].setLocalPosition(this.levelOnePosArray[4]), this.roadEntitiesArray[a].children[6].setLocalPosition(this.levelOnePosArray[8]), this.roadEntitiesArray[a].children[4].enabled = !1, this.roadEntitiesArray[a].children[5].enabled = !1, this.roadEntitiesArray[a].children[6].enabled = !1, a) {
            case 0:
            case 5:
            case 7:
            case 9:
            case 11:
                this.roadEntitiesArray[a].children[5].enabled = !0
        }
        this.roadEntitiesArray[a].rigidbody.teleport(0, 0, -this.tileZ * this.RoadWidth), this.roadEntitiesArray[a].model.meshInstances[0].material = t.resource, "TreeS" === this.roadEntitiesArray[a].children[2].name ? this.roadEntitiesArray[a].children[2].model.meshInstances[0].material = e.resource : "TreeM" === this.roadEntitiesArray[a].children[2].name ? this.roadEntitiesArray[a].children[2].model.meshInstances[0].material = i.resource : "TreeL" === this.roadEntitiesArray[a].children[2].name && (this.roadEntitiesArray[a].children[2].model.meshInstances[0].material = r.resource), "TreeS" === this.roadEntitiesArray[a].children[3].name ? this.roadEntitiesArray[a].children[3].model.meshInstances[0].material = e.resource : "TreeM" === this.roadEntitiesArray[a].children[3].name ? this.roadEntitiesArray[a].children[3].model.meshInstances[0].material = i.resource : "TreeL" === this.roadEntitiesArray[a].children[3].name && (this.roadEntitiesArray[a].children[3].model.meshInstances[0].material = r.resource), this.tileZ++
    }
    ShadowSystem.isOnShadowChallenge === !0 ? this.initShadowRoadArrayAndSoOn() : this.shadowRoadBlockArray = []
}, Road.prototype.initRoad = function() {
    for (var t = null, e = 0; e < this.roadNum; e++) {
        var i = 2 * e,
            r = i + 1,
            a = Math.random() * this.treePositionZ,
            s = -Math.random() * this.treePositionZ;
        this.treeEntitiesArray[i].setLocalPosition(this.treePositionX, this.treePositionY, a), this.treeEntitiesArray[r].setLocalPosition(-this.treePositionX, this.treePositionY, s), e % 3 === 0 && (e % 2 === 0 ? this.cloudEntitiesArray[e / 3].reparent(this.treeEntitiesArray[i]) : (this.cloudEntitiesArray[e / 3].reparent(this.treeEntitiesArray[r]), this.cloudEntitiesArray[e / 3].setLocalPosition(-1, 6, 0)));
        var o = 3 * e,
            n = o + 1,
            d = n + 1;
        if (2 === e) this.blockEntitiesArray[o].setLocalPosition(this.levelOnePosArray[0]), this.blockEntitiesArray[n].setLocalPosition(this.levelOnePosArray[4]), this.blockEntitiesArray[n].enabled = !1, this.blockEntitiesArray[d].setLocalPosition(this.levelOnePosArray[8]);
        else {
            var l = 0,
                h = 4,
                c = 8;
            this.blockEntitiesArray[o].setLocalPosition(this.levelOnePosArray[l]), this.blockEntitiesArray[n].setLocalPosition(this.levelOnePosArray[h]), this.blockEntitiesArray[d].setLocalPosition(this.levelOnePosArray[c])
        }
        if (e === this.roadNum - 1) this.treeEntitiesArray[i].reparent(this.Road01), this.treeEntitiesArray[r].reparent(this.Road01), this.blockEntitiesArray[o].reparent(this.Road01), this.blockEntitiesArray[n].reparent(this.Road01), this.blockEntitiesArray[d].reparent(this.Road01), this.Road01.rigidbody.teleport(0, 0, -this.tileZ * this.RoadWidth), this.roadEntitiesArray.push(this.Road01), this.Road01.enabled = !1;
        else {
            if (t = this.Road01.clone(), this.treeEntitiesArray[i].reparent(t), this.treeEntitiesArray[r].reparent(t), this.blockEntitiesArray[o].reparent(t), this.blockEntitiesArray[n].reparent(t), this.blockEntitiesArray[d].reparent(t), 13 === n) {
                var y = new pc.Vec3(0, .5, 6);
                y.add(this.blockEntitiesArray[n].getLocalPosition()), this.gemstoneEntitiesArray[0].setLocalPosition(y), this.gemstoneEntitiesArray[0].reparent(t)
            } else if (28 === n) {
                var y = new pc.Vec3(0, .5, 6);
                y.add(this.blockEntitiesArray[n].getLocalPosition()), this.gemstoneEntitiesArray[1].setLocalPosition(y), this.gemstoneEntitiesArray[1].reparent(t)
            }
            t.rigidbody.teleport(0, 0, -this.tileZ * this.RoadWidth), this.roadEntitiesArray.push(t), this.app.root.addChild(t), e >= this.roadNum - this.optimizationNum && (t.enabled = !1)
        }
        this.tileZ++
    }
}, Road.prototype.addRoad = function() {
    if (!GameManager.GAME_PAUSE) {
        var t = this.roadEntitiesArray.shift(),
            e = this.gameEntity.script.gameManager.getLocalScore();
        ShadowSystem.isOnShadowChallenge === !0 && this.shadowRoadBlockArray.length > 0 ? this.adjustShadowBlocks(t) : 50 >= e ? this.adjustBlocks(this.hNum50, this.vDis50, this.minBlockDis50, e, t) : 150 >= e ? this.adjustBlocks(this.hNum150, this.vDis150, this.minBlockDis150, e, t) : 300 >= e ? this.adjustBlocks(this.hNum300, this.vDis300, this.minBlockDis300, e, t) : 500 >= e ? this.adjustBlocks(this.hNum500, this.vDis500, this.minBlockDis500, e, t) : this.adjustBlocks(this.hNum500Up, this.vDis500Up, this.minBlockDis500Up, e, t), t.rigidbody.teleport(0, 0, -this.tileZ * this.RoadWidth), this.tileZ++, this.roadEntitiesArray.push(t), t.enabled = !1, this.roadEntitiesArray[this.roadNum - this.optimizationNum - 1].enabled = !0
    }
}, Road.prototype.adjustShadowBlocks = function(t) {
    var e = -1,
        i = -1,
        r = -1;
    e = parseInt(this.shadowRoadBlockArray.shift(), 10), i = parseInt(this.shadowRoadBlockArray.shift(), 10), r = parseInt(this.shadowRoadBlockArray.shift(), 10), -1 !== e && t.children[4].setLocalPosition(this.levelOnePosArray[e]), -1 !== i && t.children[5].setLocalPosition(this.levelOnePosArray[i]), t.children[6].setLocalPosition(this.levelOnePosArray[r]);
    var a = this.shadowRoadBlockArray.shift(),
        s = this.shadowRoadBlockArray.shift(),
        o = this.shadowRoadBlockArray.shift();
    t.children[4].enabled = a, t.children[5].enabled = s, t.children[6].enabled = o, this.gameEntity.script.shadowSystem.setObstacleInfo(e, i, r, t.children[4].enabled, t.children[5].enabled, t.children[6].enabled)
}, Road.prototype.adjustBlocks = function(t, e, i, r, a) {
    if (t > 3 || 1 > t) return void console.error("同一水平上最多的障碍物数的值只能是1或者2或者3");
    if (i > 8 || 1 > i) return void console.error("同一水平线上的两个障碍物的随机最小距离不能大于8或小于1。");
    if (e > 12 || 1 > e) return void console.error("障碍物之间的垂直距离最大是12，最小是1");
    var s = -1,
        o = -1,
        n = -1;
    if (3 === t) {
        var d = [];
        if (i >= 8) return void console.error("同一水平线上的3个障碍物的随机最小距离不能大于7或小于1。");
        if (7 === i ? d.push(0, 1, 8, 0, 7, 8) : 6 === i ? (d.push(0, 1, 7, 0, 1, 8, 0, 2, 8, 0, 6, 7, 0, 6, 8, 0, 7, 8), d.push(1, 2, 8, 1, 7, 8)) : 5 === i ? (d.push(0, 1, 6, 0, 1, 7, 0, 1, 8, 0, 2, 7, 0, 2, 8, 0, 3, 8, 0, 5, 6, 0, 5, 7, 0, 5, 8, 0, 6, 7, 0, 6, 8, 0, 7, 8), d.push(1, 2, 7, 1, 2, 8, 1, 3, 8, 1, 6, 7, 1, 6, 8, 1, 7, 8), d.push(2, 3, 8, 2, 7, 8)) : 4 === i ? (d.push(0, 1, 5, 0, 1, 6, 0, 1, 7, 0, 1, 8, 0, 2, 6, 0, 2, 7, 0, 2, 8, 0, 3, 7, 0, 3, 8, 0, 4, 5, 0, 4, 6, 0, 4, 7, 0, 4, 8, 0, 5, 6, 0, 5, 7, 0, 5, 8, 0, 6, 7, 0, 6, 8, 0, 7, 8), d.push(1, 2, 6, 1, 2, 7, 1, 2, 8, 1, 3, 7, 1, 3, 8, 1, 4, 8, 1, 3, 7, 1, 3, 8, 1, 4, 8, 1, 5, 6, 1, 5, 7, 1, 5, 8, 1, 6, 7, 1, 6, 8, 1, 7, 8), d.push(2, 3, 7, 2, 3, 8, 2, 4, 8, 2, 6, 7, 2, 6, 8, 2, 7, 8), d.push(3, 4, 8, 3, 7, 8)) : 3 === i ? (d.push(0, 1, 4, 0, 1, 5, 0, 1, 6, 0, 1, 7, 0, 1, 8, 0, 2, 5, 0, 2, 6, 0, 2, 7, 0, 2, 8, 0, 3, 4, 0, 3, 5, 0, 3, 6, 0, 3, 7, 0, 3, 8, 0, 4, 5, 0, 4, 6, 0, 4, 7, 0, 4, 8, 0, 5, 6, 0, 5, 7, 0, 5, 8, 0, 6, 7, 0, 6, 8, 0, 7, 8), d.push(1, 2, 5, 1, 2, 6, 1, 2, 7, 1, 2, 8, 1, 3, 6, 1, 3, 7, 1, 3, 8, 1, 4, 5, 1, 4, 6, 1, 4, 7, 1, 4, 8, 1, 5, 6, 1, 5, 7, 1, 5, 8, 1, 6, 7, 1, 6, 8, 1, 7, 8), d.push(2, 3, 6, 2, 3, 7, 2, 3, 8, 2, 4, 7, 2, 4, 8, 2, 5, 6, 2, 5, 7, 2, 5, 8, 2, 6, 7, 2, 6, 8, 2, 7, 8), d.push(3, 4, 7, 3, 4, 8, 3, 5, 8, 3, 6, 7, 3, 6, 8, 3, 7, 8), d.push(4, 5, 8, 4, 7, 8)) : 2 === i && (d.push(0, 1, 3, 0, 1, 4, 0, 1, 5, 0, 1, 6, 0, 1, 7, 0, 1, 8, 0, 2, 3, 0, 2, 4, 0, 2, 5, 0, 2, 6, 0, 2, 7, 0, 2, 8, 0, 3, 4, 0, 3, 5, 0, 3, 6, 0, 3, 7, 0, 3, 8, 0, 4, 5, 0, 4, 6, 0, 4, 7, 0, 4, 8, 0, 5, 6, 0, 5, 7, 0, 5, 8, 0, 6, 7, 0, 6, 8, 0, 7, 8), d.push(1, 2, 4, 1, 2, 5, 1, 2, 6, 1, 2, 7, 1, 2, 8, 1, 3, 4, 1, 3, 5, 1, 3, 6, 1, 3, 7, 1, 3, 8, 1, 4, 5, 1, 4, 6, 1, 4, 7, 1, 4, 8, 1, 5, 6, 1, 5, 7, 1, 5, 8, 1, 6, 7, 1, 6, 8, 1, 7, 8), d.push(2, 3, 5, 2, 3, 6, 2, 3, 7, 2, 3, 8, 2, 4, 5, 2, 4, 6, 2, 4, 7, 2, 4, 8, 2, 5, 6, 2, 5, 7, 2, 5, 8, 2, 6, 7, 2, 6, 8, 2, 7, 8), d.push(3, 4, 6, 3, 4, 7, 3, 4, 8, 3, 5, 6, 3, 5, 7, 3, 5, 8, 3, 6, 7, 3, 6, 8, 3, 7, 8), d.push(4, 5, 7, 4, 5, 8, 4, 6, 7, 4, 6, 8, 4, 7, 8), d.push(5, 6, 8, 5, 7, 8)), 1 === i) {
            var l = [0, 1, 2, 3, 4, 5, 6, 7, 8],
                h = -1;
            h = Math.floor(Math.random() * l.length), s = l[h], l.splice(h, 1), h = Math.floor(Math.random() * l.length), o = l[h], l.splice(h, 1), h = Math.floor(Math.random() * l.length), n = l[h]
        } else {
            var c = Math.floor(Math.random() * (d.length / 3));
            s = d[c], o = d[c + 1], n = d[c + 2]
        }
        a.children[4].setLocalPosition(this.levelOnePosArray[s]), a.children[5].setLocalPosition(this.levelOnePosArray[o]), a.children[6].setLocalPosition(this.levelOnePosArray[n])
    } else if (2 === t) {
        if (i >= 5) o = Math.floor(Math.random() * (this.blockNodeNum - i)), n = Math.floor(Math.random() * (this.blockNodeNum - i - o)) + i + o;
        else {
            o = Math.floor(Math.random() * this.blockNodeNum);
            for (var l = [], y = 0; y < this.blockNodeNum; y++) Math.abs(o - y) >= i && l.push(y);
            var u = Math.floor(Math.random() * l.length);
            n = l[u]
        }
        a.children[5].setLocalPosition(this.levelOnePosArray[o]), a.children[6].setLocalPosition(this.levelOnePosArray[n])
    } else 1 === t && (n = Math.floor(Math.random() * this.blockNodeNum), a.children[6].setLocalPosition(this.levelOnePosArray[n]));
    var p = Math.floor(Math.random() * t);
    if (0 === p) switch (t) {
        case 1:
            a.children[4].enabled = !1, a.children[5].enabled = !1, a.children[6].enabled = !0;
            break;
        case 2:
            var c = Math.floor(2 * Math.random());
            switch (c) {
                case 0:
                    a.children[4].enabled = !1, a.children[5].enabled = !0, a.children[6].enabled = !1;
                    break;
                case 1:
                    a.children[4].enabled = !1, a.children[5].enabled = !1, a.children[6].enabled = !0
            }
            break;
        case 3:
            var c = Math.floor(3 * Math.random());
            switch (c) {
                case 0:
                    a.children[4].enabled = !0, a.children[5].enabled = !1, a.children[6].enabled = !1;
                    break;
                case 1:
                    a.children[4].enabled = !1, a.children[5].enabled = !0, a.children[6].enabled = !1;
                    break;
                case 2:
                    a.children[4].enabled = !1, a.children[5].enabled = !1, a.children[6].enabled = !0
            }
    } else if (1 === p) switch (t) {
        case 2:
            a.children[4].enabled = !1, a.children[5].enabled = !0, a.children[6].enabled = !0;
            break;
        case 3:
            var c = Math.floor(3 * Math.random());
            switch (c) {
                case 0:
                    a.children[4].enabled = !0, a.children[5].enabled = !0, a.children[6].enabled = !1;
                    break;
                case 1:
                    a.children[4].enabled = !0, a.children[5].enabled = !1, a.children[6].enabled = !0;
                    break;
                case 2:
                    a.children[4].enabled = !1, a.children[5].enabled = !0, a.children[6].enabled = !0
            }
    } else 2 === p && (a.children[4].enabled = !0, a.children[5].enabled = !0, a.children[6].enabled = !0);
    if (this.distanceCount++, this.distanceCount >= e) {
        var c = Math.floor(Math.random() * e);
        this.distanceCount = c
    } else a.children[4].enabled = !1, a.children[5].enabled = !1, a.children[6].enabled = !1;
    this.gameEntity.script.shadowSystem.setObstacleInfo(s, o, n, a.children[4].enabled, a.children[5].enabled, a.children[6].enabled)
};
var TriggerAddRoad = pc.createScript("triggerAddRoad");
TriggerAddRoad.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.scoreStep = this.gameEntity.script.gameManager.scoreStep, this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, TriggerAddRoad.prototype.swap = function(t) {
    this.gameEntity = t.gameEntity, this.scoreStep = t.scoreStep, t.entity.collision.off("triggerenter", this.onTriggerEnter, this), this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, TriggerAddRoad.prototype.update = function(t) {}, TriggerAddRoad.prototype.onTriggerEnter = function(t) {
    GameManager.gameState === GameManager.IN_GAME && "ShadowAnimal" !== t.name && (this.app.fire("trigger:onAddRoad"), this.app.fire("trigger:onAddScore", this.scoreStep), this.app.fire("trigger:addDistance", 1))
};
var BallCat = pc.createScript("ballCat");
BallCat.attributes.add("animalEntity", {
    type: "entity",
    description: "动物的实体，让镜头跟着球动。"
}), BallCat.attributes.add("stepParticle", {
    type: "entity",
    description: "动物放屁的粒子效果"
}), BallCat.attributes.add("getGemstoneParticle", {
    type: "entity",
    description: "动物捡到钻石的粒子效果"
}), BallCat.attributes.add("dodgeParticle", {
    type: "entity",
    description: "动物惊险闪避的粒子效果"
}), BallCat.attributes.add("initialVelocitySpeedX", {
    type: "number",
    "default": 3,
    description: "动物的初始水平位移速度X，请务必保持垂直速度z是水平速度x的3倍。"
}), BallCat.attributes.add("initialVelocitySpeedZ", {
    type: "number",
    "default": 9,
    description: "动物的初始垂直位移速度Z，请务必保持垂直速度z是水平速度x的3倍。"
}), BallCat.attributes.add("velocitySpeedX", {
    type: "number",
    "default": 3,
    description: "动物的水平位移速度X，请务必保持垂直速度z是水平速度x的3倍。"
}), BallCat.attributes.add("velocitySpeedZ", {
    type: "number",
    "default": 9,
    description: "动物的垂直位移速度Z，请务必保持垂直速度z是水平速度x的3倍。"
}), BallCat.attributes.add("maxVelocitySpeedX", {
    type: "number",
    "default": 17,
    description: "动物的水平位移的最大速度X，请务必保持垂直速度z是水平速度x的3倍。"
}), BallCat.attributes.add("maxVelocitySpeedZ", {
    type: "number",
    "default": 15,
    description: "动物的垂直位移的最大速度Z，请务必保持垂直速度z是水平速度x的3倍。"
}), BallCat.attributes.add("stage01MaxSpeed", {
    type: "number",
    "default": 10,
    description: "第一段加速的最大速度，当速度超过这个速度的时候，开始第二段加速"
}), BallCat.attributes.add("acceleration", {
    type: "number",
    "default": .2,
    description: "动物的基础加速度"
}), BallCat.attributes.add("startAcceleration", {
    type: "number",
    "default": 3,
    description: "前3秒动物的加速度"
}), BallCat.attributes.add("initialX", {
    type: "number",
    "default": 0,
    description: "动物的初始位置x"
}), BallCat.attributes.add("initialY", {
    type: "number",
    "default": 1,
    description: "动物的初始位置y"
}), BallCat.attributes.add("initialZ", {
    type: "number",
    "default": 0,
    description: "动物的初始位置z"
}), BallCat.attributes.add("initialRX", {
    type: "number",
    "default": 0,
    description: "动物的初始角度x"
}), BallCat.attributes.add("initialRY", {
    type: "number",
    "default": 150,
    description: "动物的初始角度y"
}), BallCat.attributes.add("initialRZ", {
    type: "number",
    "default": 0,
    description: "动物的初始角度z"
}), BallCat.prototype.initialize = function() {
    this._velocity = new pc.Vec3(this.velocitySpeedX, 0, -this.velocitySpeedZ), this._reverseSpeed = new pc.Vec3(-1, 1, 1), this.gameEntity = this.app.root.findByName("Game"), this.deathParticleCat = this.app.root.findByName("DeathParticleCat"), this.deathParticleBear = this.app.root.findByName("DeathParticleBear"), this.deathParticleLion = this.app.root.findByName("DeathParticleLion"), this.deathParticleDragon = this.app.root.findByName("DeathParticleDragon"), this.deathParticlePig = this.app.root.findByName("DeathParticlePig"), this.animalDeathParticle = this.deathParticleCat, this.isInvincible = !1, this.invincibleTimer = null, this.onTapTimer = 1, this.RY = this.initialRY, this.app.on("game:reset", this.reset, this), this.app.on("game:pause", this.ballPause, this), this.app.on("game:gameover", this.onGameover, this), this.app.on("game:onChangeSkin", this.onChangeAnimal, this), this.app.on("game:gameover", this.stopStepParticle, this), this.app.on("ui:onGameStart", this.playStepParticle, this), this.app.on("game:onTap", this.onTap, this), this.app.on("game:onRevive", this.onRevive, this), this.app.on("game:animalInvincible", this.becomeInvincibleState, this), this.app.on("game:setPlayerAnimalSpeedX", this.setPlayerAnimalSpeedX, this)
}, BallCat.prototype.swap = function(t) {
    this._velocity = t._velocity, this._reverseSpeed = t._reverseSpeed, this.RY = t.RY, this.isInvincible = t.isInvincible, this.gameEntity = t.gameEntity, this.animalDeathParticle = t.animalDeathParticle, this.deathParticleCat = t.deathParticleCat, this.deathParticleBear = t.deathParticleBear, this.deathParticleLion = t.deathParticleLion, this.deathParticleDragon = t.deathParticleDragon, this.deathParticlePig = t.deathParticlePig, t.app.off("game:onTap", this.onTap, this), this.app.on("game:onTap", this.onTap, this), t.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this), t.app.off("game:pause", this.ballPause, this), this.app.on("game:pause", this.ballPause, this), t.app.off("game:gameover", this.stopStepParticle, this), this.app.on("game:gameover", this.stopStepParticle, this), t.app.off("ui:onGameStart", this.playStepParticle, this), this.app.on("ui:onGameStart", this.playStepParticle, this), t.app.off("game:onChangeSkin", this.onChangeAnimal, this), this.app.on("game:onChangeSkin", this.onChangeAnimal, this), t.app.off("game:gameover", this.onGameover, this), this.app.on("game:gameover", this.onGameover, this), t.app.off("game:onRevive", this.onRevive, this), this.app.on("game:onRevive", this.onRevive, this), t.app.off("game:animalInvincible", this.becomeInvincibleState, this), this.app.on("game:animalInvincible", this.becomeInvincibleState, this), t.app.off("game:setPlayerAnimalSpeedX", this.setPlayerAnimalSpeedX, this), this.app.on("game:setPlayerAnimalSpeedX", this.setPlayerAnimalSpeedX, this)
}, BallCat.prototype.update = function(t) {
    if (!GameManager.GAME_PAUSE) {
        if (this.isInvincible) {
            var e = Date.now(),
                i = Math.abs(Math.sin(e / 50));
            this.entity.model.meshInstances[0].material.opacity = i, this.entity.model.meshInstances[0].material.update(), this.onTapTimer += t, Math.abs(this.entity.getPosition().clone().x) > 5 && this.onTapTimer > .5 && (this.onTapByAI(), this.onTapTimer = 0)
        }
        this.velocitySpeedX < this.stage01MaxSpeed ? (this.velocitySpeedX += this.startAcceleration * t, this.velocitySpeedZ += this.startAcceleration * t * 3, this._velocity.x > 0 ? this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ) : this._velocity.set(-this.velocitySpeedX, 0, -this.velocitySpeedZ)) : this.velocitySpeedX < this.maxVelocitySpeedX && (this.velocitySpeedX += this.acceleration * t, this.velocitySpeedZ += this.acceleration * t * 3, this._velocity.x > 0 ? this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ) : this._velocity.set(-this.velocitySpeedX, 0, -this.velocitySpeedZ)), this.entity.rigidbody.linearVelocity = this._velocity, this.app.fire("ball:onBallPosChange")
    }
}, BallCat.prototype.getIsInvincible = function() {
    return this.isInvincible
}, BallCat.prototype.becomeInvincibleState = function() {
    console.log("becomeInvincibleState"), this.isInvincible = !0, clearTimeout(this.invincibleTimer), this.invincibleTimer = setTimeout(function() {
        this.isInvincible = !1, this.entity.model.meshInstances[0].material.opacity = 1, this.entity.model.meshInstances[0].material.update()
    }.bind(this), 5e3)
}, BallCat.prototype.onRevive = function() {
    if (GameManager.GAME_PAUSE === !0) {
        var t = this.entity.getPosition().clone();
        this.gameEntity.script.shadowSystem.setRevivePosition(t), this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ), this.RY = 150, this.entity.rigidbody.teleport(this.initialX, this.initialY, t.z, this.initialRX, this.initialRY, this.initialRZ), this.isInvincible = !0, this.app.fire("game:countDown")
    }
}, BallCat.prototype.onGameover = function() {
    this.entity.enabled = !1
}, BallCat.prototype.setPlayerAnimalSpeedX = function(t) {
    this.velocitySpeedX = t, this.velocitySpeedZ = 3 * t
}, BallCat.prototype.playGetGemstoneParticle = function() {
    var t = this.entity.getPosition().clone();
    this.getGemstoneParticle.setPosition(t), this.getGemstoneParticle.particlesystem.reset(), this.getGemstoneParticle.particlesystem.play()
}, BallCat.prototype.playAmazingDodgeParticle = function() {
    var t = this.entity.getPosition().clone();
    this.dodgeParticle.setPosition(t), this.dodgeParticle.particlesystem.reset(), this.dodgeParticle.particlesystem.play()
}, BallCat.prototype.playDeathParticle = function() {
    var t = this.entity.getPosition().clone();
    this.animalDeathParticle.setPosition(t), this.animalDeathParticle.particlesystem.reset(), this.animalDeathParticle.particlesystem.play()
}, BallCat.prototype.playStepParticle = function() {
    this.stepParticle.enabled !== !0 && (this.stepParticle.enabled = !0)
}, BallCat.prototype.stopStepParticle = function() {
    this.stepParticle.enabled !== !1 && (this.stepParticle.enabled = !1)
}, BallCat.prototype.ballPause = function() {
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO, this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO
}, BallCat.prototype.reset = function() {
    this.ballPause(), this.stepParticle.enabled = !1, this.isInvincible = !1, this.stage01MaxSpeed = 10, this.velocitySpeedX = this.initialVelocitySpeedX, this.velocitySpeedZ = this.initialVelocitySpeedZ, this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ), this.RY = 150, this.entity.rigidbody.teleport(this.initialX, this.initialY, this.initialZ, this.initialRX, this.initialRY, this.initialRZ)
}, BallCat.prototype.onChangeAnimal = function() {
    GameManager.animalState === GameManager.CAT ? (this.entity.model.asset = this.gameEntity.script.gameManager.catModel, this.animalDeathParticle = this.deathParticleCat) : GameManager.animalState === GameManager.BEAR ? (this.entity.model.asset = this.gameEntity.script.gameManager.bearModel, this.animalDeathParticle = this.deathParticleBear) : GameManager.animalState === GameManager.DRAGON ? (this.entity.model.asset = this.gameEntity.script.gameManager.dragonModel, this.animalDeathParticle = this.deathParticleDragon) : GameManager.animalState === GameManager.LION ? (this.entity.model.asset = this.gameEntity.script.gameManager.lionModel, this.animalDeathParticle = this.deathParticleLion) : GameManager.animalState === GameManager.PIG && (this.entity.model.asset = this.gameEntity.script.gameManager.pigModel, this.animalDeathParticle = this.deathParticlePig), this.entity.enabled = !0
}, BallCat.prototype.onTapByAI = function() {
    210 === this.RY ? this.RY = 150 : this.RY = 210;
    var t = this.entity.getPosition().clone();
    this.entity.rigidbody.teleport(t.x, t.y, t.z, this.initialRX, this.RY, this.initialRZ), this._velocity.mul(this._reverseSpeed), this.gameEntity.script.shadowSystem.setPlayerOperationPos(t, this.velocitySpeedX)
}, BallCat.prototype.onTap = function() {
    if (!(this.isInvincible && Math.abs(this.entity.getPosition().clone().x) > 4)) {
        210 === this.RY ? this.RY = 150 : this.RY = 210;
        var t = this.entity.getPosition().clone();
        this.entity.rigidbody.teleport(t.x, t.y, t.z, this.initialRX, this.RY, this.initialRZ), this._velocity.mul(this._reverseSpeed), this.gameEntity.script.shadowSystem.setPlayerOperationPos(t, this.velocitySpeedX)
    }
};
var Camera = pc.createScript("camera");
Camera.attributes.add("animalEntity", {
    type: "entity",
    description: "动物的实体，让镜头跟着球动。"
}), Camera.attributes.add("initialX", {
    type: "number",
    "default": 0,
    description: "镜头初始位置x"
}), Camera.attributes.add("initialY", {
    type: "number",
    "default": 11,
    description: "镜头初始位置y"
}), Camera.attributes.add("initialZ", {
    type: "number",
    "default": 17,
    description: "镜头初始位置z"
}), Camera.attributes.add("initialAngleX", {
    type: "number",
    "default": -25,
    description: "镜头初始角度x"
}), Camera.attributes.add("initialAngleY", {
    type: "number",
    "default": 0,
    description: "镜头初始角度y"
}), Camera.attributes.add("initialAngleZ", {
    type: "number",
    "default": 0,
    description: "镜头初始角度z"
}), Camera.attributes.add("speed", {
    type: "number",
    "default": 2,
    description: "镜头移动速度"
}), Camera.prototype.initialize = function() {
    this.showTimePos = new pc.Vec3(this.initialX, this.initialY - 4, this.initialZ), this.initialAngle = new pc.Quat(this.initialAngleX, this.initialAngleY, this.initialAngleZ), this.cameraTargetPos = new pc.Vec3, this.deadPosDis = new pc.Vec3(0, 0, -10), this.app.on("ball:onBallPosChange", this.changePos, this), this.app.on("game:reset", this.reset, this), this.app.on("game:start", this.onGameStart, this), this.app.on("game:gameover", this.onGameover, this)
}, Camera.prototype.swap = function(t) {
    this.showTimePos = t.showTimePos, this.initialAngle = t.initialAngle, this.cameraTargetPos = t.cameraTargetPos, this.deadPosDis = t.deadPosDis, t.app.off("ball:onBallPosChange", this.changePos, this), this.app.on("ball:onBallPosChange", this.changePos, this), t.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this), t.app.off("game:start", this.onGameStart, this), this.app.on("game:start", this.onGameStart, this), t.app.off("game:gameover", this.onGameover, this), this.app.on("game:gameover", this.onGameover, this)
}, Camera.prototype.update = function(t) {
    if (GameManager.gameState === GameManager.START_MENU) {
        var i = this.animalEntity.getPosition(),
            e = this.entity.getPosition().clone();
        e.lerp(e, i.clone().add(this.showTimePos), t * this.speed), this.entity.setPosition(e), this.entity.lookAt(i.x, i.y, i.z, 0, 1, 0)
    }
    if (GameManager.gameState === GameManager.GAMEOVER_MENU) {
        var a = this.cameraTargetPos,
            e = this.entity.getPosition().clone();
        e.lerp(e, a.clone().add(this.deadPosDis), t * this.speed), this.entity.setPosition(e)
    }
}, Camera.prototype.onGameover = function() {
    this.cameraTargetPos = this.entity.getPosition().clone()
}, Camera.prototype.onGameStart = function() {
    this.entity.setPosition(this.initialX, this.initialY, this.initialZ), this.entity.setEulerAngles(-25, 0, 0)
}, Camera.prototype.reset = function() {
    this.entity.setPosition(84.12, 76.65, -152.21), this.entity.setEulerAngles(156.46, 28.93, -180)
}, Camera.prototype.changePos = function() {
    var t = this.animalEntity.getPosition();
    t.x = this.initialX, t.y += this.initialY, t.z += this.initialZ, this.entity.setPosition(t)
};
var Input = pc.createScript("input");
Input.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.app.touch ? this.app.touch.on("touchstart", this.onTouchStart, this) : this.app.mouse.on("mousedown", this.onMouseDown, this)
}, Input.prototype.swap = function(t) {
    this.gameEntity = t.gameEntity, this.app.touch ? (t.app.touch.off("touchstart", this.onTouchStart, this), this.app.touch.on("touchstart", this.onTouchStart, this)) : (t.app.mouse.off("mousedown", this.onMouseDown, this), this.app.mouse.on("mousedown", this.onMouseDown, this))
}, Input.prototype.update = function(t) {}, Input.prototype.onTouchStart = function(t) {
    if (!GameManager.GAME_PAUSE) {
        t.changedTouches[0];
        this.onTap(), t.event.preventDefault()
    }
}, Input.prototype.onMouseDown = function(t) {
    GameManager.GAME_PAUSE || (this.onTap(), t.event.preventDefault())
}, Input.prototype.onTap = function() {
    this.app.fire("game:onTap"), this.gameEntity.sound.play("Tap")
};
var TriggerDead = pc.createScript("triggerDead");
TriggerDead.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, TriggerDead.prototype.swap = function(e) {
    e.entity.collision.off("triggerenter", this.onTriggerEnter, this), this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, TriggerDead.prototype.update = function(e) {}, TriggerDead.prototype.onTriggerEnter = function(e) {
    GameManager.gameState === GameManager.IN_GAME && "ShadowAnimal" !== e.name && this.app.fire("game:uiRevive")
};
var BallTriggerFollower = pc.createScript("ballTriggerFollower");
BallTriggerFollower.attributes.add("animalEntity", {
    type: "entity",
    description: "动物的实体，让镜头跟着球动。"
}), BallTriggerFollower.attributes.add("initialX", {
    type: "number",
    "default": 0,
    description: "死亡检测块的初始位置x"
}), BallTriggerFollower.attributes.add("initialY", {
    type: "number",
    "default": -2,
    description: "死亡检测块的初始位置y"
}), BallTriggerFollower.attributes.add("initialZ", {
    type: "number",
    "default": 0,
    description: "死亡检测块的初始位置z"
}), BallTriggerFollower.prototype.initialize = function() {
    this.app.on("ball:onBallPosChange", this.followBall, this), this.app.on("game:reset", this.reset, this)
}, BallTriggerFollower.prototype.swap = function(t) {
    t.app.off("ball:onBallPosChange", this.followBall, this), this.app.on("ball:onBallPosChange", this.followBall, this), t.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this)
}, BallTriggerFollower.prototype.update = function(t) {}, BallTriggerFollower.prototype.reset = function() {
    this.entity.setPosition(this.initialX, this.initialY, this.initialZ)
}, BallTriggerFollower.prototype.followBall = function() {
    var t = this.animalEntity.getPosition();
    t.y = this.initialY, this.entity.setPosition(t)
};
var InGame = pc.createScript("inGame");
InGame.attributes.add("scoreEntity", {
    type: "entity",
    description: "分数实体"
}), InGame.attributes.add("countDownEntity", {
    type: "entity",
    description: "倒计时实体"
}), InGame.attributes.add("countDownOverlayEntity", {
    type: "entity",
    description: "倒计时遮罩"
}), InGame.attributes.add("diamondNumberEntity", {
    type: "entity",
    description: "钻石数量实体"
}), InGame.attributes.add("diamondEffectEntity", {
    type: "entity",
    description: "钻石效果实体"
}), InGame.attributes.add("scoreEffectEntity", {
    type: "entity",
    description: "分数效果实体"
}), InGame.attributes.add("scaleStep", {
    type: "number",
    "default": 80,
    description: "分数字样每一帧放大或缩小的步长"
}), InGame.attributes.add("scaleTimes", {
    type: "number",
    "default": 10,
    description: "放大或缩小的总次数（帧数）"
}), InGame.attributes.add("moveStep", {
    type: "number",
    "default": 2,
    description: "放大缩小会改变分数的位置，这个用来控制每一次移动的y值"
}), InGame.prototype.initialize = function() {
    this.scoreAdded = !1, this.becomeBigger = !0, this.count = 0, this.startCountDown = !1, this.countDownNum = 0, this.time = 3, this.isChallengeCountDown = !1, this.diamondEffectTimer = null, this.scoreEffectTimer = null, this.gameEntity = this.app.root.findByName("Game"), this.on("enable", this.onEnable, this), this.app.on("game:addScore", this.startAddScoreTween, this), this.app.on("game:addScore", this.addScoreEffect, this), this.app.on("game:countDown", this.onCountDownStart, this), this.app.on("game:costDiamond", this.onCostDiamond, this), this.app.on("game:getDiamond", this.onGetDiamond, this), this.onEnable()
}, InGame.prototype.swap = function(t) {
    this.scoreAdded = t.scoreAdded, this.becomeBigger = t.becomeBigger, this.count = t.count, this.startCountDown = t.startCountDown, this.countDownNum = t.countDownNum, this.diamondEffectTimer = t.diamondEffectTimer, this.scoreEffectTimer = t.scoreEffectTimer, t.off("enable", this.onEnable, this), this.on("enable", this.onEnable, this), t.app.off("game:addScore", this.startAddScoreTween, this), this.app.on("game:addScore", this.startAddScoreTween, this), t.app.off("game:countDown", this.onCountDownStart, this), this.app.on("game:countDown", this.onCountDownStart, this), t.app.off("game:costDiamond", this.onCostDiamond, this), this.app.on("game:costDiamond", this.onCostDiamond, this), t.app.off("game:getDiamond", this.onGetDiamond, this), this.app.on("game:getDiamond", this.onGetDiamond, this)
}, InGame.prototype.update = function(t) {
    this.addScoreTween(), this.countDownTween()
}, InGame.prototype.startAddScoreTween = function() {
    this.scoreAdded = !0
}, InGame.prototype.onCountDownStart = function(t) {
    "undefined" != typeof t && "challenge" === t && (this.isChallengeCountDown = !0), GameManager.GAME_PAUSE = !0, this.countDownEntity.enabled = !0, this.countDownOverlayEntity.enabled = !0, this.startCountDown = !0, this.countDownNum = 0, this.time = 3, this.countDownEntity.script.fontRenderer.text = this.time.toString(), this.gameEntity.sound.play("CountDown01")
}, InGame.prototype.countDownTween = function() {
    this.startCountDown && (40 === this.countDownNum && (this.countDownNum = 0, this.countDownEntity.script.fontRenderer.maxResHeight = 3720, this.time--, 0 === this.time ? (this.startCountDown = !1, this.countDownEntity.enabled = !1, this.countDownOverlayEntity.enabled = !1, this.isChallengeCountDown || this.app.fire("game:animalInvincible"), this.isChallengeCountDown = !1, GameManager.GAME_PAUSE = !1, this.gameEntity.sound.play("CountDown02")) : (this.gameEntity.sound.play("CountDown01"), this.countDownEntity.script.fontRenderer.text = this.time.toString())), this.countDownNum <= 10 && (this.countDownEntity.script.fontRenderer.maxResHeight -= 260), this.countDownNum > 10 && this.countDownNum <= 20 && (this.countDownEntity.script.fontRenderer.maxResHeight += 40), this.countDownNum++)
}, InGame.prototype.addScoreTween = function() {
    this.scoreAdded && (this.becomeBigger ? (this.scoreEntity.script.fontRenderer.maxResHeight -= this.scaleStep, this.scoreEntity.script.fontRenderer.y += this.moveStep) : (this.scoreEntity.script.fontRenderer.maxResHeight += this.scaleStep, this.scoreEntity.script.fontRenderer.y -= this.moveStep), this.count++, this.count === this.scaleTimes >> 1 && (this.becomeBigger = !1), this.count === this.scaleTimes && (this.becomeBigger = !0, this.count = 0, this.scoreAdded = !1))
}, InGame.prototype.onEnable = function() {
    var t = window.navigator.userAgent,
        e = t.indexOf("Android") > -1;
    e && (GameManager.isHighPerformence ? this.app.graphicsDevice.maxPixelRatio = 1 : this.app.graphicsDevice.maxPixelRatio = window.devicePixelRatio), this.countDownEntity.script.fontRenderer.text = this.time.toString(), this.countDownEntity.enabled = !1, this.countDownOverlayEntity.enabled = !1, this.diamondEffectEntity.enabled = !1, this.scoreEffectEntity.enabled = !1, this.setDiamond()
}, InGame.prototype.onCostDiamond = function() {
    var t = new pc.Color(220 / 255, 20 / 255, 60 / 255);
    this.diamondEffectEntity.script.fontRenderer.text = "-" + Revive.reviveDiamondCost, this.diamondEffectEntity.script.fontRenderer.tint = t, this.diamondEffectEntity.enabled = !0, clearTimeout(this.diamondEffectTimer), this.diamondEffectTimer = setTimeout(function() {
        this.diamondEffectEntity.enabled = !1
    }.bind(this), 1e3), this.setDiamond()
}, InGame.prototype.onGetDiamond = function() {
    this.diamondEffectEntity.script.fontRenderer.text = "+1", this.diamondEffectEntity.script.fontRenderer.tint = new pc.Color(1, 1, 1), this.diamondEffectEntity.enabled = !0, clearTimeout(this.diamondEffectTimer), this.diamondEffectTimer = setTimeout(function() {
        this.diamondEffectEntity.enabled = !1
    }.bind(this), 1e3), this.setDiamond()
}, InGame.prototype.addScoreEffect = function(t) {
    2 > t || (this.scoreEffectEntity.script.fontRenderer.text = "+" + t, this.scoreEffectEntity.enabled = !0, clearTimeout(this.scoreEffectTimer), this.scoreEffectTimer = setTimeout(function() {
        this.scoreEffectEntity.enabled = !1
    }.bind(this), 500))
}, InGame.prototype.setDiamond = function() {
    this.diamondNumberEntity.script.fontRenderer.text = WeChat.diamond.toString()
};
var GameoverMenu = pc.createScript("gameoverMenu");
GameoverMenu.attributes.add("scoreEntity", {
    type: "entity",
    description: "分数实体"
}), GameoverMenu.attributes.add("bestScoreEntity", {
    type: "entity",
    description: "最高分实体"
}), GameoverMenu.attributes.add("challengeResultEntity", {
    type: "entity",
    description: "挑战结果实体"
}), GameoverMenu.attributes.add("restartEntity", {
    type: "entity",
    description: "重新开始实体"
}), GameoverMenu.attributes.add("reChallengeEntity", {
    type: "entity",
    description: "重新挑战实体"
}), GameoverMenu.attributes.add("homeEntity", {
    type: "entity",
    description: "房子实体"
}), GameoverMenu.attributes.add("gameRuleEntity", {
    type: "entity",
    description: "游戏规则实体"
}), GameoverMenu.attributes.add("moreGameEntity", {
    type: "entity",
    description: "更多游戏实体"
}), GameoverMenu.attributes.add("rankingEntity", {
    type: "entity",
    description: "排行榜实体"
}), GameoverMenu.attributes.add("settingEntity", {
    type: "entity",
    description: "设置实体"
}), GameoverMenu.attributes.add("diamondNumberEntity", {
    type: "entity",
    description: "钻石数量实体"
}), GameoverMenu.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.challengeSuccessPng = this.app.assets.findByTag("ChallengeSuccessPng")[0], this.challengeFailedPng = this.app.assets.findByTag("ChallengeFailedPng")[0], this.localScore = 0, this.localBestScore = 0, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.app.on("game:setBestScore", this.setBestScore, this), this.onEnable()
}, GameoverMenu.prototype.update = function(t) {}, GameoverMenu.prototype.swap = function(t) {
    this.gameEntity = t.gameEntity, this.localScore = t.localScore, this.localBestScore = t.localBestScore, t.off("enable", this.onEnable, this), this.on("enable", this.onEnable, this), t.off("disable", this.onDisable, this), this.on("disable", this.onDisable, this), t.app.off("game:setBestScore", this.setBestScore, this), this.app.on("game:setBestScore", this.setBestScore, this)
}, GameoverMenu.prototype.setDiamond = function() {
    this.diamondNumberEntity.script.fontRenderer.text = WeChat.diamond.toString()
}, GameoverMenu.prototype.onEnable = function() {
    var t = this;
    setTimeout(function() {
        t.app.touch ? (t.app.touch.on("touchstart", t.onTouchStart, t), t.app.touch.on("touchend", t.onTouchEnd, t)) : (t.app.mouse.on("mousedown", t.onMouseDown, t), t.app.mouse.on("mouseup", t, onMouseUp, t))
    }, 500);
    var e = window.navigator.userAgent,
        i = e.indexOf("Android") > -1;
    if (i && (this.app.graphicsDevice.maxPixelRatio = window.devicePixelRatio), this.localScore = this.gameEntity.script.gameManager.getLocalScore(), this.scoreEntity.script.fontRenderer.text = this.localScore.toString(), ShadowSystem.isOnShadowChallenge) {
        this.reChallengeEntity.enabled = !0, this.homeEntity.enabled = !0, this.challengeResultEntity.enabled = !0, this.restartEntity.enabled = !1;
        var s = this.gameEntity.script.shadowSystem.getShadowPlayerScore();
        this.challengeSuccessOrNot(s, this.localScore)
    } else this.reChallengeEntity.enabled = !1, this.homeEntity.enabled = !1, this.challengeResultEntity.enabled = !1, this.restartEntity.enabled = !0;
    var n = this.gameEntity.script.gameManager.getDistance();
    this.app.fire("shadow:setPlayerDistance", n), this.app.fire("shadow:setPlayerScore", this.localScore), this.app.fire("shadow:setPlayerInfo"), this.app.fire("game:compareBestScore", this.localScore), this.app.fire("game:postCommitDiamond"), this.setDiamond()
}, GameoverMenu.prototype.challengeSuccessOrNot = function(t, e) {
    if (ShadowSystem.isChallengeSuccess = e > t, ShadowSystem.isChallengeSuccess) {
        this.challengeResultEntity.script.sprite.texture = this.challengeSuccessPng.resource;
        var i = this.gameEntity.script.shadowSystem.getShadowPlayerInfo().openid;
        WeChat.openId !== i && this.app.fire("message:challengeSuccess")
    } else this.challengeResultEntity.script.sprite.texture = this.challengeFailedPng.resource
}, GameoverMenu.prototype.onDisable = function() {
    this.app.touch ? (this.app.touch.off("touchstart", this.onTouchStart, this), this.app.touch.off("touchend", this.onTouchEnd, this)) : (this.app.mouse.off("mousedown", this.onMouseDown, this), this.app.mouse.off("mouseup", this.onMouseUp, this)), ShadowSystem.isChallengeSuccess = !1, this.app.fire("wechat:resetConfig")
}, GameoverMenu.prototype.setBestScore = function(t) {
    this.bestScoreEntity.script.fontRenderer.text = t.toString()
}, GameoverMenu.prototype.playSound = function() {
    var t = Math.ceil(2 * Math.random());
    this.gameEntity.sound.play("Turn0" + t)
}, GameoverMenu.prototype.tapStart = function(t, e) {
    var i = this.app.graphicsDevice.canvas,
        s = parseInt(i.clientWidth, 10),
        n = parseInt(i.clientHeight, 10);
    t > .351 * s && .65 * s > t && e > .554 * n && .724 * n > e && this.restartEntity.enabled === !0 && (this.restartEntity.script.sprite.maxResHeight += 30), t > .189 * s && .456 * s > t && e > .554 * n && .724 * n > e && this.reChallengeEntity.enabled === !0 && (this.reChallengeEntity.script.sprite.maxResHeight += 30), t > .53 * s && .794 * s > t && e > .554 * n && .724 * n > e ? this.homeEntity.enabled === !0 && (this.homeEntity.script.sprite.maxResHeight += 30) : t > .543 * s && .678 * s > t && e > .823 * n && .91 * n > e ? this.moreGameEntity.script.sprite.maxResHeight += 20 : t > .326 * s && .461 * s > t && e > .823 * n && .91 * n > e ? this.rankingEntity.script.sprite.maxResHeight += 20 : t > .111 * s && .248 * s > t && e > .823 * n && .91 * n > e ? this.gameRuleEntity.script.sprite.maxResHeight += 20 : t > .756 * s && .888 * s > t && e > .823 * n && .91 * n > e && (this.settingEntity.script.sprite.maxResHeight += 20)
}, GameoverMenu.prototype.tapEnd = function(t, e) {
    var i = this,
        s = this.app.graphicsDevice.canvas,
        n = parseInt(s.clientWidth, 10),
        a = parseInt(s.clientHeight, 10);
    t > .351 * n && .65 * n > t && e > .554 * a && .724 * a > e && this.restartEntity.enabled === !0 && (this.restartEntity.script.sprite.maxResHeight -= 30, this.playSound(), setTimeout(function() {
        i.app.fire("game:reset")
    }, 100)), t > .189 * n && .456 * n > t && e > .554 * a && .724 * a > e && this.reChallengeEntity.enabled === !0 && (this.reChallengeEntity.script.sprite.maxResHeight -= 30, this.playSound(), ShadowSystem.isOnShadowChallenge = !0, setTimeout(function() {
        i.app.fire("game:reset", "challenge")
    }, 100)), t > .53 * n && .794 * n > t && e > .554 * a && .724 * a > e ? this.homeEntity.enabled === !0 && (this.homeEntity.script.sprite.maxResHeight -= 30, this.playSound(), ShadowSystem.isOnShadowChallenge = !1, setTimeout(function() {
        i.app.fire("game:reset")
    }, 100)) : t > .756 * n && .888 * n > t && e > .823 * a && .91 * a > e ? (this.playSound(), this.settingEntity.script.sprite.maxResHeight -= 20, this.app.fire("setting:showing")) : t > .111 * n && .248 * n > t && e > .823 * a && .91 * a > e ? (this.gameRuleEntity.script.sprite.maxResHeight -= 20, this.playSound(), this.app.fire("message:show")) : t > .326 * n && .461 * n > t && e > .823 * a && .91 * a > e ? (this.rankingEntity.script.sprite.maxResHeight -= 20, this.playSound(), i.app.fire("ranking:showRanking")) : t > .543 * n && .678 * n > t && e > .823 * a && .91 * a > e && (this.moreGameEntity.script.sprite.maxResHeight -= 20, this.playSound(), setTimeout(function() {
        window.location.href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI2OTQzNzM3NQ==#wechat_redirect"
    }, 100))
}, GameoverMenu.prototype.onMouseDown = function(t) {
    this.tapStart(t.x, t.y)
}, GameoverMenu.prototype.onMouseUp = function(t) {
    this.tapEnd(t.x, t.y)
}, GameoverMenu.prototype.onTouchStart = function(t) {
    var e = t.changedTouches[0];
    this.tapStart(e.x, e.y), t.event.preventDefault()
}, GameoverMenu.prototype.onTouchEnd = function(t) {
    var e = t.changedTouches[0];
    this.tapEnd(e.x, e.y), t.event.preventDefault()
};
var BlockTrigger = pc.createScript("blockTrigger");
BlockTrigger.attributes.add("animalEntity", {
    type: "entity",
    description: "动物实体"
}), BlockTrigger.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onCollisionStart, this)
}, BlockTrigger.prototype.swap = function(t) {
    t.entity.collision.off("triggerenter", this.onCollisionStart, this), this.entity.collision.on("triggerenter", this.onCollisionStart, this)
}, BlockTrigger.prototype.update = function(t) {}, BlockTrigger.prototype.onCollisionStart = function(t) {
    GameManager.GAME_PAUSE || this.animalEntity.script.ballCat.getIsInvincible() || GameManager.gameState === GameManager.IN_GAME && "ShadowAnimal" !== t.name && (this.app.fire("game:uiRevive"), this.animalEntity.script.ballCat.playDeathParticle())
};
var BlockAmazingTrigger = pc.createScript("blockAmazingTrigger");
BlockAmazingTrigger.attributes.add("animalEntity", {
    type: "entity",
    description: "动物实体"
}), BlockAmazingTrigger.prototype.initialize = function() {
    this.game = this.app.root.findByName("Game"), this.scoreAmazing = this.game.script.gameManager.scoreAmazing, this.entity.collision.on("triggerleave", this.onTriggerLeave, this)
}, BlockAmazingTrigger.prototype.swap = function(i) {
    this.game = i.game, this.scoreAmazing = i.scoreAmazing, i.entity.collision.off("triggerleave", this.onTriggerLeave, this), this.entity.collision.on("triggerleave", this.onTriggerLeave, this)
}, BlockAmazingTrigger.prototype.update = function(i) {}, BlockAmazingTrigger.prototype.onTriggerLeave = function(i) {
    GameManager.gameState === GameManager.IN_GAME && "ShadowAnimal" !== i.name && (this.app.fire("trigger:onAddScore", this.scoreAmazing), this.animalEntity.script.ballCat.playAmazingDodgeParticle(), this.game.sound.play("Orz"))
};
var GetGemstoneTrigger = pc.createScript("getGemstoneTrigger");
GetGemstoneTrigger.attributes.add("animalEntity", {
    type: "entity",
    description: "动物实体"
}), GetGemstoneTrigger.prototype.initialize = function() {
    this.game = this.app.root.findByName("Game"), this.scoreGetGemstone = this.game.script.gameManager.scoreGetGemstone, this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, GetGemstoneTrigger.prototype.swap = function(e) {
    this.game = e.game, this.scoreGetGemstone = e.scoreGetGemstone
}, GetGemstoneTrigger.prototype.update = function(e) {}, GetGemstoneTrigger.prototype.onTriggerEnter = function(e) {
    var t = this;
    GameManager.gameState === GameManager.IN_GAME && "ShadowAnimal" !== e.name && (this.app.fire("trigger:onAddScore", this.scoreGetGemstone), WeChat.diamond = parseInt(WeChat.diamond, 10) + 1, this.app.fire("game:getDiamond"), this.animalEntity.script.ballCat.playGetGemstoneParticle(), this.game.sound.play("GetDiamond"), this.entity.model.meshInstances[0].visible = !1, setTimeout(function() {
        t.entity.model.meshInstances[0].visible = !0
    }, 2e3))
};
var ChangeSkin = pc.createScript("changeSkin");
ChangeSkin.attributes.add("backgroundEntity", {
    type: "entity",
    description: "背景实体"
}), ChangeSkin.prototype.initialize = function() {
    this.backgroundImageSrcJson = null, this.app.on("game:onChangeSkin", this.onChangeBackground, this), this.initBackground(), this.onChangeBackground()
}, ChangeSkin.prototype.swap = function(n) {
    this.backgroundImageSrcJson = n.backgroundImageSrcJson, n.app.off("game:onChangeSkin", this.onChangeBackground, this), this.app.on("game:onChangeSkin", this.onChangeBackground, this)
}, ChangeSkin.prototype.update = function(n) {}, ChangeSkin.prototype.onChangeBackground = function() {
    this.backgroundEntity.model.meshInstances[0].material = this.backgroundImageSrcJson[GameManager.skinState].resource
}, ChangeSkin.prototype.initBackground = function() {
    var n = this.app.assets.findByTag("BlueBgMaterial")[0],
        a = this.app.assets.findByTag("GreenBgMaterial")[0],
        t = this.app.assets.findByTag("PinkBgMaterial")[0],
        i = this.app.assets.findByTag("PurpleBgMaterial")[0],
        e = this.app.assets.findByTag("YellowBgMaterial")[0];
    this.backgroundImageSrcJson = {
        PINK: t,
        PURPLE: i,
        GREEN: a,
        BLUE: n,
        YELLOW: e
    }
};
var WeChat = pc.createScript("weChat");
WeChat.openId = "oGbVCtzgR1JSDfCKP5wxqjLKF_NE", WeChat.GAME_DOMAIN = "http://api.24haowan.com/", WeChat.GAME_ID = 3, WeChat.diamond = 0, WeChat.TIMEOUT = 3e3, WeChat.firstComeToday = !1, WeChat.appId = "wxef721b05e2002815", WeChat.userInfoData = null, 
WeChat.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.localScore = 0, this.localBestScore = 0, this.wxConfigData = null, this.shareTitle = this.setShareTitle(), this.shareDesc = this.setShareDesc(), this.shareLink = this.setShareLink(), this.shareImgUrl = "http://24haowan-cdn.shanyougame.com/PlayCanvas/JustRolling/assets/images/share.png", this.loadScript("http://res.wx.qq.com/open/js/jweixin-1.1.0.js", this.wxConfigPara.bind(this)), this.getUserOpenId(), this.getUserInfoData(), this.app.on("game:compareBestScore", this.compareBestScore, this), this.app.on("game:postCommitDiamond", this.postCommitDiamond, this), this.app.on("game:postScore", this.postScore, this), this.app.on("wechat:resetConfig", this.configWechatShareData, this)
}, WeChat.prototype.update = function(e) {}, WeChat.prototype.swap = function(e) {
    this.gameEntity = e.gameEntity, this.localScore = e.localScore, this.localBestScore = e.localBestScore, e.app.off("game:compareBestScore", this.compareBestScore, this), this.app.on("game:compareBestScore", this.compareBestScore, this), e.app.off("game:postCommitDiamond", this.postCommitDiamond, this), this.app.on("game:postCommitDiamond", this.postCommitDiamond, this), e.app.off("game:postScore", this.postScore, this), this.app.on("game:postScore", this.postScore, this)
}, WeChat.prototype.wxConfigPara = function() {
    var e = this;
    $.ajax({
        url: WeChat.GAME_DOMAIN + "get_jssdk_config?url=" + location.href.split("#")[0],
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(t) {
            t = JSON.parse(t), 0 === t.code && (weChatData = t.msg, wx.config({
                debug: !1,
                appId: WeChat.appId,
                timestamp: weChatData.timestamp,
                nonceStr: weChatData.noncestr,
                signature: weChatData.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
            }), wx.ready(function() {
                console.log("ready"), e.configWechatShareData()
            }))
        },
        error: WeChat.errorCallbackFunction
    })
}, WeChat.prototype.configWechatShareData = function() {
    this.shareTitle = this.setShareTitle(), this.shareDesc = this.setShareDesc(), this.shareLink = this.setShareLink(), this.configShareMessage()
}, WeChat.prototype.setShareTitle = function() {
    var e = "";
    return e = GameManager.gameState === GameManager.GAMEOVER_MENU && ShadowSystem.isChallengeSuccess ? "萌宠快跑，挑战成功。" : "萌宠快跑"
}, WeChat.prototype.setShareDesc = function() {
    var e = "";
    if (GameManager.gameState === GameManager.GAMEOVER_MENU && ShadowSystem.isChallengeSuccess) {
        var t = this.gameEntity.script.shadowSystem.getShadowPlayerInfo().nickname;
        e = "我成功挑战了" + t + "，获得了" + this.localScore + "分。就问你：还有谁？"
    } else e = "看我这么萌萌哒，还不快来领养我，和我一起游戏吧！";
    return e
}, WeChat.prototype.setShareLink = function() {
    var e = "";
    return e = GameManager.gameState === GameManager.GAMEOVER_MENU && ShadowSystem.commitPlayerShadowSuccess ? "http://24haowan-cdn.shanyougame.com/PlayCanvas/SharePage/html/sharePage.html?friend=" + WeChat.openId + "&game_id=" + WeChat.GAME_ID + "&score=" + this.localScore + "&nickname=" + WeChat.userInfoData.nickname + "&headimgurl=" + WeChat.userInfoData.headimgurl + "&shadow_id=" + ShadowSystem.gameoverPlayerShadowId : WeChat.GAME_DOMAIN + "games/JustRolling/" + WeChat.GAME_ID + "?friend=" + WeChat.openId
}, WeChat.prototype.configShareMessage = function() {
    var e = this;
    wx.onMenuShareTimeline({
        title: e.shareTitle,
        link: e.shareLink,
        imgUrl: e.shareImgUrl,
        success: function() {
            Revive.isRevivePage && (e.app.fire("game:onReviveShareSuccess"), e.gameEntity.script.hintText.hint("分享成功！"))
        },
        cancel: function() {
            e.gameEntity.script.hintText.hint("分享失败！")
        }
    }), wx.onMenuShareAppMessage({
        title: e.shareTitle,
        desc: e.shareDesc,
        link: e.shareLink,
        imgUrl: e.shareImgUrl,
        type: "",
        dataUrl: "",
        success: function() {
            Revive.isRevivePage && (e.app.fire("game:onReviveShareSuccess"), e.gameEntity.script.hintText.hint("分享成功！"))
        },
        cancel: function() {
            e.gameEntity.script.hintText.hint("分享失败！")
        }
    })
}, WeChat.prototype.loadScript = function(e, t) {
    var a = document.createElement("script");
    a.type = "text/javascript", a.readyState ? a.onreadystatechange = function() {
        "loaded" != a.readyState && "complete" != a.readyState || (a.onreadystatechange = null, t())
    } : a.onload = function() {
        t()
    }, a.src = e, document.body.appendChild(a)
}, WeChat.prototype.getUserOpenId = function() {
    var e = this,
        t = location.search;
    "" !== t && (t = t.slice(1), t.split("&").forEach(function(t, a, o) {
        t.indexOf("openid=") > -1 && "undefined" !== t.slice(7) && (WeChat.openId = t.slice(7)), t.indexOf("info_id=") > -1 && "undefined" !== t.slice(8) && (ShadowSystem.challengeShadowId = t.slice(8), ShadowSystem.isOnShadowChallenge = !0, setTimeout(function() {
            e.app.fire("shadow:enableShadowComponent"), e.app.fire("shadow:getBeingChallengedShadowObj")
        }, 100))
    }))
}, WeChat.prototype.getUserInfoData = function() {
    var e = this;
    console.log(WeChat.openId), "" !== WeChat.openId && $.ajax({
        url: WeChat.GAME_DOMAIN + "get_user_info?openid=" + WeChat.openId,
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(t) {
            t = JSON.parse(t), 0 === t.code && (WeChat.userInfoData = t.msg[0], "undefined" == typeof WeChat.userInfoData.diamond || WeChat.userInfoData.diamond < 0 ? WeChat.diamond = 0 : WeChat.diamond = WeChat.userInfoData.diamond, console.log(WeChat.userInfoData), e.getBestScore())
        },
        error: WeChat.errorCallbackFunction
    })
}, WeChat.prototype.postScore = function() {
    var e = this,
        t = (new Date).Format("yyyy-MM-dd hh:mm:ss"),
        a = [t, WeChat.openId, e.localScore, WeChat.GAME_ID],
        o = new Hashes.SHA1,
        s = o.hex(a.join(""));
    console.log(s), $.ajax({
        url: WeChat.GAME_DOMAIN + "commit_score?signature=" + s,
        type: "POST",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        data: {
            best: e.localBestScore,
            create_time: t,
            game_id: WeChat.GAME_ID,
            openid: WeChat.openId,
            rank_type: 1,
            score: e.localScore,
            score_revive: Revive.reviveTimes,
            score_detail: {
                t1: 1,
                t2: 2
            },
            socre_log: [],
            userimg: WeChat.userInfoData.headimgurl,
            username: WeChat.userInfoData.nickname,
            info_id: ShadowSystem.playerShadowId
        },
        success: function(e) {
            e = JSON.parse(e), 0 === e.code ? console.log("提交成绩成功") : (console.log("提交成绩失败, code = " + e.code), console.log("msg: " + e.msg))
        },
        error: WeChat.errorCallbackFunction
    })
}, WeChat.prototype.postCommitDiamond = function() {
    var e = this,
        t = [WeChat.openId, WeChat.diamond],
        a = new Hashes.SHA1,
        o = a.hex(t.join(""));
    now = (new Date).Format("yyyy-MM-dd hh:mm:ss"), $.ajax({
        url: WeChat.GAME_DOMAIN + "commit_diamond?signature=" + o,
        type: "POST",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        data: {
            openid: WeChat.openId,
            diamond: WeChat.diamond,
            game_id: WeChat.GAME_ID,
            create_time: now,
            type: "revive"
        },
        success: function(t) {
            t = JSON.parse(t), 0 === t.code ? (console.log("提交钻石成功"), e.app.fire("game:postCommitDiamondSuccess")) : (console.error(t.msg + ":" + t.code), e.gameEntity.script.hintText.hint(t.msg + ":" + t.code))
        },
        error: WeChat.errorCallbackFunction
    })
}, WeChat.prototype.compareBestScore = function(e) {
    this.localScore = e;
    var t = !1;
    this.localBestScore < this.localScore && (this.localBestScore = this.localScore, t = !0), this.app.fire("game:setBestScore", this.localBestScore), this.app.fire("shadow:postCustomShadowObj", t)
}, WeChat.prototype.getBestScore = function() {
    var e = this;
    $.ajax({
        url: WeChat.GAME_DOMAIN + "get_user_score?game_id=" + WeChat.GAME_ID + "&openid=" + WeChat.openId,
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(t) {
            if (t = JSON.parse(t), 0 === t.code)
                if ("undefined" == typeof t.msg[0]) e.localBestScore = 0, WeChat.firstComeToday = !0;
                else if ("undefined" != typeof t.msg[0].info_id && (ShadowSystem.playerShadowId = t.msg[0].info_id), e.localBestScore = parseInt(t.msg[0].best, 10), "undefined" == typeof t.msg[0].last_login_time) WeChat.firstComeToday = !0;
            else {
                var a = (new Date).Format("yyyy-MM-dd hh:mm:ss").toString().slice(0, 10),
                    o = t.msg[0].last_login_time.slice(0, 10);
                o == a ? WeChat.firstComeToday = !1 : WeChat.firstComeToday = !0
            }
        },
        error: WeChat.errorCallbackFunction
    })
};
! function() {
    function n(n) {
        var t, e, r, o = "",
            h = -1;
        if (n && n.length)
            for (r = n.length;
                (h += 1) < r;) t = n.charCodeAt(h), e = r > h + 1 ? n.charCodeAt(h + 1) : 0, t >= 55296 && 56319 >= t && e >= 56320 && 57343 >= e && (t = 65536 + ((1023 & t) << 10) + (1023 & e), h += 1), 127 >= t ? o += String.fromCharCode(t) : 2047 >= t ? o += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? o += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (o += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
        return o
    }

    function t(n) {
        var t, e, r, o, h, u, f = [];
        if (t = e = r = o = h = 0, n && n.length)
            for (u = n.length, n += ""; u > t;) r = n.charCodeAt(t), e += 1, 128 > r ? (f[e] = String.fromCharCode(r), t += 1) : r > 191 && 224 > r ? (o = n.charCodeAt(t + 1), f[e] = String.fromCharCode((31 & r) << 6 | 63 & o), t += 2) : (o = n.charCodeAt(t + 1), h = n.charCodeAt(t + 2), f[e] = String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & h), t += 3);
        return f.join("")
    }

    function e(n, t) {
        var e = (65535 & n) + (65535 & t),
            r = (n >> 16) + (t >> 16) + (e >> 16);
        return r << 16 | 65535 & e
    }

    function r(n, t) {
        return n << t | n >>> 32 - t
    }

    function o(n, t) {
        for (var e, r = t ? "0123456789ABCDEF" : "0123456789abcdef", o = "", h = 0, u = n.length; u > h; h += 1) e = n.charCodeAt(h), o += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
        return o
    }

    function h(n) {
        var t, e = 32 * n.length,
            r = "";
        for (t = 0; e > t; t += 8) r += String.fromCharCode(n[t >> 5] >>> 24 - t % 32 & 255);
        return r
    }

    function u(n) {
        var t, e = 32 * n.length,
            r = "";
        for (t = 0; e > t; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r
    }

    function f(n) {
        var t, e = 8 * n.length,
            r = Array(n.length >> 2),
            o = r.length;
        for (t = 0; o > t; t += 1) r[t] = 0;
        for (t = 0; e > t; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
        return r
    }

    function i(n) {
        var t, e = 8 * n.length,
            r = Array(n.length >> 2),
            o = r.length;
        for (t = 0; o > t; t += 1) r[t] = 0;
        for (t = 0; e > t; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << 24 - t % 32;
        return r
    }

    function a(n, t) {
        var e, r, o, h, u, f, i, a, c = t.length,
            D = Array();
        for (f = Array(Math.ceil(n.length / 2)), h = f.length, e = 0; h > e; e += 1) f[e] = n.charCodeAt(2 * e) << 8 | n.charCodeAt(2 * e + 1);
        for (; f.length > 0;) {
            for (u = Array(), o = 0, e = 0; e < f.length; e += 1) o = (o << 16) + f[e], r = Math.floor(o / c), o -= r * c, (u.length > 0 || r > 0) && (u[u.length] = r);
            D[D.length] = o, f = u
        }
        for (i = "", e = D.length - 1; e >= 0; e--) i += t.charAt(D[e]);
        for (a = Math.ceil(8 * n.length / (Math.log(t.length) / Math.log(2))), e = i.length; a > e; e += 1) i = t[0] + i;
        return i
    }

    function c(n, t) {
        var e, r, o, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            u = "",
            f = n.length;
        for (t = t || "=", e = 0; f > e; e += 3)
            for (o = n.charCodeAt(e) << 16 | (f > e + 1 ? n.charCodeAt(e + 1) << 8 : 0) | (f > e + 2 ? n.charCodeAt(e + 2) : 0), r = 0; 4 > r; r += 1) u += 8 * e + 6 * r > 8 * n.length ? t : h.charAt(o >>> 6 * (3 - r) & 63);
        return u
    }
    var D;
    D = {
            VERSION: "1.0.5",
            Base64: function() {
                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    r = "=",
                    o = !0;
                this.encode = function(t) {
                    var h, u, f, i = "",
                        a = t.length;
                    for (r = r || "=", t = o ? n(t) : t, h = 0; a > h; h += 3)
                        for (f = t.charCodeAt(h) << 16 | (a > h + 1 ? t.charCodeAt(h + 1) << 8 : 0) | (a > h + 2 ? t.charCodeAt(h + 2) : 0), u = 0; 4 > u; u += 1) i += 8 * h + 6 * u > 8 * a ? r : e.charAt(f >>> 6 * (3 - u) & 63);
                    return i
                }, this.decode = function(n) {
                    var h, u, f, i, a, c, D, B, C, l, A = "",
                        s = [];
                    if (!n) return n;
                    h = l = 0, n = n.replace(new RegExp("\\" + r, "gi"), "");
                    do a = e.indexOf(n.charAt(h += 1)), c = e.indexOf(n.charAt(h += 1)), D = e.indexOf(n.charAt(h += 1)), B = e.indexOf(n.charAt(h += 1)), C = a << 18 | c << 12 | D << 6 | B, u = C >> 16 & 255, f = C >> 8 & 255, i = 255 & C, l += 1, 64 === D ? s[l] = String.fromCharCode(u) : 64 === B ? s[l] = String.fromCharCode(u, f) : s[l] = String.fromCharCode(u, f, i); while (h < n.length);
                    return A = s.join(""), A = o ? t(A) : A
                }, this.setPad = function(n) {
                    return r = n || r, this
                }, this.setTab = function(n) {
                    return e = n || e, this
                }, this.setUTF8 = function(n) {
                    return "boolean" == typeof n && (o = n), this
                }
            },
            CRC32: function(t) {
                var e, r, o, h = 0,
                    u = 0,
                    f = 0;
                for (t = n(t), e = ["00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ", "79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ", "84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ", "63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ", "A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ", "51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ", "B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ", "06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ", "E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ", "12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ", "D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ", "33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ", "CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ", "9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ", "7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ", "806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ", "60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ", "AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ", "5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ", "B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ", "05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ", "F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ", "11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ", "D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ", "30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ", "C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"].join(""), h = -1 ^ h, r = 0, o = t.length; o > r; r += 1) f = 255 & (h ^ t.charCodeAt(r)), u = "0x" + e.substr(9 * f, 8), h = h >>> 8 ^ u;
                return (-1 ^ h) >>> 0
            },
            MD5: function(t) {
                function h(t) {
                    return t = E ? n(t) : t, u(D(f(t), 8 * t.length))
                }

                function i(t, e) {
                    var r, o, h, i, a;
                    for (t = E ? n(t) : t, e = E ? n(e) : e, r = f(t), r.length > 16 && (r = D(r, 8 * t.length)), o = Array(16), h = Array(16), a = 0; 16 > a; a += 1) o[a] = 909522486 ^ r[a], h[a] = 1549556828 ^ r[a];
                    return i = D(o.concat(f(e)), 512 + 8 * e.length), u(D(h.concat(i), 640))
                }

                function D(n, t) {
                    var r, o, h, u, f, i = 1732584193,
                        a = -271733879,
                        c = -1732584194,
                        D = 271733878;
                    for (n[t >> 5] |= 128 << t % 32, n[(t + 64 >>> 9 << 4) + 14] = t, r = 0; r < n.length; r += 16) o = i, h = a, u = c, f = D, i = C(i, a, c, D, n[r + 0], 7, -680876936), D = C(D, i, a, c, n[r + 1], 12, -389564586), c = C(c, D, i, a, n[r + 2], 17, 606105819), a = C(a, c, D, i, n[r + 3], 22, -1044525330), i = C(i, a, c, D, n[r + 4], 7, -176418897), D = C(D, i, a, c, n[r + 5], 12, 1200080426), c = C(c, D, i, a, n[r + 6], 17, -1473231341), a = C(a, c, D, i, n[r + 7], 22, -45705983), i = C(i, a, c, D, n[r + 8], 7, 1770035416), D = C(D, i, a, c, n[r + 9], 12, -1958414417), c = C(c, D, i, a, n[r + 10], 17, -42063), a = C(a, c, D, i, n[r + 11], 22, -1990404162), i = C(i, a, c, D, n[r + 12], 7, 1804603682), D = C(D, i, a, c, n[r + 13], 12, -40341101), c = C(c, D, i, a, n[r + 14], 17, -1502002290), a = C(a, c, D, i, n[r + 15], 22, 1236535329), i = l(i, a, c, D, n[r + 1], 5, -165796510), D = l(D, i, a, c, n[r + 6], 9, -1069501632), c = l(c, D, i, a, n[r + 11], 14, 643717713), a = l(a, c, D, i, n[r + 0], 20, -373897302), i = l(i, a, c, D, n[r + 5], 5, -701558691), D = l(D, i, a, c, n[r + 10], 9, 38016083), c = l(c, D, i, a, n[r + 15], 14, -660478335), a = l(a, c, D, i, n[r + 4], 20, -405537848), i = l(i, a, c, D, n[r + 9], 5, 568446438), D = l(D, i, a, c, n[r + 14], 9, -1019803690), c = l(c, D, i, a, n[r + 3], 14, -187363961), a = l(a, c, D, i, n[r + 8], 20, 1163531501), i = l(i, a, c, D, n[r + 13], 5, -1444681467), D = l(D, i, a, c, n[r + 2], 9, -51403784), c = l(c, D, i, a, n[r + 7], 14, 1735328473), a = l(a, c, D, i, n[r + 12], 20, -1926607734), i = A(i, a, c, D, n[r + 5], 4, -378558), D = A(D, i, a, c, n[r + 8], 11, -2022574463), c = A(c, D, i, a, n[r + 11], 16, 1839030562), a = A(a, c, D, i, n[r + 14], 23, -35309556), i = A(i, a, c, D, n[r + 1], 4, -1530992060), D = A(D, i, a, c, n[r + 4], 11, 1272893353), c = A(c, D, i, a, n[r + 7], 16, -155497632), a = A(a, c, D, i, n[r + 10], 23, -1094730640), i = A(i, a, c, D, n[r + 13], 4, 681279174), D = A(D, i, a, c, n[r + 0], 11, -358537222), c = A(c, D, i, a, n[r + 3], 16, -722521979), a = A(a, c, D, i, n[r + 6], 23, 76029189), i = A(i, a, c, D, n[r + 9], 4, -640364487), D = A(D, i, a, c, n[r + 12], 11, -421815835), c = A(c, D, i, a, n[r + 15], 16, 530742520), a = A(a, c, D, i, n[r + 2], 23, -995338651), i = s(i, a, c, D, n[r + 0], 6, -198630844), D = s(D, i, a, c, n[r + 7], 10, 1126891415), c = s(c, D, i, a, n[r + 14], 15, -1416354905), a = s(a, c, D, i, n[r + 5], 21, -57434055), i = s(i, a, c, D, n[r + 12], 6, 1700485571), D = s(D, i, a, c, n[r + 3], 10, -1894986606), c = s(c, D, i, a, n[r + 10], 15, -1051523), a = s(a, c, D, i, n[r + 1], 21, -2054922799), i = s(i, a, c, D, n[r + 8], 6, 1873313359), D = s(D, i, a, c, n[r + 15], 10, -30611744), c = s(c, D, i, a, n[r + 6], 15, -1560198380), a = s(a, c, D, i, n[r + 13], 21, 1309151649), i = s(i, a, c, D, n[r + 4], 6, -145523070), D = s(D, i, a, c, n[r + 11], 10, -1120210379), c = s(c, D, i, a, n[r + 2], 15, 718787259), a = s(a, c, D, i, n[r + 9], 21, -343485551), i = e(i, o), a = e(a, h), c = e(c, u), D = e(D, f);
                    return Array(i, a, c, D)
                }

                function B(n, t, o, h, u, f) {
                    return e(r(e(e(t, n), e(h, f)), u), o)
                }

                function C(n, t, e, r, o, h, u) {
                    return B(t & e | ~t & r, n, t, o, h, u)
                }

                function l(n, t, e, r, o, h, u) {
                    return B(t & r | e & ~r, n, t, o, h, u)
                }

                function A(n, t, e, r, o, h, u) {
                    return B(t ^ e ^ r, n, t, o, h, u)
                }

                function s(n, t, e, r, o, h, u) {
                    return B(e ^ (t | ~r), n, t, o, h, u)
                }
                var w = t && "boolean" == typeof t.uppercase ? t.uppercase : !1,
                    F = t && "string" == typeof t.pad ? t.pda : "=",
                    E = t && "boolean" == typeof t.utf8 ? t.utf8 : !0;
                this.hex = function(n) {
                    return o(h(n, E), w)
                }, this.b64 = function(n) {
                    return c(h(n), F)
                }, this.any = function(n, t) {
                    return a(h(n, E), t)
                }, this.raw = function(n) {
                    return h(n, E)
                }, this.hex_hmac = function(n, t) {
                    return o(i(n, t), w)
                }, this.b64_hmac = function(n, t) {
                    return c(i(n, t), F)
                }, this.any_hmac = function(n, t, e) {
                    return a(i(n, t), e)
                }, this.vm_test = function() {
                    return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase()
                }, this.setUpperCase = function(n) {
                    return "boolean" == typeof n && (w = n), this
                }, this.setPad = function(n) {
                    return F = n || F, this
                }, this.setUTF8 = function(n) {
                    return "boolean" == typeof n && (E = n), this
                }
            },
            SHA1: function(t) {
                function u(t) {
                    return t = s ? n(t) : t, h(D(i(t), 8 * t.length))
                }

                function f(t, e) {
                    var r, o, u, f, a;
                    for (t = s ? n(t) : t, e = s ? n(e) : e, r = i(t), r.length > 16 && (r = D(r, 8 * t.length)), o = Array(16), u = Array(16), f = 0; 16 > f; f += 1) o[f] = 909522486 ^ r[f], u[f] = 1549556828 ^ r[f];
                    return a = D(o.concat(i(e)), 512 + 8 * e.length), h(D(u.concat(a), 672))
                }

                function D(n, t) {
                    var o, h, u, f, i, a, c, D, l = Array(80),
                        A = 1732584193,
                        s = -271733879,
                        w = -1732584194,
                        F = 271733878,
                        E = -1009589776;
                    for (n[t >> 5] |= 128 << 24 - t % 32, n[(t + 64 >> 9 << 4) + 15] = t, o = 0; o < n.length; o += 16) {
                        for (f = A, i = s, a = w, c = F, D = E, h = 0; 80 > h; h += 1) 16 > h ? l[h] = n[o + h] : l[h] = r(l[h - 3] ^ l[h - 8] ^ l[h - 14] ^ l[h - 16], 1), u = e(e(r(A, 5), B(h, s, w, F)), e(e(E, l[h]), C(h))), E = F, F = w, w = r(s, 30), s = A, A = u;
                        A = e(A, f), s = e(s, i), w = e(w, a), F = e(F, c), E = e(E, D)
                    }
                    return Array(A, s, w, F, E)
                }

                function B(n, t, e, r) {
                    return 20 > n ? t & e | ~t & r : 40 > n ? t ^ e ^ r : 60 > n ? t & e | t & r | e & r : t ^ e ^ r
                }

                function C(n) {
                    return 20 > n ? 1518500249 : 40 > n ? 1859775393 : 60 > n ? -1894007588 : -899497514
                }
                var l = t && "boolean" == typeof t.uppercase ? t.uppercase : !1,
                    A = t && "string" == typeof t.pad ? t.pda : "=",
                    s = t && "boolean" == typeof t.utf8 ? t.utf8 : !0;
                this.hex = function(n) {
                    return o(u(n, s), l)
                }, this.b64 = function(n) {
                    return c(u(n, s), A)
                }, this.any = function(n, t) {
                    return a(u(n, s), t)
                }, this.raw = function(n) {
                    return u(n, s)
                }, this.hex_hmac = function(n, t) {
                    return o(f(n, t))
                }, this.b64_hmac = function(n, t) {
                    return c(f(n, t), A)
                }, this.any_hmac = function(n, t, e) {
                    return a(f(n, t), e)
                }, this.vm_test = function() {
                    return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase()
                }, this.setUpperCase = function(n) {
                    return "boolean" == typeof n && (l = n), this
                }, this.setPad = function(n) {
                    return A = n || A, this
                }, this.setUTF8 = function(n) {
                    return "boolean" == typeof n && (s = n), this
                }
            },
            SHA256: function(t) {
                function r(t, e) {
                    return t = e ? n(t) : t, h(F(i(t), 8 * t.length))
                }

                function u(t, e) {
                    t = p ? n(t) : t, e = p ? n(e) : e;
                    var r, o = 0,
                        u = i(t),
                        f = Array(16),
                        a = Array(16);
                    for (u.length > 16 && (u = F(u, 8 * t.length)); 16 > o; o += 1) f[o] = 909522486 ^ u[o], a[o] = 1549556828 ^ u[o];
                    return r = F(f.concat(i(e)), 512 + 8 * e.length), h(F(a.concat(r), 768))
                }

                function f(n, t) {
                    return n >>> t | n << 32 - t
                }

                function D(n, t) {
                    return n >>> t
                }

                function B(n, t, e) {
                    return n & t ^ ~n & e
                }

                function C(n, t, e) {
                    return n & t ^ n & e ^ t & e
                }

                function l(n) {
                    return f(n, 2) ^ f(n, 13) ^ f(n, 22)
                }

                function A(n) {
                    return f(n, 6) ^ f(n, 11) ^ f(n, 25)
                }

                function s(n) {
                    return f(n, 7) ^ f(n, 18) ^ D(n, 3)
                }

                function w(n) {
                    return f(n, 17) ^ f(n, 19) ^ D(n, 10)
                }

                function F(n, t) {
                    var r, o, h, u, f, i, a, c, D, F, d, g, p = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
                        y = new Array(64);
                    for (n[t >> 5] |= 128 << 24 - t % 32, n[(t + 64 >> 9 << 4) + 15] = t, D = 0; D < n.length; D += 16) {
                        for (r = p[0], o = p[1], h = p[2], u = p[3], f = p[4], i = p[5], a = p[6], c = p[7], F = 0; 64 > F; F += 1) 16 > F ? y[F] = n[F + D] : y[F] = e(e(e(w(y[F - 2]), y[F - 7]), s(y[F - 15])), y[F - 16]), d = e(e(e(e(c, A(f)), B(f, i, a)), E[F]), y[F]), g = e(l(r), C(r, o, h)), c = a, a = i, i = f, f = e(u, d), u = h, h = o, o = r, r = e(d, g);
                        p[0] = e(r, p[0]), p[1] = e(o, p[1]), p[2] = e(h, p[2]), p[3] = e(u, p[3]), p[4] = e(f, p[4]), p[5] = e(i, p[5]), p[6] = e(a, p[6]), p[7] = e(c, p[7])
                    }
                    return p
                }
                var E, d = t && "boolean" == typeof t.uppercase ? t.uppercase : !1,
                    g = t && "string" == typeof t.pad ? t.pda : "=",
                    p = t && "boolean" == typeof t.utf8 ? t.utf8 : !0;
                this.hex = function(n) {
                    return o(r(n, p))
                }, this.b64 = function(n) {
                    return c(r(n, p), g)
                }, this.any = function(n, t) {
                    return a(r(n, p), t)
                }, this.raw = function(n) {
                    return r(n, p)
                }, this.hex_hmac = function(n, t) {
                    return o(u(n, t))
                }, this.b64_hmac = function(n, t) {
                    return c(u(n, t), g)
                }, this.any_hmac = function(n, t, e) {
                    return a(u(n, t), e)
                }, this.vm_test = function() {
                    return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase()
                }, this.setUpperCase = function(n) {
                    return "boolean" == typeof n && (d = n), this
                }, this.setPad = function(n) {
                    return g = n || g, this
                }, this.setUTF8 = function(n) {
                    return "boolean" == typeof n && (p = n), this
                }, E = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
            },
            SHA512: function(t) {
                function e(t) {
                    return t = g ? n(t) : t, h(u(i(t), 8 * t.length))
                }

                function r(t, e) {
                    t = g ? n(t) : t, e = g ? n(e) : e;
                    var r, o = 0,
                        f = i(t),
                        a = Array(32),
                        c = Array(32);
                    for (f.length > 32 && (f = u(f, 8 * t.length)); 32 > o; o += 1) a[o] = 909522486 ^ f[o], c[o] = 1549556828 ^ f[o];
                    return r = u(a.concat(i(e)), 1024 + 8 * e.length), h(u(c.concat(r), 1536))
                }

                function u(n, t) {
                    var e, r, o, h = new Array(80),
                        u = new Array(16),
                        i = [new f(1779033703, -205731576), new f(-1150833019, -2067093701), new f(1013904242, -23791573), new f(-1521486534, 1595750129), new f(1359893119, -1377402159), new f(-1694144372, 725511199), new f(528734635, -79577749), new f(1541459225, 327033209)],
                        a = new f(0, 0),
                        c = new f(0, 0),
                        E = new f(0, 0),
                        d = new f(0, 0),
                        g = new f(0, 0),
                        p = new f(0, 0),
                        y = new f(0, 0),
                        b = new f(0, 0),
                        m = new f(0, 0),
                        v = new f(0, 0),
                        x = new f(0, 0),
                        _ = new f(0, 0),
                        S = new f(0, 0),
                        U = new f(0, 0),
                        j = new f(0, 0),
                        M = new f(0, 0),
                        T = new f(0, 0);
                    for (void 0 === F && (F = [new f(1116352408, -685199838), new f(1899447441, 602891725), new f(-1245643825, -330482897), new f(-373957723, -2121671748), new f(961987163, -213338824), new f(1508970993, -1241133031), new f(-1841331548, -1357295717), new f(-1424204075, -630357736), new f(-670586216, -1560083902), new f(310598401, 1164996542), new f(607225278, 1323610764), new f(1426881987, -704662302), new f(1925078388, -226784913), new f(-2132889090, 991336113), new f(-1680079193, 633803317), new f(-1046744716, -815192428), new f(-459576895, -1628353838), new f(-272742522, 944711139), new f(264347078, -1953704523), new f(604807628, 2007800933), new f(770255983, 1495990901), new f(1249150122, 1856431235), new f(1555081692, -1119749164), new f(1996064986, -2096016459), new f(-1740746414, -295247957), new f(-1473132947, 766784016), new f(-1341970488, -1728372417), new f(-1084653625, -1091629340), new f(-958395405, 1034457026), new f(-710438585, -1828018395), new f(113926993, -536640913), new f(338241895, 168717936), new f(666307205, 1188179964), new f(773529912, 1546045734), new f(1294757372, 1522805485), new f(1396182291, -1651133473), new f(1695183700, -1951439906), new f(1986661051, 1014477480), new f(-2117940946, 1206759142), new f(-1838011259, 344077627), new f(-1564481375, 1290863460), new f(-1474664885, -1136513023), new f(-1035236496, -789014639), new f(-949202525, 106217008), new f(-778901479, -688958952), new f(-694614492, 1432725776), new f(-200395387, 1467031594), new f(275423344, 851169720), new f(430227734, -1194143544), new f(506948616, 1363258195), new f(659060556, -544281703), new f(883997877, -509917016), new f(958139571, -976659869), new f(1322822218, -482243893), new f(1537002063, 2003034995), new f(1747873779, -692930397), new f(1955562222, 1575990012), new f(2024104815, 1125592928), new f(-2067236844, -1578062990), new f(-1933114872, 442776044), new f(-1866530822, 593698344), new f(-1538233109, -561857047), new f(-1090935817, -1295615723), new f(-965641998, -479046869), new f(-903397682, -366583396), new f(-779700025, 566280711), new f(-354779690, -840897762), new f(-176337025, -294727304), new f(116418474, 1914138554), new f(174292421, -1563912026), new f(289380356, -1090974290), new f(460393269, 320620315), new f(685471733, 587496836), new f(852142971, 1086792851), new f(1017036298, 365543100), new f(1126000580, -1676669620), new f(1288033470, -885112138), new f(1501505948, -60457430), new f(1607167915, 987167468), new f(1816402316, 1246189591)]), r = 0; 80 > r; r += 1) h[r] = new f(0, 0);
                    for (n[t >> 5] |= 128 << 24 - (31 & t), n[(t + 128 >> 10 << 5) + 31] = t, o = n.length, r = 0; o > r; r += 32) {
                        for (D(E, i[0]), D(d, i[1]), D(g, i[2]), D(p, i[3]), D(y, i[4]), D(b, i[5]), D(m, i[6]), D(v, i[7]), e = 0; 16 > e; e += 1) h[e].h = n[r + 2 * e], h[e].l = n[r + 2 * e + 1];
                        for (e = 16; 80 > e; e += 1) B(j, h[e - 2], 19), C(M, h[e - 2], 29), l(T, h[e - 2], 6), _.l = j.l ^ M.l ^ T.l, _.h = j.h ^ M.h ^ T.h, B(j, h[e - 15], 1), B(M, h[e - 15], 8), l(T, h[e - 15], 7), x.l = j.l ^ M.l ^ T.l, x.h = j.h ^ M.h ^ T.h, s(h[e], _, h[e - 7], x, h[e - 16]);
                        for (e = 0; 80 > e; e += 1) S.l = y.l & b.l ^ ~y.l & m.l, S.h = y.h & b.h ^ ~y.h & m.h, B(j, y, 14), B(M, y, 18), C(T, y, 9), _.l = j.l ^ M.l ^ T.l, _.h = j.h ^ M.h ^ T.h, B(j, E, 28), C(M, E, 2), C(T, E, 7), x.l = j.l ^ M.l ^ T.l, x.h = j.h ^ M.h ^ T.h, U.l = E.l & d.l ^ E.l & g.l ^ d.l & g.l, U.h = E.h & d.h ^ E.h & g.h ^ d.h & g.h, w(a, v, _, S, F[e], h[e]), A(c, x, U), D(v, m), D(m, b), D(b, y), A(y, p, a), D(p, g), D(g, d), D(d, E), A(E, a, c);
                        A(i[0], i[0], E), A(i[1], i[1], d), A(i[2], i[2], g), A(i[3], i[3], p), A(i[4], i[4], y), A(i[5], i[5], b), A(i[6], i[6], m), A(i[7], i[7], v)
                    }
                    for (r = 0; 8 > r; r += 1) u[2 * r] = i[r].h, u[2 * r + 1] = i[r].l;
                    return u
                }

                function f(n, t) {
                    this.h = n, this.l = t
                }

                function D(n, t) {
                    n.h = t.h, n.l = t.l
                }

                function B(n, t, e) {
                    n.l = t.l >>> e | t.h << 32 - e, n.h = t.h >>> e | t.l << 32 - e
                }

                function C(n, t, e) {
                    n.l = t.h >>> e | t.l << 32 - e, n.h = t.l >>> e | t.h << 32 - e
                }

                function l(n, t, e) {
                    n.l = t.l >>> e | t.h << 32 - e, n.h = t.h >>> e
                }

                function A(n, t, e) {
                    var r = (65535 & t.l) + (65535 & e.l),
                        o = (t.l >>> 16) + (e.l >>> 16) + (r >>> 16),
                        h = (65535 & t.h) + (65535 & e.h) + (o >>> 16),
                        u = (t.h >>> 16) + (e.h >>> 16) + (h >>> 16);
                    n.l = 65535 & r | o << 16, n.h = 65535 & h | u << 16
                }

                function s(n, t, e, r, o) {
                    var h = (65535 & t.l) + (65535 & e.l) + (65535 & r.l) + (65535 & o.l),
                        u = (t.l >>> 16) + (e.l >>> 16) + (r.l >>> 16) + (o.l >>> 16) + (h >>> 16),
                        f = (65535 & t.h) + (65535 & e.h) + (65535 & r.h) + (65535 & o.h) + (u >>> 16),
                        i = (t.h >>> 16) + (e.h >>> 16) + (r.h >>> 16) + (o.h >>> 16) + (f >>> 16);
                    n.l = 65535 & h | u << 16, n.h = 65535 & f | i << 16
                }

                function w(n, t, e, r, o, h) {
                    var u = (65535 & t.l) + (65535 & e.l) + (65535 & r.l) + (65535 & o.l) + (65535 & h.l),
                        f = (t.l >>> 16) + (e.l >>> 16) + (r.l >>> 16) + (o.l >>> 16) + (h.l >>> 16) + (u >>> 16),
                        i = (65535 & t.h) + (65535 & e.h) + (65535 & r.h) + (65535 & o.h) + (65535 & h.h) + (f >>> 16),
                        a = (t.h >>> 16) + (e.h >>> 16) + (r.h >>> 16) + (o.h >>> 16) + (h.h >>> 16) + (i >>> 16);
                    n.l = 65535 & u | f << 16, n.h = 65535 & i | a << 16
                }
                var F, E = t && "boolean" == typeof t.uppercase ? t.uppercase : !1,
                    d = t && "string" == typeof t.pad ? t.pda : "=",
                    g = t && "boolean" == typeof t.utf8 ? t.utf8 : !0;
                this.hex = function(n) {
                    return o(e(n))
                }, this.b64 = function(n) {
                    return c(e(n), d)
                }, this.any = function(n, t) {
                    return a(e(n), t)
                }, this.raw = function(n) {
                    return e(n, g)
                }, this.hex_hmac = function(n, t) {
                    return o(r(n, t))
                }, this.b64_hmac = function(n, t) {
                    return c(r(n, t), d)
                }, this.any_hmac = function(n, t, e) {
                    return a(r(n, t), e)
                }, this.vm_test = function() {
                    return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase()
                }, this.setUpperCase = function(n) {
                    return "boolean" == typeof n && (E = n), this
                }, this.setPad = function(n) {
                    return d = n || d, this
                }, this.setUTF8 = function(n) {
                    return "boolean" == typeof n && (g = n), this
                }
            },
            RMD160: function(t) {
                function h(t) {
                    return t = w ? n(t) : t, i(D(f(t), 8 * t.length))
                }

                function u(t, e) {
                    t = w ? n(t) : t, e = w ? n(e) : e;
                    var r, o, h = f(t),
                        u = Array(16),
                        a = Array(16);
                    for (h.length > 16 && (h = D(h, 8 * t.length)), r = 0; 16 > r; r += 1) u[r] = 909522486 ^ h[r], a[r] = 1549556828 ^ h[r];
                    return o = D(u.concat(f(e)), 512 + 8 * e.length), i(D(a.concat(o), 672))
                }

                function i(n) {
                    var t, e = "",
                        r = 32 * n.length;
                    for (t = 0; r > t; t += 8) e += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
                    return e
                }

                function D(n, t) {
                    var o, h, u, f, i, a, c, D, A, s, w, p, y, b, m = 1732584193,
                        v = 4023233417,
                        x = 2562383102,
                        _ = 271733878,
                        S = 3285377520;
                    for (n[t >> 5] |= 128 << t % 32, n[(t + 64 >>> 9 << 4) + 14] = t, f = n.length, u = 0; f > u; u += 16) {
                        for (i = s = m, a = w = v, c = p = x, D = y = _, A = b = S, h = 0; 79 >= h; h += 1) o = e(i, B(h, a, c, D)), o = e(o, n[u + F[h]]), o = e(o, C(h)), o = e(r(o, d[h]), A), i = A, A = D, D = r(c, 10), c = a, a = o, o = e(s, B(79 - h, w, p, y)), o = e(o, n[u + E[h]]), o = e(o, l(h)), o = e(r(o, g[h]), b), s = b, b = y, y = r(p, 10), p = w, w = o;
                        o = e(v, e(c, y)), v = e(x, e(D, b)), x = e(_, e(A, s)), _ = e(S, e(i, w)), S = e(m, e(a, p)), m = o
                    }
                    return [m, v, x, _, S]
                }

                function B(n, t, e, r) {
                    return n >= 0 && 15 >= n ? t ^ e ^ r : n >= 16 && 31 >= n ? t & e | ~t & r : n >= 32 && 47 >= n ? (t | ~e) ^ r : n >= 48 && 63 >= n ? t & r | e & ~r : n >= 64 && 79 >= n ? t ^ (e | ~r) : "rmd160_f: j out of range"
                }

                function C(n) {
                    return n >= 0 && 15 >= n ? 0 : n >= 16 && 31 >= n ? 1518500249 : n >= 32 && 47 >= n ? 1859775393 : n >= 48 && 63 >= n ? 2400959708 : n >= 64 && 79 >= n ? 2840853838 : "rmd160_K1: j out of range"
                }

                function l(n) {
                    return n >= 0 && 15 >= n ? 1352829926 : n >= 16 && 31 >= n ? 1548603684 : n >= 32 && 47 >= n ? 1836072691 : n >= 48 && 63 >= n ? 2053994217 : n >= 64 && 79 >= n ? 0 : "rmd160_K2: j out of range"
                }
                var A = t && "boolean" == typeof t.uppercase ? t.uppercase : !1,
                    s = t && "string" == typeof t.pad ? t.pda : "=",
                    w = t && "boolean" == typeof t.utf8 ? t.utf8 : !0,
                    F = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                    E = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                    d = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                    g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
                this.hex = function(n) {
                    return o(h(n, w))
                }, this.b64 = function(n) {
                    return c(h(n, w), s)
                }, this.any = function(n, t) {
                    return a(h(n, w), t)
                }, this.raw = function(n) {
                    return h(n, w)
                }, this.hex_hmac = function(n, t) {
                    return o(u(n, t))
                }, this.b64_hmac = function(n, t) {
                    return c(u(n, t), s)
                }, this.any_hmac = function(n, t, e) {
                    return a(u(n, t), e)
                }, this.vm_test = function() {
                    return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase()
                }, this.setUpperCase = function(n) {
                    return "boolean" == typeof n && (A = n), this
                }, this.setPad = function(n) {
                    return "undefined" != typeof n && (s = n), this
                }, this.setUTF8 = function(n) {
                    return "boolean" == typeof n && (w = n), this
                }
            }
        },
        function(n, t) {
            var e = !1;
            "object" == typeof exports && (e = exports, exports && "object" == typeof global && global && global === global.global && (n = global)), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
                return D
            }) : e ? "object" == typeof module && module && module.exports === e ? module.exports = D : e.Hashes = D : n.Hashes = D
        }(this)
}();
var Ranking = pc.createScript("ranking");
Ranking.prototype.initialize = function() {
    this.ajaxLen = 3, this.loading_rank = !1, this.gameEntity = this.app.root.findByName("Game"), this.loadRankingHtml(), this.loadRankingCss(), $("#ranking-container").hide(), this.toggleTab(), this.closeEvent(), this.scrollRanking(), this.app.on("ranking:showRanking", this.getRankData, this)
}, Ranking.prototype.loadRankingHtml = function() {
    var n = this.app.assets.findByTag("RankingHtml")[0],
        a = document.createElement("div");
    a.id = "ranking-container", a.innerHTML = n.resource || "", document.body.appendChild(a), n.on("load", function() {
        a.innerHTML = n.resource
    }), this.app.assets.load(n)
}, Ranking.prototype.loadRankingCss = function() {
    var n = this.app.assets.findByTag("RankingCss")[0],
        a = pc.createStyle(n.resource || "");
    document.head.appendChild(a), n.on("load", function() {
        a.innerHTML = n.resource
    }), this.app.assets.load(n)
}, Ranking.prototype.scrollRanking = function() {
    var n = $(".world-container"),
        a = $(".friend-container");
    n.attr("data-num", "1"), a.attr("data-num", "1"), n.on("scroll", function() {
        var a = n.find(".ranking-list").height(),
            t = a,
            e = n.height(),
            i = t - e,
            s = n.find(".ranking-list div:first-of-type").height(),
            r = n[0].scrollTop,
            o = i - 10 * s;
        r > o && (this.showMore(), console.log("加载更多"))
    }.bind(this)), a.on("scroll", function() {
        var n = a.find(".ranking-list").height(),
            t = n,
            e = a.height(),
            i = t - e;
        if (!(0 > i)) {
            var s = a.find(".ranking-list div:first-of-type").height(),
                r = a[0].scrollTop,
                o = i - 10 * s;
            r > o && (this.showFriendMore(), console.log("加载更多"))
        }
    }.bind(this))
}, Ranking.prototype.toggleTab = function() {
    var n = ($("#ranking-container"), $(".world-btn")),
        a = $(".friend-btn"),
        t = $(".world-banner"),
        e = $(".friend-banner"),
        i = $(".world-container"),
        s = $(".friend-container"),
        r = $(".invite-friend"),
        o = function(o) {
            o.on("tap", function() {
                o.hasClass("ranking-select") || (n.toggleClass("ranking-select"), a.toggleClass("ranking-select"), n.toggleClass("world-btn1"), n.toggleClass("world-btn2"), a.toggleClass("friend-btn1"), a.toggleClass("friend-btn2"), e.toggle(), t.toggle(), i.toggle(), s.toggle(), r.toggle())
            })
        };
    o(n), o(a)
}, Ranking.prototype.closeEvent = function() {
    $("#ranking-container .close-btn").on("tap", function() {
        this.gameEntity.script.htmlAndCss.fadeOutUp($("#ranking-container")), this.gameEntity.script.htmlAndCss.overlayFadeOut($("#bg-overlay")), setTimeout(function() {
            this.resetRanking()
        }.bind(this), 1e3)
    }.bind(this))
}, Ranking.prototype.resetRanking = function() {
    $(".world-container").attr("data-num", "1"), $(".friend-container").attr("data-num", "1"), $(".world-container .ranking-list").empty(), $(".friend-container .ranking-list").empty()
}, Ranking.prototype.getRankData = function(n) {
    var a = this;
    if (3 === this.ajaxLen) {
        var t = (new Date).Format("yyyy-MM-dd hh:mm:ss");
        $.ajax({
            url: WeChat.GAME_DOMAIN + "get_rank",
            type: "POST",
            data: {
                page: 1,
                pagesize: 20,
                game_id: WeChat.GAME_ID,
                start: "2016-08-15 00:00:00",
                end: t,
                sort_type: -1
            },
            success: function(n) {
                a.ajaxLen--, a.loading_rank = !1, n = JSON.parse(n), console.log(n), 0 === n.code && (n = n.msg, a.setRank(n)), a.showRanking()
            },
            error: function(n) {
                a.ajaxLen--, a.loading_rank = !1, console.log(n), a.showRanking()
            }
        }), $.ajax({
            url: WeChat.GAME_DOMAIN + "get_user_rank?game_id=" + WeChat.GAME_ID + "&openid=" + WeChat.openId,
            type: "GET",
            success: function(n) {
                a.ajaxLen--, n = JSON.parse(n), 0 === n.code && a.setPlayerNum(n), a.showRanking()
            },
            error: function(n) {
                a.ajaxLen--, console.log(n), a.showRanking()
            }
        }), $.ajax({
            url: WeChat.GAME_DOMAIN + "get_friend_rank",
            type: "POST",
            data: {
                page: 1,
                pagesize: 20,
                openid: WeChat.openId,
                game_id: WeChat.GAME_ID,
                start: "2016-08-15 00:00:00",
                end: t,
                sort_type: -1
            },
            success: function(n) {
                a.ajaxLen--, a.loading_rank = !1, n = JSON.parse(n), console.log(n), 0 === n.code && (dataMsg = n.msg, a.setFriendRank(dataMsg), a.setFriendPlayerNum(n)), a.showRanking()
            },
            error: function(n) {
                a.ajaxLen--, a.loading_rank = !1, console.log(n), a.showRanking()
            }
        })
    }
}, Ranking.prototype.setRank = function(n) {
    for (var a = "", t = 0, e = n.length; e > t; t++) {
        var i = n[t];
        a += "<div>", a += '<span class="list-number">' + (t + 1) + "</span>", a += '<div class="head-bg"><img class="list-img" src="' + i.userimg + '" alt=""></div>', a += '<span class="list-name">' + i.username + "</span>", a += '<span class="list-score">' + parseInt(i.best, 10) + "</span>", void 0 !== i.info_id && (a += '<div class="challenge" data-id=' + i.info_id + ">挑战</div>"), a += "</div>"
    }
    $(".world-container .ranking-list").append(a), $(".challenge").off();
    var s = this;
    $(".challenge").on("tap", function() {
        s.challenge(this)
    })
}, Ranking.prototype.setFriendRank = function(n) {
    for (var a = "", t = 0, e = n.length; e > t; t++) {
        var i = n[t];
        a += "<div>", a += '<span class="list-number">' + (t + 1) + "</span>", a += '<div class="head-bg"><img class="list-img" src="' + i.userimg + '" alt=""></div>', a += '<span class="list-name">' + i.username + "</span>", a += '<span class="list-score">' + parseInt(i.best, 10) + "</span>", void 0 !== i.info_id && (a += '<div class="challenge" data-id=' + i.info_id + ">挑战</div>"), a += "</div>"
    }
    $(".friend-container .ranking-list").append(a), $(".challenge").off();
    var s = this;
    $(".challenge").on("tap", function() {
        s.challenge(this)
    })
}, Ranking.prototype.setPlayerNum = function(n) {
    $(".world-banner .total-number").text(n.total), $(".world-banner .current-ranking").text(n.rank)
}, Ranking.prototype.setFriendPlayerNum = function(n) {
    $(".friend-banner .total-number").text(n.total), $(".friend-banner .current-ranking").text(n.rank)
}, Ranking.prototype.update = function(n) {}, Ranking.prototype.swap = function(n) {}, Ranking.prototype.showRanking = function() {
    this.ajaxLen > 0 || (this.gameEntity.script.htmlAndCss.fadeInDown($("#ranking-container")), this.gameEntity.script.htmlAndCss.overlayFadeIn($("#bg-overlay")), $(".friend-container")[0].scrollTop = 0, $(".world-container")[0].scrollTop = 0, this.ajaxLen = 3)
}, Ranking.prototype.showMore = function(n) {
    var a = parseInt($(".world-container").attr("data-num"), 10) + 1,
        t = this,
        e = 20,
        i = (new Date).Format("yyyy-MM-dd hh:mm:ss");
    this.loading_rank || (this.loading_rank = !0, $.ajax({
        url: WeChat.GAME_DOMAIN + "get_rank",
        type: "POST",
        data: {
            page: a,
            pagesize: e,
            game_id: WeChat.GAME_ID,
            start: "2016-08-15 00:00:00",
            end: i,
            sort_type: -1
        },
        success: function(n) {
            if (t.loading_rank = !1, n = JSON.parse(n), 0 === n.code && (n = n.msg, n && n.length > 0)) {
                $(".world-container").attr("data-num", a);
                t.rankStrMore(n, a)
            }
        },
        error: function(n) {
            t.loading_rank = !1, console.error(n)
        }
    }))
}, Ranking.prototype.rankStrMore = function(n, a) {
    if (n) {
        for (var t = "", e = 0, i = n.length; i > e; e++) {
            var s = n[e];
            t += "<div>", t += '<span class="list-number">' + (e + 1 + 20 * (a - 1)) + "</span>", t += '<div class="head-bg"><img class="list-img" src="' + s.userimg + '" alt=""></div>', t += '<span class="list-name">' + s.username + "</span>", t += '<span class="list-score">' + parseInt(s.best, 10) + "</span>", void 0 !== s.info_id && (t += '<div class="challenge" data-id=' + s.info_id + ">挑战</div>"), t += "</div>"
        }
        $(".world-container .ranking-list").append(t), $(".challenge").off();
        var r = this;
        $(".challenge").on("tap", function() {
            r.challenge(this)
        })
    }
}, Ranking.prototype.showFriendMore = function(n) {
    var a = parseInt($(".friend-container").attr("data-num"), 10) + 1,
        t = this,
        e = 20,
        i = (new Date).Format("yyyy-MM-dd hh:mm:ss");
    this.loading_rank || (this.loading_rank = !0, $.ajax({
        url: WeChat.GAME_DOMAIN + "get_friend_rank",
        type: "POST",
        data: {
            page: a,
            pagesize: e,
            openid: WeChat.openId,
            game_id: WeChat.GAME_ID,
            start: "2016-08-15 00:00:00",
            end: i,
            sort_type: -1
        },
        success: function(n) {
            if (t.loading_rank = !1, n = JSON.parse(n), 0 === n.code && (n = n.msg, n && n.length > 0)) {
                $(".friend-container").attr("data-num", a);
                t.rankFriendStrMore(n, a)
            }
        },
        error: function(n) {
            t.loading_rank = !1, console.error(n)
        }
    }))
}, Ranking.prototype.rankFriendStrMore = function(n, a) {
    if (n) {
        for (var t = "", e = 0, i = n.length; i > e; e++) {
            var s = n[e];
            t += "<div>", t += '<span class="list-number">' + (e + 1 + 20 * (a - 1)) + "</span>", t += '<div class="head-bg"><img class="list-img" src="' + s.userimg + '" alt=""></div>', t += '<span class="list-name">' + s.username + "</span>", t += '<span class="list-score">' + parseInt(s.best, 10) + "</span>", void 0 !== s.info_id && (t += '<div class="challenge" data-id=' + s.info_id + ">挑战</div>"), t += "</div>"
        }
        $(".friend-container .ranking-list").append(t), $(".challenge").off();
        var r = this;
        $(".challenge").on("tap", function() {
            r.challenge(this)
        })
    }
}, Ranking.prototype.challenge = function(n) {
    var a = $(n).attr("data-id");
    return "undefined" === a ? void this.gameEntity.script.hintText.hint("这是老玩家，还没有影子呢") : (this.app.fire("shadow:startChallengeByRanking", a), this.gameEntity.script.htmlAndCss.fadeOutUp($("#ranking-container")), this.gameEntity.script.htmlAndCss.overlayFadeOut($("#bg-overlay")), void setTimeout(function() {
        this.resetRanking()
    }.bind(this), 1e3))
};
var Revive = pc.createScript("revive");
Revive.freeRevive = !1, Revive.isRevivePage = !1, Revive.reviveDiamondCost = -1, Revive.reviveTimes = 0, Revive.useDiamondReviveTimes = 0, Revive.pivot = -1, Revive.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.clickable = !0, this.loadReviveHtml(), this.loadReviveCss(), $("#revive-container").hide(), this.initReviveTimeOnServer(), this.app.on("game:uiRevive", this.onUiRevive, this), this.app.on("game:onReviveShareSuccess", this.onReviveShareSuccess, this), this.app.on("game:reset", this.reset, this), this.app.on("game:postCommitDiamondSuccess", this.getFreeReviveTimes, this), $("#revive-container #close-btn").on("tap", function() {
        this.clickable && (this.gameEntity.script.htmlAndCss.fadeOutUp($("#revive-container")), this.gameEntity.script.htmlAndCss.overlayFadeOut($("#bg-overlay")), Revive.isRevivePage = !1, this.app.fire("game:gameover"))
    }.bind(this)), $("#revive-container #share-revive-btn").on("tap", function() {
        this.clickable && this.gameEntity.script.htmlAndCss.overlayFadeIn($("#revive-container #share-hint"))
    }.bind(this)), $("#revive-container #share-hint").on("tap", function() {
        this.clickable && this.gameEntity.script.htmlAndCss.overlayFadeOut($("#revive-container #share-hint"))
    }.bind(this)), $("#revive-container #free-revive-btn").on("tap", function() {
        this.clickable && this.reviveBtnOnClick()
    }.bind(this)), $("#revive-container #diamond-revive-btn").on("tap", function() {
        this.clickable && this.diamondReviveBtnOnClick()
    }.bind(this))
}, Revive.prototype.update = function(e) {}, Revive.prototype.swap = function(e) {
    this.gameEntity = e.gameEntity, this.clickable = e.clickable, e.app.off("game:uiRevive", this.onUiRevive, this), this.app.on("game:uiRevive", this.onUiRevive, this), e.app.off("game:onReviveShareSuccess", this.onReviveShareSuccess, this), this.app.on("game:onReviveShareSuccess", this.onReviveShareSuccess, this)
}, Revive.prototype.reset = function() {
    Revive.reviveTimes = 0, Revive.useDiamondReviveTimes = 0
}, Revive.prototype.initReviveTimeOnServer = function() {
    var e = this;
    $.ajax({
        url: WeChat.GAME_DOMAIN + "init",
        type: "POST",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        data: {
            game_id: WeChat.GAME_ID,
            openid: WeChat.openId
        },
        success: function(i) {
            i = JSON.parse(i), 0 === i.code ? console.log("复活次数初始化成功") : (cosole.log(i.msg + ":" + i.code), e.gameEntity.script.hintText.hint("复活次数初始化失败!"))
        },
        error: WeChat.errorCallbackFunction
    })
}, Revive.prototype.loadReviveCss = function() {
    var e = this.app.assets.findByTag("ReviveCss")[0],
        i = pc.createStyle(e.resource || "");
    document.head.appendChild(i), e.on("load", function() {
        i.innerHTML = e.resource
    }), this.app.assets.load(e)
}, Revive.prototype.loadReviveHtml = function() {
    var e = this.app.assets.findByTag("ReviveHtml")[0],
        i = document.createElement("div");
    i.id = "revive-container", i.innerHTML = e.resource || "", document.body.appendChild(i), e.on("load", function() {
        i.innerHTML = e.resource
    }), this.app.assets.load(e)
}, Revive.prototype.diamondReviveBtnOnClick = function() {
    var e = this,
        i = (new Date).Format("yyyy-MM-dd hh:mm:ss");
    this.clickable = !1, $.ajax({
        url: WeChat.GAME_DOMAIN + "revive",
        type: "POST",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        data: {
            openid: WeChat.openId,
            game_id: WeChat.GAME_ID,
            create_time: i,
            use_diamond: !0
        },
        success: function(i) {
            i = JSON.parse(i), 0 === i.code ? (e.app.fire("game:onRevive"), e.gameEntity.script.htmlAndCss.fadeOutUp($("#revive-container")), e.gameEntity.script.htmlAndCss.overlayFadeOut($("#bg-overlay")), WeChat.diamond -= Revive.reviveDiamondCost, e.app.fire("game:costDiamond"), Revive.useDiamondReviveTimes++, Revive.freeRevive = !1, Revive.isRevivePage = !1, Revive.reviveTimes++) : -1 === i.code ? console.error(i.msg) : -2 === i.code && e.gameEntity.script.hintText.hint("钻石不足！"), e.clickable = !0
        },
        error: function(i, t, a) {
            console.error("XHR:" + i + ", textStatus:" + t + ", errorThrown:" + a), "timeout" === t && e.gameEntity.script.hintText.hint("亲！您的网络好像出问题了哦！"), e.clickable = !0
        }
    })
}, Revive.prototype.reviveBtnOnClick = function() {
    var e = this;
    this.clickable = !1, $.ajax({
        url: WeChat.GAME_DOMAIN + "check_revive?openid=" + WeChat.openId + "&game_id=" + WeChat.GAME_ID,
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(i) {
            if (i = JSON.parse(i), 0 === i.code)
                if (console.log(i), i.msg === !0) {
                    var t = (new Date).Format("yyyy-MM-dd hh:mm:ss");
                    this.clickable = !1, $.ajax({
                        url: WeChat.GAME_DOMAIN + "revive",
                        type: "POST",
                        dataType: "JSON",
                        timeout: WeChat.TIMEOUT,
                        data: {
                            openid: WeChat.openId,
                            game_id: WeChat.GAME_ID,
                            create_time: t,
                            use_diamond: !1
                        },
                        success: function(i) {
                            i = JSON.parse(i), 0 === i.code ? (e.app.fire("game:onRevive"), e.gameEntity.script.htmlAndCss.fadeOutUp($("#revive-container")), e.gameEntity.script.htmlAndCss.overlayFadeOut($("#bg-overlay")), Revive.freeRevive = !1, Revive.isRevivePage = !1, Revive.reviveTimes++) : -1 === i.code ? console.error(i.msg) : -2 === i.code && e.gameEntity.script.hintText.hint("钻石不足！"), e.clickable = !0
                        },
                        error: function(i, t, a) {
                            console.error("XHR:" + i + ", textStatus:" + t + ", errorThrown:" + a), "timeout" === t && e.gameEntity.script.hintText.hint("亲！您的网络好像出问题了哦！"), e.clickable = !0
                        }
                    })
                } else e.gameEntity.script.hintText.hint("提示免费次数已用完!"), Revive.freeRevive = !1;
            e.clickable = !0
        },
        error: function(i, t, a) {
            console.error("XHR:" + i + ", textStatus:" + t + ", errorThrown:" + a), "timeout" === t && e.gameEntity.script.hintText.hint("亲！您的网络好像出问题了哦！"), e.clickable = !0
        }
    })
}, Revive.prototype.onReviveShareSuccess = function() {
    var e = this,
        i = (new Date).Format("yyyy-MM-dd hh:mm:ss");
    this.clickable = !1, $.ajax({
        url: WeChat.GAME_DOMAIN + "commit_share",
        type: "POST",
        dataType: "JOSN",
        timeout: WeChat.TIMEOUT,
        data: {
            openid: WeChat.openId,
            game_id: WeChat.GAME_ID,
            create_time: i,
            type: "share"
        },
        success: function(i) {
            i = JSON.parse(i), 0 === i.code ? (e.gameEntity.script.htmlAndCss.overlayFadeOut($("#revive-container #share-hint")), Revive.freeRevive = !0, e.setBtnsOfShareSucceeded()) : console.error(i.msg + ":" + i.code), e.clickable = !0
        },
        error: function(i, t, a) {
            console.error("XHR:" + i + ", textStatus:" + t + ", errorThrown:" + a), "timeout" === t && e.gameEntity.script.hintText.hint("亲！您的网络好像出问题了哦！"), e.clickable = !0
        }
    })
}, Revive.prototype.setBtnsOfShareSucceeded = function() {
    $("#revive-container #text-info").text("您已获得免费复活，点击复活继续游戏。"), $("#revive-container #free-revive-btn").show(), $("#revive-container #share-revive-btn").hide(), $("#revive-container #diamond-revive-btn").hide()
}, Revive.prototype.onUiRevive = function() {
    Revive.isRevivePage = !0, GameManager.GAME_PAUSE = !0, this.app.fire("game:reset"), this.app.fire("game:postCommitDiamond")///////
}, Revive.prototype.getFreeReviveTimes = function() {
    var e = this;
    this.clickable = !1, Revive.freeRevive === !1 ? -1 === Revive.pivot ? $.ajax({
        url: WeChat.GAME_DOMAIN + "get_game_info?game_id=" + WeChat.GAME_ID,
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(i) {
            i = JSON.parse(i), 0 === i.code ? (Revive.pivot = i.msg[0].revive.revive_diamond, e.checkIfHasFreeReviveOrNot()) : console.error(i.msg + ":" + i.code), e.clickable = !0
        },
        error: function(i, t, a) {
            console.error("XHR:" + i + ", textStatus:" + t + ", errorThrown" + a), "timeout" === t && e.gameEntity.script.hintText.hint("亲！您的网络好像出问题了哦！"), e.clickable = !0
        }
    }) : this.checkIfHasFreeReviveOrNot() : this.setBtnsOfShareSucceeded()
}, Revive.prototype.checkIfHasFreeReviveOrNot = function() {
    var e = this;
    this.clickable = !1, Revive.reviveDiamondCost = parseInt(Revive.pivot, 10) * Math.pow(2, Revive.useDiamondReviveTimes), $("#revive-container #diamond-revive-btn #diamond-count").text(Revive.reviveDiamondCost), $.ajax({
        url: WeChat.GAME_DOMAIN + "check_revive?openid=" + WeChat.openId + "&game_id=" + WeChat.GAME_ID,
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(i) {
            i = JSON.parse(i), 0 === i.code && (i.msg === !0 ? ($("#revive-container #text-info").text("复活后可继续进行游戏，可获得更高分哦"), $("#revive-container #free-revive-btn").hide(), $("#revive-container #share-revive-btn").show(), $("#revive-container #diamond-revive-btn").css({
                transform: "translateX(5%)"
            }).show()) : ($("#revive-container #text-info").text("复活后可继续进行游戏，可获得更高分哦"), $("#revive-container #free-revive-btn").hide(), $("#revive-container #share-revive-btn").hide(), $("#revive-container #diamond-revive-btn").css({
                transform: "translateX(-50%)"
            }).show())), e.clickable = !0
        },
        error: function(i, t, a) {
            console.error("XHR:" + i + ", textStatus:" + t + ", errorThrown:" + a), "timeout" === t && e.gameEntity.script.hintText.hint("亲！您的网络好像出问题了哦！"), e.clickable = !0
        }
    })
};
var ShadowSystem = pc.createScript("shadowSystem");
ShadowSystem.isOnShadowChallenge = !1, ShadowSystem.challengeShadowId = "", ShadowSystem.playerShadowId = "", ShadowSystem.gameoverPlayerShadowId = "", ShadowSystem.commitPlayerShadowSuccess = !1, ShadowSystem.isChallengeSuccess = !1, ShadowSystem.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.playerToShadowObj = {
        obstacleInfo: [],
        playerOperation: [],
        playerInfo: {},
        distance: 0,
        revivePosition: [],
        animal: "",
        score: 0
    }, this.beingChallengedShadowObj = {
        obstacleInfo: [],
        playerOperation: [],
        playerInfo: {},
        distance: 0,
        revivePosition: [],
        animal: "",
        score: 0
    }, this.app.on("shadow:setPlayerInfo", this.setPlayerInfo, this), this.app.on("shadow:setPlayerInfo", this.setPlayerAnimal, this), this.app.on("shadow:postCustomShadowObj", this.postCustomShadowObj, this), this.app.on("shadow:getBeingChallengedShadowObj", this.getBeingChallengedShadowObj, this), this.app.on("shadow:setPlayerDistance", this.setPlayerDistance, this), this.app.on("shadow:setPlayerScore", this.setPlayerScore, this), this.app.on("game:reset", this.reset, this), this.app.on("shadow:startChallengeByRanking", this.startChallengeByRanking, this)
}, ShadowSystem.prototype.swap = function(e) {
    this.playerToShadowObj = e.playerToShadowObj, this.beingChallengedShadowObj = e.beingChallengedShadowObj, e.app.off("shadow:setPlayerInfo", this.setPlayerInfo, this), this.app.on("shadow:setPlayerInfo", this.setPlayerInfo, this), e.app.off("shadow:setPlayerInfo", this.setPlayerAnimal, this), this.app.on("shadow:setPlayerInfo", this.setPlayerAnimal, this), e.app.off("shadow:postCustomShadowObj", this.postCustomShadowObj, this), this.app.on("shadow:postCustomShadowObj", this.postCustomShadowObj, this), e.app.off("shadow:getBeingChallengedShadowObj", this.getBeingChallengedShadowObj, this), this.app.on("shadow:getBeingChallengedShadowObj", this.getBeingChallengedShadowObj, this), e.app.off("shadow:setPlayerDistance", this.setPlayerDistance, this), this.app.on("shadow:setPlayerDistance", this.setPlayerDistance, this), e.app.off("shadow:setPlayerScore", this.setPlayerScore, this), this.app.on("shadow:setPlayerScore", this.setPlayerScore, this), e.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this), e.app.off("shadow:startChallengeByRanking", this.startChallengeByRanking, this), this.app.on("shadow:startChallengeByRanking", this.startChallengeByRanking, this)
}, ShadowSystem.prototype.onClearInfo = function() {
    this.playerToShadowObj = {
        obstacleInfo: [],
        playerOperation: [],
        playerInfo: {},
        distance: 0,
        revivePosition: [],
        animal: "",
        score: 0
    }
}, ShadowSystem.prototype.reset = function() {
    this.onClearInfo()
}, ShadowSystem.prototype.startChallengeByRanking = function(e) {
    this.gameEntity.script.hintText.hint("初始化影子..."), ShadowSystem.challengeShadowId = e, ShadowSystem.isOnShadowChallenge = !0, this.app.fire("shadow:enableShadowComponent"), this.getBeingChallengedShadowObj(), setTimeout(function() {
        GameManager.gameState === GameManager.START_MENU ? this.app.fire("ui:onGameStart", "challenge") : GameManager.gameState === GameManager.GAMEOVER_MENU && this.app.fire("game:reset", "challenge")
    }.bind(this), 1500)
}, ShadowSystem.prototype.postCustomShadowObj = function(e) {
    var t = this;
    ShadowSystem.commitPlayerShadowSuccess = !1, $.ajax({
        url: WeChat.GAME_DOMAIN + "save_user_info",
        type: "POST",
        dataType: "JSON",
        data: {
            game_id: WeChat.GAME_ID,
            openid: WeChat.openId,
            content: JSON.stringify(t.playerToShadowObj)
        },
        timeout: WeChat.TIMEOUT + 2e3,
        success: function(a) {
            a = JSON.parse(a), 0 === a.code && (e && (ShadowSystem.playerShadowId = a.msg._id), ShadowSystem.gameoverPlayerShadowId = a.msg._id, t.app.fire("game:postScore"), ShadowSystem.commitPlayerShadowSuccess = !0, t.app.fire("wechat:resetConfig"))
        },
        error: WeChat.errorCallbackFunction
    })
}, ShadowSystem.prototype.getBeingChallengedShadowObj = function() {
    var e = this;
    $.ajax({
        url: WeChat.GAME_DOMAIN + "get_info?info_id=" + ShadowSystem.challengeShadowId,
        type: "GET",
        dataType: "JSON",
        timeout: WeChat.TIMEOUT,
        success: function(t) {
            t = JSON.parse(t), 0 === t.code ? (e.beingChallengedShadowObj = t.msg[0].content, e.app.fire("shadow:initShadowPlayAnimalModel"), e.app.fire("shadow:initFirstTriggerPosition"), e.app.fire("shadow:initShadowRoadArrayAndSoOn")) : e.gameEntity.script.hintText.hint(t.msg + ":" + t.code)
        },
        error: WeChat.errorCallbackFunction
    })
}, ShadowSystem.prototype.getShadowPlayerInfo = function() {
    return this.beingChallengedShadowObj.playerInfo
}, ShadowSystem.prototype.getPlayerAnimal = function() {
    return this.beingChallengedShadowObj.animal
}, ShadowSystem.prototype.getRevivePosition = function() {
    return this.beingChallengedShadowObj.revivePosition
}, ShadowSystem.prototype.getPlayerOperation = function() {
    return this.beingChallengedShadowObj.playerOperation
}, ShadowSystem.prototype.getPlayerShadowDistance = function() {
    return this.beingChallengedShadowObj.distance
}, ShadowSystem.prototype.getPlayerShadowObstacleInfo = function() {
    return this.beingChallengedShadowObj.obstacleInfo
}, ShadowSystem.prototype.getShadowPlayerScore = function() {
    return this.beingChallengedShadowObj.score
}, ShadowSystem.prototype.setPlayerAnimal = function() {
    this.playerToShadowObj.animal = GameManager.animalState
}, ShadowSystem.prototype.setRevivePosition = function(e) {
    this.playerToShadowObj.revivePosition.push(e.x, e.y, e.z)
}, ShadowSystem.prototype.setObstacleInfo = function(e, t, a, o, s, h) {
    this.playerToShadowObj.obstacleInfo.push(e, t, a, o, s, h)
}, ShadowSystem.prototype.setPlayerOperationPos = function(e, t) {
    this.playerToShadowObj.playerOperation.push(e.x, e.y, e.z, t)
}, ShadowSystem.prototype.setPlayerInfo = function() {
    this.playerToShadowObj.playerInfo = WeChat.userInfoData
}, ShadowSystem.prototype.setPlayerDistance = function(e) {
    this.playerToShadowObj.distance = e
}, ShadowSystem.prototype.setPlayerScore = function(e) {
    this.playerToShadowObj.score = e
}, ShadowSystem.prototype.update = function(e) {};
var ShadowAnimal = pc.createScript("shadowAnimal");
ShadowAnimal.attributes.add("initialVelocitySpeedX", {
    type: "number",
    "default": 3,
    description: "动物的初始水平位移速度X，请务必保持垂直速度z是水平速度x的3倍。"
}), ShadowAnimal.attributes.add("initialVelocitySpeedZ", {
    type: "number",
    "default": 9,
    description: "动物的初始垂直位移速度Z，请务必保持垂直速度z是水平速度x的3倍。"
}), ShadowAnimal.attributes.add("velocitySpeedX", {
    type: "number",
    "default": 3,
    description: "动物的水平位移速度X，请务必保持垂直速度z是水平速度x的3倍。"
}), ShadowAnimal.attributes.add("velocitySpeedZ", {
    type: "number",
    "default": 9,
    description: "动物的垂直位移速度Z，请务必保持垂直速度z是水平速度x的3倍。"
}), ShadowAnimal.attributes.add("maxVelocitySpeedX", {
    type: "number",
    "default": 17,
    description: "动物的水平位移的最大速度X，请务必保持垂直速度z是水平速度x的3倍。"
}), ShadowAnimal.attributes.add("maxVelocitySpeedZ", {
    type: "number",
    "default": 15,
    description: "动物的垂直位移的最大速度Z，请务必保持垂直速度z是水平速度x的3倍。"
}), ShadowAnimal.attributes.add("stage01MaxSpeed", {
    type: "number",
    "default": 10,
    description: "第一段加速的最大速度，当速度超过这个速度的时候，开始第二段加速"
}), ShadowAnimal.attributes.add("acceleration", {
    type: "number",
    "default": .2,
    description: "动物的基础加速度"
}), ShadowAnimal.attributes.add("startAcceleration", {
    type: "number",
    "default": 3,
    description: "前3秒动物的加速度"
}), ShadowAnimal.attributes.add("initialX", {
    type: "number",
    "default": 0,
    description: "动物的初始位置x"
}), ShadowAnimal.attributes.add("initialY", {
    type: "number",
    "default": 1,
    description: "动物的初始位置y"
}), ShadowAnimal.attributes.add("initialZ", {
    type: "number",
    "default": 0,
    description: "动物的初始位置z"
}), ShadowAnimal.attributes.add("initialRX", {
    type: "number",
    "default": 0,
    description: "动物的初始角度x"
}), ShadowAnimal.attributes.add("initialRY", {
    type: "number",
    "default": 150,
    description: "动物的初始角度y"
}), ShadowAnimal.attributes.add("initialRZ", {
    type: "number",
    "default": 0,
    description: "动物的初始角度z"
}), ShadowAnimal.prototype.initialize = function() {
    this._velocity = new pc.Vec3(this.velocitySpeedX, 0, -this.velocitySpeedZ), this._reverseSpeed = new pc.Vec3(-1, 1, 1), this.gameEntity = this.app.root.findByName("Game"), this.animal = this.app.root.findByName("Animal"), this.shadowHeadImgEntity = this.app.root.findByName("ShadowHeadImg"), this.RY = this.initialRY, this.revivePosition = new pc.Vec3, this.pause = !1, this.revivePositionArray = [], this.app.on("game:pause", this.ballPause, this), this.app.on("shadow:onTap", this.onTurning, this), this.app.on("shadow:initStartPosAndSoOn", this.initStartPosAndSoOn, this), this.app.on("shadow:revive", this.onShadowRevive, this), this.app.on("shadow:enableShadowComponent", this.enableShadowComponent, this), this.app.on("shadow:initShadowPlayAnimalModel", this.initShadowPlayAnimalModel, this), this.app.on("game:reset", this.reset, this), this.app.on("shadow:setHeadImg", this.setHeadImg, this)
}, ShadowAnimal.prototype.swap = function(t) {
    this._velocity = t._velocity, this._reverseSpeed = t._reverseSpeed, this.gameEntity = t.gameEntity, this.animal = t.animal, this.revivePosition = t.revivePosition, this.pause = t.pause, this.RY = t.RY, this.revivePositionArray = t.revivePositionArray, t.app.off("game:pause", this.ballPause, this), this.app.on("game:pause", this.ballPause, this), t.app.off("shadow:onTap", this.onTurning, this), this.app.on("shadow:onTap", this.onTurning, this), t.app.off("shadow:initStartPosAndSoOn", this.initStartPosAndSoOn, this), this.app.on("shadow:initStartPosAndSoOn", this.initStartPosAndSoOn, this), t.app.off("shadow:revive", this.onShadowRevive, this), this.app.on("shadow:revive", this.onShadowRevive, this), t.app.off("shadow:enableShadowComponent", this.enableShadowComponent, this), this.app.on("shadow:enableShadowComponent", this.enableShadowComponent, this), t.app.off("shadow:initShadowPlayAnimalModel", this.initShadowPlayAnimalModel, this), this.app.on("shadow:initShadowPlayAnimalModel", this.initShadowPlayAnimalModel, this), t.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this)
}, ShadowAnimal.prototype.initShadowPlayAnimalModel = function() {
    var t = this.gameEntity.script.shadowSystem.getPlayerAnimal(),
        i = null;
    t === GameManager.CAT ? i = this.gameEntity.script.gameManager.catShadowModel : t === GameManager.BEAR ? i = this.gameEntity.script.gameManager.bearShadowModel : t === GameManager.DRAGON ? i = this.gameEntity.script.gameManager.dragonShadowModel : t === GameManager.LION ? i = this.gameEntity.script.gameManager.lionShadowModel : t === GameManager.PIG && (i = this.gameEntity.script.gameManager.pigShadowModel), this.entity.model.asset = i, this.entity.model.meshInstances[0].setParameter("material_opacity", .4), this.shadowHeadImgEntity.model.meshInstances[0].setParameter("material_opacity", .8)
}, ShadowAnimal.prototype.setHeadImg = function(t) {
    var i = this.app.loader.getHandler("texture");
    i.crossOrigin = "anonymous", this.app.assets.loadFromUrl(t + ".png", "texture", function(t, i) {
        console.log(t), this.shadowHeadImgEntity.model.meshInstances[0].material.diffuseMap = i.resource, this.shadowHeadImgEntity.model.meshInstances[0].material.update()
    }.bind(this))
}, ShadowAnimal.prototype.enableShadowComponent = function() {
    ShadowSystem.isOnShadowChallenge && (this.entity.collision.enabled = !0, this.entity.model.enabled = !0, this.entity.rigidbody.enabled = !0, this.shadowHeadImgEntity.model.enabled = !0)
}, ShadowAnimal.prototype.initStartPosAndSoOn = function(t, i, e, a, s) {
    this.ballPause(), this.stage01MaxSpeed = 10, this.velocitySpeedX = a, this.velocitySpeedZ = 3 * a, this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ), this.app.fire("game:setPlayerAnimalSpeedX", a), s ? this.RY = 150 : (this.RY = 210, this._velocity.mul(this._reverseSpeed)), this.entity.rigidbody.teleport(t, i, e, this.initialRX, this.RY, this.initialRZ), this.revivePositionArray = this.gameEntity.script.shadowSystem.getRevivePosition().slice(0)
}, ShadowAnimal.prototype.reset = function() {
    ShadowSystem.isOnShadowChallenge === !1 ? (this.ballPause(), this.entity.collision.enabled = !1, this.entity.model.enabled = !1, this.entity.rigidbody.enabled = !1, this.shadowHeadImgEntity.model.enabled = !1) : (this.entity.collision.enabled = !0, this.entity.model.enabled = !0, this.entity.rigidbody.enabled = !0, this.shadowHeadImgEntity.model.enabled = !0)
}, ShadowAnimal.prototype.onShadowRevive = function(t, i, e, a, s) {
    this.ballPause(), this.velocitySpeedX = a, this.velocitySpeedZ = 3 * a, this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ), this.RY = 150, this.entity.rigidbody.teleport(t, i, e, this.initialRX, this.RY, this.initialRZ)
}, ShadowAnimal.prototype.update = function(t) {
    if (!GameManager.GAME_PAUSE && ShadowSystem.isOnShadowChallenge) {
        if (this.pause) return void this.fireSetRevivePositionCheck();
        this.velocitySpeedX < this.stage01MaxSpeed ? (this.velocitySpeedX += this.startAcceleration * t, this.velocitySpeedZ += this.startAcceleration * t * 3, this._velocity.x > 0 ? this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ) : this._velocity.set(-this.velocitySpeedX, 0, -this.velocitySpeedZ)) : this.velocitySpeedX < this.maxVelocitySpeedX && (this.velocitySpeedX += this.acceleration * t, this.velocitySpeedZ += this.acceleration * t * 3, this._velocity.x > 0 ? this._velocity.set(this.velocitySpeedX, 0, -this.velocitySpeedZ) : this._velocity.set(-this.velocitySpeedX, 0, -this.velocitySpeedZ)), this.entity.rigidbody.linearVelocity = this._velocity, this.reviveCheck()
    }
}, ShadowAnimal.prototype.reviveCheck = function() {
    if (this.revivePositionArray.length > 0 && this.entity.getPosition().z < this.revivePositionArray[2]) {
        var t = this.revivePositionArray.shift(),
            i = this.revivePositionArray.shift(),
            e = this.revivePositionArray.shift();
        this.revivePosition.set(t, i, e), this.pause = !0
    }
}, ShadowAnimal.prototype.fireSetRevivePositionCheck = function() {
    this.pause === !0 && this.animal.getPosition().z - this.revivePosition.z < 1 && (this.app.fire("shadow:onSetShadowRevivePosition"), this.pause = !1)
}, ShadowAnimal.prototype.ballPause = function() {
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO, this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO
}, ShadowAnimal.prototype.onTurning = function() {
    210 === this.RY ? this.RY = 150 : this.RY = 210;
    var t = this.entity.getPosition();
    this.entity.rigidbody.teleport(t.x, t.y, t.z, this.initialRX, this.RY, this.initialRZ), this.shadowHeadImgEntity.setLocalEulerAngles(102, this.RY, 180), this._velocity.mul(this._reverseSpeed)
};
var ShadowTrigger = pc.createScript("shadowTrigger");
ShadowTrigger.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.positionArray = [], this.entity.collision.on("triggerenter", this.onTriggerEnter, this), this.app.on("game:reset", this.reset, this), this.app.on("shadow:onSetShadowRevivePosition", this.onSetShadowRevivePosition, this), this.app.on("shadow:initFirstTriggerPosition", this.initFirstTriggerPosition, this)
}, ShadowTrigger.prototype.swap = function(i) {
    this.gameEntity = i.gameEntity, this.positionArray = i.positionArray, i.entity.collision.off("triggerenter", this.onTriggerEnter, this), this.entity.collision.on("triggerenter", this.onTriggerEnter, this), i.app.off("game:reset", this.reset, this), this.app.on("game:reset", this.reset, this), i.app.off("shadow:onSetShadowRevivePosition", this.onSetShadowRevivePosition, this), this.app.on("shadow:onSetShadowRevivePosition", this.onSetShadowRevivePosition, this), i.app.off("shadow:initFirstTriggerPosition", this.initFirstTriggerPosition, this), this.app.on("shadow:initFirstTriggerPosition", this.initFirstTriggerPosition, this)
}, ShadowTrigger.prototype.onSetShadowRevivePosition = function() {
    if (ShadowSystem.isOnShadowChallenge !== !1 && this.positionArray.length > 0) {
        var i = this.positionArray.shift(),
            t = this.positionArray.shift(),
            o = this.positionArray.shift(),
            s = this.positionArray.shift(),
            r = !1;
        this.app.fire("shadow:revive", i, t, o, s, r), this.positionArray.length > 0 && (i = this.positionArray.shift(), t = this.positionArray.shift(), o = this.positionArray.shift(), s = this.positionArray.shift(), this.entity.setPosition(i, t, o))
    }
}, ShadowTrigger.prototype.initPositionArray = function() {
    ShadowSystem.isOnShadowChallenge !== !1 && (this.positionArray = [], this.positionArray = this.gameEntity.script.shadowSystem.getPlayerOperation().slice(0))
}, ShadowTrigger.prototype.reset = function() {
    ShadowSystem.isOnShadowChallenge !== !1 && this.initFirstTriggerPosition()
}, ShadowTrigger.prototype.initFirstTriggerPosition = function() {
    if (ShadowSystem.isOnShadowChallenge !== !1) {
        this.initPositionArray();
        for (var i = !0;;) {
            if (!(this.positionArray.length > 0)) break;
            var t = this.positionArray.shift(),
                o = this.positionArray.shift(),
                s = this.positionArray.shift(),
                r = this.positionArray.shift();
            if (i = !i, -5 > s) {
                this.app.fire("shadow:initStartPosAndSoOn", t, o, s, r, i), this.positionArray.length > 0 && (t = this.positionArray.shift(), o = this.positionArray.shift(), s = this.positionArray.shift(), r = this.positionArray.shift(), this.entity.setPosition(t, o, s));
                break
            }
        }
    }
}, ShadowTrigger.prototype.onTriggerEnter = function(i) {
    if (ShadowSystem.isOnShadowChallenge !== !1 && GameManager.GAME_PAUSE === !1 && "ShadowAnimal" === i.name && this.positionArray.length > 0) {
        var t = this.positionArray.shift(),
            o = this.positionArray.shift(),
            s = this.positionArray.shift();
        this.positionArray.shift();
        this.entity.setPosition(t, o, s), this.app.fire("shadow:onTap")
    }
}, ShadowTrigger.prototype.update = function(i) {};
var Setting = pc.createScript("setting");
Setting.prototype.initialize = function() {
    this.mute = !1, this.isAndroid = window.navigator.userAgent.indexOf("Android") > -1, this.gameEntity = this.app.root.findByName("Game"), this.htmlScript = this.gameEntity.script.htmlAndCss, this.load(), this.bindEvents(), this.initDevicePerformence(), this.app.on("setting:showing", this.showing, this)
}, Setting.prototype.showing = function() {
    setTimeout(function() {
        this.htmlScript.fadeInDown($("#setting-wrap")), this.htmlScript.overlayFadeIn($("#bg-overlay"))
    }.bind(this), 100)
}, Setting.prototype.load = function() {
    var t = this.app.assets.findByTag("SettingHtml")[0],
        n = document.createElement("div");
    n.id = "setting-wrap", n.innerHTML = t.resource || "", document.body.appendChild(n), t.on("load", function() {
        n.innerHTML = t.resource
    }), this.app.assets.load(t), t = this.app.assets.findByTag("SettingCss")[0];
    var e = pc.createStyle(t.resource || "");
    document.head.appendChild(e), t.on("load", function() {
        e.innerHTML = t.resource
    }), this.app.assets.load(t)
}, Setting.prototype.bindEvents = function() {
    $("#setting-wrap .btn-close").on("tap", function() {
        this.htmlScript.fadeOutUp($("#setting-wrap")), this.htmlScript.overlayFadeOut($("#bg-overlay"))
    }.bind(this)), $("#setting-wrap .music-btn").on("tap", function() {
        this.mute ? (this.mute = !1, $(".music-btn").css("background-image", "url(http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/setting/ON.png)"), this.gameEntity.sound.enabled = !0) : (this.mute = !0, $(".music-btn").css("background-image", "url(http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/setting/OFF.png)"), this.gameEntity.sound.enabled = !1)
    }.bind(this)), $("#setting-wrap .performence-btn").on("tap", function() {
        GameManager.isHighPerformence ? (GameManager.isHighPerformence = !1, $(".performence-btn").css("background-image", "url(http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/setting/OFF.png)")) : (GameManager.isHighPerformence = !0, $(".performence-btn").css("background-image", "url(http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/setting/ON.png)")), this.htmlScript.hint("游戏开始了才能看到效果哦！")
    }.bind(this))
}, Setting.prototype.initDevicePerformence = function() {
    this.isAndroid ? this.app.graphicsDevice.maxPixelRatio = 1 : ($("#setting-wrap .line").hide(), $("#setting-wrap .performence").hide(), $("#setting-wrap .performence-tip").hide())
}, Setting.prototype.update = function(t) {};
var Message = pc.createScript("message");
Message.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.htmlScript = this.gameEntity.script.htmlAndCss, WeChat.firstComeToday && setTimeout(function() {
        this.tipFlag && $("#message-container .message-red").show(), this.gameEntity.script.htmlAndCss.fadeInDown($("#message-container")), this.htmlScript.overlayFadeIn($("#bg-overlay"))
    }.bind(this), 2e3 + GameManager.initTime), this.app.on("message:show", this.messageShowing, this), this.app.on("message:update", this.messageUpdate, this), this.app.on("message:challengeSuccess", this.sendMessage, this), this.tipEntity = this.app.root.findByTag("Tip"), this.queue = [], this.tipFlag = !1, this.readFlag = !0, this.loadHtml(), this.loadCss(), this.bindSwitchEvent(), this.bindCloseEvent(), this.requestMessageQueue(), this.bindDeleteCloseEvent(), this.bindBackEvent(), this.bindEmptyEvent()
}, Message.prototype.messageUpdate = function() {
    $("#message-container .message-show").empty(), this.tipFlag = !1, this.queue = [], this.requestMessageQueue(), this.readFlag = !0
}, Message.prototype.triggerMessage = function() {
    var e = $("#message-container .rule-btn"),
        s = $("#message-container .message-btn"),
        t = $("#message-container .rule-container"),
        a = $("#message-container .message-container");
    e.removeClass(), s.removeClass(), e.addClass("rule-btn rule-btn-config2"), s.addClass("message-btn message-btn-config1 btn-select"), t.hide(), a.show(), this.readFlag && (this.readFlag = !1, this.updateAllRead(), this.tipEntity[0].enabled = !1, this.tipEntity[1].enabled = !1, $("#message-container .message-red").hide())
}, Message.prototype.triggerRule = function() {
    var e = $("#message-container .rule-btn"),
        s = $("#message-container .message-btn"),
        t = $("#message-container .rule-container"),
        a = $("#message-container .message-container");
    e.removeClass(), s.removeClass(), e.addClass("rule-btn btn-select rule-btn-config1"), s.addClass("message-btn message-btn-config2"), t.show(), a.hide()
}, Message.prototype.bindSwitchEvent = function() {
    var e = $("#message-container .rule-btn"),
        s = $("#message-container .message-btn");
    e.on("tap", function() {
        e.hasClass("btn-select") || this.triggerRule()
    }.bind(this)), s.on("tap", function() {
        s.hasClass("btn-select") || this.triggerMessage()
    }.bind(this))
}, Message.prototype.messageShowing = function() {
    this.gameEntity.script.htmlAndCss.fadeInDown($("#message-container")), this.htmlScript.overlayFadeIn($("#bg-overlay")), this.tipFlag && this.triggerMessage()
}, Message.prototype.sendMessage = function() {
    var e = this,
        s = this.gameEntity.script.shadowSystem.getShadowPlayerInfo(),
        t = this.gameEntity.script.shadowSystem.getShadowPlayerScore(),
        a = this.gameEntity.script.gameManager.getLocalScore(),
        n = s.openid,
        i = (new Date).Format("yyyy-MM-dd hh:mm:ss"),
        o = {
            challenger_score: a,
            challenger_name: WeChat.userInfoData.nickname,
            challenger_img: WeChat.userInfoData.headimgurl,
            shadow_score: t,
            shadow_name: s.nickname,
            shadow_img: s.headimgurl
        };
    $.ajax({
        url: WeChat.GAME_DOMAIN + "set_challenge_msg",
        type: "POST",
        dataType: "JSON",
        data: {
            game_id: WeChat.GAME_ID,
            openid: n,
            challenger_id: WeChat.openId,
            create_time: i,
            status: "wait",
            content: o
        },
        timeout: WeChat.TIMEOUT,
        success: function(s) {
            s = JSON.parse(s), 0 === s.code ? e.gameEntity.script.hintText.hint("挑战成功！已告知好友！") : e.gameEntity.script.hintText.hint("挑战消息发送失败！")
        },
        error: WeChat.errorCallbackFunction
    })
}, Message.prototype.initTip = function() {
    this.tipFlag && (this.tipEntity[0].enabled = !0, this.tipEntity[1].enabled = !0)
}, Message.prototype.bindEmptyEvent = function() {
    var e = this;
    $("#message-container .empty-message").on("tap", function() {
        e.bindEmptyCallback()
    })
}, Message.prototype.bindEmptyCallback = function() {
    var e = this;
    $("#message-container .sure-all").show(), this.htmlScript.fadeInDown($("#message-container .message-sure")), this.htmlScript.overlayFadeIn($("#message-container .message-mask")), $("#message-container .sure-btn").off(), $("#message-container .sure-btn").one("tap", function() {
        $.ajax({
            url: "http://www.inyyj.com/update_challenge_msg",
            type: "POST",
            dataType: "JSON",
            data: {
                openid: WeChat.openId,
                game_id: WeChat.GAME_ID,
                msg_id: e.queue,
                status: "delete"
            },
            timeout: WeChat.TIMEOUT,
            success: function(e) {}
        }), $("#message-container .message-show").empty(), $("#message-container .message-total").text(0), $("#message-container .message-show").hide(), $("#message-container .empty-show").show(), $("#message-container .message-sure").hide(), $("#message-container .message-mask").hide(), $("#message-container .sure-all").hide(), $("#message-container .empty-message").hide()
    })
}, Message.prototype.bindBackEvent = function() {
    $("#message-container .detail-back").on("tap", function() {
        this.gameEntity.script.htmlAndCss.fadeOutUp($("#message-container .message-detail"))
    }.bind(this))
}, Message.prototype.bindDeleteEvent = function() {
    var e = this;
    $("#message-container .message-delete").on("tap", function() {
        var s = $(this).parent(),
            t = s.attr("data-id");
        e.bindDeleteCallback(t, s)
    })
}, Message.prototype.bindDeleteCallback = function(e, s) {
    $("#message-container .sure-one").show(), this.htmlScript.fadeInDown($("#message-container .message-sure")), this.htmlScript.overlayFadeIn($("#message-container .message-mask")), $("#message-container .sure-btn").off(), $("#message-container .sure-btn").one("tap", function() {
        $.ajax({
            url: "http://www.inyyj.com/update_challenge_msg",
            type: "POST",
            dataType: "JSON",
            data: {
                openid: WeChat.openId,
                game_id: WeChat.GAME_ID,
                msg_id: [e],
                status: "delete"
            },
            timeout: WeChat.TIMEOUT,
            success: function(e) {}
        }), s.addClass("bounceOutRight animated");
        for (var t = s.index() + 1, a = $("#message-container .message-list").length; a > t; t++) $($("#message-container .message-list")[t]).addClass("bounceTop animated");
        setTimeout(function() {
            for (t = s.index() + 1, a = $("#message-container .message-list").length; a > t; t++) $($("#message-container .message-list")[t]).removeClass("bounceTop animated");
            s.remove()
        }, HtmlAndCss.animationTime);
        var n = parseInt($("#message-container .message-total").text());
        0 !== n && (n--, $("#message-container .message-total").text(n), 0 === n && ($("#message-container .message-show").hide(), $("#message-container .empty-show").show(), $("#message-container .empty-message").hide())), $("#message-container .sure-one").hide(), $("#message-container .message-sure").hide(), $("#message-container .message-mask").hide()
    })
}, Message.prototype.bindDeleteCloseEvent = function() {
    $("#message-container .sure-close-btn").on("tap", function() {
        $("#message-container .sure-one").hide(), $("#message-container .sure-all").hide(), $("#message-container .message-sure").hide(), $("#message-container .message-mask").hide()
    })
}, Message.prototype.requestMessageQueue = function() {
    var e = this;
    $.ajax({
        url: "http://www.inyyj.com/get_challenge_msg",
        type: "POST",
        dataType: "JSON",
        data: {
            openid: WeChat.openId,
            game_id: WeChat.GAME_ID
        },
        timeout: WeChat.TIMEOUT,
        success: function(s) {
            if (s = JSON.parse(s), 0 === s.code) {
                var t = s.msg,
                    a = t.length;
                if (0 === a) $("#message-container .message-show").hide(), $("#message-container .empty-show").show(), $("#message-container .message-banner .message-total").text(0), $("#message-container .empty-message").hide();
                else {
                    $("#message-container .message-banner .message-total").text(a), $("#message-container .empty-show").hide(), $("#message-container .message-show").show(), $("#message-container .empty-message").show();
                    for (var n = ""; a--;) n += '<div class="message-list" data-id="', n += t[a]._id, e.queue.push(t[a]._id), n += '"><div class="message-icon"></div><div class="message-summary"><p class="summary-title">', n += "挑战消息", n += '</p><p class="summary-description">您的好友（', n += t[a].content.challenger_name, n += '）成功超越了您。</p></div><div class="message-delete"></div></div>', "wait" == t[a].status && (e.tipFlag = !0);
                    $("#message-container .message-show").append(n), e.bindDeleteEvent(), e.bindListTap(t), e.initTip()
                }
            }
        }
    })
}, Message.prototype.updateAllRead = function() {
    var e = this;
    $.ajax({
        url: "http://www.inyyj.com/update_challenge_msg",
        type: "POST",
        dataType: "JSON",
        data: {
            openid: WeChat.openId,
            game_id: WeChat.GAME_ID,
            msg_id: e.queue,
            status: "read"
        },
        timeout: WeChat.TIMEOUT,
        success: function(e) {}
    })
}, Message.prototype.bindListTap = function(e) {
    var s = this;
    $("#message-container .message-summary").on("tap", function() {
        for (var t = $(this).parent(), a = t.attr("data-id"), n = e.length; n--;)
            if (a == e[n]._id) {
                var i = e[n].content;
                $("#message-container .message-friend").text(i.challenger_name), $("#message-container .left-content .role-name").text(i.challenger_name), $("#message-container .left-content .role-score").text(i.challenger_score), $("#message-container .left-content .role-img").css("background-image", "url(" + i.challenger_img + ")"), $("#message-container .right-content .role-name").text(i.shadow_name), $("#message-container .right-content .role-score").text(i.shadow_score), $("#message-container .right-content .role-img").css("background-image", "url(" + i.shadow_img + ")"), s.htmlScript.fadeInDown($("#message-container .message-detail"));
                break
            }
    })
}, Message.prototype.bindCloseEvent = function() {
    $("#message-container .close-btn").on("tap", function() {
        this.gameEntity.script.htmlAndCss.fadeOutUp($("#message-container")), this.htmlScript.overlayFadeOut($("#bg-overlay"))
    }.bind(this))
}, Message.prototype.loadHtml = function() {
    var e = this.app.assets.findByTag("MessageHtml")[0],
        s = document.createElement("div");
    s.id = "message-container", s.innerHTML = e.resource || "", document.body.appendChild(s), e.on("load", function() {
        s.innerHTML = e.resource
    }), this.app.assets.load(e)
}, Message.prototype.loadCss = function() {
    var e = this.app.assets.findByTag("MessageCss")[0],
        s = pc.createStyle(e.resource || "");
    document.head.appendChild(s), e.on("load", function() {
        s.innerHTML = e.resource
    }), this.app.assets.load(e)
}, Message.prototype.update = function(e) {};
var HintText = pc.createScript("hintText");
HintText.prototype.initialize = function() {
    this.gameEntity = this.app.root.findByName("Game"), this.loadHintTextHtml(), this.loadHintTextCss(), $("#hint-text-container").hide()
}, HintText.prototype.loadHintTextHtml = function() {
    var t = this.app.assets.findByTag("HintTextHtml")[0],
        e = document.createElement("div");
    e.id = "hint-text-container", e.innerHTML = t.resource || "", document.body.appendChild(e), t.on("load", function() {
        e.innerHTML = t.resource
    }), this.app.assets.load(t)
}, HintText.prototype.hint = function(t) {
    $("#hint-text-container #hint-text").text(t), this.gameEntity.script.htmlAndCss.overlayFadeIn($("#hint-text-container")), setTimeout(function() {
        this.gameEntity.script.htmlAndCss.overlayFadeOut($("#hint-text-container"))
    }.bind(this), 1e3)
}, HintText.prototype.loadHintTextCss = function() {
    var t = this.app.assets.findByTag("HintTextCss")[0],
        e = pc.createStyle(t.resource || "");
    document.head.appendChild(e), t.on("load", function() {
        e.innerHTML = t.resource
    }), this.app.assets.load(t)
}, HintText.prototype.update = function(t) {};
var AutoLoadImg = pc.createScript("autoLoadImg");
AutoLoadImg.prototype.initialize = function() {
    this.imgs = ["http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/code.jpg", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/red.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/leftBtn1.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/leftBtn2.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/rightBtn1.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/rightBtn2.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/empty-message.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/tips.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/message-icon.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/message-delete.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/back.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/lose-img.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/vs.png", "http://24haowan-cdn.shanyougame.com/PlayCanvas/CommonUI/message/closeBtn.png"];
    for (var a = this.imgs.length; a--;) {
        var n = new Image;
        n.src = this.imgs[a]
    }
}, AutoLoadImg.prototype.update = function(a) {};