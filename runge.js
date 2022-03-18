
let niche = [];
let week = [];
let firstName = [];
let sex = [];
let PossesiveAdjective =[]
let jobTitle;
let jobDescription;
let jobDetails;
let jobReviews;
let nameu = "runge"

let clientNameEl = document.getElementById("client-name")
let nicheEl = document.getElementById("Select-niche")
let weekEl = document.getElementById("select-week")
let firstNameEl = document.getElementById("first-name")
let sexEl = document.getElementById("Sex")
let resultElru = document.getElementById("result-elru")
let resultElaru = document.getElementById("result-elaru")
let resultElbru = document.getElementById("result-elbru")
let resultElcru = document.getElementById("result-elcru")
let submitAll = document.getElementById("submit-all")
let clearAll = document.getElementById("clear-all")
let errorEl = document.querySelector(".error-ela")
let error = "Enter All Values"



function nicheO (){
    niche.push(nicheEl.value)  
    console.log(niche)
    return niche;

}

function weekO (){
    week.push(weekEl.value)
    console.log(week)
    return week;
}

function freelancerName(){
    firstName.push(firstNameEl.value);
    return firstName
}

function sexElO (){
    sex.push(sexEl.value)
    return sex
}


let trainClass = document.querySelector(".trainer");
async function CatchTrainer () {
     size ()

    
    const response = await fetch('/image/trainer.jpg');
    const blob = await response.blob()

    document.getElementById('trainer').src = URL.createObjectURL(blob)
    displayImage =  URL.createObjectURL(blob)

    localStorage.setItem( "displayImage", JSON.stringify(displayImage))
    

}

let localStorageDisplay = JSON.parse(localStorage.getItem("displayImage"))

if (localStorageDisplay){
    CatchTrainer()
}

function size (){

    trainClass.classList.add('imga')

    console.log( trainClass.classList.add('imga'))

}

let localStorageTitle = JSON.parse(localStorage.getItem("resultTitleru"))
let localStorageDescription = JSON.parse(localStorage.getItem("resultDescriptionru"))
let localStorageDetails = JSON.parse(localStorage.getItem("resultDetailsru"))
let localStorageReview = JSON.parse(localStorage.getItem("resultReviewru"))
let localStorageError = JSON.parse(localStorage.getItem("errorMessage"));
let localStorageNotInputted = JSON.parse(localStorage.getItem("notInputted"));

if(localStorageNotInputted){
    errorEl.innerHTML = localStorageNotInputted
}

if (localStorageError){
    errorEl.innerHTML = localStorageError
}

if(localStorageTitle){

    resultElru.innerHTML = localStorageTitle

}

if(localStorageDescription){

    resultElaru.innerHTML = localStorageDescription

}

if(localStorageDetails){

    resultElbru.innerHTML = localStorageDetails

}

if(localStorageReview){

    resultElcru.innerHTML = localStorageReview

}

function callDiplayResult (){
    resultElru.innerHTML = ` Job Title : ${jobTitle} `; 
    resultElaru.innerHTML= `Job Description : ${jobDescription}`
    resultElbru.innerHTML = `Job Details : ${jobDetails}`
    resultElcru.innerHTML = `Review : ${jobReviews}`;

    resultTitleru = ` Job Title : ${jobTitle} `; 
    resultDescriptionru = `Job Description : ${jobDescription}`
    resultDetailsru = `Job Details : ${jobDetails}`
    resultReviewru  = `Review : ${jobReviews}`;


    localStorage.setItem("resultTitleru", JSON.stringify(resultTitleru));
    localStorage.setItem("resultDescriptionru", JSON.stringify(resultDescriptionru));
    localStorage.setItem("resultDetailsru", JSON.stringify(resultDetailsru));
    localStorage.setItem("resultReviewru", JSON.stringify( resultReviewru));
    

}


function hisHer (){
    if ( sex == "He"){
        PossesiveAdjective = "his"
    }
    
    else if(sex == "She") {
        PossesiveAdjective = "her"
    }
 }

clearAll.addEventListener("click", function(){
    localStorage.clear();
    sexEl.value  = ''
    firstNameEl.value= ''
    nicheEl.value = ''
    weekEl.value =''
    resultElru.innerHTML = ''
    resultElaru.innerHTML= ''
    resultElbru.innerHTML =''
    resultElcru.innerHTML = ''
    errorEl.innerHTML = '';
    displayImage = ''
    trainClass.classList.remove('imga')
    
})
let errorMes


submitAll.addEventListener("click", function() {

    nicheO ()
    weekO ()
    freelancerName()
    sexElO ()
    hisHer ()    
    
    if (firstName =='' || firstName == [] ) {
        clearResults ()

       errorMes = error
        errorEl.innerHTML = error
        localStorage.setItem("errorMessage", JSON.stringify(error))
        
    }

    else if (niche =='' || niche == [] ){
        clearResults ()
        errorMes = error
        errorEl.innerHTML = error
        localStorage.setItem("errorMessage", JSON.stringify(error))
        clearResults ()

    } 
    else if (sex =='' || sex == [] ){
        clearResults ()
        errorMes = error
        errorEl.innerHTML = error
        localStorage.setItem("errorMessage", JSON.stringify(error))
        

    }

    else if (week=='' || week== [] ){
        clearResults ()
        errorMes = error
        errorEl.innerHTML = error
        localStorage.setItem("errorMessage", JSON.stringify(error))
        

    }

    else {
   localStorage.clear()
//Runge Herman CONTENT WRITING- TECH TOPICS

    if (niche=="Content Writing" && week==1  && (sex == "He" || sex == "She")){
    jobTitle= `Article writer needed for website/blog content`;
    jobDescription= `Looking for good article writer for our new website, must be fluent in english`
    jobDetails= `5 best smartphones to get in 2022?`; 

    jobReviews= `I couldn't be happier with ${firstName}'s writing. Fast, efficient, and the quality is great.`

    callDiplayResult ()

    }

    else if (niche=="Content Writing" && week==2 && (sex == "He" || sex == "She")) {
        jobTitle= `Content Writer (Website Content)`;
        jobDescription= `I am looking for someone who has good writing capability for website content. Experience writing for the web and using keywords for SEO is a big plus.

       but I really want someone to help me create between 750 to 1,000 words for the page.
        
        I have other tasks as well across different industries.`
        jobDetails= `5 smartphones with best camera in 2022`; 
    
        jobReviews= `${firstName} is fast, prompt, and the quality of ${PossesiveAdjective} work is excellent. So happy with ${PossesiveAdjective} work`
    
        callDiplayResult ()
    
        }

    else if (niche=="Content Writing" && week==3 && (sex == "He" || sex == "She")){
        jobTitle= `Write blog article`;
        jobDescription= `I am looking for a versatile writer who can write on a variety of topics with good quality research.

        Please only apply if...
        
        1. You are a English Speaker
        2. Have experience writing on a variety of blogs
        3. can do quality research to write like an insider to the industry would speak
        `
        jobDetails= `the 5 best budget camera smartphones to buy in 2022`; 
    
        jobReviews= `${firstName} is a great writer and easy to work with. I highly recommend!`
    
        callDiplayResult ()
    
        }

    else if (niche=="Content Writing" && week==4 && (sex == "He" || sex == "She")){
        jobTitle= `Blog Post Writing`;
        jobDescription= `I am looking for a versatile writer who can write on a variety of topics with good quality research.

        Please only apply if...
        
        1. You are a English Speaker
        2. Have experience writing on a variety of blogs
        3. can do quality research to write like an insider to the industry would speak
        `
        jobDetails= `3 best Android phones with the best camera in 2022`; 
    
        jobReviews= `${firstName} did a great job. Did exactly as we needed and met our deadline. I will be using ${firstName} again.`
    
        callDiplayResult ()
    
        }

        else if (niche=="Content Writing" && week==5 && (sex == "He" || sex == "She")){
            jobTitle= `Looking for a blog writer`;
            jobDescription= `Need a writer that will be required to write  500-1000 words article for our client. The topic revolve around  tech ,auto, home and life insurance.
            `
            jobDetails= `The 3 best Samsung phones in 2022`; 
        
            jobReviews= `Great job. Excellent communication`
        
            callDiplayResult ()
        
            }

        else if (niche=="Content Writing" && week==6 && (sex == "He" || sex == "She")){
            jobTitle= `Blog Writer Needed`;
            jobDescription= `Need a writer that will be required to write  500-1000 words article for our client. The topic revolve around  tech ,auto, home and life insurance.
            `
            jobDetails= `Difference between the Samsung A, Samsung J and Samsung S mobile phones`; 
        
            jobReviews= `${firstName} is very easy to work with. ${sex} works very quickly and produced very thorough and easy to read article. I would recommend to anyone!`
        
            callDiplayResult ()
        
            }
        
        
        else if (niche=="Content Writing" && week==7 && (sex == "He" || sex == "She")){
            jobTitle= `Website content writer`;
            jobDescription= `I would like to hire the services of a quality content writer for my websites.

            Mandatory requirements:
            * must be an English speaker
            * 100% unique content only.
            
            I am offering $5 per 500/600 word article.
            
            `
            jobDetails= `The difference between a smart TV and an Android TV`; 
        
            jobReviews= `${firstName} is a highly proficient dedicated writer. ${sex} delivered a top quality work on time, and pays attention to detail. Highly Recommended!`
        
            callDiplayResult ()
        
            }



         else if (niche=="Content Writing" && week==8 && (sex == "He" || sex == "She")){
            jobTitle= `Blog Writer Needed`;
            jobDescription= `Need a writer that will be required to write  500-1000 words article for our client. The topic revolve around  tech ,auto, home and life insurance.
            `
            jobDetails= `Advantages and disadvantages of Android TV`; 
        
            jobReviews= `Great writer, easy communication and work was delivered promptly. Would highly recommend.`
        
            callDiplayResult ()
        
            }

         else if (niche=="Content Writing" && week==9 && (sex == "He" || sex == "She")){
            jobTitle= `Premium content writer required`;
            jobDescription= `Hi,

            I have an article writing job that requires a minimum of 600 words.
            I will provide you with the article title, subtitles and keywords and would like you to research and write a 600 word article.
            
            The article must be of high quality and future work will follow for the right applicant.
            
            Required:
            - Interested in completing this job quickly
            - Article must be 100% original and pass copyscape
            - Able to provide examples of you previous written articles in your proposal`

            jobDetails= `Extra benefits of buying a smart TV`; 
        
            jobReviews= `Great Writer! Enjoyed working with ${firstName}. I plan on using again in the future.`
        
            callDiplayResult ()
        
            }
        // Creative Writing

        else if (niche=="Creative Writing" && week==1 && (sex == "He" || sex == "She")){
            jobTitle= `Creative writer for mental health`;
            jobDescription= `Social House Wellness Center is in need of a writer who is a rockstar. We need to rewrite some of our content on specific pages of our website. Its a plus to have someone on our team with some knowledge in psychology/mental health/therapy BUT this job is open to any wordsmith willing to take on the task.
            www.shwctx.com  
            I look forward to hearing from you.
            Thanks!
            Runge  `

            jobDetails= `Not Added`; 
        
            jobReviews= `Fast, reliable, easy to work with and impeccable English language skills. Will definitely hire for future projects.`
        
            callDiplayResult ()
        
            }



    // Customer Service //

    else  if (nameu == "runge" && niche=="Customer Service" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant for Research & Data Gathering`; 
        jobDescription= `Looking for a competent Assistant to join the team of my company, to initially look after and manage emails. 
                         But with a scope to progress to more tasks
                        We have recently got a huge increase in emails and inquiries. We need someone to be able to help with replying in a quick, 
                        timely and professional manner.`;

        jobDetails= `We will need you to help us answer some our customers query online tonight from 9pm-11pm today.

        A draft of likely complaints plus their answers is attached below .
        You can go through the draft attached below before attending to them. Will forward the link with which you will connect with our customers below.
        
        Here is the link to join : @https://help.bet365.com/en/support.
    
        Are you available to deliver within this time range ?`; 
        jobReviews= `${sex} demonstrated the ability to respond quickly, accurately, and professionally when with us. ${firstName} has a naturally warm, caring and inquisitive personality which fits perfectly in customer service. Excellent job!`
    
        callDiplayResult ()   
    }

    else  if (nameu == "runge" && niche=="Customer Service" && week==2 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant for Research & Data Gathering`; 
        jobDescription= `Looking for a competent Assistant to join the team of my company, to initially look after and manage emails. 
                         But with a scope to progress to more tasks
                        We have recently got a huge increase in emails and inquiries. We need someone to be able to help with replying in a quick, 
                        timely and professional manner.`;

        jobDetails= `We will need you to help us answer some our customers query online tonight from 9pm-11pm today.

        A draft of likely complaints plus their answers is attached below .
        You can go through the draft attached below before attending to them. Will forward the link with which you will connect with our customers below.
        
        Here is the link to join : @https://help.bet365.com/en/support.
    
        Are you available to deliver within this time range ?`; 
        jobReviews= `${firstName} was a pleasure to work with. ${sex} is a very hard working person and did a GREAT job`
    
        callDiplayResult ()   
    }


    else  if (nameu == "runge" && niche=="Customer Service" && week==3 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant for Research & Data Gathering`; 
        jobDescription= `Looking for a competent Assistant to join the team of my company, to initially look after and manage emails. 
                         But with a scope to progress to more tasks
                        We have recently got a huge increase in emails and inquiries. We need someone to be able to help with replying in a quick, 
                        timely and professional manner.`;

        jobDetails= `We will need you to help us answer some our customers query online tonight from 9pm-11pm today.

        A draft of likely complaints plus their answers is attached below .
        You can go through the draft attached below before attending to them. Will forward the link with which you will connect with our customers below.
        
        Here is the link to join : @https://help.bet365.com/en/support.
    
        Are you available to deliver within this time range ?`; 
        jobReviews= `Excellent Experience!`
    
        callDiplayResult ()   
    }

    else  if (nameu == "runge" && niche=="Customer Service" && week==4 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant for Research & Data Gathering`; 
        jobDescription= `Looking for a competent Assistant to join the team of my company, to initially look after and manage emails. 
                         But with a scope to progress to more tasks
                        We have recently got a huge increase in emails and inquiries. We need someone to be able to help with replying in a quick, 
                        timely and professional manner.`;

        jobDetails= `We will need you to help us answer some our customers query online tonight from 9pm-11pm today.

        A draft of likely complaints plus their answers is attached below .
        You can go through the draft attached below before attending to them. Will forward the link with which you will connect with our customers below.
        
        Here is the link to join : @https://help.bet365.com/en/support.
    
        Are you available to deliver within this time range ?`; 
        jobReviews= `Great freelancer, very committed to work. I would definitely rehire.`
    
        callDiplayResult ()   
    }


    else  if (nameu == "runge" && niche=="Customer Service" && week==5 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant for Research & Data Gathering`; 
        jobDescription= `Looking for a competent Assistant to join the team of my company, to initially look after and manage emails. 
                         But with a scope to progress to more tasks
                        We have recently got a huge increase in emails and inquiries. We need someone to be able to help with replying in a quick, 
                        timely and professional manner.`;

        jobDetails= `We will need you to help us answer some our customers query online tonight from 9pm-11pm today.

        A draft of likely complaints plus their answers is attached below .
        You can go through the draft attached below before attending to them. Will forward the link with which you will connect with our customers below.
        
        Here is the link to join : @https://help.bet365.com/en/support.
    
        Are you available to deliver within this time range ?`; 

        jobReviews= `${firstName} is a delight to work with, we appreciate ${PossesiveAdjective} organisation and attitude.`
    
        callDiplayResult ()   
    }



    //Data Analysis//

    else  if (nameu == "runge"  && niche=="Data Analytics" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `Data Analyst`; 
        jobDescription= `We need a data analyst that is able to study the data so that we can tell the story. 
                         We  have the data to understand how to study and manage these elements, 
                         we just need an analyst who can help us move faster down this path....that is potentially 
                         a really interesting role. Is this something that could be interesting for you?`; 
    
        jobDetails= ` With the data attached below. Help analyse our Customer Experience (expectation management, optimization)
        )`
    
        jobReviews= `Thanks a lot! It was a pleasure working and looking forward to work in the future.`
        callDiplayResult ()
    }



    //Data Visulization//

    else  if (nameu == "runge"  && niche=="Data Visualization" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `Setup calculations for transaction data`; 
        jobDescription= `I want to build a dashboard that shows us which NFTs to purchase based on our data and rules.
    
                        This is a very simple project. We already have all the data and we have very simple rules for processing the data.
        
                        Here is a sample set of NFT transaction data (117 data points):
        
                        https://docs.google.com/spreadsheets/d/1e8gdY22u4waYoLu2_2NqNdHbWfUT9-Wx3Nr2ECPOXSc/edit?usp=sharing`; 
    
        jobDetails= ` From the data in the link : https://docs.google.com/spreadsheets/d/1e8gdY22u4waYoLu2_2NqNdHbWfUT9-Wx3Nr2ECPOXSc/edit?usp=sharing
                     Help make Simple calculations of :
    
                     #1 - For each wallet address, count the number of transactions = Wallet volume (WV)
                     #2 - Add all sell prices, minus all buy prices, per wallet address = User profit (UP)`
    
        jobReviews= `Great to work with - did exactly what I needed`
        callDiplayResult ()
    }

    //Copywriting//

    else  if (nameu == "runge" && niche=="Copywriting" && week==1 && (sex == "He" || sex == "She")) {
        jobTitle= `Copywriter for email newsletters.`; 
        jobDescription= `Hello
    
        I have some business emails to send and need a person to help craft together my ideas on email before sending and do some proofreading.`; 
    
        jobDetails= ` I want you to help draft an email to be sent to our subscribers on the latest electronic gadgets we have in stock currently. Will want this email composed and delivered tomorrow.
    
                    Here is a list of the latest electronic gadgets we got they should be included in the mail, Infinix 43" Android Hd Smart Tv, Amazon Fire TV Stick With All-Ne, 
                     Polystar 5.1ch Bluetooth HDMI Ta,Imagine USB 5V To DC 12V 5521 Ba andSamsung 65" Crystal UHD 4K Curve. ?`
    
        jobReviews= `${firstName} is a great copywriter, easy to work with and gets the job done quickly!`
        callDiplayResult ()
    
    }
    
    
    else  if (nameu == "runge" && niche=="Copywriting" && week==2 && (sex == "He" || sex == "She")) {
        jobTitle= `Email Copywriting.`; 
        jobDescription= `We are searching for a copywriter specialized in email marketing.
        You need to have :
        - Deep understanding of email marketing copywriting (including A/B testing, Conversion funnels etc)`; 
    
        jobDetails= ` We are a fashion brand, we will need you to help compose an email to be sent to our subscribers on the latest fashion clothes we have in stock currently.
    
        Here is a list of the latest fashion clothes and shoes we have, they should be included in the mail. Fila shoes, Bloch shoes, Gemy, Maalouf dress, Lafayette 148 New York and Raquel Allegra.
        
        Can you deliver this in a day ?`
    
        jobReviews= `${firstName} is a great copywriter, easy to work with and gets the job done quickly!`
        callDiplayResult ()
    
    }
    
    else  if (nameu == "runge" && niche=="Copywriting" && week==3 && (sex == "He" || sex == "She")) {
        jobTitle= `Copywriter for email newsletters.`; 
        jobDescription= `Hello
    
        I have some business emails to send and need a person to help craft together my ideas on email before sending and do some proofreading.`; 
    
        jobDetails= ` I want you to help draft an email to be sent to our subscribers on the latest electronic gadgets we have in stock currently. Will want this email composed and delivered tomorrow.
    
                    Here is a list of the latest electronic gadgets we got they should be included in the mail, Infinix 43" Android Hd Smart Tv, Amazon Fire TV Stick With All-Ne, 
                     Polystar 5.1ch Bluetooth HDMI Ta,Imagine USB 5V To DC 12V 5521 Ba andSamsung 65" Crystal UHD 4K Curve. ?`
    
        jobReviews= `${firstName} is a great copywriter, easy to work with and gets the job done quickly!`
        callDiplayResult ()
    
    }


    else  if (nameu == "runge" && niche=="Copywriting" && week==4 && (sex == "He" || sex == "She")) {
        jobTitle= `Need a copywriter for social media post  `; 
        jobDescription= `I need the below copywritten and copyedited asap. I’m Basically looking to add clarity to my sentences and increase understand/ readability.

        Posting on social media in 2 days time.
        
        
        POST BELOW:
        
        Dear Self,
        
        When you receive a compliment, you do not have to compliment back automatically. It’s okay to say thank you.
        
        When someone highlights your milestones, you do not have to deflect attention away from yourself by minimizing your accomplishments or shifting focus to them.
        
        These are automatic responses you learned in childhood during survival mode.  Pain taught you to divert attention away from yourself by making yourself small and unseen) because it was safer to do while withstanding the criticism and abuse.
        
        I get it.
        
        But I need to understand that you no longer need to live in this space, my love. It is safe to brighten your light and embrace all there is to You.`; 
    
        jobDetails= ` Find another post , the one in description has been used`
    
        jobReviews= `${firstName} is an excellent client with great communication and clear expectations. Would absolutely work with them again!`
        callDiplayResult ()
    
    }

    else  if (nameu == "runge" && niche=="Copywriting" && week==5 && (sex == "He" || sex == "She")) {
        jobTitle= `Copywriter for website`; 
        jobDescription= ` I am looking to hire an individual experienced in promotional copywriting. In particular, I need help crafting a mission statement, copyediting the About me section, and filling 
                        in other Blurb sections on the website `; 
    
        jobDetails= ` Find another post , the one in description has been used`
    
        jobReviews= `${firstName} is an excellent client with great communication and clear expectations. Would absolutely work with them again!`
        callDiplayResult ()
    
    }

    else  if (nameu == "runge" && niche=="Copywriting" && week==6 && (sex == "He" || sex == "She")) {
        jobTitle= `Need Copywriter for short blog`; 
        jobDescription= ` I need a copywriter to light copywrite and edit my short blog. It is currently at less than 300 words, but I want it to be about 500 words. This blog represents a conversation with my inner child and is meant to empower other survivors with lessons learned through self-reflection. Please only reach out if you have an understanding and connection to the topic as I am looking for someone to polish up the blog and expound on sentences that need clarification.

        Thanks. `; 
    
        jobDetails= ` Find another post , the one in description has been used`
    
        jobReviews= `${firstName} is an excellent client with great communication and clear expectations. Would absolutely work with them again!`
        callDiplayResult ()
    
    }

    else  if (nameu == "runge" && niche=="Copywriting" && week==7 && (sex == "He" || sex == "She")) {
        jobTitle= `Marketing copy writer `; 
        jobDescription= ` We're looking for an experienced marketing copy writer to write for one pagers, sales collaterals, 
                            website with CTAs, and email marketing for an HR tech company.`; 
    
        jobDetails= ` Find another post , the one in description has been used`
    
        jobReviews= `${firstName} is an excellent client with great communication and clear expectations. Would absolutely work with them again!`
        callDiplayResult ()
    
    }

    else  if (nameu == "runge" && niche=="Copywriting" && week==8 && (sex == "He" || sex == "She")) {
        jobTitle= `Website Copy Writer`; 
        jobDescription= ` We're putting together a new website and need some help writing copy. This might include about us info or short blurbs for different web components that explain what our business does.
                             We would like somebody who can think creatively and can work pretty fast.`; 
    
        jobDetails= ` Find another post , the one in description has been used`
    
        jobReviews= `${firstName} is an excellent client with great communication and clear expectations. Would absolutely work with them again!`
        callDiplayResult ()
    } 

    

    // Digital Marketing//

    else  if (nameu == "runge" && niche=="Digital Marketing" && week==1 && (sex == "He" || sex == "She")) {
        jobTitle= `Social Media Marketing`; 
        jobDescription= `We are a startup company and our mission is be the most trusted and convenient online destination for pet parents in Thailand.

        Knowledgeable with Instagram marketing
        Native Thai Speaker with good common English
        Good at communicating with customer
        Basic Excel Data Entry for collecting customer information
    
       `; 
    
        jobDetails= ` I want you to help draft an email to be sent to our subscribers on the latest electronic gadgets we have in stock currently. Will want this email composed and delivered tomorrow.
    
                    Here is a list of the latest electronic gadgets we got they should be included in the mail, Infinix 43" Android Hd Smart Tv, Amazon Fire TV Stick With All-Ne, 
                     Polystar 5.1ch Bluetooth HDMI Ta,Imagine USB 5V To DC 12V 5521 Ba andSamsung 65" Crystal UHD 4K Curve. ?`
    
        jobReviews= `${firstName} finished work one time and did exactly what I needed!`
        callDiplayResult ()
    
    }

    //Social Media Marketing//

    else  if (nameu == "runge" && niche==" Social Media Marketing" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `Social media management`; 
        jobDescription= `We're a tech startup. We're terrible at social media & need someone to strategize, create & post content on social platforms that make sense for us on an on-going basis. Good news is we have a business that anyone can relate to & have existing content that can be used.

        Need help with
        - social media strategy
        - creating, posting content
        - engagement online `;

        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Perfect job! Did all i asked. I will be definitely back with more orders. Thanks`
    
        callDiplayResult ()   
    }

    else  if (nameu == "runge" && niche==" Social Media Marketing" && week==2 && (sex == "He" || sex == "She")){
        jobTitle= ` Social Media Manager`; 
        jobDescription= `Hello! 👋

        We are a startup agency looking for someone who is experienced both with social media and with project management as the role is specifically to shepherd the team towards bringing social media projects to life, 
            from creative brief through go-live. You must be able to publish content, review content, creating, posting content etc. `;

        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Perfect job! Did all i asked. I will be definitely back with more orders. Thanks`
    
        callDiplayResult ()   
    }




    // Facebook Ads //

    else  if (nameu == "runge" && niche=="Facebook Ads" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `Facebook Ads Expert Needed`; 
        jobDescription= `I run an online ecommerce brand.  We need help setting up an add funnel and testing various versions of content, copy, and audiences for optimization.

        This job will involve
        -Building specific ads with provided content
        -Providing some copywriting
        -Managing spend
        -Identifying winning ads
        -Optimizing for performance`;

        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Perfect job! Did all i asked. I will be definitely back with more orders. Thanks`
    
        callDiplayResult ()   
    }

    //Google Ads

    else  if (nameu == "runge" && niche=="Google Ads" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `PPC Google Ads Expert Needed`; 
        jobDescription= `We are a small ecommerce business looking to have an audit done on our Google Ads.

        Looking for someone to integrate all data feeds into reportable, correct metrics and create an optimized campaign for sales.  
        
        -Address potential issues with conversions and metrics
        -Correct data feeds and reporting
        -Create 2 campaigns to test
        -Monitor campaigns and amend for performance.`;

        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Perfect job! Did all i asked. I will be definitely back with more orders. Thanks`
    
        callDiplayResult ()   
    }



    //Virtual assistant//

    
    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `Want Virtual Assistant`; 
        jobDescription= `Hi,
        Looking for a list builder who can identify specific business owners who own FinTech companies- with specific criteria such as
        length of leadership,
        age of the owner(s),
        Yearly Revenue,
        locations (by state), etc.`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Perfect job! Did all i asked. I will be definitely back with more orders. Thanks`
    
        callDiplayResult ()   
    }

    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==2 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant Catagory
        `; 
        jobDescription= `Hello,
        I'm looking for someone who can help me to find 100 Restaurants in the USA.
        I need flowing information:
        Restaurants Name,
        Website,
        Phone Number,
        Menu Items,
        Instagram Profile, etc.`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Wow. This is a great job. ${sex} did an excellent job. Will Recommend!`
    
        callDiplayResult ()   
    }

    
    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==3 && (sex == "He" || sex == "She")){
        jobTitle= `  Need Virtual Assistant to Find Contacts
        `; 
        jobDescription= `We are looking to work with a Web research specialist to compile a list of contacts of University and College administrators in the United States. The roles of the contacts that we require are a specific type (Directors of Students Success, Dean of Students, etc.) which we'd be happy to elaborate more on in further conversations.
                         We are hoping to commence this project as soon as possible.`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Outstanding, Very professional. Highly recommended.`
    
        callDiplayResult ()   
    }


    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==4 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant for Online Research `; 
        jobDescription= `I need a freelancer who can help find me Emails of Tree Service Provider. 
        hoping to commence this project as soon as possible..`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Very good, did the job successfully`
    
        callDiplayResult ()   
    }

    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==5 && (sex == "He" || sex == "She")){
        jobTitle= `Virtual Assistant- Internet Research `; 
        jobDescription= `I need a freelancer who can help find me Emails of Tree Service Provider. 
        hoping to commence this project as soon as possible..`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `Thank you for a job well done! Very grateful for your help!`
    
        callDiplayResult ()   
    }


    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==6 && (sex == "He" || sex == "She")){
        jobTitle= `web internet research`; 
        jobDescription= `I need a freelancer who can help find me Emails of some companies online. 
        hoping to commence this project as soon as possible..`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `${sex} is resposible person with excellent comunication attitude.
        I recommend her services. `
    
        callDiplayResult ()   
    }

    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==7 && (sex == "He" || sex == "She")){
        jobTitle= `
        Need a Virtual Assistant to do web research 
    `; 
        jobDescription= `I need a freelancer who can help find me Emails of some companies online. 
        hoping to commence this project as soon as possible..`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `${firstName} is a great person to work with! 
                    ${sex} is great at communicating, does the work on time, and is a great pleasure to work with!`
    
        callDiplayResult ()   
    }


    else  if (nameu == "runge" && niche=="Virtual Assistant" && week==8 && (sex == "He" || sex == "She")){
        jobTitle= `
        General Virtual Assistant for a task
    `; 
        jobDescription= `Hey,

        I'm looking for a virtual assistant that can help me with a task.
        
        I already have a fairly simple & straightforward task for you. If you complete it well then I'll keep sending more work to you!
        
        The task: Go to Twitter and make a list in Google Spreadsheet of influencers in a particular niche.
        
        That's it!
        
        Thanks.`
        jobDetails= `Not added yet.
    
        .`; 
        jobReviews= `${firstName} is a great person to work with! 
                    ${sex} is great at communicating, does the work on time, and is a great pleasure to work with!`
    
        callDiplayResult ()   
    }

    //Graphic Design//

    else  if (nameu == "runge" && niche=="Graphic Design" && week==1 && (sex == "He" || sex == "She")){
        jobTitle= `
        I need health flyer design created.
    `; 
        jobDescription= `
        We need a designer who can help with health flyer design. We want people to know our services as a fitness Trainer.
        Thank you very much.`

        jobDetails= `Hi ${firstName},  I will want you to help design a flyer for our fitness  brand. I have attached below a sample of the flyer design we want.
                      " With Jonathan Smith " should be replaced with "With Alex Liam "  our fee is "$40 per session"
                      Our adress is "Hwy
                      Highmore, South Dakota(SD), 57345"

                      Our call us number should als be changed to "1-212-791-4274". We don't have website yet, you should remove that.

                      We want the background color to be pink.

                      How long will it take you to get  this delivered?
        .`; 

        

        jobReviews= `${firstName} was easy to work & communicate with. ${sex} understood exactly what I wanted, very creative. Would hire again.`
    
        
        callDiplayResult ()  

       

        CatchTrainer ()

    }

    else{
        localStorage.clear()
        notInputted = "Unavailable !!"
        errorEl.innerHTML = notInputted;

        localStorage.setItem("notInputted", JSON.stringify(notInputted))
    }

} 

window.location.reload();
window.location.reload();
return false;   
    
})





