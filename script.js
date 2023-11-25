// Sample projects data
const projects = [
    { name: 'Real-time Emotion Detection', technology: 'Python' },
    { name: 'PauPau Mart', technology: 'HTML, CSS, JS, PHP' },
    { name: 'Sorting Visualizer', technology: 'Python' },
    { name: 'Ice-cream factory system call', technology: 'C' },
    { name: 'Movie Recommendation System', technology: 'C++' },
    { name: 'Event Management System', technology: 'C++' },
    { name: 'Blood Analysis System', technology: 'C' },
];

// Function to filter projects based on input
function filterProjects() {
    const filterInput = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('project-list');

    // Clear existing list
    projectList.innerHTML = '';

    // Filter and display projects
    projects.forEach(project => {
        if (project.technology.toLowerCase().includes(filterInput) || filterInput === '') {
            const listItem = document.createElement('li');
            listItem.textContent = project.name;
            projectList.appendChild(listItem);
        }
    });
}

// Function to initialize the project list on page load
function initializeProjects() {
    const projectList = document.getElementById('project-list');

    // Populate the project list on page load
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project.name;
        projectList.appendChild(listItem);
    });
}

// Call the initializeProjects function on page load
initializeProjects();
