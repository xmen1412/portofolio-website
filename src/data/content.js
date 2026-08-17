export const site = {
  greeting: 'Hello, I\'m',
  name: 'Muhammad Akbar',
  badges: [
    { label: 'Data Alchemist', type: 'role' },
    { label: 'Growth-driven guy', type: 'personality' },
    { label: 'Transforming Complexity into Clarity', type: 'personality' },
  ],
  tagline:
    'Turning raw data into reliable pipelines, warehouses, or decisions.',
  bio:
    'Muhammad Akbar is a dedicated professional in the field of Data Engineering, driven by an unwavering passion for exploring and advancing technological innovations and scientific research in Information Technology and Computer Science. With a profound focus on Cloud Computing, Internet of Things, Data Science, and Information Technology Business, Muhammad actively spearheads various projects and initiatives in these domains.\n\nBeyond his professional pursuits, Muhammad finds solace in the pages of books, relishes the adventures of travel, and cherishes moments spent with friends and family. He also possesses a remarkable talent for playing musical instruments, which he cultivates with zeal whenever the opportunity arises. Muhammad\'s multifaceted interests and skills converge to shape him into a well-rounded individual with a distinctive outlook on life and technology.',
  avatar: 'assets/images/profile/profile.jpeg',
  logo: 'mrakbar.exe',
  cv: 'https://drive.google.com/file/d/1Gdtzo-2hXipcXYL3DqtACDolqW4ryfBb/view?usp=sharing',
}

export const experience = [
  {
    role: 'Data Engineer II',
    company: 'Astra International Tbk - Honda Sales Operation',
    companyLogo: 'assets/images/jobs/astra.png',
    period: 'Jan 2025 — Present',
    overview: 'Astra International Tbk - Honda Sales Operation is the chief operating arm for Honda motorcycle sales, logistics, and dealer network governance across Indonesia.',
    roles: [
      'Describe what you do here.',
      'Add another achievement.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'Hypefast',
    companyLogo: 'assets/images/jobs/hypefast.jpeg',
    period: 'Sep 2021 — Dec 2024',
    overview: 'Hypefast is a premier brand aggregator in Southeast Asia, scaling digital-native consumer e-commerce brands through technology, capital, and operational infrastructure.',
    roles: [
    ],
  },
  {
    role: 'Data Analyst',
    company: 'PT Spasi Indonesia',
    companyLogo: 'assets/images/jobs/spasi indonesia.png',
    period: 'Mar 2021 — Sep 2021',
    overview: 'PT Spasi Indonesia is an IT consulting and software development company providing data analytics and enterprise digital transformation solutions.',
    roles: [
    ],
  },
  {
    role: 'ICT Support Intern',
    company: 'Injourney Indonesia',
    companyLogo: 'assets/images/jobs/injourney.png',
    period: 'Jul 2019 — Sep 2019',
    overview: 'Injourney (PT Aviasi Pariwisata Indonesia) is the state-owned aviation and tourism holding company managing airport operations and tourism destinations in Indonesia.',
    roles: [
    ],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'Bash','Javascript'],
  },
  {
    category: 'Data Engineering',
    items: ['Apache Spark','Apache Airflow', 'Apache Kafka'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'BigQuery', 'MongoDB','SQL Server','ChromaDB'],
  },
  {
    category: 'Cloud',
    items: ['Microsoft Azure', 
      'Microsoft Fabric', 
      'Google Cloud Platform', 
      'Cloud SQL','Cloud Run',
      'Cloud Storage',
      'Azure Data Factory','Azure Data Lake Storage','Azure Databricks'],
  },
  {
    category: 'Dashboard',
    items: ['Power BI', 'Metabase', 'Looker'],
  },
  {
    category: 'AI and Machine Learning',
    items: ['LLM', 'Langchain', 'Deep Learning'],
  },
  {
    category: 'Version Control',
    items: ['Git', 'GitHub', 'Bitbucket'],
  },
  {
    category: 'Project Management',
    items: ['Jira', 'Trello'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Informatics Engineering',
    school: 'Politeknik Negeri Jakarta',
    schoolLogo: 'assets/images/education/pnj.png',
    period: '2016 — 2020',
    details: [
      'Major in Computer Science or related field.',
      'Relevant coursework: databases, algorithms, data structures.',
    ],
  },
]

export const projects = [
  {
    name: 'Marketplace Scraping System',
    description: 'Robust marketplace/e-commerce scraping system processing 500k+ product listings daily across TikTok, Shopee, Tokopedia, and Lazada.',
    tech: ['Python', 'Cloud Run', 'Docker', 'Apache Airflow', 'Cloud Function', 'BigQuery', 'Pub/Sub'],
    date: '2021 — 2024',
    context: 'Company (Hypefast)',
    link: '#',
    overview: 'Built and maintained a marketplace scraping system to collect product listing data at scale, supporting downstream analytics and pricing/competitor intelligence needs.',
    roles: [
      'Developed and maintained a robust Marketplaces/E-Commerce scraping system using Python, Cloud Run, and Docker.',
      'Increased data collection efficiency by 75%, now processing over 500k product listings daily across TikTok, Shopee, Tokopedia, and Lazada.',
    ],
  },
  {
    name: 'Batching Data Pipelines',
    description: 'End-to-end ETL pipelines automating data ingestion, staging, and presentation for internal and external stakeholders.',
    tech: ['Apache Airflow', 'Postgres', 'BigQuery', 'API'],
    date: '2021 — 2024',
    context: 'Company (Hypefast)',
    link: '#',
    overview: 'Designed a robust, scalable, and highly available batch pipeline architecture to remove manual data-pulling work from business teams and improve fault tolerance for historical data processing.',
    roles: [
      'Created end-to-end data pipelines (ETL) automating data ingestion, staging, and presentation for internal and external stakeholders.',
      'Integrated backfill capabilities for historical data processing and fault tolerance with exponential backoff for improved reliability.',
      'Reduced business team effort on manual data pulling from source of truth.',
    ],
  },
  {
    name: 'Streaming Data Pipeline',
    description: 'Real-time streaming pipeline from marketplace/warehouse API webhooks, processing 100+ events per second.',
    tech: ['Docker', 'Cloud Run', 'Pub/Sub', 'Debezium'],
    date: '2021 — 2024',
    context: 'Company (Hypefast)',
    link: '#',
    overview: 'Built a real-time streaming pipeline with OLTP/OLAP integration to reduce market change response time from hours to minutes and catch schema issues early.',
    roles: [
      'Built a real-time streaming pipeline from Marketplaces/Warehouse API webhooks using Docker, Cloud Run, and Pub/Sub.',
      'Added logging, monitoring, and error notification for schema changes, reducing trace-back issues by 50%.',
      'Reduced market change response time from hours to minutes, processing 100+ events per second for each brand\'s order transactions.',
      'Built an OLTP & OLAP integration with Datastream/Debezium.',
    ],
  },
  {
    name: 'Data Migration to Cloud',
    description: 'Migration of internal department data from Excel/Google Sheets to SQL databases and BigQuery.',
    tech: ['Apache Airflow', 'PostgreSQL', 'BigQuery'],
    date: '2021 — 2024',
    context: 'Company (Hypefast)',
    link: '#',
    overview: 'Facilitated migration of scattered spreadsheet-based data from finance and retail operations teams into governed SQL/BigQuery data stores with automated batch scheduling.',
    roles: [
      'Facilitated the migration of internal department data from Excel sheets and Google Sheets to SQL databases and BigQuery.',
      'Successfully migrated over 20 Google Sheets containing historical data for finance and retail operations teams.',
      'Implemented Apache Airflow for batch scheduling of data transfers, ensuring regular and automated updates.',
    ],
  },
  {
    name: 'Marketplace Advertising AI Pipeline',
    description: 'Large-scale personalized product recommendation and messaging system across marketplaces.',
    tech: ['Apache Airflow', 'PostgreSQL', 'BigQuery', 'Docker', 'Cloud Run', 'Metabase'],
    date: '2021 — 2024',
    context: 'Company (Hypefast)',
    link: '#',
    overview: 'Built data pipelines and a messaging system to power AI-driven product recommendations for buyers across Tokopedia, TikTok, Lazada, and Shopee.',
    roles: [
      'Implemented a large-scale messaging system processing and sending over 700 personalized product recommendations to potential buyers across marketplaces.',
      'Built data pipelines for marketplace advertising AI across Tokopedia, TikTok, Lazada, and Shopee.',
      'Achieved a 20% open rate and 30% conversion rate (CVR) for recommendation messages, generating an all-time 2 billion Rupiah average revenue (AOV).',
      'Built an Advertising AI Dashboard.',
    ],
  },
  {
    name: 'Maritime News Scraping & NER',
    description: 'Crawling and NLP-based analysis of vessel-related news from over 150 Indonesian news websites.',
    tech: ['Selenium', 'Python'],
    date: '2021',
    context: 'Company (PT Spasi Indonesia)',
    link: '#',
    overview: 'Built a scraping system covering maritime-related news across Indonesian outlets, paired with a Named-Entity Recognition model to analyze traffic-related events.',
    roles: [
      'Conducted crawling and scraping of vessel-related articles from over 150 Indonesian news websites.',
      'Provided extensive coverage and analysis of maritime-related news, enhancing industry insights.',
      'Built a Named-Entity Recognition (NER) model to predict text analysis for recent traffic-related events.',
    ],
  },
  {
    name: 'Port Traffic Data Collection',
    description: 'Crawling and scraping of port traffic data from 141+ ports across Indonesia.',
    tech: ['Selenium', 'Python'],
    date: '2021',
    context: 'Company (PT Spasi Indonesia)',
    link: '#',
    overview: 'Collected port traffic data at national scale to support analysis of Indonesia\'s maritime transportation network and its economic impact.',
    roles: [
      'Implemented crawling and scraping of port traffic data from 141+ ports across Indonesia.',
      'Enabled thorough understanding of the country\'s maritime transportation network and its economic impact.',
    ],
  },
  {
    name: 'Maritime Weather Data Aggregation',
    description: 'Scraping systems aggregating weather data from Windy.com and BMKG for maritime operations and safety.',
    tech: ['Postgres', 'Python'],
    date: '2021',
    context: 'Company (PT Spasi Indonesia)',
    link: '#',
    overview: 'Developed scraping systems to provide accurate, up-to-date weather conditions in Indonesia\'s waters, supporting safer maritime operations.',
    roles: [
      'Developed scraping systems for weather data from Windy.com and BMKG (Indonesia\'s Meteorology, Climatology, and Geophysical Agency).',
      'Provided accurate and up-to-date information on weather conditions in Indonesia\'s waters, crucial for maritime operations and safety.',
    ],
  },
  {
    name: 'Maritime Data Visualization Dashboard',
    description: 'Analytical dashboard for predictive and analytical insights on vessel maritime activities.',
    tech: ['JavaScript', 'HTML', 'Python'],
    date: '2021',
    context: 'Company (PT Spasi Indonesia)',
    link: '#',
    overview: 'Developed a dashboard giving stakeholders easy access to predictive and analytical insights on vessel maritime data, trends, and patterns, supporting better decision-making.',
    roles: [
      'Developed an analytical dashboard for data visualization, allowing stakeholders to easily access and interpret insights from the collected data.',
      'Applied predictive and analytical approaches to vessel maritime data, uncovering trends and patterns.',
      'Reported and presented insightful data to facilitate better decision-making in the maritime industry.',
    ],
  },
]

export const contact = {
  email: 'akbar382043@gmail.com',
  github: 'https://github.com/xmen1412',
  linkedin: 'https://www.linkedin.com/in/muhammad-akbar-b9a1bb126/',
  whatsapp: '+6289618487949',
}