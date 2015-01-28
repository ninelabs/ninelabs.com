---
layout: styleguide
title: Overview
pid: style
weight: 1
---
<header>
  <hgroup>
    <h1>{{ site.name }} Style Guide</h1>
  </hgroup>
</header>

These styles are built on top of [Bootstrap](http://getbootstrap.com) using the excellent [Bootstrap Sass](https://github.com/twbs/bootstrap-sass) libraries installed via [Bower](http://bower.io).

The architecture is simple. The main styles are in [styles.scss](https://github.com/ninelabs/ninelabs.com/blob/master/_sass/styles.scss), which includes our own variables via [_variables.scss](https://github.com/ninelabs/ninelabs.com/blob/master/_sass/_variables.scss) which override the Bootstrap defaults.

```
_sass/
|-- _effects.scss
|-- _libs.scss
|-- _responsive.scss
|-- _variables.scss
`-- styles.scss
```

Then we simply include these files in `styles.scss` file like so:

```
@import 'variables','libs','responsive','effects';
```

*Note: the `_libs.scss` file is where Bootstrap and any other external libraries are included.*