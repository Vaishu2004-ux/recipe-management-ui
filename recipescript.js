// Smooth Scroll to Section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Mobile Navbar Toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Add Recipe to List
function addRecipe() {
    let name = document.getElementById("recipeName").value;
    let category = document.getElementById("recipeCategory").value;
    let time = document.getElementById("recipeTime").value;
    let details = document.getElementById("recipeDetails").value;

    if (name && category && time && details) {
        let recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");
        recipeItem.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Cooking Time:</strong> ${time}</p>
            <p>${details}</p>
        `;
        document.getElementById("recipeList").appendChild(recipeItem);

        // Clear fields
        document.getElementById("recipeName").value = "";
        document.getElementById("recipeTime").value = "";
        document.getElementById("recipeDetails").value = "";
    } else {
        alert("Please fill in all required fields.");
    }
}