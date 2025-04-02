# Fuel Cell Performance Prediction Tool

## Problem

Proton Exchange Membrane Fuel Cell (PEMFC) performance optimization requires extensive testing and expertise to understand how physical parameters affect critical metrics like pressure drop and stack temperature. This process is time-consuming and resource-intensive.

## Solution

I designed and implemented a web application that predicts PEMFC performance metrics based on physical parameters by:

- Developing custom neural network models for pressure drop and stack temperature prediction
- Creating an intuitive user interface with responsive design and validation
- Implementing dynamic 2D/3D visualizations to explore parameter relationships
- Building a light/dark mode interface for improved user experience

## Technologies

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5, Plotly.js
- **Backend**: Python, Flask
- **Machine Learning**: PyTorch neural networks
- **Data Processing**: NumPy, scikit-learn

## Outcome

The application reduces the need for physical prototyping by accurately predicting performance metrics with mean absolute errors below 11 Pa for pressure drop and 0.8°C for stack temperature. This tool enables researchers and engineers to quickly evaluate design alternatives and optimize fuel cell configurations without expensive experimental setups.
