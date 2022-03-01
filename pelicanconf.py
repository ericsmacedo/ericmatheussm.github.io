#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Eric Macedo'
SITENAME = "Eric's blog"
SITEURL = ''

PATH = 'content'
STATIC_PATHS = ['images', 'extra/CNAME']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},}

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'en'

THEME = "pelican-themes/elegant"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL_PROFILE_LABEL = u'Stay in Touch'
SOCIAL = (
        ('LinkedIn', 'https://www.linkedin.com/in/matheusericsm/'),
        ('Instagram','https://www.instagram.com/ericmatheussm_/'),
        ('Email','contact@ericmacedo.com'))

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Landing pages
LANDING_PAGE_TITLE = "Sharing what I learn and love"# with the world"

# footer
HOSTED_ON = {
    "name": "GitHub Pages",
    "url":"https://pages.github.com"
    }

# enabling search
PLUGIN_PATHS = ['plugins']
PLUGINS = ['tipue_search','neighbors', 'ipynb.markup', 'render_math']
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'archives', 'search']

# jupyter notebooks
IGNORE_FILES = [".ipynb_checkpoints"]
