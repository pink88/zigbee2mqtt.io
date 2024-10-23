"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[41137],{40689:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>i,data:()=>o});var t=n(24691);const r={class:"hint-container warning"},s={},i=(0,n(89260).A)(s,[["render",function(e,a){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[a[17]||(a[17]=(0,t.Fv)('<h1 id="zboss-adapters" tabindex="-1"><a class="header-anchor" href="#zboss-adapters"><span>ZBOSS adapters</span></a></h1><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>Support for this adapter is <strong>experimental</strong>, not recommended yet for production setups</p></div><p>The adapter for the ZBOSS protocol is based on the example of ZBOSS NCP Host <a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/zigbee/ncp/README.html" target="_blank" rel="noopener noreferrer">Zigbee NCP (Network Co-Processor)</a> for Nordic Semiconductor chips, such as nRF5340, nRF52840, nRF52833, nRF21540.</p><p>The interaction between the chip and the host occurs according to <a href="https://cloud.dsr-corporation.com/index.php/s/BAn4LtRWbJjFiAm" target="_blank" rel="noopener noreferrer">ZBOSS NCP Serial Protocol</a>.</p><p>The adapter code is based on the <a href="https://github.com/kardia-as/zigpy-zboss" target="_blank" rel="noopener noreferrer">zigpy-zboss library</a>.</p>',5)),(0,t.Lk)("div",r,[a[8]||(a[8]=(0,t.Lk)("p",{class:"hint-container-title"},"ATTENTION",-1)),a[9]||(a[9]=(0,t.Lk)("p",null,"Currently, this adapter does not support various functions, so if you depend on these functions, consider using a different adapter.",-1)),(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.bF)(n,{to:"/guide/configuration/zigbee-network.html#changing-the-zigbee-channel"},{default:(0,t.k6)((()=>a[0]||(a[0]=[(0,t.eW)("Changing the channel")]))),_:1}),a[1]||(a[1]=(0,t.eW)(", changing requires re-pairing all devices."))]),(0,t.Lk)("li",null,[a[3]||(a[3]=(0,t.eW)("Adding ")),(0,t.bF)(n,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd"},{default:(0,t.k6)((()=>a[2]||(a[2]=[(0,t.eW)("install codes")]))),_:1}),a[4]||(a[4]=(0,t.eW)(", which is required to pair some devices."))]),(0,t.Lk)("li",null,[(0,t.bF)(n,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestbackup"},{default:(0,t.k6)((()=>a[5]||(a[5]=[(0,t.eW)("Backups")]))),_:1})]),(0,t.Lk)("li",null,[a[7]||(a[7]=(0,t.eW)("Inter-PAN, which is required for ")),(0,t.bF)(n,{to:"/guide/usage/touchlink.html"},{default:(0,t.k6)((()=>a[6]||(a[6]=[(0,t.eW)("touchlink")]))),_:1})])])]),a[18]||(a[18]=(0,t.Fv)('<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> zboss</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',2)),(0,t.Lk)("p",null,[a[11]||(a[11]=(0,t.eW)("Other supported settings are: ")),a[12]||(a[12]=(0,t.Lk)("code",null,"adapter_concurrent",-1)),a[13]||(a[13]=(0,t.eW)(" and ")),a[14]||(a[14]=(0,t.Lk)("code",null,"transmit_power",-1)),a[15]||(a[15]=(0,t.eW)(" (")),(0,t.bF)(n,{to:"/guide/configuration/adapter-settings.html"},{default:(0,t.k6)((()=>a[10]||(a[10]=[(0,t.eW)("docs")]))),_:1}),a[16]||(a[16]=(0,t.eW)(")."))]),a[19]||(a[19]=(0,t.Fv)('<h2 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware"><span>Hardware</span></a></h2><p>Currently tested on nRF52840 Dongle.</p><ul><li><a href="https://github.com/kardia-as/nrf-zboss-ncp" target="_blank" rel="noopener noreferrer">Pre build coordinator firmware for Nordic Semiconductor with nRF52840 SoC</a></li></ul><img src="https://docs-be.nordicsemi.com/bundle/ncs-latest/page/nrf/_images/zigbee_ncp_sample_overview.svg" width="500"><ul><li><a href="https://github.com/andryblack/esp-coordinator" target="_blank" rel="noopener noreferrer">Experimental ESP32-C6 firmware</a></li></ul>',5))])}]]),o=JSON.parse('{"path":"/guide/adapters/zboss.html","title":"ZBOSS adapters","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Hardware","slug":"hardware","link":"#hardware","children":[]}],"git":{"updatedTime":1729705598000},"filePathRelative":"guide/adapters/zboss.md"}')}}]);