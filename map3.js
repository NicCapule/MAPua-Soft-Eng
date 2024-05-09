document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas3 = document.getElementById("canvas3");
  var ctx3 = canvas3.getContext("2d");

  // Create an image object
  var backgroundImage3 = new Image();

  // Set the source of the image
  backgroundImage3.src = "images/pic3.png"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas
    backgroundImage3.onload = function () {
        // Set the canvas3 size to match the desired image size
        canvas3.width = 1073;
        canvas3.height = 595;

        // Draw the image on the canvas with the specified size
        ctx3.drawImage(backgroundImage3, 0, 0, 1073, 595);
    };
});

class Graph3 {
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
          const currentVertex3 = path[path.length - 1];

          if (visited.has(currentVertex3.id)) {
              continue;
          }

          visited.add(currentVertex3.id);

          const neighbors = currentVertex3.neighbors;

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




  
  function findShortestPath3() {

    if (document.getElementById('initialFloorBookmark').value != 3) //change according to floor number
  		startVertex = 'Elevator Lobby'
  	else startVertex = document.getElementById('initialLocationBookmark').value;


  	if (document.getElementById('desiredFloorBookmark').value != 3) //change according to floor number
  		endVertex = 'Elevator Lobby'
  	else endVertex = document.getElementById('desiredLocationBookmark').value;
    var backgroundimage3 = new Image();
    backgroundimage3.src = "images/pic3.png";

    //NODES COORDINATES
    const graph3 = new Graph3();
	
	
	
	
  graph3.addVertex('elevator', 449, 429) //elevator
  graph3.addVertex('f_exit1', 383, 377) //fire exit 1
  graph3.addVertex('stairs', 598, 455) //stairs
  graph3.addVertex('1', 449, 488) 
  graph3.addVertex('2', 449, 329)

  //north
  graph3.addVertex('technical_section', 98, 191) //Technical Section
  graph3.addVertex('f_exit2', 195, 211) //Fire Exit 2
  graph3.addVertex('301', 295, 223) //Rm301
  graph3.addVertex('302', 396, 239) //Rm302
  graph3.addVertex('303', 415, 243) //Rm303
  graph3.addVertex('304', 488, 257) //Rm304
  graph3.addVertex('305', 560, 268) //Rm305
  graph3.addVertex('306', 628, 280) //Rm306
  graph3.addVertex('307', 718, 293) //Rm307
  graph3.addVertex('308', 822, 311) //Rm308
  graph3.addVertex('cinema', 860, 338) //Cinema
  graph3.addVertex('f_exit3', 966, 360) //Fire Exit 3
  graph3.addVertex('shs_lib', 166, 219) //SHS Library
  graph3.addVertex('n_toilets', 550, 295) //North Toilets

  //south
  graph3.addVertex('college_library', 2844, 456) //College Library
  graph3.addVertex('s_toilets', 544, 458) //South Toilets
  graph3.addVertex('doit', 598, 458) //DOIT
  graph3.addVertex('f_exit4', 598, 463) //Fire Exit 4
  graph3.addVertex('310', 754, 455) //Rm310
  graph3.addVertex('311', 821, 457) //Rm311
  graph3.addVertex('312', 842, 457) //Rm312
  graph3.addVertex('313', 882, 457) //Rm313
  graph3.addVertex('314', 895, 457) //Rm314
  graph3.addVertex('315', 933, 456) //Rm315

  graph3.addVertex('f_exit5', 246, 476) //Fire Exit 5
  graph3.addVertex('316', 306, 480) //Rm316
  graph3.addVertex('317', 393, 476) //Rm317
  graph3.addVertex('318', 477, 478) //Rm318
  graph3.addVertex('319', 546, 478) //Rm319
  graph3.addVertex('320', 618, 479) //Rm320

  graph3.addVertex('f_exit6', 874, 480) //Fire Exit 6
  graph3.addVertex('321', 676, 480) //Rm321
  graph3.addVertex('322', 747, 480) //Rm322
  graph3.addVertex('323', 817, 479) //Rm323
  graph3.addVertex('324', 830, 481) //Rm324
  graph3.addVertex('325', 901, 480) //Rm325

// North Edges
  graph3.addEdge('elevator', '1'); //elevator to north
  graph3.addEdge('shs_lib', 'technical_section'); //SHS Library to Technical Section
  graph3.addEdge('shs_lib', '301');
  graph3.addEdge('technical_section','f_exit2' ); //Technical Section To Fire Exit 2
  graph3.addEdge('f_exit2','301'); //Fire Exit 2 to 301
  graph3.addEdge('301', '302'); // 301 to 302
  graph3.addEdge('302', '303'); // 302 to 303
  graph3.addEdge('303', '304'); // 303 to 304
  graph3.addEdge('304', '305'); // 304 to 305
  graph3.addEdge('305', '306'); // 305 to 306
  graph3.addEdge('306', '307'); // 306 to 307
  graph3.addEdge('307', '308'); // 307 to 308
  graph3.addEdge('308','cinema' ); // 308 to Cinema 
  graph3.addEdge('cinema','f_exit3');//cinema to Fire Exit 3

  graph3.addEdge('n_toilets','304');
  graph3.addEdge('n_toilets','305');
  graph3.addEdge('n_toilets','306');
  graph3.addEdge('n_toilets','307');
  graph3.addEdge('1', '303');
  graph3.addEdge('1', '304');
  graph3.addEdge('1', 'shs_lib'); //north to SHS Library
  graph3.addEdge('1', 'n_toilets'); //north to North Toilets
  graph3.addEdge('n_toilets','f_exit3'); //North Toilets to Fire Exit 3

  
  // South Edges
  graph3.addEdge('elevator', '2'); //elevator to South
  graph3.addEdge('2','s_toilets'); // South to South Toilets
  graph3.addEdge('s_toilets','f_exit4'); // South Toilets to Fire Exit 4
  graph3.addEdge('f_exit4','doit');// Fire Exit 4 to Doit
  graph3.addEdge('doit','310');// DOIT to 310
  graph3.addEdge('310', '311'); // 310 to 311
  graph3.addEdge('311', '312'); // 311 to 312
  graph3.addEdge('312', '313'); // 312 to 313
  graph3.addEdge('313', '314'); // 313 to 314
  graph3.addEdge('314', '315'); // 314 to 315
  graph3.addEdge('315','325' ); // 315 to 325


  graph3.addEdge('2','college_library' ); //South to College Library
  graph3.addEdge('college_library','f_exit5' ); //College Library to Fire Exit 5 
  graph3.addEdge('f_exit5', '316'); // Fire Exit 5 to 316
  graph3.addEdge('316', '317'); // 316 to 317
  graph3.addEdge('316', 'college_library');
  graph3.addEdge('317', 'college_library');
  graph3.addEdge('317', '2');
  graph3.addEdge('318', '2');
  graph3.addEdge('319', '2');
  graph3.addEdge('s_toilets','318');
  graph3.addEdge('s_toilets','319');
  graph3.addEdge('s_toilets','320');
  graph3.addEdge('s_toilets','321');
  graph3.addEdge('doit', '320');
  graph3.addEdge('doit', '321');
  graph3.addEdge('doit', '322');
  graph3.addEdge('310', '321');
  graph3.addEdge('310', '322');
  graph3.addEdge('310', '323');
  graph3.addEdge('324', '312');
  graph3.addEdge('324', '313');
  graph3.addEdge('324', '314');  
  graph3.addEdge('317', '318'); // 317 to 318
  graph3.addEdge('318', '319'); // 318 to 319
  graph3.addEdge('319', '320'); // 319 to 320
  graph3.addEdge('320', '321'); // 320 to 321
  graph3.addEdge('321', '322'); // 321 to 322
  graph3.addEdge('322', '323'); // 322 to 323
  graph3.addEdge('323', '324'); // 323 to 324
  graph3.addEdge('324', 'f_exit6'); // 324 to Fire Exit 6
  graph3.addEdge('f_exit6','325' ); // Fire Exit 6 to 325 
  graph3.addEdge('325','315' ); // 325 to 315
  const shortestPath3 = graph3.bfs(startVertex, endVertex);
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');

  // Clear the canvas
  //ctx3.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath3) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath3.join(' -> ')}`);

    // Draw the image on the canvas
    ctx3.drawImage(backgroundImage3, 0, 0, canvas3.width, canvas3.height);
    ctx3.drawImage(backgroundImage3, 0, 0, canvas3.width, canvas3.height);

    // Set the line color
    ctx3.strokeStyle = "red";
    ctx3.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath3.length - 1; i++) {
        const currentVertex3 = shortestPath3[i];
        const nextVertex3 = shortestPath3[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx3.beginPath();
        ctx3.moveTo(currentVertex3.x, currentVertex3.y);
        ctx3.lineTo(nextVertex3.x, nextVertex3.y);
        ctx3.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }

  
  
  