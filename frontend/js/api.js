// BASE URL (backend server)
const API_URL = "http://localhost:3000/api";

// GET request helper
async function apiGET(url) {
    const res = await fetch(API_URL + url, {
        headers: {
            "Authorization": "Bearer " + getToken(),
            "Content-Type": "application/json"
        }
    });

    if (!res.ok) {
        console.error("GET API Error:", res.status, res.statusText);
        throw new Error("GET request failed");
    }

    return res.json();
}

// POST request helper
async function apiPOST(url, body) {
    const res = await fetch(API_URL + url, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + getToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        console.error("POST API Error:", res.status, res.statusText);
        throw new Error("POST request failed");
    }

    return res.json();
}
