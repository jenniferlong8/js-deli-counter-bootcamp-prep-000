var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  for (let i=1; (i < katzDeliLine.length); i++) {
    katzDeli.push(`Welcome, ${name}. You are number ${i} in line.`)
  }
    return katzDeli.length
}
