const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Nikhil Vytla', // Navigation and Site Title
  siteTitleAlt: 'Nikhil Vytla', // Alternative Site title for SEO
  siteTitleShort: 'Nikhil Vytla', // short_name for manifest
  siteHeadline: 'Personal Website - Nikhil Vytla', // Headline for schema.org JSONLD
  siteUrl: 'https://lolz1243.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Website Created by Nikhil Vytla',
  author: 'Nikhil Vytla', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@nikhilxvytla', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
