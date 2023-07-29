let socket = io('http://127.0.0.1:3000/')

socket.on('connect', () => {
    let name = prompt('what is your name')

    socket.emit('name', name)

    socket.on('welcome', (message) => {
        window.alert(message)
    })
})