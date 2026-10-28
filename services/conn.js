import firebase from '../firebase/firebase'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const app = initializeApp(firebase)
const db = getFirestore(app)

const  getFirestoreConn = () => {
    try{
        return db = getFirestore(app)
    }catch (e) {
        console.error('Erro ao iniciar a Conexão com o Firestore:', e)
        return
    }
}

export default db