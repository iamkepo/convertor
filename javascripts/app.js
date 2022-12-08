function convert () {
  let result = select('.text-input').value.split('\n').map((item, i)=> (
    {
      name: nameDestructuring(item),
      number: parseInt(select('.number-input').value)+i,
    }
  ))
  write(result)
}
function nameDestructuring(param) {
  if(param.split('.').length > 1)  {
    return param.split('').map((item, i)=> ( (i > param.split('.')[0].length) ? item : '' )).join(',').replaceAll(',', '')
  } else {
    return param
  }
}
function write(list) {
  let html_code = "<div>pollingStations: [</div>";
  list.forEach(item => {
    html_code = html_code.concat(`
      <div class='m-2'>{</div>
      <div class='m-3'>name: "${item.name}",</div>
      <div class='m-3'>number: ${item.number},</div>
      <div class='m-2'>},</div>
    `)
  });
  
  html_code = html_code.concat("<div>]</div>");
  select('.text-output').innerHTML = html_code;
}
function select(param) {
  return document.querySelector(param)
}