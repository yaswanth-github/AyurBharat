
// !function() {
//     try {
//         var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
//           , t = (new Error).stack;
//         t && (e._sentryDebugIds = e._sentryDebugIds || {},
//         e._sentryDebugIds[t] = "a74148da-ee4b-423b-a77b-fbf7eee64526",
//         e._sentryDebugIdIdentifier = "sentry-dbid-a74148da-ee4b-423b-a77b-fbf7eee64526")
//     } catch (e) {}
// }(),
// (self["webpackChunk_symptom_checker_app"] = self["webpackChunk_symptom_checker_app"] || []).push([[6053], {
//     95942: (e,t,a)=>{
//         a.d(t, {
//             Z: ()=>v
//         });
//         var l = a(78551)
//           , n = a(43007)
//           , s = a(42681)
//           , o = a(21745)
//           , i = a(68213)
//           , d = a(7975)
//           , c = a(98646);
//         const r = (0,
//         l.aZ)({
//             __name: "ScQuestion",
//             props: {
//                 headingAttrs: {
//                     type: Object,
//                     default: ()=>({
//                         class: "ui-heading ui-question__title",
//                         tag: "h1",
//                         level: "2",
//                         tabindex: -1,
//                         ref: (0,
//                         l.f3)(c.X6),
//                         "data-test-id": d.SCREEN_HEADING
//                     })
//                 }
//             },
//             setup(e) {
//                 return (t,a)=>((0,
//                 l.wg)(),
//                 (0,
//                 l.j4)((0,
//                 n.SU)(o.uA), (0,
//                 l.dG)({
//                     class: "sc-question"
//                 }, t.$props), (0,
//                 l.Nv)({
//                     title: (0,
//                     l.w5)((({title: a})=>[(0,
//                     l.WI)(t.$slots, "title", (0,
//                     s.vs)((0,
//                     l.F4)({
//                         title: a,
//                         headingAttrs: e.headingAttrs
//                     })), (()=>[a ? ((0,
//                     l.wg)(),
//                     (0,
//                     l.j4)((0,
//                     n.SU)(o.Hg), (0,
//                     s.vs)((0,
//                     l.dG)({
//                         key: 0
//                     }, e.headingAttrs)), {
//                         default: (0,
//                         l.w5)((()=>[(0,
//                         l.Uk)((0,
//                         s.zw)(a), 1)])),
//                         _: 2
//                     }, 1040)) : (0,
//                     l.kq)("", !0)]))])),
//                     feedback: (0,
//                     l.w5)((({hasFeedback: e, settings: a, translation: i, notificationFeedbackAttrs: d})=>[(0,
//                     l.WI)(t.$slots, "feedback", (0,
//                     s.vs)((0,
//                     l.F4)({
//                         hasFeedback: e,
//                         settings: a,
//                         translation: i,
//                         notificationFeedbackAttrs: d
//                     })), (()=>[e ? ((0,
//                     l.wg)(),
//                     (0,
//                     l.j4)((0,
//                     n.SU)(o.mE), (0,
//                     l.dG)({
//                         key: 0
//                     }, d, {
//                         type: "success",
//                         translation: {
//                             action: i.issue.skip
//                         },
//                         class: "ui-question__feedback",
//                         tabindex: "-1"
//                     }), {
//                         default: (0,
//                         l.w5)((()=>[(0,
//                         l.Uk)((0,
//                         s.zw)(i.issue.feedback), 1)])),
//                         _: 2
//                     }, 1040, ["translation"])) : (0,
//                     l.kq)("", !0)]))])),
//                     _: 2
//                 }, [(0,
//                 l.Ko)((0,
//                 n.SU)(i.q)(t.$slots, ["title", "feedback"]), ((e,a)=>({
//                     name: a,
//                     fn: (0,
//                     l.w5)((e=>[(0,
//                     l.WI)(t.$slots, a, (0,
//                     s.vs)((0,
//                     l.F4)(e)))]))
//                 })))]), 1040))
//             }
//         })
//           , u = r
//           , v = u
//     }
//     ,
//     64584: (e,t,a)=>{
//         a.r(t),
//         a.d(t, {
//             default: ()=>_e
//         });
//         var l = a(96358)
//           , n = (a(53705),
//         a(71756),
//         a(78551))
//           , s = a(42681)
//           , o = a(43007)
//           , i = a(67939)
//           , d = a(21745)
//           , c = a(95942)
//           , r = (a(4302),
//         a(66469),
//         a(19408))
//           , u = (a(16366),
//         a(31781),
//         a(22522));
//         const v = ["id"]
//           , m = {
//             __name: "ScBodyModelSVG",
//             props: {
//                 sex: {
//                     type: String,
//                     default: ""
//                 },
//                 isBack: {
//                     type: Boolean,
//                     default: !1
//                 },
//                 selectedSymptoms: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 selectedBodyParts: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 activeBodyPart: {
//                     type: String,
//                     default: ""
//                 },
//                 hasMoreDetails: {
//                     type: Boolean,
//                     default: !0
//                 }
//             },
//             emits: ["active"],
//             setup(e, {emit: t}) {
//                 const l = e
//                   , s = {
//                     "sc-adult-male-front": (0,
//                     n.RC)((()=>a.e(4467).then(a.bind(a, 34467)))),
//                     "sc-adult-male-back": (0,
//                     n.RC)((()=>a.e(3949).then(a.bind(a, 23949)))),
//                     "sc-adult-female-front": (0,
//                     n.RC)((()=>a.e(6612).then(a.bind(a, 86612)))),
//                     "sc-adult-female-back": (0,
//                     n.RC)((()=>a.e(5351).then(a.bind(a, 85351)))),
//                     "sc-child-male-front": (0,
//                     n.RC)((()=>a.e(1301).then(a.bind(a, 1301)))),
//                     "sc-child-male-back": (0,
//                     n.RC)((()=>a.e(7977).then(a.bind(a, 27977)))),
//                     "sc-child-female-front": (0,
//                     n.RC)((()=>a.e(5659).then(a.bind(a, 55659)))),
//                     "sc-child-female-back": (0,
//                     n.RC)((()=>a.e(9744).then(a.bind(a, 99744)))),
//                     "sc-toddler-male-front": (0,
//                     n.RC)((()=>a.e(3485).then(a.bind(a, 93485)))),
//                     "sc-toddler-male-back": (0,
//                     n.RC)((()=>a.e(72).then(a.bind(a, 80072)))),
//                     "sc-toddler-female-front": (0,
//                     n.RC)((()=>a.e(1196).then(a.bind(a, 61196)))),
//                     "sc-toddler-female-back": (0,
//                     n.RC)((()=>a.e(2652).then(a.bind(a, 32652)))),
//                     "sc-infant-unisex-front": (0,
//                     n.RC)((()=>a.e(3688).then(a.bind(a, 33688)))),
//                     "sc-infant-unisex-back": (0,
//                     n.RC)((()=>a.e(2328).then(a.bind(a, 2328))))
//                 }
//                   , i = (0,
//                 u.z)()
//                   , d = (0,
//                 o.iH)(null)
//                   , c = (0,
//                 n.Fl)((()=>l.isBack ? "back" : "front"))
//                   , r = (0,
//                 n.Fl)((()=>{
//                     let e = "adult";
//                     return "month" === i.patientAge.unit || 0 === i.patientAge.value ? e = "infant" : i.patientAge.value < 4 ? e = "toddler" : i.patientAge.value < 12 && (e = "child"),
//                     `sc-${e}-${"infant" !== e ? l.sex : "unisex"}-${c.value}`
//                 }
//                 ))
//                   , m = (0,
//                 n.Fl)((()=>`body-model-${r.value.replace(/sc-/gm, "")}`))
//                   , p = (0,
//                 n.Fl)((()=>s[r.value]));
//                 function y({bodyPart: e}) {
//                     return {
//                         class: {
//                             "sc-body-model-svg__path": !0,
//                             "sc-body-model-svg__path--selected": l.selectedBodyParts.includes(e),
//                             "sc-body-model-svg__path--active": l.activeBodyPart === e
//                         },
//                         id: `body-model-${e}`
//                     }
//                 }
//                 function b({target: e}, a) {
//                     t("active", {
//                         body: d.value,
//                         target: e,
//                         bodyPart: a
//                     })
//                 }
//                 return (0,
//                 n.JJ)("hasMoreDetails", l.hasMoreDetails),
//                 (0,
//                 n.JJ)("pathAttrs", y),
//                 (0,
//                 n.JJ)("interactionHandler", b),
//                 (e,t)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.iD)("svg", {
//                     id: m.value,
//                     ref_key: "body",
//                     ref: d,
//                     class: "sc-body-model-svg",
//                     viewBox: "0 0 168 320",
//                     "fill-rule": "evenodd",
//                     "clip-rule": "evenodd",
//                     "stroke-linecap": "round",
//                     "stroke-linejoin": "round",
//                     "stroke-miterlimit": "1.5"
//                 }, [((0,
//                 n.wg)(),
//                 (0,
//                 n.j4)((0,
//                 n.LL)(p.value)))], 8, v))
//             }
//         }
//           , p = m
//           , y = p;
//         a(81289);
//         var b = a(15418)
//           , _ = a(69070)
//           , h = a(83950);
//         const f = {
//             class: "sc-body-model-popover__content"
//         }
//           , g = {
//             key: "body-model-popover-options",
//             class: "sc-body-model-popover__options",
//             role: "radiogroup"
//         }
//           , S = {
//             __name: "ScBodyModelPopover",
//             props: {
//                 bodyModel: {
//                     type: Object,
//                     default: ()=>({})
//                 },
//                 activePath: {
//                     type: Object,
//                     default: ()=>({})
//                 },
//                 activeBodyPart: {
//                     type: String,
//                     default: ""
//                 },
//                 evidenceIds: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 sex: {
//                     type: String,
//                     default: ""
//                 },
//                 age: {
//                     type: Object,
//                     default: ()=>({})
//                 },
//                 noInternet: {
//                     type: Boolean,
//                     default: !1
//                 },
//                 isRtl: {
//                     type: Boolean,
//                     default: !1
//                 },
//                 bodyParts: {
//                     type: Object,
//                     required: !0
//                 },
//                 bodyPartsLoading: {
//                     type: Boolean
//                 }
//             },
//             emits: ["close"],
//             setup(e, {emit: t}) {
//                 const a = e
//                   , {translate: c} = (0,
//                 h.Z)()
//                   , u = (0,
//                 n.f3)("changeHandler")
//                   , v = (0,
//                 n.Fl)((()=>a.bodyParts[a.activeBodyPart] || []))
//                   , m = (0,
//                 o.iH)()
//                   , p = (0,
//                 n.Fl)((()=>v.value.map((e=>{
//                     const t = null === e || void 0 === e ? void 0 : e.evidence.filter((e=>!a.evidenceIds.includes(e.id)));
//                     return (0,
//                     l.Z)((0,
//                     l.Z)({}, e), {}, {
//                         evidence: t
//                     })
//                 }
//                 ))))
//                   , y = (0,
//                 n.Fl)((()=>p.value.length > 0))
//                   , S = (0,
//                 n.Fl)((()=>a.bodyPartsLoading))
//                   , w = (0,
//                 n.Fl)((()=>!a.bodyPartsLoading.value && !y.value && a.noInternet))
//                   , k = (0,
//                 n.Fl)((()=>p.value.length > 1 && void 0 !== m.value));
//                 function U() {
//                     m.value = void 0
//                 }
//                 (0,
//                 n.m0)((()=>{
//                     var e;
//                     1 === v.value.length && (m.value = null === (e = v.value) || void 0 === e ? void 0 : e[0])
//                 }
//                 ));
//                 const F = (0,
//                 n.Fl)((()=>a.bodyPartsLoading ? c("common.loading") : m.value ? c(m.value.label) : c("initialSymptoms.exactLocationOnBody")));
//                 (0,
//                 n.m0)((()=>{
//                     if (a.bodyPartsLoading)
//                         return;
//                     const e = {
//                         event_type: "click",
//                         event_object: "body_avatar",
//                         event_data: {
//                             type: "initial_symptom",
//                             data: [a.activeBodyPart],
//                             list: p.value.reduce(((e,t)=>[...e, ...t.evidence.map((({id: e})=>e))]), [])
//                         }
//                     };
//                     i.c.trackEvent("Evidence Search", {
//                         event_details: e
//                     }, ["infermedicaAnalytics"])
//                 }
//                 ));
//                 const I = (0,
//                 n.Fl)((()=>p.value.length > 1))
//                   , x = (e,t)=>({
//                     label: (0,
//                     b.Ez)(c(e.label)),
//                     onClick: ()=>{
//                         u((0,
//                         l.Z)((0,
//                         l.Z)({}, e), {}, {
//                             partPosition: t,
//                             origin: "body_avatar"
//                         }))
//                     }
//                 })
//                   , W = e=>({
//                     label: (0,
//                     b.Ez)(c(e.label)),
//                     icon: "chevron-right",
//                     suffixVisible: "always",
//                     onClick: ()=>{
//                         m.value = e
//                     }
//                 })
//                   , $ = (0,
//                 n.Fl)((()=>{
//                     var e, t;
//                     return I.value ? void 0 === m.value ? p.value.map(W) : null === (e = p.value.find((e=>e.label === m.value.label))) || void 0 === e || null === (t = e.evidence) || void 0 === t ? void 0 : t.map(x) : p.value[0].evidence.map(x)
//                 }
//                 ))
//                   , E = ()=>{
//                     t("close")
//                 }
//                   , H = (0,
//                 n.Fl)((()=>{
//                     const {x: e, y: t} = a.bodyModel.getBoundingClientRect()
//                       , {x: l, y: n, height: s} = a.activePath.getBoundingClientRect()
//                       , o = a.isRtl ? -1 : 1
//                       , i = Math.round(l - e) * o
//                       , d = Math.round(n - t + s / 2 - 24);
//                     return {
//                         "--body-model-popover-transform": `translate(${i}px, ${d}px)`
//                     }
//                 }
//                 ));
//                 return (t,a)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.j4)((0,
//                 o.SU)(d.r7), {
//                     class: (0,
//                     s.C_)(["ui-popover--has-mobile sc-body-model-popover", {
//                         "ui-popover--has-arrow": !e.isRtl,
//                         "ui-popover--has-left-arrow": e.isRtl
//                     }]),
//                     title: F.value,
//                     style: (0,
//                     s.j5)(H.value),
//                     "button-close-attrs": {
//                         "aria-label": (0,
//                         o.SU)(c)("common.close"),
//                         onClick: E
//                     }
//                 }, {
//                     header: (0,
//                     n.w5)((e=>[(0,
//                     n.WI)(t.$slots, "header", (0,
//                     s.vs)((0,
//                     n.F4)(e)))])),
//                     title: (0,
//                     n.w5)((e=>[(0,
//                     n.WI)(t.$slots, "title", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         provideData: e,
//                         hasBack: k.value,
//                         backHandler: U,
//                         title: F.value,
//                         translate: (0,
//                         o.SU)(c)
//                     })), (()=>[k.value ? ((0,
//                     n.wg)(),
//                     (0,
//                     n.j4)((0,
//                     o.SU)(d.wg), {
//                         key: 0,
//                         class: "ui-button--text sc-body-model-popover__back",
//                         onClick: (0,
//                         r.iM)(U, ["stop"])
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[(0,
//                         n.Wm)((0,
//                         o.SU)(d.ax), {
//                             icon: "chevron-left",
//                             class: "ui-button__icon"
//                         })])),
//                         _: 1
//                     }, 8, ["onClick"])) : (0,
//                     n.kq)("", !0), (0,
//                     n.Wm)((0,
//                     o.SU)(d.Hg), {
//                         level: "4",
//                         tag: "span",
//                         class: "sc-body-model-popover__title"
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[(0,
//                         n.Uk)((0,
//                         s.zw)(F.value), 1)])),
//                         _: 1
//                     })]))])),
//                     close: (0,
//                     n.w5)((e=>[(0,
//                     n.WI)(t.$slots, "close", (0,
//                     s.vs)((0,
//                     n.F4)(e)))])),
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.WI)(t.$slots, "default", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         isLoading: S.value,
//                         noInternetConnection: w.value,
//                         translate: (0,
//                         o.SU)(c),
//                         bodyPartsWithFilteredEvidences: p.value,
//                         capitalizeFirst: (0,
//                         o.SU)(b.Ez)
//                     })), (()=>[(0,
//                     n._)("div", f, [(0,
//                     n.Wm)((0,
//                     o.SU)(d.MH), {
//                         name: "",
//                         "is-loading": S.value,
//                         type: "skeleton",
//                         class: "sc-body-model-popover__loader"
//                     }, {
//                         "loader-blocks": (0,
//                         n.w5)((()=>[(0,
//                         n.WI)(t.$slots, "loader-blocks")])),
//                         default: (0,
//                         n.w5)((()=>[w.value ? (0,
//                         n.WI)(t.$slots, "no-internet", {
//                             key: 0
//                         }, (()=>[(0,
//                         n.Wm)(_.Z, {
//                             key: "no-internet-connection",
//                             class: "sc-body-model-popover__no-internet",
//                             condensed: !0
//                         })])) : (0,
//                         n.WI)(t.$slots, "options", (0,
//                         s.vs)((0,
//                         n.dG)({
//                             key: 1
//                         }, {
//                             bodyPartsWithFilteredEvidences: p.value,
//                             capitalizeFirst: (0,
//                             o.SU)(b.Ez),
//                             translate: (0,
//                             o.SU)(c)
//                         })), (()=>[(0,
//                         n._)("div", g, [(0,
//                         n.Wm)((0,
//                         o.SU)(d.JM), {
//                             items: $.value,
//                             class: "ui-menu--compact"
//                         }, null, 8, ["items"]), (0,
//                         n.WI)(t.$slots, "notification", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             translate: (0,
//                             o.SU)(c)
//                         })), (()=>[(0,
//                         n.Wm)((0,
//                         o.SU)(d.mE), {
//                             key: "body-model-popover-notification",
//                             type: "info",
//                             class: "sc-body-model-popover__notification"
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.Uk)((0,
//                             s.zw)((0,
//                             o.SU)(c)("initialSymptoms.useSearchNotification")), 1)])),
//                             _: 1
//                         })]))])]))])),
//                         _: 3
//                     }, 8, ["is-loading"])])]))])),
//                     _: 3
//                 }, 8, ["title", "style", "button-close-attrs", "class"]))
//             }
//         }
//           , w = S
//           , k = w;
//         var U = a(81360)
//           , F = a(35684)
//           , I = a(39682)
//           , x = a(67906)
//           , W = a(11715)
//           , $ = a(43789);
//         function E({sex: e, age: t}) {
//             return (0,
//             W.Z)({
//                 method: "GET",
//                 url: `${$.Z.apiPath}/body_parts/`,
//                 params: {
//                     sex: e,
//                     age: `${t.value}${t.unit}`
//                 }
//             })
//         }
//         const H = {
//             whole_head: ["head", "eyes", "nose", "ears", "oral_cavity"]
//         }
//           , P = async(e,t,a)=>{
//             const l = await E({
//                 sex: t,
//                 age: a
//             })
//               , n = Object.entries(l).reduce(((t,[a,l])=>(t[a] = {
//                 label: `initialSymptoms.bodyParts.${(0,
//                 x.i)(a)}`,
//                 evidence: l.map((t=>{
//                     var a;
//                     return {
//                         id: t,
//                         label: null === (a = e.get(t)) || void 0 === a ? void 0 : a.common_name
//                     }
//                 }
//                 )).filter((e=>(e.label || I.u3.warn(`Invalid body part symptom: ${e.id}`),
//                 !!e.label)))
//             },
//             t)), {})
//               , s = {};
//             return Object.keys(l).forEach((e=>{
//                 s[e] = [n[e]]
//             }
//             )),
//             Object.keys(H).forEach((e=>{
//                 s[e] = H[e].map((e=>n[e]))
//             }
//             )),
//             s
//         }
//         ;
//         function C() {
//             const e = (0,
//             U.J)()
//               , t = (0,
//             F.V)()
//               , a = (0,
//             u.z)()
//               , l = (0,
//             n.Fl)((()=>e.noInternet))
//               , s = (0,
//             o.iH)({})
//               , i = (0,
//             o.iH)(!1)
//               , d = (0,
//             n.Fl)((()=>!i.value && !s.value.length && l.value))
//               , c = async()=>{
//                 i.value = !0;
//                 try {
//                     s.value = await P(t.summaryConcepts, a.patientSex, a.patientAge)
//                 } catch (e) {
//                     (0,
//                     I.iR)(e)
//                 } finally {
//                     i.value = !1
//                 }
//             }
//             ;
//             return (0,
//             n.YP)((()=>l.value), (e=>{
//                 e || s.value.length || c()
//             }
//             )),
//             (0,
//             n.bv)((()=>{
//                 c()
//             }
//             )),
//             {
//                 bodyParts: s,
//                 bodyPartsLoading: i,
//                 noInternetConnection: d
//             }
//         }
//         const A = {
//             class: "sc-body-model"
//         }
//           , j = {
//             __name: "ScBodyModel",
//             props: {
//                 modelValue: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 evidenceIds: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 sex: {
//                     type: String,
//                     default: ""
//                 },
//                 age: {
//                     type: Object,
//                     default: ()=>({})
//                 },
//                 noInternet: {
//                     type: Boolean,
//                     default: !1
//                 },
//                 source: {
//                     type: String,
//                     default: "initial"
//                 },
//                 hasMoreDetails: {
//                     type: Boolean,
//                     default: !0
//                 },
//                 isRtl: {
//                     type: Boolean,
//                     default: !1
//                 }
//             },
//             emits: ["update:modelValue"],
//             setup(e, {emit: t}) {
//                 const a = e
//                   , {translate: c} = (0,
//                 h.Z)()
//                   , u = (0,
//                 o.iH)("")
//                   , v = (0,
//                 o.iH)(null)
//                   , m = (0,
//                 o.iH)(null);
//                 function p(e, t) {
//                     u.value = null === e || void 0 === e ? void 0 : e.bodyPart,
//                     v.value = null === e || void 0 === e ? void 0 : e.target,
//                     m.value = null === e || void 0 === e ? void 0 : e.body,
//                     t()
//                 }
//                 const b = (0,
//                 n.Fl)((()=>a.modelValue.map((e=>e.id))))
//                   , {bodyParts: _, bodyPartsLoading: f, noInternetConnection: g} = C()
//                   , S = (0,
//                 n.Fl)((()=>Object.keys(_.value).filter((e=>_.value[e].some((e=>e.evidence.some((({id: e})=>a.evidenceIds.includes(e)))))))))
//                   , w = (0,
//                 o.iH)(!1);
//                 function U() {
//                     w.value = !w.value;
//                     const e = {
//                         event_type: "select",
//                         event_object: "rotate_model"
//                     };
//                     i.c.trackEvent("Body Model", {
//                         event_details: e
//                     }, ["infermedicaAnalytics"])
//                 }
//                 function F() {
//                     u.value = ""
//                 }
//                 function I(e) {
//                     t("update:modelValue", [...a.modelValue, e]);
//                     const l = {
//                         event_type: "confirm",
//                         event_object: "body_avatar",
//                         event_data: {
//                             type: "initial_symptom",
//                             data: [e.id],
//                             position: e.partPosition + 1
//                         }
//                     };
//                     i.c.trackEvent("Body Model", {
//                         event_details: l
//                     }, ["infermedicaAnalytics"])
//                 }
//                 return (t,a)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.iD)("div", A, [(0,
//                 n.Wm)((0,
//                 o.SU)(d.A8), {
//                     class: "ui-dropdown--compact sc-body-model__dropdown",
//                     "onUpdate:modelValue": I,
//                     onClose: F
//                 }, {
//                     toggle: (0,
//                     n.w5)((a=>[(0,
//                     n.WI)(t.$slots, "body-model", (0,
//                     s.vs)((0,
//                     n.F4)((0,
//                     l.Z)((0,
//                     l.Z)({}, a), {}, {
//                         sex: e.sex,
//                         selectedSymptoms: b.value,
//                         selectedBodyParts: S.value,
//                         activeBodyPart: u.value,
//                         isBack: w.value,
//                         hasMoreDetails: e.hasMoreDetails,
//                         activeHandler: p
//                     }))), (()=>[(0,
//                     n.Wm)(y, {
//                         sex: e.sex,
//                         "is-back": w.value,
//                         "selected-symptoms": b.value,
//                         "selected-body-parts": S.value,
//                         "active-body-part": u.value,
//                         "has-more-details": e.hasMoreDetails,
//                         onActive: e=>p(e, a.openHandler)
//                     }, null, 8, ["sex", "is-back", "selected-symptoms", "selected-body-parts", "active-body-part", "has-more-details", "onActive"])]))])),
//                     popover: (0,
//                     n.w5)((a=>[(0,
//                     n.WI)(t.$slots, "popover", (0,
//                     s.vs)((0,
//                     n.F4)((0,
//                     l.Z)((0,
//                     l.Z)({}, a), {}, {
//                         sex: e.sex,
//                         age: e.age,
//                         bodyModel: m.value,
//                         activePath: v.value,
//                         selectedSymptoms: b.value,
//                         selectedBodyParts: S.value,
//                         activeBodyPart: u.value,
//                         noInternet: e.noInternet,
//                         isRtl: e.isRtl
//                     }))), (()=>[(0,
//                     n.Wm)(r.uT, {
//                         name: "slideUp"
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[a.isOpen ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)(k, {
//                             key: u.value,
//                             "body-model": m.value,
//                             "active-path": v.value,
//                             "active-body-part": u.value,
//                             "evidence-ids": e.evidenceIds,
//                             sex: e.sex,
//                             age: e.age,
//                             "no-internet": (0,
//                             o.SU)(g),
//                             "is-rtl": e.isRtl,
//                             "body-parts": (0,
//                             o.SU)(_),
//                             "body-parts-loading": (0,
//                             o.SU)(f),
//                             onClose: a.closeHandler
//                         }, null, 8, ["body-model", "active-path", "active-body-part", "evidence-ids", "sex", "age", "no-internet", "is-rtl", "body-parts", "body-parts-loading", "onClose"])) : (0,
//                         n.kq)("", !0)])),
//                         _: 2
//                     }, 1024)]))])),
//                     _: 3
//                 }), (0,
//                 n.WI)(t.$slots, "rotate", (0,
//                 s.vs)((0,
//                 n.F4)({
//                     translate: (0,
//                     o.SU)(c),
//                     rotateModel: U
//                 })), (()=>[(0,
//                 n.Wm)((0,
//                 o.SU)(d.wg), {
//                     id: "rotate",
//                     tag: "div",
//                     class: "ui-button--text sc-body-model__rotate",
//                     "aria-hidden": "true",
//                     tabindex: "-1",
//                     onClick: U
//                 }, {
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.Wm)((0,
//                     o.SU)(d.ax), {
//                         icon: "rotate",
//                         class: "ui-button__icon"
//                     }), (0,
//                     n.Uk)(" " + (0,
//                     s.zw)((0,
//                     o.SU)(c)("initialSymptoms.rotateModel")), 1)])),
//                     _: 1
//                 })]))]))
//             }
//         }
//           , R = j
//           , V = R;
//         var B = a(70)
//           , Z = a(22445)
//           , M = a(11923)
//           , z = a(48320);
//         const q = {
//             class: "sc-evidence-search-no-results"
//         }
//           , D = {
//             class: "sc-evidence-search-no-results__header"
//         }
//           , O = {
//             class: "sc-evidence-search-no-results__content"
//         }
//           , L = {
//             __name: "ScEvidenceSearchNoResults",
//             setup(e) {
//                 const {translate: t, translateList: a} = (0,
//                 h.Z)()
//                   , l = a("initialSymptoms.noResultsNotification.bulletPoints");
//                 return (e,a)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.iD)("div", q, [(0,
//                 n.WI)(e.$slots, "header", (0,
//                 s.vs)((0,
//                 n.F4)({
//                     title: (0,
//                     o.SU)(t)("common.noResults")
//                 })), (()=>[(0,
//                 n._)("div", D, [(0,
//                 n.WI)(e.$slots, "icon", {}, (()=>[(0,
//                 n.Wm)((0,
//                 o.SU)(d.ax), {
//                     icon: "sad",
//                     class: "sc-evidence-search-no-results__icon"
//                 })])), (0,
//                 n.Wm)((0,
//                 o.SU)(d.Hg), {
//                     level: "4",
//                     class: "sc-evidence-search-no-results__title"
//                 }, {
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.Uk)((0,
//                     s.zw)((0,
//                     o.SU)(t)("common.noResults")), 1)])),
//                     _: 1
//                 })])])), (0,
//                 n.WI)(e.$slots, "content", (0,
//                 s.vs)((0,
//                 n.F4)({
//                     notificationHeading: (0,
//                     o.SU)(t)("initialSymptoms.noResultsNotification.heading"),
//                     bulletPoints: (0,
//                     o.SU)(l)
//                 })), (()=>[(0,
//                 n._)("div", O, [(0,
//                 n.Wm)((0,
//                 o.SU)(d.II), null, {
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.Uk)((0,
//                     s.zw)((0,
//                     o.SU)(t)("initialSymptoms.noResultsNotification.heading")), 1)])),
//                     _: 1
//                 }), (0,
//                 n.Wm)((0,
//                 o.SU)(d.F0), {
//                     class: "sc-evidence-search-no-results__points",
//                     items: (0,
//                     o.SU)(l)
//                 }, null, 8, ["items"])])]))]))
//             }
//         }
//           , Y = L
//           , G = Y;
//         var J = a(61926);
//         function T(e) {
//             const t = (0,
//             J.h)()
//               , a = (0,
//             n.Fl)((()=>e.value instanceof Element ? e.value : e.value.$el));
//             function l(e) {
//                 e.style.clip = "1px, 1px, 1px, 1px",
//                 e.style.height = "1px",
//                 e.style.width = "1px",
//                 e.style.overflow = "hidden",
//                 e.style.position = "absolute",
//                 e.style.whiteSpace = "nowrap"
//             }
//             function s(e, n="assertive") {
//                 const s = a.value.querySelector(`[id^="${t}-live-region-"]`);
//                 s && a.value.removeChild(s);
//                 const o = document.createElement("span");
//                 o.id = `${t}-live-region-${(0,
//                 J.h)()}`,
//                 o.setAttribute("aria-live", n),
//                 o.setAttribute("role", "alert"),
//                 l(o),
//                 a.value.appendChild(o),
//                 o.textContent = e
//             }
//             return {
//                 speak: s
//             }
//         }
//         var N = a(63785);
//         function Q(e, t, a) {
//             return (0,
//             W.Z)({
//                 method: "GET",
//                 url: `${$.Z.apiPath}/dictionary/`,
//                 params: {
//                     types: ["symptom", "risk_factor"].join(),
//                     sex: e,
//                     age: t.value,
//                     age_unit: t.unit,
//                     q: a
//                 }
//             })
//         }
//         const K = {
//             id: "evidence-search-description",
//             class: "visual-hidden"
//         }
//           , X = {
//             key: 0,
//             id: "evidence-results",
//             role: "listbox",
//             class: "sc-evidence-search__results"
//         }
//           , ee = {
//             class: "sc-evidence-search__highlighted"
//         }
//           , te = {
//             __name: "ScEvidenceSearch",
//             props: {
//                 modelValue: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 evidenceIds: {
//                     type: Array,
//                     default: ()=>[]
//                 },
//                 sex: {
//                     type: String,
//                     default: ""
//                 },
//                 age: {
//                     type: Object,
//                     default: ()=>({})
//                 },
//                 source: {
//                     type: String,
//                     default: "initial"
//                 },
//                 resultsMax: {
//                     type: Number,
//                     default: 7
//                 },
//                 noInternet: {
//                     type: Boolean,
//                     default: !1
//                 }
//             },
//             emits: ["update:modelValue"],
//             setup(e, {emit: t}) {
//                 const a = e
//                   , {translate: c} = (0,
//                 h.Z)()
//                   , r = (0,
//                 o.iH)("")
//                   , u = (0,
//                 o.iH)(null)
//                   , v = (0,
//                 o.iH)(null)
//                   , m = (0,
//                 o.iH)(!1)
//                   , p = ()=>{
//                     m.value = !0
//                 }
//                   , y = ()=>{
//                     m.value = !1
//                 }
//                   , b = (0,
//                 n.Fl)((()=>{
//                     var e;
//                     return null === (e = u.value) || void 0 === e ? void 0 : e.$el.querySelector("input")
//                 }
//                 ))
//                   , f = (0,
//                 n.Fl)((()=>r.value.length > 0))
//                   , g = (0,
//                 n.Fl)((()=>({
//                     id: "evidence-search",
//                     "aria-describedby": "evidence-search-description",
//                     "aria-label": c("initialSymptoms.searchPlaceholder"),
//                     "aria-autocomplete": "list",
//                     "aria-haspopup": "true",
//                     "aria-owns": "evidence-results",
//                     autocomplete: "off",
//                     role: "combobox",
//                     placeholder: c("initialSymptoms.searchPlaceholder")
//                 })))
//                   , S = (0,
//                 o.iH)([])
//                   , w = (0,
//                 n.Fl)((()=>S.value.filter((e=>!a.evidenceIds.includes(e.id))).slice(0, a.resultsMax)))
//                   , k = (0,
//                 n.Fl)((()=>w.value.length > 0))
//                   , U = (0,
//                 o.iH)(!1)
//                   , F = (0,
//                 o.iH)(0)
//                   , I = (0,
//                 n.Fl)((()=>!U.value && !k.value && a.noInternet))
//                   , {speak: x} = T(v)
//                   , W = (0,
//                 B.Z)((async e=>{
//                     F.value += 1;
//                     const t = F.value;
//                     let l = [];
//                     try {
//                         l = e ? await Q(a.sex, a.age, e) : []
//                     } catch (s) {}
//                     if (F.value !== t)
//                         return;
//                     S.value = l,
//                     U.value = !1;
//                     const n = {
//                         event_type: "insert",
//                         event_object: "searchbar",
//                         event_data: {
//                             type: "initial_symptom",
//                             data: [r.value],
//                             list: w.value.map((({id: e})=>e))
//                         }
//                     };
//                     i.c.trackEvent("Evidence Search", {
//                         event_details: n
//                     }, ["infermedicaAnalytics"])
//                 }
//                 ), {
//                     wait: 250
//                 });
//                 async function $(e, t, a) {
//                     e.length > 0 ? t() : e.length < 1 && a(),
//                     r.value = e,
//                     U.value = !0,
//                     W(e)
//                 }
//                 function E(e) {
//                     const l = [c("initialSymptoms.selectedSymptom", {
//                         symptom: e.label
//                     }), c("initialSymptoms.amountOfChosenSymptoms", [...a.modelValue, e].length)].join(" ");
//                     x(l),
//                     t("update:modelValue", [...a.modelValue, e]);
//                     const n = {
//                         event_type: "confirm",
//                         event_object: "searchbar",
//                         event_data: {
//                             type: "initial_symptom",
//                             data: [null === e || void 0 === e ? void 0 : e.id],
//                             position: (0,
//                             N.kE)(e.position) ? e.position + 1 : 0
//                         }
//                     };
//                     i.c.trackEvent("Evidence Search", {
//                         event_details: n
//                     }, ["infermedicaAnalytics"]),
//                     r.value = ""
//                 }
//                 return (0,
//                 Z.B_)(w, (()=>{
//                     if (!m.value)
//                         return;
//                     const e = w.value.length;
//                     x(c(e > 0 ? "initialSymptoms.amountOfAvailableSymptoms" : "initialSymptoms.noSymptomsFound", e), "polite")
//                 }
//                 ), {
//                     debounce: 1e3
//                 }),
//                 (0,
//                 n.YP)((()=>a.noInternet), (e=>{
//                     e || k.value || (U.value = !0,
//                     W(r.value))
//                 }
//                 )),
//                 (e,t)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.j4)((0,
//                 o.SU)(d.A8), {
//                     ref_key: "dropdown",
//                     ref: v,
//                     class: "sc-evidence-search ui-dropdown--compact",
//                     "toggle-element": b.value,
//                     "popover-attrs": {
//                         class: "sc-evidence-search__popover"
//                     },
//                     "onUpdate:modelValue": E,
//                     onOpen: p,
//                     onClose: y
//                 }, {
//                     toggle: (0,
//                     n.w5)((t=>[(0,
//                     n.WI)(e.$slots, "toggle", (0,
//                     s.vs)((0,
//                     n.F4)((0,
//                     l.Z)((0,
//                     l.Z)({}, t), {}, {
//                         searchQuery: r.value,
//                         inputAttrs: g.value,
//                         translate: (0,
//                         o.SU)(c),
//                         hasSearchQuery: f.value,
//                         inputHandler: $
//                     }))), (()=>[(0,
//                     n._)("span", K, (0,
//                     s.zw)((0,
//                     o.SU)(c)("initialSymptoms.searchDescription")), 1), (0,
//                     n.Wm)((0,
//                     o.SU)(d.lF), {
//                         ref_key: "dropdowntoggle",
//                         ref: u,
//                         "model-value": r.value,
//                         class: "ui-input--has-icon sc-evidence-search__input",
//                         "input-attrs": g.value,
//                         "onUpdate:modelValue": e=>$(e, t.openHandler, t.closeHandler)
//                     }, {
//                         aside: (0,
//                         n.w5)((()=>[(0,
//                         n.WI)(e.$slots, "aside", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             hasSearchQuery: f.value,
//                             openHandler: t.openHandler,
//                             closeHandler: t.closeHandler,
//                             translate: (0,
//                             o.SU)(c)
//                         })), (()=>[f.value ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)((0,
//                         o.SU)(d.wg), {
//                             key: 0,
//                             tabindex: "-1",
//                             class: "ui-button--text ui-button--secondary ui-input__aside",
//                             "aria-label": (0,
//                             o.SU)(c)("common.clear"),
//                             onClick: e=>$("", t.openHandler, t.closeHandler)
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.Wm)((0,
//                             o.SU)(d.ax), {
//                                 icon: "clear",
//                                 class: "ui-button__icon"
//                             })])),
//                             _: 2
//                         }, 1032, ["aria-label", "onClick"])) : ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)((0,
//                         o.SU)(d.ax), {
//                             key: 1,
//                             icon: "search",
//                             class: "ui-input__aside sc-evidence-search__search-icon"
//                         }))]))])),
//                         _: 2
//                     }, 1032, ["model-value", "input-attrs", "onUpdate:modelValue"])]))])),
//                     content: (0,
//                     n.w5)((t=>[(0,
//                     n.WI)(e.$slots, "content", (0,
//                     s.vs)((0,
//                     n.F4)((0,
//                     l.Z)((0,
//                     l.Z)({}, t), {}, {
//                         isLoading: U.value,
//                         noInternetConnection: I.value,
//                         translate: (0,
//                         o.SU)(c),
//                         hasResults: k.value,
//                         filteredResults: w.value,
//                         searchQuery: r.value
//                     }))), (()=>[(0,
//                     n.Wm)((0,
//                     o.SU)(d.MH), {
//                         name: "",
//                         "is-loading": U.value,
//                         type: "skeleton",
//                         "transition-type": "show",
//                         class: "sc-evidence-search__loader"
//                     }, {
//                         "loader-blocks": (0,
//                         n.w5)((()=>[(0,
//                         n.WI)(e.$slots, "loader-blocks")])),
//                         default: (0,
//                         n.w5)((()=>[I.value ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)(_.Z, {
//                             key: 0,
//                             class: "sc-evidence-search__no-internet",
//                             condensed: !0
//                         })) : (0,
//                         n.WI)(e.$slots, "results", (0,
//                         s.vs)((0,
//                         n.dG)({
//                             key: 1
//                         }, {
//                             hasResults: k.value,
//                             filteredResults: w.value,
//                             searchQuery: r.value
//                         })), (()=>[k.value ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.iD)("div", X, [((0,
//                         n.wg)(!0),
//                         (0,
//                         n.iD)(n.HY, null, (0,
//                         n.Ko)(w.value, ((e,t)=>((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)(z.Z, {
//                             key: e.id,
//                             value: (0,
//                             l.Z)((0,
//                             l.Z)({}, e), {}, {
//                                 position: t,
//                                 origin: "searchbar"
//                             }),
//                             role: "option",
//                             "aria-setsize": w.value.length,
//                             "aria-posinset": t + 1,
//                             tabindex: "-1",
//                             class: "sc-evidence-search__result"
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.wy)(((0,
//                             n.wg)(),
//                             (0,
//                             n.iD)("span", ee, [(0,
//                             n.Uk)((0,
//                             s.zw)(e.label), 1)])), [[(0,
//                             o.SU)(M.CH), r.value]])])),
//                             _: 2
//                         }, 1032, ["value", "aria-setsize", "aria-posinset"])))), 128))])) : ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)(G, {
//                             key: 1,
//                             class: "sc-evidence-search__no-results"
//                         }))]))])),
//                         _: 3
//                     }, 8, ["is-loading"])]))])),
//                     _: 3
//                 }, 8, ["toggle-element"]))
//             }
//         }
//           , ae = te
//           , le = ae;
//         a(18819);
//         var ne = a(33221);
//         const se = (0,
//         n.aZ)({
//             __name: "ScEvidenceSearchPanel",
//             emits: ["update:openTab"],
//             setup(e, {emit: t}) {
//                 var a, l;
//                 const i = (0,
//                 F.V)()
//                   , {translate: c} = (0,
//                 h.Z)()
//                   , r = null === (a = i.currentFormQuestion) || void 0 === a || null === (l = a.componentSettings) || void 0 === l ? void 0 : l.displayBodyModelOnMobile
//                   , u = [{
//                     id: "search",
//                     title: "common.search"
//                 }, {
//                     id: "point-on-the-body",
//                     title: "initialSymptoms.pointOnBody"
//                 }];
//                 r && u.reverse();
//                 const v = (0,
//                 o.iH)(u[0].id);
//                 function m(e) {
//                     v.value = e,
//                     t("update:openTab", e)
//                 }
//                 return (e,t)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.j4)((0,
//                 o.SU)(d.Xo), {
//                     ref: "sidePanel",
//                     "transition-dialog-attrs": {
//                         transition: "slideUp"
//                     },
//                     class: "sc-evidence-search-panel"
//                 }, {
//                     header: (0,
//                     n.w5)((t=>[(0,
//                     n.WI)(e.$slots, "header", (0,
//                     s.vs)((0,
//                     n.F4)(t)), (()=>[(0,
//                     n.Wm)((0,
//                     o.SU)(d.wg), {
//                         class: "ui-button--secondary ui-button--text ui-side-panel__close sc-evidence-search-panel__close",
//                         "aria-label": (0,
//                         o.SU)(c)("common.close"),
//                         onClick: t.closeHandler
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[(0,
//                         n.Wm)((0,
//                         o.SU)(d.ax), {
//                             icon: "close",
//                             class: "ui-button__icon"
//                         })])),
//                         _: 2
//                     }, 1032, ["aria-label", "onClick"])]))])),
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.Wm)((0,
//                     o.SU)(d.BF), {
//                         "model-value": v.value,
//                         class: "sc-evidence-search-panel__tabs",
//                         "onUpdate:modelValue": m
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[((0,
//                         n.wg)(),
//                         (0,
//                         n.iD)(n.HY, null, (0,
//                         n.Ko)(u, (t=>(0,
//                         n.Wm)(ne.Z, {
//                             key: t.id,
//                             name: t.id,
//                             title: (0,
//                             o.SU)(c)(t.title),
//                             "content-attrs": {
//                                 class: "sc-evidence-search-panel__tabs-item-content"
//                             },
//                             class: "sc-evidence-search-panel__tabs-item",
//                             "button-tab-attrs": {
//                                 "aria-hidden": t.id !== v.value,
//                                 tabindex: "-1"
//                             }
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[t.id === v.value ? (0,
//                             n.WI)(e.$slots, t.id, {
//                                 key: 0
//                             }) : (0,
//                             n.kq)("", !0)])),
//                             _: 2
//                         }, 1032, ["name", "title", "button-tab-attrs"]))), 64))])),
//                         _: 3
//                     }, 8, ["model-value"])])),
//                     _: 3
//                 }, 512))
//             }
//         })
//           , oe = se
//           , ie = oe;
//         var de = a(78484);
//         const ce = {
//             __name: "ScSelectedEvidences",
//             props: {
//                 modelValue: {
//                     type: Array,
//                     default: ()=>[]
//                 }
//             },
//             emits: ["update:modelValue", "remove"],
//             setup(e, {emit: t}) {
//                 const a = e
//                   , {translate: l} = (0,
//                 h.Z)();
//                 function c(e) {
//                     t("remove", e),
//                     t("update:modelValue", a.modelValue.filter((t=>t.id !== e.id)));
//                     const l = {
//                         event_type: "delete",
//                         event_object: "symptom",
//                         event_data: {
//                             type: "initial_symptom",
//                             data: [null === e || void 0 === e ? void 0 : e.id]
//                         }
//                     };
//                     i.c.trackEvent("Evidence Search", {
//                         event_details: l
//                     }, ["infermedicaAnalytics"])
//                 }
//                 return (t,a)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.j4)((0,
//                 o.SU)(d.SJ), {
//                     class: "sc-selected-evidences"
//                 }, {
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.WI)(t.$slots, "item", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         symptoms: e.modelValue
//                     })), (()=>[((0,
//                     n.wg)(!0),
//                     (0,
//                     n.iD)(n.HY, null, (0,
//                     n.Ko)(e.modelValue, (e=>((0,
//                     n.wg)(),
//                     (0,
//                     n.j4)(de.Z, {
//                         key: e.label,
//                         class: "sc-selected-evidences__item"
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[(0,
//                         n.WI)(t.$slots, "symptom", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             symptom: e,
//                             translate: (0,
//                             o.SU)(l),
//                             removeHandler: c
//                         })), (()=>[(0,
//                         n.Wm)((0,
//                         o.SU)(d.uy), {
//                             class: "sc-selected-evidences__symptom",
//                             "button-remove-attrs": {
//                                 "aria-label": `${(0,
//                                 o.SU)(l)("common.remove")} ${e.label}`
//                             },
//                             onRemove: t=>c(e)
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.Uk)((0,
//                             s.zw)((0,
//                             o.SU)(b.Ez)(e.label)), 1)])),
//                             _: 2
//                         }, 1032, ["button-remove-attrs", "onRemove"])]))])),
//                         _: 2
//                     }, 1024)))), 128))]))])),
//                     _: 3
//                 }))
//             }
//         }
//           , re = ce
//           , ue = re;
//         var ve = a(98646);
//         const me = {
//             key: 0,
//             id: "empty-symptoms",
//             class: "evidence-search-body-widget__empty-symptoms"
//         }
//           , pe = "initial"
//           , ye = {
//             __name: "InitialSymptoms",
//             setup(e) {
//                 var t, a;
//                 const r = (0,
//                 U.J)()
//                   , v = (0,
//                 F.V)()
//                   , m = (0,
//                 u.z)()
//                   , {translate: p} = (0,
//                 h.Z)()
//                   , y = (0,
//                 n.Fl)((()=>r.isTouched))
//                   , b = (0,
//                 n.Fl)((()=>r.isInvalid))
//                   , _ = (0,
//                 n.f3)(ve.bz)
//                   , f = (0,
//                 n.Fl)((()=>v.isRtl))
//                   , g = (0,
//                 n.Fl)((()=>r.noInternet))
//                   , S = (0,
//                 n.Fl)((()=>({
//                     title: p("initialSymptoms.header")
//                 })))
//                   , w = (0,
//                 n.Fl)((()=>m.patientSex))
//                   , k = (0,
//                 n.Fl)((()=>m.patientAge))
//                   , I = (0,
//                 n.Fl)((()=>{
//                     const e = [];
//                     for (let t = 0; t < v.index; t += 1)
//                         t in m.evidence && e.push(...m.evidence[t].evidence);
//                     return e
//                 }
//                 ))
//                   , x = (0,
//                 o.iH)(null !== (t = null === (a = m.evidenceByIndex(v.index)) || void 0 === a ? void 0 : a.evidence) && void 0 !== t ? t : [])
//                   , W = (0,
//                 n.Fl)((()=>[...I.value, ...x.value].map((({id: e})=>e))));
//                 (0,
//                 n.YP)((()=>r.isConfirmed), (e=>{
//                     e && m.setConfirmedEvidence(x.value.map((e=>(0,
//                     l.Z)((0,
//                     l.Z)({}, e), {}, {
//                         source: pe,
//                         choice_id: "present"
//                     }))))
//                 }
//                 ));
//                 const $ = (0,
//                 n.Fl)((()=>x.value.length))
//                   , E = (0,
//                 n.Fl)((()=>$.value > 0))
//                   , H = (0,
//                 n.Fl)((()=>1 === $.value));
//                 (0,
//                 n.YP)(E, (e=>{
//                     r.isInvalid = !e
//                 }
//                 ), {
//                     immediate: !0
//                 });
//                 const P = (0,
//                 n.Fl)((()=>!(!y.value || !b.value) && p("initialSymptoms.noSymptomsError")))
//                   , C = (0,
//                 o.iH)(null)
//                   , A = (0,
//                 o.iH)(null)
//                   , j = (0,
//                 o.iH)(!1);
//                 (0,
//                 n.YP)([_, x], (()=>{
//                     j.value = !1
//                 }
//                 ), {
//                     immediate: !0
//                 });
//                 const R = (0,
//                 o.iH)(null)
//                   , B = e=>{
//                     const t = document.createElement("input")
//                       , {offsetTop: a, offsetLeft: l} = e
//                       , n = {
//                         position: "absolute",
//                         top: `${a + 7}px`,
//                         left: `${l}px`,
//                         height: 0,
//                         opacity: 0,
//                         fontSize: "16px"
//                     };
//                     return Object.keys(n).forEach((e=>{
//                         t.style[e] = n[e]
//                     }
//                     )),
//                     document.body.appendChild(t),
//                     t.focus(),
//                     t
//                 }
//                 ;
//                 async function Z() {
//                     var e;
//                     const t = null === (e = C.value) || void 0 === e ? void 0 : e.$el.querySelector("input");
//                     t && (await (0,
//                     n.Y3)(),
//                     t.focus(),
//                     document.body.removeChild(R.value),
//                     R.value = null)
//                 }
//                 async function M(e) {
//                     if ("search" === e) {
//                         var t;
//                         await (0,
//                         n.Y3)();
//                         const e = null === (t = C.value) || void 0 === t ? void 0 : t.$el.querySelector("input");
//                         e && e.focus()
//                     }
//                     if ("point-on-the-body" === e) {
//                         const e = {
//                             event_type: "select",
//                             event_object: "point_on_the_body"
//                         };
//                         i.c.trackEvent("Point On The Body", {
//                             event_details: e
//                         }, ["infermedicaAnalytics"])
//                     }
//                 }
//                 function z() {
//                     j.value = !0;
//                     const e = {
//                         event_type: "select",
//                         event_object: "add_symptom"
//                     };
//                     i.c.trackEvent("Add Symptom", {
//                         event_details: e
//                     })
//                 }
//                 (0,
//                 n.YP)(j, (async e=>{
//                     if (e) {
//                         var t;
//                         await (0,
//                         n.Y3)();
//                         const e = null === (t = C.value) || void 0 === t ? void 0 : t.$el.querySelector("input");
//                         e && (R.value = B(e))
//                     } else {
//                         var a;
//                         const e = null === (a = C.value) || void 0 === a ? void 0 : a.$el.querySelector("input");
//                         e && e.blur(),
//                         await (0,
//                         n.Y3)(),
//                         document.body.classList.remove("focus-is-hidden"),
//                         A.value.$el.focus()
//                     }
//                 }
//                 ));
//                 const q = (0,
//                 o.iH)(null)
//                   , {speak: D} = T(q)
//                   , O = async e=>{
//                     await (0,
//                     n.Y3)();
//                     const t = 0 === x.value.length
//                       , a = [p("initialSymptoms.removedSymptom", {
//                         symptom: e.label
//                     }), t ? p("initialSymptoms.removedAllSymptoms") : ""].join(" ");
//                     D(a)
//                 }
//                 ;
//                 return (e,t)=>((0,
//                 n.wg)(),
//                 (0,
//                 n.iD)("div", {
//                     key: "evidence-search-body-widget",
//                     ref_key: "evidenceSearchRef",
//                     ref: q,
//                     class: "evidence-search-body-widget"
//                 }, [(0,
//                 n.Wm)(c.Z, (0,
//                 n.dG)(S.value, {
//                     class: "evidence-search-body-widget__question"
//                 }), {
//                     default: (0,
//                     n.w5)((()=>[(0,
//                     n.WI)(e.$slots, "hint", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         translate: (0,
//                         o.SU)(p)
//                     })), (()=>[(0,
//                     n.Wm)((0,
//                     o.SU)(d.II), {
//                         class: "evidence-search-body-widget__hint"
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[(0,
//                         n.Uk)((0,
//                         s.zw)((0,
//                         o.SU)(p)("initialSymptoms.hint")), 1)])),
//                         _: 1
//                     })])), (0,
//                     n.WI)(e.$slots, "form-field", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         errorMessage: P.value,
//                         isMobile: (0,
//                         o.SU)(_),
//                         initialEvidences: x.value,
//                         patientSex: w.value,
//                         patientAge: k.value,
//                         noInternet: g.value,
//                         hasEvidences: E.value,
//                         translate: (0,
//                         o.SU)(p),
//                         handleSidePanelOpen: z
//                     })), (()=>[(0,
//                     n.Wm)((0,
//                     o.SU)(d.tb), {
//                         class: "evidence-search-body-widget__validation",
//                         "error-message": P.value
//                     }, {
//                         default: (0,
//                         n.w5)((()=>[(0,
//                         n.WI)(e.$slots, "evidence-search", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             isMobile: (0,
//                             o.SU)(_),
//                             initialEvidences: x.value,
//                             patientSex: w.value,
//                             patientAge: k.value,
//                             noInternet: g.value
//                         })), (()=>[(0,
//                         o.SU)(_) ? (0,
//                         n.kq)("", !0) : ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)(le, {
//                             key: 0,
//                             ref_key: "searchRef",
//                             ref: C,
//                             modelValue: x.value,
//                             "onUpdate:modelValue": t[0] || (t[0] = e=>x.value = e),
//                             "evidence-ids": W.value,
//                             sex: w.value,
//                             age: k.value,
//                             "no-internet": g.value,
//                             class: "evidence-search-body-widget__search"
//                         }, null, 8, ["modelValue", "evidence-ids", "sex", "age", "no-internet"]))])), (0,
//                         n.WI)(e.$slots, "selected-symptoms", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             hasEvidences: E.value,
//                             initialEvidences: x.value,
//                             isMobile: (0,
//                             o.SU)(_),
//                             translate: (0,
//                             o.SU)(p)
//                         })), (()=>[(0,
//                         n.WI)(e.$slots, "selected-symptoms", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             hasEvidences: E.value,
//                             initialEvidences: x.value
//                         })), (()=>[E.value ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)(ue, {
//                             key: 0,
//                             id: "selected-symptoms",
//                             modelValue: x.value,
//                             "onUpdate:modelValue": t[1] || (t[1] = e=>x.value = e),
//                             class: "evidence-search-body-widget__selected-symptoms",
//                             onRemove: O
//                         }, null, 8, ["modelValue"])) : (0,
//                         n.kq)("", !0)])), (0,
//                         n.WI)(e.$slots, "empty-symptoms", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             hasEvidences: E.value,
//                             isMobile: (0,
//                             o.SU)(_),
//                             translate: (0,
//                             o.SU)(p)
//                         })), (()=>[E.value || (0,
//                         o.SU)(_) ? (0,
//                         n.kq)("", !0) : ((0,
//                         n.wg)(),
//                         (0,
//                         n.iD)("div", me, [(0,
//                         n.Wm)((0,
//                         o.SU)(d.II), null, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.Uk)((0,
//                             s.zw)((0,
//                             o.SU)(p)("initialSymptoms.moreSymptomsHint")), 1)])),
//                             _: 1
//                         })]))]))])), (0,
//                         n.WI)(e.$slots, "add-symptoms", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             isMobile: (0,
//                             o.SU)(_),
//                             handleSidePanelOpen: z,
//                             translate: (0,
//                             o.SU)(p)
//                         })), (()=>[(0,
//                         o.SU)(_) ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)((0,
//                         o.SU)(d.wg), {
//                             key: 0,
//                             id: "add-symptoms",
//                             ref_key: "addSymptomsRef",
//                             ref: A,
//                             class: "ui-button--outlined evidence-search-body-widget__add-symptoms",
//                             onClick: z
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.Wm)((0,
//                             o.SU)(d.ax), {
//                                 icon: "plus-circled-filled",
//                                 class: "ui-button__icon"
//                             }), (0,
//                             n.Uk)(" " + (0,
//                             s.zw)((0,
//                             o.SU)(p)("initialSymptoms.addSymptoms")), 1)])),
//                             _: 1
//                         }, 512)) : (0,
//                         n.kq)("", !0)])), (0,
//                         n.WI)(e.$slots, "more-symptoms", (0,
//                         s.vs)((0,
//                         n.F4)({
//                             needMoreEvidences: H.value,
//                             translate: (0,
//                             o.SU)(p)
//                         })), (()=>[H.value ? ((0,
//                         n.wg)(),
//                         (0,
//                         n.j4)((0,
//                         o.SU)(d.mE), {
//                             key: 0,
//                             id: "more-symptoms",
//                             type: "info",
//                             class: "evidence-search-body-widget__more-symptoms"
//                         }, {
//                             default: (0,
//                             n.w5)((()=>[(0,
//                             n.Uk)((0,
//                             s.zw)((0,
//                             o.SU)(p)("initialSymptoms.moreSymptomsHint")), 1)])),
//                             _: 1
//                         })) : (0,
//                         n.kq)("", !0)]))])),
//                         _: 3
//                     }, 8, ["error-message"])]))])),
//                     _: 3
//                 }, 16), (0,
//                 n.WI)(e.$slots, "body-model", (0,
//                 s.vs)((0,
//                 n.F4)({
//                     isMobile: (0,
//                     o.SU)(_),
//                     initialEvidences: x.value,
//                     patientSex: w.value,
//                     patientAge: k.value,
//                     noInternet: g.value,
//                     isRtl: f.value
//                 })), (()=>[(0,
//                 o.SU)(_) ? (0,
//                 n.kq)("", !0) : ((0,
//                 n.wg)(),
//                 (0,
//                 n.j4)(V, {
//                     key: 0,
//                     modelValue: x.value,
//                     "onUpdate:modelValue": t[2] || (t[2] = e=>x.value = e),
//                     "evidence-ids": W.value,
//                     sex: w.value,
//                     age: k.value,
//                     "no-internet": g.value,
//                     "is-rtl": f.value,
//                     class: "evidence-search-body-widget__body-model"
//                 }, null, 8, ["modelValue", "evidence-ids", "sex", "age", "no-internet", "is-rtl"]))])), (0,
//                 n.WI)(e.$slots, "evidence-search-panel", (0,
//                 s.vs)((0,
//                 n.F4)({
//                     isSidePanelOpen: j.value,
//                     handleEnterHandler: Z,
//                     handleSearchPanelTab: M,
//                     initialEvidences: x.value,
//                     patientSex: w.value,
//                     patientAge: k.value,
//                     noInternet: g.value
//                 })), (()=>[(0,
//                 n.Wm)(ie, {
//                     modelValue: j.value,
//                     "onUpdate:modelValue": t[5] || (t[5] = e=>j.value = e),
//                     onAfterEnter: Z,
//                     "onUpdate:openTab": M
//                 }, {
//                     search: (0,
//                     n.w5)((()=>[(0,
//                     n.WI)(e.$slots, "evidence-search", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         initialEvidences: x.value,
//                         patientSex: w.value,
//                         patientAge: k.value,
//                         noInternet: g.value
//                     })), (()=>[(0,
//                     n.Wm)(le, {
//                         ref_key: "searchRef",
//                         ref: C,
//                         modelValue: x.value,
//                         "onUpdate:modelValue": t[3] || (t[3] = e=>x.value = e),
//                         "evidence-ids": W.value,
//                         sex: w.value,
//                         age: k.value,
//                         "no-internet": g.value,
//                         class: "evidence-search-body-widget__search"
//                     }, null, 8, ["modelValue", "evidence-ids", "sex", "age", "no-internet"])]))])),
//                     "point-on-the-body": (0,
//                     n.w5)((()=>[(0,
//                     n.WI)(e.$slots, "body-model", (0,
//                     s.vs)((0,
//                     n.F4)({
//                         initialEvidences: x.value,
//                         patientSex: w.value,
//                         patientAge: k.value,
//                         noInternet: g.value
//                     })), (()=>[(0,
//                     n.Wm)(V, {
//                         modelValue: x.value,
//                         "onUpdate:modelValue": t[4] || (t[4] = e=>x.value = e),
//                         "evidence-ids": W.value,
//                         sex: w.value,
//                         age: k.value,
//                         "no-internet": g.value,
//                         "has-more-details": !1,
//                         class: "evidence-search-body-widget__body-model"
//                     }, null, 8, ["modelValue", "evidence-ids", "sex", "age", "no-internet"])]))])),
//                     _: 3
//                 }, 8, ["modelValue"])]))], 512))
//             }
//         }
//           , be = ye
//           , _e = be
//     }
// }]);
// //# sourceMappingURL=[33]InitialSymptoms.a98661fe.js.map
