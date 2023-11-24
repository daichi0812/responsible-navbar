//動的に表現したいクラスを持ってくる
const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
//すべての'nav-link'の'li'を持ってくる（今回は4つ）
const navLinks = document.querySelectorAll(".nav-links li")

//ハンバーガーをクリックしたときに何が起こるか記述する
burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");  // 'toggle' クラス名をつけたり消したりする

    /*'forEach'一つ一つの要素を取り出す */
    /*'index'は配列の添え字 */
    navLinks.forEach((link, index) => {
        //'forwards'の初期化
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            //'link'にcssで作ったアニメーションを付与
            //'forwards'はアニメーションが終わったらその状態のままにするという意味
            //一つ一つの'li'に時差をつけるための&{}以下の内容
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`
        }
    })

    //ハンバーガーのアイコンを変化させる
    burger.classList.toggle("toggle")
});