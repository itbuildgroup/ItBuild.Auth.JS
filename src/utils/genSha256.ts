import { Message, sha256 } from "js-sha256";

const genSha256 = (message: Message) => sha256(message);

export default genSha256;
