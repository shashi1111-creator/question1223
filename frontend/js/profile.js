requireAuth();

async function loadProfile() {
    const user = await apiGET("/me");

    $("username").innerText = user.username;
    $("points").innerText = user.points;
    $("qCount").innerText = user.questions;
    $("aCount").innerText = user.answers;
}

loadProfile();
