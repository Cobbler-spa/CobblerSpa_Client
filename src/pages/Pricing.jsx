import React from 'react'

const Pricing = () => {
  return (
    <section id='pricingSection' style={{width:"100vw", background:"black", paddingTop:"5rem"}}>
        <div className='pricingCard' style={{width:"90%", margin:"auto", background:"white",}} >
            <h4 style={{textAlign:"center",fontWeight:"bolder", textTransform:"uppercase", letterSpacing:"2px", fontFamily:"oswald", fontSize:"3rem"}}>Price Guide</h4>
            <div className='underline'></div>
            {/*  */}
            <div className='PriceBox' style={{margin:"auto",  width:"60%", background:"whitesmoke", marginBottom:"2rem", padding:"1rem", fontFamily:"poppins", textTransform:"capitalize"}}>
                <h6 className='serviceName' style={{fontSize:"2rem", fontFamily:"poppins", fontWeight:"700", marginBottom:"0.5rem"}}>Launder</h6>
                <div style={{width:"50%", height:"0.25rem", background:"black", marginBottom:"1rem"}}></div>
                <p className='category' style={{fontWeight:"600"}} >Shoes (Dry Cleaning + Deodorizing Services)</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Slides and Sandals</p>
                <p  > Rs 600</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Formal Shoes & Loafers</p>
                <p  > Rs 800</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Heels & espadrilles</p>
                <p  > Rs 800</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Sneakers</p>
                <p  > Rs 1000</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Boots </p>
                <p  > Rs 1500</p>
                </article>
                <br/>
                {/* br */}
                <p className='category' style={{fontWeight:"600"}}>Bags (Dry Cleaning + Deodorizing Services)</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Belts</p>
                <p  > Rs 600</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Wallets</p>
                <p  > Rs 800</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >HandBags & Laptop bags</p>
                <p  > Rs 1500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Haversacks & Backpacks</p>
                <p  >Rs 1250</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Luggage</p>
                <p  >Get the quote as per size</p>
                </article>
            </div>
            {/*  */}
           {/*  */}
           <div className='PriceBox' style={{margin:"auto",  width:"60%", background:"whitesmoke", marginBottom:"2rem", padding:"1rem", fontFamily:"poppins", textTransform:"capitalize"}}>
                <h6 className='serviceName' style={{fontSize:"2rem", fontFamily:"poppins", fontWeight:"700", marginBottom:"0.5rem"}}>Revive </h6>
                <div style={{width:"50%", height:"0.25rem", background:"black", marginBottom:"1rem"}}></div>
                <p className='category' style={{fontWeight:"600"}} >Shoes (Dry Cleaning + Deodorizing Services)</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Sneaker Polishing</p>
                <p  > Rs 600</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Formal shoes and Loafers</p>
                <p  > Rs 500</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Heels & espadrilles</p>
                <p  > Rs 500</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Boots </p>
                <p  > Rs 700</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Waterproof Coating</p>
                <p  > Rs 800</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >De-yellowing/ Deoxidation Treatment</p>
                <p  > Rs 1000</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Anti-crease guard</p>
                <p  > Rs 1000</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Whitening Boost Treatment</p>
                <p  > Rs 1500</p>
                </article>
                <br/>
                {/* br */}
                <p className='category' style={{fontWeight:"600"}}>Bags (Dry Cleaning + Deodorizing Services)</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Handbag & Laptop bag</p>
                <p  > Rs 1000</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Waterproof Coating</p>
                <p  > Rs 1500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Anti-shape guard</p>
                <p  >  Get a quote</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Luggage </p>
                <p  >Get a quote as per size</p>
                </article>
            </div>
            {/*  */}
            {/*  */}
            <div className='PriceBox' style={{margin:"auto",  width:"60%", background:"whitesmoke", marginBottom:"2rem", padding:"1rem", fontFamily:"poppins", textTransform:"capitalize"}}>
                <h6 className='serviceName' style={{fontSize:"2rem", fontFamily:"poppins", fontWeight:"700", marginBottom:"0.5rem"}}>Repair </h6>
                <div style={{width:"50%", height:"0.25rem", background:"black", marginBottom:"1rem"}}></div>
                <p className='category' style={{fontWeight:"600"}} >Shoe Repair</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Sole re-alignment & pasting</p>
                <p  > Rs 600</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Insole Repair & replacement </p>
                <p  > Rs 1000</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Shoe Stitching</p>
                <p  > Rs 1000</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Shoe patch replacement</p>
                <p  > Rs 1500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Heel tip & rivet replacement</p>
                <p  > Rs 800 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Heel insole repair</p>
                <p  > Rs 1200 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Stain removal Treatment</p>
                <p  > Rs 1000 onwards</p>
                </article>
                <br/>
                {/* br */}
                <p className='category' style={{fontWeight:"600"}}>Bags Repair</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Zipper repair </p>
                <p  > Rs 400 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Zipper replacement </p>
                <p  > Rs 800 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Bag panel replacement and patch work</p>
                <p  > Rs 1500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Bag Handle & strap replacement</p>
                <p  > Rs 2000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Lining Replacement</p>
                <p  > Rs 3000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Anti-fungal (Mold & mildew Treatment)</p>
                <p  > Rs 4000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Stain removal Treatment</p>
                <p  > Rs 2000 onwards</p>
                </article>
            </div>
            {/*  */}
            {/*  */}
            <div className='PriceBox' style={{margin:"auto",  width:"60%", background:"whitesmoke", marginBottom:"2rem", padding:"1rem", fontFamily:"poppins", textTransform:"capitalize"}}>
                <h6 className='serviceName' style={{fontSize:"2rem", fontFamily:"poppins", fontWeight:"700", marginBottom:"0.5rem"}}>Restore</h6>
                <div style={{width:"50%", height:"0.25rem", background:"black", marginBottom:"1rem"}}></div>
                <p className='category' style={{fontWeight:"600"}} >Shoe Restoration</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Shoe colour restoration</p>
                <p  > Rs 2500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Shoe Sole replacement</p>
                <p  > Rs 3000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Heel Colour restoration</p>
                <p  > Rs 2000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Heel Sole protectio</p>
                <p  > Rs 2500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Colour change</p>
                <p  > Rs 4000 onwards</p>
                </article>
                <br/>
                {/* br */}
                <p className='category' style={{fontWeight:"600"}}>Bag Restoration</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Bag colour restoration</p>
                <p  >Rs 3500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Bag Colour Change</p>
                <p  >Rs 6000 onwards</p>
                </article>
            </div>
            {/*  */}
            {/*  */}
            <div className='PriceBox' style={{margin:"auto",  width:"60%", background:"whitesmoke", marginBottom:"2rem", padding:"1rem", fontFamily:"poppins", textTransform:"capitalize"}}>
                <h6 className='serviceName' style={{fontSize:"2rem", fontFamily:"poppins", fontWeight:"700", marginBottom:"0.5rem"}}>Customise</h6>
                <div style={{width:"50%", height:"0.25rem", background:"black", marginBottom:"1rem"}}></div>
                <p className='category' style={{fontWeight:"600"}} >Shoe Customise</p>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Lace replacement</p>
                <p  >  Rs 600 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Undersole protection shield</p>
                <p  > Rs 1500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Name & Initials Embossing on bags </p>
                <p  > Rs 2500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Sneaker Artwork customisation</p>
                <p  > Rs 5000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"center", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >*** Other leather work customisations are done on request, quotes are provided on the basis the work desired.</p>
                </article>
                <br/>
            </div>
            {/*  */}
            {/*  */}
            <div className='PriceBox' style={{margin:"auto",  width:"60%", background:"whitesmoke", padding:"1rem", fontFamily:"poppins", textTransform:"capitalize"}}>
                <h6 className='serviceName' style={{fontSize:"2rem", fontFamily:"poppins", fontWeight:"700", marginBottom:"0.5rem"}}>Other Services</h6>
                <div style={{width:"50%", height:"0.25rem", background:"black", marginBottom:"1rem"}}></div>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Curtain cleaning</p>
                <p  >Rs 500 per curtain</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Dining Chair</p>
                <p  > Rs 300 per chair</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Rug cleaning</p>
                <p  >Rs 1500 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Couch Cleaning</p>
                <p  >Rs  800 per seat onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Armchair Cleaning</p>
                <p  >Rs 2000 per chair</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Mattress cleaning</p>
                <p  >Rs 2000 onwards</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Pillow cleaning & deodorising</p>
                <p  >Rs 1000 per pillow</p>
                </article>
                <article style={{display:"flex", justifyContent:"space-between", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >Antique cleaning</p>
                <p  >Get a quote</p>
                </article>
                <br/>
                
                <article style={{display:"flex", justifyContent:"center", gap:"1rem", fontFamily:"poppins"}} className='item'>
                <p >*** For any other furniture or furnishings call us to get a quote.</p>
                </article>
            </div>
            {/*  */}
        </div>
    </section>
  )
}

export default Pricing