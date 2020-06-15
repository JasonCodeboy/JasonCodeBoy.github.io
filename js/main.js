window.onload = function () {
    const dom = document.getElementsByClassName("active")
    console.log(dom)
}
// window.onload = function () {
//     const dom = document.getElementsByClassName("page")[0]
//     const nav = document.getElementsByClassName("nav-link")
//     Array.prototype.slice.call(nav).forEach(item => {
//         item.addEventListener("click", e => {
//             console.log("事件绑定")
//             domAppend()
//             return
//         })
//     })

//     function domAppend() {
//         if (dom) {
//             const div = document.createElement("div")
//             div.className = "right-group"

//             const item = document.createElement("div")
//             item.className = "item"

//             const title = document.createElement("span")
//             const img = document.createElement("img")
//             const img2 = document.createElement("img")
//             title.className = "title";
//             title.innerHTML = "作者联系方式"
//             img.style.width = "100%";
//             img.src = "/img/qq.jpg"
//             img2.style.width = "100%";
//             img2.src = "/img/wx.jpg"

//             item.appendChild(title)
//             item.appendChild(img)
//             item.appendChild(img2)
//             div.appendChild(item)
//             dom.appendChild(div)
//         }
//     }

//     domAppend()
// }
