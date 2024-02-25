
let result = {
  tag: "",
  free: true,
  role: false,
  user: "rohitsharma1082001",
  email: "rohitsharma1082001@gmai.com",
  score: 0.16,
  state: "deliverable",
  domain: "gmai.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "rohitsharma1082001@gmail.com",
  format_valid: true,
}

submitBtn.addEventListener("click", async (e) =>
{
    e.preventDefault()
    console.log("Clicked")
    resultCont.innerHTML = ` <img  width="123" src="/images/loading.svg" alt="">`
    let key = "ema_live_3v00ivPcMO4LZkT4GWi4JaYycgRR5nYTqYElNKP0"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()

    let str = ``;
    for (key of Object.keys(result)) {
      //console.log(item)
      if(result[key] !== "" && result[key] !== " " ){
        str = str + `<div>${key}:${result[key]}</div>`;
      }
      
    }

    resultCont.innerHTML = str;


})




