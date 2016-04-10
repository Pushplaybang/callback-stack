/* eslint-disable */
Package.describe({
  name: 'pushplaybang:callback-stack',
  version: '0.0.2',
  summary: 'callback utility mixin',
  git: 'https://github.com/Pushplaybang/callback-stack',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('es5-shim');
  api.use('ecmascript');
  api.addFiles('callback-stack.js');
  api.export('CallbackStack');
});
