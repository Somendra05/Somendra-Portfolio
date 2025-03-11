import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import YellowCab from '../assets/images/YellowCab.png';
import FlightDelay from '../assets/images/FlightDelay.png';
import Wine from '../assets/images/WineQuality.png';
import Character from '../assets/images/Character.png';
import Stocks from '../assets/images/StocksCluster.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Somendra05/Yellow-Cabs-NYC-EDA.git" target="_blank" rel="noreferrer"><img src={YellowCab} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Somendra05/Yellow-Cabs-NYC-EDA.git" target="_blank" rel="noreferrer"><h2>🚖 NYC Yellow Cab Data Analysis</h2></a>
                <p> Explored NYC Yellow Taxi trip data to extract key insights on trip patterns, demand trends, and fare optimization. Conducted deep-dive EDA with interactive visualizations to identify high-demand locations, rush hour trends, and fleet distribution strategies. </p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={FlightDelay} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>✈️ Flight Delay Analysis</h2></a>
                <p> Built an interactive flight delay dashboard using MySQL & Streamlit, analyzing US airline and airport delays. Users can filter by airline and airport to uncover delay patterns and worst-performing routes. </p> 
                <p> 🚀 Next: Developing a delay prediction system using historical data & weather insights with a Flask API for real-time predictions. </p>
            </div>
            <div className="project">
                <a href="https://github.com/Somendra05/Wine-Classification.git" target="_blank" rel="noreferrer"><img src={Wine} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Somendra05/Wine-Classification.git" target="_blank" rel="noreferrer"><h2>🍷 Wine Quality Classification</h2></a>
                <p> Built a KNN-based wine classification model to predict wine quality using physicochemical properties. This helps winemakers optimize quality control efficiently and cost-effectively. </p>
            </div>
            <div className="project">
                <a href="https://github.com/Somendra05/Stocks-Clustering.git" target="_blank" rel="noreferrer"><img src={Stocks} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Somendra05/Stocks-Clustering.git" target="_blank" rel="noreferrer"><h2>📈 Stocks Clustering Analysis</h2></a>
                <p> Applied K-Means & PCA to cluster stocks based on returns, volatility, and volume, revealing key investment patterns. This project helps optimize portfolios, identify sector trends, and improve risk management. </p>
            </div>
            <div className="project">
                <a href="https://github.com/Somendra05/Character-Prediction.git" target="_blank" rel="noreferrer"><img src={Character} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Somendra05/Character-Prediction.git" target="_blank" rel="noreferrer"><h2>🔠 Handwritten Character Recognition</h2></a>
                <p> Built a CNN-based model to recognize handwritten English alphabets (A-Z) with 97% accuracy using TensorFlow & Deep Learning. This project showcases the power of CNNs in feature extraction and text recognition, with potential for multilingual expansion. </p>
            </div>
        </div>
    </div>
    );
}

export default Project;