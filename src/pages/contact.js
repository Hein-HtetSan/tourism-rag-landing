export function renderContact() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-left";

  container.innerHTML = `
    <!-- Header -->
    <header class="mb-16 md:mb-24 max-w-3xl">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Get in Touch</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Contact & Support</h1>
      <p class="font-body text-base md:text-lg text-slate-gray leading-relaxed">
        For official project inquiries, dataset coordination, or research collaborations, please reach out to the institutional representatives of UCSY and UMTA.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
      <!-- UCSY Contact Card -->
      <div class="p-8 bg-white border border-outline-variant/30 rounded-lg hover:border-primary transition-all duration-300 flex flex-col justify-between shadow-sm">
        <div class="space-y-6">
          <div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
            <span class="font-label text-[10px] tracking-widest text-heritage-jade font-bold uppercase">Academic Partner</span>
            <span class="font-body text-xs text-slate-gray bg-[#f3f0ef] px-3 py-1 rounded-full font-medium">UCSY</span>
          </div>
          
          <div class="space-y-2">
            <h3 class="font-headline text-2xl font-bold text-ink-black">University of Computer Studies, Yangon</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              One of the premier higher education institutions under the Ministry of Education, conducting teaching and research in computer science and technology.
            </p>
          </div>

          <div class="space-y-4 pt-2">
            <!-- Address -->
            <div class="flex items-start gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0 mt-0.5">location_on</span>
              <span class="font-body text-on-surface-variant">No.(4) Main Road, Shwe Pyi Thar Township, Yangon, Myanmar.</span>
            </div>
            
            <!-- Phone Numbers -->
            <div class="flex items-start gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0 mt-0.5">phone</span>
              <div class="flex flex-col gap-1">
                <span class="font-body text-on-surface-variant">Training Affair: <a href="tel:+959443440478" class="hover:text-primary transition-colors">(+95) 9 443440478</a></span>
                <span class="font-body text-on-surface-variant">Student Affair: <a href="tel:+959443440479" class="hover:text-primary transition-colors">(+95) 9 443440479</a></span>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0">mail</span>
              <span class="font-body text-on-surface-variant">
                <a href="mailto:ucsy.admin@ucsy.edu.mm" class="hover:text-primary transition-colors">ucsy.admin@ucsy.edu.mm</a>
              </span>
            </div>
          </div>
        </div>

        <!-- Office Hours footer -->
        <div class="border-t border-outline-variant/20 pt-6 mt-8 flex items-center gap-3 text-xs text-slate-gray font-medium">
          <span class="material-symbols-outlined text-base">schedule</span>
          <span>Monday – Friday, 09:00 AM – 04:00 PM</span>
        </div>
      </div>

      <!-- UMTA Contact Card -->
      <div class="p-8 bg-white border border-outline-variant/30 rounded-lg hover:border-primary transition-all duration-300 flex flex-col justify-between shadow-sm">
        <div class="space-y-6">
          <div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
            <span class="font-label text-[10px] tracking-widest text-heritage-jade font-bold uppercase">Industry Partner</span>
            <span class="font-body text-xs text-slate-gray bg-[#f3f0ef] px-3 py-1 rounded-full font-medium">UMTA</span>
          </div>

          <div class="space-y-2">
            <h3 class="font-headline text-2xl font-bold text-ink-black">Union of Myanmar Travel Association</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              The official association representing Myanmar's private travel and tour operators, fostering standard-compliant development of tourism.
            </p>
          </div>

          <div class="space-y-4 pt-2">
            <!-- Address -->
            <div class="flex items-start gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0 mt-0.5">location_on</span>
              <span class="font-body text-on-surface-variant">No.(29), Room (802), 8th Floor, UMFCCI Building, Lanmadaw Township, Yangon, 11131 Myanmar.</span>
            </div>

            <!-- Phone / Mobile / Fax -->
            <div class="flex items-start gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0 mt-0.5">phone</span>
              <div class="flex flex-col gap-1">
                <span class="font-body text-on-surface-variant">Landline: <a href="tel:+9512302330" class="hover:text-primary transition-colors">(+951) 2302330</a>, <a href="tel:+9512302331" class="hover:text-primary transition-colors">2302331</a>, <a href="tel:+9512314941" class="hover:text-primary transition-colors">2314941</a></span>
                <span class="font-body text-on-surface-variant">Mobile: <a href="tel:+9592005648" class="hover:text-primary transition-colors">(+959) 2005648</a> (Office Hours)</span>
                <span class="font-body text-on-surface-variant">Fax: (+951) 2314945</span>
              </div>
            </div>

            <!-- Contact Persons -->
            <div class="flex items-start gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0 mt-0.5">contacts</span>
              <div class="flex flex-col gap-1">
                <span class="font-body text-on-surface-variant font-medium text-xs text-slate-gray uppercase tracking-wider">Secretariat Team:</span>
                <span class="font-body text-on-surface-variant">Daw May Thet Lwin (Secretary): <a href="tel:+9595170456" class="hover:text-primary transition-colors">095170456</a></span>
                <span class="font-body text-on-surface-variant">Daw Kay Thwe Soe (Sec. Gen. 1): <a href="tel:+959260272076" class="hover:text-primary transition-colors">09260272076</a></span>
                <span class="font-body text-on-surface-variant">U Kyaw Win Tun (Sec. Gen. 2): <a href="tel:+9595196936" class="hover:text-primary transition-colors">095196936</a></span>
              </div>
            </div>

            <!-- Email & Web -->
            <div class="flex items-start gap-3 text-sm">
              <span class="material-symbols-outlined text-heritage-jade text-lg shrink-0 mt-0.5">language</span>
              <div class="flex flex-col gap-1">
                <span class="font-body text-on-surface-variant">Email: <a href="mailto:www.office@umtanet.org" class="hover:text-primary transition-colors">www.office@umtanet.org</a></span>
                <span class="font-body text-on-surface-variant">Website: <a href="https://www.umtanet.org" target="_blank" class="hover:text-primary transition-colors">www.umtanet.org</a></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Office Hours footer -->
        <div class="border-t border-outline-variant/20 pt-6 mt-8 flex items-center gap-3 text-xs text-slate-gray font-medium">
          <span class="material-symbols-outlined text-base">schedule</span>
          <span>Monday – Friday, 09:30 AM – 05:00 PM</span>
        </div>
      </div>
    </div>
  `;

  return container;
}
