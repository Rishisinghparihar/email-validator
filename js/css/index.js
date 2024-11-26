console.log("this is my script")

let results = {
  tag: "",
  free: true,
  role: false,
  user: "rsparihar876",
  email: "rsparihar876@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
}
submitbtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("button clicked")
  let key = "ema_live_YmpIPQLTnWTjUB8POxL9vpHbl3QYGc1VaDBx02He"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let results = await res.json
  let str = ``
  for (key of Object.keys(results)) {
        if(results[key]!=="" && results[key]!==" ")
    str = str + `<div>${key}:${results[key]}</div>`
  }
  console.log(str)
  resultcont.innerHTML = str
})
