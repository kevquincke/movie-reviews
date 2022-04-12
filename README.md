# Movie Reviews

# Description
Movie reviews is an app that consumes reviews of movies from the NY Times public API. You'll be able to search for a title, scroll through the results and see the detail of one particular review.

## Monorepo
This is a monorepo build using yarn workspaces in order to share codebase between the mobile and the web app.

The code for the mobile app can be found on `packages/app` and the code for the web app can be found on `packages/web`. \
There's code shared between the apps that can be found on `packages/shared`

The mobile app was created with `npx react-native init` and the web app was created with `next`.

## Getting started

1. Install dependencies: `yarn` on the root folder
2. Install pods: inside `packages/app/ios` do `pod install`

## Commands for mobile

1. **Start the mobile app**: navigate to the app folder inside `packages/app` and `yarn android` or `yarn ios`
2. **Start metro bundler**: `yarn start`
3. **That's it for mobile!** you should be up and running

## Commands for web

1. **Start the web app**: navigate to the web folder inside `packages/web` and `yarn dev`
2. **That's it for web!** you should be up and running
