const authenticate = async (url, body, onSuccess, onFailure) => {

    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const authToken = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${authToken}`;

        const response = await promise.json()
        if (response.email && authToken && response._id) {
            onSuccess({
                email: response.email,
                id: response._id,
                name: response.name,
                surname: response.surname,
                properties:response.properties
            });
        } else {
            onFailure();
        }
    } catch (e) {
        onFailure(e);
    }
};

export default authenticate