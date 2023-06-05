# Zoom Apps Collaborative Text Editor Sample

This Zoom App sample uses Typescript + Vue.js to build a collaborative text editor that lives right in your meeting!

## Prerequisites

1. [Node JS](https://nodejs.org/en/)
2. [Ngrok](https://ngrok.com/docs/getting-started)
3. [Zoom Account](https://support.zoom.us/hc/en-us/articles/207278726-Plan-Types-)
4. [Zoom App Credentials](#config:-app-credentials) (Instructions below)
    1. Client ID
    2. Client Secret
    3. Redirect URI

## Getting started

Open your terminal:

```bash
# Clone down this repository
git clone git@github.com:zoom/zoomapps-texteditor-vuejs.git

# navigate into the cloned project directory
cd zoomapps-texteditor-vuejs

# run NPM to install the app dependencies
npm install

# initialize your ngrok session
ngrok http 3000
```

### Create your Zoom App

In your web browser, navigate to [Zoom Developer Portal](https://developers.zoom.us/) and register/log into your
developer account.

Click the "Build App" button at the top and choose to "Zoom Apps" application.

1. Name your app
2. Choose whether to list your app on the marketplace or not
3. Click "Create"

For more information, you can follow [this guide](https://marketplace.zoom.us/docs/beta-docs/zoom-apps/createazoomapp)
check out  [this video series]() on how to create and configure these sample Zoom Apps.

### Config: App Credentials

In your terminal where you launched `ngrok`, find the `Forwarding` value and copy/paste that into the "Home URL" and "
Redirect URL for OAuth" fields.

```
Home URL:               https://xxxxx.ngrok.io
Redirect URL for OAuth: https://xxxxx.ngrok.io/auth
```

> NOTE: ngrok URLs under ngrok's Free plan are ephemeral, meaning they will only live for up to a couple hours at most, and will change every time you reinitialize the application. This will require you to update these fields every time you restart your ngrok service.

#### OAuth allow list

- `https://example.ngrok.io`

#### Domain allow list

- `appssdk.zoom.us`
- `ngrok.io`
- `signaling.yjs.dev`
- `y-webrtc-signaling-eu.herokuapp.com`
- `y-webrtc-signaling-us.herokuapp.com`

> NOTE: This sample application uses the public heroku signaling servers provided by the Y.js organization, as such any information your app synchronizes through their services is considered non-private. However you can create and host your own signaling server using the information for the y-webrtc library -- https://github.com/yjs/y-webrtc#signaling


### Config: Information

The following information is required to activate your application:

- Basic Information
    - App name
    - Short description
    - Long description (entering a short message here is fine for now)
- Developer Contact Information
    - Name
    - Email address

> NOTE: if you intend to publish your application on the Zoom Apps Marketplace, more information will be required in this section before submitting.

### Config: App Features

Under the Zoom App SDK section, click the `+ Add APIs` button and enable the following options from their respective
sections:

#### APIs

- `getRunningContext`
- `getUserContext`
- `getMeetingUUID`
- `connect`
- `postMessage`

#### Events:

- `onParticipantChange`
- `onConnect`
- `onMeeting`
- `onMessage`

### Zoom App Features

Enable `Collaborate mode`

### Scopes

Select the following OAuth scopes from the Scopes tab:

- `meeting:read`
- `meeting:write`
- `user:read`
- `zoomapp:inmeeting`

### Config `.env`

Open the `.env` file in your text editor and enter the following information from the App Credentials section you just
configured:

```ini
# Client ID for your Zoom App
ZOOM_CLIENT_ID=[app_client_id]

# Client Secret for your Zoom app
ZOOM_CLIENT_SECRET=[app_client_id]

# Redirect URI set for your app in the Zoom Marketplace
ZOOM_REDIRECT_URL=https://[xxxx-xx-xx-xxx-x].ngrok.io/auth
```

#### Zoom for Government

If you are a [Zoom for Government (ZfG)](https://www.zoomgov.com/) customer you can use the `ZOOM_HOST` variable to change
the base URL used for Zoom. This will allow you to adjust to the different Marketplace and API Base URLs used by ZfG
customers.

**Marketplace URL:** marketplace.*zoomgov.com*

**API Base URL:** api.*zoomgov.com*

## Start the App

### Development

Run the `dev` npm script to start in development mode using a Docker container.

```shell
npm run dev
```

The `dev` script will:

1. Watch Vue.js files and built to the `server/public/` folder
1. Watch Server files and build to the `dist/` folder
1. Start the application

### Production

When running your application in production no logs are sent to the console by default and the server is not restarted
on file changes.

We use the `NODE_ENV` environment variable here to tell the application to start in prodcution mode.

```shell
# Mac/Linux
NODE_ENV=production npm start

# Windows
set NODE_ENV=production && npm start
````

## Usage

To install the Zoom App, Navigate to the **Home Page URL** that you set in your browser and click the link to install.

After you authorize the app, Zoom will automatically open the app within the client.

## Contribution

Please send pull requests and issues to this project for any problems or suggestions that you have!

Make sure that you install packages locally to pass pre-commit git hooks.

### Keeping secrets secret

This application makes use of your Zoom App Client ID and Client Secret as well as a custom secret for signing session
cookies. During development, the application will read from the .env file. ;

In order to align with security best practices, this application does not read from the .env file in production mode.

This means you'll want to set environment variables on the hosting platform that you'
re using instead of within the .env file. This might include using a secret manager or a CI/CD pipeline.

> :warning: **Never commit your .env file to version control:** The file likely contains Zoom App Credentials and Session Secrets

### Code Style

This project uses [prettier](https://prettier.io/) and [eslint](https://eslint.org/) to enforce style and protect
against coding errors along with a pre-commit git hook(s) via [husky](https://typicode.github.io/husky/#/) to ensure
files pass checks prior to commit.

### Testing

At this time there are no e2e or unit tests.

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or
our [Developer Forum](https://devforum.zoom.us). Priority support is also available
with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
