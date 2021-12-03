const path = require('path');

const rootDir = path.resolve(__dirname, '../../..');
const storiesGlob = path.join(
  rootDir,
  'packages/foo-bar/{src,stories}/**/*.stories.{js,jsx,ts,tsx}', // No stories found
  // 'packages/foo-bar/@(src|stories)/**/*.stories.@(js|jsx|ts|tsx)', // No stories found
  // 'packages/*/{src,stories}/**/*.stories.{js,jsx,ts,tsx}', // Okay
  // 'packages/foo-bar/src/**/*.stories.{js,jsx,ts,tsx}', // Okay
);

console.log({
  rootDir,
  storiesGlob,
});

module.exports = {
  stories: [storiesGlob],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};
