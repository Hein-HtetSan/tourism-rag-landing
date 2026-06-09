export function renderFeatures() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center";

  container.innerHTML = `
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
  `;

  return container;
}
