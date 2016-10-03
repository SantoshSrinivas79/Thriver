Template.inTheNews.helpers({
    lists: [{
        type: 'article', //accepts: generic, details, article, catalog
        paginate: 'true', //Default is false
        perPage: 10, //if paginate:true, how many before paginate
        style: 'stripes',
        items: function () {
            return Thriver.newsroom.collection.find({
                type: 'inTheNews',
                $or: Thriver.newsroom.search.get() instanceof RegExp ? [{
                    title: Thriver.newsroom.search.get() },{
                    publisher: Thriver.newsroom.search.get()
                }] : [{}]
            }, {
                limit: Thriver.newsroom.quantity.get(),
                sort: { date: -1 }
            });
        }
    }]
});

Template.actionAlerts.helpers({
    lists: [{
        type: 'article', //accepts: generic, details, article, catalog
        paginate: 'true', //Default is false
        perPage: 10, //if paginate:true, how many before paginate
        style: 'stripes',
        items: function () {
            return Thriver.newsroom.collection.find({
                type: 'actionAlert',
                $or: Thriver.newsroom.search.get() instanceof RegExp ? [{
                    title: Thriver.newsroom.search.get() },{
                    content: Thriver.newsroom.search.get()
                }] : [{}]
            }, {
                limit: Thriver.newsroom.quantity.get(),
                sort: { date: -1 }
            });
        }
    }]
});

Template.press.helpers({
    lists: [{
        type: 'article', //accepts: generic, details, article, catalog
        paginate: 'true', //Default is false
        perPage: 10, //if paginate:true, how many before paginate
        style: 'stripes',
        items: function () {
            var items = Thriver.newsroom.collection.find({
                type: 'pressRelease',
                $or: Thriver.newsroom.search.get() instanceof RegExp ? [{
                    title: Thriver.newsroom.search.get() },{
                    content: Thriver.newsroom.search.get()
                }] : [{}]
            }, {
                limit: Thriver.newsroom.quantity.get(),
                sort: { date: -1 }
            }).fetch();

            // Dynamically create URL
            for (let i = 0; i < items.length; ++i)
                items[i].url = '/press-release/' + Thriver.sections.generateId( items[i].title );
            
            return items;
        }
    }]
});

Template.newsletters.helpers({
    lists: [{
        type: 'article', //accepts: generic, details, article, catalog
        paginate: 'true', //Default is false
        perPage: 10, //if paginate:true, how many before paginate
        style: 'stripes',
        items: [{
            title: 'One Webinar',
            date: new Date('2016-01-01'), //This is temporary
            friendlyDate: '02/11/29',
            content: 'lorem ipsum.'
        },{
            title: 'One Webinar',
            date: new Date('2016-01-01'), //This is temporary
            friendlyDate: '02/11/29',
            content: 'lorem ipsum.'
        }],
    }]
});

Template.pressMediaKits.helpers({
    lists: [{
        type: 'article', //accepts: generic, details, article, catalog
        paginate: 'true', //Default is false
        perPage: 10, //if paginate:true, how many before paginate
        style: 'stripes',
        items: [{
            title: 'Press Kit (2015) (PDF)',
            date: new Date('2016-01-01'), //This is temporary
            friendlyDate: '02/11/29',
            icon: 'megaphone'
        },{
            title: 'Media Kit (2015) (PDF)',
            date: new Date('2016-01-01'), //This is temporary
            friendlyDate: '02/11/29',
            icon: 'camera'
        }],
    }]
});

Template.annualReports.helpers({
    lists: [{
        type: 'article', //accepts: generic, details, article, catalog
        paginate: 'true', //Default is false
        perPage: 10, //if paginate:true, how many before paginate
        style: 'stripes',
        items: [{
            title: 'Annual Report (2015)(PDF)',
            date: new Date('2016-01-01'), //This is temporary
            friendlyDate: '02/11/29',
            icon: 'graph'
        },{
            title: 'Annual Report (2014)(PDF)',
            date: new Date('2016-01-01'), //This is temporary
            friendlyDate: '02/11/29',
            icon: 'graph'
        }],
    }]
});
