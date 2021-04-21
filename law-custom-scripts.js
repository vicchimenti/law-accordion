<script> /** https://www.w3.org/TR/wai-aria-practices-1.1/#accordion **/
    $(document).ready(function () {

        //Adding Accessibility Controls
        $('.accordionItemList').on("click", function (event) {
            
            //Getting clicked element
            var clicked = event.target;

            //Focusing on accordion header if element is child of one
            $(clicked).closest(".accordionItemHeader").first().focus();

            //Prevent Default Action
          if(this.attr("href").size() > 0 && this.attr("href").charAt(0) != '#') //Added 03/19/18 in order to allow links inside accordions to be clickable
            event.preventDefault();
        });

        $('.accordionItemList').unbind('keydown');
        $('.accordionItemList').on("keydown", function (event) {

            //Get focused element
            var focused = document.activeElement;

            //Get key pressed
            var key = event.which.toString();

            //If child of header was toggled =
            if($(focused).closest(".accordionItemHeader")) {
                // 35 = End, 36 = Home, 38 = Up, 40 = Down, 13 = Enter, 32 = Space
                //If key matches one of our desired keys
                if(key.match(/35|36|38|40|13|32/)) {

                    //Focus on header of toggled element
                    $(focused).closest(".accordionItemHeader").first().focus();
                    focused = document.activeElement;

                    //Prevent Default Action (arrow key scrolling)
                    event.preventDefault();

                    switch(key){
                        // Focus on last accordion item header
                        case '35':
                            $(focused).closest(".accordionItemList").children('.accordionItem:last').first().children(".accordionItemHeader").first().focus();
                            break;
                        // Focus on first accordion item header
                        case '36':
                            $(focused).closest(".accordionItemList").children('.accordionItem:first').first().children(".accordionItemHeader").first().focus();
                            break;
                        // Focus on previous accordion item header
                        case '38':
                            $(focused).closest(".accordionItem").prev('.accordionItem').children(".accordionItemHeader").first().focus();
                            break;
                        // Focus on next accordion item header
                        case '40':
                            $(focused).closest(".accordionItem").next('.accordionItem').children(".accordionItemHeader").first().focus();
                            break;
                        // Expand or Close accordion
                        case '13':
                            $(focused).children(".accordionItemHeaderButton").first().click();
                            break;
                        // Expand or Close accordion
                        case '32':
                            $(focused).children(".accordionItemHeaderButton").first().click();
                            break;
                    }
                }
            }

        });
 
    });
</script>