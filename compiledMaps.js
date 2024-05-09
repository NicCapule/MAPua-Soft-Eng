document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Create an image object
  var backgroundImage = new Image();



  // Set the source of the image
  if (document.getElementById('initialFloorBookmark' == 5{
  backgroundImage.src = "images/pic5.png"; // Replace with the actual path to your image
  }
  if (document.getElementById('initialFloorBookmark' == 6{
   backgroundImage.src = "images/pic6.png";
  }
  
  // Once the image is loaded, draw it on the canvas
    backgroundImage.onload = function () {
        // Set the canvas size to match the desired image size
        canvas.width = 1073;
        canvas.height = 595;

        // Draw the image on the canvas with the specified size
        ctx.drawImage(backgroundImage, 0, 0, 1073, 595);
    };
});

class Graph {
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




  
  function findShortestPath() {
	if (document.getElementById('initialFloorBookmark').value != 5)
		startVertex = 'Elevator Lobby'
	else startVertex = document.getElementById('initialLocationBookmark').value;

    
	if (document.getElementById('desiredFloorBookmark').value != 5)
		endVertex = 'Elevator Lobby'
	else endVertex = document.getElementById('desiredLocationBookmark').value;

	
	
    
    var backgroundImage = new Image();
	if (document.getElementById('initialFloorBookmark' == 5{
    backgroundImage.src = "images/pic5.png"; 
	}
	if (document.getElementById('initialFloorBookmark' == 6{
	backgroundImage.src = "images/pic6.png";
	}
    //NODES COORDINATES
	if (document.getElementById('initialFloorBookmark' == 5{
    const graph = new Graph();
	
	//South Rooms
	
  graph.addVertex('Photography Studio 511', 854, 427)
  graph.addVertex('Control Room', 755, 493)
  graph.addVertex('Radio Production Studio 510', 807, 456)
  graph.addVertex('Sound Lock', 755, 456)
  graph.addVertex('TV Production Studio 509', 617, 427) //509 Lecture Room
  graph.addVertex('News Room 508', 490, 427)	//508
  graph.addVertex('Magic Lab 507', 452, 427) //507
  graph.addVertex('Lecture Room 506', 265, 427) //506
  graph.addVertex('Lecture Room 505', 162, 427) //505
  
	//South Rooms out
 graph.addVertex('Photography Studio 511_Out', 854, 326)
  graph.addVertex('Sound Lock_Out', 755, 326)
  graph.addVertex('TV Production Studio 509_Out', 617, 326) //509 Lecture Room
  graph.addVertex('News Room 508_Out', 490, 326)	//508
  graph.addVertex('Magic Lab 507_Out', 452, 326) //507
  graph.addVertex('Lecture Room 506_Out', 265, 326) //506
  graph.addVertex('Lecture Room 505_Out', 162, 326) //505
  

	//North Rooms
  graph.addVertex('Elevator Lobby', 370, 165)
  graph.addVertex('Magic lab 501', 162, 217)
  graph.addVertex('Art Studio 502', 228, 217) //502 Lab
  graph.addVertex('Bathroom', 559, 164)
  graph.addVertex('Magic Lab 503', 723, 217) //504
  graph.addVertex('Lecture Room 504', 813, 217) //504
  graph.addVertex('SMS Faculty', 935, 217) //504
	//North Rooms out
  graph.addVertex('Elevator Lobby_Out', 370, 326)
  graph.addVertex('Magic lab 501_Out', 162, 326)
  graph.addVertex('Art Studio 502_Out', 228, 326)
  graph.addVertex('Bathroom_Out', 559, 326)
   graph.addVertex('Magic lab 503_Out', 723, 326) 
  graph.addVertex('Lecture Room 504_Out', 813, 326) 
  graph.addVertex('SMS Faculty_Out', 935, 326) 
  
  
  

  
  
  //DRAWS LINES FROM A NODE TO THEIR NEAREST NEIGHBOURING NODES
  graph.addEdge('Elevator Lobby', 'Elevator Lobby_Out'); 
  graph.addEdge('Magic Lab 501', 'Magic Lab 501_Out'); 
  graph.addEdge('Art Studio 502', 'Art Studio 502_Out'); 
  graph.addEdge('Bathroom', 'Bathroom_Out'); 
  graph.addEdge('Magic Lab 503', 'Magic Lab 503_Out'); 
  graph.addEdge('Lecture Room 504', 'Lecture Room 504_Out'); 
  graph.addEdge('SMS Faculty', 'SMS Faculty_Out'); 
  
  graph.addEdge('Photography Studio 511', 'Photography Studio 511_Out');
  graph.addEdge('Sound Lock', 'Sound Lock_Out');
  graph.addEdge('TV Production Studio 509', 'TV Production Studio 509_Out');
  graph.addEdge('News Room 508', 'News Room 508_Out');
  graph.addEdge('Magic Lab 507', 'Magic Lab 507_Out'); 
  graph.addEdge('Lecture Room 506', 'Lecture Room 506_Out'); 
  graph.addEdge('Lecture Room 505', 'Lecture Room 505_Out'); 
  
  graph.addEdge('Bathroom_Out', 'Elevator Lobby_Out'); 
  graph.addEdge('Art Studio 502_Out', 'Elevator Lobby_Out'); 
  graph.addEdge('News Room 508_Out', 'Elevator Lobby_Out');
  graph.addEdge('Magic Lab 507_Out', 'Elevator Lobby_Out'); 
  graph.addEdge('Lecture Room 506_Out', 'Elevator Lobby_Out'); 
  graph.addEdge('Sound Lock', 'Radio Production Studio 510'); 
  graph.addEdge('Sound Lock', 'Control Room'); 
  graph.addEdge('Magic Lab 507_Out', 'News Room 508_Out'); 
  graph.addEdge('TV Production Studio 509_Out', 'News Room 508_Out'); 
  graph.addEdge('TV Production Studio 509_Out', 'Sound Lock_Out'); 
  graph.addEdge('Photography Studio 511_Out', 'Sound Lock_Out'); 
  graph.addEdge('Photography Studio 511_Out', 'Magic Lab 503_Out'); 
  graph.addEdge('Photography Studio 511_Out', 'SMS Faculty_Out'); 
  graph.addEdge('Lecture Room 504', 'SMS Faculty_Out'); 
  graph.addEdge('Photography Studio 511_Out', 'Lecture Room 504_Out'); 
  graph.addEdge('Magic Lab 503_Out', 'Lecture Room 504_Out'); 
  graph.addEdge('Magic Lab 503_Out', 'TV Production Studio 509_Out'); 
  graph.addEdge('Magic Lab 503_Out', 'Sound Lock_Out'); 
  graph.addEdge('Lecture Room 504_Out', 'Sound Lock_Out'); 
  graph.addEdge('Magic Lab 503_Out', 'Bathroom_Out'); 
  graph.addEdge('TV Production Studio 509_Out', 'Bathroom_Out'); 
  graph.addEdge('News Room 508_Out', 'Bathroom_Out'); 
  graph.addEdge('Magic Lab 507_Out', 'Bathroom_Out'); 
  graph.addEdge('Sound Lock_Out', 'Bathroom_Out'); 
  graph.addEdge('Magic Lab 507_Out', 'Lecture Room 506_Out'); 
  graph.addEdge('Magic Lab 507_Out', 'Art Studio 502_Out'); 
  graph.addEdge('Magic Lab 505_Out', 'Lecture Room 506_Out'); 
  graph.addEdge('Art Studio 502_Out', 'Lecture Room 506_Out'); 
  graph.addEdge('Art Studio 502_Out', 'Magic lab 501_Out'); 
  graph.addEdge('Art Studio 502_Out', 'Lecture Room 505_Out'); 
  graph.addEdge('Lecture Room 505_Out', 'Magic lab 501_Out'); 

  const shortestPath = graph.bfs(startVertex, endVertex);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath.join(' -> ')}`);

    // Draw the image on the canvas
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Set the line color
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath.length - 1; i++) {
        const currentVertex = shortestPath[i];
        const nextVertex = shortestPath[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx.beginPath();
        ctx.moveTo(currentVertex.x, currentVertex.y);
        ctx.lineTo(nextVertex.x, nextVertex.y);
        ctx.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }
    if (document.getElementById('initialFloorBookmark' == 6{
       const graph = new Graph();
	
  
 


	//North Rooms
  graph.addVertex('Elevator Lobby', 370, 165)
  graph.addVertex('Computer Lab 601', 133, 217)
  graph.addVertex('Drawing Lab 602', 233, 217)
  graph.addVertex('Bathroom', 559, 164)
  graph.addVertex('Multi-Faith Prayer Room"', 674, 217)
  graph.addVertex('Pantry', 720, 217)
  graph.addVertex('Accreditation Office', 809, 217)
  graph.addVertex('Conference Room ', 847, 217)

	//North Rooms out
  graph.addVertex('Elevator Lobby_Out', 370, 326)
  graph.addVertex('Computer Lab 601_Out', 133, 326)
  graph.addVertex('Drawing Lab 602_Out', 233, 326)
  graph.addVertex('Bathroom_Out', 559, 326)
  graph.addVertex('Multi-Faith Prayer Room_Out', 674, 326)
  graph.addVertex('Pantry_Out', 720, 326)
  graph.addVertex('Accreditation Office_Out', 809, 326)
  graph.addVertex('Conference Room_Out', 847, 326)
  
	//South Rooms
  graph.addVertex('Lecture Room 604', 168, 427)
  graph.addVertex('Lecture Room 605', 270, 427)
  graph.addVertex('Lecture Room 606', 385, 427)
  graph.addVertex('Lecture Room 607', 487, 427)
  graph.addVertex('ISLAM Prayer Room', 518, 427)
  graph.addVertex('ETYSBM', 618, 427)
  graph.addVertex('SLHS', 848, 427)
  
	//South Rooms out
  graph.addVertex('Lecture Room 604_Out', 168, 326)
  graph.addVertex('Lecture Room 605_Out', 270, 427)
  graph.addVertex('Lecture Room 606_Out', 385, 427)
  graph.addVertex('Lecture Room 607_Out', 487, 427)
  graph.addVertex('ISLAM Prayer Room_Out', 518, 427)
  graph.addVertex('ETYSBM_Out', 618, 427)
  graph.addVertex('SLHS_Out', 848, 427)

  
  
  

  
  
  //DRAWS LINES FROM A NODE TO THEIR NEAREST NEIGHBOURING NODES
  graph.addEdge('Elevator Lobby', 'Elevator Lobby_Out');
  graph.addEdge('Computer Lab 601', 'Computer Lab 601_Out');
  graph.addEdge('Drawing Lab 602', 'Drawing Lab 602_Out');
  graph.addEdge('Bathroom', 'Bathroom_Out');
  graph.addEdge('Multi-Faith Prayer Room', 'Multi-Faith Prayer Room_Out');
  graph.addEdge('Pantry', 'Pantry_Out');
  graph.addEdge('Accreditation Office', 'Accreditation Office_Out');
  graph.addEdge('Conference Room', 'Conference Room_Out');
  
  graph.addEdge('Lecture Room 604', 'Lecture Room 604_Out');
  graph.addEdge('Lecture Room 605', 'Lecture Room 605_Out');
  graph.addEdge('Lecture Room 606', 'Lecture Room 606_Out');
  graph.addEdge('Lecture Room 607', 'Lecture Room 607_Out');
  graph.addEdge('ISLAM Prayer Room', 'SLAM Prayer Room_Out');
  graph.addEdge('ETYSBM', 'ETYSBM_Out');
  graph.addEdge('SLHS', 'SLHS_Out');
  
  graph.addEdge('Elevator Lobby_Out', 'Bathroom_Out');
  graph.addEdge('Elevator Lobby_Out', 'Drawing Lab 602_Out');
  graph.addEdge('Computer Lab 601_Out', 'Drawing Lab 602_Out');
  graph.addEdge('Computer Lab 601_Out', 'Lecture Room 604_Out');
  graph.addEdge('Computer Lab 601_Out', 'Lecture Room 605_Out');
  graph.addEdge('Lecture Room 605_Out', 'Drawing Lab 602_Out');
  graph.addEdge('Lecture Room 605_Out', 'Lecture Room 606_Out');
  graph.addEdge('Drawing Lab 602_Out', 'Lecture Room 606_Out');
  graph.addEdge('Lecture Room 604_Out', 'Drawing Lab 602_Out');
  graph.addEdge('Lecture Room 607_Out', 'Lecture Room 606_Out');
  graph.addEdge('Lecture Room 607_Out', 'ISLAM Prayer Room_Out');
  graph.addEdge('Lecture Room 607_Out', 'Bathroom_Out');
  graph.addEdge('Elevator Lobby_Out', 'Lecture Room 606_Out');
  graph.addEdge('Elevator Lobby_Out', 'Lecture Room 607_Out');
  graph.addEdge('Elevator Lobby_Out', 'Lecture Room 605_Out');
  graph.addEdge('Elevator Lobby_Out', 'ISLAM Prayer Room_Out');
  graph.addEdge('Bathroom_Out', 'ISLAM Prayer Room_Out');
  graph.addEdge('ETYSBM_Out', 'ISLAM Prayer Room_Out');
  graph.addEdge('ETYSBM_Out', 'Bathroom_Out');
  graph.addEdge('ETYSBM_Out', 'Multi-Faith Prayer Room_Out');
  graph.addEdge('ETYSBM_Out', 'SLHS_Out');
  graph.addEdge('ETYSBM_Out', 'SLHS_Out');
  graph.addEdge('Pantry_Out', 'SLHS_Out');
  graph.addEdge('Pantry_Out', 'Accreditation Office_Out');
  graph.addEdge('SLHS_Out', 'Accreditation Office_Out');
  graph.addEdge('SLHS_Out', 'Conference Room_Out');
  graph.addEdge('Accreditation Office_Out', 'Conference Room_Out');
  graph.addEdge('Pantry_Out', 'ETYSB_Out');
  graph.addEdge('Accreditation Office_Out', 'ETYSB_Out');
  graph.addEdge('Multi-Faith Prayer Room', 'Bathroom_Out');
  graph.addEdge('Multi-Faith Prayer Room', 'Pantry_Out');
  const shortestPath = graph.bfs(startVertex, endVertex);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath.join(' -> ')}`);

    // Draw the image on the canvas
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Set the line color
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath.length - 1; i++) {
        const currentVertex = shortestPath[i];
        const nextVertex = shortestPath[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx.beginPath();
        ctx.moveTo(currentVertex.x, currentVertex.y);
        ctx.lineTo(nextVertex.x, nextVertex.y);
        ctx.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}
  }
  
  }
  
  
  