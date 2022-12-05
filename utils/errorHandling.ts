export const handleApiError = async (res: Response) => {
    if(!res.ok){
        const response = await res.json();

        throw new Error(
            `${response?.Errors?.Error?.[0].ReasonCode}: ${response?.error?.message}`
        )
    }
}