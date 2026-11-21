//Aula1118 - Ajustes de Esteira de Rotas
import firebase from '../firebase/firebase.js';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = getApps().length ? getApp() : initializeApp(firebase);
let db = getFirestore(app);

const getFirestoreConn = () => {
    try {
        db = getFirestore(app);
        return db;
    } catch (e) {
        console.error('Erro ao iniciar a Conexão com o Firestore:', e);
        return null;
    }
};

export { app, db, getFirestoreConn };
export default db;