export function setStorage({ key, value }) {
    const valueToString = JSON.stringify(value);
    return localStorage.setItem(key, valueToString);
}

export function getStorage({ key, isJSON }) {
    const value = localStorage.getItem(key);
    return isJSON ? JSON.parse(value) : value;
}
