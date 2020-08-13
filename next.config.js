"use strict";
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const webpack = require('webpack');
const _ = require('lodash');
const {parsed : env} = require('dotenv').config();

const finalEnv = _.merge(process.env, env, (prevEnvVal, newEnvVal) => newEnvVal ? prevEnvVal : newEnvVal);

module.exports = withCSS(withSass());

module.exports = withImages({
  webpack: (config, options) => {
    config.plugins.push(new webpack.EnvironmentPlugin(finalEnv))
    return config
  }
})