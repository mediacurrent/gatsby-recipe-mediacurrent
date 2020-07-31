import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

// Import global styles.
import 'focus-visible';
import '../src/global/_global.scss';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context. We override it to empty functions (no-op),
// so gatsby link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash we need to set it as well.
global.__PATH_PREFIX__ = '';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In storybook it doesn't make sense to do an actual navigate, instead we want to log an action. Checkout the actions addon docs https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

// Enable the accessibility panel.
addDecorator(
  withKnobs({
    escapeHTML: false
  })
);
addDecorator(withA11y);
addDecorator(LocationDecorator);
