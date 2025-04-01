document.addEventListener("DOMContentLoaded", () => {
    // Function to get URL parameters
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            firstName: params.get("firstName"),
            lastName: params.get("lastName"),
            email: params.get("email"),
            phone: params.get("phone"),
            business: params.get("business"),
            timestamp: params.get("timestamp")
        };
    }

    // Retrieve form data from URL
    const formData = getQueryParams();

    // Populate the thank you message with user data
    document.getElementById("firstName").textContent = formData.firstName || "N/A";
    document.getElementById("lastName").textContent = formData.lastName || "N/A";
    document.getElementById("email").textContent = formData.email || "N/A";
    document.getElementById("phone").textContent = formData.phone || "N/A";
    document.getElementById("business").textContent = formData.business || "N/A";
    document.getElementById("timestamp").textContent = formData.timestamp
        ? new Date(formData.timestamp).toLocaleString()
        : "N/A";

        
});
