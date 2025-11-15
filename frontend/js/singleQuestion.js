requireAuth();

const qid = getQueryParam("id");

async function loadQuestion() {
    const q = await apiGET(`/questions/${qid}`);

    $("titleBox").innerText = q.title;
    $("descBox").innerText = q.description;
    $("authorBox").innerText = q.username;
    $("votesBox").innerText = q.votes;

    loadAnswers(q.answers);
}

function loadAnswers(list) {
    const box = $("answersBox");
    box.innerHTML = "";

    list.forEach(a => {
        box.innerHTML += `
        <div class="answer">
            <p>${a.text}</p>
            <small>By ${a.username}</small>
        </div>
        `;
    });
}

$("answerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = $("answerText").value;

    const res = await apiPOST(`/answers/add`, {
        questionId: qid,
        text
    });

    if (res.success) {
        $("answerText").value = "";
        loadQuestion();
    }
});

$("voteBtn").addEventListener("click", async () => {
    await apiPOST(`/questions/vote/${qid}`);
    loadQuestion();
});

loadQuestion();
