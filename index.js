var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  for (let i=1; (i < (katzDeliLine.length+1); i++) {
    katzDeliLine.push(`Welcome, ${name}. You are number ${i} in line.`)
  }
    return katzDeliLine
}

