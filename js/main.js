$(".calculator-date").datepicker({});
(function (factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["../widgets/datepicker"], factory);
    } else {
        // Browser globals
        factory(jQuery.datepicker);
    }
})(function (datepicker) {
    "use strict";

    datepicker.regional.ru = {
        closeText: "Закрыть",
        prevText: "Пред",
        nextText: "След",
        currentText: "Сегодня",
        monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ],
        monthNamesShort: [
            "Янв",
            "Фев",
            "Мар",
            "Апр",
            "Май",
            "Июн",
            "Июл",
            "Авг",
            "Сен",
            "Окт",
            "Ноя",
            "Дек",
        ],
        dayNames: [
            "воскресенье",
            "понедельник",
            "вторник",
            "среда",
            "четверг",
            "пятница",
            "суббота",
        ],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
    };
    datepicker.setDefaults(datepicker.regional.ru);

    return datepicker.regional.ru;
});

// header
const burgerCloseBtn = document.querySelector(".search-close");
const haderSearchContainer = document.querySelector(".header");
const burgerButton = document.querySelector(".header__burger");

burgerButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("body").classList.add("burger");
});

burgerCloseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("body").classList.remove("burger");
});

const navHideLinks = $(".slide a");

navHideLinks.on("click", (event) => {
    event.preventDefault();
    if (!$(event.target).parent().hasClass("opened")) {
        $(event.target).parent().addClass("opened");
        $(event.target).next().slideDown();
    } else {
        $(event.target).parent().removeClass("opened");
        $(event.target).next().slideUp();
    }
});

// select

const selects = document.querySelectorAll(".select");
selects.forEach((el) => {
    const choices = new Choices(el, {
        searchEnabled: false,
    });
});

// range-input
const maxRange = document.getElementById("range-slider").getAttribute("max");
const rangeValue = document.querySelector(".range-slider__container .value");
rangeValue.textContent = 1;
document.getElementById("range-slider").addEventListener("input", function () {
    document.querySelector(".range-slider__progress").style.width =
        Math.ceil(100 / ((maxRange - 1) / (this.value - 1))) + "%";
    console.log(this.value);
    console.log(Math.ceil(100 / (maxRange / this.value)));
    rangeValue.textContent = this.value;
});

// sliders

const partnerSliderData = {
    slidesPerView: "auto",
    spaceBetween: 10,
};

const sliderPartnersInsurance = new Swiper(
    '[data-type="partners-1"]',
    partnerSliderData
);
const sliderPartnersBanks = new Swiper(
    '[data-type="partners-2"]',
    partnerSliderData
);

document.addEventListener("DOMContentLoaded", () => {
    if (window.screen.width < 991) {
        const typeButtonsSlider = new Swiper(".calculator__nav", {
            slidesPerView: "auto",
            slidesPerGroup: 1,
            spaceBetween: 5,
            watchSlidesProgress: true,
            freeMode: {
                momentum: false,
            },
        });

        const newsNavSlider = new Swiper(".news__nav", {
            slidesPerView: "auto",
            slidesPerGroup: 1,
            spaceBetween: 10,
            watchSlidesProgress: true,
            // loop: true
        });

        var reviewSlider = new Swiper(".reviews__slider", {
            slidesPerView: "auto",
            spaceBetween: 10,
            scrollbar: {
                el: ".reviews__slider-scrollbar",
                draggable: true,
            },
        });

        const aboutSlider = new Swiper(".about__info", {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: {
                el: ".about__info-pagination",
                type: "bullets",
                clickable: true,
            },
        });

        const offersSlider = new Swiper(".offers__list", {
            slidesPerView: "auto",
            slidesPerGroup: 1,
            spaceBetween: 30,
            scrollbar: {
                el: ".offers__list-scrollbar",
                draggable: true,
            },
        });

        const heroTurnsSlider = new Swiper(".hero__turns", {
            slidesPerView: "auto",
            spaceBetween: 10,
            centeredSlides: true,
            breackpoints: {
                320: {
                    initialSlide: 0,
                },
                500: {
                    initialSlide: 1,
                },
            },
        });

        const newsSlider = new Swiper(".news__slider", {
            slidesPerView: "auto",
            spaceBetween: 10,
            freeMode: {
                momentum: false,
            },
            scrollbar: {
                el: ".news__slider-scrollbar",
                draggable: true,
            },
        });

        const statSlider = new Swiper(".about__stat", {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            pagination: {
                el: ".about__stat-pagination",
                type: "bullets",
                clickable: true,
            },
        });

        if (window.screen.width < 765) {
            const advantegesSlider = new Swiper(".hero__advantages", {
                slidesPerView: 1,
                centeredSlides: true,
                pagination: {
                    el: ".hero__advantages-pagination",
                    type: "bullets",
                    clickable: true,
                },
            });
        }
    } else {
        AOS.init();
    }

    const reviewTextContainer = document.querySelectorAll(
        ".reviews__slide-text"
    );

    if (reviewSlider) {
        reviewSlider.on("slideChange", () => {
            reviewTextContainer.forEach((element) =>
                element.childNodes[1].classList.remove("opened")
            );
        });
    }
    const incuranceTypePages = document.querySelectorAll(".calculator__type");
    const incuranceTypeWrapper = document.querySelector(
        ".calculator__nav-wrapper"
    );
    const incuranceTypePagesButtons =
        document.querySelectorAll(".calculator__link");

    const toggleIncurenceType = (event) => {
        if (
            event.target.parentElement.classList.contains("calculator__link") ||
            event.target == incuranceTypePagesButtons
        ) {
            event.preventDefault();
            let insuranceType = event.target.parentElement.getAttribute("id");
            incuranceTypePagesButtons.forEach((element) =>
                element.classList.remove("active")
            );
            incuranceTypePages.forEach((element) =>
                element.classList.remove("active")
            );
            document
                .querySelector(".calculator__type." + insuranceType)
                .classList.add("active");
            event.target.parentElement.classList.add("active");
        }
    };

    document.addEventListener("click", toggleIncurenceType);
    document.addEventListener("click", toggleImage);
});

// partnersSliders

const partnersBtn = document.querySelectorAll(".partners__btn");
const partnersInsirance = [
    document.getElementById("partners-1"),
    document.querySelector('[data-type="partners-1"]'),
];
const partnersBanks = [
    document.getElementById("partners-2"),
    document.querySelector('[data-type="partners-2"]'),
];

partnersBtn.forEach((element) =>
    element.addEventListener("click", (event) => {
        event.preventDefault();
        let partnerButtonId = event.target.getAttribute("id");

        if (partnerButtonId == "partners-1") {
            partnersBanks.forEach((el) => el.classList.remove("active"));
            partnersInsirance.forEach((el) => el.classList.add("active"));
        } else {
            partnersInsirance.forEach((el) => el.classList.remove("active"));
            partnersBanks.forEach((el) => el.classList.add("active"));
        }
    })
);

//personal area toggle page

const personalAreaButtons = document.querySelector(
    ".personal-area__content-buttons"
);
const personalAreaButtonFirst = document.getElementById("personal-area-1");
const personalAreaButtonSecond = document.getElementById("personal-area-2");
const personalAreaBoick = document.querySelector(".personal-area__content");

personalAreaButtons.addEventListener("click", (event) => {
    if (
        event.target === personalAreaButtonFirst ||
        personalAreaButtonFirst.contains(event.target)
    ) {
        event.preventDefault();
        document.getElementById("personal-area-2").classList.remove("active");
        document.getElementById("personal-area-1").classList.add("active");
        personalAreaBoick.classList.add("personal-area-1");
        personalAreaBoick.classList.remove("personal-area-2");
    } else if (
        event.target === personalAreaButtonSecond ||
        personalAreaButtonSecond.contains(event.target)
    ) {
        event.preventDefault();
        document.getElementById("personal-area-1").classList.remove("active");
        document.getElementById("personal-area-2").classList.add("active");
        personalAreaBoick.classList.remove("personal-area-1");
        personalAreaBoick.classList.add("personal-area-2");
    }
});

// calculator toggle img

const carImages = document.querySelectorAll(".car-image");
const bikeImages = document.querySelectorAll(".bike-image");

const checkActiveType = () => {
    for (let i = 0; i < incuranceTypePages.length; i++) {
        if (incuranceTypePages[i].classList.contains("active")) {
            return incuranceTypePages[i].getAttribute("data-type");
        }
    }
};

// reviews

document.addEventListener("DOMContentLoaded", () => {
    const reviewTextContainer = document.querySelectorAll(
        ".reviews__slide-text"
    );

    reviewTextContainer.forEach((element) => {
        if (element.childNodes[1].scrollHeight >= 240) {
            element.childNodes[1].classList.add("hidden");

            let linkSample = document.createElement("a");
            linkSample.appendChild(document.createTextNode("Показать все..."));
            element.appendChild(linkSample).setAttribute("href", "");
            let links = document.querySelectorAll(".reviews__slide-text a");
            links.forEach((link) =>
                link.classList.add("reviews__slide-button")
            );
        }
    });

    const reviewsButtons = document.querySelectorAll(".reviews__slide-button");

    reviewsButtons.forEach((el) =>
        el.addEventListener("click", (event) => {
            let target = event.target;
            event.preventDefault();
            target.previousElementSibling.classList.toggle("opened");
            target.classList.toggle("opened");
            if (target.classList.contains("opened")) {
                target.textContent = "Скрыть";
            } else {
                target.textContent = "Показать все...";
            }
        })
    );
});

// news

const newsNavButttons = document.querySelectorAll(".news__nav-buttons a");

newsNavButttons.forEach((element) =>
    element.addEventListener("click", (event) => {
        event.preventDefault();
        newsNavButttons.forEach((element) =>
            element.classList.remove("active")
        );
        event.target.classList.add("active");
    })
);

// calculator
const incuranceTypePages = document.querySelectorAll(".calculator__type");

const toggleImage = (event) => {
    if (
        event.target.parentElement.classList.contains("calculator__form-radio")
    ) {
        let insuranceImageType =
            event.target.parentElement.getAttribute("data-type");
        let incuranceTypeActive = checkActiveType();
        if (
            incuranceTypeActive == "type_1" ||
            incuranceTypeActive == "type_2"
        ) {
            if (document.getElementById(`car-` + insuranceImageType).checked) {
                document
                    .querySelector(`.${incuranceTypeActive} .car-image`)
                    .classList.add("visible");
                document
                    .querySelector(`.${incuranceTypeActive} .bike-image`)
                    .classList.remove("visible");
            } else if (
                document.getElementById("bike-" + insuranceImageType).checked
            ) {
                document
                    .querySelector(`.${incuranceTypeActive} .car-image`)
                    .classList.remove("visible");
                document
                    .querySelector(`.${incuranceTypeActive} .bike-image`)
                    .classList.add("visible");
            }
        }
    }
};

// footer-menu

const footerMenuButton = document.querySelectorAll(".footer__mobile-button");

footerMenuButton.forEach((element) =>
    element.addEventListener("click", (event) => {
        event.preventDefault();
        if (
            event.target.tagName == "svg" ||
            event.target.parentElement.tagName == "svg"
        ) {
            footerMenuButton.forEach((element) =>
                element.classList.remove("active")
            );
            event.target
                .closest(".footer__mobile-button")
                .classList.add("active");
        } else {
            footerMenuButton.forEach((element) =>
                element.classList.remove("active")
            );
            event.target.classList.add("active");
        }
    })
);
