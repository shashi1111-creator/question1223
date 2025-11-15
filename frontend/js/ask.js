requireAuth();

$("askForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = $("title").value;
    const description = $("description").value;

    const res = await apiPOST("/questions/add", {
        title,
        description
    });

    if (res.success) {
        alert("Question added!");
        window.location.href = "questions.html";
    } else {
        alert(res.message || "Error!");
    }
});
