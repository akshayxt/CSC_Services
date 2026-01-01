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
    "Insurance Premium Payment": "",  // No specific documents provided, add if needed
    "Pension Services": "* Aadhaar Card<br>* Bank Passbook<br>* Age Proof<br>* Income Certificate",
    "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)": "* Aadhaar Card<br>* Bank Passbook<br>* Nominee Details",
    "Pradhan Mantri Suraksha Bima Yojana (PMSBY)": "* Aadhaar Card<br>* Bank Passbook<br>* Nominee Details",
    "Life Insurance (LIC / CSC Insurance)": "* Aadhaar Card<br>* Bank Passbook<br>* Address Proof<br>* Nominee Aadhaar",
    "Health Insurance": "* Aadhaar Card<br>* Bank Passbook<br>* Address Proof<br>* Nominee Aadhaar",
    "Crop Insurance (PMFBY)": "* Aadhaar Card<br>* Bank Passbook<br>* Address Proof<br>* Nominee Aadhaar<br>* Land Papers (Crop Insurance)",
    "Online Form Filling (Govt Exams)": "* Aadhaar Card<br>* Educational Certificates<br>* Passport Photo<br>* Signature",
    "Scholarship Application": "* Aadhaar Card<br>* Caste Certificate<br>* Income Certificate<br>* Bank Passbook<br>* School/College ID",
    "Skill Development Courses": "",  // No specific documents provided
    "Digital Literacy (PMGDISHA)": "* Aadhaar Card<br>* Mobile Number<br>* Passport Photo",
    "University / College Admission Forms": "* Aadhaar Card<br>* Educational Certificates<br>* Passport Photo<br>* Signature",
    "Online Classes & Exams Support": "",  // No specific documents provided
    "Printing / Scanning / Photocopy": "",  // No specific documents provided
    "Online Form Apply (All Govt Forms)": "",  // No specific documents provided
    "Resume / CV Making": "* Basic Personal Details<br>* Education & Experience Details<br>* Photo (optional)",
    "Email ID Creation": "* Basic Personal Details<br>* Education & Experience Details<br>* Photo (optional)",
    "Mobile / Laptop Assistance": "",  // No specific documents provided
    "Website & Domain Services (CSC VLE)": "* Basic Personal Details<br>* Education & Experience Details<br>* Photo (optional)",
    "Mobile Recharge": "",  // No specific documents provided
    "DTH Recharge": "",  // No specific documents provided
    "New SIM (BSNL CSC)": "* Aadhaar Card<br>* Fingerprint<br>* Passport Size Photo",
    "Broadband Services": "",  // No specific documents provided
    "GST Registration": "* Aadhaar Card<br>* PAN Card<br>* Address Proof<br>* Bank Passbook<br>* Business Proof",
    "GST Return Filing": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "ITR Filing": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "Trade License": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "Shop Act Registration": "* Aadhaar Card<br>* PAN Card<br>* Bank Statement<br>* Income Details",
    "MSME / Udyam Registration": "* Aadhaar Card<br>* PAN Card<br>* Business Details",
    "Soil Health Card": "* Aadhaar Card<br>* Land Papers<br>* Mobile Number",
    "Crop Advisory": "* Aadhaar Card<br>* Land Papers<br>* Mobile Number",
    "Weather Information": "",  // No specific documents provided
    "Farmer Registration": "* Aadhaar Card<br>* Land Papers<br>* Mobile Number",
    "PM Kisan Yojana": "* Aadhaar Card<br>* Bank Passbook<br>* Land Records",
    "IRCTC Railway Ticket Booking": "* Aadhaar Card<br>* Passenger Details",
    "Bus Ticket Booking": "* Aadhaar Card<br>* Passenger Details",
    "Flight Ticket Booking": "* Aadhaar Card<br>* Passenger Details",
    "Electricity Bill Payment": "* Consumer Number<br>* Bill Copy",
    "Water Bill Payment": "* Consumer Number<br>* Bill Copy",
    "Gas Bill Payment": "* Consumer Number<br>* Bill Copy",
    "Telemedicine (Online Doctor)": "",  // No specific documents provided
    "Ayushman Bharat Card": "* Aadhaar Card<br>* Ration Card<br>* Mobile Number",
    "Health Checkup Booking": "",  // No specific documents provided
    "CSC e-Marketplace": "",  // No specific documents provided
    "CSC Grameen eStore": "",  // No specific documents provided
    "CSC Digital Village Services": "",  // No specific documents provided
    "FASTag Registration": "* Aadhaar Card<br>* Vehicle RC<br>* Mobile Number"
};

function showDetails(service) {
    const details = services[service] || "No details available.";
    document.getElementById('serviceDetails').innerHTML = `<h3>${service}</h3><p>${details}</p>`;
}

function bookAppointment() {
    const name = document.getElementById('name').value;
    const mob = document.getElementById('mob').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !mob || !service || !date || !time) {
        alert('Please fill all fields.');
        return;
    }

    fetch(`/check?date=${date}&time=${time}`)
        .then(res => res.json())
        .then(data => {
            if (data.available) {
                const appointmentData = { name, mob, service, date, time };
                fetch('/book', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(appointmentData)
                })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        alert(`Appointment booked! ID: ${result.id}`);
                        document.getElementById('appointmentForm').reset();
                    } else {
                        alert('Booking failed.');
                    }
                })
                .catch(err => alert('Error: ' + err));
            } else {
                alert('Already booked.');
            }
        })
        .catch(err => alert('Error checking availability: ' + err));
}