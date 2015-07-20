Ext.define('Blog.view.contacts.ContactsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contacts',

    requires: [
        'Blog.model.Contact'
    ],

    stores: {
        contacts: {
            model: 'Blog.model.Contact',
            autoLoad: true
        }
    },

    data: {
        title: 'Contacts'
    }
});