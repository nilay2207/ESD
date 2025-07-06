// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach((faqQuestion) => {
    faqQuestion.addEventListener('click', () => {
        faqQuestion.nextElementSibling.classList.toggle('active');
    });
});

// search

function searchContent() {
  const input = document.getElementById("searchInput").value.trim();
  const keyword = input.toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  if (keyword === "") return;

  const selectors = "h1, h2, h3, h4, h5, h6, p, li, span, div";
  const elements = document.querySelectorAll(selectors);
  let matchCount = 0;

  elements.forEach((el, index) => {
    const text = el.textContent || el.innerText;
    if (text.toLowerCase().includes(keyword)) {
      matchCount++;

      // Assign unique ID if missing
      if (!el.id) el.id = "match-auto-" + index;

      const li = document.createElement("li");
      li.innerHTML = `<a href="#${el.id}" style="color: black; text-decoration: none;">${text.slice(0, 60)}...</a>`;

      // Add click event to highlight after jump
      li.querySelector("a").addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.getElementById(el.id);

        // Restore original HTML first (to remove old highlights)
        target.innerHTML = text;

        // Highlight keyword
        const regex = new RegExp(`(${input})`, "gi");
        target.innerHTML = target.innerHTML.replace(regex, `<span class="highlight">$1</span>`);

        // Scroll to target
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });

      resultsContainer.appendChild(li);
    }
  });

  if (matchCount === 0) {
    resultsContainer.innerHTML = `<li style="color: red;">No results found</li>`;
  }
}

// Navbar Scroll Animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// FAQ Toggle with Animation
document.querySelectorAll('.faq-item h3').forEach((faqQuestion) => {
    faqQuestion.addEventListener('click', () => {
        const answer = faqQuestion.nextElementSibling;
        answer.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.opacity = 0;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = 1;
        }
    });
});

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Make images responsive
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
});

