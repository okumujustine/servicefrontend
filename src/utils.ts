
export function getCookie(name) {
    console.log("document.cookie", document.cookie)
    const value = `; ${document.cookie}`;
    const parts: any = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}