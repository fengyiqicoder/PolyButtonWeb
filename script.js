document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if current item is active
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Interactive Demo (Mockup Buttons)
    const mockupButtons = document.querySelectorAll('.pb-btn');
    const mockupInput = document.querySelector('.input-group input');
    
    // Simulate Max Bet of $400
    const maxBet = 400.00;

    mockupButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            mockupButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            
            // Calculate and set value
            const percentage = parseInt(btn.innerText.replace('%', ''));
            const calculatedValue = (maxBet * (percentage / 100)).toFixed(2);
            
            // Add a little flash animation to the input
            mockupInput.style.color = '#0393FC';
            mockupInput.value = calculatedValue;
            
            // Simulate Shares and Potential Return update based on a dummy odds like 50c
            const sharesElement = document.querySelector('.bet-summary div:nth-child(1) span');
            const returnElement = document.querySelector('.bet-summary div:nth-child(2) span');
            
            if (sharesElement && returnElement) {
                const shares = (calculatedValue / 0.50).toFixed(2);
                sharesElement.innerText = shares;
                returnElement.innerText = '$' + shares; // Assuming payout is $1 per share
            }
            
            setTimeout(() => {
                mockupInput.style.color = '#111827';
            }, 300);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});