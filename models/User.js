export class user{
contructore(uid, displayname, email, emailVerified, phoneNumber, photoURL, disabladed, password, created, updated) {
    this.uid = uid
    this.displayname = displayname || ''
    this.photoURL = photoURL || ''
    this.email = email
    this.emailVerified = emailVerified || false
    this.phoneNumber = phoneNumber || ''
    this.password = password
    this.disabladed = disabladed || false
    this.created = created || new Date()
    this.updated = updated || new Date()
    }
}