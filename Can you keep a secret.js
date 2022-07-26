// 6 kyu
function createSecretHolder(secret) {
    return {
    newSecret: secret,
    setSecret(secret) {
      this.newSecret = secret;
    },
    getSecret() {
      return this.newSecret;
    }
  }
}