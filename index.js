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

var line = [];
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  if (katzDeliLine.length > 0) {
