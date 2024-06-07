console.log("header loading..");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("indexHeaderPlaceHolder").innerHTML = headerContent;
    console.log("header loaded!");

    // Mobile Menu Toggle
    document.querySelector(".mobile-nav-toggler").onclick = function () {
        console.log("clicked!");
        document.body.classList.add("mobile-menu-visible");
    };

    // Close Mobile Menu
    document.querySelector(".mobile-menu .menu-backdrop").onclick =
        document.querySelector(".mobile-menu .close-btn").onclick = function () {
            document.body.classList.remove("mobile-menu-visible");
        };

    // Clone Desktop Menu to Mobile Menu
    const desktopMenu = document.querySelector(".main-menu .navigation").cloneNode(true);
    document.querySelector(".mobile-menu .menu-outer").appendChild(desktopMenu);

    // Dropdown Functionality for Mobile Menu
    const mobileDropdownButtons = document.querySelectorAll(".mobile-menu .dropdown > a");

    mobileDropdownButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (button.nextElementSibling && button.nextElementSibling.tagName === 'UL') { // Check if the next sibling is a UL (submenu)
                event.preventDefault(); // Prevent default link behavior only if it has a submenu
                button.classList.toggle('open'); // Toggle the 'open' class on the button
                button.nextElementSibling.classList.toggle('open'); // Toggle the 'open' class on the dropdown menu
            }
        });
    });
});

$(document).ready(function () {
    // Dropdown Functionality for Desktop Menu
    $('.dropdown > a').click(function (event) {
        if ($(this).siblings('ul').length) {  // Check if the link has a submenu
            //event.preventDefault(); // Prevent default link behavior only if it has a submenu
            $(this).siblings('ul').slideToggle(); // Toggle the dropdown menu
            $(this).toggleClass('open'); // Toggle the 'open' class on the link
        }
    });
});
const headerContent = `
<header class="main-header style-two style-three">
    <!-- header-upper -->
    <div class="header-upper-two">
        <div class="auto-container">
            <div class="upper-inner clearfix">
                <div class="logo-box pull-left">
                    <figure class="logo">
                        <a href="index.html"><img src="assets/images/iiec-logo.png" alt="" /></a>
                    </figure>
                </div>
                <ul class="info-box pull-right clearfix">
                    <li>
                        <i class="icon-28"></i>
                        <h5>Call Us</h5>
                        <p><a href="tel:+88">+88-01521469392</a></p>
                    </li>
                    <li>
                        <i class="icon-29"></i>
                        <h5>E-mail Us</h5>
                        <p>
                            <a href="mailto:info@example.com">innovation.hub@iubat.edu</a>
                        </p>
                    </li>
                    <li class="btn-box">
                        <a href="assets/pages/technov2.html" class="theme-btn-five" target="_blank">Technocrats V.2</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- header-lower -->
    <div class="header-lower">
        <div class="pattern-layer" style="background-image: url(assets/images/shape/shape-23.png)"></div>
        <div class="auto-container">
            <div class="outer-box clearfix">
                <div class="menu-area pull-left clearfix">
                    <!--Mobile Navigation Toggler-->
                    <div class="mobile-nav-toggler">
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                    </div>
                    <nav class="main-menu navbar-expand-md navbar-light">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                <li><a href="index.html">Home</a></li>
    
                                <li class="dropdown">
                                    <a href="assets/pages/projects.html">Projects</a>
                                    <ul>
                                        <li><a href="assets/pages/ongoing.html">Ongoing</a></li>
                                        <li><a href="assets/pages/previous.html">Previous</a></li>
                                        <li><a href="assets/pages/program_project.html">Program Project</a></li>
                                    </ul>
                                </li>
                                <li><a href="assets/pages/advisor.html">Advisors</a></li>
                                <li class="dropdown">
                                    <a href="assets/pages/executive24-25.html">Committee</a>
                                    <ul>
                                        <li class="dropdown">
                                            <a href="assets/pages/executive24-25.html">Executive Panel</a>
                                            <ul>
                                                <li>
                                                    <a href="assets/pages/executive22-23.html">executive22-23</a>
                                                </li>
                                                <li>
                                                    <a href="assets/pages/executive23-24.html">executive23-24</a>
                                                </li>
                                                <li>
                                                    <a href="assets/pages/executive24-25.html">executive24-25</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="assets/pages/mentors.html">mentors</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="index.html">Events</a>
                                    <ul>
                                        <li><a href="/assets/pages/national_event.html">National Events</a></li>
                                        <li><a href="/assets/pages/intra_event.html">Intra Events</a></li>
                                        <li><a href="/assets/pages/inter_event.html">Inter Events</a></li>
                                    </ul>
                                </li>
                                <li><a href="assets/pages/gallery.html">Gallery</a></li>
    
                                <li><a href="assets/pages/funding.html">Fundings</a></li>
                                <li><a href="assets/pages/IIEC_officials.html">IIEC officials</a></li>
                                <li><a href="assets/pages/blog.html">Blog</a></li>
                                <li><a href="assets/pages/contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul class="menu-right-content pull-right clearfix">
                    <li class="social-icons">
                        <ul class="social-links clearfix">
                            <li>
                                <a href="index.html"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="index.html"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <!--sticky Header-->
    <div class="sticky-header">
        <div class="auto-container">
            <div class="outer-box clearfix">
                <div class="menu-area pull-left">
                    <nav class="main-menu clearfix">
                        <!--Keep This Empty / Menu will come through Javascript-->
                    </nav>
                </div>
                <ul class="menu-right-content pull-right clearfix">
                    <li class="search-btn">
                        <button type="button" class="search-toggler">
                            <i class="icon-1"></i>
                        </button>
                    </li>
                    <li class="nav-btn nav-toggler navSidebar-button clearfix">
                        <button><i class="icon-30"></i></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </header>
    <!-- main-header end -->
    
    <!-- Mobile Menu  -->
    <div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn"><i class="fas fa-times"></i></div>
    
    <nav class="menu-box">
        <div class="nav-logo">
            <a href="index.html"><img src="assets/images/iiec-logo.png" alt="" title="" /></a>
        </div>
        <div class="menu-outer">
            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        </div>
        <div class="contact-info">
            <h4>Contact Info</h4>
            <ul>
                <li>
                    4 Embankment Drive Road,Sector-10, Uttara Model Town,
                    Dhaka-1230.
                </li>
                <li><a href="tel:+8801521469392">+88-01521469392 </a></li>
                <li>
                    <a href="mailto:innovation.hub@iubat.edu">innovation.hub@iubat.edu</a>
                </li>
            </ul>
        </div>
        <div class="social-links">
            <ul class="clearfix">
                <li>
                    <a href="index.html"><span class="fab fa-facebook-square"></span></a>
                </li>
                <li>
                    <a href="index.html"><span class="fab fa-linkedin-in"></span></a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
`;
