export function renderGallery() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 text-center";

  container.innerHTML = `
    <!-- Header -->
    <header class="mb-16 md:mb-24 max-w-3xl mx-auto">
      <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Moments</span>
      <h1 class="font-display-lg text-4xl md:text-6xl text-ink-black font-bold mb-6">Collaboration Gallery</h1>
      <p class="font-body text-base md:text-lg text-slate-gray leading-relaxed">
        Visual record of our project discussions, collaboration meetings, and the structured development timeline for the AI chatbot. Click any image to view it full screen.
      </p>
    </header>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto text-left" id="gallery-grid">
      
      <!-- Card 1: Discussion (umta-2) -->
      <div class="gallery-item md:col-span-1 group bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div class="aspect-[4/3] md:aspect-square w-full overflow-hidden bg-surface-dim relative">
          <img src="/images/umta-2.jpg" alt="Technical Meeting" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 cursor-pointer" />
        </div>
        <div class="p-6 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-heritage-jade"></span>
            <span class="font-label text-[10px] text-heritage-jade uppercase tracking-wider font-bold">RAG Architecture</span>
          </div>
          <h3 class="font-headline text-lg md:text-xl font-bold text-ink-black">Technical Scoping</h3>
          <p class="font-body text-xs md:text-sm text-slate-gray leading-relaxed">
            Core members presenting early prototype components, addressing RAG vector retrieval, and reviewing chatbot conversation flow parameters.
          </p>
        </div>
      </div>

      <!-- Card 2: Discussion (umta-3) -->
      <div class="gallery-item md:col-span-1 group bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div class="aspect-[4/3] md:aspect-square w-full overflow-hidden bg-surface-dim relative">
          <img src="/images/umta-3.jpg" alt="Collaboration Meeting" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 cursor-pointer" />
        </div>
        <div class="p-6 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-heritage-jade"></span>
            <span class="font-label text-[10px] text-heritage-jade uppercase tracking-wider font-bold">Data Strategy</span>
          </div>
          <h3 class="font-headline text-lg md:text-xl font-bold text-ink-black">Dataset Alignment</h3>
          <p class="font-body text-xs md:text-sm text-slate-gray leading-relaxed">
            Reviewing source documents and travel guidelines to ensure proper indexing for localized queries in both Burmese and English.
          </p>
        </div>
      </div>

      <!-- Card 3: Discussion (umta-5) -->
      <div class="gallery-item md:col-span-1 group bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div class="aspect-[4/3] md:aspect-square w-full overflow-hidden bg-surface-dim relative">
          <img src="/images/umta-5.jpg" alt="Collaboration Discussion" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 cursor-pointer" />
        </div>
        <div class="p-6 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-heritage-jade"></span>
            <span class="font-label text-[10px] text-heritage-jade uppercase tracking-wider font-bold">Coordination</span>
          </div>
          <h3 class="font-headline text-lg md:text-xl font-bold text-ink-black">Collaboration Review</h3>
          <p class="font-body text-xs md:text-sm text-slate-gray leading-relaxed">
            Joint team coordination meeting to establish guidelines for student placement cycles, sprint iterations, and weekly reviews at UMTA offices.
          </p>
        </div>
      </div>

      <!-- Card 4: Wide Split Banner (umta-4 - Timeline Chart) -->
      <div class="gallery-item md:col-span-3 group bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div class="flex flex-col lg:flex-row min-h-[360px]">
          <!-- Timeline Image Section -->
          <div class="lg:w-2/3 overflow-hidden bg-slate-50 relative min-h-[280px] lg:min-h-full flex items-center justify-center p-4 border-b lg:border-b-0 lg:border-r border-outline-variant/20">
            <img src="/images/umta-4.jpg" alt="Project Timeline Chart" class="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer" />
          </div>
          <!-- Detail Text Section -->
          <div class="lg:w-1/3 p-8 md:p-10 flex flex-col justify-center gap-4 bg-white">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-burnt-saffron"></span>
              <span class="font-label text-[10px] text-burnt-saffron uppercase tracking-wider font-bold">Execution Plan</span>
            </div>
            <h3 class="font-headline text-2xl font-bold text-ink-black tracking-tight">Timeline & Schedule</h3>
            <p class="font-body text-sm text-slate-gray leading-relaxed">
              Our structured development roadmap mapping academic research at UCSY to industry pilot testing at major heritage zones in Bagan and Yangon.
            </p>
            <a href="#/timeline" class="btn-secondary flex items-center justify-center gap-2 text-xs font-semibold py-2.5 mt-2 rounded">
              <span class="material-symbols-outlined text-[16px] font-light">description</span>
              View Detailed Timeline
            </a>
          </div>
        </div>
      </div>

    </div>
  `;

  // Create lightbox modal dynamically and append directly to document.body
  // This bypasses parent transforms (fadeIn) which trap absolute/fixed elements behind headers
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox-modal";
  lightbox.className = "fixed inset-0 z-[100] w-screen h-screen bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 opacity-0 pointer-events-none transition-all duration-300 overflow-hidden";
  lightbox.innerHTML = `
    <!-- Close button -->
    <button id="close-lightbox" class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none z-[110]" aria-label="Close Lightbox">
      <span class="material-symbols-outlined text-3xl font-light">close</span>
    </button>
    
    <!-- Content Container -->
    <div class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center scale-95 transition-transform duration-300 z-[105]" id="lightbox-content">
      <img id="lightbox-img" src="" alt="Enlarged gallery view" class="max-w-full max-h-[90vh] object-contain rounded shadow-2xl border border-white/5" />
    </div>
  `;
  document.body.appendChild(lightbox);

  // Lightbox Modal Logic
  const lightboxImg = lightbox.querySelector("#lightbox-img");
  const lightboxContent = lightbox.querySelector("#lightbox-content");
  const closeBtn = lightbox.querySelector("#close-lightbox");

  const images = container.querySelectorAll(".gallery-item img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const alt = img.getAttribute("alt");

      lightboxImg.setAttribute("src", src);
      lightboxImg.setAttribute("alt", alt);
      
      // Lock page scroll
      document.body.classList.add("overflow-hidden");

      // Show Lightbox
      lightbox.classList.remove("pointer-events-none", "opacity-0");
      lightbox.classList.add("opacity-100");
      
      setTimeout(() => {
        lightboxContent.classList.remove("scale-95");
        lightboxContent.classList.add("scale-100");
      }, 50);
    });
  });

  const closeLightbox = () => {
    // Unlock page scroll
    document.body.classList.remove("overflow-hidden");

    lightboxContent.classList.remove("scale-100");
    lightboxContent.classList.add("scale-95");
    lightbox.classList.remove("opacity-100");
    lightbox.classList.add("opacity-0");
    
    setTimeout(() => {
      lightbox.classList.add("pointer-events-none");
    }, 300);
  };

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Esc key closes lightbox
  const keyHandler = (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("pointer-events-none")) {
      closeLightbox();
    }
  };
  window.addEventListener("keydown", keyHandler);

  // MutationObserver to clean up lightbox-modal and event listeners when page changes
  const observer = new MutationObserver(() => {
    if (!document.body.contains(container)) {
      lightbox.remove();
      window.removeEventListener("keydown", keyHandler);
      document.body.classList.remove("overflow-hidden");
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  return container;
}
