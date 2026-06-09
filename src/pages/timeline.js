export function renderTimeline() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center";

  container.innerHTML = `
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
  `;

  return container;
}
