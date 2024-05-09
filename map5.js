document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas5 = document.getElementById("canvas5");
  var ctx5 = canvas.getContext("2d");

  // Create an image object
  var backgroundImage5 = new Image();


  // Set the source of the image
  backgroundImage5.src = "images/pic5.png"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas
    backgroundImage5.onload = function () {
        // Set the canvas size to match the desired image size
        canvas5.width = 1073;
        canvas5.height = 595;

        // Draw the image on the canvas with the specified size
        ctx5.drawImage(backgroundImage5, 0, 0, 1073, 595);
    };
});

class Graph5 {
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
      vertex2.neighbors.push(vertex1); // for undirected graph5
  }

  bfs(startVertexId, endVertexId) {
      const visited = new Set();
      const queue = [[this.vertices.get(startVertexId)]];

      while (queue.length > 0) {
          const path = queue.shift();
          const currentVertex = path[path.length - 1]; //reduces the path.length by one for every node passed

          if (visited.has(currentVertex.id)) {
              continue;
          }

          visited.add(currentVertex.id);

          const neighbors = currentVertex.neighbors;

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




  function findShortestPath5() {
	if (document.getElementById('initialFloorBookmark').value != 5) //change according to floor number
		startVertex = 'Elevator Lobby'
	else startVertex = document.getElementById('initialLocationBookmark').value;


	if (document.getElementById('desiredFloorBookmark').value != 5) //change according to floor number
		endVertex = 'Elevator Lobby'
	else endVertex = document.getElementById('desiredLocationBookmark').value;




    var backgroundImage5 = new Image();
    backgroundImage5.src = "images/pic5.png";

    //NODES COORDINATES
    const graph5 = new Graph5();

	//South Rooms

  graph5.addVertex('Photography Studio 511', 854, 427)
  graph5.addVertex('Control Room', 755, 493)
  graph5.addVertex('Radio Production Studio 510', 807, 456)
  graph5.addVertex('Sound Lock', 755, 456)
  graph5.addVertex('TV Production Studio 509', 617, 427) //509 Lecture Room
  graph5.addVertex('News Room 508', 490, 427)	//508
  graph5.addVertex('Magic Lab 507', 452, 427) //507
  graph5.addVertex('Lecture Room 506', 265, 427) //506
  graph5.addVertex('Lecture Room 505', 162, 427) //505

	//South Rooms out
 graph5.addVertex('Photograph5y Studio 511_Out', 854, 326)
  graph5.addVertex('Sound Lock_Out', 755, 326)
  graph5.addVertex('TV Production Studio 509_Out', 617, 326) //509 Lecture Room
  graph5.addVertex('News Room 508_Out', 490, 326)	//508
  graph5.addVertex('Magic Lab 507_Out', 452, 326) //507
  graph5.addVertex('Lecture Room 506_Out', 265, 326) //506
  graph5.addVertex('Lecture Room 505_Out', 162, 326) //505


	//North Rooms
  graph5.addVertex('Elevator Lobby', 370, 165)
  graph5.addVertex('Magic lab 501', 162, 217)
  graph5.addVertex('Art Studio 502', 228, 217) //502 Lab
  graph5.addVertex('Bathroom', 559, 164)
  graph5.addVertex('Magic Lab 503', 723, 217) //504
  graph5.addVertex('Lecture Room 504', 813, 217) //504
  graph5.addVertex('SMS Faculty', 935, 217) //504
	//North Rooms out
  graph5.addVertex('Elevator Lobby_Out', 370, 326)
  graph5.addVertex('Magic lab 501_Out', 162, 326)
  graph5.addVertex('Art Studio 502_Out', 228, 326)
  graph5.addVertex('Bathroom_Out', 559, 326)
   graph5.addVertex('Magic lab 503_Out', 723, 326)
  graph5.addVertex('Lecture Room 504_Out', 813, 326)
  graph5.addVertex('SMS Faculty_Out', 935, 326)






  //DRAWS LINES FROM A NODE TO THEIR NEAREST NEIGHBOURING NODES
  graph5.addEdge('Elevator Lobby', 'Elevator Lobby_Out');
  graph5.addEdge('Magic Lab 501', 'Magic Lab 501_Out');
  graph5.addEdge('Art Studio 502', 'Art Studio 502_Out');
  graph5.addEdge('Bathroom', 'Bathroom_Out');
  graph5.addEdge('Magic Lab 503', 'Magic Lab 503_Out');
  graph5.addEdge('Lecture Room 504', 'Lecture Room 504_Out');
  graph5.addEdge('SMS Faculty', 'SMS Faculty_Out');

  graph5.addEdge('Photograph5y Studio 511', 'Photograph5y Studio 511_Out');
  graph5.addEdge('Sound Lock', 'Sound Lock_Out');
  graph5.addEdge('TV Production Studio 509', 'TV Production Studio 509_Out');
  graph5.addEdge('News Room 508', 'News Room 508_Out');
  graph5.addEdge('Magic Lab 507', 'Magic Lab 507_Out');
  graph5.addEdge('Lecture Room 506', 'Lecture Room 506_Out');
  graph5.addEdge('Lecture Room 505', 'Lecture Room 505_Out');

  graph5.addEdge('Bathroom_Out', 'Elevator Lobby_Out');
  graph5.addEdge('Art Studio 502_Out', 'Elevator Lobby_Out');
  graph5.addEdge('News Room 508_Out', 'Elevator Lobby_Out');
  graph5.addEdge('Magic Lab 507_Out', 'Elevator Lobby_Out');
  graph5.addEdge('Lecture Room 506_Out', 'Elevator Lobby_Out');
  graph5.addEdge('Sound Lock', 'Radio Production Studio 510');
  graph5.addEdge('Sound Lock', 'Control Room');
  graph5.addEdge('Magic Lab 507_Out', 'News Room 508_Out');
  graph5.addEdge('TV Production Studio 509_Out', 'News Room 508_Out');
  graph5.addEdge('TV Production Studio 509_Out', 'Sound Lock_Out');
  graph5.addEdge('Photograph5y Studio 511_Out', 'Sound Lock_Out');
  graph5.addEdge('Photograph5y Studio 511_Out', 'Magic Lab 503_Out');
  graph5.addEdge('Photograph5y Studio 511_Out', 'SMS Faculty_Out');
  graph5.addEdge('Lecture Room 504', 'SMS Faculty_Out');
  graph5.addEdge('Photograph5y Studio 511_Out', 'Lecture Room 504_Out');
  graph5.addEdge('Magic Lab 503_Out', 'Lecture Room 504_Out');
  graph5.addEdge('Magic Lab 503_Out', 'TV Production Studio 509_Out');
  graph5.addEdge('Magic Lab 503_Out', 'Sound Lock_Out');
  graph5.addEdge('Lecture Room 504_Out', 'Sound Lock_Out');
  graph5.addEdge('Magic Lab 503_Out', 'Bathroom_Out');
  graph5.addEdge('TV Production Studio 509_Out', 'Bathroom_Out');
  graph5.addEdge('News Room 508_Out', 'Bathroom_Out');
  graph5.addEdge('Magic Lab 507_Out', 'Bathroom_Out');
  graph5.addEdge('Sound Lock_Out', 'Bathroom_Out');
  graph5.addEdge('Magic Lab 507_Out', 'Lecture Room 506_Out');
  graph5.addEdge('Magic Lab 507_Out', 'Art Studio 502_Out');
  graph5.addEdge('Magic Lab 505_Out', 'Lecture Room 506_Out');
  graph5.addEdge('Art Studio 502_Out', 'Lecture Room 506_Out');
  graph5.addEdge('Art Studio 502_Out', 'Magic lab 501_Out');
  graph5.addEdge('Art Studio 502_Out', 'Lecture Room 505_Out');
  graph5.addEdge('Lecture Room 505_Out', 'Magic lab 501_Out');

  const shortestPath5 = graph5.bfs(startVertex, endVertex);
  var canvas5 = document.getElementById('canvas5');
  var ctx5 = canvas5.getContext('2d');

  // Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);


  if (shortestPath5) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath5.join(' -> ')}`);

    // Draw the image on the canvas
    ctx5.drawImage(backgroundImage5, 0, 0, canvas5.width, canvas5.height);
    ctx5.drawImage(backgroundImage5, 0, 0, canvas5.width, canvas5.height);

    // Set the line color
    ctx5.strokeStyle = "red";
    ctx5.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath5.length - 1; i++) {
        const currentVertex5 = shortestPath5[i];
        const nextVertex5 = shortestPath5[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx5.beginPath();
        ctx5.moveTo(currentVertex5.x, currentVertex5.y);
        ctx5.lineTo(nextVertex5.x, nextVertex5.y);
        ctx5.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }
