"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52871],{98272:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>r,data:()=>n});var a=o(24691);const i={},r=(0,o(89260).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[9]||(t[9]=(0,a.Lk)("h1",{id:"tuya-ts0601-rcbo",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-rcbo"},[(0,a.Lk)("span",null,"Tuya TS0601_rcbo")])],-1)),(0,a.Lk)("table",null,[t[7]||(t[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TS0601_rcbo")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"DIN mount RCBO with smart energy metering")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"meter_number, state, alarm, trip, child_lock, power_on_behavior, countdown_timer, voltage_rms, current, current_average, power, voltage, energy, temperature, power_l1, power_l2, power_l3, energy_consumed, clear_device_data, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_rcbo.png",alt:"Tuya TS0601_rcbo"})])],-1)),t[6]||(t[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"HOCH ZJSBL7-100Z, WDYK ZJSBL7-100Z")],-1))])]),t[10]||(t[10]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,a.Fv)('<ul><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="meter-number-text" tabindex="-1"><a class="header-anchor" href="#meter-number-text"><span>Meter number (text)</span></a></h3><p>Meter number. Value can be found in the published state on the <code>meter_number</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary"><span>State (binary)</span></a></h3><p>State. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-text" tabindex="-1"><a class="header-anchor" href="#alarm-text"><span>Alarm (text)</span></a></h3><p>Alarm text. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="trip-binary" tabindex="-1"><a class="header-anchor" href="#trip-binary"><span>Trip (binary)</span></a></h3><p>Trip. Value can be found in the published state on the <code>trip</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trip&quot;: NEW_VALUE}</code>. If value equals <code>trip</code> trip is ON, if <code>clear</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Child lock. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> child lock is ON, if <code>OFF</code> OFF.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power on behavior (enum)</span></a></h3><p>Power on behavior. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>previous</code>.</p><h3 id="countdown-timer-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-timer-numeric"><span>Countdown timer (numeric)</span></a></h3><p>Countdown timer. Value can be found in the published state on the <code>countdown_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>86400</code>. The unit of this value is <code>s</code>.</p><h3 id="voltage-rms-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-rms-numeric"><span>Voltage rms (numeric)</span></a></h3><p>Voltage RMS. Value can be found in the published state on the <code>voltage_rms</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-average-numeric" tabindex="-1"><a class="header-anchor" href="#current-average-numeric"><span>Current average (numeric)</span></a></h3><p>Current average. Value can be found in the published state on the <code>current_average</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-l1-numeric"><span>Power l1 (numeric)</span></a></h3><p>Instantaneous measured power on phase 1. Value can be found in the published state on the <code>power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-l2-numeric"><span>Power l2 (numeric)</span></a></h3><p>Instantaneous measured power on phase 2. Value can be found in the published state on the <code>power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l3-numeric" tabindex="-1"><a class="header-anchor" href="#power-l3-numeric"><span>Power l3 (numeric)</span></a></h3><p>Instantaneous measured power on phase 3. Value can be found in the published state on the <code>power_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#energy-consumed-numeric"><span>Energy consumed (numeric)</span></a></h3><p>Consumed energy. Value can be found in the published state on the <code>energy_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="clear-device-data-enum" tabindex="-1"><a class="header-anchor" href="#clear-device-data-enum"><span>Clear device data (enum)</span></a></h3><p>Clear device data. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_device_data&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',42))])}]]),n=JSON.parse('{"path":"/devices/TS0601_rcbo.html","title":"Tuya TS0601_rcbo control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_rcbo control via MQTT","description":"Integrate your Tuya TS0601_rcbo via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Meter number (text)","slug":"meter-number-text","link":"#meter-number-text","children":[]},{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Alarm (text)","slug":"alarm-text","link":"#alarm-text","children":[]},{"level":3,"title":"Trip (binary)","slug":"trip-binary","link":"#trip-binary","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Countdown timer (numeric)","slug":"countdown-timer-numeric","link":"#countdown-timer-numeric","children":[]},{"level":3,"title":"Voltage rms (numeric)","slug":"voltage-rms-numeric","link":"#voltage-rms-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Current average (numeric)","slug":"current-average-numeric","link":"#current-average-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Power l1 (numeric)","slug":"power-l1-numeric","link":"#power-l1-numeric","children":[]},{"level":3,"title":"Power l2 (numeric)","slug":"power-l2-numeric","link":"#power-l2-numeric","children":[]},{"level":3,"title":"Power l3 (numeric)","slug":"power-l3-numeric","link":"#power-l3-numeric","children":[]},{"level":3,"title":"Energy consumed (numeric)","slug":"energy-consumed-numeric","link":"#energy-consumed-numeric","children":[]},{"level":3,"title":"Clear device data (enum)","slug":"clear-device-data-enum","link":"#clear-device-data-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729705598000},"filePathRelative":"devices/TS0601_rcbo.md"}')}}]);