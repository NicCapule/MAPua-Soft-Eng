document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas4 = document.getElementById("canvas4");
  var ctx4 = canvas4.getContext("2d");

  // Create an image object
  var backgroundImage4 = new Image();

  // Set the source of the image
  backgroundImage4.src = "images/pic4.png"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas
    backgroundImage4.onload = function () {
        // Set the canvas4 size to match the desired image size
        canvas4.width = 1073;
        canvas4.height = 595;

        // Draw the image on the canvas with the specified size
        ctx4.drawImage(backgroundImage4, 0, 0, 1073, 595);
    };
});

class Graph4 {
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
      vertex2.neighbors.push(vertex1); // for undirected graph
  }

  bfs(startVertexId, endVertexId) {
      const visited = new Set();
      const queue = [[this.vertices.get(startVertexId)]];

      while (queue.length > 0) {
          const path = queue.shift();
          const currentVertex4 = path[path.length - 1];

          if (visited.has(currentVertex4.id)) {
              continue;
          }

          visited.add(currentVertex4.id);

          const neighbors = currentVertex4.neighbors;

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




  
  function findShortestPath4() {

	if (document.getElementById('initialFloorBookmark').value != 4) //change according to floor number
		startVertex = 'Elevator Lobby'
	else startVertex = document.getElementById('initialLocationBookmark').value;


	if (document.getElementById('desiredFloorBookmark').value != 4) //change according to floor number
		endVertex = 'Elevator Lobby'
	else endVertex = document.getElementById('desiredLocationBookmark').value;




    var backgroundImage4 = new Image();
    backgroundImage4.src = "images/pic4.png";

    //NODES COORDINATES
    const graph4 = new Graph4();
	
	
  graph4.addVertex('elevator', 449, 429) //elevator
  graph4.addVertex('f_exit1', 353, 322) //fire exit 1
  graph4.addVertex('stairs', 598, 455) //stairs
  graph4.addVertex('1', 426, 318) //Roof
  graph4.addVertex('2', 424, 438)// South Rooms

  graph4.addVertex('f_exit2', 1000, 340) //fire exit 2
  graph4.addVertex('f_exit3', 575, 437) //fire exit 3
  graph4.addVertex('f_exit4', 211, 458) //fire exit 4
  graph4.addVertex('f_exit5', 839, 447) //fire exit 5

  graph4.addVertex('hardware_lab', 270, 433)// Hardware Lab
  graph4.addVertex('n_toilets', 309, 339) //North Toilets
  graph4.addVertex('s_toilets', 529, 435) //South Toilets
  graph4.addVertex('401', 271, 431) //Rm401
  graph4.addVertex('402', 674, 433) //Rm402
  graph4.addVertex('403', 728, 428) //Rm403
  graph4.addVertex('404', 785, 431) //Rm404
  graph4.addVertex('405', 285, 451) //Rm405
  graph4.addVertex('406', 358, 451) //Rm406
  graph4.addVertex('407', 459, 454) //Rm407
  graph4.addVertex('408', 525, 454) //Rm408
  graph4.addVertex('409', 591, 453) //Rm409
  graph4.addVertex('410', 670, 452) //Rm410
  graph4.addVertex('411', 756, 451) //Rm411
  graph4.addVertex('ccesc', 804, 426) //CCESC
  graph4.addVertex('pe_dept', 831, 428) //PE Department
  graph4.addVertex('ilmo', 788, 452) //ILMO
 
//North Edges
graph4.addEdge('elevator', '1'); //Elevator to North
graph4.addEdge('1','f_exit1'); // North To Fire Exit 1
graph4.addEdge('f_exit1','n_toilets'); // Fire Exit 1 to North Toilets
graph4.addEdge('1','f_exit2'); // North to Fire Exit 2

// South Edges

graph4.addEdge('elevator', '2'); //Elevator to South
graph4.addEdge('2', 'hardware_lab'); //South to Hardware Lab
graph4.addEdge('hardware_lab', 'f_exit4');// Hardware Lab to Fire Exit 4

graph4.addEdge('2', 's_toilets'); // South to South Toilets
graph4.addEdge('s_toilets','402' ); //South Toilets to 402 
graph4.addEdge('402', '403'); // 402 to 403
graph4.addEdge('403', '404'); // 403 to 404
graph4.addEdge('404','ccesc' ); //404 to CCESC
graph4.addEdge('ccesc','pe_dept' ); //CCESC to PE Department 
graph4.addEdge('pe_dept','f_exit5' ); //PE Dept to Fire Exit 5
graph4.addEdge('s_toilets','407');
graph4.addEdge('s_toilets','408' );
graph4.addEdge('s_toilets','409' );
graph4.addEdge('s_toilets','410' );
graph4.addEdge('402','410');
graph4.addEdge('402','409');
graph4.addEdge('402','411');
graph4.addEdge('403','411');
graph4.addEdge('403','ilmo');
graph4.addEdge('403','410');

graph4.addEdge('ccesc','ilm0' );  
graph4.addEdge('pe_dept','ilmo' );

graph4.addEdge('407', 'hardware_lab');
graph4.addEdge('406', 'hardware_lab');
graph4.addEdge('405', 'hardware_lab');
graph4.addEdge('f_exit4','405' ); //Fire Exit 4 to 405
graph4.addEdge('405', '406'); // 405 to 406
graph4.addEdge('406', '407'); // 406 to 407
graph4.addEdge('407', '408'); // 407 to 408
graph4.addEdge('408', '409'); // 408 to 409
graph4.addEdge('409', '410'); // 409 to 410
graph4.addEdge('410', '411'); // 410 to 411
graph4.addEdge('411','ilmo'); //411 to ILMO
graph4.addEdge('ilmo','f_exit5'); //ILMO for Fire Exit 5
graph4.addEdge('f_exit5','pe_dept'); //Fire Exit 5 to PE Dept

  const shortestPath4 = graph4.bfs(startVertex, endVertex);
  var canvas4 = document.getElementById('canvas4');
  var ctx4 = canvas4.getContext('2d');

  // Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath4) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath4.join(' -> ')}`);

    // Draw the image on the canvas
    ctx4.drawImage(backgroundImage4, 0, 0, canvas4.width, canvas4.height);
    ctx4.drawImage(backgroundImage4, 0, 0, canvas4.width, canvas4.height);

    // Set the line color
    ctx4.strokeStyle = "red";
    ctx4.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath4.length - 1; i++) {
        const currentVertex4 = shortestPath4[i];
        const nextVertex4 = shortestPath4[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx4.beginPath();
        ctx4.moveTo(currentVertex4.x, currentVertex4.y);
        ctx4.lineTo(nextVertex4.x, nextVertex4.y);
        ctx4.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }

  
  
  