const services = {
    "Aadhaar Enrolment / Update": "* Proof of Identity (POI):<br>  * PAN / Voter ID / Passport / Driving Licence<br>* Proof of Address (POA):<br>  * Ration Card / Electricity Bill / Bank Passbook<br>* Date of Birth Proof (DOB):<br>  * Birth Certificate / 10th Marksheet<br>* Mobile Number (OTP ke liye)",
    "PAN Card (New / Correction)": "* Aadhaar Card<br>* Identity Proof (Voter ID / Passport / DL)<br>* Address Proof<br>* Passport Size Photo<br>* Signature (scan)",
    "Voter ID (Apply / Update)": "* Aadhaar Card<br>* Address Proof<br>* Passport Size Photo<br>* Age Proof (10th Marksheet / Birth Certificate)",
    "Passport Application (PSK CSC)": "* Aadhaar Card<br>* PAN Card<br>* Birth Proof (10th Marksheet / Birth Certificate)<br>* Address Proof (Electricity Bill / Bank Passbook)<br>* Passport Size Photo",
    "Driving Licence (Apply / Renewal)": "* Aadhaar Card<br>* Address Proof<br>* Age Proof<br>* Old DL (Renewal ke liye)<br>* Passport Size Photo<br>* Medical Certificate (Form 1A – kuch cases me)",
    "Ration Card Services": "* Aadhaar Card (Family ke sabhi members ka)<br>* Address Proof<br>* Income Certificate<br>* Passport Size Photo<br>* Family Details",
    "Birth Certificate / Death Certificate": "* Hospital Slip / Proof<br>* Aadhaar Card<br>* Address Proof<br>* Parent/Relative Details",
    "Income Certificate": "* Aadhaar Card<br>* Address Proof<br>* Salary Slip / Self Declaration<br>* Passport Size Photo",
    "Caste Certificate": "* Aadhaar Card<br>* Address Proof<br>* Father’s Caste Certificate<br>* School Leaving Certificate<br>* Affidavit",
    "Domicile / Residence Certificate": "* Aadhaar Card<br>* Address Proof (Electricity Bill / Ration Card)<br>* School Certificate / Land Paper<br>* Passport Photo",
    "Marriage Certificate": "* Aadhaar Card (Husband & Wife)<br>* Marriage Photos<br>* Wedding Card<br>* Witness Aadhaar (2)<br>* Address Proof",
    "E-District Services": "* Aadhaar Card<br>* Address Proof<br>* Service-specific documents<br>* Passport Size Photo",
    "Digilocker Services": "* Aadhaar Card<br>* Mobile Number (linked with Aadhaar)",
    "CSC Banking (Basic Banking Account)": "* Aadhaar Card<br>* PAN Card<br>* Passport Photo<br>* Mobile Number",
    "AEPS (Aadhaar Enabled Payment System)": "* Aadhaar Card<br>* Bank Account linked with Aadhaar<br>* Fingerprint (Biometric)",
    "Money Transfer (Domestic Remittance)": "* Sender Aadhaar + Mobile<br>* Receiver Bank Details<br>* ID Proof",
    "Micro ATM": "* Aadhaar Card<br>* Bank Account<br>* Fingerprint",
    "Passbook Printing": "* Bank Passbook<br>* Aadhaar Card",
    "Insurance Premium Payment": "",
    "Pension Services": "* Aadhaar Card<br>* Bank Passbook<br>* Age Proof<br>* Income Certificate",
    "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)": "* Aadhaar Card<br>* Bank Passbook<br>* Nominee Details",
    "Pradhan Mantri Suraksha Bima Yojana (PMSBY)": "* Aadhaar Card<br>* Bank Passbook<br>* Nominee Details",
    "Life Insurance (LIC / CSC Insurance)": "* Aadhaar Card<br>* Bank Passbook<br>* Address Proof<br>* Nominee Aadhaar",
    "Health Insurance": "* Aadhaar Card<br>* Bank Passbook<br>* Address Proof<br>* Nominee Aadhaar",
    "Crop Insurance (PMFBY)": "* Aadhaar Card<br>* Bank Passbook<br>* Address Proof<br>* Nominee Aadhaar<br>* Land Papers (Crop Insurance)",
    "Online Form Filling (Govt Exams)": "* Aadhaar Card<br>* Educational Certificates<br>* Passport Photo<br>* Signature",
    "Scholarship Application": "* Aadhaar Card<br>* Caste Certificate<br>* Income Certificate<br>* Bank Passbook<br>* School/College ID",
    "Skill Development Courses": "",
    "Digital Literacy (PMGDISHA)": "* Aadhaar Card<br>* Mobile Number<br>* Passport Photo",
    "University / College Admission Forms": "* Aadhaar Card<br>* Educational Certificates<br>* Passport Photo<br>* Signature",
    "Online Classes & Exams Support": "",
    "Printing / Scanning / Photocopy": "",
    "Online Form Apply (All Govt Forms)": "",
    "Resume / CV Making": "* Basic Personal Details<br>* Education & Experience Details<br>* Photo (optional)",
    "Email ID Creation": "* Basic Personal Details<br>* Education & Experience Details<br>* Photo (optional)",
    "Mobile / Laptop Assistance": "",
    "Website & Domain Services (CSC VLE)": "* Basic Personal Details<br>* Education & Experience Details<br>* Photo (optional)",
    "Mobile Recharge": "",
    "DTH Recharge": "",
    "New SIM (BSNL CSC)": "* Aadhaar Card<br>* Fingerprint<br>* Passport Size Photo",
    "Broadband Services": "",
    "GST Registration": "* Aadhaar Card<br>* PAN Card<br>* Address Proof<br>* Bank Passbook<br>* Business Proof",
    "GST Return Filing": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "ITR Filing": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "Trade License": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "Shop Act Registration": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "MSME / Udyam Registration": "* Aadhaar Card<br>* PAN Card<br>* Business Details",
    "Soil Health Card": "* Aadhaar Card<br>* Land Papers<br>* Mobile Number",
    "Crop Advisory": "* Aadhaar Card<br>* Land Papers<br>* Mobile Number",
    "Weather Information": "",
    "Farmer Registration": "* Aadhaar Card<br>* Land Papers<br>* Mobile Number",
    "PM Kisan Yojana": "* Aadhaar Card<br>* Bank Passbook<br>* Land Records",
    "IRCTC Railway Ticket Booking": "* Aadhaar Card<br>* Passenger Details",
    "Bus Ticket Booking": "* Aadhaar Card<br>* Passenger Details",
    "Flight Ticket Booking": "* Aadhaar Card<br>* Passenger Details",
    "Electricity Bill Payment": "* Consumer Number<br>* Bill Copy",
    "Water Bill Payment": "* Consumer Number<br>* Bill Copy",
    "Gas Bill Payment": "* Consumer Number<br>* Bill Copy",
    "Telemedicine (Online Doctor)": "",
    "Ayushman Bharat Card": "* Aadhaar Card<br>* Ration Card<br>* Mobile Number",
    "Health Checkup Booking": "",
    "CSC e-Marketplace": "",
    "CSC Grameen eStore": "",
    "CSC Digital Village Services": "",
    "FASTag Registration": "* Aadhaar Card<br>* Vehicle RC<br>* Mobile Number"
};

function showDetails(service) {
    const details = services[service] || "Service available. Contact center for details.";
    const modalTitle = document.getElementById('modalTitle');
    const container = document.querySelector('#serviceDetails .details-content');
    modalTitle.textContent = service;
    if (details) {
        container.innerHTML = details.replace(/\n/g, '<br>');
    } else {
        container.innerHTML = '<p>No specific documents required. Visit the center for assistance.</p>';
    }
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('modalOverlay').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('modalOverlay').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore body scroll
}

function handleKey(e, service) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showDetails(service);
    }
}

// Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');

    closeButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
});

// Hamburger Menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.textContent = expanded ? '☰' : '✕';
    navMenu.classList.toggle('open');
});