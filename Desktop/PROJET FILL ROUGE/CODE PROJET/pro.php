<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Artisa-Tour</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container-fluid"  >
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img style="width: 100px; height: 40%;" src="assets/0.png" alt="" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="index.php">Home</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="pro.php">Produits</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="event.html">Events</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="contact.html">Contact</a></li>
                        <li style="margin-left: 60px;" class="nav-item"><a class="nav-link js-scroll-trigger" href="login.php">login</a></li>
                    </ul>
          
                </div>
               
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Artisa-Tour</div>
                <div class="masthead-heading text-uppercase" style="font-size: x-large;">Our brand new Fishbite Superbike Express 2018 with perfection
                in every detail and would blow your mind INSTANTLY!!</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#portfolio">Shop Now</a>
            </div>
        </header>
        <!--new pro-->

        <div id="app" class="container">
            <div style="display: flex; justify-content: center;">
                <apicart-cart-dropdown ref="cartDropdown" @footer-button-click="showCheckout"></apicart-cart-dropdown>
            </div>
            <apicart-category ref="category"></apicart-category>
            <apicart-cart-dialog ref="cartDialog"></apicart-cart-dialog>
            <apicart-checkout-dialog ref="checkoutDialog"></apicart-checkout-dialog>
            <apicart-order-dialog ref="orderDialog"></apicart-order-dialog>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/bundles/skeleton/skeleton.full.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/button/button.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/dialog/dialog.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/drawer/drawer.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/loader/loader.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/buy-button/buy-button.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/buy-button-with-quantity/buy-button-with-quantity.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/cart-dialog/cart-dialog.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/cart-dropdown/cart-dropdown.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/products-list/products-list.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/categories-list/categories-list.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/category/category.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/payment-methods-list/payment-methods-list.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/shipping-methods-list/shipping-methods-list.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/checkout/checkout.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/checkout-dialog/checkout-dialog.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@apicart/vue-components@1.0.0-alpha7/dist/components/order-dialog/order-dialog.js"></script>
        <script>
            Apicart
                .setDevEnv()
                .configure({
                    store: new Apicart.Store({ token: '9mCu3DlBCa4REI?Q7kKly!Rw6!_FvD8K_dgPXe1b20?r6!sPTQMyCpq_ADt!jXOD' }),
                    payments: new Apicart.Payments({ token: 'Q84lNQyLl?nBGvKxxbcdc!nWFKEZrK?L_Is2r9IaOJo14ONbXw1SMlPIeptcaFza' }),
                    vueComponentsTranslator: {
                        currencyFormats: {
                            en: {
                                currency: {
                                    currency: 'USD'
                                }
                            }
                        },
                        localization: {
                            en: {
                                categories: {
                                    clothes: {
                                        title: 'The most beautiful clothes',
                                        description: "The most beautiful t-shirts.",
                                        menu: 'T-shirts',
                                        new: {
                                            title: 'New collection',
                                            description: "",
                                            menu: 'New collection'
                                        },
                                        discount: {
                                            title: 'Discounted t-shirts',
                                            description: "The most popular t-shirts for half price",
                                            menu: 'Discount'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    vueComponents: {
                        category: {
                            products: {
                                list: {
                                    clothes: {
                                        new: [
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/01/1.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/01/1.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
                                            
        
                                        ],
                                        discount: [
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
                                            'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/01/1.json',
                                        ]
                                    }
                                }
                            }
                        }
                    }
                });
        
        
            new Vue({
                el: '#app',
                components: {
                    ApicartCartDropdown,
                    ApicartCategory,
                    ApicartCartDialog,
                    ApicartOrderDialog,
                    ApicartCheckoutDialog
                },
                methods: {
                    showCheckout() {
                        this.$refs.checkoutDialog.open();
                    }
                }
            });
        </script>
        <style>
            body {
                margin: 0;
                color: chocolate;
            }
        
            * {
                font-family: -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                box-sizing: border-box;
            }
        
            .container {
                max-width: 1928px;
                padding: 0 10px;
                margin: 0 auto;
                margin-bottom: 100px;
                margin-top: 100px;
            }
        
        </style>
       
        <!-- Footer-->
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div style="color: white;" class="col-lg-4 text-lg-left">Copyright © Artisa-Tour 2020</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <a style="color: white;" class="mr-3" href="#!">Privacy Policy</a>
                        <a style="color: white;" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    
       
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <!-- Contact form JS-->
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
    </body>
</html>
