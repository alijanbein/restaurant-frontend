module.exports = {
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.allowedHosts = "all"; // This fixes the issue
      return config;
    };
  },
};
