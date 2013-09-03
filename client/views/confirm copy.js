Template.confirm.helpers({
    order: function(){
        return Orders.findOne(Session.get('order'));
    }

    });