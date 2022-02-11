# travel-from-ukraine
Google map with visa-free countries for ukrainians.

Uses data from [Ministry of Foreign Affairs of Ukraine](http://mfa.gov.ua/ua/consular-affairs/travel-advice/entering-foreign-countries).

## Install and run

### Local development

* you should have [bower](https://bower.io/#install-bower) installed (requires node.js, npm and git)
* run `bower install` to install dependencies
* run `python -m SimpleHTTPServer 7777` to start the server
* open [localhost:7777](http://localhost:7777/)

### Production

The service is deployed to [Github Pages](https://docs.github.com/en/pages) from [gh-pages](https://github.com/s0ph1e/travel-from-ukraine/tree/gh-pages) branch that contains installed bower dependencies. 

#### How to deploy changes from master

Currently the process is manual.
* merge `master` branch to `gh-pages`:
    * `git checkout gh-pages`
    * `git merge master`  
* if dependencies were changed - install & commit them:
    * `bower install`
    * `git add bower_components`
    * `git commit -m "Update bower dependencies"`
* push changes to `gh-pages`:
    * `git push origin gh-pages`

