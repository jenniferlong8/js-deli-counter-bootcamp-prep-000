var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (let i=0; i<katzDeliLine.length+1; i++) {
    return `The line is currently: 1. ${katzDeliLine[i], 2. ${katzDeliLine[i++]}}`
  }
  }
}
