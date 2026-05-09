export const AUTH_COOKIE_NAME = "skillsphere-session";

function toDisplayName(email) {
  const base = email.split("@")[0] ?? "learner";
  const segments = base.split(/[._-]+/).filter(Boolean);

  if (!segments.length) {
    return "Learner";
  }

  return segments
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export function createSessionUser(email) {
  return {
    name: toDisplayName(email),
    email,
    avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`
  };
}

export function encodeSession(user) {
  return encodeURIComponent(JSON.stringify(user));
}

export function decodeSession(value) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
}
