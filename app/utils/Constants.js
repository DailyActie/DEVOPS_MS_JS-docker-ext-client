Ext.define('Client.utils.Constants', {
    singleton: true,

    'LIVE_URL': window.location.protocol + "//" + window.location.host + ':9000',

    'TOKEN_PREFIX': 'JWT',
    'DISABLE_TOKEN': false
});
