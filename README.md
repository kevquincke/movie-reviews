# Movie Reviews

# Description
Movie reviews is an app that consumes reviews of movies from the NY Times public API. You'll be able to search for a title, scroll through the results and see the full review of it.

## Demo: Android, iOS and Web

![demo](https://user-images.githubusercontent.com/35083337/163152492-34614a6f-e7e4-43a2-a511-6064d9604358.gif)

## Monorepo
This is a monorepo build using yarn workspaces in order to share codebase between the mobile and the web app.

The code for the mobile app can be found on `packages/app` and the code for the web app can be found on `packages/web`. \
There's code shared between the apps that can be found on `packages/shared`

The mobile app was created with `npx react-native init` and the web app was created with `next`.

## Getting started

1. Clone this repo
2. Install dependencies: `yarn` on the root folder
3. Install pods: inside `packages/app/ios` do `pod install`
4. Get a NY Times developer api key and put in `packages/shared/api/nyTimesSearchAPI.js` on line 11 where it says `your-api-key-here`

## Commands for mobile

1. **Start the mobile app**: navigate to the app folder inside `packages/app` and `yarn android` or `yarn ios`
2. **Start metro bundler**: `yarn start`
3. **That's it for mobile!** you should be up and running

## Commands for web

1. Go to [this link](https://movie-reviews-2nnxof6vb-kevquincke.vercel.app/) and test the app
2. **(Optionally) Start the web app**: navigate to the web folder inside `packages/web` and `yarn dev`
3. **That's it for web!** you should be up and running

## Troubleshooting

1. If running into any network issue on iOS make sure you have Network inspection enabled from the React Native Debugger app.
2. If running into any issue with Android command, you can run it from Android Studio.
