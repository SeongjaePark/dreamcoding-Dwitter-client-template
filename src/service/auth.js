export default class AuthService {
  constructor(http) {
    this.http = http
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
