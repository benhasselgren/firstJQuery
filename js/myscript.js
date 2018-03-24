//will assign css class .selection to the odd numbered table rows
 $(document).ready(function(){
    $("tr:odd").addClass("selection");
    $("tr:even").addClass("even");
    $("h2").addClass("underline");
    $("ul").addClass("border");
  });