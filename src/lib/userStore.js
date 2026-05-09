let globalUsers = null;

function getGlobalUsers() {
    if (!globalUsers) {
        if (global._users_store) {
            globalUsers = global._users_store;
        } else {
            globalUsers = new Map();
            global._users_store = globalUsers;
        }
    }
    return globalUsers;
}

export function getUserByEmail(email) {
    const users = getGlobalUsers();
    return users.get(email.toLowerCase());
}

export function createUser(name, email, photoUrl, password) {
    const users = getGlobalUsers();
    const normalizedEmail = email.toLowerCase().trim();

    if (users.has(normalizedEmail)) {
        return null;
    }

    const newUser = {
        name: name.trim(),
        email: normalizedEmail,
        photoUrl: photoUrl?.trim() || `https://i.pravatar.cc/150?u=${encodeURIComponent(normalizedEmail)}`,
        password: password.trim()
    };

    users.set(normalizedEmail, newUser);
    return newUser;
}

export function verifyUser(email, password) {
    const user = getUserByEmail(email);

    if (!user || user.password !== password.trim()) {
        return null;
    }

    return user;
}

export function updateUserProfile(email, updates) {
    const users = getGlobalUsers();
    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = users.get(normalizedEmail);

    if (!existingUser) {
        return null;
    }

    const updatedUser = {
        ...existingUser,
        name: updates.name?.trim() || existingUser.name,
        photoUrl: updates.photoUrl?.trim() || existingUser.photoUrl
    };

    users.set(normalizedEmail, updatedUser);
    return updatedUser;
}

export function getAllUsers() {
    const users = getGlobalUsers();
    return Array.from(users.values());
}
