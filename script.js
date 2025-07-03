// Get elements
const videoList = document.querySelector('.video-list');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search-button');

// Add event listeners
searchForm.addEventListener('submit', handleSearch);
searchButton.addEventListener('click', handleSearch);

// Function to handle search
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Fetch data from API or database
    fetch(`https://example.com/api/videos?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        // Generate video list
        const videoHtml = data.map(video => {
          return `
            <li class="video-item">
              <h3>${video.title}</h3>
              <p>${video.description}</p>
            </li>
          `;
        }).join('');
        videoList.innerHTML = videoHtml;
        // Add fade-in animation
        videoList.classList.add('fade-in');
      })
      .catch(error => console.error(error));
  }
}

// Function to generate video list
function generateVideoList(videos) {
  const videoHtml = videos.map(video => {
    return `
      <li class="video-item">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
      </li>
    `;
  }).join('');
  videoList.innerHTML = videoHtml;
}

// Initialize video list
generateVideoList([
  { title: 'Video 1', description: 'This is video 1' },
  { title: 'Video 2', description: 'This is video 2' },
  { title: 'Video 3', description: 'This is video 3' }
]);