---
title: Guide
layout: whimsica11yLayout.html
---

# A Whimsical Guide to the Guidelines
More coming soon...

## Perceivable
### Visual
#### Responsive & zoomable
#### Colors & contrasts
### Audible & Tactile
#### Screen-readable

## Operable
### Tabbing & focus
#### Focus styles

Like someone with a visual impairment using a screen reader, a sighted visitor that can't use a mouse or other pointing device will scroll the page with keyboard keys (or other assistive tech that emulates keyboard signals), and use the tab key to move between links, inputs and buttons.

If the focus styles aren't there (some should be, by default, but they can be removed), then there's no visible indication on which interactive element they have landed. A sighted person will likely not be using a screen reader that would otherwise announce the element to them.

The default focus style is a ring or rounded box around the focusable element. It's often blue, and made with CSS property `outline:`

[Sara Soueidan](https://www.sarasoueidan.com/)'s deep-dive article on [accessible focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) is so good if you want to know the very best way to style your own.

Otherwise, the best bet is to make sure you haven't removed `outline:` anywhere in your CSS, so that the browsers can do the thing when they need to!

## Understandable
### Simple language
### Website 'flow'

## Robust
### Performance
### Cross-browser compatibility