/***

Thanks to & modified from https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js

For Quantumult-X 598+

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/ytb-ui-check.js, tag=YouTube æ„èŻą, img-url=text.magnifyingglass.system, enabled=true

@XIAO_KOP

**/


const BASE_URL = 'https://www.youtube.com/premium'

const FILM_ID = 81215567
const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 

const arrow = "â"
var output = ""
var opts = {
  policy: $environment.params
};


var flags = new Map([[ "AC" , "đŠđš" ] ,["AE","đŠđȘ"], [ "AF" , "đŠđ«" ] , [ "AI" , "đŠđź" ] , [ "AL" , "đŠđ±" ] , [ "AM" , "đŠđČ" ] , [ "AQ" , "đŠđ¶" ] , [ "AR" , "đŠđ·" ] , [ "AS" , "đŠđž" ] , [ "AT" , "đŠđč" ] , [ "AU" , "đŠđș" ] , [ "AW" , "đŠđŒ" ] , [ "AX" , "đŠđœ" ] , [ "AZ" , "đŠđż" ] , ["BA", "đ§đŠ"], [ "BB" , "đ§đ§" ] , [ "BD" , "đ§đ©" ] , [ "BE" , "đ§đȘ" ] , [ "BF" , "đ§đ«" ] , [ "BG" , "đ§đŹ" ] , [ "BH" , "đ§đ­" ] , [ "BI" , "đ§đź" ] , [ "BJ" , "đ§đŻ" ] , [ "BM" , "đ§đČ" ] , [ "BN" , "đ§đł" ] , [ "BO" , "đ§đŽ" ] , [ "BR" , "đ§đ·" ] , [ "BS" , "đ§đž" ] , [ "BT" , "đ§đč" ] , [ "BV" , "đ§đ»" ] , [ "BW" , "đ§đŒ" ] , [ "BY" , "đ§đŸ" ] , [ "BZ" , "đ§đż" ] , [ "CA" , "đšđŠ" ] , [ "CF" , "đšđ«" ] , [ "CH" , "đšđ­" ] , [ "CK" , "đšđ°" ] , [ "CL" , "đšđ±" ] , [ "CM" , "đšđČ" ] , [ "CN" , "đšđł" ] , [ "CO" , "đšđŽ" ] , [ "CP" , "đšđ”" ] , [ "CR" , "đšđ·" ] , [ "CU" , "đšđș" ] , [ "CV" , "đšđ»" ] , [ "CW" , "đšđŒ" ] , [ "CX" , "đšđœ" ] , [ "CY" , "đšđŸ" ] , [ "CZ" , "đšđż" ] , [ "DE" , "đ©đȘ" ] , [ "DG" , "đ©đŹ" ] , [ "DJ" , "đ©đŻ" ] , [ "DK" , "đ©đ°" ] , [ "DM" , "đ©đČ" ] , [ "DO" , "đ©đŽ" ] , [ "DZ" , "đ©đż" ] , [ "EA" , "đȘđŠ" ] , [ "EC" , "đȘđš" ] , [ "EE" , "đȘđȘ" ] , [ "EG" , "đȘđŹ" ] , [ "EH" , "đȘđ­" ] , [ "ER" , "đȘđ·" ] , [ "ES" , "đȘđž" ] , [ "ET" , "đȘđč" ] , [ "EU" , "đȘđș" ] , [ "FI" , "đ«đź" ] , [ "FJ" , "đ«đŻ" ] , [ "FK" , "đ«đ°" ] , [ "FM" , "đ«đČ" ] , [ "FO" , "đ«đŽ" ] , [ "FR" , "đ«đ·" ] , [ "GA" , "đŹđŠ" ] , [ "GB" , "đŹđ§" ] , [ "HK" , "đ­đ°" ] ,["HU","đ­đș"], [ "ID" , "đźđ©" ] , [ "IE" , "đźđȘ" ] , [ "IL" , "đźđ±" ] , [ "IM" , "đźđČ" ] , [ "IN" , "đźđł" ] , [ "IS" , "đźđž" ] , [ "IT" , "đźđč" ] , [ "JP" , "đŻđ”" ] , [ "KR" , "đ°đ·" ] , [ "LU" , "đ±đș" ] , [ "MO" , "đČđŽ" ] , [ "MX" , "đČđœ" ] , [ "MY" , "đČđŸ" ] , [ "NL" , "đłđ±" ] , [ "PH" , "đ”đ­" ] , [ "RO" , "đ·đŽ" ] , [ "RS" , "đ·đž" ] , [ "RU" , "đ·đș" ] , [ "RW" , "đ·đŒ" ] , [ "SA" , "đžđŠ" ] , [ "SB" , "đžđ§" ] , [ "SC" , "đžđš" ] , [ "SD" , "đžđ©" ] , [ "SE" , "đžđȘ" ] , [ "SG" , "đžđŹ" ] , [ "TH" , "đčđ­" ] , [ "TN" , "đčđł" ] , [ "TO" , "đčđŽ" ] , [ "TR" , "đčđ·" ] , [ "TV" , "đčđ»" ] , [ "TW" , "đšđł" ] , [ "UK" , "đŹđ§" ] , [ "UM" , "đșđČ" ] , [ "US" , "đșđž" ] , [ "UY" , "đșđŸ" ] , [ "UZ" , "đșđż" ] , [ "VA" , "đ»đŠ" ] , [ "VE" , "đ»đȘ" ] , [ "VG" , "đ»đŹ" ] , [ "VI" , "đ»đź" ] , [ "VN" , "đ»đł" ] , [ "ZA" , "đżđŠ"]])


!(async () => {
  let result = {
    title: 'đș YouTube Premium æŁæ”',
    content: '----------------------\n\næŁæ”ć€±èŽ„ïŒèŻ·éèŻ',
  }
  await Promise.race([test(FILM_ID),timeOut(5000)])
  .then((code) => {
    console.log(code)
    
    if (code === 'Not Available') {
      result['content'] = '----------------------\n\nđ æȘæŻæ YouTube Premium'
      //return
    } else if (code === "timeout") {
      result['content'] = "----------------------\n\nđŠ æ”èŻè¶æ¶"
    } else {
      result['content'] = '----------------------\n\nâ æŻæ YouTube Premium â âŠ'+flags.get(code.toUpperCase())+code.toUpperCase()+"â§"
    }
    //$notify(result["title"], output, result["content"], link)
    
    //console.log(result)
    $done({"title":result["title"],"message":result["content"]+'\n\n----------------------\n'+$environment.params})
  })
})()
.finally(() => $done());

function timeOut(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //reject(new Error('timeout'))
      resolve("timeout")
    }, delay)
  })
}


function test() {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL,
      opts: opts,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
        'Accept-Language': 'en',
      },
    }
    $task.fetch(option).then(response=> {
      let data = response.body
      console.log(response.statusCode)
      if (response.statusCode !== 200) {
        reject('Error')
        return
      }
      
      if (data.indexOf('Premium is not available in your country') !== -1) {
        resolve('Not Available')
        return
      }
      console.log(data)
      let region = ''
      let re = new RegExp('"GL":"(.*?)"', 'gm')
      let result = re.exec(data)
      if (result != null && result.length === 2) {
        region = result[1]
      } else if (data.indexOf('www.google.cn') !== -1) {
        region = 'CN'
      } else {
        region = 'US'
      }
      resolve(region)
    })
  })
}
