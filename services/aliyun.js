"use strict";var e=require("fs"),t=require("ali-oss"),r=require("medusa-interfaces");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=n(e),o=n(t);function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var c=i(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return s(this,r)}}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(l,r.FileService);var t,n,i,s=f(l);function l(e,t){var r;return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=s.call(this)).bucket=t.bucket,r.accessKeyId=t.access_key_id,r.accessKeySecret=t.access_key_secret,r.region=t.region,r}return t=l,(n=[{key:"upload",value:function(e){var t=this.accessKeyId,r=this.accessKeySecret,n=this.region,u=this.bucket,i=new o.default({accessKeyId:t,accessKeySecret:r,region:n,bucket:u}),a=e.originalname;return new Promise((function(t,r){i.put(a,c.default.createReadStream(e.path)).then((function(e){t({url:e.url})})).catch(r)}))}},{key:"delete",value:function(e){var t=this.accessKeyId,r=this.accessKeySecret,n=this.region,c=this.bucket,u=new o.default({accessKeyId:t,accessKeySecret:r,region:n,bucket:c});return new Promise((function(t,r){u.delete(e).then((function(e){t(e)})).catch(r)}))}}])&&u(t.prototype,n),i&&u(t,i),Object.defineProperty(t,"prototype",{writable:!1}),l}();exports.default=l;
