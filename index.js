var katzDeli = [];

function takeANumber(katzDeli,name) {
  var katzDeli = katzDeli.length
  for (let i=1; (i < katzDeli); i++) {
    katzDeli.push(`Welcome, ${name}. You are number ${i} in line.`)
  }
    return katzDeli
}
