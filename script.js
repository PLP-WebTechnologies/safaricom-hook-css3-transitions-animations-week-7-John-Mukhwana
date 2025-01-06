document.addEventListener("DOMContentLoaded", () => {
    // Function to toggle spinner animation
    const toggleSpinner = () => {
        const spinner = document.getElementById("spinner");
        spinner.classList.toggle("hidden");
        setTimeout(() => {
            spinner.classList.add("hidden"); // Hide after 3 seconds
        }, 3000);
    };

    // Function with parameters and return value
    const calculateBMI = (weight, height) => {
        if (height <= 0) return "Invalid height";
        return (weight / (height * height)).toFixed(2);
    };

    // Demonstrating scope
    let globalMessage = "Welcome to the Health Blog!";
    const displayMessage = () => {
        let localMessage = "Local Scope: Stay Healthy!";
        console.log(globalMessage); // Accessing global variable
        console.log(localMessage); // Accessing local variable
    };

    // Attach event listeners
    const learnMoreButton = document.getElementById("learn-more");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", () => {
            alert("Discover our latest articles on health and wellness!");
            toggleSpinner(); // Show spinner on click
        });
    }

    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("This feature will take you to the full article!");
        });
    });

    // Example usage of calculateBMI
    console.log("BMI Example: ", calculateBMI(70, 1.75));

    // Demonstrate scope
    displayMessage();
});
