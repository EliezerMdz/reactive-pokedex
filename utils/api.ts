import { handleApiError } from "./errorHandling";

const getCommonHeaders = () => {
    const headers: HeadersInit = new Headers();
    
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return headers;
}

const baseResourceFetch = async (url: URL, options?: RequestInit) => {
    const response = await fetch(url.toString(), {...options});
    await handleApiError(response);
    return response;
}

const fetchResource = async (resource: URL, options?: RequestInit, rawResponse?: boolean) => {
    const res = await baseResourceFetch(resource, options);

    if(rawResponse) return res;

    try{
        return await res.json();
    }catch(e) {
        console.error('GET API request failed, no proper JSON format');
    }
}

const get = async (url: URL, rawResponse?: boolean) => {
    const headers = getCommonHeaders();

    return await fetchResource(
        url,
        {
            method: 'GET',
            headers,
        },
        rawResponse
    );
}