const birth_date = new Date("2009-08-03");
const age_display = document.getElementById("my_age");

setInterval(() => {
  const now = new Date();
  const seconds = Math.floor((now - birth_date) / 1000);
  const years = Math.floor(seconds / (60*60*24*365.25));
  age_display.innerHTML = `I am ${seconds.toLocaleString()} seconds or ${years} years old`;
  }, 1000)
