Ext.define('knowledge-wallet.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            nav: '#mainNav'
        }
    },

    addLogoutButton: function() {
        this.getNav().add({
            text: 'Logout'
        });
    }
});