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
    <div class="relative pl-4 md:pl-0 md:max-w-4xl md:mx-auto text-left">
      <!-- Continuous line background -->
      <div class="absolute left-4 md:left-1/2 top-0 bottom-0 md:-ml-[1px] w-[2px] bg-secondary-fixed">
        <!-- Active Indicator Line Overlay (simulated progress) -->
        <div class="absolute top-0 left-0 w-full h-[80%] timeline-line"></div>
      </div>

      <!-- ===== PHASE: PROJECT START ===== -->

      <!-- Milestone 1 (Left Desktop) — Feb 3 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 3, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Project Notification</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Official notification sent to UCSY administration regarding the commencement of the AI Tourism Chatbot project collaboration.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 2 (Right Desktop) — Feb 9 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 9, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">First Meeting</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Initial scoping and alignment meeting held at University of Computer Studies, Yangon (UCSY). Core research objectives and project roadmap defined.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 3 (Left Desktop) — Feb 11 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 11, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Dataset Collection</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Initial tourism dataset delivered by UMTA containing curated destination guides, cultural heritage information, and local attraction data.
            </p>
          </div>
        </div>
      </div>

      <!-- ===== PHASE: PROJECT DEFINITION & PLANNING ===== -->

      <!-- Milestone 4 (Right Desktop) — Feb 15-16 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 15–16, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Official Correspondence</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Formal letter dispatched to Aye Nyein Mon confirming UMTA's commitment, followed by official email documentation of project protocols.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 5 (Left Desktop) — Feb 20 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 20, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">AI Taskforce Meeting</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              UMTA AI Taskforce convenes for rigorous evaluation of Llama 3 and Mistral architectures, assessing Burmese NLP efficacy and cultural nuance retention.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 6 (Right Desktop) — Feb 25 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Feb 25, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Stakeholder Outreach</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Formal correspondence sent to Khin Mar Soe to align on project scope, data governance policies, and cross-institutional coordination.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 7 (Left Desktop) — March 29 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Mar 29, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Model Training Phase</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Chatbot model training initiated using Google Colab with Python. n8n workflow automation evaluated for pipeline orchestration.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 8 (Right Desktop) — March 31 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">Mar 31, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">UCSY Progress Meeting</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Mid-phase review at UCSY to assess model training outcomes, dataset quality, and alignment with academic research standards.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 9 (Left Desktop) — April 14 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">April 14, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Cost Proposal Submitted</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Comprehensive project budgeting and total cost estimation formally submitted to stakeholders for resource allocation approval.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 10 (Right Desktop) — April 27 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">April 27, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Development Team Assembly</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Tourism Chatbot Development Team formally assembled, bringing together UCSY developers and UMTA domain experts.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 11 (Left Desktop) — May 5 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">May 5, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Agreement Signed</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Formal sign-off on the partnership agreement between UMTA and UCSY, solidifying legal and operational frameworks for the project.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 12 (Right Desktop) — June 5 -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">June 5, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Final Planning Meeting</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Pre-development final meeting with all stakeholders to approve the technical architecture, deployment strategy, and internship framework.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 13 (Left Desktop) — June 18 - Upcoming -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-burnt-saffron block mb-2 font-bold text-xs tracking-widest">June 18, 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-burnt-saffron z-10 shadow-[0_0_0_4px_rgba(184,92,28,0.15)] transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
          <div class="bg-muted-silver border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">MCPA Event</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Project showcased at the Myanmar Computer Professional Association (MCPA) event, demonstrating early prototype capabilities to industry leaders.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 14 (Right Desktop) — June–Sept - Future -->
      <div class="relative mb-12 md:mb-16 md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10 md:order-3">
          <span class="font-label-caps text-label-caps text-slate-gray block mb-2 font-bold text-xs tracking-widest">June – Sept 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-secondary-fixed z-10 transition-transform group-hover:scale-125 duration-300 md:order-2"></div>
        <div class="md:w-[45%] pl-6 md:pr-10 md:pl-0 pt-1 md:pt-0 md:order-1 text-left md:text-right">
          <div class="bg-white border border-outline-variant/20 p-6 rounded-lg transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_8px_30px_rgb(0,38,34,0.03)]">
            <h3 class="font-headline text-lg md:text-xl text-ink-black font-semibold mb-2">Internship Phase</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Selected UCSY student developers embed directly within UMTA headquarters for hands-on dataset curation and preliminary model fine-tuning.
            </p>
          </div>
        </div>
      </div>

      <!-- Milestone 15 (Left Desktop) — October - Future -->
      <div class="relative md:flex md:justify-between md:items-center group">
        <div class="md:w-[45%] md:text-right pr-6 md:pr-10">
          <span class="font-label-caps text-label-caps text-slate-gray block mb-2 font-bold text-xs tracking-widest">October 2026</span>
        </div>
        <div class="absolute -left-[12px] md:left-1/2 md:-ml-3 top-0 md:top-auto w-6 h-6 rounded-full border-4 border-white bg-secondary-fixed z-10 transition-transform group-hover:scale-125 duration-300"></div>
        <div class="md:w-[45%] pl-6 md:pl-10 pt-1 md:pt-0">
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
