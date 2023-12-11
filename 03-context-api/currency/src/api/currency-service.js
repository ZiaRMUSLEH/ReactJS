const FRANKFURTER_BASE_URL = import.meta.env.VITE_FRANKFURTER_API_BASE_URL;

export async function getCurrencyRates(currency) {
    try {
        const response = await fetch(
            `${FRANKFURTER_BASE_URL}/latest?from=${currency}`
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
