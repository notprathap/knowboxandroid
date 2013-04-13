Ext.define('knowledge-wallet.controller.Main', {
    extend: 'Ext.app.Controller',
    require: ['knowledge-wallet.store.QuestionAndAnswer',
              'knowledge-wallet.model.QuestionAndAnswer',
              'knowledge-wallet.view.QuestionPanel'],

    launch : function() {
    	var qastore = Ext.create('knowledge-wallet.store.QuestionAndAnswer');
    	qastore.load();
    	qastore.on('load', function(t) {
    		this.extractData(qastore);
    	}, this, {single: true});
    },
    
    extractData : function(store){
    	var count = store.getData().length;
    	questions = [];
    	
    	for (var i = 0; i < count; i++ ){
    		item = store.getData().items[i].data;
    		
    		qpanelContainer = Ext.create('knowledge-wallet.view.QuestionPanel',{
    			question: item.question,
    			answer: item.answer,
    			qid: item.id
    		});
    		questions.push(qpanelContainer);
    	}
    	
    	Ext.getCmp('qapanel').setItems(questions);
    }
});