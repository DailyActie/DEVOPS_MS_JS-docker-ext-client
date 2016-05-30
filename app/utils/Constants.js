Ext.define('Client.utils.Constants', {
    singleton: true,

    'LIVE_URL': window.location.protocol + "//" + window.location.hostname + ':8080',

    'TOKEN_PREFIX': 'JWT ',
    'DISABLE_TOKEN': false
});
