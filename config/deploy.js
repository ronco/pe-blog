/* jshint node: true */
require('dotenv').load();

module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      type: 'redis', // the default store is 'redis'
      host: 'localhost',
      port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      accessKeyId: process.env['AWSAccessKeyId'],
      secretAccessKey: process.env['AWSSecretKey'],
      bucket: 'costite-demos'
    }
  },

  production: {
    store: {
      host: 'ec2-54-235-152-160.compute-1.amazonaws.com',
      port: 10769,
      password: process.env['RedisPW'],
      database: 0
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      accessKeyId: process.env['AWSAccessKeyId'],
      secretAccessKey: process.env['AWSSecretKey'],
      bucket: 'costite-demos'
    }
  }
};
