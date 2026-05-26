export function pauseOtherVideos(currentVideo: HTMLVideoElement) {
  document.querySelectorAll("video").forEach((video) => {
    if (video !== currentVideo) {
      video.pause();
    }
  });
}
