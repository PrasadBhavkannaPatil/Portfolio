// ===== PROJECT DATA (Removed AI Chat Assistant) =====
const projectsData = [
  {
    title: "College Voting System",
    sub: "Secure digital elections",
    definition: "A blockchain-inspired voting platform for college elections, ensuring anonymity and tamper-proof results. Built with PHP, MySQL, and JavaScript. Features include real-time vote counting, voter authentication, and an admin dashboard for election management.",
    use: "Used during student council elections, reducing counting time from hours to seconds while ensuring complete transparency.",
    langs: ["PHP (40%)", "JavaScript (30%)", "HTML/CSS (20%)", "MySQL (10%)"],
    github: "https://github.com/PrasadBhavkannaPatil/voting-system"
  },
  {
    title: "E-Commerce Platform",
    sub: "Full-stack online store",
    definition: "Complete e-commerce solution with product catalog, shopping cart, payment integration (Stripe), and an admin dashboard for inventory management. Includes user authentication, order tracking, and email notifications.",
    use: "Designed for small businesses to sell products online with real-time order tracking and automated inventory updates.",
    langs: ["React (35%)", "Node.js (30%)", "MongoDB (20%)", "Stripe API (15%)"],
    github: "https://github.com/PrasadBhavkannaPatil/ecommerce-platform"
  },
  {
    title: "Task Manager App",
    sub: "Team productivity tool",
    definition: "Collaborative task management with real-time updates via WebSockets. Features include drag-and-drop boards, due dates, team roles, file attachments, and activity logs for complete project tracking.",
    use: "Ideal for agile teams to track sprint progress, assign tasks, and monitor individual workloads in real-time.",
    langs: ["JavaScript (40%)", "React (25%)", "Node.js (20%)", "Socket.io (15%)"],
    github: "https://github.com/PrasadBhavkannaPatil/task-manager"
  },
  {
    title: "PrepWise-Lite",
    sub: "Exam preparation platform",
    definition: "A lightweight exam preparation platform designed for students to practice mock tests, track progress, and analyze performance. Features include subject-wise tests, instant feedback, score analytics, and a user-friendly dashboard.",
    use: "Helps students prepare for competitive exams by providing timed practice sessions, detailed performance reports, and personalized improvement suggestions.",
    langs: ["Next.js (40%)", "React (25%)", "Tailwind CSS (20%)", "Node.js (15%)"],
    github: "https://github.com/PrasadBhavkannaPatil/prepwise-lite"
  }
];

// ===== MODAL ELEMENTS =====
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeModalBtn');

// ===== FUNCTION TO OPEN MODAL =====
function openModal(index) {
  const data = projectsData[index];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalSub.textContent = data.sub;

  // Build modal body content
  let html = `
    <p><strong>Definition:</strong> ${data.definition}</p>
    <p><strong>Use:</strong> ${data.use}</p>
    <div><strong>Languages used:</strong></div>
    <div id="modalLangTags">
  `;

  data.langs.forEach(lang => {
    html += `<span class="lang-tag">${lang}</span>`;
  });

  html += `
    </div>
    <a href="${data.github}" target="_blank" class="github-link">
      <i class="fab fa-github"></i> View on GitHub
    </a>
  `;

  modalBody.innerHTML = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== FUNCTION TO CLOSE MODAL =====
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== EVENT LISTENERS FOR PROJECT BUTTONS =====
document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const index = parseInt(this.dataset.project, 10);
    openModal(index);
  });
});

// ===== CLOSE MODAL EVENTS =====
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Form will submit normally to Formspree
    // Re-enable button after submission (in case of error)
    setTimeout(() => {
      submitBtn.textContent = 'Send Message →';
      submitBtn.disabled = false;
    }, 3000);
  });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

console.log('🚀 Prasad Patil Portfolio loaded successfully!');
console.log('📁 Projects available:', projectsData.length);
console.log('📋 Projects:', projectsData.map(p => p.title).join(', '));
