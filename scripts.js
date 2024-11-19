
// JavaScript for Zap Quizzes

// Initialize dashboard data
let completedQuizzes = 0;
let inProgressQuizzes = 0;

// Simulate updating progress
function updateDashboard(completed, inProgress) {
    document.getElementById('completed-quizzes').innerText = completed;
    document.getElementById('in-progress-quizzes').innerText = inProgress;
}

// Example update
updateDashboard(3, 1);
