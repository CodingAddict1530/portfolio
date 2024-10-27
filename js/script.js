
const SERVICE_ID = "";
const TEMPLATE_ID = "";
const KEY = "";


// Define data to be displayed in Bio section.
const bioData = `
<div class="flex-1 numbers">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
</div>
<div class="flex-18 sentences">
    <div>/**</div>
    <div> * <strong>About me:</strong></div>
    <div> * </div>
    <div> * I am an enthusiastic programmer and have been writing</div>
    <div> * &nbsp;&nbsp;code since 2020.</div>
    <div> * I excel in writing desktop and mobile applications,</div>
    <div> * &nbsp;&nbsp;web apps, as well as scripting.</div>
    <div> * Outside programming I play soccer,</div>
    <div> * &nbsp;&nbsp;hangout with friends or travel around.</div>
    <div> * As a programmer, I want to create innovative, efficient and</div>
    <div> * &nbsp;&nbsp;user-friendly applications that solve real work problems as I</div>
    <div> * &nbsp;&nbsp;continuously learn, improve and contribute to impactful projects.</div>
    <div> */</div>
</div>
`;

// Define data to be displayed in Work Experience section.
const workExpData = `
<div class="flex-1 numbers">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
    <div>19</div>
    <div>20</div>
</div>
<div class="flex-18 sentences">
    <div>/**</div>
    <div> * <strong>Work Experience:</strong></div>
    <div> * </div>
    <div> * <strong>Peer Tutor at Algonquin College, Ottawa ON:</strong></div>
    <div> * <strong>May 2024 - Present</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Tutored students, improving their understanding of</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java programming, Database systems and Object Oriented</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;concepts.</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Demonstrated strong communication skills by explaining</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;complex theories to various students in 1 – 2 hour sessions.</div>
    <div> * <strong> General Laborer at ARX Fencing & Logistics, Ottawa ON:</strong></div>
    <div> * <strong>May 2024 - Present</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Developed teamwork skills by effectively working in team</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to perform required tasks.</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Provided excellent customer service when interacting with</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customers.</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Demonstrated perseverance and reliability by being able</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to do the same task for multiple hours, I guarded</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a parking lot for 11 straight hours.</div>
    <div> */</div>
</div>
`;

// Define data to be displayed in Skills section.
const skillsData = `
<div class="flex-1 numbers">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
    <div>19</div>
    <div>20</div>
    <div>21</div>
    <div>22</div>
    <div>23</div>
    <div>24</div>
    <div>25</div>
    <div>26</div>
    <div>27</div>
    <div>28</div>
    <div>29</div>
    <div>30</div>
    <div>31</div>
    <div>32</div>
    <div>33</div>
    <div>34</div>
    <div>35</div>
    <div>36</div>
    <div>37</div>
    <div>38</div>
    <div>39</div>
    <div>40</div>
    <div>41</div>
    <div>42</div>
    <div>43</div>
    <div>44</div>
    <div>45</div>
</div>
<div class="flex-18 sentences">
    <div>/**</div>
    <div> * <strong>Technical Skills:</strong></div>
    <div> * </div>
    <div> * <strong>Programming languages:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Java (Expert), Python (Expert), JavaScript (Intermediate),</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dart (Intermediate), PHP (Novice), C++ (Novice),</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SQL (Expert).</div>
    <div> * <strong>Markup languages:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;HTML (Expert), CSS (Expert).</div>
    <div> * <strong>Operating Systems:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Windows, Linux.</div>
    <div> * <strong>Database Management Systems:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;MySQL, PostgreSQL, Oracle DB, Microsoft SQL Server, SQLite,</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MS Access.</div>
    <div> * <strong>Frameworks:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;JUnit, JavaFX, Swing, Flutter, Django.</div>
    <div> * <strong>Software Tools:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Git, Intellij Idea, Eclipse, Pycharm, Visual Studio,</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL Workbench, SQL Server Management Studio,</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VMWare Workstation, Oracle SQL Developer, XAMPP,</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pgAdmin 4, Umlet, Microsoft Office (Word, Excel,</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powerpoint, Access, Outlook).</div>
    <div> * </div>
    <div> * <strong>Soft Skills:</strong></div>
    <div> * </div>
    <div> * <strong>Leadership:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Proved leadership skills by leading a group projects during</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;various academic group projects.</div>
    <div> * <strong>Communication:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Ability to effectively communicate with team members and</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supervisors in a professional setting.</div>
    <div> * <strong>Teamwork:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Excel in team working environments proven by a good number</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of months working with team members in previous</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and current group projects<jobs class=""></jobs></div>
    <div> * <strong>Time Management:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Good time management skills and strategies to finish tasks</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;within deadlines.</div>
    <div> * <strong>Adaptation and Quick Learning:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Adapting to changing environments as I cope well with new</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;working environments.</div>
    <div> * <strong>Languages:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;English (Fluent).</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;French (Fluent).</div>
    <div> */</div>
</div>
`;

// Define data to be displayed in Education section.
const educationData = `
<div class="flex-1 numbers">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
</div>
<div class="flex-18 sentences">
    <div>/**</div>
    <div> * <strong>Education:</strong></div>
    <div> * </div>
    <div> * <strong>Course:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Computer Programming and Analysis,</div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;January 2024 - Present.</div>
    <div> * <strong>Institution:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Algonquin College, Ottawa ON.</div>
    <div> * <strong>GPA:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;3.96/4.00 (Dean's Honours List).</div>
    <div> * <strong>Degree:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;Computer Programming and Analysis Advanced Diploma.</div>
    <div> * <strong>Coursework:</strong></div>
    <div> * &nbsp;&nbsp;&nbsp;&nbsp;<span class="white pointer" onclick="course()">Click here to check it out.</span></div>
    <div> */</div>
</div>
`;

// Add an event listener for when the document has fully loaded.
document.addEventListener("DOMContentLoaded", function1);

// Get the LinkedIn and GitHub divs and add event listeners for when they get clicked.
let linkedinBtn = document.getElementById("linkedin");
linkedinBtn.addEventListener("click", linkedin);
let githubBtn = document.getElementById("github");
githubBtn.addEventListener("click", github);

// Get the div containing projects.
const projectBody = document.getElementById("projects-body2");

/**
 * Scroll the projects div a certain amount forward.
 */
function next() {
    projectBody.scrollBy({
        left: 420,
        behavior: "smooth"
    })
}

/**
 * Scroll the projects div a certain amount backwards.
 */
function previous() {
    projectBody.scrollBy({
        left: -420,
        behavior: "smooth"
    })
}

/**
 * Add an event listener for key presses.
 */
document.addEventListener("keydown", function(event) {

    // Get window width.
    let width = window.innerWidth;

    // Check whether the width is more than or equal to 600.
    if (width >= 600) {
        if (event.key === "ArrowLeft") {
            previous("left");
        } else if (event.key === "ArrowRight") {
            next("left");
        }
    } else {
        if (event.key === "ArrowUp") {
            previous("top");
        } else if (event.key === "ArrowDown") {
            next("top");
        }
    }


})

/**
 * Displays or removes the sidebar.
 */
function toggleSidebar() {

    let sidebar = document.getElementById('sidebar');
    let head = document.getElementById('resume-body1');

    sidebar.classList.toggle('menu-active');
    try {
        head.classList.toggle('stick');
    } catch (error) {
        console.log(error);
    }
}

// Get the dropdown content div.
const dropdownContent = document.querySelector('.dropdown-content');

// Add an event listener for when the window is resized
window.addEventListener("resize", function () {

    // Get the new window size.
    let width = window.innerWidth;

    // If more or equal to 600, add the class "display-important" to dropdownContent.
    if (width >= 600) {
        dropdownContent.classList.add("display-important");
    } else {
        dropdownContent.classList.remove("display-important");
    }

})

// Add an event listener for when the document has fully loaded.
document.addEventListener('DOMContentLoaded', function () {

    const dropdown = document.querySelector('.dropdown');
    const dropdownButton = document.querySelector('.dropdown-button');

    // Add an event listener for when dropdownButton is clicked.
    try {
        dropdownButton.addEventListener('click', function () {

            // Check whether display is block now and change it accordingly.
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

            // Add class "open" to dropdown or else remove it.
            dropdown.classList.toggle('open');

        });
    } catch (error) {
        console.log(error);
    }

    // Add an event listener to the window
    window.addEventListener('click', function (event) {

        let width = window.innerWidth;

        // Check whether the area clicked is not part of the dropdown and the screen width
        // is less than 600.
        try {
            if (!dropdown.contains(event.target) && width < 600) {

                // Hide the dropdown and remove class "open" from the dropdown.
                dropdownContent.style.display = 'none';
                dropdown.classList.remove('open');
            }
        } catch (error) {
            console.log(error);
        }

    });

});

/**
 * Adds a specific style to the provided HTMLElement.
 *
 * @param item the HTMLElement to be styled.
 */
function addStyle(item) {

    item.style.fontWeight = "bold";
    item.style.borderBottom = "0.3em solid #FEA55F";
}

/**
 * Removes a specific style to the provided HTMLElement.
 *
 * @param item the HTMLElement to be styled.
 */
function removeStyle(item) {

    item.style.fontWeight = "normal";
    item.style.borderBottom = "0.08em solid #1E2D3D";
}

/**
 * Opens LinkedIn profile in a new tab.
 */
function linkedin() {

    window.open("https://www.linkedin.com/in/alexis-mugisha", "_blank");
}

/**
 * Opens GitHub profile in a new tab.
 */
function github() {

    window.open("https://github.com/CodingAddict1530", "_blank");
}

/**
 * Opens default email client and prompts user to send an email to email in the link.
 */
function email() {

    window.open("mailto:amugisha005@gmail.com");
}

/**
 * Opens default email client and prompts user to send an email to email in the link.
 */
function course() {

    window.open("https://www.algonquincollege.com/sat/program/computer-programming-and-analysis/#courses", "_blank");
}

/**
 * Opens a link to the hava IDE project GitHub repository in a new tab.
 */
function javaIDEProject() {

    window.open("https://github.com/CodingAddict1530/java_ide", "_blank");
}

/**
 * Opens a link to the library system project GitHub repository in a new tab.
 */
function librarySystemProject() {

    window.open("https://github.com/CodingAddict1530/Library_System", "_blank");
}

/**
 * Opens a link to the portfolio project GitHub repository in a new tab.
 */
function portfolioProject() {

    window.open("https://github.com/CodingAddict1530/portfolio", "_blank");
}

/**
 * Opens a link to the portfolio project GitHub repository in a new tab.
 */
function recipeManagerProject() {

    window.open("https://github.com/CodingAddict1530/RecipeManager", "_blank");
}

/**
 * Opens a link to the world clock project GitHub repository in a new tab.
 */
function worldClockProject() {

    window.open("https://github.com/CodingAddict1530/world_clock", "_blank");
}

/**
 * Opens a link to Algonquin College.
 */
function college() {

    window.open("https://www.algonquincollege.com/", "_blank");
}

/**
 * Carries out multiple actions once the Document has fully loaded.
 */
function function1() {

    // Get the path of the current document.
    let path = window.location.pathname;

    // Get the HTMLElements needed.
    let hello = document.getElementById("hello");
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let contact = document.getElementById("contact");

    // Check if the current document is index.html.
    if (path.includes("index.html")) {

        // Style hello div and remove style from the rest.
        addStyle(hello);
        removeStyle(about)
        removeStyle(projects);
        removeStyle(contact);
    } else if (path.includes("resume.html")) { // Check if the current document is resume.html.

        // Style about div and remove style from the rest.
        addStyle(about);
        removeStyle(hello)
        removeStyle(projects);
        removeStyle(contact);

        // Add event listeners for when specific sections are clicked.
        let bioBtn = document.getElementById("bio");
        bioBtn.addEventListener("click", loadBio);
        let workExpBtn = document.getElementById("workExp");
        workExpBtn.addEventListener("click", loadWorkExp);
        let skillsBtn = document.getElementById("skills");
        skillsBtn.addEventListener("click", loadSkills);
        let educationBtn = document.getElementById("education");
        educationBtn.addEventListener("click", loadEducation);

    } else if (path.includes("projects.html")) {

        // Style projects div and remove style from the rest.
        addStyle(projects);
        removeStyle(about)
        removeStyle(hello);
        removeStyle(contact);

        let slideshows = {};
        let slideIndex = {};
        let slideClassNames = {};

        window.startSlideshow = startSlideshow;
        window.stopSlideshow = stopSlideshow;

        /**
         * Hide all pictures and display the current one according to the index.
         *
         * @param className the class name of the div pictures to be selected.
         * @param index the position of the current slide.
         */
        function showSlides(className, index) {
            let slides = document.getElementsByClassName(className);
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex[className] = index;
            if (slideIndex[className] > slides.length) {
                slideIndex[className] = 1;
            }
            slides[slideIndex[className] - 1].style.display = "block";
        }

        function startSlideshow(className, containerId) {
            if (!slideshows[containerId]) {
                slideClassNames[containerId] = className
                slideIndex[className] = 0;
                slideshows[containerId] = setInterval(() => {
                    showSlides(className, ++slideIndex[className]);
                }, 2000);
            }
        }

        function stopSlideshow(containerId) {
            clearInterval(slideshows[containerId]);
            slideshows[containerId] = null;
        }

    } else {

        /**
         * Initialize EmailJS.
         */
        (function(){
            emailjs.init({
                publicKey: KEY,
            });
        })();

        /**
         * Sends email to me.
         */
        function sendMail(nameField, emailField, messageField) {

            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                name: nameField.value,
                email: emailField.value,
                message: messageField.value
            })
                .then(function(response) {
                    alert('Email sent successfully!', response.status, response.text);
                }, function(error) {
                    alert('Failed to send email. Error: ' + error);
                    console.log(error)
                });

        }

        // Style contact div and remove style from the rest.
        addStyle(contact);
        removeStyle(about)
        removeStyle(projects);
        removeStyle(hello);

        // Add an event listener for when the send message button is clicked.
        let resetBtn = document.getElementById("reset");
        resetBtn.addEventListener("click", reset);

        // Get the required HTMLElements.
        let nameInput = document.getElementById("nameInput");
        let emailInput = document.getElementById("emailInput");
        let messageInput = document.getElementById("messageInput");
        let nameOutput = document.getElementById("nameSubmit");
        let emailOutput = document.getElementById("emailSubmit");
        let messageOutput = document.getElementById("messageSubmit");

        // Add event listeners for inputs in the input fields for realtime updates.
        nameInput.addEventListener("input", updateName);
        emailInput.addEventListener("input", updateEmail);
        messageInput.addEventListener("input", updateMessage);

        /**
         * Resets the values and contents of specified fields.
         */
        function reset() {

            sendMail(nameInput, emailInput, messageInput);
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            nameOutput.textContent = "";
            emailOutput.textContent = "";
            messageOutput.textContent = "";
        }

        /**
         * Updates the name being displayed to the name input.
         */
        function updateName() {

            nameOutput.textContent = nameInput.value;
        }

        /**
         * Updates the email being displayed to the email input.
         */
        function updateEmail() {

            emailOutput.textContent = emailInput.value;
        }

        /**
         * Updates the message being displayed to the message input.
         */
        function updateMessage() {

            messageOutput.textContent = messageInput.value;
        }
        
    }

}

/**
 * Loads the hello page.
 */
function helloPage() {

    window.location.href = "index.html";
}

/**
 * Loads the about page.
 */
function aboutPage() {

    window.location.href = "resume.html";
}

/**
 * Loads the projects page.
 */
function projectsPage() {

    window.location.href = "projects.html";
}

/**
 * Loads the contact page.
 */
function contactPage() {

    window.location.href = "contact.html";
}

/**
 * Changes the data in the about page to display the Bio.
 */
function loadBio() {

    document.getElementById("resume-body2").innerHTML = bioData;
}

/**
 * Changes the data in the about page to display the Work Experience.
 */
function loadWorkExp() {

    document.getElementById("resume-body2").innerHTML = workExpData;
}

/**
 * Changes the data in the about page to display the Skills.
 */
function loadSkills() {

    document.getElementById("resume-body2").innerHTML = skillsData;
}

/**
 * Changes the data in the about page to display the Education.
 */
function loadEducation() {

    document.getElementById("resume-body2").innerHTML = educationData;
}

/**
 * Filters projects according to their classes and classes ticked using checkboxes.
 */
function filterItems() {

    // Retrieve all checked checkboxes and all the projects.
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let items = document.querySelectorAll('.project');

    // Loop through each project.
    items.forEach(function(item) {

        // Check whether there are no checked checkboxes to include all projects.
        let show = checkboxes.length === 0;

        // Loop through each checked checkbox.
        checkboxes.forEach(function(checkbox) {

            // If the project contains the class checked, it is show becomes true.
            if (item.classList.contains(checkbox.value)) {
                show = true;
            }
        });

        // Display the project if show is true, otherwise don't.
        item.style.display = show ? 'flex' : 'none';
    });
}
