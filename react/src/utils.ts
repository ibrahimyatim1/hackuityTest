/**
 *
 * You are NOT allowed to modify this function.
 *
 * However you do not need to understand its code.
 *
 */

import md5 from "md5";

export function pseudo2avatarURL(pseudo: string): Promise<string> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (pseudo.match(/[^a-z0-9]/)) {
        reject(new Error("Invalid pseudo"));
      } else {
        const hex = "06C28E4A";
        let x = 0;
        for (let i = 0; i < pseudo.length; i++) {
          x = (pseudo.charCodeAt(i) + (x << 6) + (x << 16) - x) & 0xffff;
        }
        const c = `${hex[x & 7]}${hex[(x >> 4) & 7]}${hex[(x >> 8) & 7]}`;
        resolve(`https://placehold.co/150/${c}/${c}`);
      }
    }, 500);
  });
}

export async function fetchAvatar(username: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.realworld.io/api/profiles/${username}`
    );
    if (!response.ok) {
      console.log("err");
    }
    const res = await response.json();
    return res.profile.image;
  } catch (error) {
    console.log("err");
  }
}

function isEmail(input: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(input);
}

export function generateGravatarURL(username: string): string {
  if (!isEmail(username)) username = `${username}@wootap.me}`;
  username = md5(username);
  const baseGravatarURL = "https://gravatar.com/avatar/";
  return `${baseGravatarURL}${username}`;
}
