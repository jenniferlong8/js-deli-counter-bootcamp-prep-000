var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.length + 1 
  for (let i=1; i < katzDeliLine.length; i++) {
    katzDeliLine.push(`Welcome, ${name}. You are number ${i} in line.`)
  }
    return katzDeliLine
}
