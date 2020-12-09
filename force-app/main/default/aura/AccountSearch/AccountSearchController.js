({
  doInit: function (component, event, helper) {
    var searchTerm = component.get("v.searchTerm");
    helper.handleSearch(component, searchTerm);
  },
  onSearchTermChange: function (component, event, helper) {
    var searchTerm = component.get("v.searchTerm");
    helper.handleSearch(component, searchTerm);
  }
});
