// Main JavaScript file for WebNav Hub

document.addEventListener("DOMContentLoaded", function () {
  // Initialize navigation
  initializeNavigation();
  
  // Initialize theme toggle
  initializeThemeToggle();
  
  // Initialize search functionality
  initializeSearch();
  
  // Initialize loading overlay
  initializeLoadingOverlay();
  
  // Initialize category filtering
  initializeCategoryFilter();
  
  // Handle hash changes for navigation
  handleHashChange();
});

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      
      // Add active class to clicked link
      this.classList.add("active");
      
      // Get target section
      const targetId = this.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to target
        targetElement.scrollIntoView({ behavior: "smooth" });
        
        // Update URL hash
        const newUrl = window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "#" +
          targetId;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    });
  });
}

// Theme toggle functionality
function initializeThemeToggle() {
  // Create theme toggle button if it doesn't exist
  if (!document.querySelector('.theme-toggle')) {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark/light theme');
    document.body.appendChild(themeToggle);
  }
  
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

// Search functionality
function initializeSearch() {
  // Create search container if it doesn't exist
  if (!document.querySelector('.search-container')) {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.className = 'search-box';
    searchBox.placeholder = '搜索链接...';
    searchBox.setAttribute('aria-label', 'Search links');
    
    searchContainer.appendChild(searchBox);
    
    // Insert search container after nav
    const nav = document.querySelector('nav');
    nav.insertAdjacentElement('afterend', searchContainer);
  }
  
  const searchBox = document.querySelector('.search-box');
  const linkCards = document.querySelectorAll('.link-card');
  
  // Filter cards based on search input
  searchBox.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    linkCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      
      if (title.includes(searchTerm)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Show/hide category titles based on visible cards
    const categoryTitles = document.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
      const nextSection = title.nextElementSibling;
      const visibleCards = nextSection.querySelectorAll('.link-card:not([style*="display: none"])');
      
      if (visibleCards.length === 0) {
        title.style.display = 'none';
      } else {
        title.style.display = '';
      }
    });
  });
}

// Loading overlay functionality
function initializeLoadingOverlay() {
  // Create loading overlay if it doesn't exist
  if (!document.querySelector('.loading-overlay')) {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);
  }
  
  const loadingOverlay = document.querySelector('.loading-overlay');
  
  // Hide loading overlay when page is fully loaded
  window.addEventListener('load', function() {
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }, 500);
  });
}

// Category filtering functionality
function initializeCategoryFilter() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Get target category
      const targetId = this.getAttribute('href').split('#')[1];
      
      // Hide all categories
      const categories = document.querySelectorAll('.category-title');
      categories.forEach(category => {
        if (category.id === targetId) {
          category.style.display = '';
          category.nextElementSibling.style.display = '';
        } else {
          category.style.display = 'none';
          category.nextElementSibling.style.display = 'none';
        }
      });
      
      // If "全部" or no specific category is selected, show all
      if (targetId === '' || targetId === 'all') {
        categories.forEach(category => {
          category.style.display = '';
          category.nextElementSibling.style.display = '';
        });
      }
    });
  });
}

// Handle hash changes for navigation
function handleHashChange() {
  function handleHash() {
    const hash = window.location.hash;
    
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      
      if (targetElement) {
        // Smooth scroll to target
        targetElement.scrollIntoView({ behavior: "smooth" });
        
        // Update active nav link
        const activeLink = document.querySelector('nav a[href="' + hash + '"]');
        const navLinks = document.querySelectorAll("nav a");
        
        if (activeLink) {
          navLinks.forEach((l) => l.classList.remove("active"));
          activeLink.classList.add("active");
        }
      }
    }
  }
  
  // Listen for hash changes
  window.addEventListener("hashchange", handleHash);
  
  // Call on initial load
  handleHash();
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Analytics for link clicks (optional)
function trackLinkClick(linkName, category) {
  // This is a placeholder for analytics integration
  // You can replace this with your preferred analytics service
  console.log(`Link clicked: ${linkName} in category: ${category}`);
  
  // Example: Google Analytics integration
  // if (typeof gtag === 'function') {
  //   gtag('event', 'click', {
  //     'event_category': category,
  //     'event_label': linkName
  //   });
  // }
}

// Add click tracking to all link cards
document.addEventListener("DOMContentLoaded", function() {
  const linkCards = document.querySelectorAll('.link-card');
  
  linkCards.forEach(card => {
    card.addEventListener('click', function() {
      const linkName = this.querySelector('h3').textContent;
      const category = this.closest('section').previousElementSibling.textContent;
      trackLinkClick(linkName, category);
    });
  });
});