

const tabsBtn = document.querySelectorAll(".catalog__tab");
const tabsItem = document.querySelectorAll(".catalog__content");

tabsBtn.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains("catalog__tab_active")){
            
            tabsBtn.forEach(function(item) {
                item.classList.remove('catalog__tab_active');
            });

            tabsItem.forEach(function(item) {
                item.classList.remove('catalog__content_active');
            });
            
            currentBtn.classList.add('catalog__tab_active');
            currentTab.classList.add('catalog__content_active');

        }

    });
}