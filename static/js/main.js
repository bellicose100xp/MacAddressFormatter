(() => {

    const macAddrInputElem = document.querySelector("#macAddr")

    let updateMacTable = (event = null) => {
        const macAddrInputElemValue = event ? event.target.value : macAddrInputElem.value
        let mac = macAddrInputElemValue.replace(/[^a-fA-F0-9]/g, "").toLowerCase()

        let colonFormat = ""
        let dashFormat = ""
        let dotFormat = ""

        for (const i in mac) {
            colonFormat += mac[i]
            dashFormat += mac[i]
            dotFormat += mac[i]

            if (i != 0 && i != 11 && i % 2 != 0) {
                colonFormat += ":"
                dashFormat += "-"
            }

            if (i != 0 && i != 11 && i % 4 == 3) {
                dotFormat += "."
            }

        }

        document.querySelector("#macLower").innerText = mac
        document.querySelector("#macUpper").innerText = mac.toUpperCase()
        document.querySelector("#macColon").innerText = colonFormat
        document.querySelector("#macColonUpper").innerText = colonFormat.toUpperCase()
        document.querySelector("#macDash").innerText = dashFormat
        document.querySelector("#macDashUpper").innerText = dashFormat.toUpperCase()
        document.querySelector("#macDot").innerText = dotFormat
        document.querySelector("#macDotUpper").innerText = dotFormat.toUpperCase()

    }

    if (macAddrInputElem.value) {
        updateMacTable();
    }

    macAddrInputElem.addEventListener('input', (event) => {
        updateMacTable(event)
    })

})();