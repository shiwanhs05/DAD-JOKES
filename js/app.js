const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading....';
  try{
    const response = await fetch(url, {
      headers:{
        Accept: 'application/json', 
        'User-Agent': 'Learning App'
      }
    });
    if(!response.ok){
      throw new Error('there was an error');
    }
    const data = await response.json();
    result.textContent = data.joke;
  }
  catch(error){
    result.textContent = 'There was an error....';
  }
};
document.addEventListener('DOMContentLoaded', fetchDadJoke);
btn.addEventListener('click', () => {
  fetchDadJoke();
});




