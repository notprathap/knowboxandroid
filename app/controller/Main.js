Ext.define('knowledge-wallet.controller.Main', {
    extend: 'Ext.app.Controller',
    require: ['knowledge-wallet.store.QuestionAndAnswer',
              'knowledge-wallet.model.QuestionAndAnswer',
              'knowledge-wallet.view.QuestionPanel'],

    launch : function() {
    	//initialize store - Need to make it JsonP
    	var qastore = Ext.create('knowledge-wallet.store.QuestionAndAnswer');
    	qastore.load();
    	qastore.on('load', function(t) {
    		console.log(qastore.getData());
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
    		
//    		questions.push({
//                html: ["Q: "+item.question,
//                       "<br>A: "+item.answer].join("")});
    	}
    	
    	Ext.getCmp('qapanel').setItems(questions);
    }
});