# Instru-Net: Instrument Classification System

## Problem

Accurate identification of musical instruments in audio recordings presents challenges for music analysis, cataloging, and production. Manual classification is time-consuming and requires expert knowledge, limiting scalability and efficiency in audio processing workflows.

## Solution

I developed Instru-Net, a deep learning framework that automatically classifies instruments in audio files by:

- Implementing a custom CNN-based neural network architecture
- Integrating Google's YAMNet for enhanced acoustic event detection
- Creating robust audio preprocessing and feature extraction pipelines
- Applying data augmentation techniques to improve model generalization

## Technologies

- **Core**: Python, PyTorch, TorchAudio
- **Audio Processing**: Librosa, FFmpeg
- **Machine Learning**: YAMNet, NumPy, scikit-learn
- **Visualization**: Matplotlib, Seaborn

## Outcome

The system achieves over 90% accuracy in multi-label instrument classification across diverse audio samples. Instru-Net successfully processes complex audio files with overlapping instruments and varying acoustic conditions, providing a reliable tool for music analysis, production, and research applications.
