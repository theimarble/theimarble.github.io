function updatePageBasedOnDate() {
    const params = new URLSearchParams(window.location.search);
    const inputDate = params.get('date');

    if (inputDate) {
        // Update all internal links to include the date parameter
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.includes('http')) { // Avoid modifying external links
                if (!href.includes('?')) {
                    link.href = href + '?date=' + inputDate;
                } else {
                    link.href = href + '&date=' + inputDate;
                }
            }
        });

        // Change ads based on the date
        const date = new Date(inputDate);
        const leftAdLink = document.querySelector('#leftAd');
        const rightAdLink = document.querySelector('#rightAd');

        if (date >= new Date('2014-05-28') && date <= new Date('2014-06-19')) {
            if (leftAdLink) {
                leftAdLink.href = './blog.html';
                const leftAdImage = leftAdLink.querySelector('img');
                if (leftAdImage) {
                    leftAdImage.src = './assets/wwdc14 ad.jpg';
                }
            }
            if (rightAdLink) {
                rightAdLink.href = './site-information.html';
                const rightAdImage = rightAdLink.querySelector('img');
                if (rightAdImage) {
                    rightAdImage.src = './assets/cc site 11_1 ad.png';
                }
            }
        }
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updatePageBasedOnDate);