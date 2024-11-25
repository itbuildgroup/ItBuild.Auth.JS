const base64URL_to_Uint8Array = (str: string) =>
  Uint8Array.from(window.atob(str.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));

export default base64URL_to_Uint8Array;
