/**
 * =========================================================================
 * SATYABRAT PANDEY — PORTFOLIO RUNTIME ENGINE
 * =========================================================================
 * Reads from centralized portfolio.config.js.
 * Handles typing animation, custom cursor, scroll progress, terminal CLI,
 * project filtering, blueprint modal, resume generation, and contact dispatch.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Typing Effect
  initTypewriter();

  // 2. Initialize Custom Cursor (Desktop Only)
  initCustomCursor();

  // 3. Initialize Scroll Progress Indicator & Sticky Nav
  initScrollEffects();

  // 4. Initialize Mobile Navigation Drawer
  initMobileNav();

  // 5. Initialize Project Category Filters & Modal
  initProjectInteractions();

  // 6. Initialize Interactive CLI Terminal
  initCLITerminal();

  // 7. Initialize Resume Download Functionality
  initResumeDownload();

  // 8. Initialize Contact Form & Copy Actions
  initContactForm();

  // 9. Back to Top Button
  initBackToTop();
});

/* ==========================================================================
   1. ANIMATED TYPING EFFECT FOR PROFESSIONAL TITLES
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter-roles');
  if (!target) return;

  const roles = (typeof portfolioConfig !== 'undefined' && portfolioConfig.personal.roleTitles) || [
    'Full Stack Developer',
    'AI Enthusiast',
    'Software Engineer',
    'CSE Student @ LPU'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 75;
  const backSpeed = 40;
  const pauseTime = 2200;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      target.textContent = currentRole.substring(0, charIdx);
    } else {
      charIdx++;
      target.textContent = currentRole.substring(0, charIdx);
    }

    let delay = isDeleting ? backSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   2. CUSTOM GLOW CURSOR (DESKTOP ONLY)
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const dot = document.getElementById('cursor-glow-dot');
  if (!cursor || !dot) return;

  // Only enable on pointer-fine devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Enlarge cursor on interactive links/buttons
  const interactives = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-tag');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

/* ==========================================================================
   3. SCROLL PROGRESS INDICATOR & STICKY NAVBAR SPY
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // 1. Update Progress Bar
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // 2. Sticky Navbar Glass Effect
    if (navbar) {
      if (scrollTop > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // 3. Active Nav Link Spy
    let currentId = '';
    const scrollOffset = scrollTop + 160;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollOffset >= top && scrollOffset < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   4. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  if (!toggleBtn || !drawer) return;

  function toggleDrawer() {
    toggleBtn.classList.toggle('active');
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    drawer.setAttribute('aria-hidden', !isOpen);
  }

  toggleBtn.addEventListener('click', toggleDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ==========================================================================
   5. PROJECT CATEGORY FILTERS & BLUEPRINT MODAL
   ========================================================================== */
function initProjectInteractions() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  // Filter Tabs
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Blueprint Quickview Modal
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalTech = document.getElementById('modal-tech');
  const modalGithubLink = document.getElementById('modal-github-link');
  const quickviewBtns = document.querySelectorAll('.blueprint-quickview-btn');

  if (!modal) return;

  quickviewBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const projectList = (typeof portfolioConfig !== 'undefined' && portfolioConfig.projects.list) || [];
      const proj = projectList.find((p) => p.id === projId);

      if (!proj) return;

      modalCategory.textContent = proj.category;
      modalTitle.textContent = proj.title;
      modalImg.src = proj.image;
      modalImg.alt = proj.title;
      modalDesc.textContent = proj.shortDescription;

      modalFeatures.innerHTML = proj.features.map((f) => `<li>${f}</li>`).join('');
      modalTech.innerHTML = proj.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join('');
      modalGithubLink.href = proj.githubUrl;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. INTERACTIVE CLI TERMINAL DRAWER
   ========================================================================== */
function initCLITerminal() {
  const terminal = document.getElementById('cli-terminal');
  const toggleBtn = document.getElementById('terminal-toggle');
  const closeDot = document.getElementById('terminal-close-dot');
  const input = document.getElementById('terminal-cli-input');
  const output = document.getElementById('terminal-output');

  if (!terminal || !input || !output) return;

  function openTerminal() {
    terminal.classList.add('open');
    terminal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    input.focus();
  }

  function closeTerminal() {
    terminal.classList.remove('open');
    terminal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openTerminal);
  if (closeDot) closeDot.addEventListener('click', closeTerminal);

  terminal.addEventListener('click', (e) => {
    if (e.target === terminal) closeTerminal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && terminal.classList.contains('open')) {
      closeTerminal();
    }
  });

  function appendOutput(text, className = 'term-output') {
    const line = document.createElement('div');
    line.className = `term-line ${className}`;
    line.innerHTML = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = input.value.trim();
      if (command) {
        appendOutput(`visitor@satyabrat:~$ ${command}`, 'term-dim');
        processCommand(command.toLowerCase());
      }
      input.value = '';
    }
  });

  function processCommand(cmd) {
    switch (cmd) {
      case 'help':
        appendOutput('Available commands:');
        appendOutput('  <span class="term-accent">whoami</span>          - Biography & academic profile');
        appendOutput('  <span class="term-accent">skills</span>          - Core technical competencies');
        appendOutput('  <span class="term-accent">projects</span>        - Featured engineering projects');
        appendOutput('  <span class="term-accent">education</span>       - University & schooling chronology');
        appendOutput('  <span class="term-accent">certifications</span>  - Training & verified credentials');
        appendOutput('  <span class="term-accent">contact</span>         - Direct email, GitHub, LinkedIn');
        appendOutput('  <span class="term-accent">resume</span>          - Trigger CV download');
        appendOutput('  <span class="term-accent">clear</span>           - Clear terminal window');
        appendOutput('  <span class="term-accent">exit</span>            - Close the terminal');
        break;

      case 'whoami':
        appendOutput('Satyabrat Pandey — B.Tech Computer Science and Engineering @ LPU (2024–2028).', 'term-success');
        appendOutput('Passionate about Full Stack Development, AI integration, and building scalable products.');
        appendOutput('CGPA: 7.44 / 10 | Location: Gorakhpur / Punjab, India');
        break;

      case 'skills':
        appendOutput('Languages: C++, JavaScript, Python, HTML, CSS');
        appendOutput('Frontend: React.js, Next.js, Tailwind CSS');
        appendOutput('Backend: Node.js, Express.js, REST APIs');
        appendOutput('Databases: MongoDB, PostgreSQL, MySQL');
        appendOutput('Tools: Git, GitHub, VS Code, Postman, npm, Vercel');
        appendOutput('Fundamentals: DSA in C++, OOP, DBMS, Computer Networks');
        break;

      case 'projects':
        appendOutput('1. <span class="term-accent">Aarogya Protect</span>: AI Medical Report Explainer (Gemini API, Node.js)');
        appendOutput('2. <span class="term-accent">Awas</span>: Hotel & Short-Stay Booking Platform (React.js)');
        appendOutput('3. <span class="term-accent">Authentication & Session System</span>: Secure backend with bcrypt & sessions');
        appendOutput('4. <span class="term-accent">Interactive Image Gallery</span>: Lazy loading responsive gallery');
        appendOutput('GitHub Profile: https://github.com/saty159');
        break;

      case 'education':
        appendOutput('• Lovely Professional University: B.Tech CSE (2024–2028) — CGPA: 7.44/10');
        appendOutput('• AATMDEEP VIDYALAYA: Senior Secondary (Class XII, 2023–2024)');
        appendOutput('• AATMDEEP VIDYALAYA: Secondary (Class X, 2021–2022)');
        break;

      case 'certifications':
        appendOutput('• DSA in C++ — Lovely Professional University (Aug 2025–Feb 2026)');
        appendOutput('• Infosys Springboard Certification — April 2026');
        appendOutput('• SQL and Relational Databases 101 — IBM Developer Skills Network');
        appendOutput('• Software Engineering Simulation — Accenture Forage (Aug 2025)');
        appendOutput('• Software Engineering Simulation — Deloitte Forage (Sept 2025)');
        break;

      case 'contact':
        appendOutput('Email: satyabrat.pandey.dev@gmail.com');
        appendOutput('LinkedIn: https://www.linkedin.com/in/satyabrat-pandey-660878313');
        appendOutput('GitHub: https://github.com/saty159');
        break;

      case 'resume':
        triggerResumeDownload();
        appendOutput('Generating resume download...', 'term-success');
        break;

      case 'clear':
        output.innerHTML = '';
        break;

      case 'exit':
      case 'quit':
        closeTerminal();
        break;

      default:
        appendOutput(`Command not recognized: "${cmd}". Type <span class="term-accent">help</span> for commands.`, 'term-error');
        break;
    }
  }
}

/* ==========================================================================
   7. RESUME GENERATION & DOWNLOAD
   ========================================================================== */
function initResumeDownload() {
  const downloadBtns = document.querySelectorAll('.resume-download-trigger');
  downloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerResumeDownload();
    });
  });
}

function triggerResumeDownload() {
  showToast('📄 Preparing Satyabrat_Pandey_Resume.txt...');

  setTimeout(() => {
    const resumeText = `================================================================================
SATYABRAT PANDEY
Full Stack Developer | AI Enthusiast | Software Engineer
Location: Gorakhpur, Uttar Pradesh / Phagwara, Punjab, India
GitHub: https://github.com/saty159
LinkedIn: https://www.linkedin.com/in/satyabrat-pandey-660878313
Email: satyabrat.pandey.dev@gmail.com
================================================================================

CAREER OBJECTIVE:
"To become a skilled software engineer and product builder, contributing to impactful
technology solutions while continuously improving my engineering and problem-solving abilities."

ACADEMIC BACKGROUND:
--------------------------------------------------------------------------------
• Lovely Professional University (LPU), Phagwara, Punjab
  Bachelor of Technology – Computer Science and Engineering
  Duration: August 2024 – August 2028
  CGPA: 7.44 / 10.0

• AATMDEEP VIDYALAYA, Gorakhpur, Uttar Pradesh
  Senior Secondary – Class XII (2023 – 2024)

• AATMDEEP VIDYALAYA, Gorakhpur, Uttar Pradesh
  Secondary – Class X (2021 – 2022)

TECHNICAL SKILLS:
--------------------------------------------------------------------------------
• Programming Languages: C++, JavaScript, Python, HTML5, CSS3
• Frontend: React.js, Next.js, Tailwind CSS, Responsive UI
• Backend: Node.js, Express.js, REST APIs, Session Management
• Databases: MongoDB, PostgreSQL, MySQL, Mongoose ODM
• Developer Tools: Git, GitHub, VS Code, Postman, npm, Vercel
• CS Fundamentals: Data Structures & Algorithms, OOP, DBMS, Computer Networks

FEATURED PROJECTS:
--------------------------------------------------------------------------------
1. AAROGYA PROTECT (AI / Healthcare)
   - An AI-powered medical report explainer that helps users understand medical
     reports in simple, accessible language.
   - Tech: HTML, CSS, JavaScript, Node.js, Express.js, Gemini API.
   - Features: Plain-language diagnostic breakdowns, medicine advice & precautions.

2. AWAS (Hotel & Short-Stay Booking Platform)
   - Hotel and student stay discovery platform designed to help travelers find
     budget-friendly accommodation near universities.
   - Tech: React.js, JavaScript, HTML5, CSS3.
   - Features: Curated student stays, responsive filtering, booking-focused flow.

3. AUTHENTICATION & SESSION MANAGEMENT SYSTEM (Backend Security)
   - Backend security system implementing cookie-based sessions, salted password
     hashing, and server-side request validation.
   - Tech: Node.js, Express.js, MongoDB, Mongoose, Sessions, Cookies, bcrypt.

4. INTERACTIVE IMAGE GALLERY (Frontend UI)
   - Responsive JavaScript image gallery featuring lazy loading, smooth CSS
     transitions, and full keyboard navigation.
   - Tech: HTML5, CSS3, Vanilla JavaScript.

TRAINING & CERTIFICATIONS:
--------------------------------------------------------------------------------
• Data Structures and Algorithms in C++ – LPU (August 2025 – February 2026)
• Infosys Springboard Certification (April 2026)
• SQL and Relational Databases 101 – IBM Developer Skills Network
• Software Engineering Job Simulation – Accenture Forage (August 2025)
• Software Engineering Job Simulation – Deloitte Forage (September 2025)

ACHIEVEMENTS:
--------------------------------------------------------------------------------
• Nebula Hacks 2025: Participated in 24-hour national hackathon for rapid prototyping.
• Code Hunt – AdVITyA'25, IIT Ropar: Algorithmic coding challenge with Team Achievers.

LEADERSHIP & ACTIVITIES:
--------------------------------------------------------------------------------
• Vice President – Converse E-Plus (English Speaking Group)
  Organized public speaking sessions, workshops, and campus debates.
• Volunteer – Cyber Security Awareness Project, LPU
  Educated community members and children on phishing, privacy, and online safety.
================================================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Satyabrat_Pandey_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('✅ Satyabrat_Pandey_Resume downloaded!');
  }, 400);
}

/* ==========================================================================
   8. CONTACT FORM & COPY ACTIONS
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtns = document.querySelectorAll('.copy-channel-btn');

  // Copy buttons
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`📋 Copied: ${textToCopy}`);
        });
      }
    });
  });

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const subjectInput = document.getElementById('user-subject');
    const messageInput = document.getElementById('user-message');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add('invalid');
      document.getElementById('name-error').classList.add('visible');
      isValid = false;
    } else {
      nameInput.classList.remove('invalid');
      document.getElementById('name-error').classList.remove('visible');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('invalid');
      document.getElementById('email-error').classList.add('visible');
      isValid = false;
    } else {
      emailInput.classList.remove('invalid');
      document.getElementById('email-error').classList.remove('visible');
    }

    // Validate Subject
    if (!subjectInput.value) {
      subjectInput.classList.add('invalid');
      document.getElementById('subject-error').classList.add('visible');
      isValid = false;
    } else {
      subjectInput.classList.remove('invalid');
      document.getElementById('subject-error').classList.remove('visible');
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
      messageInput.classList.add('invalid');
      document.getElementById('message-error').classList.add('visible');
      isValid = false;
    } else {
      messageInput.classList.remove('invalid');
      document.getElementById('message-error').classList.remove('visible');
    }

    if (!isValid) return;

    // Direct email dispatcher using verified mailto with user payload
    const recipient = (typeof portfolioConfig !== 'undefined' && portfolioConfig.personal.email) || 'satyabrat.pandey.dev@gmail.com';
    const subjectLine = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value} - from ${nameInput.value.trim()}`);
    const bodyContent = encodeURIComponent(
      `Hello Satyabrat,\n\n${messageInput.value.trim()}\n\n---\nSender Name: ${nameInput.value.trim()}\nSender Email: ${emailInput.value.trim()}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subjectLine}&body=${bodyContent}`;

    showToast('✉️ Opening email client to transmit message...');

    setTimeout(() => {
      window.location.href = mailtoUrl;
      form.reset();
      showToast('✅ Draft message prepared in your mail app!');
    }, 400);
  });
}

/* ==========================================================================
   9. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, duration = 3000) {
  const hub = document.getElementById('toast-hub');
  if (!hub) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = message;
  hub.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'opacity 0.25s, transform 0.25s';
    setTimeout(() => toast.remove(), 250);
  }, duration);
}
