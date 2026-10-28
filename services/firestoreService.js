import db from './conn'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore"

class FirestoreService {
    constructor() {
        this.db = db
        this.collectionName = 'users'
        this.collectionRef = collection(this.db, this.collectionName)
    }

    /**
     * @param {User|Object} data
     * @returns {Promise<User>}
     */

    async createUser(data) {
        try {
            const userData = {
                email: data.email,
                displayName: data.displayName || '',
                photoURL: data.photoURL || '',
                phoneNumber: data.phoneNumber || '',
                disabled: data.disabled || false,
                verifiedEmail: data.emailVerified || false,
                createdAt: data.createdAt || new Date(),
                updatedAt: data.updatedAt || new Date()
            }
            if (data.uid) {
                const userDocRef = doc(this.collectionRef, data.uid, this.collectionName)
                await setDoc(userDocRef, userData)
                return new User({ uid: data.uid, ...userData })
            } else {
                const docRef = await addDoc(this.collectionRef, userData)
                return new User({ uid: docRef.id, ...userData })
            }
        } catch (error) {
            this._handleFirestoreError(error)
            throw error
        }
    }

    /**
     * @param {string} uid
     * @returns {Promise<User|null>}
     */

    async getUserById(uid) {
        try {
            const userDocRef = doc(this.doc, this.collectionName, uid)
            const userDocSnap = await getDoc(userDocRef)

            if (!userDocSnap.exists()) {
                return null
            }
            return new User({ uid: userDocSnap.id, ...userDocSnap.data() })
        } catch (e) {
            this_handleFirestoreError('getUserById', e)
            throw e
        }
    }

    /**
     * @returns {Promise<User[]>}
     */
    async getAllUsers() {
        try {
            const querySnapshot = await getDocs(this.collectionRef)
            const users = []

            querySnapshot.forEach((docSnapshot) => {
                users.push(new User({ uid: docSnapshot.id, ...docSnapshot.data() }))
            })

            return users
        } catch (e) {
            this._handleFirestoreError(e)
            throw e
        }
    }

    /**
     * @param {string} uid
     * @param {Object} updateData
     * @returns {Promise<User>} 
     */

    async updateUser(uid, updateData) {
        try {
            const userDocRef = doc(this.db, this.collectionRef, uid)
            const data = {
                ...updateData,
                updatedAt: new Date()
            }

            delete data.uid

            await updateDoc(userDocRef, data)
            return await this.getUserById(uid)
        } catch (e) {
            this._handleFirestoreError(e)
            throw e
        }
    }

    /**
     * 
     * @param {uid} uid
     * @returns {Promise<boolean>} 
     */
    async deleteUser(uid) {
        try {
            const userDocRef = doc(this.db, this.collectionName, uid)
            await deleteDoc(userDocRef)
            return true
        } catch (e) {
            this._handleFirestoreError(e)
            throw e
        }
    }
    /**
    * @param {string} email
    * @returns {Promise<User|null>}
    */
    async getUserByEmail(email) {
        try {
            const query = await query(this.collectionRef, where('email', '==', email))
            const querySnapshot = await getDocs(query)

            if (querySnapshot.empty) {
                return null
            }

            const userDocSnap = querySnapshot.docs[0];
            return new User({ uid: userDocSnap.id, ...userDocSnap.data() })
        } catch (e) {
            this._handleFirestoreError(e)
            throw e
        }
    }

    _handleFirestoreError(e) {
        console.error(`Firestore error: Código[${e.code}]  - Mensagem: [${e.message}].`)
    }
}

export { FirestoreService }
export default new FirestoreService()