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
#### Semantic HTML
Not to self - answer this:
> I've seen things saying "you should use semantic html" but have not been able to wrap my head around how to use it, what it does, why it's preferable to regular html, or how screenreader programs are interacting with it, for example. which is frustrating, becausse if i don't know what something actually does then i don't know how to implement it properly.
#### Alt text
## Operable
### Tabbing & focus
#### Focus styles

Like someone with a visual impairment using a screen reader, a sighted visitor that can't use a mouse or other pointing device will scroll the page with keyboard keys (or other assistive tech that emulates keyboard signals), and use the tab key to move between links, inputs and buttons.

If the focus styles aren't there (some should be, by default, but they can be removed), then there's no visible indication on which interactive element they have landed. A sighted person will likely not be using a screen reader that would otherwise announce the element to them.

The default focus style is a ring or rounded box around the focusable element. It's often blue, and made with CSS property `outline` - here's an example of focus styles on this site. Try it with the Tab key! Neither button does anything.

<button class="fake-focus" tabindex="-1">Fake-focus</button> &nbsp; <button>Focusable!</button>

[Sara Soueidan](https://www.sarasoueidan.com/)'s deep-dive article on [accessible focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) is so good if you want to know the very best way to style your own.

Before that, make sure you haven't removed `outline` anywhere in your CSS, so that the browsers can do the thing when they need to!

## Understandable
### Simple language
### Website 'flow'

## Robust
### Performance
### Cross-browser compatibility