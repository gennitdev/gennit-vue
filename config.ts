const config = {
    "auth0Url": import.meta.env.VITE_AUTH0_URL,
    "auth0Scope": import.meta.env.VITE_AUTH0_SCOPE,
    "auth0Audience": import.meta.env.VITE_AUTH0_AUDIENCE,
    "baseUrl": import.meta.env.VITE_BASE_URL,
    "domain": import.meta.env.VITE_AUTH0_DOMAIN,
    "clientId": import.meta.env.VITE_AUTH0_CLIENT_ID,
    "clientSecret": import.meta.env.VITE_AUTH0_CLIENT_SECRET,
    "callbackUrl": import.meta.env.VITE_AUTH0_CALLBACK_URL,
    "graphqlUrl": import.meta.env.VITE_GRAPHQL_URL,
    "googleMapsApiKey": import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    "environment": import.meta.env.VITE_ENVIRONMENT,
    "openGraphApiKey": import.meta.env.VITE_OPEN_GRAPH_API_KEY,
    "sentryDsn": import.meta.env.VITE_SENTRY_DSN,
    "sentryAuthToken": import.meta.env.VITE_SENTRY_AUTH_TOKEN,
    "googleCloudStorageBucket": import.meta.env.VITE_GOOGLE_CLOUD_STORAGE_BUCKET,
    "logoutUrl": import.meta.env.VITE_LOGOUT_URL,
    "openCageApiKey": import.meta.env.VITE_OPEN_CAGE_API_KEY,
    "lightgalleryLicenseKey": import.meta.env.VITE_LIGHTGALLERY_LICENSE_KEY,
    "auth0username": import.meta.env.VITE_AUTH0_USERNAME,
}

export default config;