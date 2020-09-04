<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
    <script src="https://kit.fontawesome.com/c2035ffa68.js" crossorigin="anonymous"></script>
    <title>DASHBOARD TOUR GUIDE</title>
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="assets/extra-libs/multicheck/multicheck.css">
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.css" rel="stylesheet">
    <link href="dist/css/style.min.css" rel="stylesheet">
   
</head>

<body>
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar" data-navbarbg="skin5">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin5">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                    <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <a class="navbar-brand" href="index.php">
                        <!--End Logo icon -->
                         <!-- Logo text -->
                        <span class="logo-text">
                             <!-- dark Logo text -->
                             <img  style="width: 86px;  " src="assets/ARTISA-TOUR.png" alt="homepage" class="light-logo" />
                            
                        </span>
                      
                    </a>
                    <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-left mr-auto">
                        <li class="nav-item d-none d-md-block"><a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a></li>
                        <!-- ============================================================== -->
                        <!-- create new -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <span class="d-none d-md-block">Create New <i class="fa fa-angle-down"></i></span>
                             <span class="d-block d-md-none"><i class="fa fa-plus"></i></span>   
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- Search -->
                        <!-- ============================================================== -->
                        <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark" href="javascript:void(0)"><i class="ti-search"></i></a>
                            <form class="app-search position-absolute">
                                <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>
                            </form>
                        </li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- Right side toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-right">
                        <!-- ============================================================== -->
                        <!-- Comment -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell font-24"></i>
                            </a>
                             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Comment -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Messages -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="font-24 mdi mdi-comment-processing"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby="2">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="">
                                             <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-success btn-circle"><i class="ti-calendar"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Event today</h5> 
                                                        <span class="mail-desc">Just a reminder that event</span> 
                                                    </div>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-info btn-circle"><i class="ti-settings"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Settings</h5> 
                                                        <span class="mail-desc">You can customize this template</span> 
                                                    </div>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-primary btn-circle"><i class="ti-user"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Pavan kumar</h5> 
                                                        <span class="mail-desc">Just see the my admin!</span> 
                                                    </div>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-danger btn-circle"><i class="fa fa-link"></i></span>
                                                    <div class="m-l-10">
                                                        <h5 class="m-b-0">Luanch Admin</h5> 
                                                        <span class="mail-desc">Just see the my new admin!</span> 
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Messages -->
                        <!-- ============================================================== -->

                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31"></a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="../login.php"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                <div class="dropdown-divider"></div>
                                <div class="p-l-30 p-10"><a href="javascript:void(0)" class="btn btn-sm btn-success btn-rounded">View Profile</a></div>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar" data-sidebarbg="skin5">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                   <!-- Sidebar navigation-->
                   <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="p-t-30">
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="index.php" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="products.php" aria-expanded="false"><i class="mdi mdi-chart-bar"></i><span class="hide-menu">Produits</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="promo.php" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Promotion</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="tour.php" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Tour Guide</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Contact Nous </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="form-basic.html" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> SIMPLE CONTACT </span></a></li>
                            </ul>
                        </li>
                       
                
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="co-container">
                <div class="container">
                  <div class="container-ar">
                    <img src="assets/image/img.jpg" class="ba">
                    <h1>4x4 Sahara </h1>
                    <p id="prix">Prix</p>
                    <div id="d1">$590</div>
                    <div id="d2">$490</div>
                  </div>
                  <div class="container-ar">
                    <img src="assets/image/img1.jpg" class="baa">
                    <h1>location moto </h1>
                    <p id="prix">Price</p>
                    <div id="d1">$590</div>
                    <div id="d2">$390</div>
                    
                  </div>
                  <div class="container-ar">
                    <img src="assets/image/img2.jpg" class="baaa">
                    <h1>Hotél samar</h1>
                    <p id="prix">Prix</p>
                    <div id="d1">$590</div>
                    <div id="d2">$290</div>
                
                    
                  </div>
                  <div class="container-ar">
                    <img src="assets/image/img3.jpg" class="baaaa">
                    <h1>Sahara desirt </h1>
                    <p id="prix">Prix</p>
                    <div id="d1">$590</div>
                    <div id="d2">$220</div>
                    
                  </div>
                  <div class="container-ar">
                    <img src="assets/image/img4.jpg" class="bz">
                    <h1>Marzouga </h1>
                    <p id="prix">Price</p>
                    <div id="d1">$590</div>
                    <div id="d2">$300</div>
                    
                  </div>
                  <div class="container-ar">
                    <img src="assets/image/img5.jpg" class="bzz">
                    <h1>cercule au Safi</h1>
                    <p id="prix">Price</p>
                    <div id="d1">$590</div>
                    <div id="d2">$400</div>
                    
                  </div>
                   <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer text-center">
                All Rights Reserved by ARTISA-TOUR@2020 Designed and Developed by <a href="">ABDEL-DEV</a>.
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
                 <style>
                     body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
*{

  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
                         /* header */
.header{
	background-position: center;
    background-image: url(image/headerimg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
}
.phone {
	width: 30px;
	height: 30px;
	position: absolute;
}

.email {
	width: 30px;
	height: 30px;
	position: absolute;
}
#p1 {
	position: absolute;
	left: 280px;
	top: 25px;
	color: white;
}
#p2 {
	position: absolute;
	left: 465px;
	top: 25px;
	color: white;
}
.imag{
    float: left;
    width: 117px;
    height: 57px;
    position: absolute;
    left: 20px;
    top: 20px;
}
.header ul {
    float: right;
    position: absolute;
    left: 655px;
    top: 25px; 
}
.header ul li{
    display: inline;
    list-style: none;
    margin-right: 27px;
}
a{
    text-decoration: none;
    color: white;
}


.Menu1 { 
    position: absolute;
    left: 118px;
    margin-top:-89px;
}
   div .paragraphe {
   	color: #688095;
   	font-weight: bold;
   }
   #check,.header label img{
		display: none;
   }
   #checkmenu{
    display: none;

    }
/*------------start style footer--------------*/

.section{
    background-color: #FAFAFA;
    margin-top: 11%;
    width: 100%;
  }
  .section .infooter{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0% 10% 0% 10%;
  }
  .section .infooter .d1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .section .infooter .d1,.d2,.d3{
          margin-top: 7%;
          margin-bottom: 7%;
      }
  .section .infooter a{
    font-family: Open Sans;
    font-weight: normal;
   color: #AAA9A9;
   text-decoration: none;
  }
  .section .infooter .img{
      width: 200px;
      height: 100px;
  }

  .section .infooter .p{
    margin-left: 7%;
    margin-top: 5%;
     font-family: Open Sans;
     font-weight: normal;
     font-size: 20px;
     color: #04151F;
      width: 300px;
      height: 54px;

  }
  .section .infooter .QL{
    width: 100%;
    display: flex;
    margin-top: 16%;

  }
  .section .infooter .ul2{
  margin-left: 1%;  

  }
  .section .infooter .ul1,.ul2{
  width: 146px;


  }
  .section .infooter li{
  list-style: none;
  line-height: 30px;
  text-align: center;  
  }
  .section .infooter h3{
    margin-top: 2%;
    color: #688095;
    font-family: Open Sans ExtraBold;
    font-weight: normal;
    text-align: center;
  }
  .section .infooter p{
    margin-top: 5%;
     margin-bottom: 5%;
    text-align: center;
     font-family: Open Sans;
     font-weight: normal;
     font-size: 20px;
     color:#AAA9A9 ;
     margin-left: 32px;
  }
  .section .infooter .s1,.s2{
      font-size:20px ;
      font-family:Open Sans ExtraBold;
      font-weight:normal; 
      color: #2C4458;
      margin-top: 2%;
      margin-left: 47px;
  }
  .section .infooter #mail{
      font-family:Open Sans ExtraBold;
      font-weight:normal; 
      color: #688095;
    }
    .footer{
         background-color: chocolate;
         flex-basis: 100%;
         height: 50px; 
         display: flex;
         flex-wrap: wrap;
     }
     .footer span{
         color:chocolate; 
         font-family: Open Sans ;
         font-weight: normal;
         margin: auto;
         

     }
     
     .section .infooter .icons #facebook{
        color: blue;
        font-size: 30px;
    }
    .section .infooter .icons #instagram{
        color: #FD1D1D ;
        font-size: 30px;
    }
    .section .infooter .icons #twitter{
        color: #0099FF;
        font-size: 30px;
  }
      .c h2{
        display: flex;
        justify-content: center;
        margin-top: 3%;
        font-size: 70px;
        font-family: Segoe UI;
        font-weight: normal;
        color: #2D51A3;
      }
      h2:hover {
           color: #7BA0F3;
      }
      @media (max-width: 480px){
      
        header nav ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
      
        }
        header nav ul li {
          margin-bottom: 20px;
        }
      }
      
      .tit{
        margin: 100px;
        font-family: 'Montserrat', sans-serif;
        text-align:center;
      }
      
      .co-container {
        width: 100%;
        display: flex;
        justify-content: center;
      
      }
      
      .container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        
        align-items: center;
        background-color: #DBDCDD;
        width: 100%;
        padding: 20px;
        box-shadow: 0px 30px 60px black;
      
        
      }
      
      .container-ar{
        width: 430px;
        height: 476px;
        background-color: #FFFFFF;
        margin: 60px;
        box-shadow: 5px 10px 10px black;
        display: flex;
        flex-direction: column;
        align-items: center;
        
      }
      .ba{
          height: 200px;
          width: 350px;
      }
      
      .baa {
           height: 200px;
          width: 350px;
      }
      
      .baaa {
           height: 200px;
          width: 350px;
      }
      
      .baaaa {
           height: 200px;
          width: 350px;
      }
      
      .bz {
           height: 200px;
          width: 350px;
      }
      
      .bzz {
           height: 200px;
          width: 350px;
      }
      
      article {
        text-align:center;
      }
      #prix{
        margin-top: 78px;
        margin-right:270px;
        font-size: 40px;
      }
      #d1{
        border: 1px solid black;
        margin-top: -88px;
        margin-left: 250px;
        text-decoration: line-through;
        font-size: 20px;
        color: red;
      }
      #d2{
        border: 1px solid black;
        margin-top: 15px;
        margin-left: 255px;
        font-size: 40px;
      }
      h1{
        margin-top: 30px;
      }
      

   @media (max-width: 1515px) 

{
    .navicon{
        top: 30px;
        width: 30px;
        height: 3px;
        background-color: #fff;
        display: block;
        cursor: pointer;
        margin-top: 7px;
    }

    .navmenu{
        right: 20px;
        position: absolute;
        cursor: pointer;
        top: 20px;
    }
    .header_menu{
        display: none;

    }
     #menu{
        float: left;
        left: 0;
        text-align: center;
        width: 100%;
        margin-top: 60px;
        background-color: #357AB4;
        padding: 0px;
        height: 70%;
    }
    #menu li{
        display: block;
        border: 1px solid #0D518C;
        background-color: #0D518C;
        margin: 5px;
        width: 97%;
        height: 11.3%
    }
    #menu li a{
        font-size: 25px;
        font-family: Segoe UI;
        font-weight: normal;
    }
    #p1, #p2 {
        display: none;
    }
    #checkmenu:checked ~ .header_menu{
        display: block;
    }
    #menu li:hover {
        background-color:#7BA0F3;
    }
   
}
                 </style>
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Right sidebar -->
                <!-- ============================================================== -->
                <!-- .right-sidebar -->
                <!-- ============================================================== -->
                <!-- End Right sidebar -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
           
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="assets/libs/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="assets/libs/popper.js/dist/umd/popper.min.js"></script>
    <script src="assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="assets/extra-libs/sparkline/sparkline.js"></script>
    <!--Wave Effects -->
    <script src="dist/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="dist/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="dist/js/custom.min.js"></script>
    <!-- this page js -->
    <script src="assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
    <script src="assets/extra-libs/multicheck/jquery.multicheck.js"></script>
    <script src="assets/extra-libs/DataTables/datatables.min.js"></script>
    <script>
        /****************************************
         *       Basic Table                   *
         ****************************************/
        $('#zero_config').DataTable();
    </script>

</body>

</html>