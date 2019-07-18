# React Material Resume [![CircleCI](https://circleci.com/gh/Durgaprasad-Budhwani/React-Material-Resume.svg?style=svg)](https://circleci.com/gh/Durgaprasad-Budhwani/React-Material-Resume) [![codecov](https://codecov.io/gh/Durgaprasad-Budhwani/React-Material-Resume/branch/master/graph/badge.svg)](https://codecov.io/gh/Durgaprasad-Budhwani/React-Material-Resume)


A resume site build using [React](https://reactjs.org) and [Material-UI](https://material-ui.com/) that is deployed
on [GitHub Pages](https://pages.github.com/)

# Get Started
Clone this repository
```
 git clone https://github.com/Durgaprasad-Budhwani/React-Material-Resume.git
```
Install all npm packages
```
 yarn install
```
Test and view website locally
```
 yarn start
```

# Publishing to GitHub Pages
[GitHub Pages](https://pages.github.com/) will host this for free in your GitHub account.
The package requried for publishing to GitHub Pages has been installed in this project. 

To publish the site, just input the following code in the command line. 

```
$ npm run deploy
```

More info can be found [here](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)


# Live site
Take a look at the website here [here](https://durgaprasad-budhwani.com)

# Documentation

Components
----------

**src/App.js**

### 1. App




-----
**src/AppContainer.js**

### 1. AppContainer




-----
**src/components/common/bubble.js**

### 1. Bubble

##Bubble example - Ref - Education Component for more details
```
  <Bubble content={year}/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
content|string|yes||
classes|object|yes||
-----
**src/components/common/contact-info.js**

### 1. ContactInfo

##ContactInfo example - Ref - Map Component for more details
```
  <ContactInfo />
```   




-----
**src/components/common/link-to.js**

### 1. LinkTo

##LinkTo example - Ref - Contact Component for more details
```
  <SectionTitle title='Contact Me'/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
to|string|yes||
title|string|yes||
enableNavigationItemClass|bool|no|false|
offset|number|no|-120|
classes|object|yes||
-----
**src/components/common/section-title.js**

### 1. SectionTitle

##SectionTitle example - Ref - Header Component for more details
```
  <SectionTitle to="profile"
     title="About"
     enableNavigationItemClass={navigationItemClass}/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
title|string|yes||
-----
**src/components/common/social-icons.js**

### 1. SocialIcons




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
color|string|no|&lt;See the source code&gt;|
-----
**src/components/common/timeline-bar.js**

### 1. TimelineBar




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
barClass|string|yes||
-----
**src/components/content/about.js**

### 1. About




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/blog/blog.js**

### 1. Blog

##Blog example - Ref - About for more details
```
  <Blog md={6}
      key={index}
      xs={12}
      image={blog.image}
      title={blog.title}
      day={blog.day}
      month={blog.month}
      url={blog.url}
      />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
md|number|yes||
image|string|yes||
title|string|yes||
day|string|yes||
month|string|yes||
url|string|yes||
height||yes||
top||yes||
-----
**src/components/content/blog/index.js**

### 1. Blogs




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/contact-form/index.js**

### 1. ContactForm

##ContactForm example - Ref - About for more details
```
   <ContactForm />
```   




-----
**src/components/content/contact.js**

### 1. About




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/education/course.js**

### 1. Course

##Course example - Ref - About for more details
```
  <Course name={education.description}
      university={education.college}
      year={education.year}
      />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
year|string|yes||
name|string|yes||
university|string|yes||
title||yes||
-----
**src/components/content/education/index.js**

### 1. Educations




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/index.js**

### 1. Content




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/info/index.js**

### 1. Info




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/map/index.js**

### 1. MapContainer




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
center||no|&lt;See the source code&gt;|
zoom||no|11|
-----
**src/components/content/profile/index.js**

### 1. Profile




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/skills/index.js**

### 1. Skills




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/content/skills/skill-bar.js**

### 1. SkillBar

##SkillBar example - Ref - Skills for more details
```
  <SkillBar
      key={index}
      name={skill.name}
      completed={skill.completed}
      />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
name|string|yes||
completed|number|yes||
size|number|no|6|
color|enum|no|&lt;See the source code&gt;|
-----
**src/components/content/timeline/event.js**

### 1. Event

##Event example - Ref - Skills for more details
```
  <Event title={experience.title}
         company={experience.company}
         description={experience.description}
         year={experience.year}
  />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
year|string|yes||
company|string|yes||
title|string|yes||
description|string|yes||
-----
**src/components/content/timeline/index.js**

### 1. Experiences




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/footer/index.js**

### 1. Footer




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----
**src/components/header/index.js**

### 1. Header




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
-----




