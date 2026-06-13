export function renderOverview() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12";

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="py-12 md:py-20 flex flex-col items-center text-center">
      <div class="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto">
        <div class="flex items-center justify-center w-full max-w-[360px] md:max-w-[480px] mx-auto mb-4 md:mb-3">
          <div class="flex-1 flex justify-end pr-4">
            <img src="/ucsy-logo.png" alt="UCSY Logo" class="h-16 md:h-20 w-auto object-contain" />
          </div>
          <span class="font-label text-xs text-on-surface-variant/50 font-bold uppercase select-none shrink-0 ml-3">x</span>
          <div class="flex-1 flex justify-start pl-4">
            <img src="/umta-logo.png" alt="UMTA Logo" class="h-16 md:h-20 w-auto object-contain" />
          </div>
        </div>
        <h1 class="font-headline text-4xl md:text-[56px] text-primary myanmar-text font-light">
          မြန်မာ့ခရီးသွားလုပ်ငန်း<br/>အတွက်<br/>AI Chatbot
        </h1>
        <p class="font-body text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A 24/7 bilingual assistant bridging the tourist call-center gap after 5:00 PM. Built with advanced Retrieval-Augmented Generation (RAG) by the Hackaware student team.
        </p>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
          <a href="https://tourism.heinhtetsan.xyz" target="_blank" rel="noopener noreferrer" id="scroll-to-chat" class="btn-primary flex items-center gap-3">
            <span class="material-symbols-outlined text-[20px] font-light">smart_toy</span>
            Try Demo
          </a>
          <a href="#/timeline" class="btn-secondary flex items-center gap-3">
            <span class="material-symbols-outlined text-[20px] font-light">description</span>
            View Project Milestones
          </a>
        </div>
      </div>

      <!-- Chatbot Showcase (Mockup matching Stitch Design) -->
      <div id="chat-simulator" class="w-full max-w-4xl mx-auto mt-20 md:mt-32 bg-white border border-outline-variant/30 p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,38,34,0.08)] rounded-lg flex flex-col gap-8">
        
        <!-- User Chat Bubble Row -->
        <div class="flex items-start gap-4 justify-start w-full">
          <!-- User Icon -->
          <div class="w-10 h-10 rounded bg-[#f1f0ee] border border-outline-variant/15 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-slate-gray font-light text-xl">person</span>
          </div>
          <!-- User Message -->
          <div class="bg-[#f8f6f4] p-4 border border-[#e5e7eb] max-w-[85%] rounded text-left">
            <p class="font-body text-sm text-[#1a1a1a] myanmar-text">Bagan မှာ ဘယ်ဘုရားတွေ သွားသင့်လဲ။</p>
          </div>
        </div>

        <!-- Bot Response Card Row -->
        <div class="flex items-start gap-4 justify-end w-full">
          <!-- Bot Card -->
          <div class="bg-white p-6 border border-[#e5e7eb] max-w-[calc(100%-56px)] flex flex-col gap-4 text-left shadow-sm rounded">
            <!-- Bot Card Header -->
            <div class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
              <span class="font-headline text-base text-primary font-bold tracking-tight">Bagan Top Temples</span>
              <button class="speak-btn text-primary/60 hover:text-primary transition-colors flex items-center focus:outline-none" data-speak="For Bagan, we highly recommend visiting: Ananda Temple, known as the architectural masterpiece. Dhammayangyi Temple, the largest and widest. And Shwezigon Pagoda, a prototype of Burmese stupas, completely gold plated.">
                <span class="material-symbols-outlined font-light text-base">volume_up</span>
              </button>
            </div>
            <!-- Bot Card Body -->
            <ul class="list-disc pl-5 font-body text-sm text-on-surface-variant space-y-3 mt-3">
              <li><strong>Ananda Temple:</strong> Known as the architectural masterpiece of Bagan.</li>
              <li><strong>Dhammayangyi Temple:</strong> The largest and widest temple in Bagan.</li>
              <li><strong>Shwezigon Pagoda:</strong> A prototype of Burmese stupas, completely gold-plated.</li>
            </ul>
            <!-- Map Container -->
            <div class="mt-4 h-[220px] w-full rounded border border-outline-variant/20 relative overflow-hidden">
              <img alt="Bagan Map" class="w-full h-full object-cover object-center" src="/bagan_map.png"/>
              <div class="absolute bottom-4 left-4">
                <button class="font-label text-[10px] tracking-widest text-primary font-bold bg-white px-4 py-2 border border-outline-variant/20 shadow-sm uppercase rounded-[2px] hover:bg-slate-50 transition-colors">View Interactive Map</button>
              </div>
            </div>
          </div>
          <!-- Bot Icon -->
          <div class="w-10 h-10 rounded bg-[#002622] flex items-center justify-center shrink-0 shadow-md">
            <span class="material-symbols-outlined text-white font-light text-xl">smart_toy</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Video Demo Section -->
    <section class="py-16 md:py-24 border-t border-outline-variant/10 flex flex-col items-center">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Demonstration</span>
        <h2 class="text-3xl md:text-5xl font-headline font-bold text-primary tracking-tight mb-4">Chatbot in Action</h2>
        <p class="text-base md:text-lg text-slate-gray leading-relaxed max-w-2xl">
          Watch a live walkthrough of the bilingual voice and text-enabled RAG assistant, showing search responses, map interaction, and voice synthesis.
        </p>
      </div>

      <div class="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-outline-variant/30 shadow-[0_20px_50px_rgba(0,38,34,0.05)] bg-black aspect-video relative">
        <video class="w-full h-full object-cover" controls preload="metadata" playsinline>
          <source src="/videos/Myanmar_Tourism_AI_Chatbot%20(2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <!-- Launch Badges -->
    <section class="py-20 md:py-24 border-t border-b border-outline-variant/20 flex flex-wrap justify-center items-center gap-12 md:gap-24">
      <!-- Badge 1: Collaboration -->
      <div class="flex items-center gap-5 group text-left">
        <span class="material-symbols-outlined text-primary text-4xl font-extralight group-hover:rotate-12 transition-transform duration-300">handshake</span>
        <div class="flex flex-col">
          <span class="font-label text-[11px] uppercase tracking-[0.15em] text-slate-gray font-semibold">Partnership</span>
          <span class="font-body text-lg md:text-xl font-bold text-primary mt-1">UCSY x UMTA Initiative</span>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="w-px h-16 bg-outline-variant/30 hidden md:block"></div>
      
      <!-- Badge 2: Knowledge Base -->
      <div class="flex items-center gap-5 group text-left">
        <span class="material-symbols-outlined text-primary text-4xl font-extralight group-hover:scale-110 transition-transform duration-300">menu_book</span>
        <div class="flex flex-col">
          <span class="font-label text-[11px] uppercase tracking-[0.15em] text-slate-gray font-semibold">Knowledge Base</span>
          <span class="font-body text-lg md:text-xl font-bold text-primary mt-1">10K+ Verified Records</span>
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

  // Bind speak functionality for the static mockup
  const speakBtn = container.querySelector(".speak-btn");
  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      const textToSpeak = speakBtn.getAttribute("data-speak");
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = "en-US";

        const originalContent = speakBtn.innerHTML;
        speakBtn.innerHTML = `<span class="material-symbols-outlined animate-pulse text-red-500 font-light text-base">graphic_eq</span>`;
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

  // "Try Demo" button now links externally — no scroll handler needed

  return container;
}
