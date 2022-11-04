import HttpClient from "../../utils/httpclient";

class UserService {
  private readonly httpClient;
  constructor() {
    this.httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
  }

  async getAllUsers() {
    return await this.httpClient.get("/users");
  }
}

export default new UserService();
