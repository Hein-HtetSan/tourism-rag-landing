(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function f(){const e=document.createElement("div");e.className="fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12",e.innerHTML=`
    <!-- Hero Section -->
    <section class="py-12 md:py-20 flex flex-col items-center text-center">
      <div class="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-3 px-5 py-2 bg-white border border-outline-variant/40 rounded-full shadow-sm">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label text-[10px] md:text-[11px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
            UCSY x UMTA COLLABORATIVE MVP
          </span>
        </div>
        <h1 class="font-headline text-4xl md:text-[56px] text-primary myanmar-text font-bold">
          မြန်မာ့ခရီးသွားလုပ်ငန်းအတွက်<br/>AI Chatbot
        </h1>
        <p class="font-body text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A 24/7 bilingual assistant bridging the tourist call-center gap after 5:00 PM. Built with advanced Retrieval-Augmented Generation (RAG) by the Hackaware student team.
        </p>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
          <button id="scroll-to-chat" class="btn-primary flex items-center gap-3">
            <span class="material-symbols-outlined text-[20px] font-light">smart_toy</span>
            Try Demo Bot
          </button>
          <a href="#/timeline" class="btn-secondary flex items-center gap-3">
            <span class="material-symbols-outlined text-[20px] font-light">description</span>
            View Project Milestones
          </a>
        </div>
      </div>

      <!-- Interactive Chatbot Simulator -->
      <div id="chat-simulator" class="w-full max-w-4xl mx-auto mt-20 md:mt-32 bg-white border border-outline-variant/30 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,38,34,0.08)] rounded-lg">
        <!-- Chat Header -->
        <div class="bg-primary px-6 py-4 flex justify-between items-center text-white">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-white font-light text-xl">support_agent</span>
            </div>
            <div>
              <div class="font-semibold text-sm">မြန်မာ ခရီးသွား AI</div>
              <div class="text-[11px] opacity-80">RAG Assistant • Active 24/7</div>
            </div>
          </div>
          <div class="flex gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>
        </div>

        <!-- Chat Body -->
        <div id="chat-messages" class="flex flex-col gap-6 p-6 md:p-8 min-h-[400px] max-h-[500px] overflow-y-auto bg-surface-container-lowest">
          <!-- Welcome Message -->
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
              <span class="material-symbols-outlined text-white font-light text-lg">support_agent</span>
            </div>
            <div class="bg-surface-container-low p-5 border border-outline-variant/10 max-w-[85%] rounded-r-xl rounded-bl-xl text-left">
              <p class="font-body text-sm text-on-surface myanmar-text">
                မင်္ဂလာပါရှင်။ မြန်မာခရီးသွား AI မှ ကြိုဆိုပါတယ်။ Bagan၊ Yangon ခရီးစဉ်များ သို့မဟုတ် ခရီးသွားသတင်းအချက်အလက်များကို မေးမြန်းနိုင်ပါတယ်။
              </p>
              <p class="font-body text-xs text-slate-gray mt-2">
                Hello! Welcome to Myanmar Tourism AI. Ask me about travel details, destinations like Bagan, or emergency contacts.
              </p>
            </div>
          </div>
        </div>

        <!-- Predefined Quick Queries -->
        <div class="px-6 py-3 bg-surface-container-low border-t border-b border-outline-variant/20 flex flex-wrap gap-2 text-left justify-start">
          <span class="text-xs text-slate-gray font-medium w-full mb-1">Select a sample query to test:</span>
          <button class="quick-query-btn px-3 py-1.5 bg-white hover:bg-primary/5 border border-outline-variant/40 rounded-[4px] text-xs font-medium text-primary transition-all duration-200" data-query="bagan">
            🇲🇲 Bagan temples recommendations
          </button>
          <button class="quick-query-btn px-3 py-1.5 bg-white hover:bg-primary/5 border border-outline-variant/40 rounded-[4px] text-xs font-medium text-primary transition-all duration-200" data-query="emergency">
            📞 Emergency helpline
          </button>
          <button class="quick-query-btn px-3 py-1.5 bg-white hover:bg-primary/5 border border-outline-variant/40 rounded-[4px] text-xs font-medium text-primary transition-all duration-200" data-query="customs">
            🏯 Myanmar local customs
          </button>
        </div>

        <!-- Chat Input Footer -->
        <form id="chat-input-form" class="p-4 bg-white border-t border-outline-variant/20 flex gap-3">
          <input id="chat-user-input" type="text" placeholder="Type your travel question here..." class="flex-grow px-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-[4px] font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" autocomplete="off" />
          <button type="submit" class="bg-primary text-white px-5 rounded-[4px] hover:bg-heritage-jade transition-colors duration-200 flex items-center justify-center">
            <span class="material-symbols-outlined text-xl">send</span>
          </button>
        </form>
      </div>
    </section>

    <!-- Launch Badges -->
    <section class="py-20 md:py-24 border-t border-b border-outline-variant/20 flex flex-wrap justify-center items-center gap-12 md:gap-24">
      <!-- Badge 1: Recognition -->
      <div class="flex items-center gap-5 group text-left">
        <span class="material-symbols-outlined text-primary text-4xl font-extralight group-hover:rotate-12 transition-transform duration-300">workspace_premium</span>
        <div class="flex flex-col">
          <span class="font-label text-[11px] uppercase tracking-[0.15em] text-slate-gray font-semibold">Recognition</span>
          <span class="font-body text-lg md:text-xl font-bold text-primary mt-1">#1 Product of the Day</span>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="w-px h-16 bg-outline-variant/30 hidden md:block"></div>
      
      <!-- Badge 2: Community -->
      <div class="flex items-center gap-5 group text-left">
        <span class="material-symbols-outlined text-primary text-4xl font-extralight group-hover:scale-110 transition-transform duration-300">thumb_up</span>
        <div class="flex flex-col">
          <span class="font-label text-[11px] uppercase tracking-[0.15em] text-slate-gray font-semibold">Community</span>
          <span class="font-body text-lg md:text-xl font-bold text-primary mt-1">500+ Upvotes</span>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-24 flex flex-col items-center">
      <div class="text-center mb-16">
        <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Purpose & Vision</span>
        <h2 class="text-3xl md:text-5xl font-headline font-bold text-primary tracking-tight">The Mission</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full max-w-6xl">
        <div class="tech-card p-8 md:p-12 flex flex-col gap-6 bg-white border-b-2 border-b-transparent hover:border-b-primary">
          <div class="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-3xl font-light">schedule</span>
          </div>
          <h3 class="font-headline text-2xl text-primary tracking-tight font-semibold">The After-Hours Assistance Problem</h3>
          <p class="font-body text-base text-on-surface-variant leading-relaxed opacity-90 text-left">
            Tourist inquiries rarely follow standard office hours. When the primary call centers close at 5:00 PM, visitors are often left without critical guidance regarding transportation, local customs, or emergency contacts. This gap in service quality impacts the overall perception of Myanmar's tourism infrastructure.
          </p>
        </div>
        <div class="tech-card p-8 md:p-12 flex flex-col gap-6 bg-white border-b-2 border-b-transparent hover:border-b-primary">
          <div class="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-3xl font-light">language</span>
          </div>
          <h3 class="font-headline text-2xl text-primary tracking-tight font-semibold">Bilingual Voice-Enabled RAG Solution</h3>
          <p class="font-body text-base text-on-surface-variant leading-relaxed opacity-90 text-left">
            Our solution deploys an advanced Retrieval-Augmented Generation (RAG) architecture tailored specifically for the UMTA dataset. By supporting both text and voice interactions in Burmese and English, it ensures that accurate, culturally nuanced information is accessible 24/7, dramatically improving visitor autonomy and safety.
          </p>
        </div>
      </div>
    </section>

    <!-- Technical Bento Grid -->
    <section class="py-20 flex flex-col items-center w-full max-w-6xl mx-auto" id="features-summary">
      <div class="text-center mb-16">
        <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Our Stack</span>
        <h2 class="text-3xl md:text-5xl font-headline font-bold text-primary tracking-tight mb-4">Technical Architecture</h2>
        <p class="text-base md:text-lg text-on-surface-variant opacity-60">Built for scale, speed, and reliability.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        <!-- Large Card -->
        <div class="tech-card lg:col-span-2 p-8 md:p-12 flex flex-col justify-between min-h-[380px] text-left">
          <div class="flex flex-col gap-6">
            <span class="material-symbols-outlined text-primary text-5xl md:text-6xl font-extralight">account_tree</span>
            <h3 class="text-2xl md:text-3xl font-headline font-bold text-primary tracking-tight">Hybrid Retrieval Engine</h3>
            <p class="font-body text-sm md:text-base text-on-surface-variant leading-relaxed opacity-80">
              Combining dense vector search via Qdrant with keyword matching in OpenSearch, orchestrated by a high-performance FastAPI backend. Model inference is optimized using ONNX runtime for sub-second latency even on complex multi-hop queries.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 md:gap-3 mt-8">
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">FastAPI</span>
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">Qdrant</span>
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">OpenSearch</span>
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">ONNX</span>
          </div>
        </div>
        <!-- Medium Card 1 -->
        <div class="tech-card p-8 flex flex-col gap-6 text-left">
          <div class="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-2xl font-light">record_voice_over</span>
          </div>
          <h3 class="text-xl font-headline font-bold text-primary tracking-tight">Voice & Text Synthesis</h3>
          <p class="font-body text-sm text-on-surface-variant leading-relaxed opacity-80">
            Native Burmese TTS/STT integration ensuring natural pronunciation of local landmarks and colloquial terms, bridging the literacy gap.
          </p>
        </div>
        <!-- Medium Card 2 -->
        <div class="tech-card p-8 flex flex-col gap-6 text-left">
          <div class="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-2xl font-light">share_location</span>
          </div>
          <h3 class="text-xl font-headline font-bold text-primary tracking-tight">Location Guard Security</h3>
          <p class="font-body text-sm text-on-surface-variant leading-relaxed opacity-80">
            Real-time coordinate verification and geofencing to prevent hallucinations regarding restricted areas or unsafe travel routes.
          </p>
        </div>
        <!-- Small Card -->
        <div class="tech-card lg:col-span-2 p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white text-left">
          <div class="flex items-center gap-6 md:gap-8">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-surface-container-low border border-outline-variant/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary text-3xl md:text-4xl font-light">dns</span>
            </div>
            <div>
              <h3 class="text-xl font-headline font-bold text-primary tracking-tight mb-2">Digital Ocean GPU Cluster</h3>
              <p class="font-body text-sm text-on-surface-variant opacity-80">Dedicated infrastructure ensuring high availability for peak tourist seasons.</p>
            </div>
          </div>
          <span class="font-label text-[10px] tracking-[0.2em] px-5 py-2.5 bg-primary text-white font-bold uppercase shrink-0 rounded-[2px]">Infrastructure</span>
        </div>
      </div>
    </section>
  `;const l=e.querySelector("#chat-messages"),o=e.querySelector("#chat-input-form"),a=e.querySelector("#chat-user-input"),t={bagan:{question:"Bagan မှာ ဘယ်ဘုရားတွေ သွားသင့်လဲ။",responseHtml:`
        <div class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
          <span class="font-headline text-base text-primary font-bold tracking-tight">Bagan Top Temples</span>
          <button class="speak-btn text-primary/60 hover:text-primary transition-colors flex items-center gap-1 text-xs font-semibold" data-speak="For Bagan, we highly recommend visiting: Ananda Temple, known as the architectural masterpiece. Dhammayangyi Temple, the largest and widest. And Shwezigon Pagoda, a prototype of Burmese stupas, completely gold plated.">
            <span class="material-symbols-outlined font-light text-base">volume_up</span> Speak
          </button>
        </div>
        <p class="font-body text-xs text-slate-gray italic mb-3">RAG Data Source: Union of Myanmar Travel Association (UMTA) verified heritage catalog.</p>
        <ul class="font-body text-sm text-on-surface-variant space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-primary rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Ananda Temple:</strong> Known as the architectural masterpiece of Bagan, built in 1105 AD.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-primary rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Dhammayangyi Temple:</strong> The largest and widest temple, built in the late 12th century.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-primary rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Shwezigon Pagoda:</strong> A prototype of Burmese stupas, completely gold-plated, finished in 1102 AD.</span>
          </li>
        </ul>
        <div class="mt-4 rounded-md overflow-hidden border border-outline-variant/20 relative group">
          <img alt="Bagan Map" class="w-full h-44 object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1D1eTSVmJco4gMvhvQnra4E235jK4b-qlmFQnYBxyr3j7uBOnxRWAx_ysr2M1qwUFy1_QuJyhJB_BMLzbF6-JbE2rSKWjGJvEbfCs4N8MpIiVBcvt7x4P8LJnSI3kkbxD07eiZ8bP0r_Gsm4-K9gr6yuC6DRGVZImLrwiXJ5wEuaMwEExci0vrc3oWMIyYWMREQERsECTSA47tXR7MEpdgfjpxAEjvEb84fb3kHnFNY4W00hx_h1Cwyu6xvvHIk_HkNgbcSdt0FSx"/>
          <div class="absolute bottom-3 left-3">
            <span class="font-label text-[9px] tracking-widest text-primary font-bold bg-white/95 px-3 py-1.5 border border-outline-variant/20 shadow-md uppercase rounded-[2px]">View Interactive Map</span>
          </div>
        </div>
      `},emergency:{question:"Yangon မှာ အရေးပေါ် ဖုန်းနံပါတ်တွေ ဘာတွေလဲ။",responseHtml:`
        <div class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
          <span class="font-headline text-base text-primary font-bold tracking-tight">Emergency Helplines</span>
          <button class="speak-btn text-primary/60 hover:text-primary transition-colors flex items-center gap-1 text-xs font-semibold" data-speak="Here are the emergency numbers in Myanmar: Tourist Police hotline is 199 or 01-549209. Fire department is 191. Ambulance is 192. Always keep these handy.">
            <span class="material-symbols-outlined font-light text-base">volume_up</span> Speak
          </button>
        </div>
        <p class="font-body text-xs text-slate-gray italic mb-3">RAG Data Source: Myanmar Ministry of Hotels and Tourism Official Directory.</p>
        <ul class="font-body text-sm text-on-surface-variant space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Tourist Police:</strong> 199 or 01-549209 (Active 24/7 with English support)</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Fire Department:</strong> 191 (General emergency dispatch)</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Ambulance Services:</strong> 192 (Red Cross & General Hospitals)</span>
          </li>
        </ul>
      `},customs:{question:"မြန်မာနိုင်ငံမှာ ဘာတွေ သတိထားရမလဲ။",responseHtml:`
        <div class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
          <span class="font-headline text-base text-primary font-bold tracking-tight">Cultural Etiquette</span>
          <button class="speak-btn text-primary/60 hover:text-primary transition-colors flex items-center gap-1 text-xs font-semibold" data-speak="When visiting pagoda grounds, please remove your shoes and socks. Dress modestly, covering shoulders and knees. Never touch anyone on the head, as it is considered the most sacred part of the body.">
            <span class="material-symbols-outlined font-light text-base">volume_up</span> Speak
          </button>
        </div>
        <p class="font-body text-xs text-slate-gray italic mb-3">RAG Data Source: Union of Myanmar Travel Association (UMTA) cultural guides.</p>
        <ul class="font-body text-sm text-on-surface-variant space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-yellow-600 rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Footwear:</strong> Always remove shoes and socks before entering pagoda grounds and religious sites.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-yellow-600 rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Modesty:</strong> Wear appropriate clothing (shoulders and knees covered). Avoid shorts and sleeveless shirts on pagoda grounds.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 mt-2 bg-yellow-600 rounded-full shrink-0"></span>
            <span><strong class="text-on-surface font-semibold">Sacred Head:</strong> Do not touch the head of a local, as it is traditionally regarded as the most spiritually sacred part of the body.</span>
          </li>
        </ul>
      `}};function r(){l.scrollTop=l.scrollHeight}function d(s){const i=document.createElement("div");i.className="flex items-start gap-4 flex-row-reverse",i.innerHTML=`
      <div class="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant/20 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-primary font-light text-lg">person</span>
      </div>
      <div class="bg-primary/5 p-4 border border-outline-variant/10 max-w-[85%] rounded-l-xl rounded-br-xl text-right">
        <p class="font-body text-sm text-on-surface myanmar-text">${s}</p>
      </div>
    `,l.appendChild(i),r()}function v(){const s=document.createElement("div");s.id="chat-typing-indicator",s.className="flex items-start gap-4",s.innerHTML=`
      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
        <span class="material-symbols-outlined text-white font-light text-lg">support_agent</span>
      </div>
      <div class="bg-white p-5 border border-outline-variant/30 max-w-[85%] rounded-r-xl rounded-bl-xl text-left shadow-sm flex items-center gap-1">
        <span class="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
        <span class="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
        <span class="w-2.5 h-2.5 bg-primary/80 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
      </div>
    `,l.appendChild(s),r()}function y(){const s=e.querySelector("#chat-typing-indicator");s&&s.remove()}function w(s){const i=document.createElement("div");i.className="flex items-start gap-4",i.innerHTML=`
      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
        <span class="material-symbols-outlined text-white font-light text-lg">support_agent</span>
      </div>
      <div class="bg-white p-6 border border-outline-variant/30 max-w-[90%] flex flex-col gap-4 text-left shadow-sm rounded-r-xl rounded-bl-xl">
        ${s}
      </div>
    `,l.appendChild(i),r();const n=i.querySelector(".speak-btn");n&&n.addEventListener("click",()=>{const k=n.getAttribute("data-speak");if(window.speechSynthesis){window.speechSynthesis.cancel();const c=new SpeechSynthesisUtterance(k);c.lang="en-US";const b=n.innerHTML;n.innerHTML='<span class="material-symbols-outlined animate-pulse text-red-500 font-light text-base">graphic_eq</span> Speaking...',n.disabled=!0,c.onend=()=>{n.innerHTML=b,n.disabled=!1},c.onerror=()=>{n.innerHTML=b,n.disabled=!1},window.speechSynthesis.speak(c)}else alert("Text-to-speech is not supported on this browser.")})}function x(s){v(),setTimeout(()=>{y();const i=t[s]||{question:a.value,responseHtml:`
          <div class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
            <span class="font-headline text-base text-primary font-bold tracking-tight">Search Result</span>
          </div>
          <p class="font-body text-xs text-slate-gray italic mb-2">RAG Context: Generative matching...</p>
          <p class="font-body text-sm text-on-surface-variant">
            Thank you for asking about "<strong>${a.value}</strong>". This MVP is loaded with local guides for Bagan temples, emergency contact numbers, and basic cultural etiquette guidelines. Please select one of the preset options or visit our Features page for details!
          </p>
        `};w(i.responseHtml),a.value=""},1200)}return e.querySelectorAll(".quick-query-btn").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-query"),n=t[i];n&&(d(n.question),x(i))})}),o.addEventListener("submit",s=>{s.preventDefault();const i=a.value.trim();i&&(d(i),x("custom"))}),e.querySelector("#scroll-to-chat").addEventListener("click",()=>{e.querySelector("#chat-simulator").scrollIntoView({behavior:"smooth"})}),e}function A(){const e=document.createElement("div");return e.className="fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center",e.innerHTML=`
    <!-- Header Section -->
    <header class="mb-16 md:mb-24 max-w-4xl mx-auto">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Capabilities</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Platform Capabilities</h1>
      <p class="font-body text-base md:text-lg text-slate-gray max-w-2xl mx-auto leading-relaxed">
        A meticulous fusion of advanced artificial intelligence and curated domain knowledge. Designed to provide authoritative, culturally nuanced guidance for the modern explorer.
      </p>
    </header>

    <!-- Feature Grid -->
    <section class="mb-24 md:mb-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        <!-- Feature 1 -->
        <div class="bg-muted-silver border border-outline-variant/20 p-8 md:p-12 rounded-lg hover:border-primary transition-colors duration-300 text-left flex flex-col gap-6">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-outline-variant/10 shadow-sm text-primary">
            <span class="material-symbols-outlined text-2xl" data-icon="translate">translate</span>
          </div>
          <div>
            <h3 class="font-headline text-xl md:text-2xl text-ink-black font-semibold mb-3">Bilingual RAG Architecture</h3>
            <p class="font-body text-sm md:text-base text-slate-gray leading-relaxed">
              Leveraging advanced Retrieval-Augmented Generation (RAG), the system dynamically queries a specialized vector database. It seamlessly processes and responds to complex queries in both native Burmese and English, ensuring high fidelity and contextual accuracy without hallucination.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="bg-muted-silver border border-outline-variant/20 p-8 md:p-12 rounded-lg hover:border-primary transition-colors duration-300 text-left flex flex-col gap-6">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-outline-variant/10 shadow-sm text-primary">
            <span class="material-symbols-outlined text-2xl" data-icon="map">map</span>
          </div>
          <div>
            <h3 class="font-headline text-xl md:text-2xl text-ink-black font-semibold mb-3">Real-Time GIS Integration</h3>
            <p class="font-body text-sm md:text-base text-slate-gray leading-relaxed">
              Integrated deeply with geographic information systems, the platform provides precision spatial awareness. It identifies secure zones, calculates optimal transit vectors, and delivers hyper-local environmental context tailored to the user's immediate coordinates.
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="bg-muted-silver border border-outline-variant/20 p-8 md:p-12 rounded-lg hover:border-primary transition-colors duration-300 text-left flex flex-col gap-6">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-outline-variant/10 shadow-sm text-primary">
            <span class="material-symbols-outlined text-2xl" data-icon="record_voice_over">record_voice_over</span>
          </div>
          <div>
            <h3 class="font-headline text-xl md:text-2xl text-ink-black font-semibold mb-3">Voice Synthesis Engine</h3>
            <p class="font-body text-sm md:text-base text-slate-gray leading-relaxed">
              A state-of-the-art native Burmese Text-to-Speech (TTS) module allows for eyes-free navigation and interaction. The neural synthesis engine preserves correct tonal inflection and regional phonetics, vital for accurate cultural immersion.
            </p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="bg-muted-silver border border-outline-variant/20 p-8 md:p-12 rounded-lg hover:border-primary transition-colors duration-300 text-left flex flex-col gap-6">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-outline-variant/10 shadow-sm text-primary">
            <span class="material-symbols-outlined text-2xl" data-icon="security">security</span>
          </div>
          <div>
            <h3 class="font-headline text-xl md:text-2xl text-ink-black font-semibold mb-3">Secure Knowledge Base</h3>
            <p class="font-body text-sm md:text-base text-slate-gray leading-relaxed">
              At the core is an immutable dataset curated explicitly by UMTA scholars. This closed-loop knowledge architecture guarantees that all historical, cultural, and logistical data presented is verified, authoritative, and secure from external contamination.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="w-full max-w-5xl mx-auto text-left border-t border-outline-variant/20 pt-16">
      <div class="mb-12 text-center">
        <span class="font-label-caps text-label-caps text-heritage-jade uppercase tracking-widest block mb-3 font-semibold">Analysis</span>
        <h2 class="font-headline text-3xl md:text-4xl text-ink-black font-bold">A Paradigm Shift in Discovery</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
        <!-- Traditional -->
        <div class="p-6 md:p-8">
          <h4 class="font-label-caps text-label-caps text-slate-gray uppercase mb-6 border-b border-outline-variant/20 pb-3 font-semibold tracking-wider">Traditional Tourist Info</h4>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="material-symbols-outlined text-slate-gray mr-3 mt-1 text-lg" data-icon="remove">remove</span>
              <span class="font-body text-sm md:text-base text-slate-gray">Static, generalized guidebooks lacking real-time context and recommendations.</span>
            </li>
            <li class="flex items-start">
              <span class="material-symbols-outlined text-slate-gray mr-3 mt-1 text-lg" data-icon="remove">remove</span>
              <span class="font-body text-sm md:text-base text-slate-gray">Language barriers dependent on human translation or generic machine translation apps.</span>
            </li>
            <li class="flex items-start">
              <span class="material-symbols-outlined text-slate-gray mr-3 mt-1 text-lg" data-icon="remove">remove</span>
              <span class="font-body text-sm md:text-base text-slate-gray">Unverified online information leading to security warnings and navigational errors.</span>
            </li>
          </ul>
        </div>
        <!-- Heritage AI -->
        <div class="bg-muted-silver p-6 md:p-8 rounded-lg border border-heritage-jade/20 shadow-sm">
          <h4 class="font-label-caps text-label-caps text-heritage-jade uppercase mb-6 border-b border-heritage-jade/20 pb-3 font-bold tracking-wider">Heritage AI Assistant</h4>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="material-symbols-outlined text-heritage-jade mr-3 mt-1 text-lg font-bold" data-icon="check">check</span>
              <span class="font-body text-sm md:text-base text-ink-black font-medium">Dynamic, context-aware responses utilizing live GIS spatial and tourist safety data.</span>
            </li>
            <li class="flex items-start">
              <span class="material-symbols-outlined text-heritage-jade mr-3 mt-1 text-lg font-bold" data-icon="check">check</span>
              <span class="font-body text-sm md:text-base text-ink-black font-medium">Fluid bilingual interaction with native neural voice synthesis.</span>
            </li>
            <li class="flex items-start">
              <span class="material-symbols-outlined text-heritage-jade mr-3 mt-1 text-lg font-bold" data-icon="check">check</span>
              <span class="font-body text-sm md:text-base text-ink-black font-medium">Scholastically verified closed-loop data ensuring absolute historical and cultural accuracy.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,e}function S(){const e=document.createElement("div");return e.className="fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center",e.innerHTML=`
    <!-- Header -->
    <header class="mb-16 md:mb-24 max-w-3xl mx-auto">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Chronology</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Project Timeline</h1>
      <p class="font-body text-base md:text-lg text-slate-gray leading-relaxed">
        Tracking the meticulous development phases of the UMTA x UCSY AI Tourism Chatbot. From academic ideation to nationwide deployment.
      </p>
    </header>

    <!-- Vertical Timeline Container -->
    <div class="relative pl-6 md:pl-0 md:max-w-4xl md:mx-auto text-left">
      <!-- Continuous line background -->
      <div class="absolute left-6 md:left-1/2 top-0 bottom-0 md:-ml-[1px] w-[2px] bg-secondary-fixed">
        <!-- Active Indicator Line Overlay (simulated progress) -->
        <div class="absolute top-0 left-0 w-full h-[60%] timeline-line"></div>
      </div>

      <!-- Milestone 1 (Left Desktop, Right Mobile) -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <!-- Date column -->
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 9, 2026</span>
        </div>
        <!-- Node -->
        <div class="absolute -left-[31px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <!-- Content card column -->
        <div class="md:w-[45%] pl-8 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Project Kick-off</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Initial scoping and alignment meeting held at University of Computer Studies, Yangon (UCSY). Core research objectives defined.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 2 (Right Desktop, Right Mobile) -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <!-- Date column (Desktop Left) -->
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 20, 2026</span>
        </div>
        <!-- Node -->
        <div class="absolute -left-[31px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <!-- Content card column (Desktop Left) -->
        <div class="md:w-[45%] pl-8 md:pl-10 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Model Selection</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Rigorous evaluation of Llama 3 and Mistral architectures specifically for Burmese NLP efficacy and cultural nuance retention.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 3 (Left Desktop, Right Mobile) -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <!-- Date column -->
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">April 15, 2026</span>
        </div>
        <!-- Node -->
        <div class="absolute -left-[31px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <!-- Content card column -->
        <div class="md:w-[45%] pl-8 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">UMTA Partnership</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Formal MOU signing ceremonies. Commencement of exclusive proprietary tourism data sharing from the Union of Myanmar Travel Association.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 4 (Right Desktop, Right Mobile - Inactive Node) -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <!-- Date column -->
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-slate-gray block mb-2 font-bold text-xs tracking-widest">June - Sept 2026</span>
        </div>
        <!-- Node -->
        <div class="absolute -left-[31px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-secondary-fixed z-10 transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <!-- Content card column -->
        <div class="md:w-[45%] pl-8 md:pl-10 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-white border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Internship Phase</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Selected UCSY student developers embed directly within UMTA headquarters for hands-on dataset curation and preliminary model fine-tuning.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 5 (Left Desktop, Right Mobile - Inactive Node) -->
      <div class="relative md:flex md:justify-between md:items-center group">
        <!-- Date column -->
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-slate-gray block mb-2 font-bold text-xs tracking-widest">October 2026</span>
        </div>
        <!-- Node -->
        <div class="absolute -left-[31px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-secondary-fixed z-10 transition-transform group-hover:scale-125 duration-300"></div>
        <!-- Content card column -->
        <div class="md:w-[45%] pl-8 md:pl-10 pt-1 md:pt-0">
          <div class="bg-white border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Pilot Launch</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Alpha testing deployment via localized kiosks at major heritage centers including Shwedagon Pagoda and Bagan archaeological zones.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,e}function T(){const e=document.createElement("div");return e.className="fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center",e.innerHTML=`
    <!-- Header -->
    <header class="mb-16 md:mb-24 max-w-3xl mx-auto">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Collaborators</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">The Minds Behind Heritage AI</h1>
      <p class="font-body text-base md:text-lg text-slate-gray">
        A collaborative effort bridging academic rigor from UCSY with industry expertise from UMTA, dedicated to preserving and exploring heritage through advanced AI.
      </p>
    </header>

    <!-- Core Team Grid -->
    <section class="mb-24 md:mb-32 text-left">
      <h2 class="font-label-caps text-label-caps text-heritage-jade mb-8 border-b border-outline-variant/30 pb-4 font-bold tracking-widest text-xs">LEADERSHIP & EXPERTS</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        <!-- Profile 1 -->
        <div class="ghost-border p-6 bg-white hover:bg-muted-silver transition-colors duration-300 flex flex-col gap-5">
          <div class="w-24 h-24 rounded-full overflow-hidden bg-muted-silver border border-outline-variant/20 shadow-sm shrink-0">
            <img alt="Prof. Daw Khin Mar Soe" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC03lVbgejBn-B2tB8jVzRIVGJ5OtZaKYt31imbhDAX8CGmJcXrUmutFDYivk334auO0byZV-3khCLnM7JV0aLlE2Y95qG9xBw4kU8fvs2nnBSISTUvqSvEZybwYEDD9-shOU47ByM_8F7hQ2vh0HSdzYCHMhmNACxWwe9Npbk2D1PxAINb20dHgoQ0IIHrPDul3kVrt5BYPpjtKrr0-CFvOSZQCpLQeia6e_McRzRQT81JQTm_b11c7Bdr2wbdCiVI-cN8qGgQmS3a"/>
          </div>
          <div>
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-1">Prof. Daw Khin Mar Soe</h3>
            <div class="font-label-caps text-label-caps text-heritage-jade mb-4 font-semibold text-[11px] tracking-wider">Academic Lead & Coordinator</div>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Spearheading the academic vision and technological framework, bringing decades of research experience in artificial intelligence from UCSY.
            </p>
          </div>
        </div>

        <!-- Profile 2 -->
        <div class="ghost-border p-6 bg-white hover:bg-muted-silver transition-colors duration-300 flex flex-col gap-5">
          <div class="w-24 h-24 rounded-full overflow-hidden bg-muted-silver border border-outline-variant/20 shadow-sm shrink-0">
            <img alt="U Aye Min Oo" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP2lkuqejYXu0ZgJnzAtN-6GQaRlOgiQioQ8t58B0tw_QT6jeVe5W821YmsKacwL40bnO1ut6r8dpIju0JyaxvMi6et_wXXRSh1ScuWav8FIDHaC0qTOaaiH6B2Zw8YSGg8C8MVuT9381C_GqlYtrNt7QR6x6SlSIhZk_xTHMN73RypZRxbSnMFciensO54bV63Q_3Tx3qLWIHXEm_vbBHWAj6RG4DHk-WR_Fix-HKvVFN3CtaPElsjORFWuZ3xxZ8jC0DEEuc5EAO"/>
          </div>
          <div>
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-1">U Aye Min Oo</h3>
            <div class="font-label-caps text-label-caps text-heritage-jade mb-4 font-semibold text-[11px] tracking-wider">Industry Advisor (UMTA)</div>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Providing critical industry insights and ensuring the chatbot meets the practical demands of the modern tourism sector.
            </p>
          </div>
        </div>

        <!-- Profile 3 -->
        <div class="ghost-border p-6 bg-white hover:bg-muted-silver transition-colors duration-300 flex flex-col gap-5">
          <div class="w-24 h-24 rounded-full overflow-hidden bg-muted-silver border border-outline-variant/20 shadow-sm shrink-0">
            <img alt="Daw Hnin Shwe Yee Win" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK29Sx1uOs4UPYPgkL1zahJn0xqObrBngkkpHeRGTj-vCx3ozuYzUZ0NH7TsB53sPAfZacLniHPmp0UCxUM58PVshdW0FcDYag3N0Vqj395cwxPbIXFRzohzk5tP3WSxd5HAxNW9VX7WUUe-dEYoqtBU85dhSh5AaiaywodnxOle6UIycj0iFbwxFWU5aLFk-_x8oIVuRgj-UP3abzwta_81BHdI7y9d3yUCqmUwfXevZ2OT_HWtZE8BESz52pxS_4o1BPPWol1hRd"/>
          </div>
          <div>
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-1">Daw Hnin Shwe Yee Win</h3>
            <div class="font-label-caps text-label-caps text-heritage-jade mb-4 font-semibold text-[11px] tracking-wider">NLP & GIS Expert</div>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Leading the development of the core natural language processing engines and geographic information system integrations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Team -->
    <section class="mb-24 md:mb-32 text-left">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-muted-silver border border-outline-variant/30 rounded-lg p-6 md:p-12 max-w-6xl mx-auto">
        <div class="lg:col-span-5 flex flex-col gap-4">
          <h2 class="font-headline text-2xl md:text-4xl text-ink-black font-bold">Hackaware Student Team</h2>
          <div class="font-label-caps text-label-caps text-heritage-jade font-semibold text-xs tracking-wider">UCSY CORE DEVELOPERS</div>
          <p class="font-body text-sm md:text-base text-slate-gray leading-relaxed">
            The engine driving the technical execution. This dedicated group of top-tier students from UCSY translates complex AI models into seamless, user-centric experiences, bridging theoretical knowledge with practical application.
          </p>
        </div>
        <div class="lg:col-span-7 h-64 md:h-96 w-full bg-surface-dim overflow-hidden rounded-md border border-outline-variant/20 relative shadow-sm">
          <img alt="Group of students working" class="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-9H3FmOwbBw5UOACvh3b1OIZ7YZ9Y4KFUOz3FDVNfeEqHau5WBiJvHk_jMK58_PlWykxasy3zD9Q0gml7NUetfbEwHyF9hhnGq_ogyMrRgA7vAIhed2VpCTXXvkojw-JPHueHVpL86D5r3kt1KGdPlbpFfuw5kol9pTxBXUs1fVGhgoQgiwj1IuyvJcbhpmu0tf4UY1soNt7TAP84ucEppC2yuJSkgmxIBLoNHR8RhYL-UhQggnwEM5yOYQ0KyDOQpUAXXl5FGgi4"/>
        </div>
      </div>
    </section>

    <!-- MOU Section -->
    <section class="border-t border-outline-variant/20 pt-16 text-left max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div class="flex flex-col gap-4">
          <div class="text-heritage-jade">
            <span class="material-symbols-outlined text-4xl font-light">handshake</span>
          </div>
          <h2 class="font-headline text-2xl md:text-3xl text-ink-black font-bold">UMTA x UCSY Collaboration</h2>
          <p class="font-body text-sm md:text-base text-slate-gray leading-relaxed">
            This initiative is formalized under a strategic Memorandum of Understanding between the University of Computer Studies, Yangon (UCSY) and the Union of Myanmar Travel Association (UMTA). It represents a critical bridge between academia and industry.
          </p>
        </div>
        <div class="bg-surface p-6 md:p-8 rounded-lg border border-outline-variant/30 flex flex-col gap-4">
          <h3 class="font-label-caps text-label-caps text-heritage-jade font-bold text-xs tracking-wider">INTERNSHIP PROGRAM HIGHLIGHTS</h3>
          <ul class="space-y-4 font-body text-sm md:text-base text-ink-black">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-heritage-jade text-lg mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <span>Real-world AI deployment and dataset training in local tourism context.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-heritage-jade text-lg mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <span>Direct mentorship from industry leaders and academic professors.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-heritage-jade text-lg mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <span>Academic research and publication opportunities at national conferences.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,e}const g=document.getElementById("app"),m=document.querySelector("header"),M={"#/overview":f,"#/features":A,"#/timeline":S,"#/team":T};function h(){const e=window.location.hash||"#/overview",l=M[e]||f;g.innerHTML="";const o=l();g.appendChild(o),L(e),window.scrollTo(0,0)}function L(e){document.querySelectorAll("nav a").forEach(a=>{a.getAttribute("href")===e?(a.classList.add("active","text-primary"),a.classList.remove("text-on-surface-variant")):(a.classList.remove("active","text-primary"),a.classList.add("text-on-surface-variant"))}),document.querySelectorAll("#mobile-menu a").forEach(a=>{a.getAttribute("href")===e?(a.classList.add("active","text-primary"),a.classList.remove("text-on-surface-variant")):(a.classList.remove("active","text-primary"),a.classList.add("text-on-surface-variant"))})}window.addEventListener("scroll",()=>{window.scrollY>10?(m.classList.add("shadow-md","py-4"),m.classList.remove("py-5")):(m.classList.remove("shadow-md","py-4"),m.classList.add("py-5"))});const p=document.getElementById("mobile-menu-toggle"),u=document.getElementById("mobile-menu");p.addEventListener("click",()=>{u.classList.contains("hidden")?(u.classList.remove("hidden"),p.innerHTML='<span class="material-symbols-outlined text-2xl">close</span>'):(u.classList.add("hidden"),p.innerHTML='<span class="material-symbols-outlined text-2xl">menu</span>')});document.querySelectorAll("#mobile-menu a").forEach(e=>{e.addEventListener("click",()=>{u.classList.add("hidden"),p.innerHTML='<span class="material-symbols-outlined text-2xl">menu</span>'})});function C(){if(window.location.hash!=="#/overview")window.location.hash="#/overview",setTimeout(()=>{const e=document.getElementById("chat-simulator");e&&e.scrollIntoView({behavior:"smooth"})},150);else{const e=document.getElementById("chat-simulator");e&&e.scrollIntoView({behavior:"smooth"})}}window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("#header-get-started, #mobile-get-started").forEach(e=>{e.addEventListener("click",C)})});window.addEventListener("hashchange",h);window.addEventListener("DOMContentLoaded",h);
