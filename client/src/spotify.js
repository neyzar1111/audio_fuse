import axios from "axios";
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

    const queryParams = {
        [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
        [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
        [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
    };

    const hasError = urlParams.get('error');
    //If there's an error OR the token in LS has expired,
    // refresh the token
    if(hasError  || hasTokenExpired() || LOCALSTORAGE_VALUES.accessToken === 'undefined'){
        refreshToken();
    }

    //If there is a valid access token in LS, use that
    if(LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined'){
        return LOCALSTORAGE_VALUES.accessToken;
    }

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
