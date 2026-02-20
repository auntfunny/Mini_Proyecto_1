const sectionDropDownButton = document.querySelector("#sectionDropDownButton");
const sectionDropDownMenu = document.querySelector("#sectionDropDownMenu");
const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const aboutLink = document.querySelector("#aboutLink");
const skillsLink = document.querySelector("#skillsLink");
const projectsLink = document.querySelector("#projectsLink");

let pageMenuToggle = 0;
let sectionMenuToggle = 0;

pagesDropDownButton.addEventListener("click", togglePageMenu);
sectionDropDownButton.addEventListener("click", toggleSectionMenu);
aboutLink.addEventListener("click", toggleSectionMenu);
skillsLink.addEventListener("click", toggleSectionMenu);
projectsLink.addEventListener("click", toggleSectionMenu);
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
  if (sectionMenuToggle === 1) {
    sectionDropDownMenu.classList.toggle("hidden");
    sectionMenuToggle = 0;
  }
}

function toggleSectionMenu(event) {
  if (sectionMenuToggle === 0) {
    sectionDropDownMenu.classList.toggle("hidden");
    event.stopPropagation();
    sectionMenuToggle = 1;
  } else {
    sectionDropDownMenu.classList.toggle("hidden");
    sectionMenuToggle = 0;
  }
  if (pageMenuToggle === 1) {
    pagesDropDownMenu.classList.toggle("hidden");
    pageMenuToggle = 0;
  }
}

function checkMenus(event) {
  if (!pagesDropDownMenu.contains(event.target) && pageMenuToggle === 1) {
    togglePageMenu();
  } else if (
    !sectionDropDownMenu.contains(event.target) &&
    sectionMenuToggle === 1
  ) {
    toggleSectionMenu();
  }
}

const skillList = document.querySelector("#skillList");
const skillClassList =
  "flex justify-center items-center w-28 h-28 lg:w-36 lg:h-36 rounded-xl bg-acc4 inset-shadow-sm/50 hover:scale-125 transition-all duration-400 ease-in-out".split(
    " ",
  );
const skillImageClassList = "w-18 lg:w-28".split(" ");

class skillItem {
  constructor(newID) {
    this.element = document.createElement("div");
    this.element.id = newID;
    for (let item of skillClassList) {
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

class skillImage {
  constructor(newID, newAlt, newSrc) {
    this.element = document.createElement("img");
    this.element.id = newID;
    this.element.alt = newAlt;
    this.element.src = newSrc;
    for (let item of skillImageClassList) {
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

          SKILL CARDS

***************************************************************************************************************/

const htmlSkill = new skillItem("htmlSkill");

const hmtlSkillImage = new skillImage(
  "hmtlSkillImage",
  "HTML Logo",
  "/images/html.png",
);

const cssSkill = new skillItem("cssSkill");

const cssSkillImage = new skillImage(
  "cssSkillImage",
  "CSS Logo",
  "/images/css.png",
);

const javascriptSkill = new skillItem("javascriptSkill");

const javascriptSkillImage = new skillImage(
  "javascriptSkillImage",
  "JavaScript Logo",
  "/images/javascript.png",
);

const cSkill = new skillItem("cSkill");

const cSkillImage = new skillImage("cSkillImage", "C++ Logo", "/images/c.png");

const tailwindSkill = new skillItem("tailwindSkill");

const tailwindSkillImage = new skillImage(
  "tailwindSkillImage",
  "Tailwind Logo",
  "/images/tailwind.png",
);

htmlSkill.appendTo("#skillList");
hmtlSkillImage.appendTo("#htmlSkill");
cssSkill.appendTo("#skillList");
cssSkillImage.appendTo("#cssSkill");
javascriptSkill.appendTo("#skillList");
javascriptSkillImage.appendTo("#javascriptSkill");
cSkill.appendTo("#skillList");
cSkillImage.appendTo("#cSkill");
tailwindSkill.appendTo("#skillList");
tailwindSkillImage.appendTo("#tailwindSkill");
