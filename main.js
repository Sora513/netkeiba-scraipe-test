let http=require("https")
const url="https://race.netkeiba.com/race/result.html?race_id=202302020406"
var raceId=""

http.get(url+raceId, (res) => {
  let data = ""
  res.setEncoding("utf8")

  res.on("data", (chunk) => {
      data += chunk
  })

  res.on("end", () => {
      console.log(data)
  })
}).on("error", (e) => {
  console.log(e.message)
})