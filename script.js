var apiData = {
    "agentCode":"",
    "dob":"",
    "email":"",
    "first_name":"",
    "gender":"",
    "is_nri":"",
    "is_smoker":"",
    "last_name":"",
    "ndnc_flag":"true",
    "occupation_type":"",
    "phone":"",
    "product_code":"EHU",
    "request_data":{
       "leadGenerationData":{
          "checkboxdisclaimer":"1",
          "checkboxdisclaimer_whatsapp":"true"
       },
       "proposer":{
          "first_name":"",
          "last_name":"",
          "gender":"",
          "dob":"",
          "phone":""
       },
       "proposer_buying_for_itself":"Y",
       "send_lead_to_tebt":"false"
    },
    "sourceCode":""
 };

function apiCall(apiData) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        // console.log(this.readyState);
        if(this.readyState == 4 && this.status == 200) {
            //console.log(JSON.parse(this.responseText));
            try {
                jsBridge.getDataInNative(this.responseText);
            } catch {
                //Error handled
            }
        }
    }
    xhr.open("POST", "https://beta-api.hdfclife.tech/2.0/api/application/generate-lead/",true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(apiData));
}


    document.getElementById("pocsubmitbutton").addEventListener("click", function(e) {
        var firstName = document.getElementById("pocFirstName").value;
        var lastName = document.getElementById("pocLastName").value;
        var emailAddress = document.getElementById("pocEmail").value;
        var phone = document.getElementById("pocNumber").value;
        var birthday = document.getElementById("pocDob").value;
        var gender = $('input[name="pocgender"]:checked').val();
        var nri = $('input[name="pocnri"]:checked').val();
        var tobacco = $('input[name="tobacco"]:checked').val();
        var occDropdown = $("#pococc").val();
        apiData.first_name = firstName;
        apiData.last_name = lastName;
        apiData.email = emailAddress;
        apiData.phone = phone;
        apiData.dob = birthday;
        apiData.gender = gender;
        apiData.is_nri = nri;
        apiData.is_smoker = tobacco;
        apiData.occupation_type = occDropdown;
        // jsBridge.getDataInNative("This thing works!!!");
        apiCall(apiData);
    });

// var nv = nv || function() {
//     (window.nv.q = window.nv.q || []).push(arguments)
// };
// nv.l = new Date;
// var notify_visitors = notify_visitors || function() {
//     var e = {
//         initialize: !1,
//         ab_overlay: !1,
//         auth: {
//             bid_e: "8F388198ABECB12E53DF24D5117BDC4B",
//             bid: "5723",
//             t: "420"
//         }
//     };
//     return e.data = {
//         bid_e: e.auth.bid_e,
//         bid: e.auth.bid,
//         t: e.auth.t,
//         iFrame: window !== window.parent,
//         trafficSource: document.referrer,
//         link_referrer: document.referrer,
//         pageUrl: document.location,
//         path: location.pathname,
//         domain: location.origin,
//         gmOffset: 60 * (new Date).getTimezoneOffset() * -1,
//         screenWidth: screen.width,
//         screenHeight: screen.height,
//         isPwa: window.matchMedia && window.matchMedia("(display-mode: standalone)").matches ? 1 : 0,
//         cookieData: document.cookie
//     }, e.options = function(t) {
//         t && "object" == typeof t ? e.ab_overlay = t.ab_overlay : console.log("Not a valid option")
//     }, e.tokens = function(t) {
//         e.data.tokens = t && "object" == typeof t ? JSON.stringify(t) : ""
//     }, e.ruleData = function(t) {
//         e.data.ruleData = t && "object" == typeof t ? JSON.stringify(t) : ""
//     }, e.getParams = function(e) {
//         url = window.location.href.toLowerCase(), e = e.replace(/[\[\]]/g, "\\$&").toLowerCase();
//         var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(url);
//         return t && t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : ""
//     }, e.init = function() {
//         if (e.auth && !e.initialize && (e.data.storage = e.browserStorage(), e.js_callback = "nv_json1", !e.data.iFrame && "noapi" !== e.getParams("nvcheck"))) {
//             var t = "?";
//             if (e.ab_overlay) {
//                 var o = document.createElement("style"),
//                     n = "body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}",
//                     a = document.getElementsByTagName("head")[0];
//                 o.setAttribute("id", "_nv_hm_hidden_element"), o.setAttribute("type", "text/css"), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), a.appendChild(o), setTimeout(function() {
//                     var e = this.document.getElementById("_nv_hm_hidden_element");
//                     if (e) try {
//                         e.parentNode.removeChild(e)
//                     } catch (t) {
//                         e.remove()
//                     }
//                 }, 2e3)
//             }
//             for (var i in e.data) e.data.hasOwnProperty(i) && (t += encodeURIComponent(i) + "=" + encodeURIComponent(e.data[i]) + "&");
//             e.load("https://www.notifyvisitors.com/ext/v1/settings" + t), e.initialize = !0
//         }
//     }, e.browserStorage = function() {
//         var t = {
//             session: e.storage("sessionStorage"),
//             local: e.storage("localStorage")
//         };
//         return JSON.stringify(t)
//     }, e.storage = function(e) {
//         var t = {};
//         return window[e] && window[e].length > 0 && Object.keys(window[e]).forEach(function(o) {
//             -1 !== o.indexOf("_nv_") && (t[o] = window[e][o])
//         }), t
//     }, e.load = function(e) {
//         var t = document,
//             o = t.createElement("script");
//         o.src = e, o.type = "text/javascript", t.body ? t.body.appendChild(o) : t.head.appendChild(o)
//     }, e
// }();
// notify_visitors.options({
//     ab_overlay: false
// });
// notify_visitors.init();