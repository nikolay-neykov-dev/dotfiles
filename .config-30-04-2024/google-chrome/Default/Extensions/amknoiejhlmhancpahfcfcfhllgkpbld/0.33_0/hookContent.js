window.__HOPP_EXTENSION_STATUS_PROXY__?window.__HOPP_EXTENSION_STATUS_PROXY__.status="available":window.__HOPP_EXTENSION_STATUS_PROXY__=new Proxy({status:"available",_subscribers:{},subscribe:function(e,r){Array.isArray(this._subscribers[e])?this._subscribers[e].push(r):this._subscribers[e]=[r]}},{set(e,r,a){if(e[r]=a,Array.isArray(e._subscribers[r]))for(let s of e._subscribers[r])s(a);return!0}}),window.__POSTWOMAN_EXTENSION_HOOK__={getVersion:()=>({major:0,minor:33}),decodeB64ToArrayBuffer:(e,r)=>{let a,s,t,n,_,o,i,d;let O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=parseInt(e.length/4*3,10),l=0,w=0;for(l=0,a=new Uint8Array(r||f),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<f;l+=3)//get the 3 octects in 4 ascii chars
_=O.indexOf(e.charAt(w++)),o=O.indexOf(e.charAt(w++)),i=O.indexOf(e.charAt(w++)),d=O.indexOf(e.charAt(w++)),s=_<<2|o>>4,t=(15&o)<<4|i>>2,n=(3&i)<<6|d,a[l]=s,64!=i&&(a[l+1]=t),64!=d&&(a[l+2]=n);return a},transformFormData:async e=>{let r=e=>new Promise((r,a)=>{let s=new FileReader;s.readAsDataURL(e),s.onload=()=>r(s.result),s.onerror=e=>a(e)});if(e.data instanceof FormData){e.formFiles=[],e.formData=[];let a=Array.from(e.data.entries());for(let[s,t]of a)if(t instanceof File){let a=await r(t);e.formFiles.push({key:s,value:a,filename:t.name})}else e.formData.push({key:s,value:t});return e.data=null,e}},cancelRequest:e=>{window.postMessage({type:"__POSTWOMAN_EXTENSION_CANCEL__"},"*")},sendRequest:e=>new Promise((r,a)=>{window.addEventListener("message",function e(s){if(s.source===window&&s.data){if("__POSTWOMAN_EXTENSION_RESPONSE__"===s.data.type){// Apply transformation from base64 to arraybuffer
    if(s.data.isBinary){let e=s.data.response.data.length/4*3,r=new ArrayBuffer(e);window.__POSTWOMAN_EXTENSION_HOOK__.decodeB64ToArrayBuffer(s.data.response.data,r),s.data.response.data=r}r(s.data.response),window.removeEventListener("message",e)}else if("__POSTWOMAN_EXTENSION_ERROR__"===s.data.type){let r=s.data.error,t=Error(r.message,r.fileName,r.lineNumber);if(t.name=r.name,t.stack=r.stack,r.response){t.response=r.response;let e=t.response.data.length/4*3,a=new ArrayBuffer(e);window.__POSTWOMAN_EXTENSION_HOOK__.decodeB64ToArrayBuffer(t.response.data,a),t.response.data=a}a(t),window.removeEventListener("message",e)}}}),window.__POSTWOMAN_EXTENSION_HOOK__.transformFormData(e).then(r=>{window.postMessage({type:"__POSTWOMAN_EXTENSION_REQUEST__",config:e},"*")})})};//# sourceMappingURL=hookContent.js.map

//# sourceMappingURL=hookContent.js.map
