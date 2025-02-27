import { Application } from "../applications/application";

export class Password {
    id: number;
    encryptedValue: string;
    accountName: string;
    applicationId: number;
    application?: Application;

    constructor(id: number, encryptedValue: string, accountName: string, applicationId: number, application?: Application) {
        this.id = id;
        this.encryptedValue = encryptedValue;
        this.accountName = accountName;
        this.applicationId = applicationId;
        this.application = application
    }
}
