function hideElements() {
    // Hide the home page thumbnails
    let homePageSections = document.querySelectorAll('ytd-rich-grid-renderer, ytd-browse');
    homePageSections.forEach(section => {
      let isSubscriptions = section.querySelector('yt-formatted-string#title')?.textContent?.toLowerCase() === 'subscriptions';
      if (!isSubscriptions) {
        section.style.display = 'none';
      }
    });
    
    // Ensure search bar remains visible
  
    // Hide recommendations on the video watch page
    let related = document.querySelector('#related');
    if (related) {
      related.style.display = 'none';
    }
  }
  
  // Run the function when the page loads
  window.addEventListener('load', hideElements);
  
  // Observe for changes and run the function again if necessary
  let observer = new MutationObserver(hideElements);
  observer.observe(document.body, { childList: true, subtree: true });
  