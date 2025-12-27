// ==================== WAIT FOR PAGE TO LOAD ====================
// This ensures all HTML elements exist before we try to interact with them
document.addEventListener('DOMContentLoaded', function() {
    


    // ==================== SMOOTH SCROLLING FOR NAVIGATION ====================
    // When you click "Frameworks", "Mentorship", or "Results" links,
    // the page smoothly scrolls to that section instead of jumping instantly
    
    // Find all links that start with "#" (like href="#frameworks")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        
        // Add a click event to each navigation link
        anchor.addEventListener('click', function (e) {
            
            // Prevent the default jump behavior
            e.preventDefault();
            
            // Get the target section (e.g., the #frameworks section)
            const target = document.querySelector(this.getAttribute('href'));
            
            // If the target section exists, smoothly scroll to it
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',  // Makes it smooth instead of instant
                    block: 'start'       // Aligns to the top of the section
                });
            }
        });
    });
    


    // ==================== SCROLL ANIMATIONS ====================
    // This makes framework cards and case studies fade in and slide up
    // as you scroll down the page (they start invisible and animate in)
    
    // Settings for when animations should trigger
    const observerOptions = {
        threshold: 0.1,                      // Trigger when 10% of element is visible
        rootMargin: '0px 0px -100px 0px'    // Start animation 100px before element enters view
    };

    // Create an observer that watches for elements entering the viewport
    const observer = new IntersectionObserver((entries) => {
        
        // Loop through each element being observed
        entries.forEach(entry => {
            
            // If the element is now visible on screen...
            if (entry.isIntersecting) {
                
                // Make it fully visible
                entry.target.style.opacity = '1';
                
                // Move it to its final position (removes the downward offset)
                entry.target.style.transform = 'translateY(0)';
            }
        });
        
    }, observerOptions);

    

    // ==================== APPLY ANIMATIONS TO ELEMENTS ====================
    // Find all framework cards and case study boxes
    const animatedElements = document.querySelectorAll('.framework-card, .case-study');
    
    // For each element, set its initial state (invisible and shifted down)
    animatedElements.forEach(el => {
        
        el.style.opacity = '0';                    // Start invisible
        el.style.transform = 'translateY(30px)';   // Start 30px lower than final position
        el.style.transition = 'all 0.8s ease';     // Animate over 0.8 seconds smoothly
        
        // Tell the observer to watch this element
        observer.observe(el);
    });



});
// ==================== END OF SCRIPT ====================