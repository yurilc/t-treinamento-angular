import * as firebase from 'firebase';

export class AuthService {

    private loggedIn = false;

    login(email: string, password: string) {
        this.loggedIn = true;
        return firebase.auth()
            .signInWithEmailAndPassword(
                email,
                password
            );
    }

    logout() {
        firebase.auth().signOut()
            .then(()=> this.loggedIn = false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    registerUser(email: string, password: string) {
        firebase.auth()
            .createUserWithEmailAndPassword(
                email,
                password
            );
    }
}