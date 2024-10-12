// Sample student data with more details
const students = [
    { id: "11111", name: "John Doe", class: "Form 4", feePaid: 3000, subjects: ["English", "Math", "Physics"] },
    { id: "22222", name: "Jane Smith", class: "Form 3", feePaid: 5000, subjects: ["Kiswahili", "Biology", "Chemistry"] },
    { id: "33333", name: "Alice Kariuki", class: "Form 2", feePaid: 2000, subjects: ["History", "Geography", "Business"] }
];

// Subjects available
const subjects = ["English", "Kiswahili", "Mathematics", "CRE", "Chemistry", "Physics", "Biology", "History", "Geography", "Business Studies", "Agriculture", "Computer Studies", "French"];

// Term fee
const termFee = 5000;

// Login function
function login() {
    const studentID = document.getElementById('studentID').value;

    // Search for student by ID
    const student = students.find(s => s.id === studentID);

    if (student) {
        // Show dashboard and populate student details
        document.querySelector('.background').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('profileName').textContent = student.name;
        document.getElementById('profileID').textContent = student.id;
        document.getElementById('profileClass').textContent = student.class;

        // Financial details
        document.getElementById('feePaid').textContent = student.feePaid;
        document.getElementById('feeBalance').textContent = termFee - student.feePaid;

        // Academics section conditions
        if (student.feePaid >= 0.6 * termFee) {
            document.getElementById('subjectRegistration').style.display = 'block';
            populateSubjects(student.subjects);
        }
        if (student.feePaid === termFee) {
            document.getElementById('examCard').style.display = 'block';
        }

    } else {
        alert("Invalid School ID!");
    }

    return false; // Prevent form submission
}

// Populate subject list for registration
function populateSubjects(registeredSubjects) {
    const subjectsList = document.getElementById('subjectsList');
    subjectsList.innerHTML = ''; // Clear the
