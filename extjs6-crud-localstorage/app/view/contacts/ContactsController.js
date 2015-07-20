Ext.define('Blog.view.contacts.ContactsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts',

    requires: [
        'Blog.view.contacts.Form',
        'Blog.model.Contact'
    ],

    onAddClick: function(button, e, options){
        this.createDialog();
    },

    onEditClick: function(button, e, options){

        var me = this,
            records = me.getRecordsSelected();

        if(records[0]){
            me.createDialog(records[0]);
        }
    },

    onDeleteClick: function(button, e, options){

    },

    createDialog: function(record){

        var me = this,
            view = me.getView();

        me.isEdit = !!record;

        me.dialog = view.add({
            xtype: 'contactsform',
            viewModel: {
                data: {
                    windowTitle: record ? 'Edit: ' + record.get('name') : 'Add Contact'
                }
            }
        });

        if(record){
            me.dialog.down('form').loadRecord(record);
        }

        me.dialog.show();
    },

    getRecordsSelected: function(){
        return this.getView().getSelection();
    },

    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    onSave: function(button, e, options){
        var me = this,
            dialog = me.dialog,
            form = me.dialog.down('form'),
            isEdit = me.isEdit,
            record = form.getRecord(),
            values = form.getValues(),
            store = me.getView().getStore();

        if (form.isValid()) {
            if (isEdit) {
                record.set(values);
            }  else{
                record = Ext.create('Blog.model.Contact');
                record.set(values);
                record.setId(0);
                store.add(record);
            }
        }

        me.onCancel();
        store.sync();
    }
});