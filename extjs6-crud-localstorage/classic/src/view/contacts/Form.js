Ext.define('Blog.view.contacts.Form', {
    extend: 'Ext.window.Window',

    xtype: 'contactsform',

    requires: [
        'Ext.layout.container.Fit',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    title: 'Edit Contact',
    layout: 'fit',
    autoShow: true,
    width: 300,

    items: [
        {
            xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',

            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                allowBlank: false,
                combineErrors: true,
                msgTarget: 'side'
            },

            items: [
                {
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: 'id',
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Name'
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: 'Phone'
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email'
                }
            ]
        }
    ]
});