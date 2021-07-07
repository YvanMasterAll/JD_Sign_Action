const rp = require('request-promise')
const exec = require('child_process').execSync
const fs = require('fs')
const result_path = './result.txt'
Date.prototype.Format = function (fmt) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'H+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'S+': this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
      }
    }
    return fmt;
  };

let desp = fs.readFileSync(result_path, "utf8")
desp = desp.split('\n')
var mes = ["京东签到_" + new Date().Format('yyyy.MM.dd')]
var token = ['京东商城-京豆', '签到概览', '账号总计', '签到用时']
desp.forEach(d => {
    token.forEach(t => {
        if (d.indexOf(t) != -1) {
            mes.push(d)
        }
    })
})
mes = mes.join('\n')

console.log(`http://yvan-wechat.herokuapp.com/admin/` + encodeURI(mes))
  const options ={
    uri:  `http://yvan-wechat.herokuapp.com/admin/` + encodeURI(mes),
  }

  rp.get(options)


// version v0.0.1
// create by zhihua
// detail url: https://github.com/ruicky/jd_sign_bot

// const exec = require('child_process').execSync
// const fs = require('fs')
// const rp = require('request-promise')
// const download = require('download')

// // 京东cookie
// // const cookie = process.env.JD_COOKIE
// const cookie = '__jdu=1617588890311318910019; shshshfpa=b41d330d-78cf-d121-1e01-a344769e0660-1617588896; shshshfpb=zfwqHGLCGl1mSSoSFmdtXyw%3D%3D; _pst=1136838669_m; unick=wingsome; pin=1136838669_m; _tp=AZwtkgT8oAH897R3vXam8w%3D%3D; jcap_dvzw_fp=1xvnjUMv2-lUDkkIwBRIBaIa_DryMstgZtvX3yH0mMSjwxMsMVHfMDT7pDYfn_FB5WkbsQ==; whwswswws=; TrackID=1Q8HyVY87tRxf1FBKIJTgVouV6Tf8jDguvrX7Cv8OM8uL8q3zQz2SXMFy-3SswUJJjHyI7478mlRNkg70YGMM50wXy7TP_oztCFbhEdcwBBrX10uVbGY3Y2w0B5G_8Wfk; cn=3; unpl=V2_ZzNtbUZXFB1xX0QDK0kJBWJWFVpKVkRCcloTA3kaVVFjBkBcclRCFnUUR1NnGl8UZwcZXUJcQRVFCEdkexhdBGUHFF1EVXMlRQtGZHopXAJnBRZUS15LFHcIRlZ7EFQFZgISVXJnQx1xOEZVehhdDWMBFVtFVXNMJVUAEEsZXAJlBBNbQV5FJXQ4R2Qtd1wEZgITXENXQBM4CEFUfR1VDG4LE19CV0EVfABGVXoZVDVmMxE%3d; __jdv=122270672|kong|t_1000357173_|tuiguang|51f95f3faad14d66906f6cdf328e54c0|1624345896039; shshshfp=94cfcc769a6b47482ecf31ba27583591; __jda=122270672.1617588890311318910019.1617588890.1624349441.1625636596.53; __jdc=122270672; mba_muid=1617588890311318910019; shshshsID=4102c67d38b35b1620b44366a791e3dd_1_1625636597563; 3AB9D23F7A4B3C9B=25FKD3XHHJH5JEA5WDQ6XLXPWWBGNBUQAXLOOMJPQZZITNVPT6CEIYMMCNHL3A6VXM6RZQOVFFLWMBBN6X45QF4QYI; TrackerID=93_qvXjQ6VY6L1B4vDEM0nin8xBfA5WL7f9wXAyGNOfiXEyfc6A-s9zdwFHOL-cL4UQc5JSR51835xTDIYQxzxHS36AWNXhlbDTtGmNYZBpy_eXE8RsHgpQ-tpvePhIx; pt_key=AAJg5T8QADBC69DjjVw_eNd_KBNAjb9oXirHlCJTFrpRxHhhbH0nPuJORpgF5PFkHMDKiduUP44; pt_pin=1136838669_m; pt_token=dgop8ckk; pwdt_id=1136838669_m; sfstoken=tk01me6491d45a8sMysySGZ6bzM4oqroXAlvLn0DkI8gAChcbkAtgAkTAQq0lYFPn7SYrvJgbgOoRtA6apVaFppc/y71; mobilev=html5; __jdb=122270672.2.1617588890311318910019|53.1625636596; mba_sid=16256365969355792620543831644.2; __jd_ref_cls=JDReact_StartReactModule'
// // Server酱SCKEY
// const push_key = process.env.PUSH_KEY

// // 京东脚本文件
// const js_url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js'
// // 下载脚本路劲
// const js_path = './JD_DailyBonus.js'
// // 脚本执行输出路劲
// const result_path = './result.txt'
// // 错误信息输出路劲
// const error_path = './error.txt'

// Date.prototype.Format = function (fmt) {
//   var o = {
//     'M+': this.getMonth() + 1,
//     'd+': this.getDate(),
//     'H+': this.getHours(),
//     'm+': this.getMinutes(),
//     's+': this.getSeconds(),
//     'S+': this.getMilliseconds()
//   };
//   if (/(y+)/.test(fmt)) {
//     fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
//   }
//   for (var k in o) {
//     if (new RegExp('(' + k + ')').test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
//     }
//   }
//   return fmt;
// };

// function setupCookie() {
//   var js_content = fs.readFileSync(js_path, 'utf8')
//   js_content = js_content.replace(/var Key = ''/, `var Key = '${cookie}'`)
//   fs.writeFileSync(js_path, js_content, 'utf8')
// }

// function sendNotificationIfNeed() {

//   if (!fs.existsSync(result_path)) {
//     console.log('没有执行结果，任务中断!'); return;
//   }

//   let text = "京东签到_" + new Date().Format('yyyy.MM.dd');
//   let desp = fs.readFileSync(result_path, "utf8")

//   console.log(text)
//   console.log(2222)
//   console.log(desp)
//   console.log(1111)
// }

// function main() {

//   if (!cookie) {
//     console.log('请配置京东cookie!'); return;
//   }

//   // 2、替换cookie
//   setupCookie()
//   // 3、执行脚本
//   exec(`node '${js_path}' >> '${result_path}'`);
//   // 4、发送推送
//   sendNotificationIfNeed() 
// }

// main()