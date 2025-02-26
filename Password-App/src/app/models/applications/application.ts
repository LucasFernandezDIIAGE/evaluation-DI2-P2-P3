export class Application {
    application_id: number;
    application_name: string;
    application_type: number;

    constructor(application_id: number, application_name: string, application_type: number) {
        this.application_id = application_id;
        this.application_name = application_name;
        this.application_type = application_type;
    }
}
