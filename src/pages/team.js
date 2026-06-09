export function renderTeam() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center";

  container.innerHTML = `
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
  `;

  return container;
}
