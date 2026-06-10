export function renderPrivacy() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-left";

  container.innerHTML = `
    <header class="mb-12 md:mb-16 max-w-3xl">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Legal</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Privacy Policy</h1>
      <p class="font-body text-base md:text-lg text-slate-gray leading-relaxed">
        Last updated: June 10, 2026. This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our services.
      </p>
    </header>

    <div class="max-w-3xl space-y-8 font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">1. Information Collection and Use</h2>
        <p>
          We collect various types of information for different purposes to provide and improve our service to you. While using our AI chatbot demo, we may ask you to provide certain personally identifiable information that can be used to contact or identify you, including:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Usage data and user query logs (to improve chatbot responses and fine-tune models).</li>
          <li>Local coordinates/GIS data (only with your explicit permission, used solely to recommend nearby destinations).</li>
          <li>Voice/audio recordings (temporary audio buffers processed locally for voice-to-text conversion).</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">2. Data Retention and Safety</h2>
        <p>
          The UMTA x UCSY AI Tourism Chatbot Project retains collected query logs and analytics for as long as necessary to evaluate MVP performance and research benchmarks. All user queries are anonymized to protect personal identification. Voice buffers are discarded immediately after transcript generation.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">3. Third-Party Integrations</h2>
        <p>
          Our chatbot utilizes API interfaces hosted on secure GPU clusters. We do not sell or trade your data to external advertisers. Any telemetry or analytical reports shared with the Ministry of Hotels and Tourism or affiliated partners are strictly aggregated and anonymous.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="font-headline text-xl md:text-2xl text-ink-black font-semibold">4. Contact Us</h2>
        <p>
          If you have any questions or suggestions regarding this Privacy Policy, please reach out to us via the Contact page or send an inquiry to the joint project coordinators.
        </p>
      </section>
    </div>
  `;

  return container;
}
