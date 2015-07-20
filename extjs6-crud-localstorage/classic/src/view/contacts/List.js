Ext.define('Blog.view.contacts.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'contactslist',

    requires: [
        'Blog.view.contacts.ContactsController',
        'Blog.view.contacts.ContactsModel',
        'Blog.view.contacts.Form',

        'Ext.selection.CheckboxModel'
    ],

    viewModel: 'contacts',
    controller: 'contacts',

    iconCls: 'fa fa-users',

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
            width: 200,
            dataIndex: 'phone',
            text: 'Phone'
        },
        {
            width: 250,
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
                    iconCls: 'fa fa-plus',
                    listeners: {
                        click: 'onAddClick'
                    }
                },
                {
                    text: 'Edit',
                    iconCls: 'fa fa-pencil',
                    listeners: {
                        click: 'onEditClick'
                    }
                },
                {
                    text: 'Delete',
                    iconCls: 'fa fa-trash',
                    listeners: {
                        click: 'onDeleteClick'
                    }
                }
            ]
        }
    ]
});