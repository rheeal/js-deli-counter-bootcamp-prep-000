function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    var l;
    for(var x = 0;x<line.length;x++) {
      if(x === 0) {
        l =  `${line[x]}`;
      } else {
        l = `${l}, ${(x+1)}. ${line[x]}`;
      }
    }
  }
  return `The line is currently: 1. ${l}`;
}