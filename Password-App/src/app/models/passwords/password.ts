export class Password {
    Id: number;
    EncryptedValue: string;

    constructor(Id: number, EncryptedValue: string) {
        this.Id = Id;
        this.EncryptedValue = EncryptedValue;
    }
}
