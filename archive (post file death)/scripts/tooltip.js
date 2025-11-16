/*the original script is by theabsoluterealm.com, but i may have modified it idk lol. to use it, youd have to 
have a class called tooltip and at least have these declarations
  visibility:hidden;
  position:absolute;
  z-index:99;
  opacity:0;
  adding a background to that is reccommended. adjust z-index as needed.
  
  inside of any html tag, insert onmouseover="Tip(event, 'text here')" onmouseout="UnTip()"
  be sure to ONlY modify 'text here' keep the quotes, otherwise it wont/shouldnt work.
  */

        var tooltip;
        var hideTimeout;
        var showTimeout;
        var isTooltipActive = false;

        function createTooltipIfNotExist() {
          if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            document.body.appendChild(tooltip);
          }
        }

        function updateTooltipPosition(event) {
          var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
          var scrollY = window.pageYOffset || document.documentElement.scrollTop;
          tooltip.style.left = event.clientX + scrollX + 15 + "px";
          tooltip.style.top = event.clientY + scrollY + 15 + "px";
        }

        function Tip(event, content) {
          clearTimeout(hideTimeout);
          clearTimeout(showTimeout);
          isTooltipActive = true;

          showTimeout = setTimeout(function() {
            if (isTooltipActive) {
              createTooltipIfNotExist();
              tooltip.innerHTML = content;
              updateTooltipPosition(event);

              tooltip.style.visibility = "visible";
              tooltip.style.opacity = "1";
            }
          },
          0);

          event.target.addEventListener("mousemove", updateTooltipPosition);
          event.target.addEventListener("mouseout", UnTip);
        }

        function UnTip() {
          clearTimeout(showTimeout);
          isTooltipActive = false;
          tooltip.style.opacity = "0";
          hideTimeout = setTimeout(function() {
            if (!isTooltipActive) {
              tooltip.style.visibility = "hidden";
            }
          },
          0);
        }

        document.addEventListener("DOMContentLoaded",
        function() {
          createTooltipIfNotExist();
        });
