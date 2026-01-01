const services = {
    "Aadhaar Enrolment / Update": `
✅ <strong>Aadhaar Enrolment / Update</strong>
<ul>
  <li><strong>Proof of Identity (POI):</strong> PAN / Voter ID / Passport / Driving Licence</li>
  <li><strong>Proof of Address (POA):</strong> Ration Card / Electricity Bill / Bank Passbook</li>
  <li><strong>Date of Birth Proof (DOB):</strong> Birth Certificate / 10th Marksheet</li>
  <li><strong>Mobile Number</strong> (OTP ke liye)</li>
</ul>`,

    "PAN Card (New / Correction)": `
✅ <strong>PAN Card (New / Correction)</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Identity Proof (Voter ID / Passport / DL)</li>
  <li>Address Proof</li>
  <li>Passport Size Photo</li>
  <li>Signature (scan)</li>
</ul>`,

    "Voter ID (Apply / Update)": `
✅ <strong>Voter ID (Apply / Update)</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Address Proof</li>
  <li>Passport Size Photo</li>
  <li>Age Proof (10th Marksheet / Birth Certificate)</li>
</ul>`,

    "Passport Application (PSK CSC)": `
✅ <strong>Passport Application (PSK CSC)</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>PAN Card</li>
  <li>Birth Proof (10th Marksheet / Birth Certificate)</li>
  <li>Address Proof (Electricity Bill / Bank Passbook)</li>
  <li>Passport Size Photo</li>
</ul>`,

    "Driving Licence (Apply / Renewal)": `
✅ <strong>Driving Licence (Apply / Renewal)</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Address Proof</li>
  <li>Age Proof</li>
  <li>Old DL (Renewal ke liye)</li>
  <li>Passport Size Photo</li>
  <li>Medical Certificate (Form 1A – kuch cases me)</li>
</ul>`,

    "Ration Card Services": `
✅ <strong>Ration Card Services</strong>
<ul>
  <li>Aadhaar Card (Family ke sabhi members ka)</li>
  <li>Address Proof</li>
  <li>Income Certificate</li>
  <li>Passport Size Photo</li>
  <li>Family Details</li>
</ul>`,

    "Birth Certificate / Death Certificate": `
✅ <strong>Birth / Death Certificate</strong>
<ul>
  <li>Hospital Slip / Proof</li>
  <li>Aadhaar Card</li>
  <li>Address Proof</li>
  <li>Parent/Relative Details</li>
</ul>`,

    "Income Certificate": `
✅ <strong>Income Certificate</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Address Proof</li>
  <li>Salary Slip / Self Declaration</li>
  <li>Passport Size Photo</li>
</ul>`,

    "Caste Certificate": `
✅ <strong>Caste Certificate</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Address Proof</li>
  <li>Father’s Caste Certificate</li>
  <li>School Leaving Certificate</li>
  <li>Affidavit</li>
</ul>`,

    "Domicile / Residence Certificate": `
✅ <strong>Domicile / Residence Certificate</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Address Proof (Electricity Bill / Ration Card)</li>
  <li>School Certificate / Land Paper</li>
  <li>Passport Size Photo</li>
</ul>`,

    "Marriage Certificate": `
✅ <strong>Marriage Certificate</strong>
<ul>
  <li>Aadhaar Card (Husband & Wife)</li>
  <li>Marriage Photos</li>
  <li>Wedding Card</li>
  <li>Witness Aadhaar (2 persons)</li>
  <li>Address Proof</li>
</ul>`,

    "E-District Services": `
✅ <strong>E-District Services</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Address Proof</li>
  <li>Service-specific documents</li>
  <li>Passport Size Photo</li>
</ul>`,

    "Digilocker Services": `
✅ <strong>DigiLocker Services</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Mobile Number (linked with Aadhaar)</li>
</ul>`,

    "CSC Banking (Basic Banking Account)": `
💰 <strong>CSC Banking Account</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>PAN Card</li>
  <li>Passport Size Photo</li>
  <li>Mobile Number</li>
</ul>`,

    "AEPS (Aadhaar Enabled Payment System)": `
💰 <strong>AEPS</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Account linked with Aadhaar</li>
  <li>Fingerprint (Biometric)</li>
</ul>`,

    "Money Transfer (Domestic Remittance)": `
💰 <strong>Money Transfer</strong>
<ul>
  <li>Sender Aadhaar + Mobile</li>
  <li>Receiver Bank Details</li>
  <li>ID Proof</li>
</ul>`,

    "Micro ATM": `
💰 <strong>Micro ATM</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Account</li>
  <li>Fingerprint</li>
</ul>`,

    "Passbook Printing": `
💰 <strong>Passbook Printing</strong>
<ul>
  <li>Bank Passbook</li>
  <li>Aadhaar Card</li>
</ul>`,

    "Pension Services": `
💰 <strong>Pension Services</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Age Proof</li>
  <li>Income Certificate</li>
</ul>`,

    "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)": `
🛡️ <strong>PMJJBY / PMSBY</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Nominee Details</li>
</ul>`,

    "Pradhan Mantri Suraksha Bima Yojana (PMSBY)": `
🛡️ <strong>PMJJBY / PMSBY</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Nominee Details</li>
</ul>`,

    "Life Insurance (LIC / CSC Insurance)": `
🛡️ <strong>LIC / Health / Crop Insurance</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Address Proof</li>
  <li>Nominee Aadhaar</li>
  <li>Land Papers (only for Crop Insurance)</li>
</ul>`,

    "Health Insurance": `
🛡️ <strong>LIC / Health / Crop Insurance</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Address Proof</li>
  <li>Nominee Aadhaar</li>
</ul>`,

    "Crop Insurance (PMFBY)": `
🛡️ <strong>LIC / Health / Crop Insurance</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Address Proof</li>
  <li>Nominee Aadhaar</li>
  <li>Land Papers</li>
</ul>`,

    "Online Form Filling (Govt Exams)": `
📚 <strong>Exam / Form Filling</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Educational Certificates</li>
  <li>Passport Size Photo</li>
  <li>Signature</li>
</ul>`,

    "Scholarship Application": `
📚 <strong>Scholarship Application</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Caste Certificate</li>
  <li>Income Certificate</li>
  <li>Bank Passbook</li>
  <li>School/College ID</li>
</ul>`,

    "Digital Literacy (PMGDISHA)": `
📚 <strong>PMGDISHA</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Mobile Number</li>
  <li>Passport Size Photo</li>
</ul>`,

    "Resume / CV Making": `
💻 <strong>Resume / Email / Website Services</strong>
<ul>
  <li>Basic Personal Details</li>
  <li>Education & Experience Details</li>
  <li>Photo (optional)</li>
</ul>`,

    "Email ID Creation": `
💻 <strong>Resume / Email / Website Services</strong>
<ul>
  <li>Basic Personal Details</li>
  <li>Mobile Number for OTP</li>
</ul>`,

    "Website & Domain Services (CSC VLE)": `
💻 <strong>Resume / Email / Website Services</strong>
<ul>
  <li>Business/Personal Details</li>
  <li>Preferred Domain Name</li>
  <li>ID Proof</li>
</ul>`,

    "New SIM (BSNL CSC)": `
📱 <strong>New SIM (BSNL CSC)</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Fingerprint</li>
  <li>Passport Size Photo</li>
</ul>`,

    "GST Registration": `
🧾 <strong>GST Registration</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>PAN Card</li>
  <li>Address Proof</li>
  <li>Bank Passbook</li>
  <li>Business Proof</li>
</ul>`,

    "GST Return Filing": `
🧾 <strong>GST / ITR Filing</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>PAN Card</li>
  <li>Bank Statement</li>
  <li>Income & Sales Details</li>
</ul>`,

    "ITR Filing": `
🧾 <strong>GST / ITR Filing</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>PAN Card</li>
  <li>Bank Statement</li>
  <li>Income Details</li>
</ul>`,

    "MSME / Udyam Registration": `
🧾 <strong>MSME / Udyam Registration</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>PAN Card</li>
  <li>Business Details</li>
</ul>`,

    "PM Kisan Yojana": `
🚜 <strong>PM Kisan Yojana</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Passbook</li>
  <li>Land Records</li>
</ul>`,

    "Soil Health Card": `
🚜 <strong>Soil Health Card / Farmer Registration</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Land Papers</li>
  <li>Mobile Number</li>
</ul>`,

    "Farmer Registration": `
🚜 <strong>Soil Health Card / Farmer Registration</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Land Papers</li>
  <li>Mobile Number</li>
</ul>`,

    "IRCTC Railway Ticket Booking": `
🚆 <strong>IRCTC / Ticket Booking</strong>
<ul>
  <li>Aadhaar Card (optional for login)</li>
  <li>Passenger Details</li>
</ul>`,

    "Bus Ticket Booking": `
🚆 <strong>IRCTC / Ticket Booking</strong>
<ul>
  <li>Passenger Details</li>
  <li>Payment Method</li>
</ul>`,

    "Flight Ticket Booking": `
🚆 <strong>IRCTC / Ticket Booking</strong>
<ul>
  <li>Passenger Details</li>
  <li>ID Proof for travel</li>
</ul>`,

    "Electricity Bill Payment": `
🚆 <strong>Electricity / Gas / Water Bill Payment</strong>
<ul>
  <li>Consumer Number</li>
  <li>Bill Copy (optional)</li>
</ul>`,

    "Water Bill Payment": `
🚆 <strong>Electricity / Gas / Water Bill Payment</strong>
<ul>
  <li>Consumer Number</li>
  <li>Bill Copy (optional)</li>
</ul>`,

    "Gas Bill Payment": `
🚆 <strong>Electricity / Gas / Water Bill Payment</strong>
<ul>
  <li>Consumer Number</li>
  <li>Bill Copy (optional)</li>
</ul>`,

    "Ayushman Bharat Card": `
🏥 <strong>Ayushman Bharat Card</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Ration Card</li>
  <li>Mobile Number</li>
</ul>`,

    "FASTag Registration": `
📦 <strong>FASTag Registration</strong>
<ul>
  <li>Aadhaar Card</li>
  <li>Vehicle RC</li>
  <li>Mobile Number</li>
</ul>`
};
function showDetails(service) {
    const details = services[service] || "Service available. Contact center for details. +91 7599942766";
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
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('closing');
    setTimeout(() => {
        modal.classList.remove('active', 'closing');
        document.getElementById('modalOverlay').setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }, 600);
}

function handleKey(e, service) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showDetails(service);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 80
    });

    // Modal listeners
    const closeButton = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');

    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
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
});

async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6955284241137686"
     crossorigin="anonymous">
