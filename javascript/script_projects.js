const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const mainBody = document.querySelector("#mainBody");

let pageMenuToggle = 0;

pagesDropDownButton.addEventListener("click", togglePageMenu);
document.body.addEventListener("click", checkMenus);

function togglePageMenu(event) {
  if (pageMenuToggle === 0) {
    pagesDropDownMenu.classList.toggle("hidden");
    event.stopPropagation();
    pageMenuToggle = 1;
  } else {
    pagesDropDownMenu.classList.toggle("hidden");
    pageMenuToggle = 0;
  }
}

function checkMenus(event) {
  if (!pagesDropDownMenu.contains(event.target) && pageMenuToggle === 1) {
    togglePageMenu();
  }
}

/**************************************************************************************************************

          CARD CLASS STYLES

***************************************************************************************************************/

let myClassList1 =
  "flex flex-col lg:flex-row justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(
    " ",
  );
let myClassList2 =
  "flex flex-col lg:flex-row-reverse justify-between gap-4 items-center w-3/4 min-h-84 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl".split(
    " ",
  );
let linkClasses =
  "w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out".split(
    " ",
  );
let imageClasses = "rounded-xl w-full".split(" ");
let captionClasses =
  "w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80".split(" ");
let articleTitleClasses1 =
  "text-lg md:text-3xl text-center lg:text-right text-acc3".split(" ");
let articleTitleClasses2 =
  "text-lg md:text-3xl text-center lg:text-left text-acc3".split(" ");
let articlePClasses = "text-xs md:text-base text-acc4 px-2 md:indent-8".split(
  " ",
);
let sourceLinkClasses =
  "px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out".split(
    " ",
  );

class projectCard {
  constructor(newID, style) {
    this.element = document.createElement("article");
    this.element.id = newID;
    if (style === 1) {
      for (let item of myClassList1) {
        this.element.classList.add(item);
      }
    } else {
      for (let item of myClassList2) {
        this.element.classList.add(item);
      }
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class projectPageLink {
  constructor(newID, newHref) {
    this.element = document.createElement("a");
    this.element.id = newID;
    this.element.href = newHref;
    this.element.target = "_blank";
    for (let item of linkClasses) {
      this.element.classList.add(item);
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class projectImage {
  constructor(newID, newAlt, newSrc) {
    this.element = document.createElement("img");
    this.element.id = newID;
    this.element.alt = newAlt;
    this.element.src = newSrc;
    for (let item of imageClasses) {
      this.element.classList.add(item);
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class projectCaption {
  constructor(newID) {
    this.element = document.createElement("div");
    this.element.id = newID;
    for (let item of captionClasses) {
      this.element.classList.add(item);
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class projectTitle {
  constructor(newID, newTextContent, style) {
    this.element = document.createElement("h2");
    this.element.id = newID;
    this.element.textContent = newTextContent;
    if (style === 1) {
      for (let item of articleTitleClasses1) {
        this.element.classList.add(item);
      }
    } else {
      for (let item of articleTitleClasses2) {
        this.element.classList.add(item);
      }
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class projectP {
  constructor(newID, newTextContent) {
    this.element = document.createElement("p");
    this.element.id = newID;
    this.element.textContent = newTextContent;
    for (let item of articlePClasses) {
      this.element.classList.add(item);
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}

class projectSourceLink {
  constructor(newID, newHref, newText) {
    this.element = document.createElement("a");
    this.element.id = newID;
    this.element.href = newHref;
    this.element.target = "_blank";
    this.element.textContent = newText;
    for (let item of sourceLinkClasses) {
      this.element.classList.add(item);
    }
  }

  appendTo(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
      parent.appendChild(this.element);
    } else {
      console.error(
        `Parent element with selector "${parentSelector}" not found.`,
      );
    }
  }
}
/**************************************************************************************************************

          AGE CALCULATOR CARD

***************************************************************************************************************/

const ageCalculator = new projectCard("ageCalculator", 2);

const agePageLink = new projectPageLink(
  "agePageLink",
  "https://age-calculator-app-nine-pi.vercel.app/",
);

const ageImage = new projectImage(
  "ageImage",
  "Age Calculator",
  "/images/Age_Calculator_Large.png",
);

const ageCaption = new projectCaption("ageCaption");

const ageArticleTitle = new projectTitle(
  "ageArticleTitle",
  "Age Calculator App",
);

let agePText = `This was a challenge given on the Frontend Mentor page. It takes 
            a date and uses it as the birth date to calculate the age of the person. 
            As the user inputs the date, it verifies that the date is valid and, 
            when the button is pressed, it validates the total date before calculating.
            I learned more about Javascript and how to write more logical and clean code.`;

const ageArticleP = new projectP("ageArticleP", agePText);

const ageSourceLink = new projectSourceLink(
  "ageSourceLink",
  "https://github.com/auntfunny/Age-Calculator-App",
  "GitHub Repository",
);

ageCalculator.appendTo("#mainBody");
agePageLink.appendTo("#ageCalculator");
ageCaption.appendTo("#ageCalculator");
ageImage.appendTo("#agePageLink");
ageArticleTitle.appendTo("#ageCaption");
ageArticleP.appendTo("#ageCaption");
ageSourceLink.appendTo("#ageCaption");

/**************************************************************************************************************

          TIP CALCULATOR CARD

***************************************************************************************************************/

const newTipCalculator = new projectCard("newTipCalculator", 1);

const tipPageLink = new projectPageLink(
  "tipPageLink",
  "https://tip-calculator-app-bay-phi.vercel.app/",
);

const tipImage = new projectImage(
  "tipImage",
  "Tip Calculator",
  "/images/Tip_Calculator_Large.png",
);

const tipCaption = new projectCaption("tipCaption");

const tipArticleTitle = new projectTitle(
  "tipArticleTitle",
  "Tip Calculator App",
  1,
);

let tipPContent = `This project was from a Frontend Mentor challenge. It was my first
            JavaScript project, and I learned a lot about DOM manipulation and
            how to create interactive material, letting the user enter info and
            change the appearance of the site. It was an exciting first project
            that taught me a lot of new skills.`;

const tipArticleP = new projectP("tipArticleP", tipPContent);

const tipSourceLink = new projectSourceLink(
  "tipSourceLink",
  "https://github.com/auntfunny/Tip_Calculator_App",
  "GitHub Repository",
);

newTipCalculator.appendTo("#mainBody");
tipPageLink.appendTo("#newTipCalculator");
tipCaption.appendTo("#newTipCalculator");
tipImage.appendTo("#tipPageLink");
tipArticleTitle.appendTo("#tipCaption");
tipArticleP.appendTo("#tipCaption");
tipSourceLink.appendTo("#tipCaption");

/**************************************************************************************************************

          SOCIAL LINKS CARD

***************************************************************************************************************/

const newSocialLinks = new projectCard("newSocialLinks", 2);

const socialPageLink = new projectPageLink(
  "socialPageLink",
  "https://social-links-profile-theta-six.vercel.app/",
);

const socialImage = new projectImage(
  "socialImage",
  "Social Links Page",
  "/images/Social_Links_Large.png",
);

const socialCaption = new projectCaption("socialCaption");

const socialArticleTitle = new projectTitle(
  "socialArticleTitle",
  "Generic Social Links Profile",
  2,
);

let socialPText = `This project came from a challenge given on the Frontend Mentor
            site. It was to recreate the social links profile given to make it
            as similar to the original picture as possible. This included making
            it responsive for mobile users and including hover and focus states
            to increase accessibility.`;

const socialArticleP = new projectP("socialArticleP", socialPText);

const socialSourceLink = new projectSourceLink(
  "socialSourceLink",
  "https://github.com/auntfunny/Social_Links_Profile",
  "GitHub Repository",
);

newSocialLinks.appendTo("#mainBody");
socialPageLink.appendTo("#newSocialLinks");
socialImage.appendTo("#socialPageLink");
socialCaption.appendTo("#newSocialLinks");
socialArticleTitle.appendTo("#socialCaption");
socialArticleP.appendTo("#socialCaption");
socialSourceLink.appendTo("#socialCaption");

/**************************************************************************************************************

          GATE PROJECT CARD

***************************************************************************************************************/
const newGateProject = new projectCard("newGateProject", 1);

const gatePageLink = new projectPageLink("gatePageLink", "#");

const gateImage = new projectImage(
  "gateImage",
  "Gate Project",
  "/images/Gate_Large.jpeg",
);

const gateCaption = new projectCaption("gateCaption");

const gateArticleTitle = new projectTitle(
  "gateArticleTitle",
  "Cabin Gate Project",
  1,
);

let gateText = `This was a project I did for a cabin rental project as the main
            entry gate. I built it by myself, designing, cutting and welding the
            frame, setting the rail, and adding the wood planks, creating a
            functioning and smooth rolling gate, with the option to add a motor
            to make it automated.`;

const gateArticleP = new projectP("gateArticleP", gateText);

const gateSourceLink = new projectSourceLink(
  "gateSourceLink",
  "#",
  "Cabin Facebook Page",
);

newGateProject.appendTo("#mainBody");
gatePageLink.appendTo("#newGateProject");
gateImage.appendTo("#gatePageLink");
gateCaption.appendTo("#newGateProject");
gateArticleTitle.appendTo("#gateCaption");
gateArticleP.appendTo("#gateCaption");
gateSourceLink.appendTo("#gateCaption");

/**************************************************************************************************************

          MENU PAGE CARD

***************************************************************************************************************/
const newMenuPage = new projectCard("newMenuPage", 2);

const recipePageLink = new projectPageLink(
  "recipePageLink",
  "https://recipe-page-main-eosin-omega.vercel.app/",
);

const recipeImage = new projectImage(
  "recipeImage",
  "Recipe Page",
  "/images/Recipe_Page_Large.png",
);

const recipeCaption = new projectCaption("recipeCaption");

const recipeArticleTitle = new projectTitle(
  "recipeArticleTitle",
  "Generic Recipe Page",
  2,
);

let recipeText = `This project came from a challenge given on the Frontend Mentor
            site. The challenge was to create a recipe page based on the picture
            provided, including styles using span and table features. There was
            also a mobile picture, and this was the first real responsive,
            mobile-first page that I created.`;

const recipeArticleP = new projectP("recipeArticleP", recipeText);

const recipeSourceLink = new projectSourceLink(
  "recipeSourceLink",
  "https://github.com/auntfunny/Recipe_Page_Main",
  "GitHub Repository",
);

newMenuPage.appendTo("#mainBody");
recipePageLink.appendTo("#newMenuPage");
recipeImage.appendTo("#recipePageLink");
recipeCaption.appendTo("#newMenuPage");
recipeArticleTitle.appendTo("#recipeCaption");
recipeArticleP.appendTo("#recipeCaption");
recipeSourceLink.appendTo("#recipeCaption");

/**************************************************************************************************************

          BLOG PREVIEW CARD

***************************************************************************************************************/
const newBlogPreview = new projectCard("newBlogPreview", 1);

const blogPageLink = new projectPageLink(
  "blogPageLink",
  "https://auntfunny.github.io/Blog_Preview_Card/",
);

const blogImage = new projectImage(
  "blogImage",
  "Blog Preview Card Page",
  "/images/Blog_Preview_Large.png",
);

const blogCaption = new projectCaption("blogCaption");

const blogArticleTitle = new projectTitle(
  "blogArticleTitle",
  "Generic Blog Preview Card",
  1,
);

let blogText = `This project came from a challenge given on the Frontend Mentor
            site. It was to recreate Blog Preview Card and include some
            interactive hover features. This was one of the very first projects
            I did and started practicing making projects with HTML and basic CSS
            features.`;

const blogArticleP = new projectP("blogArticleP", blogText);

const blogSourceLink = new projectSourceLink(
  "blogSourceLink",
  "https://github.com/auntfunny/Blog_Preview_Card",
  "GitHub Repository",
);

newBlogPreview.appendTo("#mainBody");
blogPageLink.appendTo("#newBlogPreview");
blogImage.appendTo("#blogPageLink");
blogCaption.appendTo("#newBlogPreview");
blogArticleTitle.appendTo("#blogCaption");
blogArticleP.appendTo("#blogCaption");
blogSourceLink.appendTo("#blogCaption");
