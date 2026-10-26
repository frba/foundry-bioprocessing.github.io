document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // Mobile Menu Logic
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuToggle && mobileNav) {
    function closeMobileMenu() {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
    }

    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('is-open');
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Set active nav link based on current page
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const currentFile = currentPath.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if (!href) return;

    // Use URL to safely parse the link path
    const linkUrl = new URL(href, window.location.href);
    const linkPath = linkUrl.pathname.replace(/\/$/, '');
    const linkFile = linkPath.split('/').pop() || 'index.html';

    const isHome =
      (currentFile === 'index.html' || currentFile === '') &&
      (linkFile === 'index.html' || linkFile === '');

    const isSamePage = currentFile === linkFile;

    const isCapabilitiesSection =
      linkFile === 'capabilities.html' &&
      (currentFile === 'instrumentation.html' || currentFile === 'capabilities.html');
    const isWorkWithUsSection =
      linkFile === 'WorkWithUs.html' &&
      (currentFile === 'WorkWithUs.html' || currentFile === 'partners.html');

    if (isHome || isSamePage || isCapabilitiesSection || isWorkWithUsSection) {
      link.classList.add('active');
    }
  });

  // Desktop navigation dropdown hover/focus handling with grace period
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  navDropdowns.forEach(dropdown => {
    let timeout;
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      navDropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('is-open');
        }
      });
      dropdown.classList.add('is-open');
    });
    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove('is-open');
      }, 180);
    });
  });

  // Navbar background change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll for anchor links (both #hash and Page.html#hash on current page)
  document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const hash = href.substring(hashIndex);
      const pathPart = href.substring(0, hashIndex);

      if (pathPart) {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const targetFile = pathPart.split('/').pop();
        if (targetFile && targetFile !== currentFile) {
          return;
        }
      }

      try {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          e.preventDefault();
          const offset = 80; // Navbar height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          if (history.pushState) {
            history.pushState(null, '', hash);
          }
        }
      } catch (err) {
        // Fallback for non-standard selector hashes
      }
    });
  });

  // Language Switcher Logic
  const langBtns = document.querySelectorAll('.lang-btn');
  const translations = {
    'fr': {
      // Add translations here as needed
    }
  };

  function setLanguage(lang) {
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // Simplified for now - will expand as content grows
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      setLanguage(e.target.dataset.lang);
    });
  });

  // Easter egg: Click hero image column 4 times to swap
  function setupEasterEgg(container, videoEl, originalSrc, originalPoster) {
    if (!container || !videoEl) return;

    // Prevent the "blue background" caused by rapid click text selection
    container.style.userSelect = 'none';
    container.style.webkitUserSelect = 'none';

    let clickCount = 0;
    container.addEventListener('click', () => {
      clickCount++;
      console.log('Hero clicked: ' + clickCount);
      if (clickCount === 4) {
        // Clear out the old <source> tags so they don't conflict with the new src
        videoEl.innerHTML = '';
        videoEl.src = 'assets/videos/easteregg.webm';
        videoEl.removeAttribute('poster');
        videoEl.muted = false; // Ensure audio plays
        videoEl.loop = false;
        videoEl.load();
        videoEl.play().catch(err => console.error('Play error:', err));

        // Return to original video after 6 seconds
        setTimeout(() => {
          videoEl.src = originalSrc;
          if (originalPoster) {
            videoEl.setAttribute('poster', originalPoster);
          }
          videoEl.muted = true;
          videoEl.loop = true;
          videoEl.load();
          videoEl.play().catch(err => console.error('Play error:', err));
        }, 6000);

        clickCount = 0;
      }
    });
  }

  const darkHeroContainer = document.querySelector('#homepage-hero-dark-test .dark-hero-media');
  const darkHeroVideo = document.querySelector('#homepage-hero-dark-test .dark-hero-media video');

  if (darkHeroContainer && darkHeroVideo) {
    setupEasterEgg(darkHeroContainer, darkHeroVideo, 'assets/videos/vantage-01.webm', null);
  }

  // Partners Grid Logic
  const fundersGrid = document.getElementById('funders-grid');
  const ecosystemGrid = document.getElementById('ecosystem-grid');
  const partnersGrid = document.getElementById('partners-grid');

  const showPendingPartners = true;

  // Partners are displayed by category and then by numeric order.
  // Use gaps of 10 so new organizations can be inserted later.
  const partners = [
    { name: "Canada Foundation for Innovation", file: "CFI.svg", url: "https://www.innovation.ca/", status: "approved", visible: true, category: "funders", order: 20 },
    { name: "Concordia University", file: "Concordia.svg", url: "https://www.concordia.ca/", status: "approved", visible: true, category: "funders", order: 10 },
    { name: "CRIBIQ", file: "CRIBIQ.webp", url: "https://cribiq.qc.ca/", status: "approved", visible: true, category: "ecosystem", order: 10 },
    { name: "Centre for Biological Applications of Mass Spectrometry", file: "CBAMS.webp", url: "https://www.concordia.ca/research/mass-spec.html", status: "pending", visible: true, category: "ecosystem", order: 12 },
    { name: "Centre for Microscopy and Cellular Imaging", file: "CMCI.webp", url: "https://www.concordia.ca/research/microscopy-cellular-imaging.html", status: "pending", visible: true, category: "ecosystem", order: 14 },
    { name: "District 3", file: "D3.webp", url: "https://www.district3.co/", status: "approved", visible: true, category: "ecosystem", order: 20 },
    { name: "Génome Québec", file: "GQ.svg", url: "https://genomequebec.com/en/", status: "approved", visible: true, category: "ecosystem", order: 30 },
    { name: "National Research Council Canada", file: "NRC.webp", url: "https://nrc.canada.ca/en", status: "approved", visible: true, category: "funders", order: 40 },
    { name: "Government of Québec", file: "Quebec.svg", url: "https://www.quebec.ca/", status: "approved", visible: true, category: "funders", order: 30 },

    { name: "BioQuébec", file: "BioQuebec.webp", url: "https://bioquebec.com/en/home/", status: "pending", visible: true, category: "ecosystem", order: 40 },
    { name: "CFIN", file: "CFIN.webp", url: "https://www.cfin-rcia.ca/home", status: "pending", visible: true, category: "ecosystem", order: 50 },
    { name: "CQDM", file: "CQDM.webp", url: "https://cqdm.org/en/", status: "pending", visible: true, category: "ecosystem", order: 60 },
    { name: "Flow Genomics", file: "Flowgenomics.webp", url: "https://www.flowgenomics.com/", status: "pending", visible: true, category: "ecosystem", order: 70 },
    { name: "Galenvs", file: "Galenvs.webp", url: "https://galenvs.com/", status: "pending", visible: true, category: "ecosystem", order: 80 },
    { name: "Global Biofoundry Alliance", file: "GBA.webp", url: "https://www.biofoundries.org/", status: "pending", visible: true, category: "ecosystem", order: 90 },
    { name: "LabGiant", file: "LabGiant.webp", url: "https://labgiant.com/", status: "pending", visible: true, category: "ecosystem", order: 100 },
    { name: "Lallemand", file: "Lallemand.webp", url: "https://www.lallemand.com/en/", status: "pending", visible: true, category: "funders", order: 50 },
    { name: "LRIG Canada", file: "LRIG.webp", url: "https://www.lrig.org/chapters/canada", status: "pending", visible: true, category: "ecosystem", order: 110 },
    { name: "Mitacs", file: "Mitacs.svg", url: "https://www.mitacs.ca/", status: "pending", visible: true, category: "ecosystem", order: 120 },
    { name: "MUHC Centre for Translational Biology", file: "MUHC.svg", url: "https://rimuhc.ca/research-centres/ctb", status: "pending", visible: true, category: "ecosystem", order: 130 },
    { name: "Neptune BioInnovation", file: "Neptune.webp", url: "https://neptunebio.ca/", status: "pending", visible: true, category: "ecosystem", order: 140 },
    { name: "New Harvest", file: "New Harvest.webp", url: "https://www.new-harvest.org/", status: "pending", visible: true, category: "ecosystem", order: 150 },
    { name: "Natural Products Canada", file: "NPC.webp", url: "https://www.naturalproductscanada.com/", status: "pending", visible: true, category: "ecosystem", order: 160 },
    { name: "Protein Industries Canada", file: "PIC.svg", url: "https://proteinindustriescanada.ca/", status: "pending", visible: true, category: "ecosystem", order: 170 },
    { name: "Polytechnique Montréal", file: "Polytechnique.webp", url: "https://www.polymtl.ca/gch/en/research-innovation/research-axes/bioprocess-and-biomedical-engineering", status: "pending", visible: true, category: "ecosystem", order: 180 },
    { name: "PROTEO", file: "PROTEO.webp", url: "https://proteo.ca/", status: "pending", visible: true, category: "ecosystem", order: 190 },
    { name: "Center for iPS Cell Research and Application", file: "CIRA.svg", url: "https://www.cira.kyoto-u.ac.jp/e/", status: "pending", visible: true, category: "ecosystem", order: 200 },
    { name: "CASTL", file: "CASTL.webp", url: "https://www.castlcanada.ca/en/", status: "pending", visible: false, category: "ecosystem", order: 210 },
    { name: "SynBio Canada", file: "SynBioCanada.webp", url: "https://www.synbiocanada.org/", status: "pending", visible: true, category: "ecosystem", order: 220 },
    { name: "Stem Cell Network", file: "Stem Cell Network.webp", url: "https://stemcellnetwork.ca/", status: "pending", visible: true, category: "ecosystem", order: 230 },
    { name: "Réseau de recherche sur le cancer", file: "RRCancer.webp", url: "https://www.rrcancer.ca/en/home-2/", status: "pending", visible: true, category: "ecosystem", order: 240 },
    { name: "Edinburgh Genome Foundry", file: "EGF.webp", url: "https://biology.ed.ac.uk/research/facilities/edinburgh-genome-foundry", status: "pending", visible: true, category: "ecosystem", order: 250 },
    { name: "Genome Alberta", file: "Genome Alberta.svg", url: "https://genomealberta.ca/", status: "pending", visible: false, category: "ecosystem", order: 260 },
    { name: "Genome Atlantic", file: "Genome Atlantic.webp", url: "https://genomeatlantic.ca/", status: "pending", visible: true, category: "ecosystem", order: 270 },
    { name: "Genome Canada", file: "Genome Canada.svg", url: "https://genomecanada.ca/", status: "pending", visible: true, category: "ecosystem", order: 280 },
    { name: "Goodman Cancer Institute", file: "Goodman Cancer Institute.svg", url: "https://www.goodmancancer.ca/en/", status: "pending", visible: true, category: "ecosystem", order: 290 },
    { name: "Ontario Genomics", file: "Ontario Genomics.webp", url: "https://www.ontariogenomics.ca/", status: "pending", visible: true, category: "ecosystem", order: 300 },
    { name: "Global Institute for Food Security", file: "GIFS.webp", url: "https://gifs.ca/technical-services/engineering-biology", status: "pending", visible: true, category: "ecosystem", order: 310 },
    { name: "Canadian Network of Scientific Platforms", file: "CNSP.webp", url: "https://cnsp-rcps.ca/", status: "pending", visible: true, category: "ecosystem", order: 320 },
    { name: "The Molson Foundation", file: "Molson.webp", url: "https://fondationmolson.org/en/", status: "pending", visible: true, category: "funders", order: 60 },
    { name: "iGEM", file: "iGEM.webp", url: "https://igem.org/", status: "pending", visible: true, category: "ecosystem", order: 330 },
    { name: "Paris Biofoundry", file: "ParisBiofoundry.webp", url: "https://parisbiofoundry.org/", status: "pending", visible: true, category: "ecosystem", order: 340 },
    { name: "Pacific Northwest National Laboratory", file: "PNNL.webp", url: "https://www.pnnl.gov/", status: "pending", visible: true, category: "ecosystem", order: 350 },
    { name: "Institut national de la recherche scientifique", file: "INRS.webp", url: "https://inrs.ca/en/", status: "pending", visible: true, category: "ecosystem", order: 360 },
    { name: "Institut de recherches cliniques de Montréal", file: "IRCM.webp", url: "https://www.ircm.qc.ca", status: "pending", visible: true, category: "ecosystem", order: 370 },
    { name: "Université de Sherbrooke", file: "USherbrooke.webp", url: "https://www.usherbrooke.ca/", status: "pending", visible: true, category: "ecosystem", order: 380 },
    { name: "Nucleate", file: "nucleate.webp", url: "https://nucleate.org/", status: "pending", visible: true, category: "ecosystem", order: 390 }
  ];

  const visiblePartners = partners.filter(
    partner => partner.visible && (showPendingPartners || partner.status === "approved")
  );

  function sortPartnersByOrder(a, b) {
    const orderA = a.order ?? 9999;
    const orderB = b.order ?? 9999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.name.localeCompare(b.name);
  }

  function createPartnerCard(partner) {
    const card = document.createElement('a');
    card.className = 'partner-logo-card';
    card.href = partner.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `Visit ${partner.name}`);

    const img = document.createElement('img');
    img.src = `assets/images/partners/${partner.file}`;
    img.alt = `${partner.name} logo`;
    img.className = 'partner-logo-img';

    const tooltip = document.createElement('div');
    tooltip.className = 'partner-tooltip';
    tooltip.textContent = partner.name;

    card.appendChild(img);
    card.appendChild(tooltip);

    return card;
  }

  if (partnersGrid) {
    [...visiblePartners].sort(sortPartnersByOrder).forEach(partner => {
      partnersGrid.appendChild(createPartnerCard(partner));
    });
  }

  if (fundersGrid) {
    const funders = visiblePartners.filter(p => p.category === 'funders').sort(sortPartnersByOrder);
    funders.forEach(partner => {
      fundersGrid.appendChild(createPartnerCard(partner));
    });
  }

  if (ecosystemGrid) {
    const ecosystem = visiblePartners.filter(p => p.category === 'ecosystem').sort(sortPartnersByOrder);
    ecosystem.forEach(partner => {
      ecosystemGrid.appendChild(createPartnerCard(partner));
    });
  }
  // Media Gallery Logic
  const mediaGalleries = document.querySelectorAll('.media-gallery');

  mediaGalleries.forEach(gallery => {
    const hero = gallery.querySelector('.gallery-hero');
    const thumbnails = gallery.querySelectorAll('.thumbnail');

    if (!hero || !thumbnails.length) return;

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const type = thumb.dataset.type;

        if (type === 'video') {
          const previewSrc = thumb.dataset.previewSrc;
          const videoUrl = thumb.dataset.videoUrl;
          const videoSource = thumb.dataset.videoSource || 'youtube';
          const videoTitle = thumb.dataset.videoTitle || 'Technology platform video';
          const alt = thumb.dataset.alt || 'Video preview';

          if (!previewSrc || !videoUrl) return;

          hero.innerHTML = `
            <button
              class="gallery-video-preview"
              type="button"
              data-video-url="${videoUrl}"
              data-video-source="${videoSource}"
              data-video-title="${videoTitle}"
              aria-label="Play video"
            >
              <img src="${previewSrc}" alt="${alt}">
              <span class="gallery-play-button">▶</span>
            </button>
          `;

          const previewButton = hero.querySelector('.gallery-video-preview');

          if (previewButton) {
            previewButton.addEventListener('click', () => {
              const embedUrl = previewButton.dataset.videoUrl;
              const embedSource = previewButton.dataset.videoSource;
              const embedTitle = previewButton.dataset.videoTitle;

              if (!embedUrl) return;

              if (embedSource === 'youtube') {
                hero.innerHTML = `
                  <iframe
                    class="gallery-hero-iframe"
                    src="${embedUrl}"
                    title="${embedTitle}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                `;
              } else if (embedSource === 'local') {
                const videoType = embedUrl.endsWith('.webm') ? 'video/webm' : 'video/mp4';
                hero.innerHTML = `
                  <video
                    class="gallery-hero-video"
                    title="${embedTitle}"
                    controls
                    autoplay
                    muted
                    loop
                    playsinline
                  >
                    <source src="${embedUrl}" type="${videoType}">
                    Your browser does not support the video tag.
                  </video>
                `;
              }
            });
          }

          return;
        }

        if (type === 'image') {
          const newSrc = thumb.dataset.src;
          const newAlt = thumb.dataset.alt || 'Technology platform image';

          if (!newSrc) return;

          hero.innerHTML = `
            <img
              class="gallery-hero-img"
              src="${newSrc}"
              alt="${newAlt}"
            >
          `;
        }
      });
    });
  });

  // Placeholder testimonials — replace with approved quotes before launch.
  const testimonials = [
    {
      quote: "We initially began working with the Genome Foundry through a service contract and eventually decided to embed a team on-site. Having direct access to their equipment, technical expertise, and support has significantly accelerated our progress, from strain prototyping to bioprocessing and production scale-up. Additionally, hiring Concordia graduates who were already familiar with the platforms has made our onboarding process much smoother.",
      name: "Michael Dennis",
      title: "VP Research",
      organization: "pHathom Technologies",
      tag: "Hosted Access",
      photo: "assets/images/clients/Michael Dennis.webp",
      logo: "assets/images/startups/pHathom_Logo_Dark_Horizontal.webp",
      active: true,
      placeholder: true
    },
    {
      quote: "We brought the Concordia Genome Foundry a challenging project: dozens of complex DNA constructs, some reaching 30 kb. These were not straightforward assemblies, and the team worked through several technical hurdles along the way. What stood out was their willingness to try different approaches and find solutions rather than simply stick to the original plan. They were knowledgeable, responsive, and genuinely invested in making the project succeed. Throughout, they kept us informed and treated the work as a shared problem rather than a handoff. It is exactly the kind of collaborative partnership we value, and we would gladly work with them again.",
      name: "Wilf Jefferies",
      title: "CSO & Founder",
      organization: "Eyam Health",
      tag: "Hosted Access",
      photo: "assets/images/clients/Wilf Jefferies.png",
      logo: "assets/images/clients/eyam_health.png",
      active: true,
      placeholder: true
    },
    {
      quote: "The bioprocessing team has been a valuable partner for our development work. Their expertise and experience facilitated onboarding our fungal organism, adapting our protocol, and transferring our process from shake flasks to 3- to 20-liter bioreactor scale. Along the way, they were accessible, flexible, and collaborative, and welcomed our on-site presence during the work. We look forward to continuing this work with them as we move toward pilot scale.",
      name: "Mahsa Alimi",
      title: "Co-Founder & CSO",
      organization: "Biosam",
      tag: "Research Services - Bioprocessing",
      photo: "assets/images/clients/Mahsa Alimi.webp",
      logo: "assets/images/clients/BioSam_logo.webp",
      active: true,
      placeholder: true
    },
    {
      quote: "Direct access to the platform helped us use the Echo acoustic droplet ejection system for precise reagent printing as part of our prototype development. The team supported method onboarding, trained us on the workflow, and gave us access to specialized instrumentation that would have been difficult to build internally. It has been a practical way to move our R&D forward while staying lean.",
      name: "Vahid Hamidi",
      title: "Co-Founder & CSO",
      organization: "Labionyx",
      tag: "Training & Direct Access",
      photo: "assets/images/clients/Vahid Hamidi.webp",
      logo: "assets/images/clients/Labionyx.webp",
      active: true,
      placeholder: true
    },
    {
      quote: "The team helped us move a defined service project forward with the right mix of technical support, infrastructure, and execution. The value was not just access to equipment, but having experienced people help translate the work into usable results.",
      name: "Sandeep Kumar",
      title: "Applied Research Lead",
      organization: "Gates Agricultural Innovations",
      tag: "Service Project",
      photo: "assets/images/clients/Sandeep Kumar.webp",
      logo: "assets/images/clients/GatesAgOne.webp",
      active: false,
      placeholder: true
    },
    {
      quote: "Working with the platform gave us access to the right infrastructure and technical support to move our project forward efficiently. The experience was smooth, practical, and grounded in strong scientific execution.",
      name: "Gilbert Bernier",
      title: "Associate Professor",
      organization: "HMR",
      tag: "Service Project",
      photo: "assets/images/clients/Gilbert Bernier.webp",
      logo: "assets/images/clients/HMR.svg",
      active: false,
      placeholder: true
    },
    {
      quote: "Working with the platform allowed us to execute a large, technically demanding collaboration with confidence. Together, we generated an arrayed library of nearly 10,000 Cas12 crRNAs to support systematic co-IP workflows.",
      name: "Richard Marcotte",
      title: "Senior Research Officer",
      organization: "National Research Council Canada",
      tag: "Collaboration",
      photo: "assets/images/clients/Richard Marcotte.webp",
      logo: "assets/images/clients/NRC.webp",
      active: false,
      placeholder: true
    }
  ];

  const testimonialGrid = document.getElementById('testimonial-grid');
  if (testimonialGrid) {
    testimonials.filter(t => t.active).forEach(t => {
      const card = document.createElement('div');
      card.className = 'testimonial-card';

      const initials = t.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
      const photoHtml = t.photo
        ? `<div class="testimonial-photo"><img src="${t.photo}" alt="${t.name}"></div>`
        : `<div class="testimonial-photo">${initials}</div>`;

      const orgClassMap = {
        'pHathom Technologies': 'testimonial-logo-phathom',
        'pHathom': 'testimonial-logo-phathom',
        'Eyam Health': 'testimonial-logo-eyam',
        'Biosam': 'testimonial-logo-biosam',
        'Labionyx': 'testimonial-logo-labionyx'
      };
      const extraClass = orgClassMap[t.organization] ? ` ${orgClassMap[t.organization]}` : '';
      const logoHtml = t.logo
        ? `<img src="${t.logo}" alt="${t.organization} logo" class="testimonial-logo${extraClass}">`
        : `<div class="testimonial-org">${t.organization}</div>`;

      card.innerHTML = `
        <div class="testimonial-tag">${t.tag}</div>
        <p class="testimonial-quote">“${t.quote}”</p>
        <div class="testimonial-person">
          <div class="testimonial-person-left">
            ${photoHtml}
            <div class="testimonial-details">
              <div class="testimonial-name">${t.name}</div>
              <div class="testimonial-title">${t.title}</div>
            </div>
          </div>
          <div class="testimonial-logo-wrap">
            ${logoHtml}
          </div>
        </div>
      `;
      testimonialGrid.appendChild(card);
    });

    initTestimonialCarousel();
  }

  // Partner Voices Carousel Controller
  function initTestimonialCarousel() {
    const viewport = document.getElementById('testimonial-viewport');
    const track = document.getElementById('testimonial-grid');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dotsContainer = document.getElementById('testimonial-dots');

    if (!viewport || !track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    function getCardsPerView() {
      return window.innerWidth >= 768 ? 2 : 1;
    }

    function getTotalPages() {
      const perView = getCardsPerView();
      return Math.ceil(cards.length / perView);
    }

    function getCurrentPage() {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      if (maxScroll <= 2) return 0;
      const totalPages = getTotalPages();
      const ratio = viewport.scrollLeft / maxScroll;
      return Math.min(Math.round(ratio * (totalPages - 1)), totalPages - 1);
    }

    function renderDots() {
      if (!dotsContainer) return;
      const totalPages = getTotalPages();
      const currentPage = getCurrentPage();

      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot' + (i === currentPage ? ' active' : '');
        dot.setAttribute('type', 'button');
        dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1} of ${totalPages}`);
        dot.addEventListener('click', () => {
          goToPage(i);
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateActiveDot() {
      if (!dotsContainer) return;
      const totalPages = getTotalPages();
      if (dotsContainer.children.length !== totalPages) {
        renderDots();
        return;
      }
      const currentPage = getCurrentPage();
      Array.from(dotsContainer.children).forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentPage);
      });
    }

    function goToPage(pageIndex) {
      const perView = getCardsPerView();
      const cardIndex = Math.min(pageIndex * perView, cards.length - 1);
      const targetCard = cards[cardIndex];
      if (targetCard) {
        viewport.scrollTo({
          left: targetCard.offsetLeft - track.offsetLeft,
          behavior: 'smooth'
        });
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        if (viewport.scrollLeft >= maxScroll - 15) {
          viewport.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          viewport.scrollBy({ left: viewport.clientWidth, behavior: 'smooth' });
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (viewport.scrollLeft <= 15) {
          viewport.scrollTo({ left: viewport.scrollWidth, behavior: 'smooth' });
        } else {
          viewport.scrollBy({ left: -viewport.clientWidth, behavior: 'smooth' });
        }
      });
    }

    // Keyboard support when viewport is focused
    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextBtn?.click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevBtn?.click();
      }
    });

    // Mouse drag-to-scroll support for desktop
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    viewport.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - viewport.offsetLeft;
      scrollStart = viewport.scrollLeft;
      viewport.classList.add('is-dragging');
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        viewport.classList.remove('is-dragging');
      }
    });

    viewport.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const walk = (x - startX);
      viewport.scrollLeft = scrollStart - walk;
    });

    // Update active dot on scroll
    let scrollTimeout;
    viewport.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveDot, 50);
    }, { passive: true });

    // Handle screen resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        renderDots();
      }, 100);
    });

    // Initial render of dots
    renderDots();
  }

  // Startup Residency Logic
  const startupResidencyGrid = document.getElementById('startup-residency-grid');
  const startups = [
    {
      name: "Neiges Biotechnologies",
      file: "NEIGES_logo_nobackground_padding_blackletter.webp",
      url: "https://www.linkedin.com/company/neiges-biotechnologies/home/"
    },
    {
      name: "pHathom",
      file: "pHathom_Logo_Dark_Horizontal.webp",
      url: "https://phathom.tech/"
    },
    {
      name: "Nanomère",
      file: "Nanomere.webp",
      url: "https://nanomere.ca/fr"
    }
  ];

  if (startupResidencyGrid) {
    startups.forEach(startup => {
      const card = document.createElement('a');
      card.className = 'startup-logo-card';
      card.href = startup.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.setAttribute('aria-label', `Visit ${startup.name} on LinkedIn`);

      const img = document.createElement('img');
      img.src = `assets/images/startups/${startup.file}`;
      img.alt = `${startup.name} logo`;
      img.className = 'startup-logo-img';

      const tooltip = document.createElement('div');
      tooltip.className = 'startup-tooltip';
      tooltip.textContent = startup.name;

      card.appendChild(img);
      card.appendChild(tooltip);

      startupResidencyGrid.appendChild(card);
    });
  }

  // Global Background Parallax
  const bgElements = document.querySelectorAll('.bg-element');

  if (bgElements.length > 0) {
    // Only animate if the user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!prefersReducedMotion.matches) {
      let ticking = false;

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;

            // Subtle diagonal movement: slow upward and rightward drift
            bgElements.forEach((el, index) => {
              // Increased speed for more noticeable diagonal movement (100-160px range)
              const speedY = 0.12 + (index * 0.02);
              const speedX = 0.08 + (index * 0.015);

              const moveY = -(scrollY * speedY);
              const moveX = scrollY * speedX;

              el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });

            ticking = false;
          });
          ticking = true;
        }
      });
    }
  }

  // Dynamic Modal Logic
  const modalData = {
    'research-services': {
      title: 'Research Services',
      body: '<p>We provide custom-scoped research services for academic, startup, industry, and translational projects. This may include contract research, experimental planning, method development, workflow execution, technical analysis, assay development, automation, cell engineering, synthetic biology workflows, and bioprocessing-related research activities.</p><p>Projects are scoped around the research question, materials, workflow, deliverables, timeline, and level of platform involvement required.</p><p>For projects involving proprietary materials, commercial applications, or downstream product development, clients and partners are responsible for ensuring appropriate rights, permissions, licenses, and freedom-to-operate considerations for their intended use.</p>'
    },
    'research-collaborations': {
      title: 'Research Collaborations',
      body: '<p>We support collaborative research projects involving shared scientific development, co-designed workflows, exploratory research, grant-funded initiatives, and translational development activities.</p><p>Collaborations may involve academic researchers, research groups, startups, industry partners, or multi-partner teams. The structure of each collaboration depends on the project goals, scientific contributions, responsibilities, funding model, and required platform capacity.</p>'
    },
    'platform-access': {
      title: 'Platform Access & Technical Support',
      body: '<p>We can support access to specialized infrastructure, instruments, training, workspace, and technical support for users and project teams.</p><p>This may include hosted experimental work, platform training, direct infrastructure access, instrument time, user-fee arrangements, technical assistance, or limited fee-for-service execution for clearly defined workflows.</p><p>Defined technical work is scoped based on the workflow, instrument use, labour, materials, timeline, and data or deliverables required.</p>'
    },
    'partnership-pathways': {
      title: 'Partnership Pathways',
      body: '<p>We support emerging and translational projects through partnership development, infrastructure access planning, letters of support, grant partnership discussions, academic collaborator connections, HQP opportunities, and ecosystem engagement.</p><p>This pathway is intended for teams exploring longer-term relationships, funding opportunities, platform-enabled translational projects, or strategic partnerships that may later develop into research services, collaborations, hosted access, or other forms of support.</p>'
    }
  };

  const modalOverlay = document.getElementById('wwu-modal-overlay');
  const dynamicModal = document.getElementById('wwu-dynamic-modal');
  const modalTitle = document.getElementById('wwu-modal-title');
  const modalBody = document.getElementById('wwu-modal-body');
  const closeBtn = document.getElementById('wwu-modal-close-btn');
  const learnMoreBtns = document.querySelectorAll('.wwu-learn-more');
  let previouslyFocusedElement = null;

  if (modalOverlay && dynamicModal) {
    function openModal(modalId) {
      const data = modalData[modalId];
      if (data) {
        previouslyFocusedElement = document.activeElement;

        modalTitle.innerHTML = data.title;
        modalBody.innerHTML = data.body;

        modalOverlay.classList.add('active');
        dynamicModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Set focus to the modal for accessibility
        dynamicModal.focus();
      }
    }

    function closeModal() {
      modalOverlay.classList.remove('active');
      dynamicModal.classList.remove('active');
      document.body.style.overflow = '';

      if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
      }
    }

    learnMoreBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = btn.getAttribute('data-modal');
        openModal(modalId);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Inline Popovers Logic
  const popoverTriggers = document.querySelectorAll('.inline-popover-trigger');

  if (popoverTriggers.length > 0) {
    popoverTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = trigger.getAttribute('aria-controls');
        const targetPopover = document.getElementById(targetId);
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other popovers
        popoverTriggers.forEach(t => {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            const otherTarget = document.getElementById(t.getAttribute('aria-controls'));
            if (otherTarget) {
              otherTarget.classList.remove('is-active');
              otherTarget.setAttribute('aria-hidden', 'true');
            }
          }
        });

        // Toggle current
        if (isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          if (targetPopover) {
            targetPopover.classList.remove('is-active');
            targetPopover.setAttribute('aria-hidden', 'true');
          }
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          if (targetPopover) {
            targetPopover.classList.add('is-active');
            targetPopover.setAttribute('aria-hidden', 'false');
          }
        }
      });

      // Stop clicks inside popover from closing it
      const targetId = trigger.getAttribute('aria-controls');
      const targetPopover = document.getElementById(targetId);
      if (targetPopover) {
        targetPopover.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    });

    // Close on outside click
    document.addEventListener('click', () => {
      popoverTriggers.forEach(trigger => {
        trigger.setAttribute('aria-expanded', 'false');
        const targetId = trigger.getAttribute('aria-controls');
        const targetPopover = document.getElementById(targetId);
        if (targetPopover) {
          targetPopover.classList.remove('is-active');
          targetPopover.setAttribute('aria-hidden', 'true');
        }
      });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        popoverTriggers.forEach(trigger => {
          trigger.setAttribute('aria-expanded', 'false');
          const targetId = trigger.getAttribute('aria-controls');
          const targetPopover = document.getElementById(targetId);
          if (targetPopover) {
            targetPopover.classList.remove('is-active');
            targetPopover.setAttribute('aria-hidden', 'true');
          }
        });
      }
    });
  }

  // Interactive Microplate Grid Animation (Spotlight Hover & Cursor Follow + Mobile Ambient Scan & Touch)
  const microplateSvg = document.querySelector('.microplate-animated');
  if (microplateSvg) {
    const wells = microplateSvg.querySelectorAll('.plate-well');
    const wellData = [];

    wells.forEach(well => {
      let hoverColor = '#00d2ff';
      const classList = well.classList;
      if (classList.contains('well-cyan')) {
        hoverColor = '#00d2ff';
      } else if (classList.contains('well-magenta')) {
        hoverColor = '#ff2a85';
      } else if (classList.contains('tier-0')) {
        hoverColor = '#38bdf8';
      } else if (classList.contains('tier-1')) {
        hoverColor = '#f472b6';
      } else if (classList.contains('tier-2')) {
        hoverColor = '#34d399';
      } else if (classList.contains('tier-3')) {
        hoverColor = '#fbbf24';
      } else if (classList.contains('tier-4')) {
        hoverColor = '#c084fc';
      }

      wellData.push({
        el: well,
        cx: parseFloat(well.getAttribute('data-cx')),
        cy: parseFloat(well.getAttribute('data-cy')),
        hoverColor: hoverColor
      });
    });

    let rafId = null;
    let autoRafId = null;
    let isTouching = false;
    let touchResumeTimeout = null;
    let isVisible = false;
    let isMouseOver = false;

    function isMobileMode() {
      return window.innerWidth <= 991 || ('ontouchstart' in window && window.innerWidth <= 1024);
    }

    function prefersReducedMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function renderSpotlight(pos, maxRadius = 55) {
      if (!pos) return;
      const { x, y } = pos;

      wellData.forEach(item => {
        const dx = item.cx - x;
        const dy = item.cy - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxRadius) {
          const factor = 1 - (dist / maxRadius);
          const scale = 1 + factor * 0.45;
          const moveX = (dx / (dist || 1)) * factor * 2.5;
          const moveY = (dy / (dist || 1)) * factor * 2.5;

          item.el.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
          item.el.style.fill = item.hoverColor;
          if (dist < 20) {
            item.el.style.filter = `drop-shadow(0 0 5px ${item.hoverColor})`;
          } else {
            item.el.style.filter = '';
          }
        } else {
          if (item.el.style.transform) item.el.style.transform = '';
          if (item.el.style.fill) item.el.style.fill = '';
          if (item.el.style.filter) item.el.style.filter = '';
        }
      });
    }

    function resetWells() {
      wellData.forEach(item => {
        if (item.el.style.transform) item.el.style.transform = '';
        if (item.el.style.fill) item.el.style.fill = '';
        if (item.el.style.filter) item.el.style.filter = '';
      });
    }

    // Auto-scan ambient loop for mobile mode
    function autoLoop(timestamp) {
      if (!isVisible || prefersReducedMotion()) {
        autoRafId = null;
        return;
      }

      if (!isMobileMode()) {
        autoRafId = null;
        if (!isMouseOver) resetWells();
        return;
      }

      if (!isTouching) {
        // Continuous Lissajous / figure-eight path traversing the microplate wells
        const t = timestamp * 0.0014;
        const x = 230 + 155 * Math.sin(t);
        const y = 120 + 55 * Math.sin(t * 2);
        const radius = 60 + 6 * Math.sin(t * 1.5);
        renderSpotlight({ x, y }, radius);
      }

      autoRafId = requestAnimationFrame(autoLoop);
    }

    function startAutoLoop() {
      if (autoRafId) return;
      if (!isMobileMode() || !isVisible || prefersReducedMotion()) return;
      autoRafId = requestAnimationFrame(autoLoop);
    }

    function stopAutoLoop() {
      if (autoRafId) {
        cancelAnimationFrame(autoRafId);
        autoRafId = null;
      }
    }

    // Desktop Mouse Events
    microplateSvg.addEventListener('mousemove', (e) => {
      isMouseOver = true;
      stopAutoLoop();
      const rect = microplateSvg.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 460;
      const y = ((e.clientY - rect.top) / rect.height) * 246;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          renderSpotlight({ x, y }, 55);
          rafId = null;
        });
      }
    });

    microplateSvg.addEventListener('mouseleave', () => {
      isMouseOver = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (isMobileMode()) {
        startAutoLoop();
      } else {
        resetWells();
      }
    });

    // Mobile Touch Events
    function handleTouch(e) {
      if (!e.touches || e.touches.length === 0) return;
      isTouching = true;
      clearTimeout(touchResumeTimeout);
      const touch = e.touches[0];
      const rect = microplateSvg.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 460;
      const y = ((touch.clientY - rect.top) / rect.height) * 246;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          renderSpotlight({ x, y }, 62);
          rafId = null;
        });
      }
    }

    microplateSvg.addEventListener('touchstart', handleTouch, { passive: true });
    microplateSvg.addEventListener('touchmove', handleTouch, { passive: true });

    const endTouch = () => {
      clearTimeout(touchResumeTimeout);
      touchResumeTimeout = setTimeout(() => {
        isTouching = false;
      }, 1200);
    };

    microplateSvg.addEventListener('touchend', endTouch, { passive: true });
    microplateSvg.addEventListener('touchcancel', endTouch, { passive: true });

    // IntersectionObserver for performance (only animate when in viewport)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            if (isMobileMode()) startAutoLoop();
          } else {
            stopAutoLoop();
            resetWells();
          }
        });
      }, { threshold: 0.1 });
      observer.observe(microplateSvg);
    } else {
      isVisible = true;
      if (isMobileMode()) startAutoLoop();
    }

    // Dynamic resize handler between desktop and mobile modes
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (isMobileMode() && isVisible) {
          startAutoLoop();
        } else if (!isMobileMode()) {
          stopAutoLoop();
          if (!isMouseOver) resetWells();
        }
      }, 150);
    });
  }
});

