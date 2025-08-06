
// Animate stats counting

const statNums = document.querySelectorAll('.stat-num');
const speed = 200;

const statObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNum = entry.target;
      const target = +statNum.getAttribute('data-count');
      const increment = target / speed;

      function updateCount() {
        const current = +statNum.innerText;
        if (current < target) {
          statNum.innerText = Math.ceil(current + increment);
          requestAnimationFrame(updateCount, 20);
        } else {
          statNum.innerText = target;
        }
      }

      updateCount();
      observer.unobserve(statNum); // only run once
    }
  });
}, { threshold: 0.6 });

statNums.forEach(statNum => {
  statObserver.observe(statNum);
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
  if (percent) {
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 320);
  }
});


const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.tech-card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (window.innerWidth < 768) {
      tooltip.textContent = card.getAttribute('data-tooltip');
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = e.pageY + 'px';
      tooltip.style.display = 'block';
      setTimeout(() => tooltip.style.display = 'none', 1500);
    }
  });



  let tooltipTimeout;
  card.addEventListener('mousemove', function (e) {
    if (window.innerWidth >= 768) {
      clearTimeout(tooltipTimeout);
      tooltipTimeout = setTimeout(() => {
        tooltip.textContent = card.getAttribute('data-tooltip');
        tooltip.style.left = (e.pageX + 14) + 'px';
        tooltip.style.top = (e.pageY - 22) + 'px';
        tooltip.style.display = 'block';
      }, 10);
    }
  });

  card.addEventListener('mouseleave', function () {
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


// corsur//


function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (!cursor || !cursorDot || !window.matchMedia('(pointer: fine)').matches) {
        cursor?.remove();
        cursorDot?.remove();
        return;
    }

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let cursorX = 0, cursorY = 0;
    let scale = 1;

    const updateCursor = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    const animate = () => {
        // Smooth slow movement for main circle (60% delay)
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        // Slightly faster movement for dot (80% delay)
        dotX += (mouseX - dotX) * 0.4;
        dotY += (mouseY - dotY) * 0.4;
        
        // Apply positions
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        
        requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', updateCursor);
    
    // Click effects
    document.addEventListener('mousedown', () => {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursorDot.style.transform = 'scale(1.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.width = '32px';
        cursor.style.height = '32px';
        cursorDot.style.transform = 'scale(1)';
    });

    // Start animation
    animate();
}

document.addEventListener('DOMContentLoaded', initCustomCursor);