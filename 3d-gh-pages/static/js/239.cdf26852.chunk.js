(self.webpackChunk_3d_examples = self.webpackChunk_3d_examples || []).push([
    [239], {
        1239: function (e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function () {
                    return K
                }
            });
            var n = t(5671),
                i = t(3144),
                r = t(136),
                s = t(4062),
                o = t(7313),
                l = t(3562),
                c = t(2518),
                d = t(6892),
                m = t(9737),
                u = t(7544),
                p = t(5371),
                f = t(5719),
                h = t.n(f),
                v = t(1935),
                g = t(6938),
                x = t(7107),
                y = t(8307),
                w = {
                    backgroundColor: "transparent",
                    color: ["#03c03c", "#00e6f6", "#8ae66e", "#ff013c", "#f9f002"],
                    textStyle: {
                        color: "#f9f002"
                    },
                    title: {
                        text: "Kepler-90 Planetary System",
                        textStyle: {
                            color: "#f9f002",
                            fontWeight: "normal"
                        }
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: !0,
                        borderColor: "f9f002",
                        show: !1
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: !1,
                        data: ["90a", "90b", "90c", "90i", "90s", "90v", "90z"],
                        color: "#f9f002"
                    }],
                    yAxis: [{
                        type: "value",
                        color: "#f9f002"
                    }],
                    series: [{
                        name: "Email",
                        type: "line",
                        stack: "Total",
                        emphasis: {
                            focus: "series"
                        },
                        data: [120, 132, 101, 134, 90, 230, 210],
                        showSymbol: !1
                    }, {
                        name: "Union Ads",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series"
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    }, {
                        name: "Video Ads",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series"
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    }, {
                        name: "Direct",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series"
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }, {
                        name: "Search Engine",
                        type: "line",
                        stack: "Total",
                        label: {
                            show: !0,
                            position: "top"
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: "series"
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 2400]
                    }]
                },
                b = {
                    backgroundColor: "transparent",
                    color: ["#000000", "#00e6f6", "#8ae66e", "#ff013c"],
                    textStyle: {
                        color: "#000000"
                    },
                    series: [{
                        name: "Kepler-90 Planetary system",
                        type: "pie",
                        radius: [25, 100],
                        center: ["50%", "50%"],
                        roseType: "area",
                        itemStyle: {
                            borderRadius: 4
                        },
                        data: [{
                            value: 40,
                            name: "Kepler-90a"
                        }, {
                            value: 38,
                            name: "Kepler-90b"
                        }, {
                            value: 32,
                            name: "Kepler-90c"
                        }, {
                            value: 30,
                            name: "Kepler-90i"
                        }, {
                            value: 28,
                            name: "Kepler-90m"
                        }, {
                            value: 26,
                            name: "Kepler-90s"
                        }, {
                            value: 22,
                            name: "Kepler-90t"
                        }, {
                            value: 18,
                            name: "Kepler-90z"
                        }],
                        label: {
                            color: "#000000"
                        }
                    }]
                },
                S = {
                    backgroundColor: "transparent",
                    color: ["#f9f002", "#00e6f6", "#8ae66e", "#ff013c"],
                    dataset: {
                        source: [
                            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
                            ["90a", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                            ["90i", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                            ["90t", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                            ["90z", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                        ]
                    },
                    series: [{
                        type: "pie",
                        radius: "20%",
                        center: ["25%", "30%"],
                        label: {
                            color: "#f9f002"
                        }
                    }, {
                        type: "pie",
                        radius: "20%",
                        center: ["75%", "30%"],
                        encode: {
                            itemName: "product",
                            value: "2013"
                        },
                        label: {
                            color: "#f9f002"
                        }
                    }, {
                        type: "pie",
                        radius: "20%",
                        center: ["25%", "75%"],
                        encode: {
                            itemName: "product",
                            value: "2014"
                        },
                        label: {
                            color: "#f9f002"
                        }
                    }, {
                        type: "pie",
                        radius: "20%",
                        center: ["75%", "75%"],
                        encode: {
                            itemName: "product",
                            value: "2015"
                        },
                        label: {
                            color: "#f9f002"
                        }
                    }]
                },
                N = {
                    backgroundColor: "transparent",
                    color: ["#000000", "#00e6f6", "#8ae66e", "#ff013c"],
                    textStyle: {
                        color: "#f9f002"
                    },
                    angleAxis: {
                        max: 2,
                        startAngle: 30,
                        splitLine: {
                            show: !1
                        }
                    },
                    radiusAxis: {
                        type: "category",
                        data: ["v", "w", "x", "y", "z"],
                        z: 10
                    },
                    polar: {},
                    series: [{
                        type: "bar",
                        data: [4, 3, 2, 1, 0],
                        coordinateSystem: "polar",
                        name: "Without Round Cap",
                        itemStyle: {
                            borderColor: "red",
                            opacity: .8,
                            borderWidth: 1
                        }
                    }, {
                        type: "bar",
                        data: [4, 3, 2, 1, 0],
                        coordinateSystem: "polar",
                        name: "With Round Cap",
                        roundCap: !0,
                        itemStyle: {
                            borderColor: "green",
                            opacity: .8,
                            borderWidth: 1
                        }
                    }]
                },
                j = {
                    backgroundColor: "transparent",
                    textStyle: {
                        color: "#000000"
                    },
                    title: {
                        text: "Cyberpunk 2077 Fantastic",
                        textStyle: {
                            color: "#000000"
                        }
                    },
                    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            label: {
                                backgroundColor: "#6a7985"
                            }
                        }
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: !0
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: !1,
                        data: ["90a", "90b", "90i", "90s", "90t", "90v", "90z"]
                    }],
                    yAxis: [{
                        type: "value"
                    }],
                    series: [{
                        name: "Line 1",
                        type: "line",
                        stack: "Total",
                        smooth: !0,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: !1,
                        areaStyle: {
                            opacity: .8,
                            color: new y.Z(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgb(128, 255, 165)"
                            }, {
                                offset: 1,
                                color: "rgb(1, 191, 236)"
                            }])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: [140, 232, 101, 264, 90, 340, 250]
                    }, {
                        name: "Line 2",
                        type: "line",
                        stack: "Total",
                        smooth: !0,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: !1,
                        areaStyle: {
                            opacity: .8,
                            color: new y.Z(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgb(0, 221, 255)"
                            }, {
                                offset: 1,
                                color: "rgb(77, 119, 255)"
                            }])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: [120, 282, 111, 234, 220, 340, 310]
                    }, {
                        name: "Line 3",
                        type: "line",
                        stack: "Total",
                        smooth: !0,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: !1,
                        areaStyle: {
                            opacity: .8,
                            color: new y.Z(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgb(55, 162, 255)"
                            }, {
                                offset: 1,
                                color: "rgb(116, 21, 219)"
                            }])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: [320, 132, 201, 334, 190, 130, 220]
                    }, {
                        name: "Line 4",
                        type: "line",
                        stack: "Total",
                        smooth: !0,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: !1,
                        areaStyle: {
                            opacity: .8,
                            color: new y.Z(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgb(255, 0, 135)"
                            }, {
                                offset: 1,
                                color: "rgb(135, 0, 157)"
                            }])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: [220, 402, 231, 134, 190, 230, 120]
                    }, {
                        name: "Line 5",
                        type: "line",
                        stack: "Total",
                        smooth: !0,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: !1,
                        label: {
                            show: !0,
                            position: "top"
                        },
                        areaStyle: {
                            opacity: .8,
                            color: new y.Z(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgb(255, 191, 0)"
                            }, {
                                offset: 1,
                                color: "rgb(224, 62, 76)"
                            }])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: [220, 302, 181, 234, 210, 290, 150]
                    }]
                },
                C = {
                    1: "\u6708",
                    2: "\u706b",
                    3: "\u6c34",
                    4: "\u6728",
                    5: "\u91d1",
                    6: "\u571f",
                    7: "\u65e5"
                },
                k = ["\u592a\u7a7a\u91cc\u5f88\u6696\u548c\uff0c\u50cf\u5c0f\u4e3b\u4eba\u62b1\u6211\u7684\u6e29\u5ea6\uff0c37.5\u2103", "\u4e0d\u8981\u6362\u53f0\uff0c\u4e0d\u8981\u8d70\u5f00\uff0c\u661f\u9645\u76f4\u64ad\u9a6c\u4e0a\u56de\u6765", "\u7231\uff0c\u5c31\u662f\u7ec4\u6210\u6211\u7684\u5143\u4ef6", "\u4eba\u7c7b\u5bf9\u5b64\u72ec\u7684\u7406\u89e3\u662f\u6709\u9650\u7684\uff0c\u5bf9\u7231\u7684\u8be0\u91ca\u662f\u65e0\u9650\u7684", "\u6211\u4f1a\u98de\u5f97\u66f4\u9ad8", "\u6211\u7684\u4e00\u5c0f\u6b65\uff0c\u89c1\u8bc1\u53cb\u8c0a\u7684\u4e00\u5927\u6b65", "\u91ca\u653e\u6211\u70ed\u70c8\u7684\u7231", "\u5475\uff0c\u4f60\u548b\u4e0d\u4e0a\u5929\u5462", "\u6bd4\u673a\u5668\u4eba\u66f4\u7231\u673a\u5668\uff0c\u6bd4\u5b87\u822a\u5458\u66f4\u7231\u5b87\u822a\uff0c\u8fd9\u662f\u79cd\u4e25\u8083\u7684\u81ea\u6211\u8ba4\u77e5", "\u628a\u4f60\u9001\u56de\u592a\u7a7a\u597d\u5417", "\u7528\u6574\u4e2a\u7075\u9b42\u5411\u4f60\u6bd4\u5fc3", "\u518d\u6e3a\u5c0f\u7684\u5fc3\u613f\uff0c\u94f6\u6cb3\u7cfb\u90fd\u6709\u5b83\u7684\u5bb9\u8eab\u4e4b\u6240", "Yeah\uff0c\u653e\u98de\u81ea\u6211", "\u5730\u7403\u751f\u5b58\uff0chard\u6a21\u5f0f"],
                P = t(4040),
                _ = t(3207),
                M = t(7101),
                z = t(9444),
                T = t(3902),
                L = t(4963),
                R = t(1749),
                I = t(4149),
                D = t(1137),
                A = t(698),
                F = t(5548),
                O = t(6275),
                U = t(2778),
                E = t(833),
                B = t(5259),
                H = t(2045),
                Z = t(6417);
            P.D([L.N, R.N, I.N, D.N, A.N, M.N, E.T, B.z, H.N, F.N, O.N, U.N, z.N, T.N]);
            var K = function (e) {
                (0, r.Z)(t, e);
                var a = (0, s.Z)(t);

                function t() {
                    var e;
                    (0, n.Z)(this, t);
                    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return (e = a.call.apply(a, [this].concat(r))).state = {
                        week: C[(new Date).getDay()],
                        time: "00:00:00",
                        showModal: !1,
                        modelText: k[0],
                        renderGlithPass: !1
                    }, e.initThree = function () {
                        var a, t = new l.xsS,
                            n = new l.cPb(45, window.innerWidth / window.innerHeight, .01, 50);
                        n.position.set(0, 0, 15.5);
                        var i = new l.CP7({
                            canvas: document.querySelector("canvas.webgl"),
                            antialias: !0,
                            alpha: !0
                        });
                        i.setSize(window.innerWidth, window.innerHeight), i.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                        var r = new v.xC(i);
                        r.addPass(new g.C(t, n));
                        var s = new x.C;
                        r.addPass(s);
                        var o = new c.z(n, i.domElement);
                        o.enableDamping = !0, o.enablePan = !1;
                        for (var f = {
                                colors: {
                                    base: "#f9f002",
                                    gradInner: "#8ae66e",
                                    gradOuter: "#03c03c"
                                },
                                reset: function () {
                                    o.reset()
                                }
                            }, y = [], w = [], b = 0; b < 10; b++) y.push({
                            impactPosition: (new l.Pa4).random().subScalar(.5).setLength(5),
                            impactMaxRadius: 5 * l.ZX$.randFloat(.5, .75),
                            impactRatio: 0,
                            prevPosition: (new l.Pa4).random().subScalar(.5).setLength(5),
                            trailRatio: {
                                value: 0
                            },
                            trailLength: {
                                value: 0
                            }
                        }), z(b);
                        for (var S = {
                                impacts: {
                                    value: y
                                },
                                maxSize: {
                                    value: .04
                                },
                                minSize: {
                                    value: .025
                                },
                                waveHeight: {
                                    value: .1
                                },
                                scaling: {
                                    value: 1
                                },
                                gradInner: {
                                    value: new l.Ilk(f.colors.gradInner)
                                },
                                gradOuter: {
                                    value: new l.Ilk(f.colors.gradOuter)
                                }
                            }, N = [], j = function (e) {
                                N.push({
                                    runTween: function () {
                                        var a = w[e],
                                            t = a.geometry.attributes.lineDistance.array[99] / 3,
                                            n = new d.w.Tween({
                                                value: 0
                                            }).to({
                                                value: 1
                                            }, 1e3 * t).onUpdate((function (a) {
                                                y[e].trailRatio.value = a.value
                                            })),
                                            i = new d.w.Tween({
                                                value: 0
                                            }).to({
                                                value: 1
                                            }, l.ZX$.randInt(2500, 5e3)).onUpdate((function (a) {
                                                S.impacts.value[e].impactRatio = a.value
                                            })).onComplete((function (t) {
                                                y[e].prevPosition.copy(y[e].impactPosition), y[e].impactPosition.random().subScalar(.5).setLength(5), T(a, y[e].prevPosition, y[e].impactPosition, 1), S.impacts.value[e].impactMaxRadius = 5 * l.ZX$.randFloat(.5, .75), N[e].runTween()
                                            }));
                                        n.chain(i), n.start()
                                    }
                                })
                            }, C = 0; C < 10; C++) j(C);
                        N.forEach((function (e) {
                                e.runTween()
                            })),
                            function () {
                                for (var e = new l.Tme, n = new l.Pa4, i = new l.$V, r = [], s = (new l.dpR).load(p), o = 0, c = Math.PI * (3 - Math.sqrt(5)), d = 2 / 75e3, u = 0, h = 1 - d / 2, v = 0; v < 75e3; v++) {
                                    o = Math.sqrt(1 - h * h), n.set(Math.cos(u) * o, h, -Math.sin(u) * o).multiplyScalar(5), h -= d, u += c, i.setFromVector3(n), e.lookAt(n), e.updateMatrix();
                                    var g = new l._12(1, 1);
                                    g.applyMatrix4(e.matrix), g.translate(n.x, n.y, n.z);
                                    var x = [n.x, n.y, n.z, n.x, n.y, n.z, n.x, n.y, n.z, n.x, n.y, n.z],
                                        y = new l.FM8((i.theta + Math.PI) / (2 * Math.PI), 1 - i.phi / Math.PI),
                                        b = [y.x, y.y, y.x, y.y, y.x, y.y, y.x, y.y];
                                    g.setAttribute("center", new l.a$l(x, 3)), g.setAttribute("baseUv", new l.a$l(b, 2)), r.push(g)
                                }
                                var N = (0, m.qf)(r),
                                    j = new l.vBJ({
                                        color: new l.Ilk(f.colors.base),
                                        onBeforeCompile: function (e) {
                                            e.uniforms.impacts = S.impacts, e.uniforms.maxSize = S.maxSize, e.uniforms.minSize = S.minSize, e.uniforms.waveHeight = S.waveHeight, e.uniforms.scaling = S.scaling, e.uniforms.gradInner = S.gradInner, e.uniforms.gradOuter = S.gradOuter, e.uniforms.tex = {
                                                value: s
                                            }, e.vertexShader = "\n            struct impact {\n              vec3 impactPosition;\n              float impactMaxRadius;\n              float impactRatio;\n            };\n            uniform impact impacts[".concat(10, "];\n            uniform sampler2D tex;\n            uniform float maxSize;\n            uniform float minSize;\n            uniform float waveHeight;\n            uniform float scaling;\n\n            attribute vec3 center;\n            attribute vec2 baseUv;\n\n            varying float vFinalStep;\n            varying float vMap;\n\n            ").concat(e.vertexShader, "\n          ").replace("#include <begin_vertex>", "#include <begin_vertex>\n            float finalStep = 0.0;\n            for (int i = 0; i < ".concat(10, ";i++){\n              float dist = distance(center, impacts[i].impactPosition);\n              float curRadius = impacts[i].impactMaxRadius * impacts[i].impactRatio;\n              float sstep = smoothstep(0., curRadius, dist) - smoothstep(curRadius - ( 0.25 * impacts[i].impactRatio ), curRadius, dist);\n              sstep *= 1. - impacts[i].impactRatio;\n              finalStep += sstep;\n            }\n            finalStep = clamp(finalStep, 0., 1.);\n            vFinalStep = finalStep;\n\n            float map = texture(tex, baseUv).g;\n            vMap = map;\n            float pSize = map < 0.5 ? maxSize : minSize;\n            float scale = scaling;\n\n            transformed = (position - center) * pSize * mix(1., scale * 1.25, finalStep) + center; // scale on wave\n            transformed += normal * finalStep * waveHeight; // lift on wave\n            ")), e.fragmentShader = "\n            uniform vec3 gradInner;\n            uniform vec3 gradOuter;\n            varying float vFinalStep;\n            varying float vMap;\n            ".concat(e.fragmentShader, "\n            ").replace("vec4 diffuseColor = vec4( diffuse, opacity );", "\n            // shaping the point, pretty much from The Book of Shaders\n            vec2 hUv = (vUv - 0.5);\n            int N = 8;\n            float a = atan(hUv.x,hUv.y);\n            float r = PI2/float(N);\n            float d = cos(floor(.5+a/r)*r-a)*length(hUv);\n            float f = cos(PI / float(N)) * 0.5;\n            if (d > f) discard;\n\n            vec3 grad = mix(gradInner, gradOuter, clamp( d / f, 0., 1.)); // gradient\n            vec3 diffuseMap = diffuse * ((vMap > 0.5) ? 0.5 : 1.);\n            vec3 col = mix(diffuseMap, grad, vFinalStep); // color on wave\n            //if (!gl_FrontFacing) col *= 0.25; // moderate the color on backside\n            vec4 diffuseColor = vec4( col , opacity );\n            ")
                                        }
                                    });
                                j.defines = {
                                    USE_UV: ""
                                }, (a = new l.Kj0(N, j)).rotation.y = Math.PI, w.forEach((function (e) {
                                    a.add(e)
                                })), a.position.set(0, -.4, 0), t.add(a)
                            }(), window.addEventListener("resize", (function () {
                                n.aspect = window.innerWidth / window.innerHeight, n.updateProjectionMatrix(), i.setSize(window.innerWidth, window.innerHeight), r.setSize(window.innerWidth, window.innerHeight)
                            }));
                        var P = new u.XS;
                        P.add(S.maxSize, "value", .01, .06).step(.001).name("\u9646\u5730"), P.add(S.minSize, "value", .01, .06).step(.001).name("\u6d77\u6d0b"), P.add(S.waveHeight, "value", .1, 1).step(.001).name("\u6d6a\u9ad8"), P.add(S.scaling, "value", 1, 5).step(.01).name("\u8303\u56f4"), P.addColor(f.colors, "base").name("\u57fa\u7840\u8272").onChange((function (e) {
                            a && a.material.color.set(e)
                        })), P.addColor(f.colors, "gradInner").name("\u6e10\u53d8\u5185").onChange((function (e) {
                            S.gradInner.value.set(e)
                        })), P.addColor(f.colors, "gradOuter").name("\u6e10\u53d8\u5916").onChange((function (e) {
                            S.gradOuter.value.set(e)
                        })), P.add(f, "reset").name("\u91cd\u7f6e"), P.hide(), i.setAnimationLoop((function (s) {
                            d.w.update(), a.rotation.y += .001, i.render(t, n), e.state.renderGlithPass && r.render()
                        }));
                        var _ = new l.iMs,
                            M = new l.FM8;

                        function z(e) {
                            var a = new Array(300).fill(0),
                                t = new l.u9r;
                            t.setAttribute("position", new l.a$l(a, 3));
                            var n = new l.FT0({
                                    color: f.colors.gradOuter,
                                    transparent: !0,
                                    onBeforeCompile: function (a) {
                                        a.uniforms.actionRatio = y[e].trailRatio, a.uniforms.lineLength = y[e].trailLength, a.fragmentShader = h()
                                    }
                                }),
                                i = new l.x12(t, n);
                            i.userData.idx = e, T(i, y[e].prevPosition, y[e].impactPosition, 1), w.push(i)
                        }

                        function T(e, a, t, n, i) {
                            var r = e.geometry.attributes.position,
                                s = r.count - 1,
                                o = i || 1,
                                c = n || 1,
                                d = a.length(),
                                m = a.angleTo(t),
                                u = d * m / Math.PI,
                                p = .5 * u / o,
                                f = c / u,
                                h = a.length() + p,
                                v = (new l.Pa4).copy(a).setLength(h),
                                g = (new l.Pa4).copy(a).negate().setLength(p),
                                x = new l.CJI(a, t, new l.Pa4),
                                w = new l.Pa4;
                            x.getNormal(w);
                            for (var b = new l.Pa4, S = new l.Pa4, N = new l.Pa4, j = new l.Pa4, C = 0; C <= s; C++) {
                                var k = C / s,
                                    P = m * k;
                                b.copy(v).applyAxisAngle(w, P), S.copy(g).applyAxisAngle(w, P + 2 * Math.PI * k * o), N.addVectors(b, S);
                                var _ = (N.length() - d) * f + d;
                                j.copy(N).setLength(_), r.setXYZ(C, j.x, j.y, j.z)
                            }
                            r.needsUpdate = !0, e.computeLineDistances(), e.geometry.attributes.lineDistance.needsUpdate = !0, y[e.userData.idx].trailLength.value = e.geometry.attributes.lineDistance.array[99], e.material.dashSize = 3
                        }
                        window.addEventListener("dblclick", (function (t) {
                            M.x = t.clientX / window.innerWidth * 2 - 1, M.y = -t.clientY / window.innerHeight * 2 + 1, _.setFromCamera(M, n), _.intersectObjects(a.children).length > 0 && e.setState({
                                showModal: !0,
                                modelText: k[Math.floor(Math.random() * k.length)]
                            })
                        }), !1)
                    }, e.initChart = function () {
                        var e = _.S1(document.getElementsByClassName("chart_1")[0], "dark");
                        e && e.setOption(w);
                        var a = _.S1(document.getElementsByClassName("chart_2")[0], "dark");
                        a && a.setOption(b);
                        var t = _.S1(document.getElementsByClassName("chart_3")[0], "dark");
                        t && t.setOption(S);
                        var n = _.S1(document.getElementsByClassName("chart_4")[0], "dark");
                        n && n.setOption(N);
                        var i = _.S1(document.getElementsByClassName("chart_5")[0], "dark");
                        i && i.setOption(j)
                    }, e.updateTime = function () {
                        e.timeInterval = setInterval((function () {
                            var a = new Date,
                                t = a.getHours(),
                                n = a.getMinutes(),
                                i = a.getSeconds(),
                                r = "".concat(t < 10 ? "0" + t : t, ":").concat(n < 10 ? "0" + n : n, ":").concat(i < 10 ? "0" + i : i);
                            e.setState({
                                time: r
                            })
                        }), 1e3)
                    }, e.handleModalClick = function () {
                        setTimeout((function () {
                            e.setState({
                                showModal: !1
                            })
                        }))
                    }, e.handleStartButtonClick = function () {
                        e.setState({
                            renderGlithPass: !e.state.renderGlithPass
                        })
                    }, e
                }
                return (0, i.Z)(t, [{
                    key: "componentDidMount",
                    value: function () {
                        this.initThree(), this.initChart(), this.updateTime()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.timeInterval && clearInterval(this.timeInterval)
                    }
                }, {
                    key: "render",
                    value: function () {
                        return (0, Z.jsxs)("div", {
                            className: "earth_digital",
                            children: [(0, Z.jsx)("canvas", {
                                className: "webgl"
                            }), (0, Z.jsxs)("div", {
                                className: "tips_modal",
                                style: {
                                    display: this.state.showModal ? "block" : "none"
                                },
                                children: [(0, Z.jsx)("div", {
                                    className: "tips",
                                    children: (0, Z.jsx)("p", {
                                        className: "text",
                                        children: this.state.modelText
                                    })
                                }), (0, Z.jsx)("i", {
                                    className: "close",
                                    onClick: this.handleModalClick.bind(this),
                                    children: "CLOSE"
                                })]
                            }), (0, Z.jsxs)("header", {
                                className: "hud header",
                                children: [(0, Z.jsx)("div", {
                                    className: "left",
                                    children: (0, Z.jsxs)("p", {
                                        className: "date",
                                        children: [(0, Z.jsx)("span", {
                                            className: "text",
                                            children: "".concat(this.state.week, "\u66dc\u65e5")
                                        }), (0, Z.jsx)("span", {
                                            className: "text",
                                            children: this.state.time
                                        }), (0, Z.jsx)("span", {
                                            className: "text",
                                            children: "Kepler-90 +49\xb018\u203218.58\u2033"
                                        })]
                                    })
                                }), (0, Z.jsx)("div", {
                                    className: "middle"
                                }), (0, Z.jsx)("div", {
                                    className: "right"
                                })]
                            }), (0, Z.jsxs)("a", {
                                className: "link",
                                href: "https://github.com/dragonir/3d",
                                target: "_blank",
                                rel: "noreferrer",
                                title: "https://github.com/dragonir/3d",
                                children: [(0, Z.jsx)("span", {
                                    className: "author",
                                    children: "DRAGONIR"
                                }), (0, Z.jsx)("svg", {
                                    className: "github",
                                    height: "32",
                                    "aria-hidden": "true",
                                    viewBox: "0 0 16 16",
                                    version: "1.1",
                                    width: "32",
                                    "data-view-component": "true",
                                    children: (0, Z.jsx)("path", {
                                        fill: "#000000",
                                        fillRule: "evenodd",
                                        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                    })
                                })]
                            }), (0, Z.jsx)("div", {
                                className: "logo",
                                title: "Cyberpunk 2077"
                            }), (0, Z.jsxs)("aside", {
                                className: "hud aside left",
                                children: [(0, Z.jsxs)("div", {
                                    className: "box box_0 inverse",
                                    children: [(0, Z.jsx)("div", {
                                        className: "cover"
                                    }), (0, Z.jsxs)("div", {
                                        className: "info",
                                        children: [(0, Z.jsxs)("p", {
                                            className: "text",
                                            children: [(0, Z.jsx)("b", {
                                                children: "Cyberpunk"
                                            }), ' is a subgenre of science fiction in a dystopian futuristic setting that tends to focus on a "combination of lowlife and high tech", featuring futuristic technological and scientific achievements, such as artificial intelligence and cybernetics, juxtaposed with societal collapse or decay. ']
                                        }), (0, Z.jsx)("button", {
                                            className: "button",
                                            onClick: this.handleStartButtonClick.bind(this),
                                            children: "START"
                                        })]
                                    })]
                                }), (0, Z.jsx)("div", {
                                    className: "box",
                                    children: (0, Z.jsx)("div", {
                                        className: "chart chart_1"
                                    })
                                }), (0, Z.jsx)("div", {
                                    className: "box inverse dotted",
                                    children: (0, Z.jsx)("div", {
                                        className: "chart chart_2"
                                    })
                                })]
                            }), (0, Z.jsxs)("aside", {
                                className: "hud aside right",
                                children: [(0, Z.jsx)("div", {
                                    className: "box",
                                    children: (0, Z.jsx)("div", {
                                        className: "chart chart_3"
                                    })
                                }), (0, Z.jsx)("div", {
                                    className: "box",
                                    children: (0, Z.jsx)("div", {
                                        className: "chart chart_4"
                                    })
                                }), (0, Z.jsx)("div", {
                                    className: "box inverse dotted",
                                    children: (0, Z.jsx)("div", {
                                        className: "chart chart_5"
                                    })
                                })]
                            }), (0, Z.jsxs)("div", {
                                className: "hud footer",
                                children: [(0, Z.jsxs)("div", {
                                    className: "square",
                                    children: [(0, Z.jsx)("div", {
                                        className: "radar"
                                    }), (0, Z.jsxs)("div", {
                                        className: "text",
                                        children: [(0, Z.jsx)("p", {
                                            className: "title",
                                            children: "5024.88"
                                        }), (0, Z.jsx)("p", {
                                            className: "description",
                                            children: "\u8ddd\u79bb"
                                        })]
                                    })]
                                }), (0, Z.jsxs)("div", {
                                    className: "square",
                                    children: [(0, Z.jsx)("div", {
                                        className: "radar"
                                    }), (0, Z.jsxs)("div", {
                                        className: "text",
                                        children: [(0, Z.jsx)("p", {
                                            className: "title",
                                            children: "0.00025%"
                                        }), (0, Z.jsx)("p", {
                                            className: "description",
                                            children: "\u542b\u6c27\u91cf"
                                        })]
                                    })]
                                }), (0, Z.jsxs)("div", {
                                    className: "square",
                                    children: [(0, Z.jsx)("div", {
                                        className: "radar"
                                    }), (0, Z.jsxs)("div", {
                                        className: "text",
                                        children: [(0, Z.jsx)("p", {
                                            className: "title",
                                            children: "2077.77"
                                        }), (0, Z.jsx)("p", {
                                            className: "description",
                                            children: "\u8f90\u5c04"
                                        })]
                                    })]
                                })]
                            }), (0, Z.jsx)("section", {
                                className: "bg"
                            })]
                        })
                    }
                }]), t
            }(o.Component)
        },
        5719: function (e) {
            e.exports = "uniform float actionRatio;\r\nuniform float lineLength;\r\nuniform vec3 diffuse;\r\nuniform float opacity;\r\nuniform float dashSize;\r\nuniform float totalSize;\r\nvarying float vLineDistance;\r\n\r\n#include <common>\r\n#include <color_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\t#include <clipping_planes_fragment>\r\n\r\n  float halfDash = dashSize * 0.5;\r\n  float currPos = (lineLength + dashSize) * actionRatio;\r\n  float d = (vLineDistance + halfDash) - currPos;\r\n  if (abs(d) > halfDash ) discard;\r\n\r\n  float grad = ((vLineDistance + halfDash) - (currPos - halfDash)) / halfDash;\r\n\tvec3 outgoingLight = vec3( 0.0 );\r\n  vec4 diffuseColor = vec4( diffuse, grad );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <color_fragment>\r\n\toutgoingLight = diffuseColor.rgb;\r\n\t#include <output_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\t#include <premultiplied_alpha_fragment>\r\n}"
        },
        5371: function (e, a, t) {
            "use strict";
            e.exports = t.p + "static/media/earth.e2b2915e51f12423bd07.jpg"
        }
    }
]);