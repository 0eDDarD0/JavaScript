const video = document.getElementById('video');

const constraints = {
  audio: true,
  video: {
    width: 200, height: 200
  }
};

// Access webcam
async function init() {
  try{
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  }catch(e){
    document.write(`navigator.getUserMedia error:${e.toString()}`);
  }
}

// Success
function handleSuccess(stream) {
    video.srcObject = stream;
}

init();