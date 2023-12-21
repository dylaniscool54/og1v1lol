alert("DISCORD SERVER: https://discord.gg/zUt4t5bw6g")

window.addEventListener("beforeunload", function(n) {
        n.preventDefault()
    }),
    window.addEventListener("keydown", function(n) {
        (n.ctrlKey || n.metaKey) && (n.preventDefault(),
        console.log("Ctrl key combinations are disabled in this web game."))
    })
