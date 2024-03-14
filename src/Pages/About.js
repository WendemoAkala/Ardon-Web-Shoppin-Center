import React from 'react';
import "../Styles/About.css";
import Corpuls3 from "../assets/corpuls3.jpeg";

function About() {
  return (
    <div className='about'>
            <div className='aboutTop' style={{backgroundImage: `url(${Corpuls3})`}}></div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>
                Ardon Medical Equipment Ltd, is a leading provider of technologically advanced electronic,

electromechanical and measurement devices  to the Israeli market for over 30 years – since 1981.

The company’s business involves promoting, marketing and providing after sale service, to selected, high quality state of the art medical equipment manufactured by reliable and established vendors.



Ardon maintains long term relationship with its vendors, through exclusive distribution arrangements, in the territory of Israel and in various cases broadening its cooperation and promotion of products internationally.

 

Ardon’s vendors are mainly U.S., European and Israeli based companies.

Ardon’s range of customers includes hospitals, outpatient clinics and a variety of pre-hospital, large and small medical services providers, including private and public institutes, government authorities and firms, industrial complexes etc. Among Ardon's customers are also Israel Defense Forces, the National and private Ambulance services, and others.



The products, sold by Ardon over the years, have gained and maintained leading position in their respective market segments due to their quality and after sale service. All Ardon's product line is either FDA and or CE certified and are all registered by the the Israeli MOH.

 

The company management personnel include electronic and industrial engineers who are responsible for managing, marketing, administrating and servicing the range of its products.

 

Ardon’s promotional activities include:

- Presenting and participating in local exhibitions

- Evaluating and educating stuff on new technologies and standards

- Active presence in hospitals, departments, outpatient clinic

- Maintaining high quality service standards and customer care



Contact details:

Ardon Medical Equipment ltd

24 Ha Haroshet street, Or Yehuda

P.O.B 378, Or Yehuda 60252

Israel 

Tel: 972-3-5333236

Fax: 972-3-5334801



Email us:

Service: service@ardon.co.il

Marketing:   marketing@ardon.co.il

Managment: managment@ardon.co.il 
                </p>
            </div>
    </div>
  )
}

export default About;
