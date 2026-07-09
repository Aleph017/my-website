const active_field = document.getElementById("days_active");
const isp_field = document.getElementById("days_since_isp");
const url = "https://aleph17.myaddr.io/api.json";
const today = new Date();
const day = 60*60*24;


async function get_it() {
  try {
    const ans = await fetch(url);
    if(!ans.ok){
      throw new Error(`fuck ${ans.status}`);
    }
    const result = await ans.json();
    active_field.innerHTML = `days with white ip: ${result["days_active"]}`;
    const isp_date = new Date(result["last_lost_ip"]);
    const seconds = Math.floor((today - isp_date) / 1000);
    const since = Math.floor(seconds / day)
    isp_field.innerHTML = `days since last time being unreachable: ${since}`;
  } 
  catch(error) {
    console.error(`${error.message}`);
  }
}

get_it();
