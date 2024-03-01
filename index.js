const Button = document.querySelector(
    ".glow-on-hover"
  );
  const Image = document.querySelector(".memeContainer img");
  const Title = document.querySelector(".memeTitle");

  const updateDetails = (url, title) => {
    Image.setAttribute("src", url);
    Title.innerHTML = title;
  };

  const generateMeme = async () => {
    try {
      const response = await fetch("https://meme-api.com/gimme/wholesomememes");
      const data = await response.json();
      updateDetails(data.url, data.title,);
    } catch (error) {
      console.error("Error fetching meme:", error);
    }
  };


  
  Button.addEventListener("click", generateMeme);
  
  generateMeme();