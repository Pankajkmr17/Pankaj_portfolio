// Animate stats counting
const statNums = document.querySelectorAll('.stat-num');
const speed = 200;

statNums.forEach(statNum => {
  const target = +statNum.getAttribute('data-count');
  const count = +statNum.innerText;
  const increment = target / speed;

  function updateCount() {
    const count = +statNum.innerText;
    if (count < target) {
      statNum.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      statNum.innerText = target;
    }
  }

  // Start counting if the current count is less than the target
  if (count < target) {
    updateCount();
  } else {
    statNum.innerText = target; // Set to target if already at or above
  }
});

// Add scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

// Observe elements for scroll animations
document.querySelectorAll('.tech-bars .bar-fill, .project-card').forEach(el => {
  observer.observe(el);
});

// Progress bar animation
document.querySelectorAll('.progress-bar').forEach(function(bar) {
  let percent = bar.style.getPropertyValue('--p');
  setTimeout(() => {
    bar.style.width = percent + '%';
  }, 320);
});

// Creative tooltip for tech cards
const tooltip = document.getElementById('tooltip');
document.querySelectorAll('.tech-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const text = card.getAttribute('data-tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';
    tooltip.style.left = (e.pageX + 14) + 'px';
    tooltip.style.top = (e.pageY - 22) + 'px';
  });
  card.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
  });
});

// Optional: Add "pulse" effect to skill when hover
document.querySelectorAll('.skill-row').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.boxShadow = '0 3px 18px 0 #bba5f3a1';
    row.style.background = 'linear-gradient(100deg,#f5edfa 68%,#e3ecfb)';
  });
  row.addEventListener('mouseleave', () => {
    row.style.boxShadow = '';
    row.style.background = '#f6f6fa';
  });
});


// new 
// script.js

// Animate stats counting
const statNums = document.querySelectorAll('.stat-num');
const speed = 200;

statNums.forEach(statNum => {
  const target = +statNum.getAttribute('data-count');
  const count = +statNum.innerText;
  const increment = target / speed;

  function updateCount() {
    const current = +statNum.innerText;
    if (current < target) {
      statNum.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 20);
    } else {
      statNum.innerText = target;
    }
  }

  if (count < target) {
    updateCount();
  } else {
    statNum.innerText = target;
  }
});

// Add scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.tech-bars .bar-fill, .project-card').forEach(el => {
  observer.observe(el);
});

// Progress bar animation
document.querySelectorAll('.progress-bar').forEach(function(bar) {
  let percent = bar.style.getPropertyValue('--p');
  if (percent) {
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 320);
  }
});

// Creative tooltip for tech cards
const tooltip = document.getElementById('tooltip');
document.querySelectorAll('.tech-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const text = card.getAttribute('data-tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';
    tooltip.style.left = (e.pageX + 14) + 'px';
    tooltip.style.top = (e.pageY - 22) + 'px';
  });
  card.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
  });
});

// Optional: Add "pulse" effect to skill when hover
document.querySelectorAll('.skill-row').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.boxShadow = '0 3px 18px 0 #bba5f3a1';
    row.style.background = 'linear-gradient(100deg,#f5edfa 68%,#e3ecfb)';
  });
  row.addEventListener('mouseleave', () => {
    row.style.boxShadow = '';
    row.style.background = '#f6f6fa';
  });
});


