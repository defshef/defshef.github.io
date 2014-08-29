The (def shef) Website
======================

Please feel free to submit fixes and improvements via pull requests

Building
--------

The SASS on this website is built via grunt.

The following commands will install grunt and this project's dependencies

    git clone https://github.com/zurb/foundation.git
    cd foundation && git checkout bea8ac314 && cd -
    npm install -g grunt-cli
    npm install

You can then build and run the website via

    grunt

This will build the SASS, start a dev server at localhost:8888, and rebuild the
SASS after every change
