# gatsby-recipe-mediacurrent

## Purpose

A tool for starting and maintaing a Gatsby project at Mediacurrent.
This should aid in the following:

- creating a project with Mediacurrent standards already in place
- allowing for projects to read from updates upstream for consistent best practices

## Areas of Impact

The Recipe aids in the following areas of a project:

- Basic project structure
- Common JS utilities
- ESLint
- Babel
- Prettier
- Sass-lint
- SVGs
- Storybook
- ENV Variables
- Jest test running
- Plop component generator

## Installation

To use this on a new project run:

`npx gatsby recipes https://raw.githubusercontent.com/mediacurrent/gatsby-recipe-mediacurrent/master/gatsby-recipe-mediacurrent.mdx --install`

## Updating a Project

If a project has already used this Recipe, and the Recipe has since been updated with a new feature or fix, the project can consume that update from upstream. To see what the update will do to the project, run it without the `--install` flag:

`npx gatsby recipes https://raw.githubusercontent.com/mediacurrent/gatsby-recipe-mediacurrent/master/gatsby-recipe-mediacurrent.mdx`

Updating is accomplished the same way as installing:

`npx gatsby recipes https://raw.githubusercontent.com/mediacurrent/gatsby-recipe-mediacurrent/master/gatsby-recipe-mediacurrent.mdx --install`

This will show a diff at each step for files that may need to change.
