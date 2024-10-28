document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.content-section');
    const content = document.querySelector('.content');
    let currentSection = null;

    // Hide all sections initially
    sections.forEach(section => section.style.display = 'none');

    // Add click handlers to navigation links
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);

            // Remove active class from all links and sections
            document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            // If clicking the same section that's currently open
            if (currentSection === targetSection && content.classList.contains('visible')) {
                // Hide content
                content.classList.remove('visible');
                this.classList.remove('active');
                currentSection = null;
            } else {
                // Show new section
                this.classList.add('active');
                targetSection.style.display = 'block';
                targetSection.classList.add('active');
                content.classList.add('visible');
                currentSection = targetSection;
            }
        });
    });

    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    let currentIndex = 0;

    // Set initial position
    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateButtons();
    };

    // Update button states
    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    };

    // Next button click
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    // Previous button click
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    // Initialize carousel
    updateSlidePosition();
});
