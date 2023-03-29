// set server host
routemamba.registerServerHost("http://127.0.0.1:5500");

// set meta content
routemamba.registerMetaUrl("./components/meta-content.html");

// http routes setup
routemamba.register_http_routes([
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/home.html",
    container: "#root",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "/",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/home.html",
    container: "#root",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "index.html",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/about.html",
    container: "#root",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "about.html",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/privacy.html",
    container: "#root",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "privacy.html",
  },
]);

// set  pages headers
routemamba.register_routes_headers([
  {
    content_url: "components/header/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: ["/", "index.html", "about.html", "privacy.html"],
  },
]);

routemamba.register_routes_footers([
  {
    content_url: "components/footer/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: ["/", "index.html", "about.html", "privacy.html"],
  },
]);

routemamba.render();

var home_btn = document.getElementById("home");
var about_btn = document.getElementById("about");
var privacy_btn = document.getElementById("privacy");
var tabs_example_btn = document.getElementById("tabs-example");
var back = document.getElementById("back");
var next = document.getElementById("next");

back.addEventListener("click", () => {
  routemamba.pop_route();
});

next.addEventListener("click", () => {
  routemamba.push_route();
});

home_btn.addEventListener("click", () => {
  routemamba.navigate(
    "/",
    {},
    {
      header_load: true,
      footer_load: true,
    }
  );
});

about_btn.addEventListener("click", () => {
  routemamba.navigate(
    "about.html",
    {
      id: 123,
      name: "nadim",
    },
    {
      header_load: true,
      footer_load: true,
    }
  );
});

privacy_btn.addEventListener("click", () => {
  routemamba.navigate("privacy.html");
});

tabs_example_btn.addEventListener("click", () => {
  routemamba.navigate(
    "tabs-example.html",
    {},
    {
      meta_loader: true,
      method: "GET",
      http_url_change: true,
      header_load: true,
      footer_load: true,
    }
  );
});

routemamba.initTabs([
  {
    tabSwitcher: ".tab-switcher",
    initialTab: "tab1",
    activeSwitcherClass: "tab-active",
    activeTabClass: "activeTab",
    tabs: [
      {
        tabRoute: "tab1",
        content_url: "content/tabs/tab1.html",
        preloader: "loading...",
        error_handler: "error",
      },
      {
        tabRoute: "tab2",
        content_url: "content/tabs/tab2.html",
        preloader: "loading...",
        error_handler: "error",
      },
      {
        tabRoute: "tab3",
        content_url: "content/tabs/tab3.html",
        preloader: "loading...",
        error_handler: "error",
      },
    ],
  },
]);

// note: you can initalize multiple tabs here
// example:

routemamba.initTabs([
  {
    tabSwitcher: ".tab-switcher",
    initialTab: "tab1",
    activeSwitcherClass: "tab-active",
    activeTabClass: "activeTab",
    tabs: [
      {
        tabRoute: "tab1",
        content_url: "content/tabs/tab1.html",
        preloader: "loading...",
        error_handler: "error",
      },
      {
        tabRoute: "tab2",
        content_url: "content/tabs/tab2.html",
        preloader: "loading...",
        error_handler: "error",
      },
      {
        tabRoute: "tab3",
        content_url: "content/tabs/tab3.html",
        preloader: "loading...",
        error_handler: "error",
      },
    ],
  },
  {
    tabSwitcher: ".tab-switcher2",
    initialTab: "tab22",
    activeSwitcherClass: "tab-active2",
    activeTabClass: "activeTab2",
    tabs: [
      {
        tabRoute: "tab12",
        content_url: "content/tabs/tab1.html",
        preloader: "loading...",
        error_handler: "error",
      },
      {
        tabRoute: "tab22",
        content_url: "content/tabs/tab2.html",
        preloader: "loading...",
        error_handler: "error",
      },
      {
        tabRoute: "tab32",
        content_url: "content/tabs/tab3.html",
        preloader: "loading...",
        error_handler: "error",
      },
    ],
  },
]);
