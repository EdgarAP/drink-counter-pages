(self.webpackChunkdrink_counter=self.webpackChunkdrink_counter||[]).push([[592],{592:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ion_select:()=>c,ion_select_option:()=>f,ion_select_popover:()=>y});var o=i(1035),n=i(5466),s=i(7278),r=i(4205),a=i(7853);i(1240),i(4751),i(7286),i(788);const l=(e,t)=>{if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(t=>t.value===e.value)};let c=class{constructor(e){(0,o.r)(this,e),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-sel-"+b++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=e=>{this.setFocus(),this.open(e)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}styleChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((e,t,i)=>{if("undefined"==typeof MutationObserver)return;const o=new MutationObserver(e=>{i(((e,t)=>{let i;e.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)i=l(e.addedNodes[t],"ion-select-option")||i})})(e))});return o.observe(e,{childList:!0,subtree:!0}),o})(this.el,0,async()=>{this.updateOverlayOptions()})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(e){if(this.disabled||this.isExpanded)return;const t=this.overlay=await this.createOverlay(e);if(this.isExpanded=!0,t.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await t.present(),"popover"===this.interface){let e=this.childOpts.map(e=>e.value).indexOf(this.value);e=e>-1?e:0;const i=t.querySelector(`.select-interface-option:nth-child(${e+1})`);i&&(0,s.f)(i)}return t}createOverlay(e){let t=this.interface;return"action-sheet"===t&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"!==t||e||(console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`),t="alert"),"action-sheet"===t?this.openActionSheet():"popover"===t?this.openPopover(e):this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,i);break;case"popover":const o=e.querySelector("ion-select-popover");o&&(o.options=this.createPopoverOptions(t,i));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(e,t){const i=e.map(e=>{const i=h(e),o=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" "),n=`${v} ${o}`;return{role:d(i,t,this.compareWith)?"selected":"",text:e.textContent,cssClass:n,handler:()=>{this.value=i}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(e,t,i){return e.map(e=>{const o=h(e),n=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" ");return{type:t,cssClass:`${v} ${n}`,label:e.textContent||"",value:o,checked:d(o,i,this.compareWith),disabled:e.disabled}})}createPopoverOptions(e,t){return e.map(e=>{const i=h(e),o=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" ");return{text:e.textContent||"",cssClass:`${v} ${o}`,value:i,checked:d(i,t,this.compareWith),disabled:e.disabled,handler:e=>{this.value=e,this.multiple||this.close()}}})}async openPopover(e){const t=this.interfaceOptions,i=(0,n.b)(this),o="md"!==i,s=this.multiple,a=this.value;let l=e,c="auto";const d=this.el.closest("ion-item");d&&(d.classList.contains("item-label-floating")||d.classList.contains("item-label-stacked"))&&(l=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:d}}),c="cover");const h=Object.assign(Object.assign({mode:i,event:l,alignment:"center",size:c,showBackdrop:o},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,multiple:s,value:a,options:this.createPopoverOptions(this.childOpts,a)}});return r.c.create(h)}async openActionSheet(){const e=(0,n.b)(this),t=this.interfaceOptions,i=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return r.b.create(i)}async openAlert(){const e=this.getLabel(),t=e?e.textContent:null,i=this.interfaceOptions,o=this.multiple?"checkbox":"radio",s=(0,n.b)(this),a=Object.assign(Object.assign({mode:s},i),{header:i.header?i.header:t,inputs:this.createAlertInputs(this.childOpts,o,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.value=e}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return r.a.create(a)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,s.k)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:m(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})}render(){const{disabled:e,el:t,inputId:i,isExpanded:r,name:l,placeholder:c,value:d}=this,h=(0,n.b)(this),{labelText:u,labelId:m}=(0,s.e)(t,i);(0,s.h)(!0,t,l,p(d),e);let g=!1,b=this.getText();""===b&&void 0!==c&&(b=c,g=!0);const v={"select-text":!0,"select-placeholder":g},f=g?"placeholder":"text",x=void 0!==u?""!==b?`${b}, ${u}`:u:b;return(0,o.h)(o.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":x,class:{[h]:!0,"in-item":(0,a.h)("ion-item",t),"select-disabled":e,"select-expanded":r}},(0,o.h)("div",{"aria-hidden":"true",class:v,part:f},b),(0,o.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,o.h)("div",{class:"select-icon-inner"})),(0,o.h)("label",{id:m},x),(0,o.h)("button",{type:"button",disabled:e,id:i,"aria-labelledby":m,"aria-haspopup":"listbox","aria-expanded":`${r}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:e=>this.focusEl=e}))}get el(){return(0,o.i)(this)}static get watchers(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}}};const d=(e,t,i)=>void 0!==e&&(Array.isArray(e)?e.some(e=>u(e,t,i)):u(e,t,i)),h=e=>{const t=e.value;return void 0===t?e.textContent||"":t},p=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},u=(e,t,i)=>"function"==typeof i?i(e,t):"string"==typeof i?e[i]===t[i]:Array.isArray(t)?t.includes(e):e===t,m=(e,t,i)=>void 0===t?"":Array.isArray(t)?t.map(t=>g(e,t,i)).filter(e=>null!==e).join(", "):g(e,t,i)||"",g=(e,t,i)=>{const o=e.find(e=>u(h(e),t,i));return o?o.textContent:null};let b=0;const v="select-interface-option";c.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};let f=class{constructor(e){(0,o.r)(this,e),this.inputId="ion-selopt-"+x++,this.disabled=!1}render(){return(0,o.h)(o.H,{role:"option",id:this.inputId,class:(0,n.b)(this)})}get el(){return(0,o.i)(this)}},x=0;f.style=":host{display:none}";let y=class{constructor(e){(0,o.r)(this,e),this.options=[]}onSelect(e){this.setChecked(e),this.callOptionHandler(e)}findOptionFromEvent(e){const{options:t}=this;return t.find(t=>t.value===e.target.value)}callOptionHandler(e){const t=this.findOptionFromEvent(e),i=this.getValues(e);t&&t.handler&&(0,r.s)(t.handler,i)}rbClick(e){this.callOptionHandler(e)}setChecked(e){const{multiple:t}=this,i=this.findOptionFromEvent(e);t&&i&&(i.checked=e.detail.checked)}getValues(e){const{multiple:t,options:i}=this;if(t)return i.filter(e=>e.checked).map(e=>e.value);const o=this.findOptionFromEvent(e);return o?o.value:void 0}renderOptions(e){const{multiple:t}=this;switch(t){case!0:return this.renderCheckboxOptions(e);default:return this.renderRadioOptions(e)}}renderCheckboxOptions(e){return e.map(e=>(0,o.h)("ion-item",{class:(0,a.g)(e.cssClass)},(0,o.h)("ion-checkbox",{slot:"start",value:e.value,disabled:e.disabled,checked:e.checked}),(0,o.h)("ion-label",null,e.text)))}renderRadioOptions(e){const t=e.filter(e=>e.checked).map(e=>e.value)[0];return(0,o.h)("ion-radio-group",{value:t},e.map(e=>(0,o.h)("ion-item",{class:(0,a.g)(e.cssClass)},(0,o.h)("ion-label",null,e.text),(0,o.h)("ion-radio",{value:e.value,disabled:e.disabled,onClick:e=>this.rbClick(e)}))))}render(){const{header:e,message:t,options:i,subHeader:s}=this,r=void 0!==s||void 0!==t;return(0,o.h)(o.H,{class:(0,n.b)(this)},(0,o.h)("ion-list",null,void 0!==e&&(0,o.h)("ion-list-header",null,e),r&&(0,o.h)("ion-item",null,(0,o.h)("ion-label",{class:"ion-text-wrap"},void 0!==s&&(0,o.h)("h3",null,s),void 0!==t&&(0,o.h)("p",null,t))),this.renderOptions(i)))}};y.style={ios:".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",md:".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}"}}}]);