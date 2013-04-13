Ext.define('knowledge-wallet.view.QuestionPanel', {
	extend: 'Ext.Panel',
	config:{
		question: "",
		answer: "",
		qid: 0
	},
	fullscreen: true,
	initialize : function(){
		this.add({
			xtype: 'container',
			layout: 'vbox',
			width: '100%',
			height: '100%',
			items: [{
				flex: 4,
				html: this.getQuestion()
			},{
				flex: 1,
				html: this.getAnswer()
			}]
		});
	}
});