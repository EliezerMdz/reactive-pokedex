import { handleApiError } from "./errorHandling";

const getCommonHeaders = () => {
  const headers: HeadersInit = new Headers();

  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");

  return headers;
};

export const getApiUrl: (opts: {
  path: string;
  searchParams?: { [key: string]: any };
}) => URL = ({ path, searchParams }) => {
  const url = new URL("https://pokeapi.co/api/v2");
  url.pathname += path;

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value != null && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url;
};

const baseResourceFetch = async (url: URL, options?: RequestInit) => {
  console.log(url, options);
  const response = await fetch(url.toString(), { ...options });
  await handleApiError(response);
  return response;
};

const fetchResource = async (
  resource: URL,
  options?: RequestInit,
  rawResponse?: boolean
) => {
  const res = await baseResourceFetch(resource, options);
  if (rawResponse) return res;

  try {
    return await res.json();
  } catch (e) {
    console.error("GET API request failed, no proper JSON format");
  }
};

const get = async (url: URL, rawResponse?: boolean) => {
  const headers = getCommonHeaders();

  return await fetchResource(
    url,
    {
      method: "GET",
      headers,
    },
    rawResponse
  );
};

const api = {
  get,
};

export default api;
