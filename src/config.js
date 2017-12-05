
const config = {

    development: {
        API_BACKEND: '<API URL>',
        GITHUB_OAUTH_ID: '<OAUTH_ID>',
        GITHUB_REDIRECTUI: 'http://localhost:8080/users/auth/github/callback'
    },
    production: {
        API_BACKEND: 'http://backend-manageiq-galaxy.int.open.paas.redhat.com',
        GITHUB_OAUTH_ID: '6260e5a4c3e173a40795',
        GITHUB_REDIRECTUI: 'http://web-manageiq-galaxy.int.open.paas.redhat.com/users/auth/github/callback'
    } 
};
    
module.exports = config;