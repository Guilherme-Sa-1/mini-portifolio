const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) { return; }

        selecionarTab(tab)
        showInfoTab(tab)
    });
})


function selecionarTab(tab) {
    const tabSelected = document.querySelector(".tab.select");
    tabSelected.classList.remove("select")

    tab.classList.add("select")
}

function showInfoTab(tab) {
    const informationSelected = document.querySelector(".information.select");
    informationSelected.classList.remove("select");

    const idDoElementoDeInformacoesDaAba = `info-${tab.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("select")
}