if (Meteor.isClient) {
  var p = 0,
      c1 = 0,
      c2 = 0

  Template.parent.rendered = function () {
    console.log("Parent rendered", ++p, "times")
  }
  Template.parent.events({
    'click #btnChild1': function (evt) {
      var now = new Date()
    
      evt.preventDefault()
      Session.set('child1', now.toString())
    },
    'click #btnChild2': function (evt) {
      var now = new Date()
    
      evt.preventDefault()
      Session.set('child2', now.toString())
    }
  })

  Template.child1.rendered = function () {
    console.log("Child1 rendered", ++c1, "times")
  }
  Template.child1.helpers({
    name: function () {
      var myDependency = Session.get('child1')
      return 'Child 1'
    }
  })

  Template.child2.rendered = function () {
    console.log("Child2 rendered", ++c2, "times")
  }
  Template.child2.helpers({
    name: function () {
      var myDependency = Session.get('child2')
      return 'Child 2'
    }
  })
}
