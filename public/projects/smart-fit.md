# Smart Fit: Intelligent Workout Tracker

## Problem

While modern wearables excel at tracking cardio activities, they struggle with accurately classifying and counting weightlifting exercises. Athletes and fitness enthusiasts lack automated tools to track resistance training, forcing them to manually record workouts and potentially miss insights from their training data.

## Solution

I developed Smart Fit, a machine learning-based system that:

- Classifies various barbell exercises using sensor data from accelerometers and gyroscopes
- Implements a custom algorithm for accurate repetition counting
- Processes motion data in real-time to provide immediate feedback
- Applies feature engineering techniques including PCA, low-pass filtering, and frequency abstraction
- Identifies outliers and anomalies to improve model reliability

## Technologies

- **Core**: Python, TensorFlow/PyTorch
- **Data Processing**: NumPy, Pandas, SciPy
- **Machine Learning**: Scikit-learn
- **Visualization**: Matplotlib, Seaborn
- **Development**: Jupyter Notebook

## Outcome

The system achieves over 95% accuracy in exercise classification and rep counting across multiple barbell movements. Smart Fit eliminates the need for manual workout tracking, provides actionable insights on exercise form and performance patterns, and enables fitness enthusiasts to optimize their training through data-driven decision making.
