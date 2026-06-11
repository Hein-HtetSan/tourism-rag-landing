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
          <div>
            <h3 class="font-headline text-lg md:text-2xl text-ink-black font-semibold mb-1">Prof. Khin Mar Soe</h3>
            <div class="font-label-caps text-label-caps text-heritage-jade mb-4 font-semibold text-[11px] tracking-wider">Academic Lead & Coordinator (Natural Language Processing Lab, UCSY)</div>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Spearheading the academic vision and technological framework, bringing decades of research experience in artificial intelligence from UCSY.
            </p>
          </div>
        </div>

        <!-- Profile 2 -->
        <div class="ghost-border p-6 bg-white hover:bg-muted-silver transition-colors duration-300 flex flex-col gap-5">
          <div>
            <h3 class="font-headline text-lg md:text-2xl text-ink-black font-semibold mb-1">U Aye Min Oo</h3>
            <div class="font-label-caps text-label-caps text-heritage-jade mb-4 font-semibold text-[11px] tracking-wider">Industry Advisor (UMTA)</div>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Providing critical industry insights and ensuring the chatbot meets the practical demands of the modern tourism sector.
            </p>
          </div>
        </div>

        <!-- Profile 3 -->
        <div class="ghost-border p-6 bg-white hover:bg-muted-silver transition-colors duration-300 flex flex-col gap-5">
          <div>
            <h3 class="font-headline text-lg md:text-2xl text-ink-black font-semibold mb-1">Dr. Aye Nyein Mon</h3>
            <div class="font-label-caps text-label-caps text-heritage-jade mb-4 font-semibold text-[11px] tracking-wider">Researcher (Natural Language Processing Lab, UCSY)</div>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Leading the development of the core natural language processing engines integrations.
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
          <div class="border-t border-outline-variant/30 pt-4 mt-2">
            <h4 class="font-label-caps text-label-caps text-heritage-jade font-bold text-[10px] tracking-wider mb-2">Data Collection & Pre-processing Support</h4>
            <p class="font-body text-xs md:text-sm text-slate-gray leading-relaxed">
              Special thanks to the student contributors from <strong>Semester VI, VIII, and IX</strong> who assisted in extensive data collection and data pre-processing to supplement and expand the chatbot's core tourism knowledge base.
            </p>
          </div>
        </div>
        <div class="lg:col-span-7 bg-surface p-6 md:p-8 rounded-md border border-outline-variant/20 flex flex-col justify-center gap-4">
          <h3 class="font-label-caps text-label-caps text-heritage-jade font-bold text-xs tracking-wider">TEAM MEMBERS</h3>
          <ul class="space-y-4">
            <li class="flex items-start md:items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-heritage-jade shrink-0 mt-1.5 md:mt-0"></span>
              <div class="flex flex-col md:flex-row md:items-center justify-between w-full gap-0.5 md:gap-3">
                <span class="font-body text-sm md:text-base text-ink-black font-medium">Hein Htet San</span>
                <span class="font-body text-xs text-slate-gray">Semester IX, Knowledge Engineering</span>
              </div>
            </li>
            <li class="flex items-start md:items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-heritage-jade shrink-0 mt-1.5 md:mt-0"></span>
              <div class="flex flex-col md:flex-row md:items-center justify-between w-full gap-0.5 md:gap-3">
                <span class="font-body text-sm md:text-base text-ink-black font-medium">Lynn Myat Bhone</span>
                <span class="font-body text-xs text-slate-gray">Semester IX, Knowledge Engineering</span>
              </div>
            </li>
            <li class="flex items-start md:items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-heritage-jade shrink-0 mt-1.5 md:mt-0"></span>
              <div class="flex flex-col md:flex-row md:items-center justify-between w-full gap-0.5 md:gap-3">
                <span class="font-body text-sm md:text-base text-ink-black font-medium">Wai Yan Tun</span>
                <span class="font-body text-xs text-slate-gray">Semester IX, Software Engineering</span>
              </div>
            </li>
            <li class="flex items-start md:items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-heritage-jade shrink-0 mt-1.5 md:mt-0"></span>
              <div class="flex flex-col md:flex-row md:items-center justify-between w-full gap-0.5 md:gap-3">
                <span class="font-body text-sm md:text-base text-ink-black font-medium">Thi Han Soe</span>
                <span class="font-body text-xs text-slate-gray">Semester IX, Software Engineering</span>
              </div>
            </li>
            <li class="flex items-start md:items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-heritage-jade shrink-0 mt-1.5 md:mt-0"></span>
              <div class="flex flex-col md:flex-row md:items-center justify-between w-full gap-0.5 md:gap-3">
                <span class="font-body text-sm md:text-base text-ink-black font-medium">Phyo Zaw Linn</span>
                <span class="font-body text-xs text-slate-gray">Semester IX, Software Engineering</span>
              </div>
            </li>
          </ul>
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
