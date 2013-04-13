Ext.define('knowledge-wallet.view.QuestionPanel', {
	extend: 'Ext.Panel',
	xtype: 'qpanelcontainer',
	config:{
		question: "",
		answer: "",
		qid: 0
	},
	fullscreen: true,
	initialize : function(){
		this.add([{
			flex: 4,
			html: this.getQuestion()
		},{
			flex: 1,
			html: this.getAnswer()
		}]);
	}
});