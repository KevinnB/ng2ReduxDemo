class identity {
    provider: string;
    user_id: string;
    connection: string;
    isSocial: boolean;
}

export class AuthModel {
    email: string;
    email_verified: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    gender: string;
    locale: string;
    clientID: string;
    update_at: Date;
    user_id: string;
    nickname: string;
    identities: Array<identity>;

    constructor(config: any = {}) {
        this.email = config.email;
        this.email_verified = config.email_verified;
        this.name = config.name;
        this.given_name = config.given_name;
        this.family_name = config.family_name;
        this.picture = config.picture;
        this.gender = config.gender;
        this.locale = config.locale;
        this.clientID = config.clientID;
        this.update_at = config.update_at;
        this.user_id = config.user_id;
        this.nickname = config.nickname;
        // TODO: Update
        this.identities = config.identities;
    }
}