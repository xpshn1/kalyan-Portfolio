import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Kalyan</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Kalyan</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">Data Analyst & Business Analytics Professional</h2>
            <p className="text-lg mb-8 max-w-lg">
              Turning complex data into actionable business insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
              {/* Profile image */}
              <Image
                src="/images/WhatsApp Image 2025-03-13 at 17.23.26_f5d84e47.jpg"
                alt="Kalyan's Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Results-driven Business Analytics graduate (M.Sc.) skilled in Python, SQL, SAS, and Tableau, with hands-on experience 
              in predictive modeling, sentiment analysis, EDA, and data visualization.
            </p>
            <p className="text-lg mb-6">
              Adept at translating complex datasets into actionable insights using machine learning frameworks (Scikit-learn, TensorFlow) 
              and designing interactive dashboards for stakeholder decision-making.
            </p>
            <p className="text-lg mb-6">
              Proven ability to bridge technical analysis with business goals, delivering solutions for customer churn, 
              market trends, and operational efficiency.
            </p>
            <p className="text-lg">
              Seeking roles as a Data Analyst, Junior Data Scientist, or Business Analyst to leverage analytical rigor in big data environments.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Skills */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Data Analysis (ETL, Visualizations)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Predictive Modeling & Interpretation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  MySQL & Data Engineering
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Statistical Analysis & A/B Testing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Marketing Mix Models
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Time Series Analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Natural Language Processing
                </li>
              </ul>
            </div>
            
            {/* Programming & Languages */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Programming & Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  SQL
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Numpy & Pandas
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Matplotlib & Seaborn
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Scikit-learn
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Apache Spark
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Plotly
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  NLTK
                </li>
              </ul>
            </div>
            
            {/* Tools */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  SAS Enterprise
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Visual Studio Code
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  SAP
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  SSIS (Visual Studio)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Microsoft Visio
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Colab Notebooks
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Git & Tableau
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  AWS & Google Cloud Platform
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Suffolk University, Boston</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">August 2023 - December 2024</p>
              <p className="font-semibold mb-4">Master of Science in Business Analytics | GPA: 3.8/4</p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Coursework:</span> Database Management, Predictive Analytics, Prescriptive Analytics, 
                Data Visualisation, Business Intelligence, Machine Learning, Natural Language Processing.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">•</span>
                  Google Data Analytics
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">•</span>
                  SAS - Suffolk University Academic Specialization in Business Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                {/* 
                  To add your project image:
                  1. Add your image to the public/images/projects folder (e.g., public/images/projects/sentiment-analysis.jpg)
                  2. Uncomment the Image component below and comment out the placeholder div
                  3. Update the src to point to your image
                */}
                {/* 
                <Image
                  src="/images/projects/sentiment-analysis.jpg"
                  alt="Sentiment Analysis Project"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                */}
                <div className="text-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <h4 className="text-lg font-semibold">Sentiment Analysis</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sentiment Analysis on YouTube Comments</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A full-stack application to perform sentiment analysis on YouTube comments with real-time scoring and summarization.
                </p>
                <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Developed a full-stack application to perform sentiment analysis on YouTube comments</li>
                  <li>• Integrated YouTube API to fetch video metadata and comments</li>
                  <li>• Implemented DistilBERT for real-time sentiment scoring and GPT-3.5 for contextual summarization</li>
                  <li>• Built a Streamlit frontend with dynamic search and visualization</li>
                  <li>• Designed a Flask backend to orchestrate data flow</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Machine Learning</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Streamlit</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Flask</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">NLP</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/xpshn1/youtube-sentiment-analysis" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://your-demo-link.com" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="mailto:kalyanmolugooru@gmail.com" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white">
                {/* 
                  To add your project image:
                  1. Add your image to the public/images/projects folder (e.g., public/images/projects/covid-tracker.jpg)
                  2. Uncomment the Image component below and comment out the placeholder div
                  3. Update the src to point to your image
                */}
                {/* 
                <Image
                  src="/images/projects/covid-tracker.jpg"
                  alt="COVID-19 Vaccine Tracker"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                */}
                <div className="text-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h4 className="text-lg font-semibold">Vaccine Tracker</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Global Covid-19 Vaccine Tracker</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A dynamic Tableau dashboard to analyze complex global Covid-19 vaccination data with interactive visualizations.
                </p>
                <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Developed and deployed a dynamic Tableau dashboard for Covid-19 vaccination data</li>
                  <li>• Provided critical insights into immunization efforts through interactive maps and charts</li>
                  <li>• Conducted in-depth analysis revealing that 49% of the global population had received at least one dose</li>
                  <li>• Highlighted the significant milestone of 7 billion doses administered worldwide</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Tableau</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Data Analysis</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Data Visualization</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://public.tableau.com/app/profile/your-profile/viz/covid-19-vaccine-tracker" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.654.174V2.377H9.567v.58h2.087v2.087h.58V2.957h2.087v-.58H12.234V.174ZM5.28 5.28v1.16H4.117v.582H5.28V8.194h.582V7.022H7.022V6.44H5.862V5.28Z" />
                    </svg>
                    Tableau Public
                  </a>
                  <a href="https://github.com/xpshn1/covid-vaccine-analysis" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white">
                {/* 
                  To add your project image:
                  1. Add your image to the public/images/projects folder (e.g., public/images/projects/superstore-analysis.jpg)
                  2. Uncomment the Image component below and comment out the placeholder div
                  3. Update the src to point to your image
                */}
                {/* 
                <Image
                  src="/images/projects/superstore-analysis.jpg"
                  alt="Global Superstore Analysis"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                */}
                <div className="text-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h4 className="text-lg font-semibold">Retail Analytics</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Global Superstore Sales & Returns Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  End-to-end data analysis on retail dataset to diagnose inefficiencies and optimize sales performance.
                </p>
                <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Conducted analysis on a 50k+ record retail dataset to diagnose operational inefficiencies</li>
                  <li>• Engineered ETL pipelines to clean and preprocess data, resolving 80.5% missing values</li>
                  <li>• Built predictive models (Logistic Regression/Random Forest) achieving 89% accuracy</li>
                  <li>• Leveraged feature engineering to enhance model performance and interpretability</li>
                  <li>• Proposed strategies to reduce returns and improve profitability by 12%</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Predictive Analytics</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Scikit-learn</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">ETL</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/xpshn1/global-superstore-analysis" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="/pdfs/superstore-analysis.pdf" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 00-2-2z" />
                    </svg>
                    PDF Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <a href="mailto:kalyanmolugooru@gmail.com" className="flex items-center space-x-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>kalyanmolugooru@gmail.com</span>
            </a>
            <a href="https://github.com/xpshn1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kalyanmolugooru/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://tableau.public.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.654.174V2.377H9.567v.58h2.087v2.087h.58V2.957h2.087v-.58H12.234V.174ZM5.28 5.28v1.16H4.117v.582H5.28V8.194h.582V7.022H7.022V6.44H5.862V5.28Zm12.04 0v1.16h-1.162v.582h1.161V8.194h.581V7.022h1.162V6.44h-1.162V5.28Zm-18.04 5.278v2.203h2.087v.581H1.28v2.087h.581v-2.087h2.087v-.581H1.861v-2.203Zm5.278 1.162v1.16H3.396v.582h1.162v1.161h.581v-1.161H6.3v-.581H5.14v-1.161Zm12.04 0v1.16h-1.162v.582h1.161v1.161h.581v-1.161h1.162v-.581h-1.162v-1.161Zm-6.02 1.162v2.203h2.087v.58h-2.087v2.087h.58v-2.087h2.087v-.58h-2.087v-2.203Zm-6.02 4.116v1.162H1.397v.58h1.161v1.162h.581v-1.161H4.3v-.581H3.139v-1.162Zm12.04 0v1.162h-1.162v.58h1.161v1.162h.581v-1.161h1.162v-.581h-1.162v-1.162Zm-6.02 1.162v2.203h2.087v.58h-2.087v2.087h.58v-2.087h2.087v-.58h-2.087v-2.203Z" />
              </svg>
              <span>Tableau Public</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Kalyan. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/xpshn1" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kalyanmolugooru/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://tableau.public.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.654.174V2.377H9.567v.58h2.087v2.087h.58V2.957h2.087v-.58H12.234V.174ZM5.28 5.28v1.16H4.117v.582H5.28V8.194h.582V7.022H7.022V6.44H5.862V5.28Zm12.04 0v1.16h-1.162v.582h1.161V8.194h.581V7.022h1.162V6.44h-1.162V5.28Zm-18.04 5.278v2.203h2.087v.581H1.28v2.087h.581v-2.087h2.087v-.581H1.861v-2.203Zm5.278 1.162v1.16H3.396v.582h1.162v1.161h.581v-1.161H6.3v-.581H5.14v-1.161Zm12.04 0v1.16h-1.162v.582h1.161v1.161h.581v-1.161h1.162v-.581h-1.162v-1.161Zm-6.02 1.162v2.203h2.087v.58h-2.087v2.087h.58v-2.087h2.087v-.58h-2.087v-2.203Zm-6.02 4.116v1.162H1.397v.58h1.161v1.162h.581v-1.161H4.3v-.581H3.139v-1.162Zm12.04 0v1.162h-1.162v.58h1.161v1.162h.581v-1.161h1.162v-.581h-1.162v-1.162Zm-6.02 1.162v2.203h2.087v.58h-2.087v2.087h.58v-2.087h2.087v-.58h-2.087v-2.203Z" />
                </svg>
                <span>Tableau Public</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
