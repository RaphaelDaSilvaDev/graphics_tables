import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class HttpClient {
  private readonly baseUrl;
  constructor(baseURL: string) {
    this.baseUrl = axios.create({ baseURL });
  }

  async get(path: string, options?: any) {
    const response = await this.baseUrl.get(path, options);
    if (!response.data) throw new Error("Invalid Request");
    return response.data;
  }
}
