
import Products from "./Products";

function Home({cartList, setCartList}) {


    return (
        
        <div className="home-section">
           
            <section className="section-intro bg-primary padding-y-lg">
            <div className="container">

                <article className="my-5">
                <h1 className="display-4 text-white"> Best products & <br /> brands in our store  </h1>
                <p className="lead text-white">Trendy Products, Factory Prices, Excellent Service</p>
                <a href="#" className="btn btn-warning"> Purchase now</a> 
                <a href="#" className="btn btn-light"> Learn more </a>
                </article>

            </div>
            </section>
            
         
            <section className="padding-y">
            <div className="container">

            <header className="section-heading">
                <h3 className="section-title">New products</h3>
            </header> 
        
            <div className="row">
                <Products  cartList={cartList} setCartList={setCartList} />
            </div> 

            </div> 
            </section>
          
            <section className="bg-light padding-y">
            <div className="container">

            <header className="section-heading mt-2 mb-5">
                <h3 className="section-title">Why choose us</h3>
            </header> 

            <div className="row mb-4">
                <div className="col-lg-4 col-md-6">	
                <figure className="itemside align-items-center mb-4">
                    <div className="aside">
                    <span className="rounded-circle shadow-sm text-primary icon-lg bg-white">
                        <i className="fa fa-money-bill"></i>
                    </span>
                    </div>
                    <figcaption className="info">
                    <h6 className="title">Reasonable prices</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
                    </figcaption>
                </figure> 
                </div>
                <div className="col-lg-4 col-md-6">
                <figure className="itemside align-items-center  mb-4">
                    <div className="aside">
                    <span className="rounded-circle shadow-sm text-primary icon-lg bg-white">
                        <i className="fa fa-star"></i>
                    </span>
                    </div>
                    <figcaption className="info">
                    <h6 className="title">Best quality</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
                    </figcaption>
                </figure> 
                </div>
                <div className="col-lg-4 col-md-6">
                <figure className="itemside align-items-center  mb-4">
                    <div className="aside">
                    <span className="rounded-circle shadow-sm text-primary icon-lg bg-white">
                        <i className="fa fa-plane"></i>
                    </span>
                    </div>
                    <figcaption className="info">
                    <h6 className="title">Worldwide shipping</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
                    </figcaption>
                </figure> 
                </div> 
                <div className="col-lg-4 col-md-6">	
                <figure className="itemside align-items-center  mb-4">
                    <div className="aside">
                    <span className="rounded-circle shadow-sm text-primary icon-lg bg-white">
                        <i className="fa fa-users"></i>
                    </span>
                    </div>
                    <figcaption className="info">
                    <h6 className="title">Customer satisfaction</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
                    </figcaption>
                </figure> 
                </div>
                <div className="col-lg-4 col-md-6">
                <figure className="itemside align-items-center mb-4">
                    <div className="aside">
                    <span className="rounded-circle shadow-sm text-primary icon-lg bg-white">
                        <i className="fa fa-thumbs-up"></i>
                    </span>
                    </div>
                    <figcaption className="info">
                    <h6 className="title">Happy customers</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
                    </figcaption>
                </figure> 
                </div>
                <div className="col-lg-4 col-md-6">
                <figure className="itemside align-items-center mb-4">
                    <div className="aside">
                    <span className="rounded-circle shadow-sm text-primary icon-lg bg-white">
                        <i className="fa fa-box"></i>
                    </span>
                    </div>
                    <figcaption className="info">
                    <h6 className="title">Thousand items</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
                    </figcaption>
                </figure> 
                </div> 
            </div>
            </div> 
            </section>
        
        </div>
      
       
    );
}

export default Home;
