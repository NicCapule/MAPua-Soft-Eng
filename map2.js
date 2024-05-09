document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas2 = document.getElementById("canvas2");
  var ctx2 = canvas2.getContext("2d");

  // Create an image object
  var backgroundImage2 = new Image();

  // Set the source of the image
  backgroundImage2.src = "images/pic2.png"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas
    backgroundImage2.onload = function () {
        // Set the canvas size to match the desired image size
        canvas2.width = 1073;
        canvas2.height = 595;

        // Draw the image on the canvas with the specified size
        ctx2.drawImage(backgroundImage2, 0, 0, 1073, 595);
    };
});

class Graph2 {
  constructor() {
      this.vertices = new Map();
  }

  addVertex(id, x, y) {
      if (!this.vertices.has(id)) {
          this.vertices.set(id, { id, x, y, neighbors: [] });
      }
  }

  addEdge(vertex1Id, vertex2Id) {
      const vertex1 = this.vertices.get(vertex1Id);
      const vertex2 = this.vertices.get(vertex2Id);

      if (!vertex1 || !vertex2) {
          console.error("One or more vertices not found!");
          return;
      }

      vertex1.neighbors.push(vertex2);
      vertex2.neighbors.push(vertex1); // for undirected graph2
  }

  bfs(startVertexId, endVertexId) {
      const visited = new Set();
      const queue = [[this.vertices.get(startVertexId)]];

      while (queue.length > 0) {
          const path = queue.shift();
          const currentVertex2 = path[path.length - 1];

          if (visited.has(currentVertex2.id)) {
              continue;
          }

          visited.add(currentVertex2.id);

          const neighbors = currentVertex2.neighbors;

          for (const neighbor of neighbors) {
              const newPath = [...path, neighbor];

              if (neighbor.id === endVertexId) {
                  return newPath;
              } else {
                  queue.push(newPath);
              }
          }
      }

      return null; // If no path is found
  }
}




  
  function findShortestPath2() {

   if (document.getElementById('initialFloorBookmark').value != 2) //change according to floor number
  		startVertex = 'Elevator Lobby'
  	else startVertex = document.getElementById('initialLocationBookmark').value;


  	if (document.getElementById('desiredFloorBookmark').value != 2) //change according to floor number
  		endVertex = 'Elevator Lobby'
  	else endVertex = document.getElementById('desiredLocationBookmark').value;
    var backgroundimage2 = new Image();
    backgroundimage2.src = "images/pic2.png";

   //NODES COORDINATES
    const graph2 = new Graph2();
	
	
	
  graph2.addVertex('elevator', 449, 429) //elevator
  graph2.addVertex('f_exit', 383, 377) //fire exit
  graph2.addVertex('stairs', 598, 455) //stairs
  graph2.addVertex('1', 449, 488) 
  graph2.addVertex('2', 449, 329)

  //north
  graph2.addVertex('transformer', 102, 211) //Guidance Office
  graph2.addVertex('guidance', 132, 230) //Guidance Office
  graph2.addVertex('council', 622, 336) //Student Council
  graph2.addVertex('n_toilets', 237, 243) //North Toilets
  graph2.addVertex('shs_faculty', 304, 278) //SHS Faculty
  graph2.addVertex('f_exit2', 196, 232) //Fire Exit Top Left
  graph2.addVertex('f_exit3', 968, 380) //Fire Exit Top Right
  graph2.addVertex('201', 237, 243) //Rm201
  graph2.addVertex('202', 299, 249) //Rm202
  graph2.addVertex('203', 350, 260) //Rm203
  graph2.addVertex('204', 416, 267) //Rm204
  graph2.addVertex('205', 490, 284)//Rm205
  graph2.addVertex('206', 559, 298) //Rm206
  graph2.addVertex('207', 635, 311) //Rm207
  graph2.addVertex('208', 714, 320) //Rm208
  graph2.addVertex('209', 818, 336) //Rm209
  graph2.addVertex('210', 898, 351)//Rm210
  graph2.addVertex('211', 911, 355) //Rm211

//south
  graph2.addVertex('math_phys_department', 345, 480) // Math/Physics Faculty
  graph2.addVertex('soit_office', 345, 480) // Soit Office
  graph2.addVertex('s_toilets', 543, 481) //South Toilets
  graph2.addVertex('case_study', 639, 478) //Case Study
  graph2.addVertex('f_exit4', 597, 481) //Middle Fire Exit
  graph2.addVertex('f_exit5', 248, 498) //Bottom Left Fire Exit
  graph2.addVertex('f_exit6', 868, 498) //Bottom Right Fire Exit
  graph2.addVertex('n_servers', 900, 498) //network servers
  graph2.addVertex('212', 686, 480) //Rm212
  graph2.addVertex('213', 764, 478) //Rm213
  graph2.addVertex('214', 888, 480)//Rm214
  graph2.addVertex('215', 309, 500) //Rm215 / CSA
  graph2.addVertex('216', 394, 502) //Rm216
  graph2.addVertex('217', 476, 503) //Rm217
  graph2.addVertex('218', 547, 502)//Rm218
  graph2.addVertex('219', 615, 500) //Rm219 
  graph2.addVertex('220', 674, 500) //Rm220
  graph2.addVertex('221', 745, 504) //Rm221
  graph2.addVertex('222', 814, 504) //Rm222
  graph2.addVertex('223', 826, 503) //Rm223

  //north edges
  graph2.addEdge('elevator', '2'); //elevator to north

  graph2.addEdge('guidance','shs_faculty'); //Guidance to SHS Faculty
  graph2.addEdge('shs_faculty','2'); //Faculty to 1 North
  graph2.addEdge('2','n_toilets'); //1 to North Toilets
  graph2.addEdge('n_toilets','council'); //N toilets To Student Council
  graph2.addEdge('shs_faculty','201');//shs faculty to north toilets
  graph2.addEdge('n_toilets','206');
  graph2.addEdge('n_toilets','207');
  graph2.addEdge('council', '208');
  graph2.addEdge('council', '207');

  graph2.addEdge('transformer','f_exit2'); //Transformer to F_Exit2
  graph2.addEdge('transformer','guidance'); //Transformer Guidance
  graph2.addEdge('f_exit2','f_201'); //f_exit2 to 201
  graph2.addEdge('201', '202'); // 201 to 202
  graph2.addEdge('202', '203'); // 202 to 203
  graph2.addEdge('2', '204'); // 1 to 204
  graph2.addEdge('2', '206'); // 1 to 206
  graph2.addEdge('2', 'shs_faculty');
  graph2.addEdge('203', '204'); // 203 to 204
  graph2.addEdge('204', '205'); // 204 to 205
  graph2.addEdge('205', '206'); // 205 to 206
  graph2.addEdge('206', '207'); // 206 to 207
  graph2.addEdge('207', '208'); // 207 to 208
  graph2.addEdge('208', '209'); // 208 to 209
  graph2.addEdge('209', '210'); // 209 to 210
  graph2.addEdge('210', '211'); // 210 to 211
  graph2.addEdge('211', 'f_exit3'); // 211 to F_exit3
  graph2.addEdge('council', 'f_exit3'); // 210 to 211
  graph2.addEdge('f_exit3','211'); //fire exit 3 to 211


  //south edges
  graph2.addEdge('elevator', '1'); //elevator to south
  graph2.addEdge('1', 'math_phys_department'); //2 to Math/Physics Department
  graph2.addEdge('math_phys_department', 'soit_office'); //math_phys_department to soit
  graph2.addEdge('1', 'soit_office');
  graph2.addEdge('soit_office', 'f_exit5'); //soit to fire exit 5
  graph2.addEdge('f_exit5','215'); //fire exit 5 to 215
  graph2.addEdge('215', 'math_phys_department');
  graph2.addEdge('215', 'soit_office');
  graph2.addEdge('215', '216'); // 215 to 216
  graph2.addEdge('216', '217'); // 216 to 217
  graph2.addEdge('1', '217'); // 1 to 217
  graph2.addEdge('1', '218'); // 1 to 218
  graph2.addEdge('217', '218'); // 217 to 218
  graph2.addEdge('218', '219'); // 218 to 219
  graph2.addEdge('219', '220'); // 219 to 220
  graph2.addEdge('220', '221'); // 220 to 221
  graph2.addEdge('221', '222'); // 221 to 222
  graph2.addEdge('222', '223'); // 222 to 223
  graph2.addEdge('223', 'f_exit6'); // 223 to f_exit 6

  graph2.addEdge('1', 's_toilets');//1 to south toilets
  graph2.addEdge('218', 's_toilets');
  graph2.addEdge('219', 's_toilets');
  graph2.addEdge('s_toilets', 'case_study');// south toilets to case study
  graph2.addEdge('219', 'case_study');
  graph2.addEdge('220', 'case_study');
  graph2.addEdge('case_Study', '212');// case study to 212
  graph2.addEdge('212', '213'); // 212 to 213
  graph2.addEdge('212', '221');
  graph2.addEdge('212', '222');
  graph2.addEdge('212', '223');
  graph2.addEdge('213', '221');
  graph2.addEdge('213', '222');
  graph2.addEdge('213', '223');
  graph2.addEdge('213', '214'); // 213 to 214
  graph2.addEdge('214', 'f_exit6'); //214 to fire exit 6
  graph2.addEdge('f_exit6', 'n_servers'); //fire exit 6 to servers
  graph2.addEdge('n_servers','214');// servers to 214


  const shortestPath2 = graph2.bfs(startVertex, endVertex);
  var canvas2 = document.getElementById('canvas2');
  var ctx2 = canvas2.getContext('2d');

  // Clear the canvas2
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath2) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath2.join(' -> ')}`);

    // Draw the image on the canvas
    ctx2.drawImage(backgroundImage2, 0, 0, canvas2.width, canvas2.height);
    ctx2.drawImage(backgroundImage2, 0, 0, canvas2.width, canvas2.height);

    // Set the line color
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath2.length - 1; i++) {
        const currentVertex2 = shortestPath2[i];
        const nextVertex2 = shortestPath2[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx2.beginPath();
        ctx2.moveTo(currentVertex2.x, currentVertex2.y);
        ctx2.lineTo(nextVertex2.x, nextVertex2.y);
        ctx2.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }

  
  
  