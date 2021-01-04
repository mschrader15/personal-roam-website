import sigma from './sigmajs/sigma.require'

s = sigma.parsers.json('../../graph_data/test.json', {
    container: 'container',
    settings: {
      defaultNodeColor: '#ec5148'
    }
  });

  var config = {
    nodeMargin: 0.1,
    scaleNodes: 1.05,
    gridSize: 75,
    easing: 'quadraticInOut', // animation transition function
    duration: 10000   // animation duration. Long here for the purposes of this example only
  };

  var listener = s.configNoverlap(config);

  listener.bind('start stop interpolate', function(event) {
    console.log(event.type);
  });

  // Start the algorithm:
s.startNoverlap();