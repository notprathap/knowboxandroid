Ext.define('knowledge-wallet.view.Main', {
	extend: 'Ext.carousel.Carousel',
    xtype: 'main',
    config: {
	    direction: 'horizontal',
	    directionLock: true,
	    items: [
	        {
	            html: "First Item"
	        },
	        {
	            html: "Second Item"
	        },
	        {
	            html: "Third Item"
	        },
	        {
	            html: "Fourth Item"
	        }
	    ]
    }
});
