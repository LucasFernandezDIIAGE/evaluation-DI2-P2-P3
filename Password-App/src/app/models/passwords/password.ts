export class Password {
    password_id: number;
    password_value: string;

    constructor(password_id: number, password_value: string) {
        this.password_id = password_id;
        this.password_value = password_value;
    }
}
