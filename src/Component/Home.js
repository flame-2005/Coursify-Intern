import React from 'react'

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top " style={{ backgroundColor: '#e3f2fd' }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src="https://img.freepik.com/premium-photo/aesthetic-mountain-synthwave-retrowave-wallpaper-with-cool-vibrant-neon-design_398492-5531.jpg" class="d-block w-100 bd-placeholder-img" alt="..." height='500px' />
            {/* {/* <svg class="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Indias Best Site to hire Employees</h1>
                <p class="opacity-75">Come find best candidates for your company.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <img src="https://wallpaper.dog/large/20532100.jpg" class="d-block w-100 bd-placeholder-img" alt="..." height='500px' />
            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
            <div class="container">
              <div class="carousel-caption">
                <h1>Now Powered with AI.</h1>
                <p>Making better experience with AI tools.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://c4.wallpaperflare.com/wallpaper/266/749/195/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" class="d-block w-100 bd-placeholder-img" alt="..." height='500px' />
            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>With lots of trusted Users.</h1>
                <p>We will give you best employees for your company.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Designed for Entrepreneur</h1>
          <h3 class="fw-normal text-muted mb-3">Build your Amazing Company here</h3>
          <div class="d-flex gap-3 justify-content-center lead fw-normal">
            <a class="icon-link" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">Make your Company Rock</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Discover top talent and secure the finest employees for our esteemed company, hand-picked from this exceptional website - where brilliance meets opportunity, and ambition thrives in abundance. Elevate your workforce with the crème de la crème of professionals, ensuring unparalleled expertise and unwavering dedication to drive our business to new heights of success and innovation.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Registor Company</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Find Employee</button>
          </div>
        </div>
        <div class="overflow-hidden" style={{ maxHeight: '30vh' }}>
          <div class="container px-5">
            <img src="https://wallpapers.com/images/featured/entrepreneur-neddfqf4rqpbrowm.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://img.freepik.com/free-vector/ai-futuristic-technology-background_53876-97391.jpg?w=2000" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Now intigrate AI for Better Performance</h1>
            <p class="lead">Unlock the boundless potential of cutting-edge AI integration and revolutionize the performance of our company like never before. Embrace the future of business with the power of artificial intelligence, augmenting human capabilities to make strategic decisions with unparalleled precision and unmatched efficiency.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Know More</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" style={{ display: 'fles', alignItems: 'center', justifyContent: 'center' }}>
        <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Discover Your Dream Team</h2>
            <p class="lead">Show us you're real: Type 'StartUpHire' below.</p>
          </div>
          <div class="bg-body shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}><img src='https://c4.wallpaperflare.com/wallpaper/8/637/191/digital-digital-art-artwork-futuristic-futuristic-city-hd-wallpaper-preview.jpg' width='110%'></img></div>
        </div>
        <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Empower Your Startup with Top Talent</h2>
            <p class="lead">To unlock opportunities, enter 'HireMeNow'.</p>
          </div>
          <div class="bg-body shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}><img src='https://img.freepik.com/premium-photo/generative-ai-futuristic-urban-landscapes-panoramas_767466-10203.jpg' width='90%'></img></div>
        </div>
        <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Building Tomorrow's Success Stories</h2>
            <p class="lead">To unlock opportunities, enter 'HireMeNow'.</p>
          </div>
          <div class="bg-body shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}><img src='https://c4.wallpaperflare.com/wallpaper/996/699/685/futuristic-futuristic-city-neon-lights-building-hd-wallpaper-preview.jpg' width='100%'></img></div>
        </div>
      </div>
      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Recent Posts</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url(\'https://img.freepik.com/premium-photo/abstract-star-dust-particle-background_110488-460.jpg\')' }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Come Join us for a greater couse</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url(\'https://wallpapers.com/images/hd/blue-moon-5n9b0a9j6zto72gb.jpg\')' }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Unleash your potential, join our journey.</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>Bengalore</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url(\'https://www.pixel4k.com/wp-content/uploads/2018/12/earth-moon-4k_1546279097.jpg\')' }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Join the disruptors, ignite your career.</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>California</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-3">
        <header>

          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
            <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
          </div>
        </header>

        <main>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Free</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>10 employees included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Pro</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>20 employees included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-bg-primary border-primary">
                  <h4 class="my-0 fw-normal">Enterprise</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>30 employees included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="row featurette container" style={{ margin: 'auto' }}>
        <div class="col-md-7 container" style={{ margin: 'auto' }}>
          <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
          <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div class="col-md-5 container">
          <img src="https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-8.jpg" width='100%' alt="" />
        </div>
      </div>
      <div class="row featurette container" style={{ margin: '20px auto' }}>
        <div class="col-md-7 order-md-2" style={{ margin: 'auto' }}>
          <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
          <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src="https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2022/07/Why-Indian-startups-need-corporate-governance.jpg" width='100%' alt="" />
        </div>
      </div>
      <div class="row featurette container" style={{ margin: 'auto' }}>
        <div class="col-md-7 container" style={{ margin: 'auto' }}>
          <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
          <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div class="col-md-5 container">
          <img src="https://cdn.inc42.com/wp-content/uploads/2019/02/startup.jpg" width='100%' alt="" />
        </div>
      </div>
      <h2 className='container'>Our Partners</h2>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://i.pinimg.com/originals/e9/79/1d/e9791d3f2584d1f3516d654767297889.png" className="card-img-top" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">In our startup's realm, dreams unite,
                    Where passion sparks the brightest light.
                    Join us now and let's create,
                    A future where innovation's fate.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">In our startup's realm, dreams unite,
                    Where passion sparks the brightest light.
                    Join us now and let's create,
                    A future where innovation's fate.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://1000logos.net/wp-content/uploads/2022/10/Lenskart-Logo-2013.png" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">Here, ambition finds its wings,
                    Our startup dances as it sings.
                    With purpose strong and goals in sight,
                    Together, we'll embrace the flight.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img src="https://play-lh.googleusercontent.com/urT7EtJZ8TPhV1QBMGR1dpj_Eqzjxv7flEnCRAZTPmvpNMz4o06pn_m585rhN6gRNdY" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">A family forged with care and might,
                    Our startup's journey takes new height.
                    We seek the ones who dare to dream,
                    To build a world that's more than a scheme.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://i.pinimg.com/originals/e9/3a/6e/e93a6ead3f6784c21a6620d1102ea88f.jpg" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">Join hands with us, let's pave the way,
                    To change the world, no delay.
                    Impactful work, a shared endeavor,
                    Together, we'll reach heights forever.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://play-lh.googleusercontent.com/EuiZnkT8aEKjXDLX74DTp1VRIwWaeRa8Dvo-LOGAxy1FPQ8GzABTIRenksiM-A7Oz48g" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">Our startup's heart beats as one,
                    A tribe where every voice is spun.
                    Come be part of this vibrant tale,
                    And watch your career truly sail.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img src="https://thebrandhopper.com/wp-content/uploads/2023/02/cred-title.jpg" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">A playground for the bold and bright,
                    A startup where we all ignite.
                    Embrace the challenge, seize the chance,
                    Let's build a future, in advance.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Rapido_company_logo.svg/1200px-Rapido_company_logo.svg.png" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">n our startup's garden, seeds abound,
                    Here, your potential will unbound.
                    Join hands with us, a team so true,
                    Together, we'll make dreams come through.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kjbm55kmrzhnofciajm1" height='225' alt="" />
                <div class="card-body">
                  <p class="card-text">Our startup's culture thrives on trust,
                    A place where growth is never thrust.
                    Join us, as we learn and evolve,
                    Together, we'll problems resolve.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">apply</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
      </a>
      <p class="text-body-secondary">© 2023</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Home
