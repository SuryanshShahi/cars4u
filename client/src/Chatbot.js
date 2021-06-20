import React,{useState} from 'react';
import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import Bg from "./images/chatbot.jpg";
// const theme = {
    
//     fontFamily: 'Helvetica Neue',
//     headerBgColor: '#EF6C00',
//     headerFontColor: '#fff',
//     headerFontSize: '15px',
//     botBubbleColor: '#EF6C00',
//     botFontColor: '#fff',
//     userBubbleColor: '#fff',
//     userFontColor: '#4a4a4a',
//   };

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
    message: 'What can I help you with?👇',
    trigger: '4',
  },
  {
    id: '4',
    options: [
        
        {value: '', label:'Book a test drive', trigger:'5'},
        {value: '', label:'Find the nearest dealer', trigger:'5'},
        {value: '', label:'Suggest another one', trigger:'6'},
    ],
  },
  {
    id: '5',
    message: 'Sure, I would need a few details from your end',
    trigger: '8',
  },
  {
    id: '8',
    message: "First off, what's your name?",
    trigger: '9',
  },
  {
    id: '9',
    user: true,
    trigger: '10',
  },
  {
    id: '10',
    message: "Your email?",
    trigger: '11',
  },
  {
    id: '11',
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
    trigger:'12',

  },
  {
    id: '12',
    message: "And what's your mobile number?",
    trigger: '13',
  },
  {
    id: '13',
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
    trigger:'14'
  },
  {
    id: '14',
    message: "Thank you, a couple more details",
    trigger: '15'
  },
  {
    id: '15',
    message: "Which state are you from?",
    trigger: '16'
  },
  {
    id: '16',
    user: true,
    trigger: '17',
  },
  {
    id: '17',
    message: "And which city?",
    trigger: '18'
  },
  {
    id: '18',
    user: true,
    trigger: '19',
  },
  {
    id: '19',
    message: "What date would you like to take the test drive on?(DD-MM-YYYY)",
    trigger: '20'
  },
  {
    id: '20',
    user: true,
    trigger: '21',
  },
  {
    id: '21',
    message: "Thanks for all the these details 😃",
    trigger: '22'
  },
  {
    id: '22',
    message: "You will get a call from our team very soon to setup the test drive.",
    end: true
  },
// -----------
{
    id: '6',
    message: "Do you prefer a petrol or diesel model?",
    trigger: '23'
  },
  {
    id: '23',
    options: [
        {value: '', label:'Diesel', trigger:'24'},
        {value: '', label:'Petrol', end:true},    
    ],
  },
  {
    id: '24',
    message: "Here are our Diesel models",
    trigger: '26'
  },
  {
    id: '26',
    options: [
        {value: '', label:'HTE D', trigger:'27'},
        {value: '', label:'HTK D', trigger:'28'},    
        {value: '', label:'HTK Plus D', trigger:'29'},    
        {value: '', label:'HTK Plus AT D', trigger:'30'},    
        {value: '', label:'HTK D', trigger:'31'},    
        {value: '', label:'HTK Plus D', trigger:'32'},    
        {value: '', label:'GTX Plus AT D', trigger:'33'},    
    ],
  },
  {
    id: '27',
    component:<ul>Here are the pricing details and specs<br></br><b>HTE D(Diesel) (Base Model)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.10,45,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.46,741</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.44,158</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.28,992</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.48,419</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.11,64,891**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '28',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTK D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.11,79,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.52,286</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.48,103</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.34,675</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.47,785</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.13,14,064**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '29',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTK Plus D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.12,99,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.57,252</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.51,636</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.38,151</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.47,785</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.14,46,039**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '30',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTK Plus AT D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.13,35,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.61,224</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.54,462</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.40,932</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.47,785</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.15,51,618**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '31',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTX D(Diesel)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.14,75,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.64,534</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.56,818</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.43,249</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.44,385</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.16,39,601**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '32',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>HTX Plus D(Diesel) Top Selling</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.15,79,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.68,838</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.59,880</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.46,262</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.44,385</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.17,53,980**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '33',
    component:<ul>Here are the pricing details and specs<br></br>
    <b>GTX Plus AT D(Diesel) (Top Model)</b>
    <li className="ml-4">Ex-Showroom Price&nbsp;&nbsp;Rs.17,65,000</li>,
    <li className="ml-4">RTO&nbsp;&nbsp;&nbsp;Rs.76,534</li>
    <li className="ml-4">Insurance&nbsp;&nbsp;&nbsp;Rs.65,356</li>
    <li className="ml-4">Others&nbsp;&nbsp;&nbsp;Rs.51,649</li>
    <li className="ml-4">Optional&nbsp;&nbsp;&nbsp;Rs.44,385</li>
    <hr></hr>
    <li className="ml-4">On-Road Price in Ahmedabad&nbsp;&nbsp;Rs.19,58,539**</li>
    </ul>,
    trigger: '34'
  },
  {
    id: '34',
    options: [
        {value: '', label:'Check out other Diesel models', trigger:'26'},
        {value: '', label:'Check out other Petrol models', end:true},       
    ],
  },
];




function Chatbot() {
    const chatbot=()=>{
        document.getElementById("chat").style.display = "block";
      }
    const close=()=>{
        document.getElementById("chat").style.display = "none";
      }
    return (
        <section>
        <div className="chatbot" id="chat">
        <div className="cut fa-2x">
        <div className="" onClick={close}>&times;</div>
        </div>
       
        <ChatBot steps={steps} className="position-relative" />
        
        </div>
        <div className="chatbtn fa fa-comment fa-3x px-3 py-2" onClick={chatbot}></div>
        </section>
    )
}
export default Chatbot;

// <ThemeProvider theme={theme}>
// </ThemeProvider>
// style={{ background: `url("${Bg}")`, }}