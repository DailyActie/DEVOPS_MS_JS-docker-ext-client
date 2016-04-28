Ext.define('Client.view.users.UsersControllerShared', {
    extend: 'Ext.app.ViewController',

    onAdd: function(btn){
        var me = this;
        me.createForm("Add User");
    },

    onDelete: function(grid, rowIndex, colIndex, item, event, record){
        var me = this;
        me.onRemove(record);
    },

    onEdit: function(rowModel, rec){
        var me = this;
        me.createForm("Edit User", rec);
    },

    onSubmit: function() {
        var me = this,
          formpanel = me.getView().down('form'),
          form = formpanel.getForm(),
          values = form.getValues(),
          url = values.url,
          method = "",
          successMsg = "";

        if(url){
            url  = url;
            method = 'PUT';
            successMsg = " is modified.";
        } else {
            url  = '/users/';
            //<debug>
            url  = 'http://localhost:8080/users/';
            //</debug>
            method = 'POST';
            successMsg = " was created.";
        }

        if (form.isValid()) {
            var token = null;
            if(typeof(Storage) !== "undefined") {
                token = localStorage.getItem("token");
            }

            if(!token) Ext.Msg.alert('Oops', "You will need to be logged in.");

            Ext.Ajax.request({
                headers: {
                    "Authorization": token
                },
                params: values,
                method: method,
                url: url,
                success: function(response){
                    var result = Ext.decode(response.responseText);
                    Ext.Msg.alert('Alright!', "User " + result.username + successMsg);
                    Ext.getStore('Users').load();
                    form.reset();
                    me.getView().destroy();
                },
                failure: function(response){
                    var result = Ext.decode(response.responseText);
                    var msg = "";
                    for(error in result){
                        msg+= error + ": " +result[error]+ " <br>";
                    }
                    Ext.Msg.alert('Oops!', msg);
                }
            });
        } else {
            Ext.Msg.alert('Oops', "Something went wrong.");
        }
    },
    onRemove: function(rec) {
        var me = this;

        console.log(rec);

        var token = null;
        if(typeof(Storage) !== "undefined") {
            token = localStorage.getItem("token");
        }

        if(!token) Ext.Msg.alert('Oops', "You will need to be logged in.");

        Ext.Ajax.request({
            headers: {
                "Authorization": token
            },
            method: 'DELETE',
            url: rec.get('url'),
            success: function(response){
                Ext.Msg.alert('Alright!', "User was removed.");
                Ext.getStore('Users').load();
            },
            failure: function(response){
                var result = Ext.decode(response.responseText);
                var msg = "";
                for(error in result){
                    msg+= error + ": " +result[error]+ " <br>";
                }
                Ext.Msg.alert('Oops!', msg);
            }
        });
    }

});
