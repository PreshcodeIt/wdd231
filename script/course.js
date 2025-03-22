const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to programming with variables, loops, and arrays.', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Students learn web design and basic HTML/CSS.', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'Students write programs using functions and debugging techniques.', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'This course covers object-oriented programming, encapsulation, and polymorphism.', technology: ['C#'], completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Students learn JavaScript to create interactive web experiences.', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'Focuses on UX, accessibility, compliance, and API usage.', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

let filteredCourses = [...courses]; // Keep track of filtered courses

// Function to display courses
function displayCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = ''; // Clear previous content

    filteredCourses.forEach((course, index) => {
        let courseDiv = document.createElement('div');
        courseDiv.classList.add('course-card');
        
        // Apply different styles if completed
        if (course.completed) {
            courseDiv.classList.add('completed');
        }

        // Initially, only show the course code
        courseDiv.innerHTML = `
            <h3 class="course-header">${course.subject} ${course.number}</h3>
            <div class="course-details hidden">
                <p><strong>${course.title}</strong></p>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
                <p class="${course.completed ? 'status completed-status' : 'status pending-status'}">
                    ${course.completed ? '✅ Completed' : '⏳ In Progress'}
                </p>
            </div>
        `;

        // Click event to toggle course details
        courseDiv.querySelector('.course-header').addEventListener('click', () => {
            const details = courseDiv.querySelector('.course-details');
            details.classList.toggle('hidden');
        });

        container.appendChild(courseDiv);
    });

    // Update total credits dynamically
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter courses
function filterCourses(filter) {
    if (filter === 'all') {
        filteredCourses = [...courses];
    } else {
        filteredCourses = courses.filter(course => course.subject === filter.toUpperCase());
    }
    displayCourses();
}

// Load courses on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCourses();

    // Add event listeners for filter buttons
    document.getElementById('filter-all').addEventListener('click', () => filterCourses('all'));
    document.getElementById('filter-wdd').addEventListener('click', () => filterCourses('wdd'));
    document.getElementById('filter-cse').addEventListener('click', () => filterCourses('cse'));
});
