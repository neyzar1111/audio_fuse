//Map for LS keys
const LOCALSTORAGE_KEYS =  {
    accessToken: 'spotify_access_token',
    refreshToken:'spotify_refresh_token',
    expireTime:'spotify_token_expire_time',
    timestamp:'spotify_token_timestamp'
}

//Map to retrieve LS values
const LOCALSTORAGE_VALUES = {
    accessToken:window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
    expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
}


const getAccessToken = ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // const accessToken = urlParams.get('access_token');
    // const refreshToken = urlParams.get('refresh_token');
    const queryParams = {
        [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
        [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
        [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
    };



    // If there is a token in the URL query params, user is logging in for the first time

    if(queryParams[LOCALSTORAGE_KEYS.accessToken]){
        for(const property in queryParams){
            window.localStorage.setItem(property, queryParams[property])
        }
        //Set timestamp
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now())
        return queryParams[LOCALSTORAGE_KEYS.accessToken]
    }
    return false;
}
export const accessToken = getAccessToken();
