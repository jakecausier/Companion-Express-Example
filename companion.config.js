module.exports = {
  providerOptions: {
    s3: {
      getKey: (req, filename, metadata) => {
        if (!metadata.user_id) {
          throw new Error('No User ID passed in request')
        }
        return `${metadata.user_id}/${filename}`
      },
      key: process.env.AWS_KEY,
      secret: process.env.AWS_SECRET,
      bucket: process.env.AWS_BUCKET,
      region: process.env.AWS_REGION,
      useAccelerateEndpoint: false,
    }
  },
  server: {
    host: process.env.COMPANION_HOST || 'localhost:3020',
    protocol: process.env.COMPANION_PROTOCOL || 'http',
  },
  sendSelfEndpoint: process.env.COMPANION_SELF_ENDPOINT || 'localhost:3020',
  filePath: process.env.COMPANION_UPLOAD_DIR || './uploads',
  secret: process.env.COMPANION_SECRET,
  debug: process.env.DEBUG || false
}