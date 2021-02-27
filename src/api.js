export const FAKE_USER = {
  firstName: "Dave",
  lastName: "Ceddia",
  username: "dave",
  avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: "Hey Dave",
    body: "Yo just wanted to say hey.",
  },
  {
    id: 1,
    subject: "React is Great",
    body: "Yo just wanted to say hey.",
  },
  {
    id: 2,
    subject: "Learn JavaScript",
    body: "Yo just wanted to say hey.",
  },
  {
    id: 3,
    subject: "Job notification",
    body: "Yo just wanted to say hey.",
  },
];

const LOT_OF_EMAILS = Array(2000)
  .fill(0)
  .map( _ => {
    let email = FAKE_EMAILS[Math.floor(Math.random() * FAKE_EMAILS.length)];
    return {
      ...email,
      id: Math.random(),
      preview: email.body.substr(0, 46),
    };
  });

// Generate a preview
FAKE_EMAILS.forEach((email) => (email.preview = email.body.substr(0, 46)));

export default function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "dave" && password === "secret") {
        resolve(FAKE_USER);
      } else {
        reject({
          message: "Invalid username or password",
        });
      }
    }, 300);
  });
}
export function fetchEmails() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LOT_OF_EMAILS);
    }, 300);
  });
}

export function fetchLatestEmails() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        FAKE_EMAILS.map((e) => ({
          ...e,
          id: Math.random(),
        })).slice(0,Math.floor(Math.random() * 100))
      );
    },3000);
  });
}
