Ext.define('Blog.view.contacts.ContactsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts',

    requires: [
        'Blog.view.contacts.Form'
    ],

    onAddClick: function(){
        this.createDialog(null);
    },

    onEditClick: function(){

        var me = this,
            records = me.getRecordsSelected();

        if(records[0]){
            me.createDialog(records[0]);
        }
    },

    onDeleteClick: function(){

    },

    createDialog: function(record){

        var me = this,
            view = me.getView();

        me.dialog = view.add({
            xtype: 'contactsform',
            viewModel: {
                data: {
                    title: (record === null) ? 'Edit: ' + record.get('name') : 'Add Contact'
                }
            }
        });

        me.dialog.show();
    },

    getRecordsSelected: function(){
        return this.getView().getSelection();
    }
});