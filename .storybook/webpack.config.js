module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  });

  return config;
};
