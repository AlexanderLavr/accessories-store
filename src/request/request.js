export function request(url,  method, body) {
    return (
        fetch(`http://localhost:3000/${url}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((response) => response.json())
    )
} 