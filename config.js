// Settings for the server
// (defaults to cloud9ide variable for the port and listening on all IP addresses)
module.exports = {
    port: process.env.C9_PORT,
    ip: '0.0.0.0',
    staticFolder: __dirname + "/public"
};