Ext.define('Blog.view.contacts.List', {
    extend: 'Ext.grid.Grid',

    xtype: 'contactslist',

    requires: [
        'Blog.view.contacts.ContactsController',
        'Blog.view.contacts.ContactsModel'
    ],

    viewModel: 'contacts',
    controller: 'contacts',

    bind: {
        title: '{title}',
        store: '{contacts}'
    },

    columns: [
        {
            width: 50,
            dataIndex: 'id',
            text: '#'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'phone',
            text: 'Phone'
        },
        {
            width: 150,
            dataIndex: 'email',
            text: 'Email'
        }
    ]
});