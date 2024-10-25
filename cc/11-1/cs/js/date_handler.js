function updatePageBasedOnDate() {
    const params = new URLSearchParams(window.location.search);
    const inputDate = params.get('date');

    // Debugging output
    console.log("Input Date from URL:", inputDate);

    if (inputDate) {
        const date = new Date(inputDate);
        console.log("Parsed Date:", date);

        // Select the buttons using IDs
        const episodesButton = document.getElementById('episodesButton').parentElement; // Parent <li>
        const askButton = document.getElementById('askButton').parentElement; // Parent <li>

        // Check if the buttons are selected correctly
        console.log("Episodes Button:", episodesButton);
        console.log("Ask Button:", askButton);

        // Control visibility based on date ranges
        if (date >= new Date('2014-06-06') && date <= new Date('2014-06-20')) {
            episodesButton.style.display = 'none'; // Hide the "EPISODES" button
            console.log("Hiding EPISODES button");
        } else {
            episodesButton.style.display = ''; // Show the "EPISODES" button
            console.log("Showing EPISODES button");
        }

        if (date >= new Date('2014-04-17') && date < new Date('2014-06-06')) {
            askButton.style.display = 'none'; // Hide the "ASK THE CS CAST" button
            console.log("Hiding ASK THE CS CAST button");
        } else {
            askButton.style.display = ''; // Show the "ASK THE CS CAST" button
            console.log("Showing ASK THE CS CAST button");
        }
    } else {
        console.log("No date parameter found in the URL.");
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updatePageBasedOnDate);