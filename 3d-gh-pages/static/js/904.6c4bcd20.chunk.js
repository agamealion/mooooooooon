"use strict";(self.webpackChunk_3d_examples=self.webpackChunk_3d_examples||[]).push([[904],{5904:function(e,a,n){n.r(a),n.d(a,{default:function(){return w}});var t=n(5671),i=n(3144),o=n(136),r=n(4062),s=n(7313),d=n(3562),c=n(2518),p=n(6417),w=function(e){(0,o.Z)(s,e);var a=(0,r.Z)(s);function s(){var e;(0,t.Z)(this,s);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).initThree=function(){var e=new d.CP7({canvas:document.querySelector("canvas.webgl"),antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.toneMapping=d.YGz;var a=new d.xsS,t=window.innerWidth/window.innerHeight,i=new d.iKG(-96*t,96*t,96,-96,1,1e3);i.position.set(0,20,200),i.lookAt(new d.Pa4(0,0,0));var o=new d.ZAu,r=new c.z(i,e.domElement);r.enableDamping=!0,window.addEventListener("resize",(function(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}),!1);var s=new d.Ox3(16777215,1);s.intensity=1.2,s.position.set(-10,10,5),s.castShadow=!0,s.target=o,s.shadow.mapSize.width=512,s.shadow.mapSize.height=512,s.shadow.camera.top=10,s.shadow.camera.bottom=-5,s.shadow.camera.left=-5,s.shadow.camera.right=10,a.add(s);var p=new d.Mig(16777215,.8);a.add(p);var w=new d.dpR,l=new d.Kj0(new d.xo$(10,64,64),new d.Wid({map:w.load(n(2934)),normalMap:w.load(n(5420)),roughnessMap:w.load(n(8394)),normalScale:new d.FM8(10,10),metalness:.1}));l.rotation.y=-Math.PI;var h=new d.Kj0(new d.xo$(10.6,64,64),new d.YBo({alphaMap:w.load(n(3381)),transparent:!0,opacity:.4,depthTest:!0}));o.add(l),o.add(h),o.scale.set(6,6,6),a.add(o);var m=new d.Kj0(new d.xo$(2,32,32),new d.Wid({map:w.load(n(4524)),normalMap:w.load(n(7538)),roughnessMap:w.load(n(2675)),normalScale:new d.FM8(10,10),metalness:.1}));m.position.set(-120,0,-120),m.scale.set(6,6,6),a.add(m);var u=new d.SUY;!function n(){var t=u.getElapsedTime();requestAnimationFrame(n),o&&(o.rotation.y+=.002),h&&(h.rotation.y+=.004),h&&(h.rotation.x+=.002),r&&r.update(),m&&(m.position.x=-120*Math.sin(.5*t)),m&&(m.position.z=-120*Math.cos(.5*t)),e.render(a,i)}()},e}return(0,i.Z)(s,[{key:"componentDidMount",value:function(){this.initThree()}},{key:"render",value:function(){return(0,p.jsx)("div",{className:"earth_page",children:(0,p.jsx)("canvas",{className:"webgl"})})}}]),s}(s.Component)},3381:function(e,a,n){e.exports=n.p+"static/media/clouds.6b2967770126541c780a.jpeg"},2934:function(e,a,n){e.exports=n.p+"static/media/earth_basic.eef61b552b721f82b620.jpeg"},5420:function(e,a,n){e.exports=n.p+"static/media/earth_normal.84f1c5850ed8ec1bf580.jpeg"},8394:function(e,a,n){e.exports=n.p+"static/media/earth_rough.25ef2f179784040a848d.jpeg"},4524:function(e,a,n){e.exports=n.p+"static/media/moon_basic.082a66e385964b2c2630.jpeg"},7538:function(e,a,n){e.exports=n.p+"static/media/moon_normal.d5085fe4ab72b5944dc5.jpeg"},2675:function(e,a,n){e.exports=n.p+"static/media/moon_roughness.f64141dfb8f717e725e2.jpeg"}}]);