window.sessionData = [];
window.localData = [];
for (const key in sessionStorage) {
  if (Object.hasOwnProperty.call(sessionStorage, key)) {
    const value = sessionStorage[key];
    window.sessionData.push({ key, value });
  }
}
for (const key in localStorage) {
  if (Object.hasOwnProperty.call(localStorage, key)) {
    const value = localStorage[key];
    window.localData.push({ key, value });
  }
}