// ─────────────────────────────────────────────────────────────
// Central content file. Sourced from Sama's CV and prior project
// notes. Replace PLACEHOLDER_* values — see README.md.
// Each project supports an optional `image` field (screenshot
// path under /public/projects/) — add real screenshots there and
// set the path to have them appear on the card and in the modal.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sama Ahmed',
  headline: 'Data Analyst | Data Science & AI Student',
  shortBio:
    'Data Analytics-focused Computer Science student (3rd year, Helwan University) with hands-on experience building BI dashboards in Excel, Power BI, and SQL. Incoming Generative AI Summer Intern at CIB (2026), seeking a Data Analyst internship to apply dashboarding, data modeling, and analytical skills to real business decisions.',
  location: 'Cairo, Egypt',
  email: 'sama.ahmedzzz.13@gmail.com',
  github: 'https://github.com/sama13212',
  linkedin: 'https://www.linkedin.com/in/sama-ahmed-mohamed',
  kafiil: 'sama_ahmed16',
  cvPath: '/Sama_Ahmed_CV.pdf',
}

export const education = [
  {
    school: 'Helwan University — Faculty of Computers and Artificial Intelligence',
    degree: 'Bachelor of Computer Science (3rd Year)',
    period: '2024 – 2028',
    detail: 'Data Analytics-focused Computer Science student',
  },
  {
    school: 'Instant',
    degree: 'Diploma in Data Science & Artificial Intelligence',
    period: '01/2026 – Present',
    detail: 'In Progress — Data Science, ML, Deep Learning, NLP, SQL, projects',
  },
]

export const stats = [
  { label: 'Bachelor of Computer Science', value: '2024–2028' },
  { label: 'Diploma, Data Science & AI', value: '01/2026–Present' },
  { label: 'Data Analysis & BI', value: 'Excel · Power BI · SQL · Python' },
  { label: 'ML & Big Data', value: 'Scikit-learn · Kafka · Spark' },
]

export const skillGroups = [
  {
    title: 'Data Analysis & Visualization',
    items: ['Excel', 'Power BI', 'Pandas', 'NumPy'],
  },
  {
    title: 'Programming & Databases',
    items: ['Python', 'SQL', 'SQLite'],
  },
  {
    title: 'BI Modeling & Dashboards',
    items: ['Power Query', 'Power Pivot', 'DAX', 'Pivot Tables', 'Pivot Charts', 'Slicers'],
  },
  {
    title: 'Machine Learning & AI',
    items: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn'],
  },
  {
    title: 'Statistics & Math',
    items: ['Probability', 'Statistics', 'Linear Algebra'],
  },
  {
    title: 'Big Data',
    items: ['Apache Kafka', 'Apache Spark', 'PySpark', 'Spark Structured Streaming', 'Parquet'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Jupyter Notebook', 'Google Colab', 'Git', 'GitHub'],
  },
  {
    title: 'Soft Skills',
    items: ['Problem Solving', 'Analytical Thinking', 'Communication & Teamwork', 'Time Management'],
  },
]

export const filters = ['All', 'Data Analysis', 'Big Data']

export const projects = [
  {
    id: 'coffee-shop-sales',
    title: 'Coffee Shop Sales Dashboard',
    category: 'Data Analysis',
    tags: ['Data Analysis'],
    date: '06/2026',
    description:
      'Cleaned and modeled 149,116 orders into a Star Schema, then built an interactive dashboard to analyze sales by category, time of day, month, and store location.',
    tools: ['Excel', 'Power Query', 'Power Pivot', 'DAX'],
    tasks: [
      'Cleaned and modeled 149,116 orders with Power Query and Power Pivot',
      'Applied a Star Schema data model for scalable analysis',
      'Built dynamic DAX measures: Total Sales, Average Price, Total Quantity, Total Orders',
      'Developed an interactive dashboard with category, month, day, time, and store-location filters',
    ],
    overview:
      'A star-schema Excel dashboard analyzing 149,116 coffee shop orders, built to support decisions by category, time of day, month, day of month, and store location.',
    approach:
      'Cleaned and modeled the transaction data with Power Query and Power Pivot using a Star Schema, then layered dynamic DAX measures for core KPIs before building the interactive dashboard with category, time, and location filters.',
    results: 'Total Sales $698,812 · Total Orders 149,116 · Total Quantity 214,470 · Average Price $4.69',
    highlight: '149,116 orders modeled',
    images: [`${import.meta.env.BASE_URL}/projects/coffee-shop-dashboard.png`],
    featured: false,
    github: "https://github.com/sama13212/coffee-shop-sales-dashboard.git", // PLACEHOLDER_GITHUB_URL
  },
  {
    id: 'online-retail-bigdata',
    title: 'Online Retail Big Data Pipeline',
    category: 'Big Data',
    tags: ['Big Data', 'Data Science'],
    description:
      'Built an end-to-end Big Data processing pipeline for an Online Retail dataset using Kafka and Spark Structured Streaming.',
    tools: ['Apache Kafka', 'Apache Spark', 'PySpark', 'Spark Structured Streaming', 'Python', 'Parquet'],
    tasks: [
      'Streaming ingestion with Kafka',
      'Real-time processing with Spark Structured Streaming',
      'Data cleaning & transformation',
      'Parquet storage',
      'Spark SQL analysis',
      'CSV export for dashboarding',
    ],
    pipeline: ['Dataset', 'Kafka', 'Spark Structured Streaming', 'Data Cleaning', 'Parquet', 'Analysis', 'CSV', 'Dashboard'],
    overview:
      'A university Big Data project that streams an online retail dataset through Kafka, processes it in real time with Spark Structured Streaming, and lands it as analysis-ready Parquet data.',
    approach:
      'Built the pipeline in stages — Kafka ingestion, Spark Structured Streaming transformations, Parquet storage, then Spark SQL analysis exported to CSV for a final dashboard layer.',
    results:
      '180,141 cleaned records · £3,561,184.18 total sales · £19.77 average transaction value · 2,454 unique customers · top country: United Kingdom · highest month: December · top product: "REGENCY CAKESTAND 3 TIER"',
    images: [`${import.meta.env.BASE_URL}/projects/online-retail-dashboard.png`],
    featured: true,
    github: 'https://github.com/sama13212/Online-Retail-Big-Data',
  },
  {
    id: 'call-center-dashboard',
    title: 'Call Center Performance Dashboard',
    category: 'Data Analysis',
    tags: ['Data Analysis'],
    date: '06/2026',
    description:
      'Cleaned and transformed 5,000 call center records, built a relational Data Model in Excel, and created dynamic dashboards to analyze agent performance, call trends, and customer satisfaction.',
    tools: ['Excel', 'Power Query', 'DAX'],
    tasks: [
      'Cleaned and transformed 5,000 records with Power Query',
      'Built a relational Data Model in Excel',
      'Created dynamic DAX measures and interactive dashboards',
      'Analyzed agent performance, call trends, and customer satisfaction',
      'Surfaced insights on peak call periods and resolution rates to support data-driven decisions',
    ],
    overview:
      'An interactive Excel dashboard analyzing 5,000 call center records across agent performance, call trends, and customer satisfaction, split into overview, agent, and time-analysis views.',
    approach:
      'Used Power Query to clean and transform the raw records, modeled them with a relational Data Model in Excel, then layered DAX measures and interactive filters across a multi-page dashboard (overview, per-agent breakdown, time analysis).',
    results:
      '5,000 total calls · 8 agents · 7.90 avg handling time · 3.40 avg satisfaction · 3,646 resolved vs. 1,354 unresolved · 4,054 answered vs. 946 unanswered',
    highlight: '5,000 calls analyzed',
    images: [`${import.meta.env.BASE_URL}/projects/call-center-home.png', '/projects/call-center-details.png', '/projects/call-center-time-analysis.png`],
    featured: false,
    github: "https://github.com/sama13212/Call-Center-Excel-Dashboard.git", // PLACEHOLDER_GITHUB_URL
  },
  {
    id: 'hr-attrition',
    title: 'HR Employee Attrition Analysis',
    category: 'Data Analysis',
    tags: ['Data Analysis', 'Data Science'],
    description:
      'Performed exploratory data analysis on a 5,000-employee HR dataset to identify the strongest patterns and factors associated with attrition.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    tasks: [
      'Data cleaning (0 missing values across 29 features)',
      'Correlation analysis between all numeric features and attrition',
      'Attrition-rate breakdown by burnout level and engagement level',
      'Visualization of the strongest wellbeing and work-experience drivers',
      'Business-oriented conclusions presented as a slide-style EDA report',
    ],
    overview:
      'An EDA project on a 5,000-employee HR dataset (29 features, 0 missing values, 17.9% overall attrition rate), aimed at surfacing which factors most associate with attrition.',
    approach:
      'Ran a Pearson correlation between every numeric feature and attrition, then drilled into the strongest associations — burnout and engagement — by comparing attrition rates across burnout and engagement levels, and packaged the findings as a slide-style report.',
    results:
      '17.9% overall attrition rate · strongest correlations: burnout_score +0.31, engagement_score −0.30, manager_support_score −0.24 · attrition rises from ~5% (low burnout) to ~45% (high burnout) · attrition ranges from 58.9% (low engagement) to 10.4% (high engagement)',
    images: [`${import.meta.env.BASE_URL}/projects/hr-attrition-overview.png', '/projects/hr-attrition-correlation.png', '/projects/hr-attrition-wellbeing.png`],
    featured: false,
    github: "https://github.com/sama13212/HR-Employee-Attrition-Analysis.git", // PLACEHOLDER_GITHUB_URL
  },
  {
    id: 'employee-performance-dashboard',
    title: 'Employee Performance Dashboard',
    category: 'Data Analysis',
    tags: ['Data Analysis'],
    description:
      'An interactive Excel dashboard analyzing 109 employees across departments — salary, satisfaction, performance, and overtime.',
    tools: ['Excel', 'Pivot Tables', 'Slicers'],
    tasks: [
      'Built department, gender, job role, and year filters with pivot-linked slicers',
      'Calculated average salary and performance per department',
      'Visualized average overtime by department',
      'Structured the workbook across Homepage, Overview, and Full Details pages',
    ],
    overview:
      'A multi-page Excel dashboard analyzing 109 employees, tracking headcount, average salary, satisfaction, and performance, broken down by department.',
    approach:
      'Modeled the employee data with pivot tables, built department-level breakdowns for salary, performance, and overtime, and connected them to slicers for department, gender, job role, and year.',
    results: '109 employees · avg salary $9,647.7 · avg satisfaction 3.1 · avg performance 3.76',
    highlight: '109 employees analyzed',
    images: [`${import.meta.env.BASE_URL}projects/employee-performance-dashboard.png`],
    featured: false,
    github: null, // PLACEHOLDER_GITHUB_URL
  },
  {
    id: 'ecommerce-sales-dashboard',
    title: 'E-Commerce Sales Dashboard',
    category: 'Data Analysis',
    tags: ['Data Analysis'],
    description:
      'An interactive sales analytics dashboard covering revenue, profit, returns, and delivery performance across regions, categories, and payment methods.',
    tools: ['Excel','power Query','Dax'], // tool inferred from the dashboard style — please confirm/correct
    tasks: [
      'Built KPI cards for sales, profit, quantity, discount, customers, order value, orders, and returns',
      'Broke down sales and profit by category and region',
      'Analyzed delivery performance and customer age distribution by region',
      'Added year, gender, payment method, category, region, and returned-order filters',
    ],
    overview:
      'A sales analytics dashboard tracking revenue, profit, orders, and returns, with breakdowns by category, region, payment method, and customer age.',
    approach:
      'Modeled sales, profit, and order data with KPI cards up top, then built category/region/payment-method breakdowns and delivery-performance visuals, all connected to year, gender, category, region, and payment filters.',
    results:
      'Total Sales $5,865,293.05 · Total Profit $970,019.41 · 34,500 orders · 7,903 customers · Avg Order Value $170.01 · 1,903 returned orders',
    highlight: '$5.87M in tracked sales',
    images: [`${import.meta.env.BASE_URL}projects/ecommerce-sales-dashboard.png`],
    featured: false,
    github: "https://github.com/sama13212/Sales-Dashboard-Excel.git", // PLACEHOLDER_GITHUB_URL
  },
  // {
  //   id: 'titanic-classification',
  //   title: 'Titanic Classification',
  //   category: 'Machine Learning',
  //   tags: ['Machine Learning', 'Data Science'],
  //   description: 'Built a machine learning classification project to predict passenger survival using the Titanic dataset.',
  //   tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  //   tasks: ['Data preprocessing', 'Feature analysis', 'Model training', 'Classification', 'Model evaluation'],
  //   overview: 'A classic ML classification project predicting Titanic passenger survival from structured passenger data.',
  //   approach:
  //     'Preprocessed and engineered features from the Titanic dataset, trained classification models, and evaluated their performance.',
  //   results: null,
  //   images: [],
  //   featured: false,
  //   github: null, // PLACEHOLDER_GITHUB_URL
  // },

  {
    id: 'restaurant-sales-analytics',

    title: 'Restaurant Sales Analytics',

    category: 'Data Analysis',

    tags: ['Data Analysis', 'Big Data', 'PySpark', 'Power BI'],

    description:
      'An end-to-end restaurant sales analytics project analyzing 1,000,000 orders across 6 branches in Egypt using PySpark, Spark SQL, Databricks, Delta Lake, and Power BI.',

    tools: [
      'Python',
      'Pandas',
      'PySpark',
      'Spark SQL',
      'Databricks',
      'Delta Lake',
      'Power BI'
    ],

    pipeline: [
      'Raw CSV',
      'Databricks',
      'PySpark',
      'Data Quality Validation',
      'Feature Engineering',
      'Spark SQL',
      'Delta Table',
      'Power BI'
    ],

    tasks: [
      'Data ingestion and schema handling',
      'Data quality validation',
      'Null and duplicate checks',
      'Feature engineering using PySpark',
      'Business analysis using Spark SQL',
      'Delta Lake data persistence',
      'Branch and category performance analysis',
      'Customer and order analysis',
      'Interactive Power BI dashboard development'
    ],

    overview:
      'An end-to-end restaurant sales analytics project analyzing 1,000,000 transactional orders across 6 branches in Egypt.',

    approach:
      'The project starts with raw restaurant transaction data and uses Databricks and PySpark for data ingestion, schema handling, data quality validation, and feature engineering. Spark SQL is then used to perform business-focused analysis, while the processed data is persisted using Delta Lake. The resulting insights are communicated through an interactive Power BI dashboard.',

    results:
      'Analyzed 1,000,000 orders across 6 branches, identified Cairo as the highest-performing branch by order volume, and found Grills to be the top-performing category by sales and order volume. The dataset contains 198,667 unique customers, an average customer rating of 3.70/5, and approximately 260.98M in total revenue.',

    images: [`${import.meta.env.BASE_URL}projects/resturant_dashboard.png','projects/restturant_cleaning .png`],

    featured: false,

    github:
      'https://github.com/sama13212/end-to-end-sales-analytics-pipeline'
  }


]

export const experience = [
  {
    org: 'CIB — Commercial International Bank',
    role: 'Generative AI Summer Internship',
    focus: 'Generative AI and AI applications in the banking sector',
    period: '07/2026 – 09/2026',
    description: 'Selected for the CIB Summer Internship Program.',
  },
  {
    org: 'Freelance',
    role: 'Freelance Data Analyst',
    focus: 'Excel',
    period: '05/2026',
    description:
      "Cleaned and prepared a client's movie industry dataset in Excel, resolving inconsistencies and formatting issues, analyzed it to identify top-performing movies and key trends, and delivered a summary report highlighting key findings.",
  },
  {
    org: 'NVIDIA Deep Learning Institute',
    role: 'Deep Learning & LLMs',
    focus: 'Deep learning model development and optimization · LLM application building with NVIDIA GPU tools',
    period: '12/2025 – 01/2026',
    description: 'Online',
  },
  {
    org: 'Instant',
    role: 'Diploma in Data Science & Artificial Intelligence',
    focus: 'Data Science, ML, Deep Learning, NLP, SQL, projects',
    period: '01/2026 – Present',
    description: 'In Progress',
  },
]

export const certifications = [
  { name: 'Diploma in Data Science & Artificial Intelligence', org: 'Instant', period: '01/2026 – Present', status: 'In Progress' },
  { name: 'Generative AI Summer Internship', org: 'CIB', period: '07/2026 – 09/2026', status: null },
  { name: 'Deep Learning & LLMs', org: 'NVIDIA Deep Learning Institute', period: '12/2025 – 01/2026', status: null },
  { name: 'Python, SQL & Predictive Modeling (scikit-learn)', org: 'DataCamp', period: '01/2026 – 03/2026', status: null },
  { name: 'Data Analysis With Excel', org: 'DataCamp', period: '02/2026 – 04/2026', status: null },
]

export const achievements = [
  'NASA Space Apps Challenge 2025 — participant',
  'Enactus — Member, HR Committee',
]

export const services = [
  {
    title: 'Python Data Analysis',
    description: 'Data cleaning, EDA, visualization, and insights.',
  },
  {
    title: 'Data Cleaning',
    description: 'Missing values, duplicates, incorrect data types, and preparation for analysis.',
  },
  {
    title: 'Data Visualization',
    description: 'Charts and visual storytelling using Matplotlib and Seaborn.',
  },
  {
    title: 'PowerPoint Data Report',
    description: 'Professional presentation containing key insights and charts from the analysis.',
  },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]
