window.onload = function () {
    let sliderList = document.getElementById("siteList");
    let firstSliderItem = sliderList.children[0];
    firstSliderItem.classList.add("site__item--active");

    let previewList = document.getElementById("previewList");
    let firstPreviewItem = previewList.children[0];
    firstPreviewItem.classList.add("preview__item--active");

    let vectorsContainer = document.getElementById("vectorsContainer");

    vectorsContainer.addEventListener("click", goGoNextOrPrevPage);

    //---------------------------------
    function goGoNextOrPrevPage() {
        let getActiveItemInSlider = document.getElementsByClassName(
            "site__item site__item--active",
        )[0];
        let list = sliderList.getElementsByClassName("site__item");
        let listAsArray = Array.prototype.slice.call(list);

        let index = getIdFromArrayByClassName(listAsArray, getActiveItemInSlider);

        if (event.target.id === "nextBtn" && index !== listAsArray.length - 1) {
            event.target.nextElementSibling.setAttribute("class", "vectors__btn");

            getActiveItemInSlider.setAttribute("class", "site__item");
            getActiveItemInSlider.nextElementSibling.classList.add("site__item--active");

            previewList.children[index].setAttribute("class", "preview__item");
            previewList.children[index].nextElementSibling.classList.add("preview__item--active");
        } else if (event.target.id === "backBtn" && index !== 0) {
            event.target.previousElementSibling.setAttribute(
                "class",
                "vectors__btn vectors__btn--next",
            );

            getActiveItemInSlider.setAttribute("class", "site__item");
            getActiveItemInSlider.previousElementSibling.classList.add("site__item--active");

            previewList.children[index].setAttribute("class", "preview__item");
            previewList.children[index].previousElementSibling.classList.add(
                "preview__item--active",
            );
        }

        let newActiveItemInSlider = document.getElementsByClassName(
            "site__item site__item--active",
        )[0];
        let newIndex = getIdFromArrayByClassName(listAsArray, newActiveItemInSlider);

        if (newIndex === listAsArray.length - 1) {
            event.target.classList.add("vectors__btn--not-go");
        } else if (newIndex === 0) {
            event.target.classList.add("vectors__btn--not-go");
        }
    }

    function getIdFromArrayByClassName(array, element) {
        let res = null;
        array.forEach(function (value, index) {
            if (value == element) {
                res = index;
            }
        });
        return res;
    }
};
