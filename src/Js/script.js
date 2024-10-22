// Dynamic data object
const dynamicData = {
    title: "Validation SA-04",
    documents: [
        { src: "./images/A4 - 1.png", alt: "Document 1" },
        { src: "./images/A4 - 2.png", alt: "Document 2" }
    ],
    badges: ["Groupe Thender", "Mobilis", "Négociateur"],
    sendDate: "25/09/2024",
    validateDate: "26/09/2024",
    versions: [
        { name: "Engagement 01", status: "success" },
        { name: "Engagement 02", status: "failure" },
        { name: "Engagement 03", status: "success" }
    ]
};

// Function to insert dynamic content into the DOM
function populateInterface() {
    // Set title
    document.getElementById("title").textContent = dynamicData.title;

    // Set documents
    const documentsContainer = document.getElementById("documents");
    dynamicData.documents.forEach(doc => {
        const img = document.createElement("img");
        img.src = doc.src;
        img.alt = doc.alt;
        documentsContainer.appendChild(img);
    });

    // Set badges with unique classes for "Mobilis" and "Négociateur"
    const badgesContainer = document.getElementById("badges");
    dynamicData.badges.forEach(badgeText => {
        const span = document.createElement("span");
        span.classList.add("badge"); // Default badge class
        span.classList.add("group"); // Group class

        // Add specific classes for "Mobilis" and "Négociateur"
        if (badgeText === "Mobilis") {
            span.classList.add("mobilis");
        } else if (badgeText === "Négociateur") {
            span.classList.add("negotiator");
        }

        span.textContent = badgeText;
        badgesContainer.appendChild(span);
    });

    // Set send and validation dates
    document.getElementById("sendDate").textContent = dynamicData.sendDate;
    document.getElementById("validateDate").textContent = dynamicData.validateDate;

    // Set version badges with conditional classes for success and failure
    const versionsContainer = document.getElementById("versions");
    dynamicData.versions.forEach(version => {
        const span = document.createElement("span");
        span.classList.add("badge");

        // Apply class based on the version's status
        if (version.status === "success") {
            span.classList.add("version3");  // Success class
        } else {
            span.classList.add("version2");  // Failure class
        }

        span.textContent = version.name;
        versionsContainer.appendChild(span);
    });
}

// Call the function to populate the interface with dynamic data
populateInterface();

// Event listeners for buttons
document.querySelector('.reject').addEventListener('click', function () {
    alert('Validation Rejected');
});

document.querySelector('.validate').addEventListener('click', function () {
    // alert('Validation Approved');
    window.location.href = './signature.html'; // Replace with your desired URL
});
