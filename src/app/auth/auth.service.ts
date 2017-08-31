import * as firebase from 'firebase';

export class AuthService {

    private loggedIn = false;

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
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