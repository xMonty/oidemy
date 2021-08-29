/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
    @import "styles/_variables.scss";
    @import "styles/_mixins.scss";
    `
  }
}
