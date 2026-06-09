export function renderOverview() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12";

  container.innerHTML = `
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
  `;

  // --- Chatbot Simulator Interactivity ---
  const chatMessages = container.querySelector("#chat-messages");
  const chatForm = container.querySelector("#chat-input-form");
  const userInput = container.querySelector("#chat-user-input");

  const queryResponses = {
    bagan: {
      question: "Bagan မှာ ဘယ်ဘုရားတွေ သွားသင့်လဲ။",
      responseHtml: `
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
      `
    },
    emergency: {
      question: "Yangon မှာ အရေးပေါ် ဖုန်းနံပါတ်တွေ ဘာတွေလဲ။",
      responseHtml: `
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
      `
    },
    customs: {
      question: "မြန်မာနိုင်ငံမှာ ဘာတွေ သတိထားရမလဲ။",
      responseHtml: `
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
      `
    }
  };

  function scrollChatToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendUserMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "flex items-start gap-4 flex-row-reverse";
    msgDiv.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant/20 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-primary font-light text-lg">person</span>
      </div>
      <div class="bg-primary/5 p-4 border border-outline-variant/10 max-w-[85%] rounded-l-xl rounded-br-xl text-right">
        <p class="font-body text-sm text-on-surface myanmar-text">${text}</p>
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    scrollChatToBottom();
  }

  function appendBotTypingIndicator() {
    const indicatorDiv = document.createElement("div");
    indicatorDiv.id = "chat-typing-indicator";
    indicatorDiv.className = "flex items-start gap-4";
    indicatorDiv.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
        <span class="material-symbols-outlined text-white font-light text-lg">support_agent</span>
      </div>
      <div class="bg-white p-5 border border-outline-variant/30 max-w-[85%] rounded-r-xl rounded-bl-xl text-left shadow-sm flex items-center gap-1">
        <span class="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
        <span class="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
        <span class="w-2.5 h-2.5 bg-primary/80 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
      </div>
    `;
    chatMessages.appendChild(indicatorDiv);
    scrollChatToBottom();
  }

  function removeBotTypingIndicator() {
    const ind = container.querySelector("#chat-typing-indicator");
    if (ind) ind.remove();
  }

  function appendBotMessage(responseHtml) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "flex items-start gap-4";
    msgDiv.innerHTML = `
      <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
        <span class="material-symbols-outlined text-white font-light text-lg">support_agent</span>
      </div>
      <div class="bg-white p-6 border border-outline-variant/30 max-w-[90%] flex flex-col gap-4 text-left shadow-sm rounded-r-xl rounded-bl-xl">
        ${responseHtml}
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    scrollChatToBottom();

    // Bind speak functionality for this specific message
    const speakBtn = msgDiv.querySelector(".speak-btn");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => {
        const textToSpeak = speakBtn.getAttribute("data-speak");
        if (window.speechSynthesis) {
          // Stop currently speaking
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = "en-US";
          
          // Visual feedback
          const originalContent = speakBtn.innerHTML;
          speakBtn.innerHTML = `<span class="material-symbols-outlined animate-pulse text-red-500 font-light text-base">graphic_eq</span> Speaking...`;
          speakBtn.disabled = true;

          utterance.onend = () => {
            speakBtn.innerHTML = originalContent;
            speakBtn.disabled = false;
          };
          utterance.onerror = () => {
            speakBtn.innerHTML = originalContent;
            speakBtn.disabled = false;
          };

          window.speechSynthesis.speak(utterance);
        } else {
          alert("Text-to-speech is not supported on this browser.");
        }
      });
    }
  }

  function triggerBotResponse(queryKey) {
    appendBotTypingIndicator();
    setTimeout(() => {
      removeBotTypingIndicator();
      const responseData = queryResponses[queryKey] || {
        question: userInput.value,
        responseHtml: `
          <div class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
            <span class="font-headline text-base text-primary font-bold tracking-tight">Search Result</span>
          </div>
          <p class="font-body text-xs text-slate-gray italic mb-2">RAG Context: Generative matching...</p>
          <p class="font-body text-sm text-on-surface-variant">
            Thank you for asking about "<strong>${userInput.value}</strong>". This MVP is loaded with local guides for Bagan temples, emergency contact numbers, and basic cultural etiquette guidelines. Please select one of the preset options or visit our Features page for details!
          </p>
        `
      };
      appendBotMessage(responseData.responseHtml);
      userInput.value = "";
    }, 1200);
  }

  // Bind preset query buttons
  container.querySelectorAll(".quick-query-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const queryType = btn.getAttribute("data-query");
      const data = queryResponses[queryType];
      if (data) {
        appendUserMessage(data.question);
        triggerBotResponse(queryType);
      }
    });
  });

  // Bind form submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = userInput.value.trim();
    if (!val) return;
    appendUserMessage(val);
    triggerBotResponse("custom");
  });

  // Scroll button
  const scrollBtn = container.querySelector("#scroll-to-chat");
  scrollBtn.addEventListener("click", () => {
    container.querySelector("#chat-simulator").scrollIntoView({ behavior: "smooth" });
  });

  return container;
}
