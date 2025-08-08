const resultBox = document.getElementById('result');
const analyzeBtn = document.getElementById('analyzeBtn');
const preview = document.getElementById('preview');
const petInput = document.getElementById('petPhoto');
const petType = document.getElementById('petType');

// Custom interpretations by pet type + emotion
const emotionResponses = {
  dog: {
    happy: "Tail wagging in my soul. Throw the ball already!",
    sad: "No walk? No treats? Life is ruff.",
    angry: "Where's the mailman?!",
    surprised: "Did someone say 'bacon'?",
    fearful: "Thunder again? I'm under the couch.",
    disgusted: "You switched my kibble brand?!",
    neutral: "Just existing. Thinking deep dog thoughts."
  },
  cat: {
    happy: "My plan to take over the house is working.",
    sad: "No sunbeam today. This is a tragedy.",
    angry: "Touch me again and lose a finger.",
    surprised: "A cucumber?! I wasn't ready!",
    fearful: "I sensed the vacuum… I'm gone.",
    disgusted: "This food isn't tuna. Try again.",
    neutral: "I observe. I judge. I nap."
  },
  rabbit: {
    happy: "Time to zoom and binky!",
    sad: "No carrots... again.",
    angry: "I thump in protest.",
    surprised: "Is that… lettuce?!",
    fearful: "Predator alert! *freeze*",
    disgusted: "You messed up my hay pile.",
    neutral: "Soft. Fluffy. Unbothered."
  }
};

// Wait for FaceAPI to be loaded
function waitForFaceAPI() {
  return new Promise((resolve, reject) => {
    if (typeof faceapi !== 'undefined' && faceapi.nets) {
      resolve();
      return;
    }
    
    // Check every 100ms for FaceAPI
    const checkInterval = setInterval(() => {
      if (typeof faceapi !== 'undefined' && faceapi.nets) {
        clearInterval(checkInterval);
        resolve();
      }
    }, 100);
    
    // Timeout after 15 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
      reject(new Error('FaceAPI failed to load within 15 seconds'));
    }, 15000);
  });
}

// Wait for everything to load
window.addEventListener('load', function() {
  // Start loading models after page is fully loaded
  setTimeout(() => {
    loadModels();
  }, 1000); // Wait 1 second to ensure everything is loaded
});

// Load Face API models
let modelsLoaded = false;

async function loadModels() {
  try {
    // Wait for FaceAPI to be available
    console.log('Waiting for FaceAPI library...');
    await waitForFaceAPI();
    console.log('FaceAPI library loaded!');
    console.log('FaceAPI object:', faceapi);
    console.log('FaceAPI nets:', faceapi.nets);
    
    console.log('Starting to load FaceAPI models...');
    
    // Try loading from CDN first, fallback to local models
    try {
      console.log('Attempting to load models from CDN...');
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('https://unpkg.com/face-api.js@0.22.2/weights'),
        faceapi.nets.faceExpressionNet.loadFromUri('https://unpkg.com/face-api.js@0.22.2/weights')
      ]);
      console.log('CDN models loaded successfully!');
    } catch (cdnError) {
      console.log('CDN models failed:', cdnError);
      console.log('Trying local models...');
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
        faceapi.nets.faceExpressionNet.loadFromUri('./models')
      ]);
      console.log('Local models loaded successfully!');
    }
    
    modelsLoaded = true;
    console.log('FaceAPI models loaded successfully.');
    resultBox.innerText = 'AI models loaded! Ready to analyze your pet. 🐾';
    
  } catch (error) {
    console.error('Error loading FaceAPI models:', error);
    resultBox.innerText = `Error loading AI models: ${error.message}. Please refresh the page and try again.`;
  }
}

petInput.addEventListener('change', function (event) {
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function () {
      preview.src = reader.result;
      preview.style.display = 'block';
      analyzeBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = 'none';
    resultBox.innerText = '';
    analyzeBtn.disabled = true;
  }
});

async function analyzePet() {
  try {
    if (!modelsLoaded) {
      resultBox.innerText = 'AI models are still loading... Please wait a moment and try again.';
      return;
    }

    resultBox.innerText = '🔍 Analyzing with AI...';
    
    console.log('Starting face detection...');
    console.log('Preview element:', preview);
    console.log('Preview src:', preview.src);
    
    // Wait a bit for the image to load
    if (!preview.complete) {
      await new Promise(resolve => {
        preview.onload = resolve;
        preview.onerror = resolve;
      });
    }
    
    const detections = await faceapi.detectSingleFace(preview, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
    
    console.log('Detection result:', detections);

    if (!detections) {
      resultBox.innerText = "Sorry! Couldn't detect a face. Maybe your pet turned into a loaf? Try a clearer photo of your pet's face.";
      return;
    }

    const expressions = detections.expressions;
    console.log('Expressions detected:', expressions);
    
    const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
    const topEmotion = sorted[0][0]; // e.g. "happy", "sad", etc.

    const pet = petType.value;
    const response = emotionResponses[pet][topEmotion] || "Emotion unknown, but probably majestic.";

    resultBox.innerHTML = `
      🧠 Detected Emotion: <strong>${topEmotion.toUpperCase()}</strong><br>
      🐾 Pet says: "${response}"
    `;
  } catch (error) {
    console.error('Error during analysis:', error);
    resultBox.innerText = `Oops! Something went wrong: ${error.message}. Please try again with a different photo.`;
  }
}
