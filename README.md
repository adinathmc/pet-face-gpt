# 🐾 PetFaceGPT – Decode the Whisker Wisdom

A fun and interactive web application that uses AI to analyze pet expressions and provide hilarious interpretations of what your furry friends might be thinking!

## ✨ Features

- **🐶 Multi-pet Support**: Analyze dogs, cats, and rabbits
- **🤖 AI-Powered Analysis**: Uses FaceAPI.js for emotion detection
- **📁 Easy Photo Upload**: Simple file upload interface
- **🎭 Emotion Detection**: Detects 7 different emotions (happy, sad, angry, surprised, fearful, disgusted, neutral)
- **😄 Hilarious Responses**: Custom, pet-specific interpretations for each emotion
- **🎨 Beautiful UI**: Clean, modern interface with playful design

## 🚀 How to Use

1. **Select your pet type** from the dropdown (🐶 Dog, 🐱 Cat, or 🐰 Rabbit)
2. **Upload a photo** of your pet using the file input
3. **Wait for the preview** to appear
4. **Click "🔍 Analyze Expression"** to get the AI interpretation
5. **Enjoy the hilarious results!** 🎉

## 🛠️ Technical Details

### Built With
- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity and logic
- **FaceAPI.js** - AI-powered face and emotion detection
- **TensorFlow.js** - Machine learning models

### AI Models
The app uses pre-trained models for:
- **Face Detection**: TinyFaceDetector for fast face detection
- **Emotion Recognition**: FaceExpressionNet for emotion analysis

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 📁 Project Structure

```
PetFaceGPT/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript logic
├── models/             # AI model files
│   ├── face_expression_model-shard1
│   ├── face_expression_model-weights_manifest.json
│   ├── tiny_face_detector_model-shard1
│   └── tiny_face_detector_model-weights_manifest.json
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎯 Emotion Interpretations

### 🐶 Dogs
- **Happy**: "Tail wagging in my soul. Throw the ball already!"
- **Sad**: "No walk? No treats? Life is ruff."
- **Angry**: "Where's the mailman?!"
- **Surprised**: "Did someone say 'bacon'?"
- **Fearful**: "Thunder again? I'm under the couch."
- **Disgusted**: "You switched my kibble brand?!"
- **Neutral**: "Just existing. Thinking deep dog thoughts."

### 🐱 Cats
- **Happy**: "My plan to take over the house is working."
- **Sad**: "No sunbeam today. This is a tragedy."
- **Angry**: "Touch me again and lose a finger."
- **Surprised**: "A cucumber?! I wasn't ready!"
- **Fearful**: "I sensed the vacuum… I'm gone."
- **Disgusted**: "This food isn't tuna. Try again."
- **Neutral**: "I observe. I judge. I nap."

### 🐰 Rabbits
- **Happy**: "Time to zoom and binky!"
- **Sad**: "No carrots... again."
- **Angry**: "I thump in protest."
- **Surprised**: "Is that… lettuce?!"
- **Fearful**: "Predator alert! *freeze*"
- **Disgusted**: "You messed up my hay pile."
- **Neutral**: "Soft. Fluffy. Unbothered."

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Internet connection (for initial model loading)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/petfacegpt.git
   cd petfacegpt
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **FaceAPI.js** - For the amazing face detection and emotion recognition capabilities
- **TensorFlow.js** - For the machine learning models
- **All the pets** - For being adorable and providing endless entertainment

## 🐾 About

PetFaceGPT was created as a fun project to demonstrate AI capabilities in a humorous and engaging way. It's perfect for pet owners who want to add some laughter to their day!

---

**Made with ❤️ for pet lovers everywhere!** 🐾✨ 