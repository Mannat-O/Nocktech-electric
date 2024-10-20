document.querySelectorAll('.input-group input, .input-group textarea').forEach(input => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
    input.addEventListener('input', handleInput);
});

function handleFocus(event) {
    const label = event.target.closest('.input-group').querySelector('label');
    if (label) {
        label.classList.add('focused');
    }
}

function handleBlur(event) {
    const label = event.target.closest('.input-group').querySelector('label');
    if (label && event.target.value === '') {
        label.classList.remove('focused');
    }
    validateInput(event.target); // Blur olayında da input'u validate ediyoruz
}

function handleInput(event) {
    validateInput(event.target); // Input girildiğinde validasyon yapılıyor
}

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Formun gönderilmesini engeller

//     const formIsValid = [...document.querySelectorAll('.input-group input, .input-group textarea')].every(input => {
//         return input.checkValidity();
//     });

//     const notification = document.createElement('div');
//     notification.className = 'notification';

//     if (formIsValid) {
//         notification.classList.add('success');
//         notification.innerText = `Thank you for contacting us! We will get back to you soon.`;
//         document.getElementById('contactForm').reset(); // Formu sıfırla
//         document.querySelectorAll('.input-group label').forEach(label => label.classList.remove('focused'));
//     } else {
//         notification.classList.add('error');
//         notification.innerText = 'Please fill out all fields correctly before submitting the form.';
//     }

//     document.body.appendChild(notification);

//     setTimeout(() => {
//         notification.remove();
//     }, 5000);
// });

/*JS for faq toggle*/ 

const questions = document.querySelectorAll(".question");
const drop = document.querySelector(".drop");

console.log(questions);

questions.forEach((ques)=>{
    console.log(ques);
    ques.addEventListener('click', ()=>{

        const img = ques.querySelector(".images");
        console.log(img.src);

        if(img.src.includes("icon-plus.svg")){
          img.src = img.src.replace("icon-plus.svg", "icon-minus.svg");
          console.log(img.src);  
        } 
        else img.src = img.src.replace("icon-minus.svg", "icon-plus.svg");
    })
})

/*Dynamic image for services section */

const services = document.querySelectorAll(".service-text");
const banner = document.querySelector(".service-banner");

const bannerImg = banner.querySelector(".image-wrapper img");

const tagline = banner.querySelector(".img-tagline");
const heading = tagline.querySelector("h2");
const taglineInfo = tagline.querySelector("p");

const subheadings1 = document.querySelector(".sub1 p");
const subheadings2 = document.querySelector(".sub2 p");
const subheadings3 = document.querySelector(".sub3 p");

services.forEach((service)=>{
    service.addEventListener('click', ()=>
    {

        const selectedDiv = document.querySelector(".selected");
        selectedDiv.classList.remove("selected");

        service.classList.add("selected");
        const serviceType = service.dataset.key;

        
        switch (serviceType){

            case "panel":
                heading.innerText = "Panel Upgrades";
                taglineInfo.innerText = "Our technicians have extensive training and experience. We can inspect your electrical panel, circuit breakers, fuses, wiring," +
                                        "and other components to ensure they are in good condition, up to standard, and appropriate for your home.";
                subheadings1.innerText = "Quick and affordable change outs";
                subheadings2.innerText = "Twin cities panel specialists";
                subheadings3.innerText = "Safe and efficient";
                                        break;
            
            case "aluminium":
                heading.innerText="Aluminum wiring correction";
                taglineInfo.innerText="If your current electrical system cannot safely support the electrical load of your modern Boston home, you may require aluminum wiring correction. To best advise you, we will send one of our inspectors to check for previous restorations or additional wiring installations.";
                subheadings1.innerText = "XCel Energy preferred";
                subheadings2.innerText = "FREE Electrical Safety Check";
                subheadings3.innerText = "1 Year Gurantee";
                
                break;
            
            case "surge":
                heading.innerText="Surge Protectors";
                taglineInfo.innerText="House-wide surge protection systems are the most effective way to safeguard your home's appliances and various electrical devices. We can install continuous surge protection with a house-wide surge protection installation.";
                subheadings1.innerText = "Quick and easy installation";
                subheadings2.innerText = "Increases electronic lifespan";
                subheadings3.innerText = "Affordable pricing";
                
                break;
            
            case "smoke":
                heading.innerText="Smoke Detectors";
                taglineInfo.innerText="Smoke detectors and CO2 alarms detect house fires and carbon monoxide buildup, and municipal code enforcement officials require their installation in specific areas throughout your home. You can rely on us to provide reliable, affordable systems that are up to standard.";
                subheadings1.innerText = "Solutions you can rely on";
                subheadings2.innerText = "New installation or replacement";
                subheadings3.innerText = "Safegaurd your home";
                
                break;

            case "LED":
                heading.innerText="LED Lighting";
                taglineInfo.innerText="Our electricians have years of experience repairing and installing LED, low voltage, and security lighting. With our expertise, we will complete your lighting project precisely and efficiently. We specialize in troubleshooting electrical issues.";
                subheadings1.innerText = "Optimal Energy Efficiency";
                subheadings2.innerText = "LED Lighting Retrofits";
                subheadings3.innerText = "Flexible Scheduling";
                
                break;

            case "electrical":
                heading.innerText="Electrical Inspections";
                taglineInfo.innerText="Our electricians have years of experience performing home inspections. We'd love to be your go-to electricians for residential electrical safety needs. ";
                subheadings1.innerText = "Peace of mind knowing your wiring is safe";
                subheadings2.innerText = "Avoid Code Violation";
                subheadings3.innerText = "Professionally Trained Electricians";
                
                break;  
            

            
        }
    })
})

/********************************************/
/*JS for commercial services*/


const commServices = document.querySelectorAll(".service-text.comm");
const commBanner = document.querySelector(".service-banner.comm");

const commBannerImg = commBanner.querySelector(".image-wrapper.comm img");

const commTagline = commBanner.querySelector(".img-tagline.comm");
const commHeading = commTagline.querySelector("h2");
const commTaglineInfo = commTagline.querySelector("p");

const commSubheadings1 = document.querySelector(".sub1.comm p");
const commSubheadings2 = document.querySelector(".sub2.comm p");
const commSubheadings3 = document.querySelector(".sub3.comm p");

commServices.forEach((service)=>{
    service.addEventListener('click', ()=>
    {

        const selectedDiv = document.querySelector(".selected");
        selectedDiv.classList.remove("selected");

        service.classList.add("selected");
        const serviceType = service.dataset.key;

        
        switch (serviceType){

            case "commercial-lighting":
                commHeading.innerText = "Commercial Specialty Lighting";
                commTaglineInfo.innerText = "We provide custom commercial lighting solutions that enhance both the function and aesthetics of your business space. Our specialty lighting services include the design and installation of energy-efficient, high-performance lighting systems tailored to your unique needs. From office spaces to retail environments, we create lighting setups that improve ambiance, safety, and energy savings.";
                commSubheadings1.innerText = "Custom lighting designs for your business.";
                commSubheadings2.innerText = "Energy-efficient and cost-effective solutions.";
                commSubheadings3.innerText = "Enhances both ambiance and functionality.";
                                        break;
            
            case "transformer":
                commHeading.innerText = "Commercial Transformer Installation";
                commTaglineInfo.innerText = "Our team offers complete commercial transformer installation services, providing reliable and safe power distribution for businesses of all sizes. We handle everything from selecting the right transformer for your needs to its installation and testing, ensuring your electrical system operates efficiently and without interruption. Whether you’re upgrading or installing a new system, we ensure your transformer meets your operational requirements and safety standards."
                commSubheadings1.innerText = "Ensures efficient and stable power distribution.";
                commSubheadings2.innerText = "Optimizes energy usage.";
                commSubheadings3.innerText = "Professionally installed to meet safety regulations.";
                                        break; 
                
            
            case "troubleshooting":
                commHeading.innerText = "Electrical Troubleshooting";
                commTaglineInfo.innerText = "Our electrical troubleshooting service is designed to quickly identify and resolve any electrical issues affecting your commercial or industrial operations. Using advanced diagnostic tools, our skilled electricians can pinpoint problems such as faulty wiring, power surges, or circuit overloads, providing fast, effective solutions that minimize downtime and prevent future issues.";
                commSubheadings1.innerText = "Fast identification of electrical issues.";
                commSubheadings2.innerText = "Minimizes operational disruption.";
                commSubheadings3.innerText = "Advanced tools for accurate problem-solving.";
                                        break;
            
            case "maintenance":
                commHeading.innerText = "Electrical Maintenance";
                commTaglineInfo.innerText = "Our electrical maintenance services focus on keeping your electrical systems running smoothly and safely. We provide regular inspections, performance testing, and preventive maintenance to identify potential issues before they lead to costly breakdowns. With a proactive approach, we help minimize disruptions, improve system efficiency, and maintain a safe working environment for your team.";
                commSubheadings1.innerText = "Ensures efficient system performance";
                commSubheadings2.innerText = "Prevents unexpected electrical failures.";
                commSubheadings3.innerText = "Extends the lifespan of electrical equipment.";
                                        break;

            case "splitter":
                commHeading.innerText="Splitter Box Installation";
                commTaglineInfo.innerText="We offer expert installation of commercial splitter boxes to help you distribute power across multiple circuits from a single source. This service is ideal for businesses looking to expand their electrical systems without overloading existing circuits, providing an efficient and cost-effective solution for managing power distribution in your facility.";
                commSubheadings1.innerText = "Expands electrical capacity.";
                commSubheadings2.innerText = "Reduces downtime by enhancing power distribution.";
                commSubheadings3.innerText = "Safe and reliable installation process.";
                
                                        break;

            case "switch":
                commHeading.innerText = "Disconnect Switch Installation";
                commTaglineInfo.innerText = "Our disconnect switch installation service ensures safe, efficient isolation of electrical circuits in commercial and industrial settings. This allows for the controlled shutdown of power during equipment maintenance or emergencies, preventing accidents and electrical hazards. Whether you’re upgrading your system or need new installations, our team ensures seamless integration into your existing electrical infrastructure.";
                commSubheadings1.innerText = "Provides quick power isolation for safety.";
                commSubheadings2.innerText = "Ideal for routine maintenance or emergency shutdowns.";
                commSubheadings3.innerText = "Fully compliant with electrical safety standards.";
                                        break; 

        }
    })
})
/***************************************** */
const navElement = document.querySelector(".dropdown");
const hamburger = document.querySelector(".menu-stack");

console.log(navElement);

hamburger.addEventListener("click", ()=>{
    navElement.classList.toggle("nav-open");
})

const menuOptions = document.querySelectorAll(".mainHead");

menuOptions.forEach((option)=>{
    option.addEventListener("click",()=>{
        navElement.classList.remove("nav-open");
    }
)
})

