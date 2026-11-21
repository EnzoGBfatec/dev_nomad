export class User {
    constructor({
        uid,
        email,
        password,
        displayName,
        photoURL,
        emailVerified,
        phoneNumber,
        role,
        disable,
        disabled,
        createdAt,
        updatedAt
    } = {}) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName || '';
        this.photoURL = photoURL || '';
        this.password = password;
        this.emailVerified = emailVerified || false;
        this.phoneNumber = phoneNumber || '';
        this.role = role || 'nomad';
        this.disable = Boolean(disable ?? disabled ?? false);
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }
}
//Aula1118 - Ajustes de Esteira de Rotas --> role e disabled incrementados
export default User;
