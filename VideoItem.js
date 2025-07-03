class VideoItem {
  constructor(video) {
    this.video = video;
  }

  render() {
    return `
      <li class="video-item">
        <h3>${this.video.title}</h3>
        <p>${this.video.description}</p>
      </li>
    `;
  }
}

export default VideoItem;