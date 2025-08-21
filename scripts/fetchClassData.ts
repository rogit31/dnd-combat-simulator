const API_BASE = "https://www.dnd5eapi.co"

async function fetchFromUrl() {
    try {
        const response = await fetch(`${API_BASE}/api/2014/classes/`);
        const data = await response.json();
        console.log(data);
        for (let i = 0; i < 12; i++) {
            const classResponse = await fetch(API_BASE + data.results[i].url);
            const classData = await classResponse.json();
            console.log(classData);
        }
    } catch (e) {
        console.error(`Error fetching: ${e}`)
    }
}

fetchFromUrl();
