module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,svg,ico,html,png,js,txt,css,LICENSE}"
  ],
  "swDest": "build\\sw.js",
  //location of file
  "swSrc":"src/sw.js",
  //shows where to put precached files
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};