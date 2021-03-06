Package.describe({
    name   : 'anttr:restivus',
    summary: 'Create authenticated REST APIs in Meteor 0.9+ via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
    version: '0.1.0',
    git    : 'https://github.com/anttr/meteor-restivus.git',
});

Package.onUse(function (api) {
    // Minimum Meteor version
    api.versionsFrom('METEOR@0.9.0');

    // Meteor dependencies
    api.use('check');
    api.use('underscore');
    api.use('accounts-password@1.3.3');
    api.use('simple:json-routes@2.1.0');

    api.addFiles('lib/auth.js', 'server');
    api.addFiles('lib/iron-router-error-to-response.js', 'server');
    api.addFiles('lib/route.js', 'server');
    api.addFiles('lib/restivus.js', 'server');

    // Exports
    api.export('Restivus', 'server');
});

Package.onTest(function (api) {
    // Meteor dependencies
    api.use('practicalmeteor:munit');
    api.use('test-helpers');
    api.use('anttr:restivus');
    api.use('http');
    api.use('underscore');
    api.use('accounts-base');
    api.use('accounts-password');
    api.use('mongo');
    api.use('simple:json-routes@2.1.0');

    api.addFiles('lib/route.js', 'server');
    api.addFiles('test/api_tests.js', 'server');
    api.addFiles('test/route_unit_tests.js', 'server');
    api.addFiles('test/authentication_tests.js', 'server');
    api.addFiles('test/user_hook_tests.js', 'server');
});
