import VideoItem from './VideoItem.js';

class VideoList {
  constructor(videos) {
    this.videos = videos;
  }

  render() {
    const videoHtml = this.videos.map(video => {
      const videoItem = new VideoItem(video);
      return videoItem.render();
    }).join('');
    return `
      <ul class="video-list">
        ${videoHtml}
      </ul>
    `;
  }
}

export default VideoList;