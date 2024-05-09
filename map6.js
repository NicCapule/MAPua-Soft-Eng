document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas6 element
  var canvas6 = document.getElementById("canvas6");
  var ctx6 = canvas6.getContext("2d");

  // Create an image object
  var backgroundimage6 = new Image();

  // Set the source of the image
  backgroundimage6.src = "images/pic6.png"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas6
    backgroundimage6.onload = function () {
        // Set the canvas6 size to match the desired image size
        canvas6.width = 1073;
        canvas6.height = 595;

        // Draw the image on the canvas6 with the specified size
        ctx6.drawImage(backgroundimage6, 0, 0, 1073, 595);
    };
});

class Graph6 {
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
      vertex2.neighbors.push(vertex1); // for undirected graph6
  }

  bfs(startVertexId, endVertexId) {
      const visited = new Set();
      const queue = [[this.vertices.get(startVertexId)]];

      while (queue.length > 0) {
          const path = queue.shift();
          const currentVertex6 = path[path.length - 1]; //reduces the path.length by one for every node passed

          if (visited.has(currentVertex6.id)) {
              continue;
          }

          visited.add(currentVertex6.id);

          const neighbors = currentVertex6.neighbors;

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





  function findshortestpath66() {

    if (document.getElementById('initialFloorBookmark').value != 5) //change according to floor number
  		startVertex = 'Elevator Lobby'
  	else startVertex = document.getElementById('initialLocationBookmark').value;


  	if (document.getElementById('desiredFloorBookmark').value != 5) //change according to floor number
  		endVertex = 'Elevator Lobby'
  	else endVertex = document.getElementById('desiredLocationBookmark').value;
    var backgroundimage6 = new Image();
    backgroundimage6.src = "images/pic6.png";

    //NODES COORDINATES
    const graph6 = new graph6();





	//North Rooms
  graph6.addVertex('Elevator Lobby', 370, 165)
  graph6.addVertex('Computer Lab 601', 133, 217)
  graph6.addVertex('Drawing Lab 602', 233, 217)
  graph6.addVertex('Bathroom', 559, 164)
  graph6.addVertex('Multi-Faith Prayer Room"', 674, 217)
  graph6.addVertex('Pantry', 720, 217)
  graph6.addVertex('Accreditation Office', 809, 217)
  graph6.addVertex('Conference Room ', 847, 217)

	//North Rooms out
  graph6.addVertex('Elevator Lobby_Out', 370, 326)
  graph6.addVertex('Computer Lab 601_Out', 133, 326)
  graph6.addVertex('Drawing Lab 602_Out', 233, 326)
  graph6.addVertex('Bathroom_Out', 559, 326)
  graph6.addVertex('Multi-Faith Prayer Room_Out', 674, 326)
  graph6.addVertex('Pantry_Out', 720, 326)
  graph6.addVertex('Accreditation Office_Out', 809, 326)
  graph6.addVertex('Conference Room_Out', 847, 326)

	//South Rooms
  graph6.addVertex('Lecture Room 604', 168, 427)
  graph6.addVertex('Lecture Room 605', 270, 427)
  graph6.addVertex('Lecture Room 606', 385, 427)
  graph6.addVertex('Lecture Room 607', 487, 427)
  graph6.addVertex('ISLAM Prayer Room', 518, 427)
  graph6.addVertex('ETYSBM', 618, 427)
  graph6.addVertex('SLHS', 848, 427)

	//South Rooms out
  graph6.addVertex('Lecture Room 604_Out', 168, 326)
  graph6.addVertex('Lecture Room 605_Out', 270, 427)
  graph6.addVertex('Lecture Room 606_Out', 385, 427)
  graph6.addVertex('Lecture Room 607_Out', 487, 427)
  graph6.addVertex('ISLAM Prayer Room_Out', 518, 427)
  graph6.addVertex('ETYSBM_Out', 618, 427)
  graph6.addVertex('SLHS_Out', 848, 427)







  //DRAWS LINES FROM A NODE TO THEIR NEAREST NEIGHBOURING NODES
  graph6.addEdge('Elevator Lobby', 'Elevator Lobby_Out');
  graph6.addEdge('Computer Lab 601', 'Computer Lab 601_Out');
  graph6.addEdge('Drawing Lab 602', 'Drawing Lab 602_Out');
  graph6.addEdge('Bathroom', 'Bathroom_Out');
  graph6.addEdge('Multi-Faith Prayer Room', 'Multi-Faith Prayer Room_Out');
  graph6.addEdge('Pantry', 'Pantry_Out');
  graph6.addEdge('Accreditation Office', 'Accreditation Office_Out');
  graph6.addEdge('Conference Room', 'Conference Room_Out');

  graph6.addEdge('Lecture Room 604', 'Lecture Room 604_Out');
  graph6.addEdge('Lecture Room 605', 'Lecture Room 605_Out');
  graph6.addEdge('Lecture Room 606', 'Lecture Room 606_Out');
  graph6.addEdge('Lecture Room 607', 'Lecture Room 607_Out');
  graph6.addEdge('ISLAM Prayer Room', 'SLAM Prayer Room_Out');
  graph6.addEdge('ETYSBM', 'ETYSBM_Out');
  graph6.addEdge('SLHS', 'SLHS_Out');

  graph6.addEdge('Elevator Lobby_Out', 'Bathroom_Out');
  graph6.addEdge('Elevator Lobby_Out', 'Drawing Lab 602_Out');
  graph6.addEdge('Computer Lab 601_Out', 'Drawing Lab 602_Out');
  graph6.addEdge('Computer Lab 601_Out', 'Lecture Room 604_Out');
  graph6.addEdge('Computer Lab 601_Out', 'Lecture Room 605_Out');
  graph6.addEdge('Lecture Room 605_Out', 'Drawing Lab 602_Out');
  graph6.addEdge('Lecture Room 605_Out', 'Lecture Room 606_Out');
  graph6.addEdge('Drawing Lab 602_Out', 'Lecture Room 606_Out');
  graph6.addEdge('Lecture Room 604_Out', 'Drawing Lab 602_Out');
  graph6.addEdge('Lecture Room 607_Out', 'Lecture Room 606_Out');
  graph6.addEdge('Lecture Room 607_Out', 'ISLAM Prayer Room_Out');
  graph6.addEdge('Lecture Room 607_Out', 'Bathroom_Out');
  graph6.addEdge('Elevator Lobby_Out', 'Lecture Room 606_Out');
  graph6.addEdge('Elevator Lobby_Out', 'Lecture Room 607_Out');
  graph6.addEdge('Elevator Lobby_Out', 'Lecture Room 605_Out');
  graph6.addEdge('Elevator Lobby_Out', 'ISLAM Prayer Room_Out');
  graph6.addEdge('Bathroom_Out', 'ISLAM Prayer Room_Out');
  graph6.addEdge('ETYSBM_Out', 'ISLAM Prayer Room_Out');
  graph6.addEdge('ETYSBM_Out', 'Bathroom_Out');
  graph6.addEdge('ETYSBM_Out', 'Multi-Faith Prayer Room_Out');
  graph6.addEdge('ETYSBM_Out', 'SLHS_Out');
  graph6.addEdge('ETYSBM_Out', 'SLHS_Out');
  graph6.addEdge('Pantry_Out', 'SLHS_Out');
  graph6.addEdge('Pantry_Out', 'Accreditation Office_Out');
  graph6.addEdge('SLHS_Out', 'Accreditation Office_Out');
  graph6.addEdge('SLHS_Out', 'Conference Room_Out');
  graph6.addEdge('Accreditation Office_Out', 'Conference Room_Out');
  graph6.addEdge('Pantry_Out', 'ETYSB_Out');
  graph6.addEdge('Accreditation Office_Out', 'ETYSB_Out');
  graph6.addEdge('Multi-Faith Prayer Room', 'Bathroom_Out');
  graph6.addEdge('Multi-Faith Prayer Room', 'Pantry_Out');
  const shortestpath6 = graph6.bfs(startVertex, endVertex);
  var canvas6 = document.getElementById('canvas6');
  var ctx6 = canvas6.getContext('2d');

  // Clear the canvas6
  //ctx6.clearRect(0, 0, canvas6.width, canvas6.height);


  if (shortestpath6) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestpath6.join(' -> ')}`);

    // Draw the image on the canvas6
    ctx6.drawImage(backgroundimage6, 0, 0, canvas6.width, canvas6.height);
    ctx6.drawImage(backgroundimage6, 0, 0, canvas6.width, canvas6.height);

    // Set the line color
    ctx6.strokeStyle = "red";
    ctx6.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestpath6.length - 1; i++) {
        const currentVertex6 = shortestpath6[i];
        const nextVertex6 = shortestpath6[i + 1];

        // Draw a line between currentVertex6 and nextVertex6
        ctx6.beginPath();
        ctx6.moveTo(currentVertex6.x, currentVertex6.y);
        ctx6.lineTo(nextVertex6.x, nextVertex6.y);
        ctx6.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }
