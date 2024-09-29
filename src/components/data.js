const job_data = [
  {
    job_title: "Software Engineer",
    skills: [
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "System Design",
    ],
    resources: [
      {
        title: "Cracking the Coding Interview",
        link: "https://www.crackingthecodinginterview.com",
      },
      {
        title: "LeetCode Practice",
        link: "https://leetcode.com",
      },
      {
        title: "GeeksforGeeks - System Design",
        link: "https://www.geeksforgeeks.org/software-engineering-introduction-to-software-engineering/",
      },
    ],
    questions: [
      "Explain how a HashMap works.",
      "Write a function to reverse a linked list.",
      "How would you design a URL shortening service?",
      "What is the difference between stack and queue?",
      "Write a program to find the largest element in an array.",
      "What is a binary search tree and how do you implement it?",
      "Explain the difference between a thread and a process.",
      "What is the difference between an abstract class and an interface in Java?",
      "How does garbage collection work in Java?",
      "Design a scalable messaging queue system.",
    ],
  },
  {
    job_title: "Data Scientist",
    skills: ["Python", "R", "Machine Learning", "Data Analysis", "Statistics"],
    resources: [
      {
        title: "Coursera: Data Science Specialization",
        link: "https://www.coursera.org/specializations/jhu-data-science",
      },
      {
        title: "Kaggle: Machine Learning Competitions",
        link: "https://www.kaggle.com/competitions",
      },
      {
        title: "Towards Data Science",
        link: "https://towardsdatascience.com",
      },
    ],
    questions: [
      "Explain the difference between supervised and unsupervised learning.",
      "How do you handle missing data in a dataset?",
      "What is cross-validation and why is it used?",
      "Describe the bias-variance tradeoff in machine learning.",
      "Explain the concept of p-value in hypothesis testing.",
      "What is overfitting in machine learning and how can you prevent it?",
      "How do you evaluate the performance of a classification model?",
      "Explain what a confusion matrix is and how it is used.",
      "What are the assumptions of linear regression?",
      "What is principal component analysis (PCA) and how is it used in dimensionality reduction?",
    ],
  },
  {
    job_title: "Front-End Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"],
    resources: [
      {
        title: "MDN Web Docs",
        link: "https://developer.mozilla.org/en-US/",
      },
      {
        title: "Frontend Masters: React Courses",
        link: "https://frontendmasters.com/courses/react/",
      },
      {
        title: "CSS Tricks",
        link: "https://css-tricks.com/",
      },
    ],
    questions: [
      "What is the box model in CSS?",
      "Explain how flexbox works and give examples.",
      "How would you optimize the performance of a React application?",
      "What is event delegation in JavaScript?",
      "How do you handle asynchronous operations in JavaScript?",
      "What is the virtual DOM and how does it improve React performance?",
      "Explain the difference between block-level and inline-level elements in HTML.",
      "What are CSS preprocessors and why are they used?",
      "How do you handle cross-browser compatibility issues?",
      "Explain how to use hooks in React and give examples.",
    ],
  },
  {
    job_title: "Backend Developer",
    skills: ["Node.js", "Express.js", "SQL", "MongoDB", "REST APIs"],
    resources: [
      {
        title: "Node.js Documentation",
        link: "https://nodejs.org/en/docs/",
      },
      {
        title: "MongoDB University",
        link: "https://university.mongodb.com/",
      },
      {
        title: "RESTful Web Services",
        link: "https://restfulapi.net/",
      },
    ],
    questions: [
      "What is the difference between REST and GraphQL?",
      "Explain how authentication and authorization work in a web application.",
      "How do you handle errors in a Node.js application?",
      "What are middleware functions in Express.js?",
      "How does database indexing work and why is it important?",
      "Explain the concept of NoSQL databases and how MongoDB fits in.",
      "What are web sockets and how do they work?",
      "Describe how you would design a scalable REST API.",
      "Explain how caching can improve the performance of a backend system.",
      "How do you handle concurrency in a backend application?",
    ],
  },
  {
    job_title: "DevOps Engineer",
    skills: ["CI/CD", "Docker", "Kubernetes", "AWS", "Automation"],
    resources: [
      {
        title: "AWS Certified DevOps Engineer Path",
        link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
      },
      {
        title: "Docker Documentation",
        link: "https://docs.docker.com/",
      },
      {
        title: "Kubernetes Documentation",
        link: "https://kubernetes.io/docs/home/",
      },
    ],
    questions: [
      "What is the role of DevOps in software development?",
      "Explain the concept of continuous integration and continuous deployment (CI/CD).",
      "How does Docker improve application development and deployment?",
      "What is Kubernetes and how does it help in container orchestration?",
      "How do you monitor and log applications in a production environment?",
      "Explain how you would set up a high-availability infrastructure on AWS.",
      "What is Infrastructure as Code (IaC) and why is it important?",
      "How would you handle automated testing in a CI/CD pipeline?",
      "Explain the difference between horizontal and vertical scaling.",
      "How do you manage secrets and environment variables in a production system?",
    ],
  },
  {
    job_title: "Cloud Architect",
    skills: [
      "Cloud Computing",
      "AWS",
      "Azure",
      "Infrastructure Design",
      "Networking",
    ],
    resources: [
      {
        title: "AWS Certified Solutions Architect Path",
        link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      },
      {
        title: "Azure Solutions Architect Certification",
        link: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/",
      },
      {
        title: "Google Cloud Architect Training",
        link: "https://cloud.google.com/training/cloud-architect",
      },
    ],
    questions: [
      "What are the key components of cloud architecture?",
      "How would you design a multi-region architecture for high availability?",
      "Explain the difference between IaaS, PaaS, and SaaS.",
      "What are cloud-native applications, and why are they important?",
      "How do you secure a cloud infrastructure?",
      "Explain how you would migrate an on-premise application to the cloud.",
      "What is serverless computing and when should it be used?",
      "Describe how to implement disaster recovery in a cloud environment.",
      "How do you manage cost optimization in cloud infrastructure?",
      "Explain the difference between public, private, and hybrid clouds.",
    ],
  },
  {
    job_title: "Product Manager",
    skills: [
      "Product Roadmap",
      "Market Research",
      "Agile",
      "UX Design",
      "Business Strategy",
    ],
    resources: [
      {
        title: "Product Management: A Comprehensive Guide",
        link: "https://www.productplan.com/learn/product-management/",
      },
      {
        title: "Mind the Product",
        link: "https://www.mindtheproduct.com/",
      },
      {
        title: "Agile Product Management",
        link: "https://www.scrum.org/resources/what-agile-product-management",
      },
    ],
    questions: [
      "What are the main responsibilities of a product manager?",
      "How do you define and prioritize product features?",
      "Explain the process of creating a product roadmap.",
      "How do you measure the success of a product?",
      "What is the role of customer feedback in product development?",
      "Explain how you would perform market research for a new product.",
      "How do you work with cross-functional teams during product development?",
      "What are the key components of an MVP (Minimum Viable Product)?",
      "Describe the difference between Agile and Waterfall product development.",
      "How do you handle feature requests from customers?",
    ],
  },
  {
    job_title: "Cybersecurity Analyst",
    skills: [
      "Network Security",
      "Encryption",
      "Incident Response",
      "Penetration Testing",
      "Risk Management",
    ],
    resources: [
      {
        title: "Certified Information Systems Security Professional (CISSP)",
        link: "https://www.isc2.org/Certifications/CISSP",
      },
      {
        title: "OWASP Top Ten Security Risks",
        link: "https://owasp.org/www-project-top-ten/",
      },
      {
        title: "CompTIA Security+ Certification",
        link: "https://www.comptia.org/certifications/security",
      },
    ],
    questions: [
      "What is the CIA triad in cybersecurity?",
      "How do you prevent a DDoS attack?",
      "Explain the concept of encryption and how it is used in securing data.",
      "What is the difference between vulnerability assessment and penetration testing?",
      "How do you conduct a security audit?",
      "What is social engineering and how do you defend against it?",
      "Explain the process of incident response.",
      "What is a firewall and how does it protect a network?",
      "How do you manage user authentication and authorization?",
      "Describe a recent cybersecurity attack and how it could have been prevented.",
    ],
  },
  {
    job_title: "AI/ML Engineer",
    skills: ["Python", "TensorFlow", "Deep Learning", "NLP", "Computer Vision"],
    resources: [
      {
        title: "Stanford University: Machine Learning Course",
        link: "https://www.coursera.org/learn/machine-learning",
      },
      {
        title: "Deep Learning Specialization",
        link: "https://www.coursera.org/specializations/deep-learning",
      },
      {
        title: "FastAI Library",
        link: "https://www.fast.ai/",
      },
    ],
    questions: [
      "What is the difference between supervised, unsupervised, and reinforcement learning?",
      "Explain backpropagation in neural networks.",
      "How do you prevent overfitting in a deep learning model?",
      "What is the role of activation functions in neural networks?",
      "Explain how convolutional neural networks (CNNs) are used for image classification.",
      "What is natural language processing (NLP) and how is it used in AI?",
      "How do you handle imbalanced datasets in machine learning?",
      "What is transfer learning and when is it useful?",
      "Explain how recurrent neural networks (RNNs) work and where they are applied.",
      "How do you evaluate the performance of a machine learning model?",
    ],
  },
  {
    job_title: "Business Analyst",
    skills: [
      "Business Strategy",
      "Data Analysis",
      "Stakeholder Management",
      "Financial Modeling",
      "Requirements Gathering",
    ],
    resources: [
      {
        title: "Business Analysis Body of Knowledge (BABOK)",
        link: "https://www.iiba.org/business-analysis-body-of-knowledge/",
      },
      {
        title: "Udemy: Business Analysis Fundamentals",
        link: "https://www.udemy.com/course/business-analysis-fundamentals/",
      },
      {
        title: "Coursera: Business Analytics Specialization",
        link: "https://www.coursera.org/specializations/business-analytics",
      },
    ],
    questions: [
      "What are the key roles and responsibilities of a business analyst?",
      "How do you gather and document business requirements?",
      "What is a SWOT analysis and how is it used?",
      "How do you perform a cost-benefit analysis?",
      "Explain the importance of stakeholder management in business analysis.",
      "What are the key components of a business process model?",
      "How do you prioritize business requirements?",
      "Describe a time when you had to solve a complex business problem.",
      "What is the difference between agile and waterfall methodologies in business analysis?",
      "How do you present business insights to non-technical stakeholders?",
    ],
  },
  {
    job_title: "Marketing Manager",
    skills: [
      "Market Research",
      "Content Strategy",
      "SEO",
      "Social Media Management",
      "Branding",
    ],
    resources: [
      {
        title: "Google: Fundamentals of Digital Marketing",
        link: "https://learndigital.withgoogle.com/digitalunlocked/course/digital-marketing",
      },
      {
        title: "HubSpot Academy: Content Marketing",
        link: "https://academy.hubspot.com/courses/content-marketing",
      },
      {
        title: "Coursera: Marketing Analytics",
        link: "https://www.coursera.org/specializations/marketing-analytics",
      },
    ],
    questions: [
      "What are the 4 Ps of marketing?",
      "Explain the concept of market segmentation.",
      "How do you measure the effectiveness of a marketing campaign?",
      "What are the key components of a brand strategy?",
      "How do you conduct a competitor analysis?",
      "Explain the difference between inbound and outbound marketing.",
      "What is SEO and how does it impact digital marketing?",
      "Describe the role of social media in building brand awareness.",
      "How do you manage a marketing budget?",
      "What are the key metrics for tracking customer engagement?",
    ],
  },
  {
    job_title: "Human Resources Manager",
    skills: [
      "Recruitment",
      "Employee Relations",
      "Performance Management",
      "HR Policies",
      "Compensation & Benefits",
    ],
    resources: [
      {
        title: "Udemy: HR Management and Analytics",
        link: "https://www.udemy.com/course/human-resources-management-and-analytics/",
      },
      {
        title: "SHRM: HR Management Certifications",
        link: "https://www.shrm.org/certification/pages/default.aspx",
      },
      {
        title: "Coursera: Human Resource Management Specialization",
        link: "https://www.coursera.org/specializations/human-resource-management",
      },
    ],
    questions: [
      "What are the steps involved in the recruitment process?",
      "How do you handle conflict resolution between employees?",
      "Explain the concept of performance management and how it is implemented.",
      "What is the importance of diversity and inclusion in the workplace?",
      "How do you conduct a compensation analysis?",
      "What are the legal aspects of employee termination?",
      "How do you measure employee engagement?",
      "Explain the process of creating an employee development plan.",
      "What are the key components of an effective HR policy?",
      "How do you manage employee benefits and compensation packages?",
    ],
  },
  {
    job_title: "Sales Manager",
    skills: [
      "Sales Strategy",
      "Client Relationship Management",
      "Negotiation",
      "Lead Generation",
      "Sales Forecasting",
    ],
    resources: [
      {
        title: "Coursera: Sales Training for High Performing Teams",
        link: "https://www.coursera.org/specializations/sales-training",
      },
      {
        title: "HubSpot Academy: Sales Enablement",
        link: "https://academy.hubspot.com/courses/sales-enablement",
      },
      {
        title: "Udemy: Sales Skills & Negotiation Masterclass",
        link: "https://www.udemy.com/course/sales-skills-and-negotiation/",
      },
    ],
    questions: [
      "How do you develop an effective sales strategy?",
      "What are the key elements of successful negotiation?",
      "How do you generate and qualify leads?",
      "Explain the role of CRM software in managing sales.",
      "How do you handle objections during a sales pitch?",
      "Describe a time when you closed a difficult sale.",
      "What methods do you use for sales forecasting?",
      "How do you build long-term relationships with clients?",
      "What is the difference between B2B and B2C sales?",
      "How do you track and measure sales performance?",
    ],
  },
  {
    job_title: "Event Planner",
    skills: [
      "Event Management",
      "Budgeting",
      "Vendor Relations",
      "Logistics",
      "Marketing",
    ],
    resources: [
      {
        title: "Udemy: Event Planning and Management",
        link: "https://www.udemy.com/course/event-planning-management/",
      },
      {
        title: "Eventbrite: Event Marketing Guide",
        link: "https://www.eventbrite.com/blog/event-marketing-ds00/",
      },
      {
        title: "Coursera: The Fundamentals of Event Planning",
        link: "https://www.coursera.org/learn/event-planning",
      },
    ],
    questions: [
      "What are the steps to planning a successful event?",
      "How do you manage event budgets and expenses?",
      "What factors should you consider when selecting an event venue?",
      "How do you coordinate with vendors for event supplies?",
      "Explain how you would promote an event through social media.",
      "Describe how you handle unexpected challenges during an event.",
      "How do you manage event logistics like transportation and setup?",
      "What are the key components of a post-event evaluation?",
      "How do you ensure guest satisfaction at events?",
      "What are some eco-friendly practices in event planning?",
    ],
  },
];

export default job_data;
