var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  else {
    return `Currently serving ${name[0]}.`
    delete katzDeliLine[0] 
  }

  }
}
