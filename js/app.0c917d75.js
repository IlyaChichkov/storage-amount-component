(function(){"use strict";var a={812:function(a,t,e){var n=e(9242),i=e(3396);function o(a,t,e,n,o,c){const s=(0,i.up)("StorageComponent");return(0,i.wg)(),(0,i.j4)(s)}var c=e.p+"img/logo.c5b5f394.svg",s=e.p+"img/icon-document.62eb94f3.svg",l=e.p+"img/icon-folder.be901add.svg",r=e.p+"img/icon-upload.4866655e.svg";const d=a=>((0,i.dD)("data-v-32f7caf2"),a=a(),(0,i.Cn)(),a),f={class:"component-container"},u=(0,i.uE)('<section class="bg-dark-blue-100 rounded-tr-[110px] rounded-xl p-4 mb-5 sm:mb-0 sm:mr-5 sm:pr-20" data-v-32f7caf2><div class="flex flex-col px-6" data-v-32f7caf2><div class="py-6 mt-5 mb-2" data-v-32f7caf2><img src="'+c+'" alt="icon-logo" data-v-32f7caf2></div><div class="flex flex-row py-2 flex-auto h-full mb-5 mb-0" data-v-32f7caf2><div class="icon-item shrink-0" data-v-32f7caf2><div class="icon-block" data-v-32f7caf2><img class="icon-item-img" src="'+s+'" alt="icon-document" data-v-32f7caf2></div></div><div class="icon-item" data-v-32f7caf2><div class="icon-block" data-v-32f7caf2><img class="icon-item-img" src="'+l+'" alt="icon-folder" data-v-32f7caf2></div></div><div class="icon-item" data-v-32f7caf2><div class="icon-block" data-v-32f7caf2><img class="icon-item-img" src="'+r+'" alt="icon-upload" data-v-32f7caf2></div></div></div></div></section>',1),v={class:"info-container"},p={class:"px-6 py-5 h-fit w-full"},m=(0,i.uE)('<div class="relative" data-v-32f7caf2><div class="left-space-block-desktop relative" data-v-32f7caf2><p class="text-dark-blue-200 font-bold text-5xl" data-v-32f7caf2>185<sup class="text-lg mx-2 text-blue-grayish uppercase" data-v-32f7caf2>GB left</sup></p><svg class="absolute -bottom-6 right-0" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-32f7caf2><path d="M53 53L0.5 0.5H53V53Z" fill="#FFFFFF" data-v-32f7caf2></path></svg></div></div><div class="text-center sm:text-start mb-4" data-v-32f7caf2><p data-v-32f7caf2>You&#39;ve used <span class="font-bold" data-v-32f7caf2>815 GB</span> of your storage</p></div>',2),g={class:"my-1"},b=(0,i.uE)('<div class="flex flex-row justify-between text-sm" data-v-32f7caf2><p class="font-bold" data-v-32f7caf2>0 GB</p><p class="font-bold" data-v-32f7caf2>1000 GB</p></div><div class="relative px-4 h-[24px] sm:h-0" data-v-32f7caf2><div class="left-space-block" data-v-32f7caf2><p class="text-dark-blue-200 font-bold text-5xl" data-v-32f7caf2>185<sup class="text-lg mx-2 text-blue-grayish uppercase" data-v-32f7caf2>GB left</sup></p></div></div>',2),h=d((()=>(0,i._)("div",{class:"bg-image"},null,-1)));function x(a,t,e,n,o,c){const s=(0,i.up)("SliderComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",f,[u,(0,i._)("section",v,[(0,i._)("div",p,[m,(0,i._)("div",g,[(0,i.Wm)(s)]),b])])]),h],64)}var w=e(7139);const y=a=>((0,i.dD)("data-v-81d3f28e"),a=a(),(0,i.Cn)(),a),_={class:"slider-container relative"},V=y((()=>(0,i._)("div",{class:"absolute slider-bg"},null,-1))),k=["max","min"];function O(a,t,e,o,c,s){return(0,i.wg)(),(0,i.iD)("div",_,[V,(0,i._)("div",{class:"absolute slider-fill",style:(0,w.j5)({right:s.getSliderWidth})},null,4),(0,i._)("div",{class:"absolute slider-thumb-container",style:(0,w.j5)({right:s.getSliderWidth}),onDrag:t[1]||(t[1]=(...a)=>s.changeValue&&s.changeValue(...a))},[(0,i._)("div",{class:"absolute slider-thumb",onDrag:t[0]||(t[0]=(...a)=>s.changeValue&&s.changeValue(...a))},null,32)],36),(0,i.wy)((0,i._)("input",{class:"z-40 ml-2 mr-2 opacity-0",type:"range","onUpdate:modelValue":t[2]||(t[2]=a=>c.sliderValue=a),max:c.maxValue,min:c.minValue,disabled:""},null,8,k),[[n.nr,c.sliderValue]])])}var j={name:"SliderComponent",data(){return{sliderValue:725,maxValue:1e3,minValue:0}},methods:{changeValue:function(){}},computed:{getSliderWidth:function(){return(this.maxValue-this.sliderValue)/50.4+.35+"rem"}}},C=e(89);const S=(0,C.Z)(j,[["render",O],["__scopeId","data-v-81d3f28e"]]);var F=S,B={name:"StorageComponent",components:{SliderComponent:F}};const D=(0,C.Z)(B,[["render",x],["__scopeId","data-v-32f7caf2"]]);var G=D,E={name:"App",components:{StorageComponent:G}};const W=(0,C.Z)(E,[["render",o]]);var Z=W;(0,n.ri)(Z).mount("#app")}},t={};function e(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return a[n](o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,n,i,o){if(!n){var c=1/0;for(d=0;d<a.length;d++){n=a[d][0],i=a[d][1],o=a[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||c>=o)&&Object.keys(e.O).every((function(a){return e.O[a](n[l])}))?n.splice(l--,1):(s=!1,o<c&&(c=o));if(s){a.splice(d--,1);var r=i();void 0!==r&&(t=r)}}return t}o=o||0;for(var d=a.length;d>0&&a[d-1][2]>o;d--)a[d]=a[d-1];a[d]=[n,i,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.p="/storage-amount-component/"}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var i,o,c=n[0],s=n[1],l=n[2],r=0;if(c.some((function(t){return 0!==a[t]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var d=l(e)}for(t&&t(n);r<c.length;r++)o=c[r],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(d)},n=self["webpackChunkstorage_amount_component"]=self["webpackChunkstorage_amount_component"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(812)}));n=e.O(n)})();
//# sourceMappingURL=app.0c917d75.js.map