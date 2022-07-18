(() => {

    const macAddrInputElem = document.querySelector("#macAddr")

    let updateMacTable = (event = null) => {
        const macAddrInputElemValue = event ? event.target.value : macAddrInputElem.value
        let macAddrNoSpecialChar = macAddrInputElemValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        document.querySelector("#macLower").innerText = macAddrNoSpecialChar
        document.querySelector("#macUpper").innerText = macAddrNoSpecialChar.toUpperCase()
    }

    if (macAddrInputElem.value) {
        updateMacTable();
    }
   
    macAddrInputElem.addEventListener('input', (event) => {
        updateMacTable(event)
    })

})();