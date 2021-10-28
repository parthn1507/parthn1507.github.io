/* sidebar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "325px";
  document.getElementById("main").style.position = "relative";
  document.getElementById("main").style.left = "325px";
  document.getElementById("main2").classList = "overlay";

  // document.body.style.backgroundColor = "#00000070";
}
window.addEventListener("resize", SidebarMain);
function SidebarMain() {
  // alert("123");
  if (document.getElementById("mySidenav")) {
    width = window.innerWidth;
    if (width < 769) {
      closeNav();
    } else {
      openNav();
    }
  }
}
SidebarMain();
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.position = "absolute";
  document.getElementById("main").style.left = "0";
  document.getElementById("main2").classList = "overlay-remove";
  //document.getElementById("main").innerHTML += "";
  //document.body.style.backgroundColor = "white";
  // var element = document.getElementById("main");
  // element.classList.remove("main");
}

/* carousel */
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 60,
    autoWidth: true,
    nav: true,
    dots: false,
    mouseDrag: true,
    items: 1,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 2,
        margin: 20,
        autoWidth: false,
      },
      576: {
        items: 2,
        margin: 20,
        autoWidth: false,
      },
      768: {
        margin: 20,
        items: 4,
      },

      1000: {
        items: 5,
      },
    },
  });
});

/* select menu js */

$("select")
  .not("#select-severity")
  .each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;

    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());

    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }

    var $listItems = $list.children("li");

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });



  function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

// function onlyNumberOtp(evt) {
//   // Only ASCII character in that range allowed
//   var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
//       return false;
//   return true;
// }