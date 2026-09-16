import safeJob from "../images/services/crop_hero.png"
import scheme from "../images/services/scheme.webp"
import atm from "../images/services/atm.png"
import bill from "../images/services/bill.jpeg"
import neo from "../images/services/neo.jpeg"
import panCard from "../images/services/PanCard.gif"
import project1 from "../images/projects/project1.jpg"
import project2 from "../images/projects/project2.jpg"
import project3 from "../images/projects/project3.jpg"
import project4 from "../images/projects/project4.jpg"
import project5 from "../images/projects/project5.jpg"
import project6 from "../images/projects/project6.jpg"

const services = [
  {
    slug: "safe-jobs-connect",
    title: "Safe Jobs Connect",
    icon: "flaticon-rocket",
    shortDescription:
      "Local job opportunities tailored to user skills, with a job-matching tool, resume builder, and Saathi support for a smooth hiring experience.",
    headerImage: safeJob,
    factsImage: project1,
    subtitle: "Safe Jobs Connect",
    about:
      "Safe Jobs Connect helps workers discover verified job opportunities that match their skills and location. With a dedicated job-matching tool, resume builder, and hands-on Saathi support, it turns the hiring journey into a smooth and trustworthy experience.",
    facts: [
      "Local Opportunity Discovery",
      "Resume & Profile Builder",
      "Skill-Based Job Matching",
      "Saathi-Assisted Applications",
      "Trusted Employer Network",
      "Application Status Tracking",
    ],
    aboutTwo:
      "From preparing a strong profile to applying and getting hired, Safe Jobs Connect supports workers at every step. Employers gain access to a motivated local talent pool, while Saathi agents guide applicants and make the whole process more personal and reliable.",
    helps: [
      { icon: "flaticon-factory", label: "Job Seekers" },
      { icon: "flaticon-hospital", label: "Rural Workers" },
      { icon: "flaticon-tracking", label: "Migrant Workers" },
      { icon: "flaticon-investment", label: "Employers" },
      { icon: "flaticon-house", label: "Saathi Agents" },
      { icon: "flaticon-order", label: "Training Centers" },
    ],
    features: [
      "Job Matching Tool",
      "Resume Builder",
      "Saathi Support",
      "Application Tracking",
      "Verified Employers",
      "Local Opportunities",
      "Skill Assessment",
      "Career Guidance",
      "Community Network",
    ],
  },
  {
    slug: "social-welfare-schemes",
    title: "Social Welfare Schemes",
    icon: "flaticon-laptop",
    shortDescription:
      "Identify eligible government schemes, guide applications, and track status so benefits reach the right people efficiently.",
    headerImage: scheme,
    factsImage: project2,
    subtitle: "Social Welfare Schemes",
    about:
      "Social Welfare Schemes helps people discover government programs they are eligible for and apply with confidence. From pension and scholarships to livelihood schemes, the service simplifies every step so benefits reach the right people without confusion.",
    facts: [
      "Scheme Eligibility Check",
      "Document Guidance",
      "Application Assistance",
      "Status Tracking",
      "Renewal Support",
      "Benefit Awareness",
    ],
    aboutTwo:
      "Saathi agents walk applicants through the entire process — checking documents, filling forms, and following up until benefits are approved. This keeps government support accessible to even the most remote communities.",
    helps: [
      { icon: "flaticon-factory", label: "Farmers" },
      { icon: "flaticon-hospital", label: "Senior Citizens" },
      { icon: "flaticon-tracking", label: "Women" },
      { icon: "flaticon-investment", label: "Students" },
      { icon: "flaticon-house", label: "Daily Wage Workers" },
      { icon: "flaticon-order", label: "Saathi Agents" },
    ],
    features: [
      "Eligibility Finder",
      "Document Checklist",
      "Application Support",
      "Status Tracking",
      "Renewal Reminders",
      "Scheme Alerts",
      "Regional Languages",
      "Helpline Support",
      "Community Awareness",
    ],
  },
  {
    slug: "micro-atm-services",
    title: "Micro ATM Services",
    icon: "flaticon-money",
    shortDescription:
      "AEPS cash withdrawals, balance enquiries, and mini statements brought right to your doorstep through local Saathi agents.",
    headerImage: atm,
    factsImage: project3,
    subtitle: "Micro ATM Services",
    about:
      "Micro ATM Services brings essential banking to the doorstep of every community. Through Saathi agents using AEPS, users can withdraw cash, check balances, and print mini statements without travelling to a faraway bank.",
    facts: [
      "AEPS Withdrawals",
      "Balance Enquiry",
      "Mini Statements",
      "Cash Deposit Support",
      "Fingerprint Security",
      "Doorstep Access",
    ],
    aboutTwo:
      "Transactions are authenticated securely with Aadhaar and a fingerprint, so money stays safe even in the most remote areas. A trained Saathi agent at every center ensures help is never far away.",
    helps: [
      { icon: "flaticon-factory", label: "Rural Users" },
      { icon: "flaticon-hospital", label: "Senior Citizens" },
      { icon: "flaticon-tracking", label: "Farmers" },
      { icon: "flaticon-investment", label: "Daily Wage Workers" },
      { icon: "flaticon-house", label: "SME Owners" },
      { icon: "flaticon-order", label: "Saathi Agents" },
    ],
    features: [
      "AEPS Enabled",
      "Fingerprint Security",
      "Fast Withdrawals",
      "Balance Check",
      "Mini Statement",
      "Cash Management",
      "Local Centers",
      "Trained Agents",
      "Reliable Connectivity",
    ],
  },
  {
    slug: "pan-card-center",
    title: "PAN Card Center",
    icon: "flaticon-segmentation",
    shortDescription:
      "Easy PAN card applications and verifications made simple for rural and semi-urban communities at local centers.",
    headerImage: panCard,
    factsImage: project4,
    subtitle: "PAN Card Center",
    about:
      "PAN Card Center makes getting a PAN card effortless for rural and semi-urban residents. At local centers, Saathi agents handle applications, renewals, updations, and verifications end to end — no technical knowledge needed.",
    facts: [
      "PAN Applications",
      "Renewals & Updations",
      "Verification Support",
      "KYC Assistance",
      "Form Guidance",
      "Status Tracking",
    ],
    aboutTwo:
      "A PAN card opens the door to bank accounts, tax filing, and formal work. By offering guided support and fast processing at accessible centers, we make sure everyone can obtain this important identity document.",
    helps: [
      { icon: "flaticon-factory", label: "Job Seekers" },
      { icon: "flaticon-hospital", label: "Small Business Owners" },
      { icon: "flaticon-tracking", label: "Students" },
      { icon: "flaticon-investment", label: "Taxpayers" },
      { icon: "flaticon-house", label: "Rural Residents" },
      { icon: "flaticon-order", label: "First-time Applicants" },
    ],
    features: [
      "Guided Applications",
      "KYC Support",
      "Verification Help",
      "Status Updates",
      "Document Assistance",
      "Local Centers",
      "Affordable Service",
      "Secure Handling",
      "Fast Processing",
    ],
  },
  {
    slug: "travel-bill-payments",
    title: "Travel & Bill Payments",
    icon: "flaticon-analytics",
    shortDescription:
      "Ticket booking and travel assistance, plus electricity, mobile, DTH and more — all paid in one convenient place.",
    headerImage: bill,
    factsImage: project5,
    subtitle: "Travel & Bill Payments",
    about:
      "Travel & Bill Payments puts everyday tasks in one place. Book bus and train tickets, get travel help, and pay electricity, mobile, and DTH bills through a trusted local Saathi agent instead of standing in long queues.",
    facts: [
      "Ticket Booking",
      "Travel Assistance",
      "Electricity Bills",
      "Mobile Recharge",
      "DTH Payments",
      "One-Stop Payments",
    ],
    aboutTwo:
      "With a Saathi agent handling each transaction carefully, payments are quick, receipts are clear, and reminders help families stay on top of due dates throughout the year.",
    helps: [
      { icon: "flaticon-factory", label: "Daily Commuters" },
      { icon: "flaticon-hospital", label: "Migrant Workers" },
      { icon: "flaticon-tracking", label: "Households" },
      { icon: "flaticon-investment", label: "Small Businesses" },
      { icon: "flaticon-house", label: "Senior Citizens" },
      { icon: "flaticon-order", label: "Travelers" },
    ],
    features: [
      "Ticket Booking",
      "Travel Support",
      "Bill Payments",
      "Mobile Recharge",
      "DTH Payments",
      "Payment Reminders",
      "Multiple Operators",
      "Local Help",
      "Secure Transactions",
    ],
  },
  {
    slug: "neo-banking-remittance",
    title: "Neo Banking & Remittance",
    icon: "flaticon-settings",
    shortDescription:
      "Modern banking features for informal workers and secure cross-border remittances between India and Nepal.",
    headerImage: neo,
    factsImage: project6,
    subtitle: "Neo Banking & Remittance",
    about:
      "Neo Banking & Remittance builds a modern financial bridge for informal workers. Access digital savings, low-cost wallets, and secure cross-border transfers between India and Nepal — guided in person by a trusted Saathi agent.",
    facts: [
      "Digital Bank Accounts",
      "Low-Cost Transfers",
      "India-Nepal Remittance",
      "Secure Transactions",
      "Financial Literacy",
      "Doorstep Service",
    ],
    aboutTwo:
      "Families receive money fast and safely, while workers build a banking history that improves their access to credit and future growth. Saathi agents provide guidance in the local language at every step.",
    helps: [
      { icon: "flaticon-factory", label: "Informal Workers" },
      { icon: "flaticon-hospital", label: "Migrant Workers" },
      { icon: "flaticon-tracking", label: "Families" },
      { icon: "flaticon-investment", label: "Daily Wage Earners" },
      { icon: "flaticon-house", label: "New Bank Users" },
      { icon: "flaticon-order", label: "Saathi Agents" },
    ],
    features: [
      "Digital Accounts",
      "Instant Remittance",
      "Secure Transfers",
      "Wallet Services",
      "Transaction History",
      "Financial Guidance",
      "Currency Support",
      "Doorstep Service",
      "Community Trust",
    ],
  },
]

export default services