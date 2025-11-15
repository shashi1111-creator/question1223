requireAuth();

async function loadQuestions() {
    const data = await apiGET("/questions");

    const box = $("questionsBox");
    box.innerHTML = "";

    data.forEach(q => {
        box.innerHTML += `
        <div class="card">
            <h3>${q.title}</h3>
            <p>${q.description.substring(0, 80)}...</p>
            <p><b>By:</b> ${q.username}</p>
            <p><b>Votes:</b> ${q.votes}</p>

            <a href="question.html?id=${q.id}" class="btn">View</a>
        </div>
        `;
    });
}

loadQuestions();
