import { NavLink } from "react-router-dom"

const CompareCars=[
    {
        id:1,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Wagon-R/6741/1564746908438/front-left-side-47.jpg?tr=w-456",
        name:"Renault Triber",
        name1:"Maruti Wagon R",
        category:"suv",
        price:"₹5.30-7.82 Lakh*",
        price1:"₹4.80 - 6.33 Lakh*",
        description:<p>Should you buy Renault Triber or Maruti Wagon R? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Renault Triber price starts at Rs 5.30 Lakh ex-showroom for RXE (Petrol) and Maruti Wagon R price starts Rs 4.80 Lakh ex-showroom for LXI (Petrol). Triber has 999 cc (Petrol top model) engine, while Wagon R has 1197 cc (Petrol top model) engine. As far as mileage is concerned, the Triber has a mileage of 20.0 kmpl (Petrol top model) and the Wagon R has a mileage of 32.52 km/kg (Petrol top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹8,71,686*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹6,97,839</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Offers & Discount</h6></div>
            <div className="col-4 text-center">
            <h6 className="text-center">1 Offer</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none" >View now</NavLink>
            </div>
            <div className="col-4 ">
            <h6 className="float-right">1 Offer</h6>
            <br></br><NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">Check Now</NavLink>
            
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Finance Available (EMI)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹16,595</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹13,729</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹34,946</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Triber Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹31,325</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Wagnor R Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹2,034</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹3,165</h6>
            </div>
            </div>
            // <div className="row"> 
            // <hr className="text-success mt-2"></hr>
            // <h6 className="text-center">₹8,71,686*</h6><hr className="text-success mt-2"></hr>
            // <h6 className="text-center">1 Offer</h6><NavLink to="/compare" data-dismiss="modal" className="text-decoration-none text-center" >View now</NavLink><hr className="text-success mt-2"></hr>
            // <h6 className="text-center">₹16,595</h6><NavLink to="/compare" data-dismiss="modal" className="text-decoration-none text-center" >Check Now</NavLink><hr className="text-success mt-2"></hr>
            // <h6 className="text-center">₹34,946</h6><NavLink to="/compare" data-dismiss="modal" className="text-decoration-none text-center" >Triber Insurance</NavLink><hr className="text-success mt-2"></hr>
            // <h6 className="text-center">₹2,034</h6><hr className="text-success mt-2"></hr>
            // </div>
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">1.0L Petrol Engine</h6></div>
            <div className="col-4">
            <h6 className="float-right">K12M Petrol Engine</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1197</h6></div>
            <div className="col-4">
            <h6 className="float-right">999</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">71bhp@6250rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">81.80bhp@6000rpm</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Torque (nm@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">96Nm@3500rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">113Nm@4200rpm</h6>
            </div>
            </div>
         
            
                 ],

        fuel:  [ 
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Fuel Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Petrol</h6></div>
            <div className="col-4">
            <h6 className="float-right">K12M Petrol Engine</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Mileage (City)</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Mileage (ARAI)</h6></div>
            <div className="col-4">
            <h6 className="text-center">71bhp@6250rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">20.52 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">40.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">32.0 (Litres)</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">McPherson Strut with Lower Triangle & Coil Spring</h6></div>
            <div className="col-4">
            <h6 className="float-right">MacPherson Strut with Coil Spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Torsion Beam Axle</h6></div>
            <div className="col-4">
            <h6 className="float-right">Torsion Beam With Coil Spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electric</h6></div>
            <div className="col-4">
            <h6 className="float-right">Power</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Column</h6></div>
            <div className="col-4">
            <h6 className="text-center">Tilt</h6></div>
            <div className="col-4">
            <h6 className="float-right">Tilt</h6>
            </div>
            </div>
        ],
   
        dimension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Length (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">3990</h6></div>
            <div className="col-4">
            <h6 className="float-right">3655</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1739</h6></div>
            <div className="col-4">
            <h6 className="float-right">1620</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1643</h6></div>
            <div className="col-4">
            <h6 className="float-right">1675</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">182</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            </div>
        ],
       
        comfort:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Power Steering</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Power Windows Front</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Power Windows Rear</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Power Boot</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success text-center"></div>
            </div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            </div>
        ],
  
        interior:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Tachometer</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Electronic Multi Tripmeter</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Leather Seats</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            </div>

        ],
 
        exterior:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Available Colors</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Body Type</h6>
            </div>
            <div className="col-4 text-center">
            <h6 className="">MUV</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All MUV Cars</NavLink> 
            </div>
            <div className="col-4">
            <h6 className="float-right">Hatchback</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">All Hatchback Cars</NavLink> 
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Adjustable Headlights</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            </div>
  
        ],
   
        safety:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Anti Lock Braking System</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Brake Assist</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Central Locking</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Power Door Locks</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            </div>
        ],
   
        entertainment:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Cd Player</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Cd Changer</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Dvd Player</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Radio</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
            </div>
            </div>

        ],

        warranty:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Introduction Date</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Warranty Time</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Warranty Distance</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            </div>
        ],

    },
    
    {
        id:2,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
        name:"Kia Seltos",
        category:"suv",
        price:"₹9.95 - 17.65 Lakh*",
        description:<p>The Kia Seltos has 1 Diesel Engine and 3 Petrol Engine on offer. The Diesel engine is 1493 cc while the Petrol engine is 1497 cc and 1498 cc and 1353 cc . It is available with the Manual & Automatic transmission. Depending upon the variant and fuel type the Seltos has a mileage of 16.1 to 20.8 kmpl. The Seltos is a 5 seater and has length of 4315mm, width of 1800mm and a wheelbase of 2610mm.<br></br>Latest Update: Kia has launched the updated Seltos.
        <br></br>
        <b>Kia Seltos Price:</b> The 2021 Seltos is priced between Rs 9.95 lakh and Rs 17.85 lakh (ex-showroom).
        <br></br>
        <b>Kia Seltos Variants:</b> It is offered in two trims: Tech (HT) Line and GT Line. While the former has five variants (HTE, HTK, HTK+, HTX, and HTX+), the latter has only two [GTX(O) and GTX+].
        <br></br>
        <b>Kia Seltos Seating Capacity:</b> The Seltos can seat up to five people.
        <br></br>
        <b>Kia Seltos Powertrains:</b> It comes with three engine options: 1.5-litre petrol (115PS/144Nm), 1.4-litre turbocharged petrol (140PS/242Nm), and 1.5-litre diesel (115PS/250Nm). A 6-speed manual gearbox is offered as standard with all three engines. It also gets optional automatic transmissions: a 7-speed DCT (1.4-litre turbo-petrol), a CVT (1.5-litre petrol), and a 6-speed torque converter unit (1.5-litre diesel). The 1.5-litre petrol engine also gets a 6-speed iMT (clutchless manual) gearbox.
        <br></br>
        Kia claims a fuel efficiency of 16.5kmpl for the petrol-manual and 16.8kmpl for the petrol-CVT variants. The diesel-manual’s claimed fuel efficiency figure stands at 21kmpl, while the 6-speed AT’s stands at 18kmpl. The 1.4-litre turbo-petrol, paired with the DCT, offers a claimed mileage of 16.5kmpl, while the manual returns 16.1kmpl.
        <br></br>
        <b>Kia Seltos Features:</b> The Seltos packs a 10.25-inch touchscreen infotainment system along with Kia's UVO connected car technology, an air purifier, ambient lighting, and an 8-inch head-up display. It also gets ventilated front seats, a power-adjustable driver’s seat, a 7-inch multi-information display, an 8-speaker Bose sound system, and a sunroof. It comes with smartwatch connectivity, smart-key remote engine start, and a 'Hello Kia' wake up command as well.
        <br></br>
        <b>Kia Seltos Safety:</b> It gets up to six airbags, ABS with EBD, brake assist, emergency stop signal, vehicle stability management (VSM), electronic stability control (ESC), and hill assist control (HAC).</p>,
        exterior:"https://stimg.cardekho.com/images/feelthecar360view/Exterior/Kia/Kia-Seltos/1563185539/Exterior.html?hotSpotNonApp=yes",
        interior:"https://stimg.cardekho.com/images/feelthecar360view/Interior/Kia/Kia-Seltos/1581665713/Interior.html?hotSpotNonApp=yes",
        interior1:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/steering-wheel-54.jpg",
        interior2:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/ac-controls-151.jpg",
        interior3:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/infotainment-system-main-menu-183.jpg",
        interior4:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/front-air-vents-144.jpg",
        color1:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/232_intense-red-aurora-black-pearl_b51829.jpg",
        color2:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/231_steel-Silve-punchy-Orange_949395.jpg",
        color3:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/226_Aurora-Black-Pearl_343638.jpg",
        Engine:"1353cc-1498cc",
        seat:"5",
        BHP:"113.4-138.08 Bhp",
        specification:  [
            <div className="row"> 
                        <div>ARAI Mileage<h6 className="float-right ">17.8 kmpl</h6></div><hr className="text-success mt-2"></hr>
                        <div>Engine Displacement (cc)<h6 className="float-right ">1493</h6></div><hr className="text-success mt-2"></hr>
                        <div>Max Torque (nm@rpm)<h6 className="float-right ">250nm@1500-2750rpm</h6></div><hr className="text-success mt-2"></hr>
                        <div>TransmissionType<h6 className="float-right ">Automatic</h6></div><hr className="text-success mt-2"></hr>
                        <div>Fuel Tank Capacity<h6 className="float-right ">50.0</h6></div><hr className="text-success mt-2"></hr>
                        <div>Service Cost (Avg. of 5 years)<h6 className="float-right ">₹4,628</h6></div><hr className="text-success mt-2"></hr>
                        </div>
                        ],
        specification2:  [
            <div className="row"> 
            <div>Fuel Type<h6 className="float-right ">Diesel</h6></div><hr className="text-success mt-2"></hr>
            <div>Max Power (bhp@rpm)<h6 className="float-right ">113.4bhp@4000rpm</h6></div><hr className="text-success mt-2"></hr>
            <div>Seating Capacity<h6 className="float-right ">5</h6></div><hr className="text-success mt-2"></hr>
            <div>Boot Space (Litres)<h6 className="float-right ">433</h6></div><hr className="text-success mt-2"></hr>
            <div>Body Type<h6 className="float-right ">SUV</h6></div><hr className="text-success mt-2"></hr>
            </div>    
               ],


        feature:  [
            <div className="row"> 
            <h6 className="">Power Steering</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Anti Lock Braking System</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Driver Airbag</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Fog Lights - Front</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Automatic Climate Control</h6><hr className="text-success mt-2"></hr>
            </div>
                 ],
        
         feature2:  [
            
            <div className="row"> 
            <h6 className="">Power Windows Front</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Air Conditioner</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Passenger Airbag</h6><hr className="text-success mt-2"></hr>
            <h6 className="">Alloy Wheels</h6><hr className="text-success mt-2"></hr>
            </div>   
           ],

        topFeatures:[
        <div className="row">    
        <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Power Windows Front</h7></div>
        <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Air Conditioner</h7></div>
        <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Power Steering</h7></div>
        <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Anti Lock Braking System</h7></div>
        <a href="#more" className="col-12 py-3 text-center text-decoration-none"><b>+6 more</b></a>
        </div>
        ],
    },
    // {
    //     id:3,
    //     rate:"4.5",
    //     image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
    //     image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
    //     name:"Kia Seltos",
    //     category:"suv",
    //     price:"₹9.95 - 17.65 Lakh*",
    //     description:<p>The Kia Seltos has 1 Diesel Engine and 3 Petrol Engine on offer. The Diesel engine is 1493 cc while the Petrol engine is 1497 cc and 1498 cc and 1353 cc . It is available with the Manual & Automatic transmission. Depending upon the variant and fuel type the Seltos has a mileage of 16.1 to 20.8 kmpl. The Seltos is a 5 seater and has length of 4315mm, width of 1800mm and a wheelbase of 2610mm.<br></br>Latest Update: Kia has launched the updated Seltos.
    //     <br></br>
    //     <b>Kia Seltos Price:</b> The 2021 Seltos is priced between Rs 9.95 lakh and Rs 17.85 lakh (ex-showroom).
    //     <br></br>
    //     <b>Kia Seltos Variants:</b> It is offered in two trims: Tech (HT) Line and GT Line. While the former has five variants (HTE, HTK, HTK+, HTX, and HTX+), the latter has only two [GTX(O) and GTX+].
    //     <br></br>
    //     <b>Kia Seltos Seating Capacity:</b> The Seltos can seat up to five people.
    //     <br></br>
    //     <b>Kia Seltos Powertrains:</b> It comes with three engine options: 1.5-litre petrol (115PS/144Nm), 1.4-litre turbocharged petrol (140PS/242Nm), and 1.5-litre diesel (115PS/250Nm). A 6-speed manual gearbox is offered as standard with all three engines. It also gets optional automatic transmissions: a 7-speed DCT (1.4-litre turbo-petrol), a CVT (1.5-litre petrol), and a 6-speed torque converter unit (1.5-litre diesel). The 1.5-litre petrol engine also gets a 6-speed iMT (clutchless manual) gearbox.
    //     <br></br>
    //     Kia claims a fuel efficiency of 16.5kmpl for the petrol-manual and 16.8kmpl for the petrol-CVT variants. The diesel-manual’s claimed fuel efficiency figure stands at 21kmpl, while the 6-speed AT’s stands at 18kmpl. The 1.4-litre turbo-petrol, paired with the DCT, offers a claimed mileage of 16.5kmpl, while the manual returns 16.1kmpl.
    //     <br></br>
    //     <b>Kia Seltos Features:</b> The Seltos packs a 10.25-inch touchscreen infotainment system along with Kia's UVO connected car technology, an air purifier, ambient lighting, and an 8-inch head-up display. It also gets ventilated front seats, a power-adjustable driver’s seat, a 7-inch multi-information display, an 8-speaker Bose sound system, and a sunroof. It comes with smartwatch connectivity, smart-key remote engine start, and a 'Hello Kia' wake up command as well.
    //     <br></br>
    //     <b>Kia Seltos Safety:</b> It gets up to six airbags, ABS with EBD, brake assist, emergency stop signal, vehicle stability management (VSM), electronic stability control (ESC), and hill assist control (HAC).</p>,
    //     exterior:"https://stimg.cardekho.com/images/feelthecar360view/Exterior/Kia/Kia-Seltos/1563185539/Exterior.html?hotSpotNonApp=yes",
    //     interior:"https://stimg.cardekho.com/images/feelthecar360view/Interior/Kia/Kia-Seltos/1581665713/Interior.html?hotSpotNonApp=yes",
    //     interior1:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/steering-wheel-54.jpg",
    //     interior2:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/ac-controls-151.jpg",
    //     interior3:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/infotainment-system-main-menu-183.jpg",
    //     interior4:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/front-air-vents-144.jpg",
    //     color1:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/232_intense-red-aurora-black-pearl_b51829.jpg",
    //     color2:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/231_steel-Silve-punchy-Orange_949395.jpg",
    //     color3:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/226_Aurora-Black-Pearl_343638.jpg",
    //     Engine:"1353cc-1498cc",
    //     seat:"5",
    //     BHP:"113.4-138.08 Bhp",
    //     specification:  [
    //         <div className="row"> 
    //                     <div>ARAI Mileage<h6 className="float-right ">17.8 kmpl</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Engine Displacement (cc)<h6 className="float-right ">1493</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Max Torque (nm@rpm)<h6 className="float-right ">250nm@1500-2750rpm</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>TransmissionType<h6 className="float-right ">Automatic</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Fuel Tank Capacity<h6 className="float-right ">50.0</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Service Cost (Avg. of 5 years)<h6 className="float-right ">₹4,628</h6></div><hr className="text-success mt-2"></hr>
    //                     </div>
    //                     ],
    //     specification2:  [
    //         <div className="row"> 
    //         <div>Fuel Type<h6 className="float-right ">Diesel</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Max Power (bhp@rpm)<h6 className="float-right ">113.4bhp@4000rpm</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Seating Capacity<h6 className="float-right ">5</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Boot Space (Litres)<h6 className="float-right ">433</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Body Type<h6 className="float-right ">SUV</h6></div><hr className="text-success mt-2"></hr>
    //         </div>    
    //            ],


    //     feature:  [
    //         <div className="row"> 
    //         <h6 className="">Power Steering</h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Anti Lock Braking System<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Driver Airbag<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Fog Lights - Front<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Automatic Climate Control<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         </div>
    //              ],
        
    //      feature2:  [
            
    //         <div className="row"> 
    //         <h6 className="">Power Windows Front<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Air Conditioner<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Passenger Airbag<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Alloy Wheels<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         </div>   
    //        ],

    //     topFeatures:[
    //     <div className="row">    
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Power Windows Front</h7></div>
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Air Conditioner</h7></div>
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Power Steering</h7></div>
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Anti Lock Braking System</h7></div>
    //     <a href="#more" className="col-12 py-3 text-center text-decoration-none"><b>+6 more</b></a>
    //     </div>
    //     ],
    // },
    // {
    //     id:4,
    //     rate:"4.5",
    //     image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
    //     image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
    //     name:"Kia Seltos",
    //     category:"suv",
    //     price:"₹9.95 - 17.65 Lakh*",
    //     description:<p>The Kia Seltos has 1 Diesel Engine and 3 Petrol Engine on offer. The Diesel engine is 1493 cc while the Petrol engine is 1497 cc and 1498 cc and 1353 cc . It is available with the Manual & Automatic transmission. Depending upon the variant and fuel type the Seltos has a mileage of 16.1 to 20.8 kmpl. The Seltos is a 5 seater and has length of 4315mm, width of 1800mm and a wheelbase of 2610mm.<br></br>Latest Update: Kia has launched the updated Seltos.
    //     <br></br>
    //     <b>Kia Seltos Price:</b> The 2021 Seltos is priced between Rs 9.95 lakh and Rs 17.85 lakh (ex-showroom).
    //     <br></br>
    //     <b>Kia Seltos Variants:</b> It is offered in two trims: Tech (HT) Line and GT Line. While the former has five variants (HTE, HTK, HTK+, HTX, and HTX+), the latter has only two [GTX(O) and GTX+].
    //     <br></br>
    //     <b>Kia Seltos Seating Capacity:</b> The Seltos can seat up to five people.
    //     <br></br>
    //     <b>Kia Seltos Powertrains:</b> It comes with three engine options: 1.5-litre petrol (115PS/144Nm), 1.4-litre turbocharged petrol (140PS/242Nm), and 1.5-litre diesel (115PS/250Nm). A 6-speed manual gearbox is offered as standard with all three engines. It also gets optional automatic transmissions: a 7-speed DCT (1.4-litre turbo-petrol), a CVT (1.5-litre petrol), and a 6-speed torque converter unit (1.5-litre diesel). The 1.5-litre petrol engine also gets a 6-speed iMT (clutchless manual) gearbox.
    //     <br></br>
    //     Kia claims a fuel efficiency of 16.5kmpl for the petrol-manual and 16.8kmpl for the petrol-CVT variants. The diesel-manual’s claimed fuel efficiency figure stands at 21kmpl, while the 6-speed AT’s stands at 18kmpl. The 1.4-litre turbo-petrol, paired with the DCT, offers a claimed mileage of 16.5kmpl, while the manual returns 16.1kmpl.
    //     <br></br>
    //     <b>Kia Seltos Features:</b> The Seltos packs a 10.25-inch touchscreen infotainment system along with Kia's UVO connected car technology, an air purifier, ambient lighting, and an 8-inch head-up display. It also gets ventilated front seats, a power-adjustable driver’s seat, a 7-inch multi-information display, an 8-speaker Bose sound system, and a sunroof. It comes with smartwatch connectivity, smart-key remote engine start, and a 'Hello Kia' wake up command as well.
    //     <br></br>
    //     <b>Kia Seltos Safety:</b> It gets up to six airbags, ABS with EBD, brake assist, emergency stop signal, vehicle stability management (VSM), electronic stability control (ESC), and hill assist control (HAC).</p>,
    //     exterior:"https://stimg.cardekho.com/images/feelthecar360view/Exterior/Kia/Kia-Seltos/1563185539/Exterior.html?hotSpotNonApp=yes",
    //     interior:"https://stimg.cardekho.com/images/feelthecar360view/Interior/Kia/Kia-Seltos/1581665713/Interior.html?hotSpotNonApp=yes",
    //     interior1:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/steering-wheel-54.jpg",
    //     interior2:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/ac-controls-151.jpg",
    //     interior3:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/infotainment-system-main-menu-183.jpg",
    //     interior4:"https://stimg.cardekho.com/images/carinteriorimages/930x620/Kia/Seltos/6226/1619864686803/front-air-vents-144.jpg",
    //     color1:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/232_intense-red-aurora-black-pearl_b51829.jpg",
    //     color2:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/231_steel-Silve-punchy-Orange_949395.jpg",
    //     color3:"https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos/6226/1595843473689/226_Aurora-Black-Pearl_343638.jpg",
    //     Engine:"1353cc-1498cc",
    //     seat:"5",
    //     BHP:"113.4-138.08 Bhp",
    //     specification:  [
    //         <div className="row"> 
    //                     <div>ARAI Mileage<h6 className="float-right ">17.8 kmpl</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Engine Displacement (cc)<h6 className="float-right ">1493</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Max Torque (nm@rpm)<h6 className="float-right ">250nm@1500-2750rpm</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>TransmissionType<h6 className="float-right ">Automatic</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Fuel Tank Capacity<h6 className="float-right ">50.0</h6></div><hr className="text-success mt-2"></hr>
    //                     <div>Service Cost (Avg. of 5 years)<h6 className="float-right ">₹4,628</h6></div><hr className="text-success mt-2"></hr>
    //                     </div>
    //                     ],
    //     specification2:  [
    //         <div className="row"> 
    //         <div>Fuel Type<h6 className="float-right ">Diesel</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Max Power (bhp@rpm)<h6 className="float-right ">113.4bhp@4000rpm</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Seating Capacity<h6 className="float-right ">5</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Boot Space (Litres)<h6 className="float-right ">433</h6></div><hr className="text-success mt-2"></hr>
    //         <div>Body Type<h6 className="float-right ">SUV</h6></div><hr className="text-success mt-2"></hr>
    //         </div>    
    //            ],


    //     feature:  [
    //         <div className="row"> 
    //         <h6 className="">Power Steering<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Anti Lock Braking System<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Driver Airbag<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Fog Lights - Front<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Automatic Climate Control<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         </div>
    //              ],
        
    //      feature2:  [
            
    //         <div className="row"> 
    //         <h6 className="">Power Windows Front<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Air Conditioner<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Passenger Airbag<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         <h6 className="">Alloy Wheels<div className="fa fa-check text-success float-right "></div></h6><hr className="text-success mt-2"></hr>
    //         </div>   
    //        ],

    //     topFeatures:[
    //     <div className="row">    
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Power Windows Front</h7></div>
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Air Conditioner</h7></div>
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Power Steering</h7></div>
    //     <div className="fa fa-check text-success col-6 py-3 pl-4">&nbsp;&nbsp;<h7 className="text-dark font-weight-bold">Anti Lock Braking System</h7></div>
    //     <a href="#more" className="col-12 py-3 text-center text-decoration-none"><b>+6 more</b></a>
    //     </div>
    //     ],
    // },
]
export default CompareCars;