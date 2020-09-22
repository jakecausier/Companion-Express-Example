# Uppy Companion Express server

A basic Uppy Companion server set up using Express. Packaged up from the example shown here: https://github.com/transloadit/uppy/tree/master/examples/uppy-with-companion

## Install it

First install npm dependencies

```bash
npm install
```

Then create a ```.env``` file to specify server configuration. An .env.example file is provided to give you a start with the basic variables required.

You can also modify the ```companion.config.js``` file to add new providers or change settings.

## Start it

```bash
npm run start
```

This will run Companion at the host and port you've specified.

## Modify it

The current code includes an additional header called X-User-Id to pass meta from the frontend Uppy instance to set as the prefix for filenames on Amazon S3. You can use this as an example to add more metadata or variables that need to be passed to your Companion config.