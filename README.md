# personal-roam-website

[![Netlify Status](https://api.netlify.com/api/v1/badges/d14de6c8-e30f-4f3a-be01-703ca3ce2d74/deploy-status)](https://app.netlify.com/sites/fervent-raman-2f8c8d/deploys)

---

If you found this repo and want help building your own site with Roam Research and [generate-roam-site-action](https://github.com/dvargas92495/generate-roam-site-action), reach out to me at **mcschrader at crimson.ua.edu**


# Instructions
## Overview

I am using Roam Research to create my personal website. To make it happen, I closely relied on the process outlined by Rodrigo Franco in his [personal website](https://www.rodrigofranco.com/How_is_this_website_made.html) 

In summary:
1. Roam -> HTML w/ [generate-roam-site-action](https://github.com/dvargas92495/generate-roam-site-action)
  - Runs at a regular interval with Github Actions, commiting the changes to this repository
2. Static site is hosted on [Netlify](https://www.netlify.com/) 

## Step 1 - Setting up Roam Research
[generate-roam-site-action](https://github.com/dvargas92495/generate-roam-site-action) relies on a few settings & page names saved in the Roam Research Database. They are outlined the [generate-roam-site](https://github.com/dvargas92495/generate-roam-site). As a quick example, my [[roam/js/static-site]] page looks like this:
```
- Index
    - Website Homepage
- Filter
    - Tagged With
        - Blog Post
- Template
    - ```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="assets/css/reference.css"/>
    <title>Max's Notes</title>
</head>
<body>

<header class="header">
    <div class="container">
        <a class="logo" href="/">
            <img src="assets/logo.svg" alt="Max Schrader logo"/>
        </a>
        <nav class="nav">
            <ul class="list list--nav">
                <li class="item  item--nav">
                    <a href="Who_am_I.html">About</a>
                </li>
                <li class="item  item--nav  item--current">
                    <a href="/">Home</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<section class="main">
    <article data-page="${PAGE_NAME}">
        <div data-title="${PAGE_NAME}">
            <h2 data-title="${PAGE_NAME}">
                ${PAGE_NAME}
            </h2>
        </div>
        ${PAGE_CONTENT}
    </article>
  	<div id="references">
      <ul>
        ${REFERENCES}
      </ul>
    </div>
</section>

</body>
</html>```
- Reference Template
    - ```html
<li><a href="${LINK}">${REFERENCE}</a></li>```

```

Next, it is important to understand the per-page configuration, outlined [here](https://github.com/dvargas92495/generate-roam-site#per-page-configuration). As an example, here is a my **Personal Projects** page. Including [[Blog Post]] on the page means that it will be converted to HTML, per my **Filter** setting. 

![](/img/)
