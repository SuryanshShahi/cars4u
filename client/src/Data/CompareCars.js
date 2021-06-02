import { NavLink } from "react-router-dom"

const CompareCars=[
    {
        id:21,
        id1:28,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Wagon-R/6741/1564746908438/front-left-side-47.jpg?tr=w-456",
        name:"Renault Triber",
        name1:"Maruti Wagonr",
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
            <h6 className="text-center">999</h6></div>
            <div className="col-4">
            <h6 className="float-right">1197</h6>
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
            <h6 className="float-right">Petrol</h6>
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
            <h6 className="text-center">18.2 kmpl</h6></div>
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
        Pros:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Renault Triber</h4>
            <div className="container-fluid">
            <ul>
            <li>Practicality: Apart from modular seating, features like a cooled central glovebox, separate air vents for second row as well as third row, and loads of cubby holes make it a practical car.</li>
            <li>Boot space: A capacity of 625 litres with five seats can put even compact sedans to shame.</li>
            <li>Modular seating: Triber can be turned into a two-seater, four seater, five-seater, six-seater or even a seven-seater vehicle. Its middle row can also slide forward and backwards.</li>
            <li>Looks: While looks are subjective, Renault should be given credit for designing a sub-4m MPV that doesn’t look awkward from any angle.</li>
            <li>Available with an AMT automatic as well.</li>
            <li>Soon to be launched with a turbocharged petrol engine.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Wagon R</h4>
            <div className="container-fluid">
            <ul>
            <li>Easy ingress and egress: Entering into and exiting from the WagonR is easy as you don’t have to bend much.</li>
            <li>Spacious cabin: The increase in exterior dimensions and wheelbase has resulted in more space inside the cabin.</li>
            <li>Cavernous boot: 341-litre boot space is maximum in its segment. In fact, it’s comparable or even bigger than cars from a segment above. Can fit 3-4 medium size bags easily. The rear seat is also 60:40 split, adding more versatility.</li>
            <li>AMT with both engines: The option of AMT ups the convenience quotient in an already easy to drive car. Available in V and Z variants, and with both the engines.</li>
            <li>Safer: ABS standard, dual front airbags available as option on all variants. The new platform is also stronger than the one before.</li>
            </ul>
            </div>
            </div>
            </div>
        ],
        Cons:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>Engine: The 1.0-litre engine that puts out 72PS of maximum power might feel underpowered with a full load of passengers.</li>
            <li>No diesel engine option: A practical car like the Triber begs to be driven over long distances. Buyers with such a requirement might miss the option of a frugal diesel engine.</li>
            <li>Missing features: No automatic climate control, steering-mounted audio controls, alloy wheels or foglamps.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>Plastic quality: Quality of materials in the cabin could've been better. Consistency in quality is also a concern.</li>
            <li>Spongy brakes: There could have been better pedal response.</li>
            <li>Missing features: Adjustable rear headrests, height adjustable driver’s seat, rear parking camera and alloy wheels should have been on offer, at least on the top variant.</li>
            <li>Weak cabin insulation: NVH levels aren't the best - a lot of engine noise creeps into the cabin.</li>
            </ul>
            </div>
            </div>
            </div>
        ]
    }, 
    {
        id:14,
        id1:32,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
        name:"Hyundai Creta",
        name1:"Kia Seltos",
        category:"suv",
        price:"₹9.99-17.70 Lakh*",
        price1:"₹9.95-17.65 Lakh*",
        description:<p>Should you buy Hyundai Creta or Kia Seltos? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Hyundai Creta price starts at Rs 9.99 Lakh ex-showroom for E (Petrol) and Kia Seltos price starts Rs 9.95 Lakh ex-showroom for HTE G (Petrol). Creta has 1497 cc (Petrol top model) engine, while Seltos has 1498 cc (Petrol top model) engine. As far as mileage is concerned, the Creta has a mileage of 21.4 kmpl (Diesel top model) and the Seltos has a mileage of 20.8 kmpl (Diesel top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹20,89,717*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹20,74,399</h6>
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
            <h6 className="text-center">₹39,774</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹40,326</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹76,591</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Creta Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹64,294</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Seltos Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹3,790</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹4,628</h6>
            </div>
            </div>
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">1.5L CRDi Diesel</h6></div>
            <div className="col-4">
            <h6 className="float-right">1.5L CRDi VGT</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1493</h6></div>
            <div className="col-4">
            <h6 className="float-right">1493</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fast Charging</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">113.42bhp@4000rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">113.4bhp@4000rpm</h6>
            </div>
            </div>
         
            
                 ],

        fuel:  [ 
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Fuel Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Diesel</h6></div>
            <div className="col-4">
            <h6 className="float-right">Diesel</h6>
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
            <h6 className="text-center">18.5 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">17.8 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">50.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">50.0 (Litres)</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">MacPherson Strut with Coil Spring</h6></div>
            <div className="col-4">
            <h6 className="float-right">McPherson Strut & Coil Spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Coupled Torsion Beam Axle</h6></div>
            <div className="col-4">
            <h6 className="float-right">Coupled Torsion Beam Axle with Coil Spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Power</h6></div>
            <div className="col-4">
            <h6 className="float-right">Electric</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Column</h6></div>
            <div className="col-4">
            <h6 className="text-center">Tilt</h6></div>
            <div className="col-4">
            <h6 className="float-right">Tilt & Telescopic</h6>
            </div>
            </div>
        ],
   
        dimension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Length (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">4300</h6></div>
            <div className="col-4">
            <h6 className="float-right">4315</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1790</h6></div>
            <div className="col-4">
            <h6 className="float-right">1760</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1635</h6></div>
            <div className="col-4">
            <h6 className="float-right">1645</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">-</h6></div>
            <div className="col-4">
            <h6 className="float-right">190</h6>
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
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <h6 className="">SUV</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All SUV Cars</NavLink> 
            </div>
            <div className="col-4">
            <h6 className="float-right">SUV</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">All SUV Cars</NavLink> 
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Adjustable Headlights</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success float-right"></div>
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
        id:32,
        id1:33,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/7256/1619865764843/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        name:"Kia Seltos",
        name1:"Kia Sonet",
        category:"suv",
        price:"₹9.95-17.65 Lakh*",
        price1:"₹6.79 - 13.35 Lakh*",
        description:<p>Should you buy Kia Seltos or Kia Sonet? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Kia Seltos price starts at Rs 9.95 Lakh ex-showroom for HTE G (Petrol) and Kia Sonet price starts Rs 6.79 Lakh ex-showroom for 1.2 HTE (Petrol). Seltos has 1498 cc (Petrol top model) engine, while Sonet has 1498 cc (Diesel top model) engine. As far as mileage is concerned, the Seltos has a mileage of 20.8 kmpl (Diesel top model) and the Sonet has a mileage of 24.1 kmpl (Diesel top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹20,74,399*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹15,72,706</h6>
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
            <h6 className="text-center">₹40,326</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹30,705</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹64,294</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Seltos Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹50,651</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Sonet Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹4,628</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹3,980</h6>
            </div>
            </div>
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">1.5L CRDi VGT</h6></div>
            <div className="col-4">
            <h6 className="float-right">1.5L CRDi VGT</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1493</h6></div>
            <div className="col-4">
            <h6 className="float-right">1493</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fast Charging</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">113.4bhp@4000rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">113.42bhp@4000rpm</h6>
            </div>
            </div>
         
            
                 ],

        fuel:  [ 
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Fuel Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Diesel</h6></div>
            <div className="col-4">
            <h6 className="float-right">Diesel</h6>
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
            <h6 className="text-center">17.8 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">19.0 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">50.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">45.0 (Litres)</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">MacPherson Strut & Coil Spring</h6></div>
            <div className="col-4">
            <h6 className="float-right">McPherson Strut with Coil Spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Coupled Torsion Beam Axle</h6></div>
            <div className="col-4">
            <h6 className="float-right">Coupled Torsion Beam Axle with Coil Spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electric</h6></div>
            <div className="col-4">
            <h6 className="float-right">Electric</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Column</h6></div>
            <div className="col-4">
            <h6 className="text-center">Tilt & Telescopic</h6></div>
            <div className="col-4">
            <h6 className="float-right">Tilt </h6>
            </div>
            </div>
        ],
   
        dimension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Length (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">4315</h6></div>
            <div className="col-4">
            <h6 className="float-right">3995</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1800</h6></div>
            <div className="col-4">
            <h6 className="float-right">1790</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1645</h6></div>
            <div className="col-4">
            <h6 className="float-right">1642</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">190</h6></div>
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
            <h6 className="float-left">Power folding 3rd Row Seat</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger text-center"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
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
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <h6 className="">SUV</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All SUV Cars</NavLink> 
            </div>
            <div className="col-4">
            <h6 className="float-right">SUV</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">All SUV Cars</NavLink> 
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Adjustable Headlights</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
        id:26,
        id1:38,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/6778/1615985070703/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Toyota-Glanza/6902/1559807182519/front-left-side-47.jpg?tr=w-456",
        name:"Maruti Baleno",
        name1:"Toyota Glanza",
        category:"suv",
        price:"₹5.98-9.30 Lakh*",
        price1:"₹7.34-9.30 Lakh*",
        description:<p>Should you buy Maruti Baleno or Toyota Glanza? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Maruti Baleno price starts at Rs 5.98 Lakh ex-showroom for Sigma (Petrol) and Toyota Glanza price starts Rs 7.34 Lakh ex-showroom for G (Petrol). Baleno has 1197 cc (Petrol top model) engine, while Glanza has 1197 cc (Petrol top model) engine. As far as mileage is concerned, the Baleno has a mileage of 23.87 kmpl (Petrol top model) and the Glanza has a mileage of 23.87 kmpl (Petrol top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹10,35,839*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹10,36,508*</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Offers & Discount</h6></div>
            <div className="col-4 text-center">
            <h6 className="text-center">1 Offer</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none" >View now</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">1 Offer</h6>
            <br></br><NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">Check Now</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Finance Available (EMI)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹20,235</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹20,646</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹34,409</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Baleno Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹40,508</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Glanza Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹3,656</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹3,416</h6>
            </div>
            </div>
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">1.2L VVT Engine</h6></div>
            <div className="col-4">
            <h6 className="float-right">Petrol Engine</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1197</h6></div>
            <div className="col-4">
            <h6 className="float-right">1197</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fast Charging</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">81.80bhp@4000rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">81.80bhp@4000rpm</h6>
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
            <h6 className="float-right">Petrol</h6>
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
            <h6 className="text-center">19.56 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">19.56 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">37.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">37.0 (Litres)</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">MacPherson Strut</h6></div>
            <div className="col-4">
            <h6 className="float-right">MacPherson Strut</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Torsion Beam</h6></div>
            <div className="col-4">
            <h6 className="float-right">Torsion Beam</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electric</h6></div>
            <div className="col-4">
            <h6 className="float-right">Electric</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Column</h6></div>
            <div className="col-4">
            <h6 className="text-center">Tilt & Telescopic</h6></div>
            <div className="col-4">
            <h6 className="float-right">Tilt & Telescopic</h6>
            </div>
            </div>
        ],
   
        dimension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Length (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">3995</h6></div>
            <div className="col-4">
            <h6 className="float-right">3995</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1745</h6></div>
            <div className="col-4">
            <h6 className="float-right">1745</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1510</h6></div>
            <div className="col-4">
            <h6 className="float-right">1510</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">170</h6></div>
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
            <div className="fa fa-check text-success float-right"></div>
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
            <h6 className="">Hatchback</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All Hatchback Cars</NavLink> 
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
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success float-right"></div>
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
        Pros:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>LED projector headlamps from Delta variant onwards. LEDs usually offer better visibility than halogens or bi-xenon units.</li>
            <li>Automatic climate control from Delta variant onwards. unlike a manual AC, automatic climate control allows the user to maintain a set temperature inside the cabin as per their needs.</li>
            <li>ISOFIX child seat anchors are standard across the range. This lets you attach a child seat on the back seat of the hatchback to offer kids below the age of 10 better safety.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>Apart from dual airbags, ABS with EBD, rear parking camera, the Glanza gets ISOFIX as standard across the range.</li>
            <li>Gets plenty of standard features like LED projector headlamps, 16-inch alloy wheels, 7-inch touchscreen and push button start/stop.</li>
            <li>Comes with a 3-year/1 lakh km standard warranty as well as a 5-year/2,20,000km extended warranty.</li>
            <li>All engine and transmission options available from the base variant itself.</li>
            </ul>
            </div>
            </div>
            </div>  
        ],
        Cons:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>LED projector headlamps from Delta variant onwards. LEDs usually offer better visibility than halogens or bi-xenon units.</li>
            <li>Automatic climate control from Delta variant onwards. unlike a manual AC, automatic climate control allows the user to maintain a set temperature inside the cabin as per their needs.</li>
            <li>ISOFIX child seat anchors are standard across the range. This lets you attach a child seat on the back seat of the hatchback to offer kids below the age of 10 better safety.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>Apart from dual airbags, ABS with EBD, rear parking camera, the Glanza gets ISOFIX as standard across the range.</li>
            <li>Gets plenty of standard features like LED projector headlamps, 16-inch alloy wheels, 7-inch touchscreen and push button start/stop.</li>
            <li>Comes with a 3-year/1 lakh km standard warranty as well as a 5-year/2,20,000km extended warranty.</li>
            <li>All engine and transmission options available from the base variant itself.</li>
            </ul>
            </div>
            </div>
            </div>
            
        ]
    },
    {
        id:26,
        id1:30,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/6778/1615985070703/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA/7269/1621948227508/front-left-side-47.jpg?tr=w-456",
        name:"Maruti Baleno",
        name1:"Mercedes-Benz GLA",
        category:"suv",
        price:"₹5.98-9.30 Lakh*",
        price1:"₹42.10-57.28 Lakh*",
        description:<p>Should you buy Maruti Baleno or Mercedes-Benz GLA? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Maruti Baleno price starts at Rs 5.98 Lakh ex-showroom for Sigma (Petrol) and Mercedes-Benz GLA price starts Rs 42.10 Lakh ex-showroom for 200 (Petrol). Baleno has 1197 cc (Petrol top model) engine, while GLA has 1991 cc (Petrol top model) engine. As far as mileage is concerned, the Baleno has a mileage of 23.87 kmpl (Petrol top model) and the GLA has a mileage of - (Petrol top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹10,35,839*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹66,07,096*</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Offers & Discount</h6></div>
            <div className="col-4 text-center">
            <h6 className="text-center">1 Offer</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none" >View now</NavLink>
            </div>
            <div className="col-4 ">
            <div className="fa fa-times text-danger float-right"></div>
            
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Finance Available (EMI)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹20,235</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹1,25,752</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹34,409</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Baleno Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹2,49,016</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >GLA Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹3,656</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            </div>
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">1.2L VVT Engine</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1197</h6></div>
            <div className="col-4">
            <h6 className="float-right">1991</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fast Charging</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">81.80bhp@4000rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">301.73bhp@4000rpm</h6>
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
            <h6 className="float-right">Petrol</h6>
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
            <h6 className="text-center">19.56 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">37.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">NA</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">MacPherson Strut</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Torsion Beam</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electric</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Column</h6></div>
            <div className="col-4">
            <h6 className="text-center">Tilt & Telescopic</h6></div>
            <div className="col-4">
            <h6 className="float-right">- </h6>
            </div>
            </div>
        ],
   
        dimension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Length (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">3995</h6></div>
            <div className="col-4">
            <h6 className="float-right">4436</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1745</h6></div>
            <div className="col-4">
            <h6 className="float-right">2020</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1510</h6></div>
            <div className="col-4">
            <h6 className="float-right">1588</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">170</h6></div>
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
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success float-right"></div>
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
            <h6 className="">Hatchback</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All Hatchback Cars</NavLink> 
            </div>
            <div className="col-4">
            <h6 className="float-right">SUV</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">All SUV Cars</NavLink> 
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Adjustable Headlights</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success float-right"></div>
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
        id:24,
        id1:29,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7381/1617960171816/front-left-side-47.jpg?tr=w-456",
        name:"Maruti Swift",
        name1:"Tata Tiago",
        category:"suv",
        price:"₹5.73-8.41 Lakh*",
        price1:"₹4.99-6.95 Lakh*",
        description:<p>Should you buy Maruti Swift or Tata Tiago? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Maruti Swift price starts at Rs 5.73 Lakh ex-showroom for LXI (Petrol) and Tata Tiago price starts Rs 4.99 Lakh ex-showroom for XE (Petrol). Swift has 1197 cc (Petrol top model) engine, while Tiago has 1199 cc (Petrol top model) engine. As far as mileage is concerned, the Swift has a mileage of 23.76 kmpl (Petrol top model) and the Tiago has a mileage of 23.84 kmpl (Petrol top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹9,43,017*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹7,83,231#*</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Offers & Discount</h6></div>
            <div className="col-4 text-center">
            <h6 className="text-center">1 Offer</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none" >View now</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">1 Offer</h6>
            <br></br><NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">Check Now</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Finance Available (EMI)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹18,504</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹15,616</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹34,953</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Swift Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹30,168</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Tiago Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹4,703</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹5,297</h6>
            </div>
            </div>
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">K series Dual Jet</h6></div>
            <div className="col-4">
            <h6 className="float-right">1.2L Revotron</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1197</h6></div>
            <div className="col-4">
            <h6 className="float-right">1199</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fast Charging</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">81.50bhp@4000rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">84.48bhp@4000rpm</h6>
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
            <h6 className="float-right">Petrol</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Mileage (City)</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <h6 className="float-right">16.04 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Mileage (ARAI)</h6></div>
            <div className="col-4">
            <h6 className="text-center">23.76 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">23.84 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">37.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">35.0 (Litres)</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">MacPherson Strut</h6></div>
            <div className="col-4">
            <h6 className="float-right">Independent, Lower wishbone, McPherson (dual path) strut type</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Torsion Beam</h6></div>
            <div className="col-4">
            <h6 className="float-right">Twist beam with coil spring mounted on hydraulic shocks</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electric</h6></div>
            <div className="col-4">
            <h6 className="float-right">Electric</h6>
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
            <h6 className="text-center">3845</h6></div>
            <div className="col-4">
            <h6 className="float-right">3765</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1735</h6></div>
            <div className="col-4">
            <h6 className="float-right">1677</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1530</h6></div>
            <div className="col-4">
            <h6 className="float-right">1535</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">-</h6></div>
            <div className="col-4">
            <h6 className="float-right">170</h6>
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
            <h6 className="float-left">-</h6>
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
            <h6 className="">Hatchback</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All Hatchback Cars</NavLink> 
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
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success "></div>
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
        Pros:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>Funky styling still gets attention. Lots of modification potential too!</li>
            <li>Playful chassis and steering makes it quite a hoot to drive.</li>
            <li>New features such as cruise control and coloured MID make it a better package.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>Probably the best looking hatchback of the lot</li>
            <li>Build quality is impressive</li>
            <li>4-stars in Global NCAP speaks highly about safety</li>
            <li>Segment above features</li>
            </ul>
            </div>
            </div>
            </div>  
        ],
        Cons:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>Pricing is woefully close to the Baleno, a car that offers more space and better quality.</li>
            <li>No significant design changes. Doesn’t look like a new model.</li>
            <li>New safety features are limited to the AMT variant.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>3-pot Engine is not the most refined in the segment</li>
            <li>AMT transmission is slow to shift</li>
            <li>Plastic starts to rattle in some models</li>
            </ul>
            </div>
            </div>
            </div>
            
        ]
    },
    {
        id:39,
        id1:40,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Magnite/8127/1608191740345/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Kiger/8361/1615378654259/front-left-side-47.jpg?tr=w-456",
        name:"Nissan Magnite",
        name1:"Renault Kiger",
        category:"suv",
        price:"₹5.59-10.00 Lakh*",
        price1:"₹5.45-9.75 Lakh*",
        description:<p>Should you buy Nissan Magnite or Renault Kiger? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Nissan Magnite price starts at Rs 5.59 Lakh ex-showroom for XE (Petrol) and Renault Kiger price starts Rs 5.45 Lakh ex-showroom for RXE (Petrol). Magnite has 999 cc (Petrol top model) engine, while Kiger has 999 cc (Petrol top model) engine. As far as mileage is concerned, the Magnite has a mileage of 20.0 kmpl (Petrol top model) and the Kiger has a mileage of - (Petrol top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹11,42,588*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹10,84,962</h6>
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
            <h6 className="text-center">₹21,753</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹20,661</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹42,588</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Magnite Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹41,712</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Kiger Insurance</NavLink>
            </div>
            </div>
            
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">HRA0 1.0 TURBO PETROL</h6></div>
            <div className="col-4">
            <h6 className="float-right">1.0 L Turbocharged</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">999</h6></div>
            <div className="col-4">
            <h6 className="float-right">999</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fast Charging</h6></div>
            <div className="col-4 text-center">
            <div className="fa fa-times text-danger"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">98.63bhp@5000rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">98.63bhp@4000rpm</h6>
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
            <h6 className="float-right">Petrol</h6>
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
            <h6 className="text-center">17.7 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">-</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">40.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">40.0 (Litres)</h6>
            </div>
            </div>  
           ],
      
        suspension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Front Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Mac Pherson strut with Lower Transverse link</h6></div>
            <div className="col-4">
            <h6 className="float-right">Mac Pherson strut with Lower Transverse link</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Twin tube telescopic shock absorber</h6></div>
            <div className="col-4">
            <h6 className="float-right">Twist beam suspension with coil spring</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electronic</h6></div>
            <div className="col-4">
            <h6 className="float-right">Electric</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Column</h6></div>
            <div className="col-4">
            <h6 className="text-center">Tilt</h6></div>
            <div className="col-4">
            <h6 className="float-right">Tilt </h6>
            </div>
            </div>
        ],
   
        dimension:[
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Length (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">3994</h6></div>
            <div className="col-4">
            <h6 className="float-right">3991</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1758</h6></div>
            <div className="col-4">
            <h6 className="float-right">1750</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1572</h6></div>
            <div className="col-4">
            <h6 className="float-right">1605</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Ground Clearance Unladen (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">-</h6></div>
            <div className="col-4">
            <h6 className="float-right">205</h6>
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
            <div className="fa fa-times text-danger text-center"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-times text-danger float-right"></div>
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
            <div className="fa fa-times text-danger "></div>
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
            <h6 className="">SUV</h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">All SUV Cars</NavLink> 
            </div>
            <div className="col-4">
            <h6 className="float-right">SUV</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right">All SUV Cars</NavLink> 
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Adjustable Headlights</h6>
            </div>
            <div className="col-4 text-center">
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
            <div className="fa fa-check text-success "></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
        Pros:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Nissan Magnite</h4>
            <div className="container-fluid">
            <ul>
            <li>Smartly designed sub-compact SUV. Very well proportioned</li>
            <li>Spacious and practical cabin. A good SUV for the family</li>
            <li>Comfortable ride quality. Bad roads can be tackled with confidence</li>
            <li>Turbo petrol engine offers good driveability and punch. Zipping through traffic and executing overtakes is easy</li>
            <li>Good features list: 7-inch digital instrument cluster, 8-inch touchscreen with wireless Android Auto/Apple CarPlay support, JBL music system, 360-degree camera, connected car tech and more.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Renault Kiger</h4>
            <div className="container-fluid">
            <ul>
            <li>Quirky design stands out. Especially in loud colours like red and blue.</li>
            <li>Super spacious cabin makes it a genuine family car.</li>
            <li>405-litre boot is the largest in its class.</li>
            <li>Well-tuned suspension feels at home tackling bad road conditions.</li>
            <li>Two automatic options for varying budgets.</li>
            </ul>
            </div>
            </div>
            </div>
        ],
        Cons:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>Fitment quality is decent but not premium. Doesn’t feel as rich inside as a Sonet/Venue/XUV300.</li>
            <li>Not an exciting or fun to drive car, even with the turbo petrol engine</li>
            <li>No diesel engine option</li>
            <li>Nissan’s sales and service network is currently lagging behind the competition</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>Interior design looks plain and the cabin could do with livelier colours.</li>
            <li>Feel good features are reserved just for the top RxZ trim</li>
            <li>Cabin insulation could be better</li>
            </ul>
            </div>
            </div>
            </div>
        ]
    },
    {  
        id1:21,
        id:41,
        rate:"4.5",
        image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
        image1:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Grand-i10-Nios/7091/Hyundai-Grand-i10-Nios-Sportz/1583742828294/front-left-side-47.jpg?tr=w-456",
        name:"Renault Triber",
        name1:"Hyundai Grand i10 Nios",
        category:"suv",
        price:"₹5.30-7.82 Lakh*",
        price1:"₹5.23-8.45 Lakh*",
        description:<p>Should you buy Renault Triber or Hyundai Grand i10 Nios? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage, Features, Colours and other specs. Renault Triber price starts at Rs 5.50 Lakh ex-showroom for RXE (Petrol) and Hyundai Grand i10 Nios price starts Rs 5.23 Lakh ex-showroom for Era (Petrol). Triber has 999 cc (Petrol top model) engine, while Grand i10 Nios has 1197 cc (Petrol top model) engine. As far as mileage is concerned, the Triber has a mileage of 20.0 kmpl (Petrol top model) and the Grand i10 Nios has a mileage of 26.2 kmpl (Petrol top model).</p>,
        specification:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">On Road Price</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹8,86,273*</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹8,84,034*</h6>
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
            <h6 className="text-center">₹16,861</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹17,204</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Insurance</h6></div>
            <div className="col-4 text-center">
            <h6 className="">₹35,409            </h6>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none">Triber Insurance</NavLink>
            </div>
            <div className="col-4">
            <h6 className="float-right">₹30,477</h6><br></br>
            <NavLink to="/compare" data-dismiss="modal" className="text-decoration-none float-right" >Grand i10 Nios Insurance</NavLink>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Service Cost (Avg. of 5 years)</h6></div>
            <div className="col-4">
            <h6 className="text-center">₹2,034</h6></div>
            <div className="col-4">
            <h6 className="float-right">₹2,752</h6>
            </div>
            </div>
        
            ],
   
        Engine:  [
            <div className="row"> 
            <div className="col-4">
            <h6 className="float-left">Engine Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">1.0L Petrol Engine</h6></div>
            <div className="col-4">
            <h6 className="float-right">1.0 L Turbo GDi</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Displacement (cc)</h6></div>
            <div className="col-4">
            <h6 className="text-center">999</h6></div>
            <div className="col-4">
            <h6 className="float-right">998</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Power (bhp@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">71bhp@6250rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">98.63bhp@6000rpm</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Max Torque (nm@rpm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">96Nm@3500rpm</h6></div>
            <div className="col-4">
            <h6 className="float-right">171.61Nm@1500-4000rpm</h6>
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
            <h6 className="float-right">Petrol</h6>
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
            <h6 className="text-center">18.2 kmpl</h6></div>
            <div className="col-4">
            <h6 className="float-right">20.7 kmpl</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Fuel Tank Capacity</h6></div>
            <div className="col-4">
            <h6 className="text-center">40.0 (Litres)</h6></div>
            <div className="col-4">
            <h6 className="float-right">37.0 (Litres)</h6>
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
            <h6 className="float-right">MacPherson Strut</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Rear Suspension</h6></div>
            <div className="col-4">
            <h6 className="text-center">Torsion Beam Axle</h6></div>
            <div className="col-4">
            <h6 className="float-right">Coupled Torsion Beam Axle</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Steering Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">Electric</h6></div>
            <div className="col-4">
            <h6 className="float-right">Electric</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Shock Absorbers Type</h6></div>
            <div className="col-4">
            <h6 className="text-center">-</h6></div>
            <div className="col-4">
            <h6 className="float-right">Gas Filled</h6>
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
            <h6 className="float-right">3805</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Width (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1739</h6></div>
            <div className="col-4">
            <h6 className="float-right">1680</h6>
            </div>
            <hr className="text-success mt-2"></hr>
            <div className="col-4">
            <h6 className="float-left">Height (mm)</h6></div>
            <div className="col-4">
            <h6 className="text-center">1643</h6></div>
            <div className="col-4">
            <h6 className="float-right">1520</h6>
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
            <div className="fa fa-check text-success"></div>
            </div>
            <div className="col-4">
            <div className="fa fa-check text-success float-right"></div>
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
        Pros:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Renault Triber</h4>
            <div className="container-fluid">
            <ul>
            <li>Practicality: Apart from modular seating, features like a cooled central glovebox, separate air vents for second row as well as third row, and loads of cubby holes make it a practical car.</li>
            <li>Boot space: A capacity of 625 litres with five seats can put even compact sedans to shame.</li>
            <li>Modular seating: Triber can be turned into a two-seater, four seater, five-seater, six-seater or even a seven-seater vehicle. Its middle row can also slide forward and backwards.</li>
            <li>Looks: While looks are subjective, Renault should be given credit for designing a sub-4m MPV that doesn’t look awkward from any angle.</li>
            <li>Available with an AMT automatic as well.</li>
            <li>Soon to be launched with a turbocharged petrol engine.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Wagon R</h4>
            <div className="container-fluid">
            <ul>
            <li>Build quality. Doesn't feel too far off from an i20!</li>
            <li>Space. Generous amount of kneeroom and headroom for rear seat occupants.</li>
            <li>Well equipped: 8" touchscreen, wireless charging, projector headlamps and foglamps- you name it!</li>
            
            <li>AMT available with petrol as well as diesel engines. Other than the Swift, it's the only one in the segment to offer it.</li>
            </ul>
            </div>
            </div>
            </div>
        ],
        Cons:[
            <div className="row">
            <div className="col-6">
            <h4 className="font-weight-bold">Maruti Baleno</h4>
            <div className="container-fluid">
            <ul>
            <li>Engine: The 1.0-litre engine that puts out 72PS of maximum power might feel underpowered with a full load of passengers.</li>
            <li>No diesel engine option: A practical car like the Triber begs to be driven over long distances. Buyers with such a requirement might miss the option of a frugal diesel engine.</li>
            <li>Missing features: No automatic climate control, steering-mounted audio controls, alloy wheels or foglamps.</li>
            </ul>
            </div>
            </div>
            <div className="col-6">
            <h4 className="font-weight-bold">Toyota Glanza</h4>
            <div className="container-fluid">
            <ul>
            <li>Diesel variants limited to just three. Sportz variant, for example, is AMT only.</li>
            <li>Basics such as rear headrests, rear wiper limited to just the Asta variant.</li>
            </ul>
            </div>
            </div>
            </div>
        ]
    },
    
]
export default CompareCars;