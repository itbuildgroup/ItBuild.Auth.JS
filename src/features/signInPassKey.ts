
import base64URL_to_Uint8Array from "../utils/base64URL_to_Uint8Array";
import generateKeys from "../helpers/generateKeys";
import { createPassKey } from "./createPassKey";
import { LoginInfo } from "../api/model";
import { apiLogin, apiLoginOptions } from "../api";

/**
 * Authorize user via passkey
 * @param passKey User's passkey from {@link createPassKey}
 * @returns set-cookie header string on success
 * @returns `null` on error
 */
export async function signInPassKey(passKey: string): Promise<string | null> {
  if (!passKey.trim()) return null;

  const loginOptionResponse = await apiLoginOptions();

  if (!loginOptionResponse.result) return null;
  
  const opt = loginOptionResponse.result;

  const challengeBuf = base64URL_to_Uint8Array(opt.challenge) as Buffer;

  const { signature, public_key } = generateKeys(passKey, challengeBuf);

  const data: LoginInfo = {
    challenge_id: opt.challenge_id,
    credential: null,
    public_key,
    signature
  };

  const loginResponse = await apiLogin(data);

  if (loginResponse.result && loginResponse.result !== "Failure") {
    return loginResponse.headers['Set-Cookie'];
  }

  return null;
};
