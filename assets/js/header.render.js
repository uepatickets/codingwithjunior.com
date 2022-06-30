// HEADER RENDER
function headerF() {
    document.getElementById("headerRender").innerHTML = "<header class='header-static navbar-light navbar-sticky fixed-top shadow'><nav class='navbar navbar-expand-xl'><div class='container'><a href=/ class=navbar-brand><img alt=logo src='./assets/images/logo.svg?ver=0.0.1'class='navbar-brand-item light-mode-item'> <img alt=logo src=./assets/images/logo-light.svg class='navbar-brand-item dark-mode-item'> </a><button class='ms-auto navbar-toggler'type=button aria-controls=navbarCollapse aria-expanded=false aria-label='Toggle navigation'data-bs-target=#navbarCollapse data-bs-toggle=collapse><span class=navbar-toggler-animation><span></span> <span></span> <span></span></span></button><div class='w-100 collapse navbar-collapse'id=navbarCollapse><ul class='me-auto navbar-nav navbar-nav-scroll'><li class='dropdown nav-item dropdown-menu-shadow-stacked'><a href=# class='nav-link bg-opacity-10 bg-primary px-3 py-3 py-xl-0 rounded-3 text-primary'aria-expanded=false data-bs-toggle=dropdown aria-haspopup=true id=categoryMenu><i class='bi me-2 bi-ui-radios-grid'></i><span>Categorias</span></a><ul class=dropdown-menu aria-labelledby=categoryMenu><li class='dropdown-submenu dropend'><a href=# class='dropdown-item dropdown-toggle'>Desarrollo</a><ul class='dropdown-menu dropdown-menu-start'data-bs-popper=none><li class='dropdown-submenu dropend'><a href=# class='dropdown-item dropdown-toggle'>Desarrollo Web</a><ul class=dropdown-menu data-bs-popper=none><li><a href=# class=dropdown-item>CSS</a><li><a href=# class=dropdown-item>JavaScript</a><li><a href=# class=dropdown-item>Angular</a><li><a href=# class=dropdown-item>PHP</a><li><a href=# class=dropdown-item>HTML</a><li><a href=# class=dropdown-item>React</a></ul><li><a href=# class=dropdown-item>Data Science</a><li><a href=# class=dropdown-item>Mobile Development</a><li><a href=# class=dropdown-item>Programing Language</a><li><a href=# class=dropdown-item>Software Testing</a><li><a href=# class=dropdown-item>Software Engineering</a><li><a href=# class=dropdown-item>Software Development Tools</a></ul><li><a href=# class=dropdown-item>Diseño Web</a><li class='dropdown-submenu dropend'><a href=# class='dropdown-item dropdown-toggle'>Marketing</a><div class='dropdown-menu dropdown-menu-start dropdown-width-lg'data-bs-popper=none><div class='row p-4'><div class='col-xl-6 col-xxl-4 mb-4 mb-xl-0'><h6 class=mb-0>Empezar</h6><hr><ul class=list-unstyled><li><a href=# class=dropdown-item>Market Research</a><li><a href=# class=dropdown-item>Advertising</a><li><a href=# class=dropdown-item>Consumer Behavior</a><li><a href=# class=dropdown-item>Digital Marketing</a><li><a href=# class=dropdown-item>Marketing Ethics</a><li><a href=# class=dropdown-item>Social Media Marketing</a><li><a href=# class=dropdown-item>Public Relations</a><li><a href=# class=dropdown-item>Advertising</a><li><a href=# class=dropdown-item>Decision Science</a><li><a href=# class=dropdown-item>SEO</a><li><a href=# class=dropdown-item>Business Marketing</a></ul></div><div class='col-xl-6 col-xxl-4 mb-4 mb-xl-0'><h6 class=mb-0>Títulos</h6><hr><div class='position-relative d-flex mb-4'><img alt=''src=./assets/images/client/uni-logo-01.svg class=icon-md><div class=ms-3><a href=# class='mb-0 h6 stretched-link'>American Century University, New Mexico</a><p class='mb-0 small'>Bachelor of computer science</div></div><div class='position-relative d-flex mb-4'><img alt=''src=./assets/images/client/uni-logo-02.svg class=icon-md><div class=ms-3><a href=# class='mb-0 h6 stretched-link'>Indiana College of - Bloomington</a><p class='mb-0 small'>Masters of computer science</div></div><div class='position-relative d-flex mb-4'><img alt=''src=./assets/images/client/uni-logo-03.svg class=icon-md><div class=ms-3><a href=# class='mb-0 h6 stretched-link'>College of South Florida</a><p class='mb-0 small'>Medical science college</div></div><div class='position-relative d-flex mb-4'><img alt=''src=./assets/images/client/uni-logo-01.svg class=icon-md><div class=ms-3><a href=# class='mb-0 h6 stretched-link'>Andeerson Campus</a><p class='mb-0 small'>Bachelor of computer science</div></div><div class='position-relative d-flex'><img alt=''src=./assets/images/client/uni-logo-04.svg class=icon-md><div class=ms-3><a href=# class='mb-0 h6 stretched-link'>University of South California</a><p class='mb-0 small'>Masters of business development</div></div></div><div class='col-xl-6 col-xxl-4'><h6 class=mb-0>Certificados</h6><hr><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fab fa-google text-google-icon'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Google SEO certificate</a><p class='mb-0 small'>No prerequisites</div></div><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fab fa-linkedin-in text-linkedin'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Business Development Executive(BDE)</a><p class='mb-0 small'>No prerequisites</div></div><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fab fa-facebook text-facebook'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Facebook social media marketing</a><p class='mb-0 small'>Expert advice</div></div><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fas fa-basketball-ball text-dribbble'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Creative graphics design</a><p class='mb-0 small'>No prerequisites</div></div></div></div><div class=row><div class=col-12><div class='position-relative p-3 bg-blue card overflow-hidden rounded-0 rounded-bottom'style='background:url(assets/images/pattern/05.png) no-repeat center center;background-size:cover'><figure class='end-0 position-absolute bottom-0 d-md-block d-none mb-n4'><svg height=135.2px width=92.6px><path class=fill-white d='M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z'></path><path class=fill-white d='M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z'></path><path class=fill-white d='M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z'></path><path class=fill-warning d=M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z></path><polygon class='fill-warning opacity-6'points='31.2,12.3 4.7,5.4 25.1,17.2'></polygon><polygon class='fill-warning opacity-6'points='21.5,19.5 15,24.8 4.7,5.4 '></polygon></svg></figure><div class=card-body><h5 class='mb-2 card-title text-white'>Access 25K Online courses from 120 institutions, Start today!</h5><p class='text-white text-opacity-75'>Here is the description of premium features which will allow users to get benefits and save a lot of money</p><a href=# class='mb-0 btn btn-dark btn-sm'>Purchase Premium</a></div></div></div></div></div><li><hr class=dropdown-divider><li><a href=# class='dropdown-item bg-opacity-10 bg-primary mb-0 rounded-2 text-primary'>Ver todas las categorias</a></ul></ul><ul class='me-auto navbar-nav navbar-nav-scroll'><li class='dropdown nav-item'><a href=# class='dropdown-toggle nav-link'aria-expanded=false data-bs-toggle=dropdown aria-haspopup=true id=pagesMenu>Páginas</a><ul class=dropdown-menu aria-labelledby=pagesMenu><li class='dropdown-submenu dropend'><li class='dropdown-submenu dropend'><a href=# class='dropdown-item dropdown-toggle'>Autenticación</a><ul class='dropdown-menu dropdown-menu-start'data-bs-popper=none><li><a href=iniciar-sesion.html class=dropdown-item>Iniciar sesión</a><li><a href=iniciar-sesion.html class=dropdown-item>Cerrar sesión</a><li><a href=recuperar.html class=dropdown-item>Recuperar contraseña</a></ul><li><a href=faq.html class=dropdown-item>FAQs</a><li><a href=error-404.html class=dropdown-item>Error 404</a><li><a href=cart.html class=dropdown-item>Cart</a><li><a href=checkout.html class=dropdown-item>Checkout</a><li><a href=wishlist.html class=dropdown-item>Wishlist</a></ul><li class='dropdown nav-item'><a href=# class='dropdown-toggle nav-link'aria-expanded=false data-bs-toggle=dropdown aria-haspopup=true id=accounntMenu>Cuentas</a><ul class=dropdown-menu aria-labelledby=accounntMenu><li class='dropdown-submenu dropend'><a href=# class='dropdown-item dropdown-toggle'><i class='fa-fw me-1 fas fa-user-tie'></i>Profesor</a><ul class='dropdown-menu dropdown-menu-start'data-bs-popper=none><li><a href=profesor-tablero.html class=dropdown-item><i class='fa-fw bi me-1 bi-grid-fill'></i>Tablero</a><li><a href=profesor-cursos.html class=dropdown-item><i class='fa-fw bi me-1 bi-basket-fill'></i>Cursos</a><li><a href=profesor-ganancias.html class=dropdown-item><i class='fa-fw me-1 fas fa-chart-line'></i>Ganancias</a><li><a href=profesor-pagos.html class=dropdown-item><i class='fa-fw me-1 fas fa-wallet'></i>Pagos</a></ul><li class='dropdown-submenu dropend'><a href=# class='dropdown-item dropdown-toggle'><i class='fa-fw me-1 fas fa-user-graduate'></i>Estudiante</a><ul class='dropdown-menu dropdown-menu-start'data-bs-popper=none><li><a href=estudiante-tablero.html class=dropdown-item><i class='fa-fw bi me-1 bi-grid-fill'></i>Tablero</a><li><li><a href=estudiante-cursos.html class=dropdown-item><i class='fa-fw bi me-1 bi-basket-fill'></i>Cursos</a><li><a href=estudiante-pagos.html class=dropdown-item><i class='fa-fw bi me-1 bi-credit-card-2-front-fill'></i>Pagos</a></ul><li><a href=admin-tablero.html class=dropdown-item><i class='fa-fw me-1 fas fa-user-cog'></i>Admin</a><li><hr class=dropdown-divider><li><a href=admin-roles.html class=dropdown-item><i class='fa-fw me-1 fas fa-edit'></i>Editar Roles</a><li><a href=admin-configurar.html class=dropdown-item><i class='fa-fw me-1 fas fa-cog'></i>Configuración</a></ul><li class='dropdown nav-item dropdown-fullwidth'><a href=# class='dropdown-toggle nav-link'aria-expanded=false data-bs-toggle=dropdown aria-haspopup=true>Megamenu</a><div class='dropdown-menu dropdown-menu-end pb-0'data-bs-popper=none><div class='row p-4 g-4'><div class='col-xl-6 col-xxl-3'><h6 class=mb-0>Get started</h6><hr><ul class=list-unstyled><li><a href=# class=dropdown-item>Market research</a><li><a href=# class=dropdown-item>Advertising</a><li><a href=# class=dropdown-item>Consumer behavior</a><li><a href=# class=dropdown-item>Digital marketing</a><li><a href=# class=dropdown-item>Marketing ethics</a><li><a href=# class=dropdown-item>Social media marketing</a><li><a href=# class=dropdown-item>Public relations</a><li><a href=# class=dropdown-item>Advertising</a><li><a href=# class=dropdown-item>Decision science</a><li><a href=# class=dropdown-item>SEO</a><li><a href=# class=dropdown-item>Business marketing</a></ul></div><div class='col-xl-6 col-xxl-3'><h6 class=mb-0>Degree</h6><hr><div class='position-relative p-3 bg-primary-soft-hover mb-2 rounded-2 transition-base'><a href=# class='mb-0 h6 stretched-link'>Contact management</a><p class='mb-0 small text-truncate-2'>Speedily say has suitable disposal add boy. On forth doubt miles of child.</div><div class='position-relative p-3 bg-primary-soft-hover mb-2 rounded-2 transition-base'><a href=# class='mb-0 h6 stretched-link'>Sales pipeline</a><p class='mb-0 small text-truncate-2'>Speedily say has suitable disposal add boy. On forth doubt miles of child.</div><div class='position-relative p-3 bg-primary-soft-hover mb-2 rounded-2 transition-base'><a href=# class='mb-0 h6 stretched-link'>Security n Permission</a><p class='mb-0 small text-truncate-2'>Speedily say has suitable disposal add boy. On forth doubt miles of child.</div></div><div class='col-xl-6 col-xxl-3'><h6 class=mb-0>Certificate</h6><hr><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fab fa-google text-google-icon'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Google SEO certificate</a><p class='mb-0 small'>No prerequisites</div></div><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fab fa-linkedin-in text-linkedin'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Business Development Executive(BDE)</a><p class='mb-0 small'>No prerequisites</div></div><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fab fa-facebook text-facebook'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Facebook social media marketing</a><p class='mb-0 small'>Expert advice</div></div><div class='position-relative d-flex mb-4'><h2 class=mb-0><i class='fa-fw fas fa-basketball-ball text-dribbble'></i></h2><div class=ms-2><a href=# class='mb-0 h6 stretched-link'>Creative graphics design</a><p class='mb-0 small'>No prerequisites</div></div></div><div class='col-xl-6 col-xxl-3'><h6 class=mb-0>Download Eduport</h6><hr><img alt=''src=./assets/images/element/14.svg><div class='row g-2 justify-content-center mt-3'><div class='col-6 col-sm-4 col-xxl-6'><a href=#><img alt=google-store src=./assets/images/client/google-play.svg class=btn-transition></a></div><div class='col-6 col-sm-4 col-xxl-6'><a href=#><img alt=app-store src=./assets/images/client/app-store.svg class=btn-transition></a></div></div></div><div class=col-12><div class='mb-0 alert alert-dismissible alert-success fade mt-2 rounded-3 show'role=alert><div class='avatar avatar-xs me-2'><img alt=avatar src=./assets/images/avatar/09.jpg class='avatar-img rounded-circle'></div>The personality development class starts at 2:00 pm, click to <a href=# class=alert-link>Join Now</a></div></div></div></div><li class='dropdown nav-item'><a href=# class=nav-link aria-expanded=false data-bs-toggle=dropdown aria-haspopup=true id=advanceMenu><i class='fas fa-ellipsis-h'></i></a><ul class='dropdown-menu dropdown-menu-end min-w-auto'data-bs-popper=none><li><a href=#soporte class=dropdown-item target=_blank><i class='fa-fw bi me-2 bi-life-preserver text-warning'></i>Soporte</a><li><a href=docs/index.html class=dropdown-item target=_blank><i class='fa-fw bi me-2 bi-card-text text-danger'></i>Documentación</a><li><hr class=dropdown-divider><li><hr class=dropdown-divider><li><a href=docs/alerts.html class=dropdown-item target=_blank><i class='fa-fw bi me-2 bi-puzzle-fill text-orange'></i>Componentes</a></ul></ul><div class='align-items-center flex-nowrap my-3 my-xl-0 nav px-4'><div class='nav-item w-100'><form class=position-relative><input aria-label=Buscar class='bg-transparent form-control pe-5'placeholder=Buscar type=search> <button class='bg-transparent btn end-0 position-absolute px-2 py-0 top-50 translate-middle-y'type=submit><i class='fas fa-search fs-6'></i></button></form></div></div></div><div class='dropdown ms-1 ms-lg-0'><a href=# class='avatar avatar-sm p-0'aria-expanded=false data-bs-toggle=dropdown id=profileDropdown data-bs-auto-close=outside data-bs-display=static role=button><img alt=avatar src=./assets/images/avatar/01.jpg class='avatar-img rounded-circle'></a><ul class='dropdown-menu dropdown-menu-end dropdown-animation pt-3 shadow'aria-labelledby=profileDropdown><li class=px-3><div class='d-flex align-items-center'><div class='avatar me-3'><img alt=avatar src=./assets/images/avatar/01.jpg class='avatar-img rounded-circle shadow'></div><div><a href=# class=h6>Junior Felix</a><p class='small m-0'>junior@codingwithjunior.com</div></div><hr><li><a href=# class=dropdown-item><i class='fa-fw bi me-2 bi-person'></i>Editar Perfil</a><li><a href=# class=dropdown-item><i class='fa-fw bi me-2 bi-gear'></i>Configuración</a><li><a href=# class=dropdown-item><i class='fa-fw bi me-2 bi-info-circle'></i>Ayuda</a><li><a href=iniciar-sesion.html class='dropdown-item bg-danger-soft-hover'><i class='fa-fw bi me-2 bi-power'></i>Cerrar sesión</a></div></nav></header>";
  }
  headerF();

