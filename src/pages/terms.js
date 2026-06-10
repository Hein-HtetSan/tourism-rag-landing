export function renderTerms() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-left";

  container.innerHTML = `
    <header class="mb-12 md:mb-16 max-w-3xl">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Terms</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Terms of Service</h1>
      <p class="font-body text-base md:text-lg text-slate-gray leading-relaxed">
        Last updated: June 10, 2026. Please read these Terms of Service carefully before using our AI chatbot prototype.
      </p>
    </header>

    <div class="max-w-3xl space-y-8 font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this web application or interacting with the chatbot demo, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the service.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">2. Scope of Service & MVP Disclaimers</h2>
        <p>
          This chatbot is a Collaborative Minimum Viable Product (MVP) built as part of the academic and industry partnership between UMTA and UCSY. 
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Prototype Status:</strong> The chatbot is provided for demonstration and pilot evaluation. While trained on verified data, automated recommendation engines may occasionally output incorrect details.</li>
          <li><strong>No Emergency Guarantee:</strong> The safety and navigation tips provided should not supersede official directions from police, local authorities, or registered guides.</li>
          <li><strong>Service Availability:</strong> We reserve the right to suspend or restrict access to the chatbot server for maintenance or testing purposes without notice.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">3. Permitted Use</h2>
        <p>
          You agree not to abuse the AI chatbot. Any attempt to scrape the vector database, reverse-engineer model checkpoints, prompt-inject malicious behaviors, or flood API endpoints with high-volume requests is strictly prohibited and may result in IP blocking.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">4. Limitation of Liability</h2>
        <p>
          In no event shall UCSY, UMTA, or the development team be held liable for any damages arising out of the use or inability to use the recommendations provided by this AI prototype.
        </p>
      </section>
    </div>
  `;

  return container;
}
