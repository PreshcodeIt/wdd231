document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");
    const body = document.body;
    const modalTriggers = document.querySelectorAll(".card"); // Ensure cards trigger modal

    function showModal(id) {
        document.getElementById(id).style.display = "flex";
        body.classList.add("modal-open");
    }

    function hideModal(id) {
        document.getElementById(id).style.display = "none";
        body.classList.remove("modal-open");
    }

    // Attach click event to membership cards
    modalTriggers.forEach((card) => {
        card.addEventListener("click", function () {
            const modalId = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extract modal ID
            showModal(modalId);
        });
    });

    // Close modals when clicking the close button (X)
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = this.closest(".modal");
            modal.style.display = "none";
            body.classList.remove("modal-open");
        });
    });

    // Close modals when clicking outside the modal content
    window.addEventListener("click", function (event) {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
                body.classList.remove("modal-open");
            }
        });
    });

    // Prevent automatic modal opening on page refresh
    modals.forEach(modal => modal.style.display = "none");
});
