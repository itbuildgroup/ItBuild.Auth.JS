declare interface AuthOptions {
    challenge?: string | null;
    challenge_id?: number;
    fido2_options?: CredentialCreateOptions;
    rpId?: string | null;
    timeout?: number;
    userVerification?: UserVerificationRequirement | null;
    phone?: string | null;
}

/**
 * Creates a user key and registers it in the system
 * @param otp one time password from {@link initializeNewKey} call
 * @param options Authorization options, returned from {@link initializeNewKey}
 * @returns User's passkey to authorize via {@link signInPassKey}
 * @returns object of {@link ErrorObject} on error
 */
export declare function createPassKey(otp: string, options: AuthOptions): Promise<string | ErrorObject>;

declare interface CredentialCreateOptions {
    attestation?: AttestationConveyancePreference;
    authenticatorSelection?: any;
    challenge?: string | null;
    errorMessage?: string | null;
    excludeCredentials?: PublicKeyCredentialDescriptor[] | null;
    extensions?: AuthenticationExtensionsClientInputs;
    pubKeyCredParams?: any[] | null;
    rp?: PublicKeyCredentialRpEntity;
    status?: string | null;
    timeout?: number;
    user?: any;
}

export declare const defineConfig: (config: IConfig) => IConfig;

declare interface ErrorObject {
    code?: number;
    readonly message?: string | null;
}

declare interface IConfig {
    serverPath: string;
}

declare interface INewKeyParams {
    code?: string;
    sid?: string;
}

/**
 * Initialize new key registration
 * @param code Code from email (unauthorized)
 * @param sid User's session id (authorized)
 * @returns object of {@link AuthOptions} on success
 * @returns `null` on error
 */
export declare function initializeNewKey({ code, sid }: INewKeyParams): Promise<AuthOptions | null>;

/**
 * Call password reset
 * @param phone User's phone number
 * @returns status string on success
 * @returns `null` on error
 */
export declare function resetPassword(phone: string): Promise<string | null>;

/**
 * Authorize user via passkey
 * @param passKey User's passkey from {@link createPassKey}
 * @returns set-cookie header string on success
 * @returns `null` on error
 */
export declare function signInPassKey(passKey: string): Promise<string | null>;

export { }
