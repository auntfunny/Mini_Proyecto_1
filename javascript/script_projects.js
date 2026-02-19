const pagesDropDownButton = document.querySelector("#pagesDropDownButton");
const pagesDropDownMenu = document.querySelector("#pagesDropDownMenu");
const mainBody = document.querySelector("#mainBody");
const tipCalculatorCard = document.querySelector("#tipCalculatorCard");
const socialLinksCard = document.querySelector("#socialLinksCard");
const blogPreviewCard = document.querySelector("#blogPreviewCard");
const menuPageCard = document.querySelector("#menuPageCard");
const gateProjectCard = document.querySelector("#gateProjectCard");

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
let captionClasses =
  "w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly h-80".split(" ");

const newTipCalculator = document.createElement("article");
newTipCalculator.id = "newTipCalculator";
for (let i = 0; i < myClassList1.length; i++) {
  newTipCalculator.classList.add(myClassList1[i]);
}

const tipPageLink = document.createElement("a");
tipPageLink.id = "tipPageLink";
tipPageLink.href = "https://tip-calculator-app-bay-phi.vercel.app/";
tipPageLink.target = "_blank";
for (let i = 0; i < linkClasses.length; i++) {
  tipPageLink.classList.add(linkClasses[i]);
}

const tipImage = document.createElement("img");
tipImage.id = "tipImage";
tipImage.alt = "Tip Calculator";
tipImage.classList.add("rounded-xl", "w-full");
tipImage.src = "/images/Tip_Calculator.png";

const tipCaption = document.createElement("div");
tipCaption.id = "tipCaption";
for (let i = 0; i < captionClasses.length; i++) {
  tipCaption.classList.add(captionClasses[i]);
}
tipCaption.innerHTML = `<h2 class="text-lg md:text-3xl text-center lg:text-right text-acc3">
            Tip Calculator App
          </h2>
          <p class="text-xs md:text-base text-acc4 px-2 md:indent-8">
            This project was from a Frontend Mentor challenge. It was my first
            JavaScript project, and I learned a lot about DOM manipulation and
            how to create interactive material, letting the user enter info and
            change the appearance of the site. It was an exciting first project
            that taught me a lot of new skills.
          </p>
          <a
            href="https://github.com/auntfunny/Tip_Calculator_App"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >`;

mainBody.appendChild(newTipCalculator);
newTipCalculator.appendChild(tipPageLink);
newTipCalculator.appendChild(tipCaption);
tipPageLink.appendChild(tipImage);

const newSocialLinks = document.createElement("article");
newSocialLinks.id = "newSocialLinks";
for (let i = 0; i < myClassList2.length; i++) {
  newSocialLinks.classList.add(myClassList2[i]);
}

const socialPageLink = document.createElement("a");
socialPageLink.id = "socialPageLink";
socialPageLink.href = "https://social-links-profile-theta-six.vercel.app/";
socialPageLink.target = "_blank";
for (let i = 0; i < linkClasses.length; i++) {
  socialPageLink.classList.add(linkClasses[i]);
}

const socialImage = document.createElement("img");
socialImage.id = "socialImage";
socialImage.alt = "Tip Calculator";
socialImage.classList.add("rounded-xl", "w-full");
socialImage.src = "/images/Social_Links.png";

const socialCaption = document.createElement("div");
socialCaption.id = "socialCaption";
for (let i = 0; i < captionClasses.length; i++) {
  socialCaption.classList.add(captionClasses[i]);
}
socialCaption.innerHTML = `<h2 class="text-lg md:text-3xl text-center lg:text-left text-acc3">
            Generic Social Links Profile
          </h2>
          <p class="text-xs md:text-base text-acc4 px-2 md:indent-8">
            This project came from a challenge given on the Frontend Mentor
            site. It was to recreate the social links profile given to make it
            as similar to the original picture as possible. This included making
            it responsive for mobile users and including hover and focus states
            to increase accessibility.
          </p>
          <a
            href="https://github.com/auntfunny/Social_Links_Profile"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >`;

mainBody.appendChild(newSocialLinks);
newSocialLinks.appendChild(socialPageLink);
newSocialLinks.appendChild(socialCaption);
socialPageLink.appendChild(socialImage);

const newBlogPreview = document.createElement("article");
newBlogPreview.id = "newBlogPreview";
for (let i = 0; i < myClassList1.length; i++) {
  newBlogPreview.classList.add(myClassList1[i]);
}

const blogPageLink = document.createElement("a");
blogPageLink.id = "blogPageLink";
blogPageLink.href = "https://auntfunny.github.io/Blog_Preview_Card/";
blogPageLink.target = "_blank";
for (let i = 0; i < linkClasses.length; i++) {
  blogPageLink.classList.add(linkClasses[i]);
}

const blogImage = document.createElement("img");
blogImage.id = "blogImage";
blogImage.alt = "Tip Calculator";
blogImage.classList.add("rounded-xl", "w-full");
blogImage.src = "/images/Blog_Preview.png";

const blogCaption = document.createElement("div");
blogCaption.id = "blogCaption";
for (let i = 0; i < captionClasses.length; i++) {
  blogCaption.classList.add(captionClasses[i]);
}
blogCaption.innerHTML = `<h2 class="text-lg md:text-3xl text-center lg:text-right text-acc3">
            Generic Blog Preview Card
          </h2>
          <p
            class="text-xs md:text-base text-acc4  px-2 md:indent-8 "
          >
            This project came from a challenge given on the Frontend Mentor
            site. It was to recreate Blog Preview Card and include some
            interactive hover features. This was one of the very first projects
            I did and started practicing making projects with HTML and basic CSS
            features.
          </p>
          <a
            href="https://github.com/auntfunny/Blog_Preview_Card"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >`;

mainBody.appendChild(newBlogPreview);
newBlogPreview.appendChild(blogPageLink);
newBlogPreview.appendChild(blogCaption);
blogPageLink.appendChild(blogImage);

const newMenuPage = document.createElement("article");
newMenuPage.id = "newMenuPage";
for (let i = 0; i < myClassList2.length; i++) {
  newMenuPage.classList.add(myClassList2[i]);
}

const recipePageLink = document.createElement("a");
recipePageLink.id = "recipePageLink";
recipePageLink.href = "https://recipe-page-main-eosin-omega.vercel.app/";
recipePageLink.target = "_blank";
for (let i = 0; i < linkClasses.length; i++) {
  recipePageLink.classList.add(linkClasses[i]);
}

const recipeImage = document.createElement("img");
recipeImage.id = "recipeImage";
recipeImage.alt = "Tip Calculator";
recipeImage.classList.add("rounded-xl", "w-full");
recipeImage.src = "/images/Recipe_Page.png";

const recipeCaption = document.createElement("div");
recipeCaption.id = "recipeCaption";
for (let i = 0; i < captionClasses.length; i++) {
  recipeCaption.classList.add(captionClasses[i]);
}
recipeCaption.innerHTML = `<h2 class="text-lg md:text-3xl text-center lg:text-left text-acc3">
            Generic Social Links Profile
          </h2>
          <p class="text-xs md:text-base text-acc4 px-2 md:indent-8">
            This project came from a challenge given on the Frontend Mentor
            site. The challenge was to create a recipe page based on the picture
            provided, including styles using span and table features. There was
            also a mobile picture, and this was the first real responsive,
            mobile-first page that I created.
          </p>
          <a
            href="https://github.com/auntfunny/Recipe_Page_Main"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >GitHub Repository</a
          >`;

mainBody.appendChild(newMenuPage);
newMenuPage.appendChild(recipePageLink);
newMenuPage.appendChild(recipeCaption);
recipePageLink.appendChild(recipeImage);

const newGateProject = document.createElement("article");
newGateProject.id = "newGateProject";
for (let i = 0; i < myClassList1.length; i++) {
  newGateProject.classList.add(myClassList1[i]);
}

const gatePageLink = document.createElement("a");
gatePageLink.id = "gatePageLink";
gatePageLink.href = "#";
gatePageLink.target = "_blank";
for (let i = 0; i < linkClasses.length; i++) {
  gatePageLink.classList.add(linkClasses[i]);
}

const gateImage = document.createElement("img");
gateImage.id = "gateImage";
gateImage.alt = "Tip Calculator";
gateImage.classList.add("rounded-xl", "w-full");
gateImage.src = "/images/Gate.png";

const gateCaption = document.createElement("div");
gateCaption.id = "gateCaption";
for (let i = 0; i < captionClasses.length; i++) {
  gateCaption.classList.add(captionClasses[i]);
}
gateCaption.innerHTML = `<h2 class="text-lg md:text-3xl text-center lg:text-right text-acc3">
            Cabin Gate Project
          </h2>
          <p
            class="text-xs md:text-base text-acc4 px-2 md:indent-8 "
          >
            This was a project I did for a cabin rental project as the main
            entry gate. I built it by myself, designing, cutting and welding the
            frame, setting the rail, and adding the wood planks, creating a
            functioning and smooth rolling gate, with the option to add a motor
            to make it automated.
          </p>
          <a
            href="#"
            target="_blank"
            class="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >Cabin Facebook</a
          >`;

mainBody.appendChild(newGateProject);
newGateProject.appendChild(gatePageLink);
newGateProject.appendChild(gateCaption);
gatePageLink.appendChild(gateImage);
