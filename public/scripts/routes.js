var routes = function(app, userAgent) {

  app.get('/', function(req, res) {

    var user_agent = {};
    // create user agent instance to allow output of client information
    var agent = userAgent.parse(req.headers['user-agent']);

    // User Story: I can get the IP address, language and operating system for my browser.
    var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];

    var language = req.acceptsLanguages('fr', 'es', 'en');
    var userOs = agent.os.toString();

    user_agent.ipaddress = ip;
    user_agent.language = language || 'Language not accepted.';
    user_agent.software = userOs;

    // console.log(user_agent);
    res.send(user_agent);
  });
};

module.exports = routes;
