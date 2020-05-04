$(function(){
    $("#ToggleNavigation").click(function(){
      console.log("Toggle Navigation");
      $("#collapsable-nav").slideToggle(3);
    });
});