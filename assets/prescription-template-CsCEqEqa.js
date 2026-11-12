import{c as f,aS as y}from"./index-DmpBSi7c.js";const d=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],z=f("calculator",d);const g=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],S=f("file-image",g);const p=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],I=f("zoom-in",p);const w=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],P=f("zoom-out",w);function m(t){if(!t||typeof t!="string")return!1;const e=t.trim();return e.length<5||e.startsWith("onedrive://")?!1:e.startsWith("data:image/")||e.startsWith("blob:")||e.startsWith("http://")||e.startsWith("https://")}function u(t){const e=i(t.patient_name||"Patient Record"),r=i(t.prescribing_doctor||"Authorized Physician"),h=i(t.product_name||"Humaxin Mix 70/30"),x=i(t.national_id||"N/A"),s=i(t.patient_phone||"N/A"),o=i(t.record_id||"DSP-000000"),n=i(t.account_name||"Authorized Dispensing Station"),a=t.dispensed_qty||1,c=!!(t.is_pharmacy_switch||t.notes&&y(t.notes));let l="Nov 5, 2026";try{t.created_at&&(l=new Date(t.created_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))}catch{}return`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1060" width="100%" height="100%" style="background:#ffffff; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <defs>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#065f46"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-2%" width="110%" height="106%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="1060" fill="#ffffff"/>
  <rect x="20" y="20" width="760" height="1020" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#shadow)"/>

  <!-- Top Accent Header Banner -->
  <path d="M 20 36 Q 20 20 36 20 L 764 20 Q 780 20 780 36 L 780 120 L 20 120 Z" fill="url(#headerGrad)"/>

  <!-- Decorative Pattern -->
  <circle cx="720" cy="50" r="80" fill="#ffffff" opacity="0.06"/>
  <circle cx="670" cy="110" r="50" fill="#ffffff" opacity="0.04"/>

  <!-- Header Content -->
  <text x="50" y="58" font-size="13" font-weight="700" fill="#a7f3d0" letter-spacing="2">EVA PHARMA • PATIENT SUPPORT PROGRAM</text>
  <text x="50" y="90" font-size="24" font-weight="800" fill="#ffffff" letter-spacing="0.5">EVA INSULIN 360</text>
  <text x="50" y="108" font-size="12" font-weight="500" fill="#d1fae5">Official Medical Prescription &amp; Dispense Documentation</text>

  <!-- Right Header Badge -->
  <rect x="580" y="42" width="170" height="42" rx="21" fill="#ffffff" opacity="0.18"/>
  <rect x="582" y="44" width="166" height="38" rx="19" fill="#047857"/>
  <text x="665" y="68" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">VERIFIED DISPENSE</text>

  <!-- Meta Info Strip -->
  <rect x="50" y="145" width="700" height="48" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <text x="70" y="174" font-size="11" font-weight="600" fill="#64748b">RECORD ID:</text>
  <text x="145" y="174" font-size="13" font-weight="800" fill="#0f172a" font-family="monospace">${o}</text>

  <text x="320" y="174" font-size="11" font-weight="600" fill="#64748b">DATE:</text>
  <text x="365" y="174" font-size="12" font-weight="700" fill="#0f172a">${l}</text>

  <text x="510" y="174" font-size="11" font-weight="600" fill="#64748b">STATUS:</text>
  <text x="565" y="174" font-size="12" font-weight="700" fill="#059669">● Verified &amp; Dispensed</text>

  <!-- Patient Details Box -->
  <rect x="50" y="215" width="340" height="195" rx="12" fill="url(#cardGrad)" stroke="#e2e8f0" stroke-width="1.5"/>
  <rect x="50" y="215" width="340" height="36" rx="12" fill="#0f766e" opacity="0.08"/>
  <text x="70" y="238" font-size="11" font-weight="800" fill="#0f766e" letter-spacing="1">PATIENT DETAILS</text>

  <text x="70" y="275" font-size="11" font-weight="600" fill="#64748b">Patient Name:</text>
  <text x="70" y="298" font-size="16" font-weight="800" fill="#0f172a">${e}</text>

  <text x="70" y="332" font-size="11" font-weight="600" fill="#64748b">National ID:</text>
  <text x="70" y="352" font-size="13" font-weight="700" fill="#0f172a" font-family="monospace">${x}</text>

  <text x="70" y="382" font-size="11" font-weight="600" fill="#64748b">Phone: <tspan font-weight="700" fill="#0f172a">${s}</tspan></text>

  <!-- Prescribing Doctor & Station Box -->
  <rect x="410" y="215" width="340" height="195" rx="12" fill="url(#cardGrad)" stroke="#e2e8f0" stroke-width="1.5"/>
  <rect x="410" y="215" width="340" height="36" rx="12" fill="#0369a1" opacity="0.08"/>
  <text x="430" y="238" font-size="11" font-weight="800" fill="#0369a1" letter-spacing="1">PHYSICIAN &amp; DISPENSING STATION</text>

  <text x="430" y="275" font-size="11" font-weight="600" fill="#64748b">Prescribing Doctor:</text>
  <text x="430" y="298" font-size="15" font-weight="800" fill="#0f172a">${r}</text>

  <text x="430" y="332" font-size="11" font-weight="600" fill="#64748b">Dispensing Station:</text>
  <text x="430" y="354" font-size="13" font-weight="700" fill="#0f172a">${n}</text>

  <text x="430" y="382" font-size="11" font-weight="600" fill="#64748b">Category: <tspan font-weight="700" fill="#0f172a">${c?"Pharmacy Direct Switch":"Prescription Dispense"}</tspan></text>

  <!-- Rx Main Prescription Block -->
  <rect x="50" y="430" width="700" height="320" rx="16" fill="#ffffff" stroke="#047857" stroke-width="2"/>
  <rect x="50" y="430" width="700" height="42" rx="16" fill="#ecfdf5"/>
  
  <!-- Classic Rx Symbol ℞ -->
  <text x="75" y="460" font-size="28" font-weight="900" fill="#047857" font-style="italic">℞</text>
  <text x="110" y="457" font-size="13" font-weight="800" fill="#065f46" letter-spacing="1">MEDICAL PRESCRIPTION &amp; ALLOCATION ORDER</text>

  <!-- Big Watermark Rx in background -->
  <text x="610" y="650" font-size="180" font-weight="900" fill="#f0fdf4" font-style="italic" opacity="0.8">℞</text>

  <!-- Medication Content -->
  <text x="80" y="515" font-size="12" font-weight="700" fill="#047857" letter-spacing="1">PRESCRIBED INSULIN PRODUCT:</text>
  <text x="80" y="555" font-size="24" font-weight="800" fill="#0f172a">${h}</text>

  <rect x="80" y="585" width="220" height="36" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
  <text x="190" y="608" font-size="13" font-weight="800" fill="#047857" text-anchor="middle">DISPENSED: ${a} PEN${a>1?"S":""}</text>
  ${t.daily_units?`
  <rect x="315" y="585" width="280" height="36" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="455" y="608" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">DOSE: ${t.daily_units} IU/DAY (~${Math.round(t.daily_units/10*10)/10} PENS/MO)</text>
  `:""}

  <text x="80" y="660" font-size="12" font-weight="600" fill="#475569">Program Dosage Guidelines:</text>
  <text x="80" y="682" font-size="13" font-weight="600" fill="#334155">• Subcutaneous injection as directed by the treating physician.</text>
  <text x="80" y="705" font-size="13" font-weight="600" fill="#334155">• Free patient support pen provided courtesy of EVA Pharma Insulin Support Initiative.</text>

  <!-- Security Verification Stamp & Seal -->
  <g transform="translate(560, 780)">
    <!-- Stamp Circles -->
    <circle cx="90" cy="90" r="80" fill="none" stroke="#047857" stroke-width="3" stroke-dasharray="6 3"/>
    <circle cx="90" cy="90" r="72" fill="none" stroke="#047857" stroke-width="1.5"/>
    <circle cx="90" cy="90" r="54" fill="#ecfdf5"/>
    
    <!-- Stamp Text -->
    <path id="stampPath" d="M 30,90 A 60,60 0 1,1 150,90" fill="none"/>
    <text font-size="9.5" font-weight="800" fill="#047857" letter-spacing="1">
      <textPath href="#stampPath" startOffset="50%" text-anchor="middle">EVA PHARMA OFFICIAL</textPath>
    </text>
    <text x="90" y="86" font-size="11" font-weight="900" fill="#047857" text-anchor="middle">VERIFIED</text>
    <text x="90" y="102" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">DISPENSE</text>
    <text x="90" y="116" font-size="8" font-weight="700" fill="#059669" text-anchor="middle">★ APPROVED ★</text>
  </g>

  <!-- Barcode & Archive Reference -->
  <g transform="translate(50, 790)">
    <rect x="0" y="0" width="320" height="50" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="6"/>
    <!-- Barcode lines -->
    <g fill="#0f172a">
      <rect x="15" y="10" width="3" height="30"/>
      <rect x="22" y="10" width="2" height="30"/>
      <rect x="27" y="10" width="5" height="30"/>
      <rect x="35" y="10" width="2" height="30"/>
      <rect x="40" y="10" width="4" height="30"/>
      <rect x="47" y="10" width="2" height="30"/>
      <rect x="52" y="10" width="6" height="30"/>
      <rect x="61" y="10" width="3" height="30"/>
      <rect x="67" y="10" width="2" height="30"/>
      <rect x="72" y="10" width="5" height="30"/>
      <rect x="80" y="10" width="2" height="30"/>
      <rect x="85" y="10" width="4" height="30"/>
      <rect x="92" y="10" width="7" height="30"/>
      <rect x="102" y="10" width="3" height="30"/>
      <rect x="108" y="10" width="2" height="30"/>
      <rect x="113" y="10" width="4" height="30"/>
      <rect x="120" y="10" width="6" height="30"/>
      <rect x="129" y="10" width="2" height="30"/>
    </g>
    <text x="145" y="25" font-size="10" font-weight="700" fill="#64748b">DIGITAL AUDIT SERIAL</text>
    <text x="145" y="40" font-size="12" font-weight="800" fill="#0f172a" font-family="monospace">${o}</text>

    <!-- Archive note -->
    <text x="0" y="80" font-size="11" font-weight="600" fill="#64748b">Archive Reference:</text>
    <text x="0" y="98" font-size="10" font-weight="500" fill="#94a3b8" font-family="monospace">Patient_Documents/pharmacy/${n}/${o}.jpg</text>
    <text x="0" y="125" font-size="10" font-style="italic" fill="#64748b">
      Verified through EVA Insulin 360 Corporate Dispensing Platform
    </text>
  </g>

  <!-- Footer Border -->
  <line x1="50" y1="980" x2="750" y2="980" stroke="#e2e8f0" stroke-width="1"/>
  <text x="50" y="1005" font-size="11" font-weight="500" fill="#94a3b8">© 2026 EVA Pharma — Patient Support Programs • Confidential Healthcare Record</text>
  <text x="750" y="1005" font-size="11" font-weight="700" fill="#0f766e" text-anchor="end">EVA Insulin 360</text>
</svg>
`.trim()}function D(t){if(m(t.rx_image_id))return t.rx_image_id;const e=u(t);return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}function i(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}export{z as C,S as F,I as Z,P as a,D as g,m as i};
