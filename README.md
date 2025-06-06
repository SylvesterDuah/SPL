# SpaceX Launch App

A simple React Native Expo app (TypeScript) that fetches and displays past SpaceX missions using the SpaceX GraphQL API.

## Features

* **Launch Overview**: Shows the 10 most recent launches with mission name, date, and image.
* **Launch Details**: Displays rocket name, up to 3 images, and an article link. Tap images to toggle favorites.
* **Favorites**: Managed via React Context API (in-memory; can be persisted with AsyncStorage).

## Prerequisites

* Node.js >=14 (LTS)
* npm or yarn
* Expo CLI (local via `npx expo`)
* Android or iOS emulator, or a physical device for testing

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/SylvesterDuah/SPL.git
   cd SPL
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the app:

   ```bash
   npx expo start
   ```

## Running on Web (Development Only)

> Note: The SpaceX API does not allow CORS by default, so web builds require a local proxy.

1. Install the CORS proxy:

   ```bash
   npm install --save-dev local-cors-proxy
   ```
2. Start the proxy (root domain):

   ```bash
   npx lcp --proxyUrl https://api.spacex.land --port 8011
   ```
3. Update `src/apollo/client.ts` URI to `http://localhost:8011/proxy/graphql`.
4. Run web build:

   ```bash
   npx expo start --web --clear
   ```

## Running on Mobile (Recommended)

```bash
# Android emulator
npx expo run:android

# iOS simulator (macOS only)
npx expo run:ios

# Or use tunnel for physical device
e npx expo start --tunnel
```

## Project Structure

```
/src
  /apollo
    client.ts         # Apollo Client setup
  /context
    FavoriteContext.tsx  # Context API for favorites
  /pages
    LaunchOverview.tsx   # Overview screen
    LaunchDetails.tsx    # Details screen
App.tsx                # Navigation and providers
babel.config.js        # Expo/Reanimated plugin
package.json
```

## Next Steps

* Persist favorites using AsyncStorage
* Add animations with React Native Reanimated
* Create a dedicated Favorites screen
* Write unit and integration tests

---

© 2025 Sylvester Duah
