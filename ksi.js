document.addEventListener("DOMContentLoaded", function() {
    const fitnessForm = document.getElementById("fitnessForm");
    const exerciseList = document.getElementById("exerciseList");

    // Handle form submission
    fitnessForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const exercise = document.getElementById("exercise").value;
        const duration = document.getElementById("duration").value;
        if (exercise && duration) {
            addExercise(exercise, duration);
            fitnessForm.reset();
        } else {
            alert("Please enter both exercise and duration.");
        }
    });

    // Add exercise to the list
    function addExercise(exercise, duration) {
        const exerciseDiv = document.createElement("div");
        exerciseDiv.classList.add("exercise");
        exerciseDiv.innerHTML = `
            <h3>${exercise}</h3>
            <p>Duration: ${duration} minutes</p>
        `;
        exerciseList.appendChild(exerciseDiv);
    }
});


