export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http
    this.tokenStorage
  }

  async signup(username, password, name, email, url) {
    return {
      username: 'ellie',
      token: 'abc1234',
    }
  }
  async login(username, password) {
    return {
      username: 'ellie',
      token: 'abc1234',
    }
  }

  async me() {
    return {
      username: 'ellie',
      token: 'abc1234',
    }
  }

  async logout() {
    return
  }
}
