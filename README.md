# 🥞 Salad UIkit

[![Version](https://img.shields.io/npm/v/@saladswap/uikit)](https://www.npmjs.com/package/@saladswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@saladswap/uikit)](https://www.npmjs.com/package/@saladswap/uikit)

Salad UIkit is a set of React components and hooks used to build pages on Salad's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @saladswap/uikit`

## Setup

### Theme

Before using Salad UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@saladswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@saladswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://saladswap.github.io/salad-uikit/)
