import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Bg from "./images/chatbot.jpg";

const steps = [
  {
    id: '0',
    message: 'Hey there!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'I am here to help you buy your next Kia Seltos',
    trigger: '2',
  },
  {
    id: '2',
    component: <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?tr=w-456" className="bg-transparent" height="200" width="300"/>,
    trigger: '3',
  },
  {
    id: '3',
    message: 'What can I help you with? 👇',
    trigger: '4',
  },
  {
    id: '4',
    options: [
        
        {value: 'Book a test drive', label:'Book a test drive', trigger:'5'},
        {value: 'Decide which model to buy', label:'Decide which model to buy', trigger:'22'},
        // {value: 'Suggest another one', label:'Suggest another one', trigger:'23'},
    ],
  },
  {
    id: '5',
    message: 'Sure, I would need a few details from your end',
    trigger: '6',
  },
  {
    id: '6',
    message: "First off, what's your name?",
    trigger: '7',
  },
  {
    id: '7',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: "Your email?",
    trigger: '9',
  },
  {
    id: '9',
    user: true,
    validator: (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
          {
            return true;
          }
        else
          {
            return 'Please give a valid email. e.g.. suryansh@gmail.com';
          }
        },
    trigger:'10',

  },
  {
    id: '10',
    message: "And what's your mobile number?",
    trigger: '11',
  },
  {
    id: '11',
    user: true,
    validator: (value) => {
        if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
          {
            return true;
          }
        else
          {
            return 'Please give a valid phone number. e.g.. 9876543210';
          }
        },
    trigger:'12'
  },
  {
    id: '12',
    message: "Thank you, a couple more details",
    trigger: '13'
  },
  {
    id: '13',
    message: "Which state are you from?",
    trigger: '14'
  },
  {
    id: '14',
    user: true,
    trigger: '15',
  },
  {
    id: '15',
    message: "And which city?",
    trigger: '16'
  },
  {
    id: '16',
    user: true,
    trigger: '17',
  },
  {
    id: '17',
    message: "What date would you like to take the test drive on?(DD-MM-YYYY)",
    trigger: '18'
  },
  {
    id: '18',
    user: true,
    trigger: '19',
  },
  {
    id: '19',
    message: "Thanks for all the these details 😃",
    trigger: '20'
  },
  {
    id: '20',
    message: "You will get a call from our team very soon to setup the test drive.",
    trigger: '44'
  },
  {
    id: '44',
    message: "Is there anything else i can help you with?",
    trigger: '46'
  },
  {
    id: '46',
    options: [
        {value: 'Yes', label:'Yes', trigger:'3'},       
        {value: 'No', label:'No', trigger:'47'},       
    ],
  },
  {
    id: '47',
    message: "Visit us again when you need a car!",
    trigger: '48'
  },
  {
    id: '48',
    message: "👋Bye",
    end: true
  },
// -----------
{
    id: '22',
    message: "Do you prefer a petrol or diesel model? 👇",
    trigger: '23'
  },
  {
    id: '23',
    options: [
        {value: 'Diesel', label:'Diesel', trigger:'24'},
        {value: 'Petrol', label:'Petrol', trigger:'45'},    
    ],
  },
  {
    id: '24',
    message: "Here are our Diesel models 👇",
    trigger: '25'
  },
  {
    id: '25',
    options: [
        {value: 'HTE D', label:'HTE D', trigger:'26'},
        {value: 'HTK D', label:'HTK D', trigger:'28'},    
        {value: 'HTK Plus D', label:'HTK Plus D', trigger:'29'},    
        {value: 'HTK Plus AT D', label:'HTK Plus AT D', trigger:'30'},    
        {value: 'HTK D', label:'HTK D', trigger:'31'},    
        {value: 'HTK Plus D', label:'HTK Plus D', trigger:'32'},    
        {value: 'GTX Plus AT D', label:'GTX Plus AT D', trigger:'33'},    
    ],
  },
  {
    id: '34',
    options: [
        {value: 'HTE D', label:'HTE D', trigger:'26'},
        {value: 'HTK D', label:'HTK D', trigger:'28'},    
        {value: 'HTK Plus D', label:'HTK Plus D', trigger:'29'},    
        {value: 'HTK Plus AT D', label:'HTK Plus AT D', trigger:'30'},    
        {value: 'HTK D', label:'HTK D', trigger:'31'},    
        {value: 'HTK Plus D', label:'HTK Plus D', trigger:'32'},    
        {value: 'GTX Plus AT D', label:'GTX Plus AT D', trigger:'33'},    
    ],
  },
  {
    id: '26',
    component:<ul>Here are the pricing details and specs<br></br><b>HTE D(Diesel) (Base Model)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.10,45,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.46,741</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.44,158</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.28,992</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.48,419</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.11,64,891**</li>
    </ul>,
    trigger: '27'
  },
  {
    id: '28',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTK D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.11,79,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.52,286</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.48,103</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.34,675</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.47,785</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.13,14,064**</li>
    </ul>,
    trigger: '27'
  },
  {
    id: '29',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTK Plus D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.12,99,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.57,252</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.51,636</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.38,151</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.47,785</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.14,46,039**</li>
    </ul>,
    trigger: '27'
  },
  {
    id: '30',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTK Plus AT D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.13,35,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.61,224</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.54,462</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.40,932</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.47,785</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.15,51,618**</li>
    </ul>,
    trigger: '27'
  },
  {
    id: '31',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTX D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.14,75,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.64,534</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.56,818</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.43,249</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.44,385</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.16,39,601**</li>
    </ul>,
    trigger: '27'
  },
  {
    id: '32',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTX Plus D(Diesel) Top Selling</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.15,79,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.68,838</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.59,880</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.46,262</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.44,385</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.17,53,980**</li>
    </ul>,
    trigger: '27'
  },
  {
    id: '33',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>GTX Plus AT D(Diesel) (Top Model)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.17,65,000</li>
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.76,534</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.65,356</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.51,649</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.44,385</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.19,58,539**</li>
    </ul>,
    trigger: '27'
  },
// ----------------------
{
  id: '45',
  message: "Here are our Petrol models 👇",
  trigger: '34'
},
{
  id: '34',
  options: [
      {value: 'HTE G(Petrol) (Base Model)', label:'HTE G(Petrol) (Base Model)', trigger:'35'},
      {value: 'HTK G(Petrol) Top Selling', label:'HTK G(Petrol) Top Selling', trigger:'36'},    
      {value: 'HTK Plus G(Petrol)', label:'HTK Plus G(Petrol)', trigger:'37'},    
      {value: 'HTK Plus iMT(Petrol)', label:'HTK Plus iMT(Petrol)', trigger:'38'},    
      {value: 'HTX G(Petrol)', label:'HTX G(Petrol)', trigger:'39'},    
      {value: 'HTX IVT G(Petrol)', label:'HTX IVT G(Petrol)', trigger:'40'},    
      {value: 'GTX Option(Petrol)', label:'GTX Option(Petrol)', trigger:'41'},    
      {value: 'GTX Plus(Petrol)', label:'GTX Plus(Petrol)', trigger:'42'},    
      {value: 'GTX Plus DCT(Petrol) (Top Model)', label:'GTX Plus DCT(Petrol) (Top Model)', trigger:'43'},    
  ],
},
{
  id: '35',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>HTE G(Petrol) (Base Model)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.9,95,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.44,672</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.42,685</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.17,680</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.45,764</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.11,00,037**</li>
  </ul>,
  trigger: '27'
},
{
  id: '36',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>HTK G(Petrol) Top Selling</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.10,74,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.47,941</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.45,011</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.29,782</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.45,130</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.11,96,734**</li>
  </ul>,
  trigger: '27'
},
{
  id: '37',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>HTK Plus G(Petrol)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.11,79,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.52,286</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.48,103</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.34,675</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.45,130</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.13,14,064**</li>
  </ul>,
  trigger: '27'
},
{
  id: '38',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>HTK Plus iMT(Petrol)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.12,19,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.53,941</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.49,280</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.35,834</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.45,130</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.13,58,055**</li>
  </ul>,
  trigger: '27'
},
{
  id: '39',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>HTX G(Petrol)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.13,65,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.59,983</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.53,579</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.40,063</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.41,730</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.15,18,625**</li>
  </ul>,
  trigger: '27'
},
{
  id: '40',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>HTX IVT G(Petrol)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.14,65,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.64,121</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.56,523</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.42,959</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.41,730</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.16,28,603**</li>
  </ul>,
  trigger: '27'
},
{
  id: '41',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>GTX Option(Petrol)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.15,35,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.67,017</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.58,584</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.44,987</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.41,730</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.17,05,588**</li>
  </ul>,
  trigger: '27'
},
{
  id: '42',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>GTX Plus(Petrol)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.16,65,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.72,397</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.62,412</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.48,753</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.41,730</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.18,48,730**</li>
  </ul>,
  trigger: '27'
},
{
  id: '43',
  component:<ul>Here are the pricing details and specs<br></br>
  <b>GTX Plus DCT(Petrol) (Top Model)</b>
  <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.17,44,000</li>
  <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.75,666</li>
  <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.64,737</li>
  <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.51,041</li>
  <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.41,730</li>
  <hr></hr>
  <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.19,35,444**</li>
  </ul>,
  trigger: '27'
},
  {
    id: '27',
    options: [
        {value: 'Check out other Diesel models', label:'Check out other Diesel models', trigger:'24'},
        {value: 'Check out other Petrol models', label:'Check out other Petrol models', trigger:'45'},       
        {value: 'Go Back', label:'Go Back', trigger:'3'},       
    ],
  },
];

const theme = {
  headerBgColor: '#e43c5c',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#e43c5c',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const chatbot=()=>{
  document.getElementById("chat").style.display = "block";
  document.getElementById("popbtn").style.display = "none";
  document.getElementById("popbtn1").style.display = "block";
}
const close=()=>{
  document.getElementById("chat").style.display = "none";
  document.getElementById("popbtn1").style.display = "none";
  document.getElementById("popbtn").style.display = "block";
}

ReactDOM.render(
  <div>
  <BrowserRouter>
    <App />
        <section>
        <div className="chatbot" id="chat">
        <div className="cut fa-2x">
        <div className="" onClick={close}>&times;</div>
        </div>
        <ThemeProvider theme={theme}>
        <ChatBot steps={steps} className="position-relative" style={{ background: `url("${Bg}")`, }}/>
        </ThemeProvider>
        </div>
        <div className="chatbtn" id="popbtn" onClick={chatbot}></div>
        <div className="chatbtn" id="popbtn1" onClick={close}></div>
        </section>
        </BrowserRouter>
    </div>,
  document.getElementById('root')
);

