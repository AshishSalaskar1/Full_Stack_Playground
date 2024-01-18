

export async function hitParseHighlightsEndpoint(body) {
    try {
        const response = await fetch('http://127.0.0.1:3000/parseHighlights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Handle the response data, if needed
        const responseData = await response.json();

        return responseData;

    } catch (error) {
        console.error('Error making POST request:', error.message);
    }
}