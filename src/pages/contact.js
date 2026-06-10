export function renderContact() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-left";

  container.innerHTML = `
    <!-- Header -->
    <header class="mb-16 md:mb-24 max-w-3xl">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Get in Touch</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Contact & Support</h1>
      <p class="font-body text-base md:text-lg text-slate-gray leading-relaxed">
        Have questions about the UMTA x UCSY AI Tourism Chatbot? Reach out to our research leads, student developers, or submit feedback regarding pilot kiosk deployments.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-6xl">
      <!-- Contact Info Column -->
      <div class="lg:col-span-5 space-y-10">
        <div class="space-y-4">
          <h2 class="font-headline text-2xl text-primary font-bold tracking-tight">Institutional Leads</h2>
          <p class="font-body text-sm text-slate-gray leading-relaxed">
            For official project inquiries, dataset coordination, or sponsorship of pilot kiosks, please contact the joint heads directly:
          </p>
        </div>

        <div class="space-y-6">
          <!-- UCSY Contact -->
          <div class="p-6 bg-white border border-outline-variant/30 rounded-lg flex flex-col gap-3">
            <span class="font-label text-[10px] tracking-widest text-heritage-jade font-bold uppercase">UCSY Office</span>
            <h3 class="font-headline text-lg font-bold text-ink-black">University of Computer Studies, Yangon</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Main Campus, Shwe Pyi Thar Township, Yangon, Myanmar
            </p>
            <div class="flex items-center gap-2 mt-2 font-body text-xs text-on-surface-variant/80">
              <span class="material-symbols-outlined text-base">mail</span>
              <span>info@ucsy.edu.mm</span>
            </div>
          </div>

          <!-- UMTA Contact -->
          <div class="p-6 bg-white border border-outline-variant/30 rounded-lg flex flex-col gap-3">
            <span class="font-label text-[10px] tracking-widest text-heritage-jade font-bold uppercase">UMTA Headquarters</span>
            <h3 class="font-headline text-lg font-bold text-ink-black">Union of Myanmar Travel Association</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              No. 99, Ground Floor, Bo Aung Kyaw Street, Kyauktada Township, Yangon, Myanmar
            </p>
            <div class="flex items-center gap-2 mt-2 font-body text-xs text-on-surface-variant/80">
              <span class="material-symbols-outlined text-base">mail</span>
              <span>admin@tourismunion.org.mm</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Feedback Form Column -->
      <div class="lg:col-span-7 bg-muted-silver p-8 md:p-10 rounded-lg border border-outline-variant/30 shadow-sm flex flex-col gap-6">
        <div>
          <h2 class="font-headline text-2xl text-ink-black font-bold mb-2">Send us a Message</h2>
          <p class="font-body text-sm text-slate-gray">
            Submit bugs, query feedback, or suggestions for custom RAG database integrations.
          </p>
        </div>

        <form id="contact-form" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="form-name" class="font-label text-[10px] text-slate-gray uppercase tracking-wider font-bold">Your Name</label>
              <input type="text" id="form-name" required class="bg-white border border-outline-variant/40 px-4 py-2.5 rounded font-body text-sm text-ink-black focus:outline-none focus:border-primary" placeholder="Enter name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="form-email" class="font-label text-[10px] text-slate-gray uppercase tracking-wider font-bold">Email Address</label>
              <input type="email" id="form-email" required class="bg-white border border-outline-variant/40 px-4 py-2.5 rounded font-body text-sm text-ink-black focus:outline-none focus:border-primary" placeholder="Enter email" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="form-subject" class="font-label text-[10px] text-slate-gray uppercase tracking-wider font-bold">Subject</label>
            <input type="text" id="form-subject" required class="bg-white border border-outline-variant/40 px-4 py-2.5 rounded font-body text-sm text-ink-black focus:outline-none focus:border-primary" placeholder="Feedback/Bug Report/etc." />
          </div>

          <div class="flex flex-col gap-2">
            <label for="form-message" class="font-label text-[10px] text-slate-gray uppercase tracking-wider font-bold">Message</label>
            <textarea id="form-message" required rows="4" class="bg-white border border-outline-variant/40 px-4 py-2.5 rounded font-body text-sm text-ink-black focus:outline-none focus:border-primary resize-none" placeholder="Write message here..."></textarea>
          </div>

          <button type="submit" class="w-full bg-primary hover:bg-[#003833] text-white font-body text-sm font-semibold py-3 px-6 rounded transition-colors duration-200 mt-2 flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">send</span>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  `;

  // Simple form interaction
  const form = container.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">sync</span> Sending...`;

      setTimeout(() => {
        alert("Thank you! Your feedback has been submitted successfully.");
        form.reset();
        btn.disabled = false;
        btn.innerHTML = originalText;
      }, 1000);
    });
  }

  return container;
}
