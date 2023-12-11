export const login = async (userObject) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_DUMMY_JSON_BASE_URL}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userObject),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
