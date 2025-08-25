
// Api configuration for different environments
const getApiBaseUrl = () =>{
    if(
        typeof window !== "undefined" &&
        window.location.hostname !== "localhost"
    )
    {
        return "https://assignment-3-library-management-api-nine.vercel.app/api";
    }
    return "/api"
}

export const API_BASE_URL = getApiBaseUrl();