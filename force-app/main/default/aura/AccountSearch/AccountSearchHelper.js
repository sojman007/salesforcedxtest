({
  handleSearch: function (component, searchTerm) {
    // get controller action , set params and  write the callback on the action before enqueueing the action
    var actionFromController = component.get("c.searchAccounts");

    actionFromController.setParams({
      searchTerm: searchTerm
    });

    actionFromController.setCallback(this, function (response) {
      var event = $A.get("e.c.AccountsLoaded");
      event.setParams({
        accounts: response.getReturnValue()
      });
      event.fire();
    });
    $A.enqueueAction(actionFromController);
  }
});
