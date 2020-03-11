(function($){
    $.fn.printSelector = function(){
        console.log("hello");
            var print_window = window.open();
            var divToPrint= document.getElementById('main').textContent;
            console.log(divToPrint);
            var newArray = [];
            // Make a container element for the list
            var listContainer = document.createElement("div");
            // Add it to the page
            document.getElementsByTagName("body")[0].appendChild(listContainer);
            // Make the list
            var listElement = document.createElement("ul");
            // Add it to the page
            listContainer.appendChild(listElement);
            // Set up a loop that goes through the items in listItems one at a time
            var numberOfListItems = newArray.length;
            function makeList() {
                for (var i = 0; i < numberOfListItems; ++i) {
            // create an item for each one
                var listItem = document.createElement("li");
            // Add the item text
                listItem.innerHTML = listData[i];
            // Add listItem to the listElement
                listElement.appendChild(listItem);
                }
                
            };
            makeList();
            newArray.push(divToPrint);
            $(print_window.document.write("List:")).css('font-size: 16px','color: black');
            print_window.document.write(newArray).css('font-size: 12px','color: black');
            print_window.print();
            print_window.close();

    }
 
})(jQuery);

