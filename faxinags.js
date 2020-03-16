/**
* Monta planilha de faxina Automaticamente
*
* @param {numFaxinasSemana} Numero de faxinas por semana.
* 
* @return Retorna uma matriz com as datas as tarefas e as pessas designadas para a tarefa.
* @customfunction
*/
function faxina(dias, primeira, tarefas, pessoas) {
  
  var x = faxine(dias, primeira, tarefas, pessoas); 
  return x
}


function orderTasks(tarefas, pessoas) {
  
  tarefas.sort(function(a, b) {
    if (a.dificuldade > b.dificuldade) {
      return 1;
    }
    if (a.dificuldade < b.dificuldade) {
      return -1;
    }
  })
  
  while (pessoas.length - tarefas.length !== 0) {
    if (pessoas.length - tarefas.length > 0) {
      addBreak(tarefas)
    } else {
      mergeTasks(tarefas)
    }
  };
  
  tarefas.sort(function(a, b) {
    if (a.dificuldade > b.dificuldade) {
      return 1;
    }
    if (a.dificuldade < b.dificuldade) {
      return -1;
    }
  })
  
  var sortedTasks = [];
  var a = tarefas.length
  for (var i = 0; i < a; i++) {
    if (i % 2 == 0) {
      sortedTasks.push(tarefas.pop())
    } else {
      sortedTasks.push(tarefas.shift())
    }
  }
  return sortedTasks;
};

function parseData(dias2, primeira2, tarefas2, pessoas2) {
  
  var parsedData = {
    "diasFaxina": [],
    "primeiraFaxina": "",
    "pessoas": [],
    "tarefas": []
  };
  
  
  for (var i = 0; i < dias2.length; i++) {
    parsedData.diasFaxina[i] = dias2[i];
  }
  
  parsedData.primeiraFaxina = primeira2;
  
  
  for (var i = 0; i < pessoas2.length; i++) {
    parsedData.pessoas[i] = pessoas2[i]
  }
  
  for (var i = 0; i < tarefas2.length; i++) {
    parsedData.tarefas[i] = {
      "lugar": tarefas2[0],
      "dificuldade": tarefas2[1]
    }  
  }
  return parsedData;
  
}

function makeSheet(tarefas, datas, pessoas) {
  var result = [];
  
  var header = ["Dias"];
  for (var i = 0; i < datas.length; i++) {
    header.push(datas[i])
  }
  result.push(header)
  
  for (var i = 0; i < tarefas.length; i++) {
    var line = [tarefas[i].lugar];
    for (var j = 0; j < pessoas.length; j++) {
      line.push(pessoas[(j + i) % pessoas.length])
    }
    result.push(line)
  }
  return result
}

function calculateDays(primeiraFaxina, diasFaxina, tarefas) {
  
  var d = new Date(primeiraFaxina)
  d.setDate(d.getDate() - d.getDay())
  
  var days = []; 
  
  for (var i = 0; i < tarefas.length; i++) {
    
    var aux = new Date(d);
    
    if (diasFaxina.length == 1) {
      aux.setDate(aux.getDate()+dateToNumber(diasFaxina[0])+(i * 7));
      aux = "Got Here"
    }
    else if (diasFaxina.length == 2) {
      switch (i % 2) {
        case 0:
          aux.setDate(aux.getDate() + dateToNumber(diasFaxina[0]) + (Math.floor((i / 2)) * 7));
          break;
        case 1:
          aux.setDate(aux.getDate() + dateToNumber(diasFaxina[1]) + (Math.floor((i / 2)) * 7));
          break;
      }
    }
    else if (diasFaxina.length == 3) {
      switch (i % 3) {
        case 0:
          aux.setDate(aux.getDate() + dateToNumber(diasFaxina[0]) + (Math.floor((i / 3)) * 7));
          break;
        case 1:
          aux.setDate(aux.getDate() + dateToNumber(diasFaxina[1]) + (Math.floor((i / 3)) * 7));
          break;
        case 2:
          aux.setDate(aux.getDate() + dateToNumber(diasFaxina[2]) + (Math.floor((i / 3)) * 7));
          break;
      }
    }
    days[i] = aux
  }
  //for (var i = 0; i < days.length; i++) {
  //var formatted_date = days[i].getDate() + "-" + (days[i].getMonth() + 1) + "-" + days[i].getFullYear()
  //days[i] = formatted_date
  //}
  
  return days
}

function addBreak(tarefas) {
  var aux = tarefas.length;
  for (var j = 0; j < aux; j++) {
    tarefas[j].dificuldade += 1;
  }
  tarefas.push({
    "lugar": "Folga",
    "dificuldade": 1
  })
}

function mergeTasks(tarefas) {
  var values = [];
  
  for (var i = 0; i < 2; i++) {
    var min;
    for (var j = 0; j < tarefas.length; j++) {
      if (j == 0) {
        min = tarefas[j].dificuldade;
      } else if (tarefas[j].dificuldade < min) {
        min = tarefas[j].dificuldade;
      }
    };
    values.push(
      tarefas.splice(
        tarefas.findIndex(
          function(a) {
            a.dificuldade == min;
          }, 1
        )
      )
    );
  };
  
  var newTask = {
        "lugar": values[0][0].lugar + " & " + values[1][0].lugar,
    "dificuldade": values[0][0].dificuldade + values[1][0].dificuldade
  }
  tarefas.push(newTask)
}

function dateToNumber(dia) {
  switch (dia) {
        case "Domingo":
    case "domingo":
      return 0;
    case "Segunda":
    case "segunda":
      return 1;
    case "Terça":
    case "Terca":
    case "terça":
    case "terca":
      return 2;
    case "Quarta":
    case "quarta":
      return 3;
    case "Quinta":
    case "quinta":
      return 4;
    case "Sexta":
    case "sexta":
      return 5;
    case "Sabado":
    case "Sábado":
    case "sabado":
    case "sábado":
      return 6;
  }
}

function faxine(dias1, primeira1, tarefas1, pessoas1) {
  var data = parseData(dias1, primeira1, tarefas1, pessoas1)
  var orderedTasks = orderTasks(data.tarefas, data.pessoas)
  var days = calculateDays(data.primeiraFaxina, data.diasFaxina, orderedTasks);
  var sheet = makeSheet(orderedTasks, days, data.pessoas)
  return orderedTasks
}