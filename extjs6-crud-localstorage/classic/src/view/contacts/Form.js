Ext.define('Blog.view.contacts.Form', {
    extend: 'Ext.window.Window',

    xtype: 'contactsform',

    requires: [
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    layout: 'fit',
    width: 350,
    closable: false,
    modal: true,

    bind: {
        title: '{windowTitle}'
    },

    items: [
        {
            xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',

            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                combineErrors: true,
                msgTarget: 'side',
                fieldCls: 'fixed' //fix for textfield text in Chrome
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
                    fieldLabel: 'Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: 'Phone',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    allowBlank: false
                }
            ]
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    text: 'Save',
                    iconCls: 'fa fa-floppy-o',
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    text: 'Cancel',
                    iconCls: 'fa fa-close',
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
});