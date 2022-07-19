export const getCookieValue = (key: string) => {
  let cookieKey = key + '=';
  let result = '';
  const cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i][0] === ' ') {
      cookieArr[i] = cookieArr[i].substring(1);
    }

    if (cookieArr[i].indexOf(cookieKey) === 0) {
      result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
      return result;
    }
  }
  return result;
};

export const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};
