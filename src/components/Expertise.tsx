import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "Pandas",
    "Dask",
    "NumPy",
    "Seaborn",
    "Matplotlib",
    "Plotly",
    "Scikit-Learn",
    "TensorFlow",
    "PyTorch",
    "Flask",
    "Streamlit",
    "Selenium",
    "Playwright"
];

const labelsSecond = [
    "PowerBI",
    "Tableau",
    "Looker",
    "SQL",
    "MySQL/PostgreSQL",
    "Snowflake",
    "Redshift",
    "Airflow",
    "Apache"
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "FastAPI",
    "Hugging Face",
    "LlamaIndex/Llama",
    "Pinecone",
    "Qdrant"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Science & Machine Learning</h3>
                    <p>I specialize in developing data-driven solutions using advanced machine learning techniques, from predictive modeling to natural language processing (NLP). With hands-on experience in fraud detection, customer analytics, and sentiment analysis, I have built high-accuracy models that drive business decisions. My work spans classification, clustering, time-series forecasting, and AI-driven automation for real-world business challenges.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>BI & Data Engineering</h3>
                    <p>I have extensive experience in data visualization, database management, and dashboard development to transform raw data into actionable insights. I have built end-to-end BI solutions, including Power BI dashboards to track supply chain metrics post-merger and SQL-driven reporting frameworks for business performance analysis. My expertise also includes ETL pipelines, cloud-based data storage, and real-time analytics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Leveraging the latest Generative AI advancements, I build AI-powered applications that enhance decision-making and automate business processes. I have designed LLM-powered chatbots, AI-driven recommendation engines, and NLP-based analytics tools. My experience includes integrating LLMs like Llama-2 and OpenAI with structured business intelligence workflows for deeper insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;