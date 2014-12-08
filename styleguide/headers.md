---
layout: styleguide
title: Header Modules
weight: 3
---

# Header Modules

The basic structure of a Header module is simple. It requires a `<header>` element containing one `<hgroup>` element, which should contain at least one `<hX>` element (preferably an `<h1>` containing the Page Title accessed by `{% raw %}{{ page.title }}{% endraw %}`). In this case the `<header>` element extends `.row`, and `<hgroup>` extends `.col-sm-12`.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Basic Header Module Example</h3>
  </div>
  <div class="panel-body post">
    <header>
      <hgroup>
        <h1>Page Title</h1>
      </hgroup>
    </header>
  </div>
  <div class="panel-footer">
    {% highlight html %}
<header>
  <hgroup>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
  </hgroup>
</header>
    {% endhighlight %}
  </div>
</div>

They can also have a subheader using a `<h4>` element for extra info.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Basic Header Module with Subheader Example</h3>
  </div>
  <div class="panel-body post">
    <header>
      <hgroup>
        <h1>Page Title</h1>
        <h4>Supplimental information about the page or section goes here.</h4>
      </hgroup>
    </header>
  </div>
  <div class="panel-footer">
    {% highlight html %}
<header>
  <hgroup>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
    <h4>Supplimental information about the page or section goes here.</h4>
  </hgroup>
</header>
{% endhighlight %}
</div>
</div>


----

## Post Pages

Post pages add a publication date to the `<hgroup>` using a `<h5>` element.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Post Header Module Example</h3>
  </div>
  <div class="panel-body post">
    <header>
      <hgroup>
        <h5>October 2, 2014</h5>
        <h1>Page Title</h1>
      </hgroup>
    </header>
  </div>
  <div class="panel-footer">
    {% highlight html %}
<header>
  <hgroup>
    <h5>{{ page.date | date: "%B %d, %Y"}}</h5>
    <h1>{% raw %}{{ page.title }}{% endraw %}</h1>
  </hgroup>
</header>
{% endhighlight %}
  </div>
</div>

### Header Sass

Here's the corresponding Sass.

{% highlight scss %}
section header {
  @include make-row();
  border-bottom: 1px solid $brand-primary;
  margin-bottom: 1.5em;
  hgroup {
    @include make-sm-column(12);
    h1 { margin-top: 0; }
  }
}
{% endhighlight %}