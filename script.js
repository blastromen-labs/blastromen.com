document.addEventListener('DOMContentLoaded', function () {
    // Hide all sections initially except about
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById('about').style.display = 'block';

    // Set initial active state for 'about' link
    document.querySelector('a[href="#about"]').classList.add('active');

    // Add click handlers to navigation links
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show clicked section
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).style.display = 'block';
        });
    });
});
