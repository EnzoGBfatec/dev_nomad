//Aula0930 - Refatoração de AuthService + Aula1118 - Ajustes de Esteira de Rotas
import { app } from './conn.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile as firebaseUpdateProfile,
    onAuthStateChanged,
    signOut as firebaseSignOut
} from 'firebase/auth';

class AuthService {
    constructor() {
        this.auth = getAuth(app);
    }

    async createUser(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            const maskedUid = String(userCredential.user.uid).substring(0, 6);
            console.log(`User UID: ${maskedUid}**********************`);
            return userCredential.user;
        } catch (error) {
            this._handleAuthStateChanged(error);
            throw error;
        }
    }

    async signUp(email, password) {
        return this.createUser(email, password);
    }

    async signIn(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            const maskedUid = String(userCredential.user.uid).substring(0, 6);
            console.log(`User UID: ${maskedUid}**********************`);
            return userCredential.user;
        } catch (error) {
            this._handleAuthStateChanged(error);
            throw error;
        }
    }

    async updateProfile(displayName, photoURL) {
        try {
            if (!this.auth.currentUser) {
                throw new Error('Update de usuários não são permitidos por contas de terceiros');
            }
            await firebaseUpdateProfile(this.auth.currentUser, { displayName, photoURL });
            return this.auth.currentUser;
        } catch (error) {
            this._handleAuthStateChanged(error);
            throw error;
        }
    }

    async updateUserProfile(displayName, photoURL) {
        return this.updateProfile(displayName, photoURL);
    }

    getCurrentUser() {
        return this.auth.currentUser || null;
    }

    async signOut() {
        try {
            await firebaseSignOut(this.auth);
        } catch (error) {
            this._handleAuthStateChanged(error);
            throw error;
        }
    }

    async signOutUser() {
        return this.signOut();
    }

    observeAuthStateChange(callback) {
        return onAuthStateChanged(this.auth, callback);
    }

    _handleAuthStateChanged(error) {
        console.error(`[AuthService] Code: ${error.code}, Message: ${error.message}`);
    }
}

export { AuthService };
export default new AuthService();
/*
Codigo removido:
const auth = getAuth(firebase)
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(`User UID: ${substring(user.uid, 0, 6)}**********************`)
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(`Code: ${errorCode}, Message: ${errorMessage}`)
    });


signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        conssole.log(`User UID: ${substring(user.uid, 0, 6)}**********************`)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Code: ${errorCode}, Message: ${errorMessage}`);
    });
*/