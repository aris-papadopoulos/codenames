// Needed for passing history object and create redirects within redux actions
import { createBrowserHistory } from 'history';
export default createBrowserHistory();


export function decodeBase64(string) {
    const decodedString = window.atob(string);
    const parsedValue = JSON.parse(decodedString);
    return parsedValue;
}