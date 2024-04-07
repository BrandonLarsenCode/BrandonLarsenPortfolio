document.addEventListener("DOMContentLoaded", function() {
    // Array of band members
    const bandMembers = [
        "Corey Taylor",
        "Shawn Crahan",
        "Jim Root",
        "Mick Thomson",
        "Craig Jones",
        "Sid Wilson",
        "Alessandro Venturella",
        "Jay Weinberg"
    ];

    // Populate band members list
    const membersList = document.getElementById("membersList");
    bandMembers.forEach(function(member) {
        const li = document.createElement("li");
        li.textContent = member;
        membersList.appendChild(li);
    });
});
