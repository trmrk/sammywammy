// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', () => {
    // Get the audio element
    const audio = document.getElementById('mario-audio');
  
    // Add an event listener to wait for space bar press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'm') {
        // Toggle audio playback when space bar is pressed
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    });
  });