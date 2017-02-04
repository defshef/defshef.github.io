The (def shef) Website
======================

Please feel free to submit fixes and improvements via pull requests

Announcing Meetups
------------------

To announce a meetup

  1. Add the details to `index.html`
  2. Create an event on [Open Tech Calendar](https://opentechcalendar.co.uk/group/235-def-shef)
  3. Post the details to the [Mailing List](https://groups.google.com/forum/#!forum/def-shef)
  4. Schedule a bunch of tweets between now and the meetup via buffer.

Building
--------

The SASS on this website is built via grunt.

The following commands will install grunt and this project's dependencies. In the project root directory:

    curl -L https://github.com/zurb/foundation/archive/bea8ac314a88da805802f27603001aca4dd93cc7.tar.gz | tar zx
    ln -s foundation-sites-bea8* foundation
    npm install grunt-cli
    npm install

You can then build and run the website via

    grunt

This will build the SASS, start a dev server at localhost:8888, and rebuild the
SASS after every change
