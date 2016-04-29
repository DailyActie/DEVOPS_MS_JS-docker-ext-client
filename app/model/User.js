Ext.define('Client.model.User', {
    extend: 'Ext.data.Model',
    requires: ['Client.utils.Constants'],
    fields: [
        '_id',
        'first_name',
        'last_name',
        'email',
        {
            name: 'url',
            convert: function(value, record) {
                if(value == "" && record.get('_id')){
                        return Client.utils.Constants.LIVE_URL + '/users/' + record.get('_id');
                }
            },
            depends: ['_id']
        }
    ],
    schema: {}
}, function(m){
    m.prototype.schema.setProxy({
        type: 'ajax',
        url: Client.utils.Constants.LIVE_URL + '/users/?format=json',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    });
});
