function sendCommand(control, value) {
    fetch(`http://192.168.4.1/control?control=${control}&value=${value}`)
    .then(response => response.text())
    .then(data => console.log(`Command sent: ${control} -> ${value}`))
    .catch(error => console.error('Error:', error));
}
