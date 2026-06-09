export function renderOverview() {
  const container = document.createElement("div");
  container.className = "fade-in-section max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12";

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="py-12 md:py-20 flex flex-col items-center text-center">
      <div class="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-3 px-5 py-2 bg-white border border-outline-variant/40 rounded-full shadow-sm">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label text-[10px] md:text-[11px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
            UCSY x UMTA COLLABORATIVE MVP
          </span>
        </div>
        <h1 class="font-headline text-4xl md:text-[56px] text-primary myanmar-text font-bold">
          မြန်မာ့ခရီးသွားလုပ်ငန်းအတွက်<br/>AI Chatbot
        </h1>
        <p class="font-body text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A 24/7 bilingual assistant bridging the tourist call-center gap after 5:00 PM. Built with advanced Retrieval-Augmented Generation (RAG) by the Hackaware student team.
        </p>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
          <button id="scroll-to-chat" class="btn-primary flex items-center gap-3">
            <span class="material-symbols-outlined text-[20px] font-light">play_circle</span>
            Watch Demo Video
          </button>
          <a href="#/timeline" class="btn-secondary flex items-center gap-3">
            <span class="material-symbols-outlined text-[20px] font-light">description</span>
            View Project Milestones
          </a>
        </div>
      </div>

      <!-- Demo Video Player -->
      <div id="chat-simulator" class="w-full max-w-4xl mx-auto mt-20 md:mt-32 bg-white border border-outline-variant/30 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,38,34,0.08)] rounded-lg group">
        <!-- Video Header -->
        <div class="bg-primary px-6 py-4 flex justify-between items-center text-white">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-white font-light text-xl">play_circle</span>
            </div>
            <div>
              <div class="font-semibold text-sm">မြန်မာ ခရီးသွား AI • Demo Video</div>
              <div class="text-[11px] opacity-80">RAG Assistant in Action</div>
            </div>
          </div>
          <div class="flex gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>
        </div>

        <!-- Video Player Body -->
        <div class="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
          <video id="demo-video" class="w-full h-full object-cover" poster="/video_poster.png" loop playsinline>
            <source src="/demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          
          <!-- Big Play Button Overlay -->
          <button id="video-play-overlay" class="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/45 transition-colors duration-300 z-10">
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
              <span class="material-symbols-outlined text-4xl md:text-5xl font-light pl-1" id="overlay-play-icon">play_arrow</span>
            </div>
          </button>

          <!-- Custom Control Bar -->
          <div id="video-controls" class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20">
            <!-- Progress Slider -->
            <div class="relative w-full h-1.5 bg-white/20 rounded cursor-pointer group/progress animate-all duration-200" id="video-progress-bar">
              <div class="absolute top-0 left-0 h-full bg-primary-fixed rounded" id="video-progress-fill" style="width: 0%"></div>
              <div class="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full border border-primary shadow opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200" id="video-progress-handle" style="left: 0%"></div>
            </div>

            <!-- Controls Row -->
            <div class="flex items-center justify-between text-white text-sm">
              <div class="flex items-center gap-4">
                <!-- Play/Pause Button -->
                <button id="video-play-btn" class="hover:text-primary-fixed transition-colors duration-200 focus:outline-none flex items-center">
                  <span class="material-symbols-outlined font-light text-2xl" id="play-btn-icon">play_arrow</span>
                </button>
                <!-- Time Display -->
                <span class="font-label text-xs tracking-wider opacity-90" id="video-time">0:00 / 0:00</span>
              </div>

              <div class="flex items-center gap-4">
                <!-- Volume / Mute Button -->
                <button id="video-mute-btn" class="hover:text-primary-fixed transition-colors duration-200 focus:outline-none flex items-center">
                  <span class="material-symbols-outlined font-light text-2xl" id="mute-btn-icon">volume_up</span>
                </button>
                <!-- Fullscreen Button -->
                <button id="video-fullscreen-btn" class="hover:text-primary-fixed transition-colors duration-200 focus:outline-none flex items-center">
                  <span class="material-symbols-outlined font-light text-2xl">fullscreen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Launch Badges -->
    <section class="py-20 md:py-24 border-t border-b border-outline-variant/20 flex flex-wrap justify-center items-center gap-12 md:gap-24">
      <!-- Badge 1: Recognition -->
      <div class="flex items-center gap-5 group text-left">
        <span class="material-symbols-outlined text-primary text-4xl font-extralight group-hover:rotate-12 transition-transform duration-300">workspace_premium</span>
        <div class="flex flex-col">
          <span class="font-label text-[11px] uppercase tracking-[0.15em] text-slate-gray font-semibold">Recognition</span>
          <span class="font-body text-lg md:text-xl font-bold text-primary mt-1">#1 Product of the Day</span>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="w-px h-16 bg-outline-variant/30 hidden md:block"></div>
      
      <!-- Badge 2: Community -->
      <div class="flex items-center gap-5 group text-left">
        <span class="material-symbols-outlined text-primary text-4xl font-extralight group-hover:scale-110 transition-transform duration-300">thumb_up</span>
        <div class="flex flex-col">
          <span class="font-label text-[11px] uppercase tracking-[0.15em] text-slate-gray font-semibold">Community</span>
          <span class="font-body text-lg md:text-xl font-bold text-primary mt-1">500+ Upvotes</span>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-24 flex flex-col items-center">
      <div class="text-center mb-16">
        <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Purpose & Vision</span>
        <h2 class="text-3xl md:text-5xl font-headline font-bold text-primary tracking-tight">The Mission</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full max-w-6xl">
        <div class="tech-card p-8 md:p-12 flex flex-col gap-6 bg-white border-b-2 border-b-transparent hover:border-b-primary">
          <div class="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-3xl font-light">schedule</span>
          </div>
          <h3 class="font-headline text-2xl text-primary tracking-tight font-semibold">The After-Hours Assistance Problem</h3>
          <p class="font-body text-base text-on-surface-variant leading-relaxed opacity-90 text-left">
            Tourist inquiries rarely follow standard office hours. When the primary call centers close at 5:00 PM, visitors are often left without critical guidance regarding transportation, local customs, or emergency contacts. This gap in service quality impacts the overall perception of Myanmar's tourism infrastructure.
          </p>
        </div>
        <div class="tech-card p-8 md:p-12 flex flex-col gap-6 bg-white border-b-2 border-b-transparent hover:border-b-primary">
          <div class="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-3xl font-light">language</span>
          </div>
          <h3 class="font-headline text-2xl text-primary tracking-tight font-semibold">Bilingual Voice-Enabled RAG Solution</h3>
          <p class="font-body text-base text-on-surface-variant leading-relaxed opacity-90 text-left">
            Our solution deploys an advanced Retrieval-Augmented Generation (RAG) architecture tailored specifically for the UMTA dataset. By supporting both text and voice interactions in Burmese and English, it ensures that accurate, culturally nuanced information is accessible 24/7, dramatically improving visitor autonomy and safety.
          </p>
        </div>
      </div>
    </section>

    <!-- Technical Bento Grid -->
    <section class="py-20 flex flex-col items-center w-full max-w-6xl mx-auto" id="features-summary">
      <div class="text-center mb-16">
        <span class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block font-bold">Our Stack</span>
        <h2 class="text-3xl md:text-5xl font-headline font-bold text-primary tracking-tight mb-4">Technical Architecture</h2>
        <p class="text-base md:text-lg text-on-surface-variant opacity-60">Built for scale, speed, and reliability.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        <!-- Large Card -->
        <div class="tech-card lg:col-span-2 p-8 md:p-12 flex flex-col justify-between min-h-[380px] text-left">
          <div class="flex flex-col gap-6">
            <span class="material-symbols-outlined text-primary text-5xl md:text-6xl font-extralight">account_tree</span>
            <h3 class="text-2xl md:text-3xl font-headline font-bold text-primary tracking-tight">Hybrid Retrieval Engine</h3>
            <p class="font-body text-sm md:text-base text-on-surface-variant leading-relaxed opacity-80">
              Combining dense vector search via Qdrant with keyword matching in OpenSearch, orchestrated by a high-performance FastAPI backend. Model inference is optimized using ONNX runtime for sub-second latency even on complex multi-hop queries.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 md:gap-3 mt-8">
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">FastAPI</span>
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">Qdrant</span>
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">OpenSearch</span>
            <span class="px-4 py-1.5 bg-surface border border-outline-variant/30 font-label text-[10px] tracking-widest text-primary font-bold uppercase">ONNX</span>
          </div>
        </div>
        <!-- Medium Card 1 -->
        <div class="tech-card p-8 flex flex-col gap-6 text-left">
          <div class="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-2xl font-light">record_voice_over</span>
          </div>
          <h3 class="text-xl font-headline font-bold text-primary tracking-tight">Voice & Text Synthesis</h3>
          <p class="font-body text-sm text-on-surface-variant leading-relaxed opacity-80">
            Native Burmese TTS/STT integration ensuring natural pronunciation of local landmarks and colloquial terms, bridging the literacy gap.
          </p>
        </div>
        <!-- Medium Card 2 -->
        <div class="tech-card p-8 flex flex-col gap-6 text-left">
          <div class="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-2xl font-light">share_location</span>
          </div>
          <h3 class="text-xl font-headline font-bold text-primary tracking-tight">Location Guard Security</h3>
          <p class="font-body text-sm text-on-surface-variant leading-relaxed opacity-80">
            Real-time coordinate verification and geofencing to prevent hallucinations regarding restricted areas or unsafe travel routes.
          </p>
        </div>
        <!-- Small Card -->
        <div class="tech-card lg:col-span-2 p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white text-left">
          <div class="flex items-center gap-6 md:gap-8">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-surface-container-low border border-outline-variant/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary text-3xl md:text-4xl font-light">dns</span>
            </div>
            <div>
              <h3 class="text-xl font-headline font-bold text-primary tracking-tight mb-2">Digital Ocean GPU Cluster</h3>
              <p class="font-body text-sm text-on-surface-variant opacity-80">Dedicated infrastructure ensuring high availability for peak tourist seasons.</p>
            </div>
          </div>
          <span class="font-label text-[10px] tracking-[0.2em] px-5 py-2.5 bg-primary text-white font-bold uppercase shrink-0 rounded-[2px]">Infrastructure</span>
        </div>
      </div>
    </section>
  `;

  // --- Video Player Controllers ---
  const video = container.querySelector("#demo-video");
  const playOverlay = container.querySelector("#video-play-overlay");
  const overlayPlayIcon = container.querySelector("#overlay-play-icon");
  const playBtn = container.querySelector("#video-play-btn");
  const playBtnIcon = container.querySelector("#play-btn-icon");
  const muteBtn = container.querySelector("#video-mute-btn");
  const muteBtnIcon = container.querySelector("#mute-btn-icon");
  const fullscreenBtn = container.querySelector("#video-fullscreen-btn");
  const timeDisplay = container.querySelector("#video-time");
  const progressBar = container.querySelector("#video-progress-bar");
  const progressFill = container.querySelector("#video-progress-fill");
  const progressHandle = container.querySelector("#video-progress-handle");

  // Play / Pause Logic
  function togglePlay() {
    if (video.paused) {
      video.play().catch(err => console.log("Video play interrupted:", err));
      overlayPlayIcon.textContent = "pause";
      playBtnIcon.textContent = "pause";
      playOverlay.classList.add("opacity-0", "pointer-events-none");
    } else {
      video.pause();
      overlayPlayIcon.textContent = "play_arrow";
      playBtnIcon.textContent = "play_arrow";
      playOverlay.classList.remove("opacity-0", "pointer-events-none");
    }
  }

  playOverlay.addEventListener("click", togglePlay);
  playBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  // Time Formatter
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Time & Progress Updates
  video.addEventListener("timeupdate", () => {
    if (video.duration) {
      const percentage = (video.currentTime / video.duration) * 100;
      progressFill.style.width = `${percentage}%`;
      progressHandle.style.left = `${percentage}%`;
      timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    }
  });

  video.addEventListener("loadedmetadata", () => {
    timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
  });

  // Scrub progress
  function scrub(e) {
    const rect = progressBar.getBoundingClientRect();
    const scrubTime = ((e.clientX - rect.left) / rect.width) * video.duration;
    if (scrubTime >= 0 && scrubTime <= video.duration) {
      video.currentTime = scrubTime;
    }
  }

  let isMouseDown = false;
  progressBar.addEventListener("click", scrub);
  progressBar.addEventListener("mousedown", () => isMouseDown = true);
  window.addEventListener("mouseup", () => isMouseDown = false);
  window.addEventListener("mousemove", (e) => {
    if (isMouseDown) scrub(e);
  });

  // Volume Mute Toggle
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.muted) {
      muteBtnIcon.textContent = "volume_off";
    } else {
      muteBtnIcon.textContent = "volume_up";
    }
  });

  // Fullscreen Action
  fullscreenBtn.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });

  // Scroll to Video container
  const scrollBtn = container.querySelector("#scroll-to-chat");
  scrollBtn.addEventListener("click", () => {
    container.querySelector("#chat-simulator").scrollIntoView({ behavior: "smooth" });
  });

  return container;
}
