if (Meteor.isClient) {

    Template.modalwindow.events({
	'click button': function () {
	    Modal.show('exampleModal')
	}
    });

}
