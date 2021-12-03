const storiesGlob =
  '../../../packages/foo-bar/{src,stories}/**/*.stories.{js,jsx,ts,tsx}'; // No stories found
// '../../../packages/*/{src,stories}/**/*.stories.{js,jsx,ts,tsx}'; // Okay
// '../../../packages/foo-bar/src/**/*.stories.{js,jsx,ts,tsx}'; // Okay

console.log({
  storiesGlob,
});

module.exports = {
  stories: [storiesGlob],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};
