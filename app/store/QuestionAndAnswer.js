/**
 * The Q&A store. 
 */
Ext.define('knowledge-wallet.store.QuestionAndAnswer', {
    extend  : 'Ext.data.Store',
    config: {
        model: 'knowledge-wallet.model.QuestionAndAnswer',

        proxy: {
            type: 'jsonp',
            url: 'http://4jrx.localtunnel.com/users/1/qaitems'
        }
    }
});
