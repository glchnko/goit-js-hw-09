var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function l({position:e,delayVal:o}){const t=Math.random()>.3;return new Promise(((n,i)=>setTimeout((()=>{t?n({position:e,delayVal:o}):i({position:e,delayVal:o})}),o)))}function a({position:e,delayVal:o}){i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function u({position:e,delayVal:o}){i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}r.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(r.delay.value);const t=Number(r.step.value),n=Number(r.amount.value);for(let e=1;e<=n;e+=1)o+=1===e?0:t,l({position:e,delayVal:o}).then(a).catch(u)}));
//# sourceMappingURL=03-promises.075cb77c.js.map
