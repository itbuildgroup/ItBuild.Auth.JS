import { getConfig } from "../../config/sdkConfig";
import { ApiResponse } from "../model";

const ApiRequest = async <T>(url: string, init?: RequestInit): Promise<ApiResponse<T>> => {
  const config = getConfig();
  const headers: Record<string, string> = {};

  try {
    const response = await fetch(config.serverPath + url, init);

    if (response.ok) {
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });

      return {
        ...(await response.json()) as ApiResponse<T>,
        headers
      }
    } else {
      return {
        error: { message: `Status: ${response.status}. ${response?.statusText}` },
        headers: headers
      }
    }
  } catch (e) {
    return {
      error: { message: e?.message },
      headers: null
    };
  }
};

export default ApiRequest;
