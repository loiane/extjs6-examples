Ext.define('Blog.view.contacts.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'contactslist',

    requires: [
        'Blog.view.contacts.ContactsController',
        'Blog.view.contacts.ContactsModel',

        'Ext.selection.CheckboxModel'
    ],

    viewModel: 'contacts',
    controller: 'contacts',

    bind: {
        title: '{title}',
        store: '{contacts}'
    },

    selModel: {
        selType: 'checkboxmodel'
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
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    text: 'Add',
                    listeners: {
                        click: 'onAddClick'
                    }
                },
                {
                    text: 'Edit',
                    listeners: {
                        click: 'onEditClick'
                    }
                },
                {
                    text: 'Delete',
                    listeners: {
                        click: 'onDeleteClick'
                    }
                }
            ]
        }
    ]
});