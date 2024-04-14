document.querySelectorAll("#link").forEach(function (data) {
  data.addEventListener("click", (event) => {
    const dataHref = data.getAttribute("data-href");
    console.log(dataHref);

    switch (dataHref) {
      /* HOME */
      case "html":
        window.open("https://quickref.me/html", "_blank");
        break;

      case "css":
        window.open("https://quickref.me/css3", "_blank");
        break;

      case "javascript":
        window.open("https://quickref.me/javascript", "_blank");
        break;

      case "es6":
        window.open("https://quickref.me/es6", "_blank");
        break;

      case "mongodb":
        window.open("https://quickref.me/mongodb", "_blank");
        break;

      /* PROGRAMMING */
      case "devresources":
        window.open("https://devresourc.es/", "_blank");
        break;

      /* ARTIFICIAL INTELLIGENCE */
      case "chatgpt":
        window.open("https://chat.openai.com/", "_blank");
        break;
      case "bingcopilot":
        window.open("https://www.bing.com/chat", "_blank");
        break;

      /* TOOLKIT */

      default:
        // Não faz nada caso não tenha nenhum data-href correspondente
        break;
    }

    event.preventDefault();
  });
});
