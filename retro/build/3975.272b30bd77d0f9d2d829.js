"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3975,5874],{43975:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var n=a(5768),o=a(25712);const r={id:"@jupyterlab/mathjax2-extension:plugin",autoStart:!0,provides:a(74267).ILatexTypesetter,activate:()=>{const[t,e]=["fullMathjaxUrl","mathjaxConfig"],a=n.PageConfig.getOption(t),i=n.PageConfig.getOption(e);if(!a){const a=`${r.id} uses '${t}' and '${e}' in PageConfig to operate but '${t}' was not found.`;throw new Error(a)}return new o.MathJaxTypesetter({url:a,config:i})}},i=r}}]);
//# sourceMappingURL=3975.272b30bd77d0f9d2d829.js.map