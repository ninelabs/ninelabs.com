---
layout: default
title: Documents and Agreements
---
#Mumbo Jumbo
Legal documents we use for our client and employee/contractor relationships. These documents are supplied as a reference only.

  {% for post in docs %}
  <div class="post-excerpt-container">
    <div class="post-meta">
      <p>{{ post.date | date: "%D" }}</p>
    </div>
    <div class="post-excerpt">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div>{{ post.description }}</div>
    </div>
  </div>
  {% endfor %}
