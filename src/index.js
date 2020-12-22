import "./styles.css";

const translations = {
  english: {
    headings: {
      my_page: "{{ name }}'s Page"
    }
  },
  french: {},
  spanish: {}
};
const data = { name: "John" };
const key = "english.headings.my_page";

/**
 * Format double braced template string
 * @param {string} string
 * @param {string} find
 * @param {string} replace
 * @returns {string}
 */
function findReplaceString(string, find, replace) {
  if (/[a-zA-Z\_]+/g.test(string)) {
    return string.replace(
      new RegExp("{{(?:\\s+)?(" + find + ")(?:\\s+)?}}"),
      replace
    );
  } else {
    throw new Error(
      "Find statement does not match regular expression: /[a-zA-Z_]+/"
    );
  }
}

function translate(translations, key, data) {
  const { name } = data;
  const [english] = key.split(".");
  const pageTitle = translations[english].headings.my_page;
  // return findReplaceString(pageTitle, "name", name);
  return pageTitle.replace("name", name);
}

const result = translate(translations, key, data);
document.getElementById("app").innerHTML = ` 
<h1>${result}!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
